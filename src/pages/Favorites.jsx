/** @format */

import React, { useState } from 'react';
import Teacher from 'components/Teacher';
import styles from 'components/styles/teachers.module.css';
import BookTrialLesson from 'components/Modal/BookTrialLesson';
import { readToSessionStorage } from 'components/Helpers';

function Favorites() {
	const [inFavorites, setInFavorites] = useState(readToSessionStorage());

	const refresh = () => setInFavorites(readToSessionStorage());

	return (
		<>
			<div className={styles.main} style={{ paddingTop: '50px' }}>
				{inFavorites.map(d => (
					<Teacher key={d.name + d.surname + Date.now()} teacher={d} refresh={refresh} />
				))}
			</div>

			<BookTrialLesson />
		</>
	);
}

export default Favorites;
