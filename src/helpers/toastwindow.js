/** @format */

import toast from 'react-hot-toast';
import Icon from 'components/Icon';
import styles from 'components/styles/toastwindow.module.css';

export function toastError(mes) {
	toast(
		t => (
			<span className={styles.message}>
				{mes}
				<button className={styles.button_close} onClick={() => toast.dismiss(t.id)}>
					<Icon name={'close'} className={styles.icon_close} />
				</button>
			</span>
		),
		{
			icon: '❌',
			duration: 4000,
		}
	);
}

export function toastSuccess(mes) {
	toast(
		t => (
			<span className={styles.message}>
				{mes}
				<button className={styles.button_close} onClick={() => toast.dismiss(t.id)}>
					<Icon name={'close'} className={styles.icon_close} />
				</button>
			</span>
		),
		{
			icon: '✅',
			duration: 2000,
		}
	);
}
