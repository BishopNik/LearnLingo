/** @format */

import React, { useState } from 'react';
import data from '../data/teachers.json';
import styles from 'components/styles/teacher.module.css';
import clsx from 'clsx';
import Icon from 'components/Icon';

function Teacher({ teacher }) {
	const [more, setMore] = useState(false);
	const [inFavorites, setInFavorites] = useState(false);

	return (
		<div className={styles.main}>
			<button
				className={styles.button_heart}
				type='button'
				onClick={() => setInFavorites(!inFavorites)}
			>
				<Icon
					name={'heart'}
					className={clsx(styles.icon_heart, inFavorites && styles.icon_heart_in)}
				/>
			</button>
			<div className={styles.logo}>
				<img src={teacher.avatar_url} className={styles.avatar} alt='Avatar' />
				<div className={styles.active} />
			</div>
			<div>
				<div className={styles.teacher_header}>
					<div className={styles.teacher_header_lang}>Languages</div>
					<ul className={styles.teacher_header_list}>
						<li className={styles.teacher_header_list_item}>
							<Icon name={'book'} className={styles.icon_book} />
							Lessons online
						</li>
						<li className={styles.teacher_header_list_separator}></li>
						<li className={styles.teacher_header_list_item}>
							Lessons done: {teacher.lessons_done}
						</li>
						<li className={styles.teacher_header_list_separator}></li>
						<li className={styles.teacher_header_list_item}>
							<Icon name={'star'} className={styles.icon_star} />
							Rating: {teacher.rating}
						</li>
						<li className={styles.teacher_header_list_separator}></li>
						<li className={styles.teacher_header_list_item}>
							Price / 1 hour:{' '}
							<span className={styles.teacher_header_list_item_price}>
								{teacher.price_per_hour}$
							</span>
						</li>
					</ul>
				</div>
				<h2 className={styles.teacher_name}>
					{teacher.name} {teacher.surname}
				</h2>
				<ul className={styles.list}>
					<li>
						Speaks:{' '}
						<span className={clsx(styles.list_black, styles.list_underline)}>
							{teacher.languages.join(', ')}
						</span>
					</li>
					<li>
						Lesson Info:{' '}
						<span className={styles.list_black}>{teacher.lesson_info}</span>
					</li>
					<li>
						Conditions: <span className={styles.list_black}>{teacher.conditions}</span>
					</li>
				</ul>
				{!more && (
					<button
						className={styles.button_readmore}
						type='button'
						onClick={() => setMore(true)}
					>
						Read more
					</button>
				)}
				{more && <p className={styles.teacher_experience}>{teacher.experience}</p>}
				{more && (
					<ul className={styles.reviewers}>
						{teacher.reviews.map((r, idx) => (
							<li key={idx} className={styles.reviewer}>
								<div className={styles.reviewer_avatar} />
								<ul className={styles.reviewer_data}>
									<li className={styles.reviewer_name}>{r.reviewer_name}</li>
									<li className={styles.reviewer_rating}>
										<Icon name={'star'} className={styles.icon_star} />
										{r.reviewer_rating}.0
									</li>
								</ul>
								<p className={styles.reviewer_comment}>{r.comment}</p>
							</li>
						))}
					</ul>
				)}
				<ul className={styles.level_cont}>
					{teacher.levels.map((l, idx) => (
						<li
							key={idx}
							className={clsx(styles.level, idx === 0 && styles.level_first)}
							type='button'
						>
							#{l}
						</li>
					))}
				</ul>
				{more && (
					<button
						className={styles.button_trial}
						type='button'
						onClick={() => console.log('Book trial lesson')}
					>
						Book trial lesson
					</button>
				)}
			</div>
		</div>
	);
}

export default Teacher;