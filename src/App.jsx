import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PowerButton from './components/PowerButton/PowerButton';
import InputFields from './components/InputFields/InputFields';
import ConfigPage from './components/Pages/ConfigPage/ConfigPage';
import LogsPage from './components/Pages/LogsPage/LogsPage';
import UserCheckModal from './components/Modals/UserCheckModal/UserCheckModal';
import CredentialsModal from './components/Modals/CredentialsModal/CredentialsModal';
import CredentialsRequiredModal from './components/Modals/CredentialsRequiredModal/CredentialsRequiredModal';
import ServerRequiredModal from './components/Modals/ServerRequiredModal/ServerRequiredModal';

function App() {
  // Estados principales
  const [connectionState, setConnectionState] = useState('DISCONNECTED');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uuid, setUuid] = useState('');
  const [selectedConfig, setSelectedConfig] = useState('Elija un servidor');
  
  // Estados de modales y sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConfigPageOpen, setIsConfigPageOpen] = useState(false);
  const [isCredentialsModalOpen, setIsCredentialsModalOpen] = useState(false);
  const [isLogsModalOpen, setIsLogsModalOpen] = useState(false);
  const [isUserCheckModalOpen, setIsUserCheckModalOpen] = useState(false);
  const [isUserCheckLoading, setIsUserCheckLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isCredentialsRequiredModalOpen, setIsCredentialsRequiredModalOpen] = useState(false);
  const [isServerRequiredModalOpen, setIsServerRequiredModalOpen] = useState(false);

  // Estados de visibilidad de campos
  const [showUsername, setShowUsername] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showUuid, setShowUuid] = useState(false);

  // Estados de datos
  const [logs, setLogs] = useState([]);
  const [configs, setConfigs] = useState([]);

  // Datos mock expandidos para probar scroll
  const mockConfigs = [
    {
      "sorter": 6,
      "color": "#6D08041C",
      "name": "SERVIDORES PREMIUM",
      "id": 1393,
      "items": [
        {
          "mode": "V2RAY - VLESS",
          "sorter": 4,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR USA 01",
          "description": "Servidor premium de alta velocidad en Estados Unidos",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 11803,
          "status": "ACTIVO"
        },
        {
          "mode": "SSH_DIRECT",
          "sorter": 2,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR USA 02",
          "description": "Conexión directa SSH con baja latencia",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 28627,
          "status": "ACTIVO"
        },
        {
          "mode": "OVPN_PROXY",
          "sorter": 23,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR USA 03",
          "description": "Servidor proxy OpenVPN con encriptación avanzada",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 30001,
          "status": "ACTIVO"
        },
        {
          "mode": "V2RAY_WS",
          "sorter": 5,
          "tlsVersion": "TLSv1.3",
          "name": "SERVIDOR USA 04",
          "description": "V2Ray WebSocket con TLS 1.3 para máxima seguridad",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 30002,
          "status": "ACTIVO"
        }
      ]
    },
    {
      "sorter": 2,
      "color": "#6D08041C",
      "name": "SERVIDORES EUROPA",
      "id": 1846,
      "items": [
        {
          "mode": "SSH_PROXY",
          "sorter": 1,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR UK 01",
          "description": "Servidor SSH proxy en Reino Unido con alta disponibilidad",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 26295,
          "status": "ACTIVO"
        },
        {
          "mode": "OVPN_UDP",
          "sorter": 2,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR UK 02",
          "description": "OpenVPN UDP optimizado para streaming y gaming",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 26296,
          "status": "ACTIVO"
        },
        {
          "mode": "V2RAY_TCP",
          "sorter": 3,
          "tlsVersion": "TLSv1.3",
          "name": "SERVIDOR ALEMANIA 01",
          "description": "V2Ray TCP en Alemania con protección de privacidad",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 26297,
          "status": "ACTIVO"
        }
      ]
    },
    {
      "sorter": 4,
      "color": "#80000000",
      "name": "SERVIDORES ASIA",
      "id": 3310,
      "items": [
        {
          "mode": "SSH_PROXY",
          "sorter": 1,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR JAPÓN 01",
          "description": "Servidor SSH en Japón con conexión ultra rápida",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 33101,
          "status": "ACTIVO"
        },
        {
          "mode": "V2RAY_GRPC",
          "sorter": 2,
          "tlsVersion": "TLSv1.3",
          "name": "SERVIDOR SINGAPUR 01",
          "description": "V2Ray gRPC para máximo rendimiento en Asia",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 33102,
          "status": "ACTIVO"
        }
      ]
    },
    {
      "sorter": 5,
      "color": "#FF6B6B1C",
      "name": "SERVIDORES LATAM",
      "id": 4000,
      "items": [
        {
          "mode": "SSH_DIRECT",
          "sorter": 1,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR BRASIL 01",
          "description": "Conexión directa SSH en Brasil con baja latencia",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 40001,
          "status": "ACTIVO"
        },
        {
          "mode": "OVPN_TCP",
          "sorter": 2,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR BRASIL 02",
          "description": "OpenVPN TCP optimizado para estabilidad",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 40002,
          "status": "ACTIVO"
        },
        {
          "mode": "V2RAY_WS",
          "sorter": 3,
          "tlsVersion": "TLSv1.3",
          "name": "SERVIDOR ARGENTINA 01",
          "description": "V2Ray WebSocket en Argentina para Latinoamérica",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 40003,
          "status": "ACTIVO"
        },
        {
          "mode": "SSH_PROXY",
          "sorter": 4,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR CHILE 01",
          "description": "Servidor proxy SSH en Chile con alta disponibilidad",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 40004,
          "status": "ACTIVO"
        }
      ]
    },
    {
      "sorter": 6,
      "color": "#4ECDC41C",
      "name": "SERVIDORES GRATUITOS",
      "id": 5000,
      "items": [
        {
          "mode": "SSH_DIRECT",
          "sorter": 1,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR FREE 01",
          "description": "Servidor gratuito con velocidad limitada - Ideal para pruebas",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 50001,
          "status": "ACTIVO"
        },
        {
          "mode": "SSH_DIRECT",
          "sorter": 2,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR FREE 02",
          "description": "Servidor gratuito de respaldo - Conexión básica",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 50002,
          "status": "ACTIVO"
        },
        {
          "mode": "OVPN_UDP",
          "sorter": 3,
          "tlsVersion": "TLSv1.2",
          "name": "SERVIDOR FREE 03",
          "description": "OpenVPN UDP gratuito - Sin garantía de velocidad",
          "icon": "https://cdn-icons-png.flaticon.com/512/8187/8187143.png",
          "id": 50003,
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
    console.log('🚀 Inicializando aplicación VPN...');
    
    // Configurar listeners globales para verificación de usuario
    window.dtCheckUserStartedListener = () => {
      console.log('👤 Iniciando verificación de usuario...');
      const cfg = JSON.parse(window?.DtGetDefaultConfig?.execute() ?? '{}');
      if (!cfg.url_check_user && typeof DtGetDefaultConfig !== 'undefined') {
        console.warn('⚠️ URL de verificación de usuario no configurada');
      }
    };

    window.dtCheckUserModelListener = (model) => {
      console.log('📊 Recibiendo datos del modelo:', model);
      
      // Crear datos por defecto
      const today = new Date();
      // Para testing: usar fecha fija del 22 de junio de 2025
      const futureDateString = "2025-06-22";
      
      const defaultData = {
        username: username || "OceanUser",
        expiration_date: futureDateString,
        count_connections: Math.floor(Math.random() * 2) + 1,
        limit_connections: 3
      };
      
      // Parsear datos del modelo o usar valores por defecto
      const data = JSON.parse(model ?? JSON.stringify(defaultData));
      
      console.log('🔍 Datos parseados:', data);
      console.log('📅 Fecha de expiración recibida:', data.expiration_date);
      
      // Calcular días restantes basándose en expiration_date
      let expiration_days = 0;
      if (data.expiration_date) {
        try {
          const expirationDate = new Date(data.expiration_date);
          console.log('📅 Fecha de expiración parseada:', expirationDate);
          
          if (!isNaN(expirationDate.getTime())) {
            // Crear fechas limpias solo con año, mes y día (sin horas)
            const today = new Date();
            const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const expiryClean = new Date(expirationDate.getFullYear(), expirationDate.getMonth(), expirationDate.getDate());
            
            console.log('📅 Hoy (limpio):', todayClean);
            console.log('📅 Expiración (limpio):', expiryClean);
            
            // Calcular diferencia en milisegundos y convertir a días
            const diffTime = expiryClean.getTime() - todayClean.getTime();
            expiration_days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            console.log('🧮 Diferencia en ms:', diffTime);
            console.log('🧮 Días calculados:', expiration_days);
          } else {
            console.error('❌ Fecha de expiración inválida:', data.expiration_date);
          }
        } catch (error) {
          console.error('❌ Error al calcular días restantes:', error);
        }
      }
      
      // Agregar días restantes al objeto de datos
      const userDataWithDays = {
        ...data,
        expiration_days: Math.max(0, expiration_days) // Asegurar que no sea negativo
      };
      
      console.log('✅ Datos procesados del usuario:', userDataWithDays);
      setUserData(userDataWithDays);
      setIsUserCheckLoading(false);
      
      // Agregar log de verificación exitosa
      const logMessage = `Usuario verificado: ${userDataWithDays.username}`;
      const newLog = { [`${new Date().toLocaleTimeString()}`]: logMessage };
      setLogs(prev => [...prev, newLog]);
    };
    
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
    
    // Cleanup listeners al desmontar el componente
    return () => {
      if (window.dtCheckUserStartedListener) {
        delete window.dtCheckUserStartedListener;
      }
      if (window.dtCheckUserModelListener) {
        delete window.dtCheckUserModelListener;
      }
    };
  }, []);

  // Manejadores de eventos
  const handleToggleConnection = () => {
    try {
      if (connectionState === 'DISCONNECTED') {
        // Validar credenciales
        const hasCredentials = username.trim() && password.trim();
        if (!hasCredentials) {
          setIsCredentialsRequiredModalOpen(true);
          return;
        }

        // Validar servidor seleccionado
        const hasServerSelected = selectedConfig && selectedConfig !== 'Elija un servidor';
        if (!hasServerSelected) {
          setIsServerRequiredModalOpen(true);
          return;
        }

        console.log('🚀 Iniciando conexión VPN...');
        setConnectionState('CONNECTING');
        
        // Llamar función nativa para iniciar VPN
        window?.DtExecuteVpnStart?.execute();
        
        // Simular conexión (en la app real esto vendría del callback nativo)
        setTimeout(() => {
          const newState = window?.DtGetVpnState?.execute() || 'CONNECTED';
          setConnectionState(newState);
          console.log('✅ VPN conectada');
          
          // Verificar usuario automáticamente cuando se conecte
          if (newState === 'CONNECTED') {
            console.log('🔄 Verificando usuario automáticamente...');
            handleCheckUser(true);
          }
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

  // Manejadores para los nuevos modales
  const handleCredentialsRequired = () => {
    setIsCredentialsRequiredModalOpen(false);
    setIsCredentialsModalOpen(true);
  };

  const handleServerRequired = () => {
    setIsServerRequiredModalOpen(false);
    setIsConfigPageOpen(true);
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

  const handleCheckUser = (isAutomatic = false) => {
    try {
      console.log('👤 Verificando usuario...');
      setIsUserCheckLoading(true);
      setIsUserCheckModalOpen(true);
      
      // Llamar función nativa para verificar usuario
      window?.DtStartCheckUser?.execute();
      
      // Los datos del usuario se procesarán automáticamente a través del listener
      // window.dtCheckUserModelListener que configuramos en useEffect
      
      // Como fallback, en caso de que el listener no funcione
      setTimeout(() => {
        if (isUserCheckLoading) {
          console.log('⚠️ Timeout alcanzado, generando datos de fallback');
          
          // Solo generar fallback si aún está cargando (listener no funcionó)
          const fallbackData = {
            username: username || 'OceanUser',
            expiration_date: "2025-06-22", // Fecha fija para testing
            count_connections: Math.floor(Math.random() * 2) + 1,
            limit_connections: 3
          };
          
          // Calcular días restantes
          let expiration_days = 30; // Valor por defecto
          try {
            const expirationDate = new Date(fallbackData.expiration_date);
            console.log('📅 Fecha de expiración fallback:', expirationDate);
            
            if (!isNaN(expirationDate.getTime())) {
              // Crear fechas limpias solo con año, mes y día (sin horas)
              const today = new Date();
              const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
              const expiryClean = new Date(expirationDate.getFullYear(), expirationDate.getMonth(), expirationDate.getDate());
              
              // Calcular diferencia en milisegundos y convertir a días
              const diffTime = expiryClean.getTime() - todayClean.getTime();
              expiration_days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              
              console.log('🧮 Días calculados (fallback):', expiration_days);
            } else {
              console.error('❌ Fecha de expiración fallback inválida');
              expiration_days = 30; // Valor por defecto
            }
          } catch (error) {
            console.error('❌ Error al calcular días restantes (fallback):', error);
            expiration_days = 30; // Valor por defecto
          }
          
          const userDataWithDays = {
            ...fallbackData,
            expiration_days
          };
          
          setUserData(userDataWithDays);
          setIsUserCheckLoading(false);
          
          const logMessage = isAutomatic 
            ? `Conexión exitosa - Usuario verificado: ${userDataWithDays.username}`
            : `Usuario verificado: ${userDataWithDays.username}`;
          
          const newLog = { [`${new Date().toLocaleTimeString()}`]: logMessage };
          setLogs(prev => [...prev, newLog]);
          
          console.log('✅ Usuario verificado (fallback):', userDataWithDays);
        }
      }, 3000); // Aumentado a 3 segundos para dar más tiempo al listener
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
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-vpn-bg-secondary to-vpn-bg-modal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <Header 
        onMenuToggle={() => setIsSidebarOpen(true)} 
        connectionState={connectionState} 
        onCredentialsOpen={() => setIsCredentialsModalOpen(true)}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onUpdate={handleUpdate}
        onShowLogs={() => setIsLogsModalOpen(true)}
        onCheckUser={handleCheckUser}
        onBatteryOptimization={handleBatteryOptimization}
        connectionState={connectionState}
        userData={userData}
      />
      
      <main className="pt-16 xs:pt-18 sm:pt-20 pb-20 px-3 xs:px-4 sm:px-6 safe-area-bottom min-h-screen relative">
        {/* Botón de conexión centrado fijo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <PowerButton 
              isConnected={isConnected}
              connectionState={connectionState}
              onToggle={handleToggleConnection}
            />
          </div>
        </div>
        
        {/* Selector de servidor en la parte inferior */}
        <InputFields
          config={selectedConfig}
          username={username}
          password={password}
          uuid={uuid}            onConfigClick={() => setIsConfigPageOpen(true)}
          onCredentialsClick={() => setIsCredentialsModalOpen(true)}
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
          onUuidChange={handleUuidChange}
          isConnected={isConnected}
          showUsername={showUsername}
          showPassword={showPassword}
          showUuid={showUuid}
        />
      </main>

      {/* Páginas */}
      <ConfigPage
        isOpen={isConfigPageOpen}
        onClose={() => setIsConfigPageOpen(false)}
        onConfigSelect={handleConfigSelect}
        configs={configs}
        selectedConfig={selectedConfig}
      />

      <CredentialsModal
        isOpen={isCredentialsModalOpen}
        onClose={() => setIsCredentialsModalOpen(false)}
        username={username}
        password={password}
        uuid={uuid}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onUuidChange={handleUuidChange}
        showUsername={showUsername}
        showPassword={showPassword}
        showUuid={showUuid}
        isConnected={isConnected}
      />

      <LogsPage
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

      <CredentialsRequiredModal
        isOpen={isCredentialsRequiredModalOpen}
        onClose={() => setIsCredentialsRequiredModalOpen(false)}
        onOpenCredentials={handleCredentialsRequired}
      />

      <ServerRequiredModal
        isOpen={isServerRequiredModalOpen}
        onClose={() => setIsServerRequiredModalOpen(false)}
        onOpenConfig={handleServerRequired}
      />
    </div>
  );
}

export default App;
