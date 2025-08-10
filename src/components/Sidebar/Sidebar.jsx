import React, { useState } from 'react';
import PricingPage from '../PricingPage/PricingPage';
import WholesalePricingPage from '../Pages/WholesalePricingPage/WholesalePricingPage';
// import PlayTVPage from '../Pages/PlayTVPage/PlayTVPage';

const Sidebar = ({ 
  isOpen, 
  onClose, 
  onUpdate, 
  onShowLogs, 
  onCheckUser, 
  onBatteryOptimization,
  connectionState, // Agregamos el estado de conexión
  userData // Agregamos los datos del usuario
}) => {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isWholesalePageOpen, setIsWholesalePageOpen] = useState(false);
  const [isPlayTVPageOpen, setIsPlayTVPageOpen] = useState(false);

  const menuItems = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <g fill="none">
            <path fill="url(#fluentColorPremium160)" d="M6.625 2H3.5a.5.5 0 0 0-.447.276l-2 4h4.503z"/>
            <path fill="url(#fluentColorPremium161)" d="M10.444 6.276L9.375 2H12.5a.5.5 0 0 1 .447.276l2 4z"/>
            <path fill="url(#fluentColorPremium162)" d="M6.015 2.379A.5.5 0 0 1 6.5 2h3a.5.5 0 0 1 .485.379l1 4q.015.06.015.121H5a.5.5 0 0 1 .015-.121z"/>
            <path fill="url(#fluentColorPremium163)" d="M5.568 6H1.191l-.138.276a.5.5 0 0 0 .059.54l6.5 8a.5.5 0 0 0 .765.012z"/>
            <path fill="url(#fluentColorPremium164)" d="M7.623 14.828L10.432 6h4.377l.138.276a.5.5 0 0 1-.059.54l-6.5 8a.5.5 0 0 1-.765.012"/>
            <path fill="url(#fluentColorPremium165)" d="m5.11 6l-.095.379a.5.5 0 0 0 .008.27l2.5 8a.5.5 0 0 0 .954 0l2.5-8a.5.5 0 0 0 .008-.27L10.89 6z"/>
            <path fill="url(#fluentColorPremium166)" fillOpacity="0.7" d="M3.5 2a.5.5 0 0 0-.447.276l-2 4a.5.5 0 0 0 .059.54l6.5 8a.5.5 0 0 0 .776 0l6.5-8a.5.5 0 0 0 .06-.54l-2-4A.5.5 0 0 0 12.5 2z"/>
            <defs>
              <linearGradient id="fluentColorPremium160" x1="5.829" x2="3.513" y1=".218" y2="5.76" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9ff0f9"/>
                <stop offset="1" stopColor="#29c3ff"/>
              </linearGradient>
              <linearGradient id="fluentColorPremium161" x1="11.365" x2="14.004" y1="2" y2="8.632" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0fafff"/>
                <stop offset="1" stopColor="#102784"/>
              </linearGradient>  
              <linearGradient id="fluentColorPremium162" x1="8" x2="8" y1="2" y2="7.625" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3bd5ff"/>
                <stop offset="1" stopColor="#367af2"/>
              </linearGradient>
              <linearGradient id="fluentColorPremium163" x1="2.302" x2="7.818" y1="4.2" y2="14.84" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0094f0"/>
                <stop offset="1" stopColor="#6ce0ff"/>
              </linearGradient>
              <linearGradient id="fluentColorPremium164" x1="16.736" x2="8.517" y1="1.5" y2="13.828" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1b44b1"/>
                <stop offset="1" stopColor="#2052cb"/>
              </linearGradient>
              <linearGradient id="fluentColorPremium165" x1="7.996" x2="7.996" y1="2.85" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2052cb"/>
                <stop offset="1" stopColor="#0fafff"/>
              </linearGradient>
              <linearGradient id="fluentColorPremium166" x1="-.422" x2="10.764" y1="-10.242" y2="16.053" gradientUnits="userSpaceOnUse">
                <stop offset=".533" stopColor="#ff6ce8" stopOpacity="0"/>
                <stop offset="1" stopColor="#ff6ce8"/>
              </linearGradient>
            </defs>
          </g>
        </svg>
      ), 
      text: 'Comprar Acesso', 
      action: () => {
        console.log('🛒 Abrir modal de precios');
        setIsPricingModalOpen(true);
      }, 
      special: true 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28">
          <g fill="none">
            <path fill="url(#fluentColorToolbox280)" d="M8.002 8.5V6.248a2.25 2.25 0 0 1 2.25-2.25h7.501a2.25 2.25 0 0 1 2.25 2.25V8.5h-1.5V6.248a.75.75 0 0 0-.75-.75h-7.501a.75.75 0 0 0-.75.75V8.5z"/>
            <path fill="url(#fluentColorToolbox281)" d="M4.25 23.996A2.25 2.25 0 0 1 2 21.746V13.5h24.004v8.246a2.25 2.25 0 0 1-2.25 2.25z"/>
            <path fill="url(#fluentColorToolbox282)" d="M2 10.246a2.25 2.25 0 0 1 2.25-2.25h19.504a2.25 2.25 0 0 1 2.25 2.25V14H2z"/>
            <path fill="url(#fluentColorToolbox283)" d="M19.756 12a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"/>
            <path fill="url(#fluentColorToolbox284)" d="M8.256 12a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"/>
            <defs>
              <linearGradient id="fluentColorToolbox280" x1="3.716" x2="4.283" y1="3.998" y2="7.934" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b9c0c7"/>
                <stop offset="1" stopColor="#70777d"/>
              </linearGradient>
              <linearGradient id="fluentColorToolbox281" x1=".5" x2="2.403" y1="10.939" y2="33.316" gradientUnits="userSpaceOnUse">
                <stop offset=".125" stopColor="#f97dbd"/>
                <stop offset="1" stopColor="#d7257d"/>
              </linearGradient>
              <linearGradient id="fluentColorToolbox282" x1=".5" x2="1.118" y1="5.369" y2="22.131" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97dbd"/>
                <stop offset="1" stopColor="#d7257d"/>
              </linearGradient>
              <linearGradient id="fluentColorToolbox283" x1="2.863" x2="3.64" y1="12" y2="16.783" gradientUnits="userSpaceOnUse">
                <stop stopColor="#efefef"/>
                <stop offset="1" stopColor="#dadada"/>
              </linearGradient>
              <linearGradient id="fluentColorToolbox284" x1="2.863" x2="3.64" y1="12" y2="16.783" gradientUnits="userSpaceOnUse">
                <stop stopColor="#efefef"/>
                <stop offset="1" stopColor="#dadada"/>
              </linearGradient>
            </defs>
          </g>
        </svg>
      ), 
      text: 'Seja Revendedor', 
      action: () => {
        console.log('💼 Abrir precios para reventa');
        setIsWholesalePageOpen(true);
      }, 
      special: true 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
          <g fill="none">
            <path fill="url(#fluentColorVideo480)" d="m22.5 24l16.233-11.325c2.221-1.55 5.267.04 5.267 2.747v17.156c0 2.708-3.046 4.297-5.267 2.747z"/>
            <path fill="url(#fluentColorVideo482)" fillOpacity="0.75" d="m22.5 24l16.233-11.325c2.221-1.55 5.267.04 5.267 2.747v17.156c0 2.708-3.046 4.297-5.267 2.747z"/>
            <path fill="url(#fluentColorVideo481)" d="M4 16.25A6.25 6.25 0 0 1 10.25 10h14.5A6.25 6.25 0 0 1 31 16.25v15.5A6.25 6.25 0 0 1 24.75 38h-14.5A6.25 6.25 0 0 1 4 31.75z"/>
            <path fill="url(#fluentColorVideo483)" d="M8 30a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H12a4 4 0 0 1-4-4" opacity="0.5"/>
            <path fill="#babaff" d="M12.026 28C10.907 28 10 28.922 10 30.059s.907 2.059 2.026 2.059h4.051c1.119 0 2.026-.922 2.026-2.06c0-1.136-.907-2.058-2.026-2.058zm9.948 4.118c1.12 0 2.026-.922 2.026-2.06C24 28.923 23.093 28 21.974 28s-2.025.922-2.025 2.059s.906 2.059 2.025 2.059"/>
            <defs>
              <radialGradient id="fluentColorVideo480" cx="0" cy="0" r="1" gradientTransform="rotate(71.85 10.87 27.523)scale(33.2683 65.6431)" gradientUnits="userSpaceOnUse">
                <stop offset=".081" stopColor="#f08af4"/>
                <stop offset=".394" stopColor="#9c6cfe"/>
                <stop offset="1" stopColor="#4e44db"/>
              </radialGradient>
              <radialGradient id="fluentColorVideo481" cx="0" cy="0" r="1" gradientTransform="matrix(31.06481 29.63332 -62.19623 65.20073 -.908 11.167)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f08af4"/>
                <stop offset=".341" stopColor="#9c6cfe"/>
                <stop offset="1" stopColor="#4e44db"/>
              </radialGradient>
              <linearGradient id="fluentColorVideo482" x1="27.534" x2="43.979" y1="24" y2="23.414" gradientUnits="userSpaceOnUse">
                <stop stopColor="#312a9a"/>
                <stop offset="1" stopColor="#312a9a" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="fluentColorVideo483" x1="7.591" x2="10.308" y1="26" y2="36.688" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b148a"/>
                <stop offset="1" stopColor="#4b20a0"/>
              </linearGradient>
            </defs>
          </g>
        </svg>
      ), 
      text: 'PlayTV', 
      action: () => {
        console.log('📺 Abrir PlayTV');
        setIsPlayTVPageOpen(true);
      }, 
      special: true 
    },
  ];

  const actionItems = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
          <g fill="none">
            <path fill="url(#fluentColorPerson160)" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8z"/>
            <path fill="url(#fluentColorPerson161)" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8z"/>
            <path fill="url(#fluentColorPerson162)" d="M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5"/>
            <defs>
              <linearGradient id="fluentColorPerson160" x1="5.378" x2="7.616" y1="8.798" y2="14.754" gradientUnits="userSpaceOnUse">
                <stop offset=".125" stopColor="#9c6cfe"/>
                <stop offset="1" stopColor="#7a41dc"/>
              </linearGradient>
              <linearGradient id="fluentColorPerson161" x1="8" x2="11.164" y1="7.286" y2="17.139" gradientUnits="userSpaceOnUse">
                <stop stopColor="#885edb" stopOpacity="0"/>
                <stop offset="1" stopColor="#e362f8"/>
              </linearGradient>
              <linearGradient id="fluentColorPerson162" x1="6.558" x2="9.361" y1="2.231" y2="6.707" gradientUnits="userSpaceOnUse">
                <stop offset=".125" stopColor="#9c6cfe"/>
                <stop offset="1" stopColor="#7a41dc"/>
              </linearGradient>
            </defs>
          </g>
        </svg>
      ), 
      text: 'Verificar Usuario', 
      action: onCheckUser 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
          <g fill="none">
            <path fill="url(#fluentColorDocumentText160)" d="M8.004 1L9.5 4.5L13 6l-.008 7.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 13.5v-11A1.5 1.5 0 0 1 4.5 1z"/>
            <path fill="url(#fluentColorDocumentText163)" fillOpacity="0.5" d="M8.004 1L9.5 4.5L13 6l-.008 7.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 13.5v-11A1.5 1.5 0 0 1 4.5 1z"/>
            <path fill="url(#fluentColorDocumentText161)" d="M8 4.5V1l5 5H9.5A1.5 1.5 0 0 1 8 4.5"/>
            <path fill="url(#fluentColorDocumentText162)" fillOpacity="0.9" d="M5.5 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
            <defs>
              <linearGradient id="fluentColorDocumentText160" x1="9.994" x2="11.264" y1="1" y2="12.781" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6ce0ff"/>
                <stop offset="1" stopColor="#4894fe"/>
              </linearGradient>
              <linearGradient id="fluentColorDocumentText161" x1="10.492" x2="9.242" y1="3.083" y2="5.167" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9ff0f9"/>
                <stop offset="1" stopColor="#b3e0ff"/>
              </linearGradient>
              <linearGradient id="fluentColorDocumentText162" x1="11" x2="5.553" y1="15" y2="5.677" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9deaff"/>
                <stop offset="1" stopColor="#fff"/>
              </linearGradient>
              <radialGradient id="fluentColorDocumentText163" cx="0" cy="0" r="1" gradientTransform="rotate(130.372 6.372 3.818)scale(8.35524 4.87457)" gradientUnits="userSpaceOnUse">
                <stop offset=".362" stopColor="#4a43cb"/>
                <stop offset="1" stopColor="#4a43cb" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </g>
        </svg>
      ), 
      text: 'Ver Registros', 
      action: onShowLogs 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
          <g fill="none">
            <path fill="url(#fluentColorArrowSync160)" d="M6.97.47a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 0 1 0 1.06L8.03 5.03a.75.75 0 0 1-1.06-1.06l.43-.43a4.5 4.5 0 0 0-2.28 7.918a.75.75 0 0 1-.961 1.152A6 6 0 0 1 7.463 2.024L6.97 1.53a.75.75 0 0 1 0-1.06m3.815 3.016a.75.75 0 0 1 1.056-.096a6 6 0 0 1-3.304 10.586l.493.494a.75.75 0 1 1-1.06 1.06l-1.75-1.75a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 0 1 1.06 1.06l-.43.43a4.5 4.5 0 0 0 2.28-7.918a.75.75 0 0 1-.095-1.056"/>
            <defs>
              <linearGradient id="fluentColorArrowSync160" x1="11.2" x2="4.8" y1="13.037" y2=".25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#222a91"/>
                <stop offset="1" stopColor="#20ac9d"/>
              </linearGradient>
            </defs>
          </g>
        </svg>
      ), 
      text: 'Atualizar', 
      action: onUpdate 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
          <g fill="none">
            <path fill="url(#fluentColorWrench200)" d="M13.5 2a4.5 4.5 0 0 0-4.418 5.36l-6.425 6.658a2.357 2.357 0 0 0 3.374 3.293l6.364-6.448Q12.927 11 13.5 11a4.5 4.5 0 0 0 4.386-5.51a.5.5 0 0 0-.841-.242L14.5 7.793L12.207 5.5l2.545-2.545a.5.5 0 0 0-.241-.84A4.5 4.5 0 0 0 13.5 2"/>
            <defs>
              <linearGradient id="fluentColorWrench200" x1="8.5" x2="11.356" y1="3" y2="18.576" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2bdabe"/>
                <stop offset="1" stopColor="#0067bf"/>
              </linearGradient>
            </defs>
          </g>
        </svg>
      ), 
      text: 'Otimizar Bateria', 
      action: onBatteryOptimization 
    },
  ];

  const handleItemClick = (action) => {
    if (action) {
      action();
    }
    onClose();
  };

  return (
    <>
      {/* Overlay simplificado para mejor rendimiento */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={onClose}
      />
      
      {/* Sidebar optimizado - menos efectos complejos */}
      <div className={`fixed top-0 left-0 bottom-0 w-72 sm:w-80 max-w-[85vw] bg-vpn-bg-modal/95 border-r border-primary-500/20 z-50 transition-transform duration-200 ease-out shadow-lg ${
        isOpen ? 'transform-none' : '-translate-x-full'
      }`}>
        
        {/* Container principal con safe areas */}
        <div className="h-full flex flex-col safe-area-top safe-area-bottom safe-area-left">
          
          {/* Header simplificado */}
          <div className="flex-shrink-0 flex items-center justify-between p-3 sm:p-4 border-b border-primary-500/20 bg-primary-500/5">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary-500/80 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🛡️</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm sm:text-base font-bold text-white truncate">
                  JJSecure
                </div>
                <div className="text-xs text-vpn-gray-text">
                  VPN Segura
                </div>
              </div>
            </div>
            <button 
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-primary-500/20 transition-colors duration-200 text-white flex-shrink-0 ml-2"
              onClick={onClose}
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>
          
          {/* Content optimizado */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden sidebar-scrollbar">
            <div className="p-3 sm:p-4">
              
              {/* Menu principal simplificado */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-semibold text-vpn-gray-text uppercase tracking-wider mb-3 px-2">
                  👑 Premium
                </div>
                {menuItems.map((item, index) => (
                  <button 
                    key={index}
                    className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-200 min-h-[52px] ${
                      item.special 
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-vpn-purple-dark hover:to-primary-500 text-white shadow-lg hover:shadow-primary-500/20 border border-primary-500/30'
                        : 'bg-white/5 hover:bg-primary-500/10 text-white'
                    }`}
                    onClick={() => handleItemClick(item.action)}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.special 
                        ? 'bg-white/20 backdrop-blur-sm border border-white/10'
                        : 'bg-primary-500/20'
                    }`}>
                      {typeof item.icon === 'string' ? (
                        <span className="text-base">{item.icon}</span>
                      ) : (
                        item.icon
                      )}
                    </div>
                    <span className={`font-medium text-base truncate ${
                      item.special ? 'font-bold' : ''
                    }`}>
                      {item.text}
                    </span>
                    {item.special && (
                      <i className="fas fa-external-link-alt text-xs text-white/80 ml-auto"></i>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Separador simple */}
              <div className="h-px bg-primary-500/30 my-6"></div>
              
              {/* Sección de acciones simplificada */}
              <div className="space-y-1 mb-6">
                <div className="text-xs font-semibold text-vpn-gray-text uppercase tracking-wider mb-3 px-2">
                  ⚡ Mais Opções
                </div>
                {actionItems.map((item, index) => (
                  <button 
                    key={`action-${index}`}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg bg-transparent hover:bg-primary-500/10 text-vpn-gray-text hover:text-white transition-all duration-150 min-h-[40px]"
                    onClick={() => handleItemClick(item.action)}
                  >
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {typeof item.icon === 'string' ? (
                        <span className="text-sm">{item.icon}</span>
                      ) : (
                        item.icon
                      )}
                    </div>
                    <span className="font-medium text-sm truncate">
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Información de estado simplificada */}
              <div className="space-y-3 mb-4">
                <div className="text-xs font-semibold text-vpn-gray-text uppercase tracking-wider mb-3 px-2">
                  📊 Status
                </div>
                
                {/* Estado VPN simple */}
                <div className="bg-white/5 rounded-lg p-4 border border-primary-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        connectionState === 'CONNECTED' ? 'bg-vpn-green-success/20' :
                        connectionState === 'CONNECTING' ? 'bg-primary-500/20' :
                        'bg-vpn-red-error/20'
                      }`}>
                        <span className="text-lg">
                          {connectionState === 'CONNECTED' ? '🟢' :
                           connectionState === 'CONNECTING' ? '🟡' :
                           '🔴'}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs text-vpn-gray-text mb-1">Status VPN</div>
                        <div className={`text-sm font-bold transition-all duration-300 ${
                          connectionState === 'CONNECTED' ? 'text-vpn-green-success' :
                          connectionState === 'CONNECTING' ? 'text-accent-500' :
                          'text-vpn-red-error'
                        }`}>
                          {connectionState === 'CONNECTED' ? 'Conectado' :
                           connectionState === 'CONNECTING' ? 'Conectando...' :
                           'Desconectado'}
                        </div>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      connectionState === 'CONNECTED' ? 'bg-vpn-green-success animate-pulse' :
                      connectionState === 'CONNECTING' ? 'bg-accent-500 animate-pulse' :
                      'bg-vpn-red-error'
                    }`}></div>
                  </div>
                </div>
                
                {/* Conexiones activas con glassmorphism */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-500/20 border border-primary-500/40 rounded-xl flex items-center justify-center">
                        <span className="text-lg">👥</span>
                      </div>
                      <div>
                        <div className="text-xs text-vpn-gray-text mb-1">Conexiones</div>
                        <div className="text-sm text-white font-bold">
                          {userData ? 
                            `${userData.count_connections || 0} / ${userData.limit_connections || 0}` : 
                            '0 / 0'
                          }
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: userData?.limit_connections || 5 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < (userData?.count_connections || 0) ? 'bg-accent-500' : 'bg-white/20'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Padding extra para asegurar scroll */}
              <div className="h-4"></div>
            </div>
          </div>
          
          {/* Footer simple */}
          <div className="flex-shrink-0 p-3 sm:p-4 border-t border-primary-500/20 bg-primary-500/5">
            <button 
              className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg bg-vpn-red-error/10 hover:bg-vpn-red-error/20 text-vpn-red-error transition-all duration-150 min-h-[44px]"
              onClick={onClose}
            >
              <div className="w-8 h-8 bg-vpn-red-error/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🚪</span>
              </div>
              <span className="font-medium text-sm sm:text-base">
                Fechar
              </span>
            </button>
          </div>
          
        </div>
      </div>

      {/* Página de Precios */}
      <PricingPage
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />

      {/* Página de Precios Mayorista */}
      <WholesalePricingPage
        isOpen={isWholesalePageOpen}
        onClose={() => setIsWholesalePageOpen(false)}
      />

      {/* Página de PlayTV */}
      <PlayTV Página 
        isOpen={isPlayTVPageOpen}
        onClose={() => setIsPlayTVPageOpen(false)}
      />
    </>
  );
};

export default Sidebar;
