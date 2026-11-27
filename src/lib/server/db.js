import { MongoClient } from 'mongodb';
import { DB_URI } from '$app/env/private';

const DB_NAME = 'piano-trainer';

/** @type {Promise<MongoClient> | undefined} */
let clientPromise;

/**
 * Returns a shared, lazily connected MongoClient.
 * A failed connection is not cached, so the next request retries.
 */
function getClient() {
	if (!clientPromise) {
		const client = new MongoClient(DB_URI, {
			// Fail fast when the database is unreachable instead of hanging for 30s
			serverSelectionTimeoutMS: 5000
		});
		clientPromise = client.connect().catch((error) => {
			clientPromise = undefined;
			throw error;
		});
	}
	return clientPromise;
}

async function getDb() {
	const client = await getClient();
	return client.db(DB_NAME);
}

/**
 * @typedef {{ id: string, title: string, composer: string }} SongSummary
 */

/**
 * Returns all songs, sorted alphabetically by title.
 * @returns {Promise<SongSummary[]>}
 */
export async function getSongs() {
	const db = await getDb();
	const songs = await db
		.collection('songs')
		.find({}, { projection: { title: 1, composer: 1 } })
		.collation({ locale: 'de' })
		.sort({ title: 1 })
		.toArray();

	return songs.map((song) => ({
		id: song._id.toString(),
		title: song.title ?? 'Ohne Titel',
		composer: song.composer ?? ''
	}));
}
