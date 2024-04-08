/** @format */

import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import Teacher from 'components/Teacher';
import styles from 'components/styles/teachers.module.css';
import Filter from 'components/Filter';
import BookTrialLesson from 'components/Modal/BookTrialLesson';
import { useMainContext, database, toastError } from 'components/Helpers';
import { theme } from 'constants/theme';

function Teachers() {
	const { idxColor, language, level, price } = useMainContext();
	const [filterTeacher, setFilterTeacher] = useState([]);

	useEffect(() => {
		const databaseRef = ref(database);
		get(databaseRef)
			.then(snapshot => {
				const filteredData = snapshot
					.val()
					.filter(
						i =>
							(i.languages.includes(language) || !language) &&
							(i.levels.includes(level) || !level) &&
							(i.price_per_hour <= price || !price)
					);

				setFilterTeacher(filteredData);
			})
			.catch(er => toastError(`Error loading data: ${er}`));
	}, [language, level, price]);

	return (
		<>
			<Filter />
			<div className={styles.main}>
				{filterTeacher.map((d, idx) => (
					<Teacher key={idx} idx={idx} teacher={d} />
				))}
			</div>
			<div className={styles.button_cont}>
				<button
					className={styles.button_loadmore}
					style={{ backgroundColor: theme[idxColor].property.buttonGetStart }}
					type='button'
					onClick={() => console.log('Load more')}
				>
					Load more
				</button>
			</div>
			<BookTrialLesson />
		</>
	);
}

export default Teachers;
