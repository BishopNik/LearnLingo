/** @format */

import Teacher from 'components/Teacher';
import React from 'react';
import data from 'components/data/teachers.json';
import styles from 'components/styles/teachers.module.css';
import Filter from 'components/Filter';
import BookTrialLesson from 'components/Modal/BookTrialLesson';

function Teachers() {
	return (
		<>
			<Filter />
			<div className={styles.main}>
				<Teacher teacher={data[0]} />
				<Teacher teacher={data[1]} />
				<Teacher teacher={data[2]} />
				<Teacher teacher={data[3]} />
			</div>
			<BookTrialLesson />
		</>
	);
}

export default Teachers;
