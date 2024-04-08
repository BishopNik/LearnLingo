/** @format */

import React, { useEffect, useState } from 'react';
import Teacher from 'components/Teacher';
import styles from 'components/styles/teachers.module.css';
import BookTrialLesson from 'components/Modal/BookTrialLesson';
import { readToFirestoreStorageOne, useMainContext } from 'components/Helpers';

function Favorites() {
	const { likedTeachers } = useMainContext();
	const [inFavorites, setInFavorites] = useState([]);

	useEffect(() => {
		const readLikedTeacher = async () => {
			const liked = [];

			await Promise.all(
				likedTeachers.map(async uid => {
					const data = await readToFirestoreStorageOne(uid);
					liked.push({ idx: uid, teacher: data });
				})
			);

			setInFavorites(liked);
		};

		readLikedTeacher();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const newInFavorites = inFavorites.filter(d => likedTeachers.includes(d.idx));
		if (inFavorites.length !== newInFavorites.length) setInFavorites(newInFavorites);
	}, [inFavorites, likedTeachers]);

	return (
		<>
			<div className={styles.main} style={{ paddingTop: '50px' }}>
				{inFavorites.map(d => (
					<Teacher key={d.idx} idx={d.idx} teacher={d.teacher} />
				))}
			</div>

			<BookTrialLesson />
		</>
	);
}

export default Favorites;
