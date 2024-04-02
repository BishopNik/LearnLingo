/** @format */

import React, { useContext } from 'react';
import Teacher from 'components/Teacher';
import data from 'components/data/teachers.json';
import styles from 'components/styles/teachers.module.css';
import Filter from 'components/Filter';
import BookTrialLesson from 'components/Modal/BookTrialLesson';
import { MainContext } from 'components/Helpers';
import { theme } from '../constants/theme';

function Teachers() {
	const { idxColor } = useContext(MainContext);

	return (
		<>
			<Filter />
			<div className={styles.main}>
				<Teacher teacher={data[0]} />
				<Teacher teacher={data[1]} />
				<Teacher teacher={data[2]} />
				<Teacher teacher={data[3]} />
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
