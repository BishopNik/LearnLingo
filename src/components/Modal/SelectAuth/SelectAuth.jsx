/** @format */

import React from 'react';
import { useMainContext } from 'components/Helpers';
import { ModalWindow } from 'components/Modal';
import styles from 'components/styles/selectauth.module.css';
import Icon from 'components/Icon';
import { theme } from '../../../constants/theme';

export const SelectAuth = () => {
	const { idxColor, setIsOpenLogin, setIsOpenReg, isOpenSelectAuth, setIsOpenSelectAuth } =
		useMainContext();

	const onRequestClose = () => {
		if (isOpenSelectAuth) setIsOpenSelectAuth(false);
	};

	return (
		<ModalWindow isOpen={isOpenSelectAuth} onRequestClose={onRequestClose}>
			<div className={styles.main}>
				<button type='button' onClick={onRequestClose} className={styles.close_button}>
					<Icon name={'close'} className={styles.close_icon} />
				</button>
				<h2 className={styles.title}>Only for authorized users, please authenticate </h2>
				<ul className={styles.button_container}>
					<li>
						<button
							type='button'
							className={styles.submit_button}
							style={{ backgroundColor: theme[idxColor].property.buttonGetStart }}
							onClick={() => {
								onRequestClose();
								setIsOpenLogin(true);
							}}
						>
							Log in
						</button>
					</li>
					<li>
						<button
							type='button'
							className={styles.submit_button}
							style={{ backgroundColor: theme[idxColor].property.buttonGetStart }}
							onClick={() => {
								onRequestClose();
								setIsOpenReg(true);
							}}
						>
							Registration
						</button>
					</li>
				</ul>
			</div>
		</ModalWindow>
	);
};
