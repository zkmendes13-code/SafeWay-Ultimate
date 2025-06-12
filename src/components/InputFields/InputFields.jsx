import React, { useState } from 'react';
import './InputFields.css';

const InputFields = ({ 
  config, 
  username, 
  password, 
  uuid, 
  onConfigClick,
  onUsernameChange,
  onPasswordChange,
  onUuidChange,
  isConnected,
  showUsername = true,
  showPassword = true,
  showUuid = false
}) => {
  const [showPasswordValue, setShowPasswordValue] = useState(false);
  const [showUuidValue, setShowUuidValue] = useState(false);

  return (
    <div className="input-fields">
      {/* Config Field */}
      <div 
        className="input-group bg-input" 
        onClick={onConfigClick}
        style={{ cursor: 'pointer' }}
      >
        <i className="fas fa-server"></i>
        <input
          type="text"
          placeholder="CONFIGURACIÓN"
          value={config}
          readOnly
          style={{ pointerEvents: 'none', background: 'transparent' }}
        />
        <i className="fas fa-chevron-down"></i>
      </div>

      <div className="input-row">
        {/* Username Field */}
        {showUsername && (
          <div className="input-group bg-input">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => onUsernameChange(e.target.value)}
              readOnly={isConnected}
            />
            <i className="fas fa-chevron-down"></i>
          </div>
        )}
      </div>

      <div className="input-row">
        {/* Password Field */}
        {showPassword && (
          <div className="input-group bg-input">
            <i className="fas fa-lock"></i>
            <input
              type={showPasswordValue ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              readOnly={isConnected}
            />
            <i 
              className={`fas ${showPasswordValue ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setShowPasswordValue(!showPasswordValue)}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
        )}

        {/* UUID Field */}
        {showUuid && (
          <div className="input-group bg-input">
            <i className="fas fa-key"></i>
            <input
              type={showUuidValue ? "text" : "password"}
              placeholder="UUID V2ray"
              value={uuid}
              onChange={(e) => onUuidChange(e.target.value)}
              readOnly={isConnected}
            />
            <i 
              className={`fas ${showUuidValue ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setShowUuidValue(!showUuidValue)}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputFields;
