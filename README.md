# Sistema de Gestión de Documentos - Luxe Intérieur

## 📋 Descripción
Plataforma web para la gestión integral de documentos de Luxe Intérieur con navegación lateral intuitiva, formularios dinámicos y generación de PDFs profesionales.

## 🎯 Características

### ✅ Implementadas
- **Dashboard**: Página de inicio con estadísticas y mapa de procesos
- **Generador de Facturas**: Formulario completo con cálculo automático de totales
- **Generación de PDF**: Exporta facturas con formato profesional (datos de prueba)
- **Navegación Lateral**: Menú intuitivo con tema dorado/negro
- **Diseño Responsivo**: Funciona en desktop, tablet y móvil
- **Interfaz Profesional**: Estilo Luxe Intérieur con colores corporativos

### 🔄 En Desarrollo
- Propuestas de Diseño
- Cotizaciones
- Contratos

## 📁 Estructura de Archivos

```
Gestion Documentos/
├── index.html                 # Página principal
├── styles/
│   └── style.css             # Estilos CSS
├── js/
│   └── main.js               # Lógica JavaScript
└── img/
    └── mapa-procesos.webp    # [PENDIENTE: AGREGAR]
```

## 🚀 Cómo Usar

### 1. **Guardar la Imagen del Mapa de Procesos**
   - Toma la imagen **"MAPA DE PROCESOS"** que incluiste
   - Guárdala en la carpeta `img/` con el nombre: `mapa-procesos.webp`
   - Si preferencias guardarla en otro formato (jpg, png), actualiza la ruta en `index.html` línea ~97

### 2. **Abrir la Página**
   - Abre `index.html` en tu navegador web
   - La página cargará automáticamente

### 3. **Navegar por las Secciones**
   - **Dashboard**: Vista general con información de Luxe Intérieur
   - **Factura**: Genera facturas de prueba en PDF
   - **Propuestas, Cotizaciones, Contratos**: Placeholder para futuro desarrollo

### 4. **Generar una Factura de Prueba**
   - Ve a la sección **"Factura"** en el menú lateral
   - Verás un formulario pre-llenado con datos de ejemplo
   - Modifica los datos según necesites:
     - Número de factura
     - Datos del cliente
     - Items (descripción, cantidad, precio)
   - Los totales se calculan automáticamente (incluye IVA 19%)
   - Haz clic en **"📥 Generar PDF"**
   - El PDF se descargará con nombre: `Factura_[NUMERO]_[FECHA].pdf`

## 🎨 Personalización

### Cambiar Colores Corporativos
Edita `styles/style.css` - Variables de root:
```css
:root {
    --primary-color: #d4af37;      /* Color dorado Luxe */
    --dark-bg: #1a1a1a;            /* Fondo oscuro */
    --darker-bg: #0d0d0d;          /* Fondo más oscuro */
    --text-light: #ffffff;         /* Texto claro */
    --text-muted: #b0b0b0;         /* Texto atenuado */
}
```

### Agregar Nueva Sección de Menú
1. Añade un `<li>` en el `<ul class="nav-menu">` de `index.html`
2. Añade un `<div class="page">` con el contenido
3. Usa el mismo `data-page` en ambos lugares

Ejemplo:
```html
<!-- En el menú -->
<li><a href="#" class="nav-link" data-page="nueva">📌 Nueva Sección</a></li>

<!-- En el contenido -->
<div id="nueva" class="page">
    <h3>Mi Nueva Sección</h3>
    <!-- Tu contenido aquí -->
</div>
```

## 🔧 Requisitos Técnicos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Conexión a internet (para cargar la librería html2pdf desde CDN)
- No requiere servidor - funciona localmente

## 📚 Librerías Utilizadas
- **html2pdf.js**: Para generar archivos PDF desde HTML

## 💡 Próximas Mejoras
- [ ] Datos en base de datos
- [ ] Autenticación de usuarios
- [ ] Historial de documentos
- [ ] Plantillas de documentos personalizadas
- [ ] Firma digital
- [ ] Descarga de múltiples formatos

## 📞 Notas
- Los datos en el formulario de factura son **datos de prueba**
- Los cálculos son en **pesos colombianos (COP)**
- El IVA se calcula automáticamente al **19%**
- Puedes modificar y personalizar todo según necesites

---

**Luxe Intérieur** | Diseño que Transforma | Excelencia en Cada Detalle
