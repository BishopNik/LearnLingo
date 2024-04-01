/** @format */

import Teacher from 'components/Teacher';
import React from 'react';
import data from 'components/data/teachers.json';

function Teachers() {
	return (
		<div style={{ backgroundColor: '#F8F8F8', marginBottom: '32px' }}>
			<Teacher teacher={data[0]} />
			<Teacher teacher={data[1]} />
			<Teacher teacher={data[2]} />
			<Teacher teacher={data[3]} />
		</div>
	);
}

export default Teachers;
