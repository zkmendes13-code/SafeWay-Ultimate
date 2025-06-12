import React from 'react';
import './UserCheckModal.css';

const UserCheckModal = ({ isOpen, onClose, userData, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content user-check-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isLoading ? 'VERIFICAR USUARIO' : `Hola, ${userData?.username?.toUpperCase() || 'USUARIO'}`}
          </h2>
          <button className="close-button" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          {isLoading ? (
            <div className="loading-container">
              <div className="spinner">
                <i className="fas fa-sync-alt spinning"></i>
              </div>
              <p>Verificando usuario...</p>
            </div>
          ) : userData ? (
            <div className="user-info">
              <div className="info-item">
                <span className="info-label">Nombre de usuario:</span>
                <span className="info-value">{userData.username}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Días restantes:</span>
                <span className="info-value">{userData.expiration_days}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Conexiones:</span>
                <span className="info-value">
                  {userData.count_connections}|{userData.limit_connections}
                </span>
              </div>
            </div>
          ) : (
            <div className="error-message">
              <p>No se pudo obtener la información del usuario</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCheckModal;
