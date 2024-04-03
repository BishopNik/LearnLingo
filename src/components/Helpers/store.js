/** @format */

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
