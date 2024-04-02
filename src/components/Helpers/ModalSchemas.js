/** @format */

import * as Yup from 'yup';

const emailRegex = RegExp(/^[A-Z|a-z0-9!#$%&._%+-/=?^]+@[A-Z|a-z0-9.-]+\.[A-Z|a-z]{2,4}$/);

const passwordRegex = RegExp(/^[A-Z|a-z0-9!#$%&._%+-/=?^]{0,100}$/);

const phoneRegExp = /^[\d\s()-]+$/;

export const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.matches(emailRegex, 'Invalid email')
		.email('Invalid email address')
		.required('This is a required field'),
	password: Yup.string()
		.required('This is a required field')
		.matches(passwordRegex, 'Invalid password'),
});

export const RegisterSchema = Yup.object().shape({
	name: Yup.string().trim().min(2, 'Too Short!').required('This is a required field'),
	email: Yup.string()
		.matches(emailRegex, 'Invalid email')
		.email('Invalid email address')
		.required('This is a required field'),
	password: Yup.string()
		.min(6, 'Too Short!')
		.matches(passwordRegex, 'Invalid password')
		.required('This is a required field'),
});

export const BookLessonSchema = Yup.object().shape({
	name: Yup.string().trim().min(2, 'Too Short!').required('This is a required field'),
	email: Yup.string()
		.matches(emailRegex, 'Invalid email')
		.email('Invalid email address')
		.required('This is a required field'),
	number: Yup.string()
		.matches(phoneRegExp, 'Invalid number')
		.required('This is a required field'),
	reason: Yup.number()
		.min(1, 'Reason must be selected')
		.max(5, 'Reason must be selected')
		.required('Reason is required'),
});
