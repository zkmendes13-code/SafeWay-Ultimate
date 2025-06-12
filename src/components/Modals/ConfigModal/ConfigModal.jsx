import React, { useState, useEffect } from 'react';
import './ConfigModal.css';

const ConfigModal = ({ isOpen, onClose, onConfigSelect, configs }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  // Resetear el estado de las categorías cuando se abre/cierra el modal
  useEffect(() => {
    if (isOpen && configs.length > 0) {
      console.log('📋 Abriendo modal de configuraciones con:', configs);
      // Inicializar todas las categorías como cerradas por defecto
      const initialExpanded = {};
      configs.forEach((_, index) => {
        initialExpanded[index] = false; // Cerradas por defecto
      });
      setExpandedCategories(initialExpanded);
      console.log('📋 Categorías inicializadas (cerradas):', initialExpanded);
    } else if (!isOpen) {
      // Limpiar estado cuando se cierre el modal
      setExpandedCategories({});
    }
  }, [isOpen, configs]);

  const toggleCategory = (categoryIndex) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  const handleConfigSelect = (configId) => {
    onConfigSelect(configId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">CONFIGURACIONES</h2>
          <button className="close-button" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="config-list">
            {configs.map((category, categoryIndex) => (
              <div key={category.id} className="config-category">
                <div 
                  className="category-header bg-category"
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <span className="category-name">{category.name}</span>
                  <i className={`fas ${expandedCategories[categoryIndex] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {expandedCategories[categoryIndex] && (
                  <div className="category-items">
                    {category.items.map((item) => (
                      <div 
                        key={item.id}
                        className="config-item bg-config"
                        onClick={() => handleConfigSelect(item.id)}
                      >
                        <img src={item.icon} alt={item.name} className="config-icon" />
                        <div className="config-info">
                          <span className="config-name">{item.name}</span>
                          <span className="config-description">{item.description || ''}</span>
                        </div>
                        <div className="config-mode">
                          <span className="mode-text">
                            {item.mode
                              .replace('SSH_', '')
                              .replace('OVPN_', '')
                              .replace('V2RAY - ', '')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigModal;
