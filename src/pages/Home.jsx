/** @format */

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'components/styles/home.module.css';
import clsx from 'clsx';
import { LogoIcon } from 'components/Icon';
import { theme } from '../constants/theme';
import { MainContext } from 'helpers';

function Home() {
	const navigate = useNavigate();
	const { idxColor } = useContext(MainContext);

	return (
		<main className={styles.main}>
			<ul className={styles.cont}>
				<li className={clsx(styles.block, styles.block1)}>
					<h1 className={styles.block1_title}>
						Unlock your potential with the best{' '}
						<span
							className={styles.block1_title_span}
							style={{ backgroundColor: theme[idxColor].property.color3 }}
						>
							language
						</span>{' '}
						tutors
					</h1>
					<p className={styles.block1_text}>
						Embark on an Exciting Language Journey with Expert Language Tutors: Elevate
						your language proficiency to new heights by connecting with highly qualified
						and experienced tutors.
					</p>
					<button
						className={styles.block1_button}
						style={{ backgroundColor: theme[idxColor].property.buttonGetStart }}
						type='button'
						onClick={() => navigate('/teachers')}
					>
						Get started
					</button>
				</li>
				<li
					className={clsx(styles.block, styles.block2)}
					style={{ backgroundColor: theme[idxColor].property.color3 }}
				>
					<div className={styles.block2_png}></div>
					<div className={styles.block2_icon}>
						<LogoIcon data={theme[idxColor].property} />
					</div>
				</li>
				<li
					className={clsx(styles.block, styles.block3)}
					style={{ borderColor: theme[idxColor].property.buttonGetStart }}
				>
					<ul className={styles.block3_cont}>
						<li className={styles.block3_cont_item}>
							<span className={styles.block3_cont_item_count}>32,000 +</span>
							<span className={styles.block3_cont_item_text}>Experienced tutors</span>
						</li>
						<li className={styles.block3_cont_item}>
							<span className={styles.block3_cont_item_count}>300,000 +</span>
							<span className={styles.block3_cont_item_text}>
								5-star tutor reviews
							</span>
						</li>
						<li className={styles.block3_cont_item}>
							<span className={styles.block3_cont_item_count}>120 +</span>
							<span className={styles.block3_cont_item_text}>Subjects taught</span>
						</li>
						<li className={styles.block3_cont_item}>
							<span className={styles.block3_cont_item_count}>200 +</span>
							<span className={styles.block3_cont_item_text}>
								Tutor nationalities
							</span>
						</li>
					</ul>
				</li>
			</ul>
		</main>
	);
}

export default Home;
