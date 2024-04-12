/** @format */

import React, { useEffect, useState } from 'react';
import Teacher from 'components/Teacher';
import styles from 'components/styles/teachers.module.css';
import BookTrialLesson from 'components/Modal/BookTrialLesson';
import { readToFirestoreStorageOne, useMainContext } from 'helpers';

function Favorites() {
	const { likedTeachers } = useMainContext();
	const [inFavorites, setInFavorites] = useState([]);
	const [load, setLoad] = useState(false);

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
			setLoad(true);
		};

		readLikedTeacher();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const newInFavorites = inFavorites.filter(d => likedTeachers.includes(d.idx));
		if (inFavorites.length !== newInFavorites.length) setInFavorites(newInFavorites);
	}, [inFavorites, likedTeachers]);

	return (
		<div className={styles.container}>
			<div className={styles.main} style={{ paddingTop: '50px' }}>
				{inFavorites.length > 0
					? inFavorites.map(d => <Teacher key={d.idx} idx={d.idx} teacher={d.teacher} />)
					: load && <h1 className={styles.empty}>Favorites empty</h1>}
			</div>

			<BookTrialLesson />
		</div>
	);
}

export default Favorites;
