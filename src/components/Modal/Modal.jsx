/** @format */

import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'components/styles/modal.module.css';

Modal.setAppElement('#root');

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(72, 76, 78, 0.6)',
		zIndex: 999,
		overflow: 'auto',
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
		maxWidth: '100%',
	},
};

export const ModalWindow = ({ children, isOpen, onRequestClose }) => {
	useEffect(() => {
		if (isOpen) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<Modal
			className={styled.main}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={customStyles}
			contentLabel='onRequestClose'
		>
			{children}
		</Modal>
	);
};
