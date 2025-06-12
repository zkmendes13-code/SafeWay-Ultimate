import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PowerButton from './components/PowerButton/PowerButton';
import InputFields from './components/InputFields/InputFields';
import ConfigModal from './components/Modals/ConfigModal/ConfigModal';
import LogsModal from './components/Modals/LogsModal/LogsModal';
import UserCheckModal from './components/Modals/UserCheckModal/UserCheckModal';
import './App.css';

function App() {
  // Estados principales
  const [connectionState, setConnectionState] = useState('DISCONNECTED');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uuid, setUuid] = useState('');
  const [selectedConfig, setSelectedConfig] = useState('Elija un servidor');
  
  // Estados de modales y sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isLogsModalOpen, setIsLogsModalOpen] = useState(false);
  const [isUserCheckModalOpen, setIsUserCheckModalOpen] = useState(false);
  const [isUserCheckLoading, setIsUserCheckLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  
  // Estados de visibilidad de campos
  const [showUsername, setShowUsername] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showUuid, setShowUuid] = useState(false);

  // Estados de datos
  const [logs, setLogs] = useState([]);
  const [configs, setConfigs] = useState([]);

  // Datos mock para demostración
  const mockConfigs = [
    {
      "sorter": 6,
      "color": "#6D08041C",
      "name": "CONFIGURACIÓN",
      "id": 1393,
      "items": [
        {
          "mode": "V2RAY - VLESS",
          "sorter": 4,
          "tlsVersion": "TLSv1.2",
          "name": "CONFIGURACIÓN 01",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 11803,
          "status": "ACTIVO"
        },
        {
          "mode": "SSH_DIRECT",
          "sorter": 2,
          "tlsVersion": "TLSv1.2",
          "name": "CONFIGURACIÓN 02",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 28627,
          "status": "ACTIVO"
        },
        {
          "mode": "OVPN_PROXY",
          "sorter": 23,
          "tlsVersion": "TLSv1.2",
          "name": "CONFIGURACIÓN 03",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 30001,
          "status": "ACTIVO"
        }
      ]
    },
    {
      "sorter": 2,
      "color": "#6D08041C",
      "name": "CONFIGURACIÓN 2",
      "id": 1846,
      "items": [
        {
          "mode": "SSH_PROXY",
          "sorter": 1,
          "tlsVersion": "TLSv1.2",
          "name": "CONFIGURACIÓN 01",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 26295,
          "status": "ACTIVO"
        }
      ]
    },
    {
      "sorter": 4,
      "color": "#80000000",
      "name": "CONFIGURACIÓN 3",
      "id": 3310,
      "items": [
        {
          "mode": "SSH_PROXY",
          "sorter": 1,
          "tlsVersion": "TLSv1.2",
          "name": "CONFIGURACIÓN PRUEBA",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 29997,
          "status": "ACTIVO"
        },
        {
          "mode": "OVPN_PROXY",
          "sorter": 1,
          "tlsVersion": "TLSv1.2",
          "name": "CONFIGURACIÓN PRUEBA 2",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 29998,
          "status": "ACTIVO"
        }
      ]
    }
  ];

  // Función para cargar configuraciones del servidor
  const loadConfigs = () => {
    try {
      console.log('🔧 Intentando cargar configuraciones del servidor...');
      
      // Intentar obtener configuraciones del servidor
      const serverConfigs = window?.DtGetConfigs?.execute();
      
      if (serverConfigs) {
        const data = JSON.parse(serverConfigs);
        console.log('📡 Configuraciones cargadas del servidor:', data);
        
        // Ordenar por sorter
        data.sort((a, b) => a.sorter - b.sorter);
        data.forEach((item) => item.items.sort((a, b) => a.sorter - b.sorter));
        
        setConfigs(data);
        return true;
      }
    } catch (error) {
      console.error('❌ Error al cargar configuraciones del servidor:', error);
    }
    
    // Usar datos mock como fallback
    console.log('⚠️ Usando configuraciones mock como fallback');
    const mockConfigs = [
      {
        "sorter": 6,
        "color": "#6D08041C",
        "name": "CONFIGURACIÓN MOCK",
        "id": 1393,
        "items": [
          {
            "mode": "V2RAY - VLESS",
            "sorter": 4,
            "tlsVersion": "TLSv1.2",
            "name": "CONFIGURACIÓN DEMO 01",
            "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
            "id": 11803,
            "status": "ACTIVO"
          },
          {
            "mode": "SSH_DIRECT",
            "sorter": 2,
            "tlsVersion": "TLSv1.2",
            "name": "CONFIGURACIÓN DEMO 02",
            "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
            "id": 28627,
            "status": "ACTIVO"
          }
        ]
      }
    ];
    setConfigs(mockConfigs);
    return false;
  };

  // Función para cargar configuración por defecto
  const loadDefaultConfig = () => {
    try {
      console.log('⚙️ Cargando configuración por defecto...');
      const defaultConfig = window?.DtGetDefaultConfig?.execute();
      
      if (defaultConfig) {
        const data = JSON.parse(defaultConfig);
        console.log('📋 Configuración por defecto encontrada:', data);
        
        if (data.name) {
          setSelectedConfig(data.name);
        }
        
        // Actualizar visibilidad de campos según el tipo de configuración
        const isV2ray = data?.mode?.toLowerCase()?.startsWith('v2ray');
        setShowUsername(!data?.auth?.username && !isV2ray);
        setShowPassword(!data?.auth?.password && !isV2ray);
        setShowUuid(!data?.auth?.v2ray_uuid && isV2ray);
      }
    } catch (error) {
      console.error('❌ Error al cargar configuración por defecto:', error);
    }
  };

  // Función para cargar logs del servidor
  const loadLogs = () => {
    try {
      const serverLogs = window?.DtGetLogs?.execute();
      if (serverLogs) {
        const data = JSON.parse(serverLogs);
        console.log('📋 Logs cargados del servidor:', data.length, 'entradas');
        setLogs(data);
        return;
      }
    } catch (error) {
      console.error('❌ Error al cargar logs:', error);
    }
    
    // Mock logs como fallback
    const mockLogs = [
      { [`${new Date().toLocaleTimeString()}`]: 'Aplicación iniciada - Modo desarrollo' },
      { [`${new Date().toLocaleTimeString()}`]: 'Configuraciones cargadas' },
      { [`${new Date().toLocaleTimeString()}`]: 'Sistema listo para usar' }
    ];
    setLogs(mockLogs);
  };

  // Inicializar datos
  useEffect(() => {
    console.log('� Inicializando aplicación VPN...');
    
    // Cargar configuraciones del servidor
    const hasServerConfigs = loadConfigs();
    
    // Cargar configuración por defecto
    loadDefaultConfig();
    
    // Cargar logs
    loadLogs();
    
    // Cargar credenciales guardadas
    try {
      const savedUsername = window?.DtUsername?.get();
      const savedPassword = window?.DtPassword?.get();
      const savedUuid = window?.DtUuid?.get();
      
      if (savedUsername) {
        setUsername(savedUsername);
        console.log('👤 Usuario cargado del almacenamiento');
      }
      if (savedPassword) {
        setPassword(savedPassword);
        console.log('🔐 Contraseña cargada del almacenamiento');
      }
      if (savedUuid) {
        setUuid(savedUuid);
        console.log('🔑 UUID cargado del almacenamiento');
      }
    } catch (error) {
      console.error('❌ Error al cargar credenciales:', error);
    }
    
    // Obtener estado actual de VPN
    try {
      const currentState = window?.DtGetVpnState?.execute();
      if (currentState && currentState !== 'DISCONNECTED') {
        setConnectionState(currentState);
        console.log('🔗 Estado VPN:', currentState);
      }
    } catch (error) {
      console.error('❌ Error al obtener estado VPN:', error);
    }
    
    console.log('✅ Inicialización completada');
  }, []);

  // Manejadores de eventos
  const handleToggleConnection = () => {
    try {
      if (connectionState === 'DISCONNECTED') {
        console.log('🚀 Iniciando conexión VPN...');
        setConnectionState('CONNECTING');
        
        // Llamar función nativa para iniciar VPN
        window?.DtExecuteVpnStart?.execute();
        
        // Simular conexión (en la app real esto vendría del callback nativo)
        setTimeout(() => {
          const newState = window?.DtGetVpnState?.execute() || 'CONNECTED';
          setConnectionState(newState);
          console.log('✅ VPN conectada');
        }, 2000);
      } else {
        console.log('🛑 Deteniendo conexión VPN...');
        
        // Llamar función nativa para detener VPN
        window?.DtExecuteVpnStop?.execute();
        
        setConnectionState('DISCONNECTED');
        console.log('✅ VPN desconectada');
      }
    } catch (error) {
      console.error('❌ Error al cambiar estado de conexión:', error);
      setConnectionState('DISCONNECTED');
    }
  };

  const handleConfigSelect = (configId) => {
    try {
      console.log('⚙️ Seleccionando configuración:', configId);
      
      const config = configs
        .flatMap(category => category.items)
        .find(item => item.id === configId);
      
      if (config) {
        setSelectedConfig(config.name);
        
        // Llamar función nativa para establecer configuración
        window?.DtSetConfig?.execute(configId);
        
        // Actualizar visibilidad de campos según el tipo de configuración
        const isV2ray = config.mode.toLowerCase().includes('v2ray');
        setShowUsername(!isV2ray);
        setShowPassword(!isV2ray);
        setShowUuid(isV2ray);
        
        console.log('✅ Configuración seleccionada:', config.name);
        
        // Agregar log de la acción
        const newLog = { [`${new Date().toLocaleTimeString()}`]: `Configuración cambiada a: ${config.name}` };
        setLogs(prev => [...prev, newLog]);
      }
    } catch (error) {
      console.error('❌ Error al seleccionar configuración:', error);
    }
  };

  const handleUpdate = () => {
    try {
      console.log('🔄 Iniciando actualización...');
      
      // Llamar función nativa para actualizar
      window?.DtStartAppUpdate?.execute();
      
      const newLog = { [`${new Date().toLocaleTimeString()}`]: 'Verificando actualizaciones...' };
      setLogs(prev => [...prev, newLog]);
      
      console.log('✅ Actualización iniciada');
    } catch (error) {
      console.error('❌ Error al actualizar:', error);
    }
  };

  const handleCheckUser = () => {
    try {
      console.log('👤 Verificando usuario...');
      setIsUserCheckLoading(true);
      setIsUserCheckModalOpen(true);
      
      // Llamar función nativa para verificar usuario
      window?.DtStartCheckUser?.execute();
      
      // Simular verificación (en la app real esto vendría del callback nativo)
      setTimeout(() => {
        setUserData({
          username: username || 'usuario_demo',
          expiration_days: 30,
          count_connections: 1,
          limit_connections: 5
        });
        setIsUserCheckLoading(false);
        
        const newLog = { [`${new Date().toLocaleTimeString()}`]: `Usuario verificado: ${username || 'usuario_demo'}` };
        setLogs(prev => [...prev, newLog]);
        
        console.log('✅ Usuario verificado');
      }, 2000);
    } catch (error) {
      console.error('❌ Error al verificar usuario:', error);
      setIsUserCheckLoading(false);
    }
  };

  const handleBatteryOptimization = () => {
    try {
      console.log('🔋 Configurando optimización de batería...');
      
      // Llamar función nativa para optimización de batería
      window?.DtIgnoreBatteryOptimizations?.execute();
      
      const newLog = { [`${new Date().toLocaleTimeString()}`]: 'Optimización de batería configurada' };
      setLogs(prev => [...prev, newLog]);
      
      console.log('✅ Optimización de batería configurada');
    } catch (error) {
      console.error('❌ Error en optimización de batería:', error);
    }
  };

  const handleClearLogs = () => {
    try {
      console.log('🧹 Limpiando logs...');
      
      // Llamar función nativa para limpiar logs
      window?.DtClearLogs?.execute();
      
      setLogs([]);
      console.log('✅ Logs limpiados');
    } catch (error) {
      console.error('❌ Error al limpiar logs:', error);
    }
  };

  // Manejadores de cambio de credenciales
  const handleUsernameChange = (value) => {
    setUsername(value);
    try {
      window?.DtUsername?.set(value);
      console.log('👤 Usuario actualizado');
    } catch (error) {
      console.error('❌ Error al guardar usuario:', error);
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    try {
      window?.DtPassword?.set(value);
      console.log('🔐 Contraseña actualizada');
    } catch (error) {
      console.error('❌ Error al guardar contraseña:', error);
    }
  };

  const handleUuidChange = (value) => {
    setUuid(value);
    try {
      window?.DtUuid?.set(value);
      console.log('🔑 UUID actualizado');
    } catch (error) {
      console.error('❌ Error al guardar UUID:', error);
    }
  };

  const isConnected = connectionState !== 'DISCONNECTED';

  return (
    <div className="app">
      <Header onMenuToggle={() => setIsSidebarOpen(true)} />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onUpdate={handleUpdate}
        onShowLogs={() => setIsLogsModalOpen(true)}
        onCheckUser={handleCheckUser}
        onBatteryOptimization={handleBatteryOptimization}
      />
      
      <main className="main-content">
        <PowerButton 
          isConnected={isConnected}
          connectionState={connectionState}
          onToggle={handleToggleConnection}
        />
        
        <div className="input-section">
          <InputFields
            config={selectedConfig}
            username={username}
            password={password}
            uuid={uuid}
            onConfigClick={() => setIsConfigModalOpen(true)}
            onUsernameChange={handleUsernameChange}
            onPasswordChange={handlePasswordChange}
            onUuidChange={handleUuidChange}
            isConnected={isConnected}
            showUsername={showUsername}
            showPassword={showPassword}
            showUuid={showUuid}
          />
        </div>
      </main>

      {/* Modales */}
      <ConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        onConfigSelect={handleConfigSelect}
        configs={configs}
      />

      <LogsModal
        isOpen={isLogsModalOpen}
        onClose={() => setIsLogsModalOpen(false)}
        logs={logs}
        onClearLogs={handleClearLogs}
      />

      <UserCheckModal
        isOpen={isUserCheckModalOpen}
        onClose={() => setIsUserCheckModalOpen(false)}
        userData={userData}
        isLoading={isUserCheckLoading}
      />
    </div>
  );
}

export default App;
