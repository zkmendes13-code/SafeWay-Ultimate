import React, { useState, useEffect, useMemo, useCallback } from 'react';

const ConfigPage = ({ isOpen, onClose, onConfigSelect, configs, selectedConfig }) => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedView, setSelectedView] = useState('grid'); // 'grid' o 'list'

  useEffect(() => {
    if (isOpen && configs.length > 0) {
      const initialExpanded = {};
      configs.forEach((_, index) => {
        initialExpanded[index] = false;
      });
      setExpandedCategories(initialExpanded);
    } else if (!isOpen) {
      setExpandedCategories({});
      setSearchTerm('');
    }
  }, [isOpen, configs]);

  // Optimización: Memoizar la función toggle para evitar re-renders
  const toggleCategory = useCallback((categoryIndex) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  }, []);

  // Optimización: Memoizar la función de selección
  const handleConfigSelect = useCallback((configId) => {
    onConfigSelect(configId);
    onClose();
  }, [onConfigSelect, onClose]);

  // Filtrar configs por búsqueda
  const filteredConfigs = useMemo(() => {
    if (!searchTerm) return configs;
    return configs.filter(category => 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.items?.some(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mode?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [configs, searchTerm]);

  // Memoizar los items renderizados para mejor performance
  const renderedCategories = useMemo(() => {
    return filteredConfigs.map((category, categoryIndex) => (
      <CategoryItem
        key={category.id}
        category={category}
        categoryIndex={categoryIndex}
        isExpanded={expandedCategories[categoryIndex]}
        onToggle={toggleCategory}
        onConfigSelect={handleConfigSelect}
        viewMode={selectedView}
        searchTerm={searchTerm}
        selectedConfig={selectedConfig}
      />
    ));
  }, [filteredConfigs, expandedCategories, toggleCategory, handleConfigSelect, selectedView, searchTerm]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col overflow-hidden"
      style={{
        paddingTop: 'max(env(safe-area-inset-top), 20px)',
        paddingBottom: 'max(env(safe-area-inset-bottom), 10px)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}
    >
      {/* Fondo optimizado - reducido a gradientes estáticos */}
      <div className="absolute inset-0 bg-dark-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/40 to-accent-900/25"></div>
      
      {/* Solo 2 elementos decorativos estáticos para reducir carga */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-accent-400/25 rounded-full blur-2xl"></div>
      </div>
      
      {/* Gradiente de superposición simple */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header rediseñado con gradiente */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="flex items-center px-3 sm:px-4 py-3 sm:py-4 backdrop-blur-md bg-black/20">
          <button 
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200 text-white mr-3 sm:mr-4 active:scale-95 shadow-lg flex-shrink-0"
          >
            <i className="fas fa-arrow-left text-base sm:text-lg"></i>
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="text-white text-lg sm:text-xl font-bold truncate">Servidores VPN</h2>
            <p className="text-white/80 text-xs sm:text-sm truncate">
              {selectedConfig ? `Seleccionado: ${selectedConfig}` : `${configs.length} ubicaciones disponibles`}
            </p>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button 
              onClick={() => setSelectedView(selectedView === 'grid' ? 'list' : 'grid')}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-all duration-200 text-white active:scale-95"
            >
              <i className={`fas ${selectedView === 'grid' ? 'fa-list' : 'fa-th-large'} text-base sm:text-lg`}></i>
            </button>
          </div>
        </div>
        
        {/* Barra de búsqueda moderna */}
        <div className="px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-white/60 text-sm"></i>
            </div>
            <input
              type="text"
              placeholder="Buscar servidores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-white/20 backdrop-blur-md rounded-xl text-white placeholder-white/60 border border-white/30 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 text-sm sm:text-base"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <i className="fas fa-times text-white/60 hover:text-white transition-colors text-sm"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-dark-800/60 backdrop-blur-sm border-b border-primary-500/20 px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-2 xs:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-vpn-green-success rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-vpn-green-success text-xs sm:text-sm font-medium">Online</span>
            </div>
            <div className="text-vpn-gray-text text-xs sm:text-sm truncate">
              {filteredConfigs.reduce((acc, cat) => acc + (cat.items?.length || 0), 0)} servidores
            </div>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <i className="fas fa-shield-alt text-accent-500 text-xs sm:text-sm"></i>
            <span className="text-accent-500 text-xs sm:text-sm font-medium">Cifrado AES-256</span>
          </div>
        </div>
      </div>

      {/* Content scrollable optimizado */}
      <div 
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain'
        }}
      >
        <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-3 sm:space-y-4 pb-4 sm:pb-6 max-w-full">
          {filteredConfigs.length > 0 ? (
            renderedCategories
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-search text-accent-500 text-2xl"></i>
              </div>
              <h3 className="text-white text-base sm:text-lg font-medium mb-2 text-center">No se encontraron servidores</h3>
              <p className="text-vpn-gray-text text-xs sm:text-sm text-center max-w-xs px-4">
                Tente um termo de pesquisa diferente
              </p>
            </div>
          )}
        </div>

        {/* Info Section rediseñada */}
        <div className="px-3 sm:px-4 pb-4 sm:pb-6">
          <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm rounded-2xl border border-primary-500/30 p-3 sm:p-4">
            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fas fa-crown text-white text-xs sm:text-sm"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 break-words">Servidores Premium</h3>
                <p className="text-vpn-gray-text text-xs sm:text-sm leading-relaxed break-words">
                  Acesse servidores de alta velocidade com largura de banda ilimitada e conexões estáveis.
                </p>
                <div className="flex flex-col xs:flex-row xs:items-center mt-3 space-y-2 xs:space-y-0 xs:space-x-4">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-bolt text-accent-500 text-xs"></i>
                    <span className="text-accent-500 text-xs font-medium">Ultra rápido</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-infinity text-accent-500 text-xs"></i>
                    <span className="text-accent-500 text-xs font-medium">Sem limites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

// Componente rediseñado para cada categoría con diseño moderno
const CategoryItem = React.memo(({ category, categoryIndex, isExpanded, onToggle, onConfigSelect, viewMode, searchTerm, selectedConfig }) => {
  const getCountryIcon = (name) => {
    // Mapeo de países a sus códigos para mostrar banderas
    const countryMap = {
      'Estados Unidos': '🇺🇸',
      'Reino Unido': '🇬🇧',
      'Canadá': '🇨🇦',
      'Alemania': '🇩🇪',
      'Francia': '🇫🇷',
      'Japón': '🇯🇵',
      'Australia': '🇦🇺',
      'Brasil': '🇧🇷',
      'México': '🇲🇽',
      'España': '🇪🇸',
      'Italia': '🇮🇹',
      'Holanda': '🇳🇱',
      'Suiza': '🇨🇭',
      'Singapur': '🇸🇬',
      'Corea del Sur': '🇰🇷'
    };
    return countryMap[name] || '🌍';
  };

  const activeServers = category.items?.filter(item => item.status === 'ATIVO').length || 0;
  const totalServers = category.items?.length || 0;
  const hasSelectedServer = category.items?.some(item => item.name === selectedConfig) || false;

  return (
    <div className="bg-dark-800/80 backdrop-blur-sm rounded-2xl border border-primary-500/20 overflow-hidden shadow-lg">
      {/* Category Header optimizado */}
      <button 
        className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-primary-500/10 active:bg-primary-500/15 transition-colors duration-150"
        onClick={() => onToggle(categoryIndex)}
      >
        <div className="flex items-center min-w-0 flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-md">
            <span className="text-xl sm:text-2xl">{getCountryIcon(category.name)}</span>
          </div>
          <div className="flex-1 text-left min-w-0">
            <h3 className="text-white font-semibold text-base sm:text-lg truncate">
              {category.name}
            </h3>
            <div className="flex flex-col xs:flex-row xs:items-center mt-1 space-y-1 xs:space-y-0 xs:space-x-3">
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${hasSelectedServer ? 'bg-accent-400 animate-pulse' : 'bg-vpn-green-success'}`}></div>
                <span className={`text-xs sm:text-sm font-medium ${hasSelectedServer ? 'text-accent-400' : 'text-vpn-green-success'}`}>
                  {hasSelectedServer ? '1 selecionado' : `${activeServers} disponibles`}
                </span>
              </div>
              <div className="hidden xs:block w-1 h-1 bg-vpn-gray-text/50 rounded-full"></div>
              <span className="text-vpn-gray-text text-xs sm:text-sm">{totalServers} total</span>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 ml-3 sm:ml-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
            <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-accent-500 transition-transform duration-200 text-xs sm:text-sm`}></i>
          </div>
        </div>
      </button>
      
      {/* Category Items - animación simplificada */}
      <div className={`transition-all duration-300 ease-out overflow-hidden ${
        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-primary-500/20 bg-primary-500/5">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 gap-2 p-3 sm:p-4">
              {category.items?.map((item, index) => (
                <ServerItemCard
                  key={item.id}
                  item={item}
                  onSelect={onConfigSelect}
                  searchTerm={searchTerm}
                  isSelected={item.name === selectedConfig}
                />
              ))}
            </div>
          ) : (
            <div className="divide-y divide-primary-500/10">
              {category.items?.map((item, index) => (
                <ServerItem
                  key={item.id}
                  item={item}
                  isLast={index === category.items.length - 1}
                  onSelect={onConfigSelect}
                  searchTerm={searchTerm}
                  isSelected={item.name === selectedConfig}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Componente de tarjeta optimizado para vista grid
const ServerItemCard = React.memo(({ item, onSelect, searchTerm, isSelected }) => {
  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={index} className="bg-accent-500/30 text-accent-400">{part}</span> : part
    );
  };

  return (
    <button 
      className={`w-full bg-dark-800/60 rounded-xl border p-3 sm:p-4 transition-colors duration-150 hover:bg-primary-500/10 active:bg-primary-500/15 min-w-0 ${
        isSelected 
          ? 'border-accent-500 bg-accent-500/10' 
          : 'border-primary-500/20 hover:border-primary-500/40'
      }`}
      onClick={() => onSelect(item.id)}
    >
      <div className="flex items-center space-x-3 min-w-0">
        <div className="relative flex-shrink-0">
          <img 
            src={item.icon} 
            alt={item.name}
            loading="lazy"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover shadow-md border border-primary-500/30" 
          />
          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-dark-800 ${
            isSelected 
              ? 'bg-accent-400' 
              : item.status === 'ATIVO' ? 'bg-vpn-green-success' : 'bg-vpn-red-error'
          }`}></div>
        </div>
        
        <div className="flex-1 text-left min-w-0">
          <div className="text-white font-medium text-xs sm:text-sm truncate">
            {highlightText(item.name, searchTerm)}
          </div>
          {item.description && (
            <div className="text-vpn-gray-text text-xs mt-0.5 truncate">
              {highlightText(item.description, searchTerm)}
            </div>
          )}
          <div className="flex flex-col xs:flex-row xs:items-center mt-1 space-y-1 xs:space-y-0 xs:space-x-2">
            <div className="bg-primary-500/20 text-accent-500 px-2 py-1 rounded-md text-xs font-medium border border-primary-500/30 truncate inline-block max-w-full">
              {item.mode
                ?.replace('SSH_', '')
                ?.replace('OVPN_', '')
                ?.replace('V2RAY - ', '')
                ?.replace('V2RAY_', '') || 'N/A'}
            </div>
            <div className={`px-2 py-1 rounded-md text-xs font-medium flex-shrink-0 inline-block ${
              isSelected
                ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                : item.status === 'ATIVO' 
                  ? 'bg-vpn-green-success/20 text-vpn-green-success border border-vpn-green-success/30' 
                  : 'bg-vpn-red-error/20 text-vpn-red-error border border-vpn-red-error/30'
            }`}>
              <div className="flex items-center space-x-1">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  isSelected 
                    ? 'bg-accent-400' 
                    : item.status === 'ATIVO' ? 'bg-vpn-green-success' : 'bg-vpn-red-error'
                }`}></div>
                <span>{isSelected ? 'SELECIONADO' : (item.status || 'N/A')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
            <i className="fas fa-chevron-right text-accent-500/70 text-xs"></i>
          </div>
        </div>
      </div>
    </button>
  );
});

// Componente optimizado para cada servidor en vista lista
const ServerItem = React.memo(({ item, isLast, onSelect, searchTerm, isSelected }) => {
  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={index} className="bg-accent-500/30 text-accent-400">{part}</span> : part
    );
  };

  return (
    <button 
      className={`w-full flex items-center p-3 sm:p-4 transition-colors duration-150 min-w-0 ${
        isSelected 
          ? 'bg-accent-500/10 hover:bg-accent-500/15 active:bg-accent-500/20' 
          : 'hover:bg-primary-500/10 active:bg-primary-500/15'
      }`}
      onClick={() => onSelect(item.id)}
    >
      <div className="relative mr-3 sm:mr-4 flex-shrink-0">
        <img 
          src={item.icon} 
          alt={item.name}
          loading="lazy"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover shadow-md border border-primary-500/20" 
        />
        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-dark-800 ${
          isSelected 
            ? 'bg-accent-400' 
            : item.status === 'ATIVO' ? 'bg-vpn-green-success' : 'bg-vpn-red-error'
        }`}></div>
      </div>
      
      <div className="flex-1 text-left min-w-0">
        <div className="text-white font-medium text-xs sm:text-sm truncate">
          {highlightText(item.name, searchTerm)}
        </div>
        {item.description && (
          <div className="text-vpn-gray-text text-xs mt-0.5 truncate">
            {highlightText(item.description, searchTerm)}
          </div>
        )}
        <div className="flex items-center mt-1 space-x-2 sm:space-x-3">
          <div className="bg-primary-500/20 text-accent-500 px-2 py-0.5 rounded-md text-xs font-medium border border-primary-500/30 truncate max-w-24 sm:max-w-32">
            {item.mode
              ?.replace('SSH_', '')
              ?.replace('OVPN_', '')
              ?.replace('V2RAY - ', '')
              ?.replace('V2RAY_', '') || 'N/A'}
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
        <div className={`px-2 py-1 rounded-md text-xs font-medium ${
          isSelected
            ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
            : item.status === 'ATIVO' 
              ? 'bg-vpn-green-success/20 text-vpn-green-success border border-vpn-green-success/30' 
              : 'bg-vpn-red-error/20 text-vpn-red-error border border-vpn-red-error/30'
        }`}>
          <div className="flex items-center space-x-1">
            <div className={`w-1.5 h-1.5 rounded-full ${
              isSelected 
                ? 'bg-accent-400' 
                : item.status === 'ATIVO' ? 'bg-vpn-green-success' : 'bg-vpn-red-error'
            }`}></div>
            <span className="hidden xs:inline">{isSelected ? 'SELECIONADO' : (item.status || 'N/A')}</span>
          </div>
        </div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-500/20 rounded-md flex items-center justify-center">
          <i className="fas fa-chevron-right text-accent-500/50 text-xs"></i>
        </div>
      </div>
    </button>
  );
});

export default ConfigPage;
