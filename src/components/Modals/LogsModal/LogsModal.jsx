import React, { useEffect, useRef } from 'react';
import './LogsModal.css';

const LogsModal = ({ isOpen, onClose, logs, onClearLogs }) => {
  const logsEndRef = useRef(null);

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [logs, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content logs-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <div className="logs-container">
            {logs.length === 0 ? (
              <div className="no-logs">
                <p>No hay logs disponibles</p>
              </div>
            ) : (
              <div className="logs-list">
                {logs.map((log, index) => (
                  <div key={index} className="log-item">
                    {Object.keys(log)[0]} {log[Object.keys(log)[0]]}
                  </div>
                ))}
                <div ref={logsEndRef} />
              </div>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <button className="footer-btn bg-input" onClick={onClearLogs}>
            LIMPIAR
          </button>
          <button className="footer-btn bg-input" onClick={onClose}>
            CERRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogsModal;
