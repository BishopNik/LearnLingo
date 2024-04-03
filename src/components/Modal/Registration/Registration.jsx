/** @format */

import React, { useState, useContext } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ModalWindow } from 'components/Modal';
import { RegisterSchema } from 'components/Helpers';
import Icon from 'components/Icon';
import styles from 'components/styles/auth.module.css';
import { theme } from '../../../constants/theme';
import { MainContext } from 'components/Helpers';

export const Registration = ({ isOpen, onRequestClose }) => {
	// const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const { idxColor } = useContext(MainContext);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const handleFormSubmit = (values, action) => {
		console.log(values);
		onRequestClose();
	};

	return (
		<ModalWindow isOpen={isOpen} onRequestClose={onRequestClose}>
			<div className={styles.main_reg}>
				<button type='button' onClick={onRequestClose} className={styles.close_button}>
					<Icon name={'close'} className={styles.close_icon} />
				</button>
				<h1 className={styles.main_text}>Registration</h1>
				<p className={styles.about_text}>
					Thank you for your interest in our platform! In order to register, we need some
					information. Please provide us with the following information.
				</p>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: '',
					}}
					validationSchema={RegisterSchema}
					onSubmit={handleFormSubmit}
				>
					{({ isSubmitting }) => (
						<Form autoComplete='off'>
							<div className={styles.label_cont}>
								<Field
									className={styles.input_cont}
									name='name'
									type='name'
									placeholder='Name'
								/>
								<ErrorMessage
									className={styles.error}
									name='name'
									component='span'
								/>
							</div>
							<div className={styles.label_cont}>
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
							</div>
							<div className={styles.label_cont}>
								<Field
									className={styles.input_cont}
									name='password'
									type={showPassword ? 'text' : 'password'}
									placeholder='Enter a password'
								/>
								{!showPassword && (
									<Icon
										name={'hide-show'}
										onClick={togglePasswordVisibility}
										className={styles.password_icon}
									/>
								)}
								<ErrorMessage
									className={styles.error}
									name='password'
									component='span'
								/>
							</div>
							<button
								type='submit'
								disabled={isSubmitting}
								className={styles.submit_button}
								style={{ backgroundColor: theme[idxColor].property.buttonGetStart }}
							>
								Sign Up
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</ModalWindow>
	);
};
