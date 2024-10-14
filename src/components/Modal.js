import React from 'react';

const Modal = ({ onConfirm, onCancel }) => {
  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        <h2>Доступ запрещен</h2>
        <p>Для доступа к этой странице вы должны войти в систему. Хотите войти сейчас?</p>
        <div style={buttonContainerStyle}>
          <button onClick={onConfirm} style={buttonStyle}>Войти</button>
          <button onClick={onCancel} style={cancelButtonStyle}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  width: '400px',
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#1db954',
  color: '#fff',
  cursor: 'pointer',
};

const cancelButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'gray',
};

export default Modal;
