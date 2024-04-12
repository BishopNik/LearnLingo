/** @format */

import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, get, query } from 'firebase/database';
import { firestore, database } from 'helpers';

export function saveToSessionStorage(value) {
	try {
		const favorites = readToSessionStorage();
		if (
			favorites.filter(t => JSON.stringify(t) === JSON.stringify(value)).length &&
			favorites.length !== 0
		)
			return;
		const newFavorites = [...favorites, value];
		sessionStorage.setItem('favoritesTeachers', JSON.stringify(newFavorites));
	} catch (error) {
		console.error('Error saving to sessionStorage:', error);
	}
}

export function deleteToSessionStorage(value) {
	try {
		const favorites = readToSessionStorage();
		const newFavorites = favorites.filter(t => JSON.stringify(t) !== JSON.stringify(value));
		sessionStorage.setItem('favoritesTeachers', JSON.stringify(newFavorites));
	} catch (error) {
		console.error('Error saving to sessionStorage:', error);
	}
}

export function readToSessionStorage() {
	try {
		return JSON.parse(sessionStorage.getItem('favoritesTeachers') || '[]');
	} catch (error) {
		console.error('Error reading to sessionStorage:', error);
	}
}

export async function saveToFirestoreStorage(userUid, likedTeachers) {
	try {
		const usersRef = collection(firestore, 'users');

		await setDoc(
			doc(usersRef, userUid),
			{
				likedTeachers: likedTeachers,
			},
			{ merge: true }
		);
	} catch (error) {
		console.error('Error liked teacher:', error);
	}
}

export async function readToFirestoreStorage(userUid) {
	try {
		const usersRef = collection(firestore, 'users');
		const userDoc = doc(usersRef, userUid);

		const docSnapshot = await getDoc(userDoc);
		if (docSnapshot.exists()) {
			const userData = docSnapshot.data();
			const likedTeachers = userData.likedTeachers || [];
			return likedTeachers;
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error reading liked teacher:', error);
	}
}

export async function readToFirestoreStorageOne(uid) {
	try {
		const queryTeacher = query(ref(database, `/${uid}`));

		const snapshot = await get(queryTeacher);

		if (snapshot.exists()) {
			return snapshot.val();
		} else {
			return null;
		}
	} catch (error) {
		console.error('Error fetching teacher', error);
		return null;
	}
}

export const readSettingsUser = async user => {
	const userRef = doc(firestore, 'users', user.uid);
	const docSnap = await getDoc(userRef);

	if (docSnap.exists()) {
		return docSnap.data();
	}
	return null;
};
