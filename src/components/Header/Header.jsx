/** @format */

import { useState, useContext } from 'react';
import styles from 'components/styles/sharedlayout.module.css';
import Icon from 'components/Icon';
import { Login } from 'components/Modal/Login';
import { Registration } from 'components/Modal/Registration';
import { useLocation } from 'react-router-dom';
import { MainContext } from 'components/Helpers';
import { theme } from '../../constants/theme';

const Header = () => {
	const { idxColor } = useContext(MainContext);
	const { pathname } = useLocation();
	const rootElement = document.getElementById('root');

	const [isOpenLogin, setIsOpenLogin] = useState(false);
	const [isOpenReg, setIsOpenReg] = useState(false);

	const onRequestClose = () => {
		if (isOpenLogin) setIsOpenLogin(false);
		if (isOpenReg) setIsOpenReg(false);
	};

	if (pathname === '/') {
		rootElement.style.backgroundColor = '#FFFFFF';
	} else rootElement.style.backgroundColor = '#F8F8F8';

	return (
		<header
			className={styles.header}
			style={{ backgroundColor: pathname === '/' ? '#FFFFFF' : '#F8F8F8' }}
		>
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
							{pathname === '/teachers' ? (
								<a href='/favorites' className={styles.link}>
									Favorites
								</a>
							) : (
								<a href='/teachers' className={styles.link}>
									Teachers
								</a>
							)}
						</li>
					</ul>
				</li>
				<li>
					<ul className={styles.auth}>
						<li className={styles.login_container}>
							<Icon
								name={'login'}
								className={styles.login_icon}
								style={{ stroke: theme[idxColor].property.buttonGetStart }}
							/>
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
