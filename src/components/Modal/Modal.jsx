/** @format */

import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'components/styles/modal.module.css';
import clsx from 'clsx';

Modal.setAppElement('#modal-root');

const customStyles = {
	overlay: {
		position: 'absolute',
		backgroundColor: 'rgba(72, 76, 78, 0.6)',
		zIndex: '999',
	},
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: 0,
		borderRadius: 30,
		border: 'none',
		backgroundColor: ' #FFFFFF',
		boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
	},
};

export const ModalWindow = ({ children, isOpen, onRequestClose }) => {
	const overlayStyle = {
		top: document.documentElement.scrollTop,
		left: document.documentElement.scrollLeft,
		width: '100vw',
		height: '100vh',
		position: 'absolute',
		backgroundColor: 'rgba(72, 76, 78, 0.6)',
		zIndex: '999',
	};

	const combinedStyles = {
		overlay: overlayStyle,
		content: customStyles.content,
	};

	useEffect(() => {
		if (isOpen) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<Modal
			className={clsx(styled.main, customStyles.overlay, overlayStyle)}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={combinedStyles}
			contentLabel='onRequestClose'
		>
			{children}
		</Modal>
	);
};
