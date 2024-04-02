/** @format */

import React, { useContext } from 'react';
import styles from 'components/styles/filter.module.css';
import { Formik, Field, Form } from 'formik';
import clsx from 'clsx';
import Icon from 'components/Icon';
import data from 'components/data/teachers.json';
import { MainContext } from 'components/Helpers';

function Filter() {
	const { setLanguage, setLevel, setPrice } = useContext(MainContext);
	const allLevel = new Set();
	const allLanguage = new Set();

	data.forEach(({ levels, languages }) => {
		levels.forEach(l => allLevel.add(l));
		languages.forEach(l => allLanguage.add(l));
	});

	return (
		<Formik
			initialValues={{
				language: '',
				level: '',
				price: '',
			}}
		>
			{({ values, handleChange }) => (
				<Form autoComplete='off' className={styles.form}>
					<label className={styles.label}>
						Languages
						<Field
							as='select'
							name='language'
							value={values.language}
							className={clsx(styles.field_languages, styles.field_main)}
							onChange={e => {
								handleChange(e);
								setLanguage(e.target.value);
							}}
						>
							<option value=''>---</option>
							{Array.from(allLanguage).map((l, idx) => (
								<option key={idx} value={l}>
									{l}
								</option>
							))}
						</Field>
						<Icon name={'chevron-down'} className={styles.icon_select} />
					</label>
					<label className={styles.label}>
						Level of knowledge
						<Field
							as='select'
							name='level'
							value={values.level}
							className={clsx(styles.field_level, styles.field_main)}
							onChange={e => {
								handleChange(e);
								setLevel(e.target.value);
							}}
						>
							<option value=''>---</option>
							{Array.from(allLevel).map((l, idx) => (
								<option key={idx} value={l}>
									{l}
								</option>
							))}
						</Field>
						<Icon name={'chevron-down'} className={styles.icon_select} />
					</label>
					<label className={styles.label}>
						Price
						<Field
							as='select'
							name='price'
							value={values.price}
							className={clsx(styles.field_price, styles.field_main)}
							onChange={e => {
								handleChange(e);
								setPrice(e.target.value);
							}}
						>
							<option value=''>---</option>
							{[...Array(6)].map((_, idx) => (
								<option key={idx} value={(idx + 1) * 10}>
									{(idx + 1) * 10} $
								</option>
							))}
						</Field>
						<Icon name={'chevron-down'} className={styles.icon_select} />
					</label>
				</Form>
			)}
		</Formik>
	);
}

export default Filter;
