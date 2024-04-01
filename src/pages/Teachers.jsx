/** @format */

import Teacher from 'components/Teacher';
import React from 'react';
import data from 'components/data/teachers.json';
import styles from 'components/styles/teachers.module.css';

function Teachers() {
	return (
		<div className={styles.main}>
			<Teacher teacher={data[0]} />
			<Teacher teacher={data[1]} />
			<Teacher teacher={data[2]} />
			<Teacher teacher={data[3]} />
		</div>
	);
}

export default Teachers;
