/** @format */

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ModalWindow } from 'components/Modal';
import {
	LoginSchema,
	useMainContext,
	auth,
	toastError,
	toastSuccess,
	readSettingsUser,
} from 'components/Helpers';
import Icon from 'components/Icon';
import styles from 'components/styles/auth.module.css';
import { theme } from 'constants/theme';

export const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { idxColor, setIdxColor, setUser, isOpenLogin, setIsOpenLogin, setLikedTeachers } =
		useMainContext();

	const onRequestClose = () => {
		if (isOpenLogin) setIsOpenLogin(false);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const loginUser = async ({ email, password }) => {
		try {
			const { user } = await signInWithEmailAndPassword(auth, email, password);
			const data = await readSettingsUser(user);

			setIdxColor(data.color || 0);
			setLikedTeachers(data.likedTeachers || []);
			toastSuccess('User logged in successfully');
			return user;
		} catch (error) {
			toastError('Login error:', error);
		}
	};

	const handleFormSubmit = async values => {
		const user = await loginUser(values);
		localStorage.setItem('refreshToken', user.refreshToken);
		setUser(user);
		onRequestClose();
	};

	return (
		<ModalWindow isOpen={isOpenLogin} onRequestClose={onRequestClose}>
			<div className={styles.main_login}>
				<button type='button' onClick={onRequestClose} className={styles.close_button}>
					<Icon name={'close'} className={styles.close_icon} />
				</button>
				<h1 className={styles.main_text}>Log In</h1>
				<p className={styles.about_text}>
					Welcome back! Please enter your credentials to access your account and continue
					your search for an teacher.
				</p>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={LoginSchema}
					onSubmit={handleFormSubmit}
				>
					{({ isSubmitting }) => (
						<Form autoComplete='off'>
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
								Log In
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</ModalWindow>
	);
};
