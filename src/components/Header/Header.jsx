/** @format */

import { useState } from 'react';
import styles from 'components/styles/sharedlayout.module.css';
import Icon from 'components/Icon';
import { Login } from 'components/Modal/Login';
import { Registration } from 'components/Modal/Registration';

const Header = () => {
	const [isOpenLogin, setIsOpenLogin] = useState(false);
	const [isOpenReg, setIsOpenReg] = useState(false);

	const onRequestClose = () => {
		if (isOpenLogin) setIsOpenLogin(false);
		if (isOpenReg) setIsOpenReg(false);
	};

	return (
		<header className={styles.header}>
			<ul className={styles.container}>
				<li className={styles.logo}>
					<Icon name={'logo'} className={styles.logo_icon} />
					<p className={styles.logo_text}>LearnLingo</p>
				</li>
				<li>
					<ul className={styles.page}>
						<li>
							<a href='/' className={styles.link}>
								Home
							</a>
						</li>
						<li>
							<a href='/teachers' className={styles.link}>
								Teachers
							</a>
						</li>
					</ul>
				</li>
				<li>
					<ul className={styles.auth}>
						<li className={styles.login_container}>
							<Icon name={'login'} className={styles.login_icon} />
							<button
								type='button'
								className={styles.login}
								onClick={() => setIsOpenLogin(true)}
							>
								Log in
							</button>
						</li>
						<li>
							<button
								type='button'
								className={styles.registration}
								onClick={() => setIsOpenReg(true)}
							>
								Registration
							</button>
						</li>
					</ul>
				</li>
			</ul>
			<Login isOpen={isOpenLogin} onRequestClose={onRequestClose} />
			<Registration isOpen={isOpenReg} onRequestClose={onRequestClose} />
		</header>
	);
};

export default Header;
