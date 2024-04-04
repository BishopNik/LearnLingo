/** @format */

import React, { useEffect, useState } from 'react';
import Teacher from 'components/Teacher';
import data from 'components/data/teachers.json';
import styles from 'components/styles/teachers.module.css';
import Filter from 'components/Filter';
import BookTrialLesson from 'components/Modal/BookTrialLesson';
import { useMainContext } from 'components/Helpers';
import { theme } from '../constants/theme';

function Teachers() {
	const { idxColor, language, level, price } = useMainContext();
	const [filterTeacher, setFilterTeacher] = useState(data);

	useEffect(() => {
		const filteredData =
			language || level || price
				? data.filter(
						i =>
							(i.languages.includes(language) || !language) &&
							(i.levels.includes(level) || !level) &&
							(i.price_per_hour <= price || !price)
				  )
				: data;

		setFilterTeacher(filteredData);
	}, [language, level, price]);

	return (
		<>
			<Filter />
			<div className={styles.main}>
				{filterTeacher.map((d, idx) => (
					<Teacher key={idx} teacher={d} />
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
