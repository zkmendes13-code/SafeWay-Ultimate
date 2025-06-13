#!/bin/bash

# Script para crear backup del proyecto VPN App
# Fecha: $(date +%Y%m%d-%H%M%S)

# Obtener la fecha y hora actual para el nombre del archivo
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
PROJECT_NAME="vpn-app"
BACKUP_NAME="${PROJECT_NAME}-backup-${TIMESTAMP}.zip"

# Directorio base del proyecto
PROJECT_DIR="/workspaces/codespaces-react"

echo "🔄 Creando backup del proyecto VPN App..."
echo "📁 Directorio: $PROJECT_DIR"
echo "📦 Archivo: $BACKUP_NAME"

# Crear el archivo ZIP excluyendo archivos innecesarios
cd "$PROJECT_DIR"

zip -r "$BACKUP_NAME" . \
  -x "node_modules/*" \
  -x "dist/*" \
  -x "build/*" \
  -x ".git/*" \
  -x ".vscode/*" \
  -x "*.log" \
  -x ".DS_Store" \
  -x "Thumbs.db" \
  -x "*.tmp" \
  -x "*.temp" \
  -x ".env.local" \
  -x ".env.*.local" \
  -x "coverage/*" \
  -x ".nyc_output/*" \
  -x "*.backup" \
  -x "*-backup-*.zip" \
  -x ".cache/*"

# Verificar si el archivo se creó correctamente
if [ -f "$BACKUP_NAME" ]; then
    FILE_SIZE=$(du -h "$BACKUP_NAME" | cut -f1)
    echo "✅ Backup creado exitosamente!"
    echo "📦 Archivo: $BACKUP_NAME"
    echo "📏 Tamaño: $FILE_SIZE"
    echo "📍 Ubicación: $PROJECT_DIR/$BACKUP_NAME"
    
    # Mostrar contenido del ZIP (primeras 20 líneas)
    echo ""
    echo "📋 Contenido del backup (vista previa):"
    unzip -l "$BACKUP_NAME" | head -20
    echo "..."
    echo ""
    echo "🎉 Backup completado con éxito!"
else
    echo "❌ Error: No se pudo crear el archivo de backup"
    exit 1
fi
