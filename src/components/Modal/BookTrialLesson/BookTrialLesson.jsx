/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ModalWindow } from 'components/Modal';
import styles from 'components/styles/booktriallesson.module.css';
import { useMainContext, BookLessonSchema, toastSuccess } from 'components/Helpers';
import Icon from 'components/Icon';
import { theme } from 'constants/theme';

function BookTrialLesson() {
	const { idxColor, isOpenBookTrial, setIsOpenBookTrial, teacher } = useMainContext();

	const onRequestClose = () => setIsOpenBookTrial(false);

	const handleFormSubmit = values => {
		toastSuccess(`✅ ${JSON.stringify(values, null, 2)}`);
		onRequestClose();
	};

	return (
		<ModalWindow isOpen={isOpenBookTrial} onRequestClose={onRequestClose}>
			<div className={styles.main}>
				<button type='button' onClick={onRequestClose} className={styles.close_button}>
					<Icon name={'close'} className={styles.close_icon} />
				</button>
				<h1 className={styles.title}>Book trial lesson</h1>
				<p className={styles.text}>
					Our experienced tutor will assess your current language level, discuss your
					learning goals, and tailor the lesson to your specific needs.
				</p>
				<ul className={styles.teacher_info}>
					<li className={styles.teacher_logo}>
						<img src={teacher.avatar_url} className={styles.avatar} alt='Avatar' />
					</li>
					<li className={styles.teacher_title}>Your teacher</li>
					<li className={styles.teacher_name}>
						{teacher?.name} {teacher?.surname}
					</li>
				</ul>
				<h2 className={styles.list_reason_title}>
					What is your main reason for learning English?
				</h2>
				<Formik
					initialValues={{
						name: '',
						email: '',
						number: '',
						reason: '',
					}}
					validationSchema={BookLessonSchema}
					onSubmit={handleFormSubmit}
				>
					{({ values, isSubmitting }) => (
						<Form autoComplete='off'>
							<ul className={styles.list_reason}>
								<li>
									<label className={styles.reason_item}>
										<div className={styles.reason_item_radio}>
											<div
												className={styles.reason_item_radio_border}
												style={{
													borderColor:
														values.reason === '1'
															? theme[idxColor].property
																	.buttonGetStart
															: null,
												}}
											>
												<div
													className={styles.reason_item_radio_center}
													style={{
														backgroundColor:
															values.reason === '1'
																? theme[idxColor].property
																		.buttonGetStart
																: null,
													}}
												></div>
											</div>
										</div>
										<Field
											type='radio'
											name='reason'
											value='1'
											className={styles.reason_item_input}
										/>
										Career and business
									</label>
								</li>
								<li>
									<label className={styles.reason_item}>
										<div className={styles.reason_item_radio}>
											<div
												className={styles.reason_item_radio_border}
												style={{
													borderColor:
														values.reason === '2'
															? theme[idxColor].property
																	.buttonGetStart
															: null,
												}}
											>
												<div
													className={styles.reason_item_radio_center}
													style={{
														backgroundColor:
															values.reason === '2'
																? theme[idxColor].property
																		.buttonGetStart
																: null,
													}}
												></div>
											</div>
										</div>
										<Field
											type='radio'
											name='reason'
											value='2'
											className={styles.reason_item_input}
										/>
										Lesson for kids
									</label>
								</li>
								<li>
									<label className={styles.reason_item}>
										<div className={styles.reason_item_radio}>
											<div
												className={styles.reason_item_radio_border}
												style={{
													borderColor:
														values.reason === '3'
															? theme[idxColor].property
																	.buttonGetStart
															: null,
												}}
											>
												<div
													className={styles.reason_item_radio_center}
													style={{
														backgroundColor:
															values.reason === '3'
																? theme[idxColor].property
																		.buttonGetStart
																: null,
													}}
												></div>
											</div>
										</div>
										<Field
											type='radio'
											name='reason'
											value='3'
											className={styles.reason_item_input}
										/>
										Living abroad
									</label>
								</li>
								<li>
									<label className={styles.reason_item}>
										<div className={styles.reason_item_radio}>
											<div
												className={styles.reason_item_radio_border}
												style={{
													borderColor:
														values.reason === '4'
															? theme[idxColor].property
																	.buttonGetStart
															: null,
												}}
											>
												<div
													className={styles.reason_item_radio_center}
													style={{
														backgroundColor:
															values.reason === '4'
																? theme[idxColor].property
																		.buttonGetStart
																: null,
													}}
												></div>
											</div>
										</div>
										<Field
											type='radio'
											name='reason'
											value='4'
											className={styles.reason_item_input}
										/>
										Exams and coursework
									</label>
								</li>
								<li>
									<label className={styles.reason_item}>
										<div className={styles.reason_item_radio}>
											<div
												className={styles.reason_item_radio_border}
												style={{
													borderColor:
														values.reason === '5'
															? theme[idxColor].property
																	.buttonGetStart
															: null,
												}}
											>
												<div
													className={styles.reason_item_radio_center}
													style={{
														backgroundColor:
															values.reason === '5'
																? theme[idxColor].property
																		.buttonGetStart
																: null,
													}}
												></div>
											</div>
										</div>
										<Field
											type='radio'
											name='reason'
											value='5'
											className={styles.reason_item_input}
										/>
										Culture, travel or hobby
									</label>
								</li>
							</ul>
							<ul className={styles.inputs}>
								<li>
									<Field
										className={styles.input_cont}
										name='name'
										type='name'
										placeholder='Full Name'
									/>
									<ErrorMessage
										className={styles.error}
										name='name'
										component='span'
									/>
								</li>
								<li>
									<Field
										className={styles.input_cont}
										name='email'
										type='email'
										placeholder='Email'
									/>
									<ErrorMessage
										className={styles.error}
										name='email'
										component='span'
									/>
								</li>
								<li>
									<Field
										className={styles.input_cont}
										name='number'
										type='phone'
										placeholder='Number'
									/>
									<ErrorMessage
										className={styles.error}
										name='number'
										component='span'
									/>
								</li>
							</ul>
							<button
								type='submit'
								disabled={isSubmitting}
								className={styles.submit_button}
								style={{ backgroundColor: theme[idxColor].property.buttonGetStart }}
							>
								Book
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</ModalWindow>
	);
}

export default BookTrialLesson;
