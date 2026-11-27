import { getSongs } from '#lib/server/db.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		return { songs: await getSongs(), dbError: false };
	} catch (error) {
		console.error('Failed to load songs from database:', error);
		return { songs: [], dbError: true };
	}
}
