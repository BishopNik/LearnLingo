/** @format */

import React, { useEffect, useState } from 'react';
import { ref, get, query, limitToFirst, startAt, orderByKey } from 'firebase/database';
import Teacher from 'components/Teacher';
import styles from 'components/styles/teachers.module.css';
import Filter from 'components/Filter';
import BookTrialLesson from 'components/Modal/BookTrialLesson';
import { useMainContext, database } from 'components/Helpers';
import { theme } from 'constants/theme';

function Teachers() {
	const { idxColor, language, level, price, setLanguage, setLevel, setPrice } = useMainContext();
	const [teachers, setTeachers] = useState([]);
	const [filterTeacher, setFilterTeacher] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setLanguage('');
		setLevel('');
		setPrice('');
	}, [setLanguage, setLevel, setPrice]);

	useEffect(() => {
		const fetchingTeacher = async () => {
			const databaseRef = ref(database);

			const queryTeacher = query(
				databaseRef,
				orderByKey(),
				startAt(String((page - 1) * 4)),
				limitToFirst(4)
			);

			const teachers = [];

			const snapshot = await get(queryTeacher);

			snapshot.forEach(childSnapshot => {
				teachers.push(childSnapshot.val());
			});
			setTeachers(oldState => [...oldState, ...teachers]);
		};

		fetchingTeacher();
	}, [page]);

	useEffect(() => {
		const filteredData = teachers
			.map((item, index) => {
				return { ...item, teacherIndex: index };
			})
			.filter(
				i =>
					(i.languages.includes(language) || !language) &&
					(i.levels.includes(level) || !level) &&
					(i.price_per_hour <= price || !price)
			);

		setFilterTeacher(filteredData);
	}, [language, level, price, teachers]);

	return (
		<>
			<Filter />
			<div className={styles.main}>
				{filterTeacher.map(d => (
					<Teacher key={d.uid} idx={d.teacherIndex} teacher={d} />
				))}
			</div>
			{page < 8 && (
				<div className={styles.button_cont}>
					<button
						className={styles.button_loadmore}
						style={{ backgroundColor: theme[idxColor].property.buttonGetStart }}
						type='button'
						onClick={() => setPage(page + 1)}
					>
						Load more
					</button>
				</div>
			)}
			<BookTrialLesson />
		</>
	);
}

export default Teachers;
