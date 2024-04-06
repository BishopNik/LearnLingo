/** @format */

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from 'components/styles/sharedlayout.module.css';
import Icon from 'components/Icon';
import { Login } from 'components/Modal/Login';
import { Registration } from 'components/Modal/Registration';
import { useMainContext, auth, toastError, toastSuccess } from 'components/Helpers';
import { theme } from 'constants/theme';
import { SelectAuth } from 'components/Modal/SelectAuth';
import Menu from 'components/Menu';

const Header = () => {
	const {
		idxColor,
		setIsOpenLogin,
		setIsOpenReg,
		user,
		setIsOpenSelectAuth,
		toFavorite,
		setToFavorite,
		setUser,
	} = useMainContext();
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const navigate = useNavigate();
	const { pathname } = useLocation();
	const rootElement = document.getElementById('root');

	if (pathname === '/') {
		rootElement.style.backgroundColor = '#FFFFFF';
	} else rootElement.style.backgroundColor = '#F8F8F8';

	const handlerOnClose = () => setIsOpenMenu(false);

	const logout = async () => {
		try {
			await auth.signOut();
			setUser(null);
			toastSuccess('User logged out successfully');
		} catch (error) {
			toastError('Error logging out:', error);
		}
	};

	useEffect(() => {
		if (user && toFavorite) {
			navigate('/favorites');
		}
	}, [navigate, toFavorite, user]);

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
							<Link to='/' className={styles.link}>
								Home
							</Link>
						</li>
						<li>
							{pathname === '/teachers' ? (
								user ? (
									<Link to='/favorites' className={styles.link}>
										Favorites
									</Link>
								) : (
									<button
										className={styles.link}
										onClick={() => {
											setToFavorite(true);
											setIsOpenSelectAuth(true);
										}}
									>
										Favorites
									</button>
								)
							) : (
								<Link to='/teachers' className={styles.link}>
									Teachers
								</Link>
							)}
						</li>
					</ul>
				</li>
				<li className={styles.auth_cont}>
					{user ? (
						<ul className={styles.auth}>
							<li>
								<button
									id='user'
									className={styles.user}
									style={{
										backgroundColor: theme[idxColor].property.buttonGetStart,
									}}
									onClick={() => setIsOpenMenu(true)}
								>
									{user.displayName}
								</button>
								{isOpenMenu && <Menu onClose={handlerOnClose} />}
							</li>
							<li>
								<button
									type='button'
									className={styles.login}
									style={{ height: '48px' }}
									onClick={() => logout()}
								>
									Log out
								</button>
							</li>
						</ul>
					) : (
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
					)}
				</li>
			</ul>
			<Login />
			<Registration />
			<SelectAuth />
		</header>
	);
};

export default Header;
