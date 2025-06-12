import React from 'react';
import './Sidebar.css';

const Sidebar = ({ 
  isOpen, 
  onClose, 
  onUpdate, 
  onShowLogs, 
  onCheckUser, 
  onBatteryOptimization 
}) => {
  const menuItems = [
    { icon: 'fa-home', text: 'Inicio', action: () => console.log('Inicio') },
    { icon: 'fa-cog', text: 'Configuraciones', action: () => console.log('Configuraciones') },
    { icon: 'fa-shield-alt', text: 'Seguridad', action: () => console.log('Seguridad') },
    { icon: 'fa-chart-line', text: 'Estadísticas', action: () => console.log('Estadísticas') },
    { icon: 'fa-question-circle', text: 'Ayuda', action: () => console.log('Ayuda') },
    { icon: 'fa-info-circle', text: 'Acerca de', action: () => console.log('Acerca de') },
  ];

  // Elementos de acción que estaban en la parte inferior
  const actionItems = [
    { icon: 'fa-sync-alt', text: 'Actualizar', action: onUpdate },
    { icon: 'fa-file-medical', text: 'Ver Registros', action: onShowLogs },
    { icon: 'fa-calendar-day', text: 'Verificar Usuario', action: onCheckUser },
    { icon: 'fa-battery-full', text: 'Optimización Batería', action: onBatteryOptimization },
  ];

  const handleItemClick = (action) => {
    if (action) {
      action();
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img
              src="https://i.ibb.co/yFcpD1Gq/549b682d16cc.png"
              alt="Logo"
              className="sidebar-logo-img"
            />
            <span className="sidebar-title">TÚNEL INFINITO</span>
          </div>
          <button className="sidebar-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="sidebar-item"
                onClick={() => handleItemClick(item.action)}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.text}</span>
              </div>
            ))}
            
            {/* Separador */}
            <div className="sidebar-separator"></div>
            
            {/* Botones de acción que estaban en la parte inferior */}
            <div className="sidebar-section-title">
              <span>Acciones</span>
            </div>
            {actionItems.map((item, index) => (
              <div 
                key={`action-${index}`}
                className="sidebar-item action-item"
                onClick={() => handleItemClick(item.action)}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.text}</span>
              </div>
            ))}
          </nav>
          
          <div className="sidebar-footer">
            <div className="sidebar-item danger" onClick={onClose}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Salir</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
