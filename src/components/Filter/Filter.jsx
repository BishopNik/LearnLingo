/** @format */

import React, { useCallback, useEffect } from 'react';
import styles from 'components/styles/filter.module.css';
import { Formik, Field, Form } from 'formik';
import clsx from 'clsx';
import Icon from 'components/Icon';
import data from 'components/data/teachers.json';
import { useMainContext } from 'helpers';

function Filter() {
	const { language, level, price, setLanguage, setLevel, setPrice } = useMainContext();
	const allLevel = new Set();
	const allLanguage = new Set();

	data.forEach(({ levels, languages }) => {
		levels.forEach(l => allLevel.add(l));
		languages.forEach(l => allLanguage.add(l));
	});

	const setInitialState = useCallback(() => {
		setLanguage('');
		setLevel('');
		setPrice('');
	}, [setLanguage, setLevel, setPrice]);

	useEffect(() => {
		setInitialState();
	}, [setInitialState]);

	return (
		<Formik
			initialValues={{
				language: '',
				level: '',
				price: '',
			}}
			onReset={() => {
				setInitialState();
			}}
		>
			{({ handleChange }) => (
				<Form autoComplete='off' className={styles.form}>
					<label className={styles.label}>
						Languages
						<Field
							as='select'
							name='language'
							value={language}
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
							value={level}
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
							value={price}
							className={clsx(styles.field_price, styles.field_main)}
							onChange={e => {
								handleChange(e);
								setPrice(e.target.value);
							}}
						>
							<option value=''>---</option>
							{[...Array(12)].map((_, idx) => (
								<option key={idx} value={(idx + 1) * 5}>
									{(idx + 1) * 5} $
								</option>
							))}
						</Field>
						<Icon name={'chevron-down'} className={styles.icon_select} />
					</label>
					<button className={styles.reset} type='reset'>
						<Icon name={'close'} className={styles.close_icon} />
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default Filter;
