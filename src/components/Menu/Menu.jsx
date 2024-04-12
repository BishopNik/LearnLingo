/** @format */

import React, { useEffect, useCallback } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import styles from 'components/styles/menu.module.css';
import { theme } from 'constants/theme';
import { useMainContext, firestore, toastError, toastSuccess } from 'helpers';

function Menu({ onClose }) {
	const { setIdxColor, user } = useMainContext();

	const onEscHandler = useCallback(
		({ key }) => {
			if (key === 'Escape') {
				onClose();
			}
		},
		[onClose]
	);

	const closeMenu = useCallback(
		({ target }) => {
			const menuContainer = document.getElementById('menu_color');
			const userName = document.getElementById('user');
			if (menuContainer && !menuContainer?.contains(target) && !userName?.contains(target)) {
				onClose();
			}
		},
		[onClose]
	);

	const changeUserColor = async (userUid, color) => {
		try {
			const usersRef = collection(firestore, 'users');
			await setDoc(
				doc(usersRef, userUid),
				{
					color: color,
				},
				{ merge: true }
			);

			toastSuccess('Color changed successfully');
		} catch (error) {
			toastError('Color not saving:', error);
			throw error;
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onEscHandler);
		document.addEventListener('click', closeMenu);

		return () => {
			document.removeEventListener('keydown', onEscHandler);
			document.removeEventListener('click', closeMenu);
		};
	}, [closeMenu, onEscHandler]);

	return (
		<ul id='menu_color' className={styles.menu_color}>
			{theme.map(({ name, property }, idx) => (
				<li
					key={idx}
					style={{
						textAlign: 'center',
					}}
				>
					<button
						type='button'
						className={styles.button_color}
						style={{
							color: property.buttonGetStart,
							cursor: 'pointer',
						}}
						onClick={() => {
							onClose();
							setIdxColor(idx);
							changeUserColor(user.uid, idx);
						}}
					>
						{name}
					</button>
				</li>
			))}
		</ul>
	);
}

export default Menu;
