/** @format */

import React from 'react';
import Modal from 'react-modal';
import styled from 'components/styles/modal.module.css';

Modal.setAppElement('#modal-root');

export const customStyles = {
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

export const ModalWindow = ({ children, isOpen, onRequestClose, style }) => {
	return (
		<Modal
			className={styled.main}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={style}
			contentLabel='onRequestClose'
		>
			{children}
		</Modal>
	);
};
