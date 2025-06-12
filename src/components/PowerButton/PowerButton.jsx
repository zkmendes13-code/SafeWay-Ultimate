import React from 'react';
import './PowerButton.css';

const PowerButton = ({ isConnected, connectionState, onToggle }) => {
  const getStateText = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return 'CONECTADO';
      case 'CONNECTING':
        return 'CONECTANDO...';
      case 'DISCONNECTED':
      default:
        return 'DESCONECTADO';
    }
  };

  const getStateIcon = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return <i className="fas fa-check-circle me-2"></i>;
      case 'CONNECTING':
        return <i className="fas fa-sync-alt me-2"></i>;
      case 'DISCONNECTED':
      default:
        return <i className="fas fa-times-circle me-2"></i>;
    }
  };

  const getStateColor = () => {
    switch (connectionState) {
      case 'CONNECTED':
        return '#00ff15';
      case 'CONNECTING':
        return '#ffc107';
      case 'DISCONNECTED':
      default:
        return 'red';
    }
  };

  return (
    <div className="power-button-container">
      <button className="power-button" onClick={onToggle}>
        <i className="fas fa-power-off"></i>
      </button>
      <span 
        className="connection-state" 
        style={{ color: getStateColor() }}
      >
        {getStateIcon()}
        {getStateText()}
      </span>
    </div>
  );
};

export default PowerButton;
