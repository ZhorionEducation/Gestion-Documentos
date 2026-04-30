// Base de datos de documentos categorizados
const documentos = {
    comercial: [
        { nombre: 'Formato de Cotización.pdf', desc: 'Plantilla para cotizaciones profesionales', url: 'img/Formato de Cotización.pdf' },
        { nombre: 'Formato Factura .pdf', desc: 'Formato de factura para ventas', url: 'img/Formato Factura .pdf' },
        { nombre: 'Folleto Profesional .pdf', desc: 'Folleto informativo de Luxe Intérieur', url: 'img/Folleto Profesional .pdf' },
        { nombre: 'PromesaValor.jpeg', desc: 'Promesa de valor visual', url: 'img/PromesaValor.jpeg' },
        { nombre: 'CadenaValor.jpeg', desc: 'Cadena de valor visual', url: 'img/CadenaValor.jpeg' },
    ],
    operativa: [
        { nombre: 'Actadeentregadeproyecto.docx', desc: 'Acta de entrega de proyecto', url: 'img/Actadeentregadeproyecto.docx' },
        { nombre: 'Bitácoradeproyecto.pdf', desc: 'Bitácora de proyecto', url: 'img/Bitácoradeproyecto.pdf' },
        { nombre: 'Checklistentregaproyecto.docx', desc: 'Checklist de entrega de proyecto', url: 'img/Checklistentregaproyecto.docx' },
        { nombre: 'Control de Cambios.pdf', desc: 'Control de cambios en proyectos', url: 'img/Control de Cambios.pdf' },
        { nombre: 'Control de gastos.pdf', desc: 'Control de gastos del proyecto', url: 'img/Control de gastos.pdf' },
        { nombre: 'FORMATO ACTA DE VISITA TECNICA.docx', desc: 'Formato de acta de visita técnica', url: 'img/FORMATO ACTA DE VISITA TECNICA.docx' },
        { nombre: 'Garantia de proyecto.pdf', desc: 'Garantía del proyecto', url: 'img/Garantia de proyecto.pdf' },
        { nombre: 'Orden de Trabajo.pdf', desc: 'Orden de trabajo operativa', url: 'img/Orden de Trabajo.pdf' },
        { nombre: '_Cronograma de Proyecto .pdf', desc: 'Cronograma del proyecto', url: 'img/_Cronograma de Proyecto .pdf' },
    ],
    compras: [
        { nombre: 'Formulario orden de compra .pdf', desc: 'Formulario para órdenes de compra', url: 'img/Formulario orden de compra .pdf' },
    ],
    talento: [
        { nombre: 'Actadereunión.docx', desc: 'Acta de reunión de recursos humanos', url: 'img/Actadereunión.docx' },
        { nombre: 'CONTROL DE ASISTENCIA MENSUAL.docx', desc: 'Control de asistencia mensual', url: 'img/CONTROL DE ASISTENCIA MENSUAL.docx' },
        { nombre: 'CONTRATO INDIVIDUAL DE TRABAJO.docx', desc: 'Contrato individual de trabajo', url: 'img/CONTRATO INDIVIDUAL DE TRABAJO.docx' },
        { nombre: 'GUIA DE NÓMINA LUXE INTERIEUR.docx', desc: 'Guía de nómina', url: 'img/GUIA DE NÓMINA LUXE INTERIEUR.docx' },
        { nombre: 'Manual de funciones.docx', desc: 'Manual de funciones por cargo', url: 'img/Manual de funciones.docx' },
    ],
    administrativa: [
        { nombre: 'MatrizRiesgosLuxe.xlsx', desc: 'Matriz de riesgos organizacional', url: 'img/MatrizRiesgosLuxe.xlsx' },
        { nombre: 'TRD.xlsx', desc: 'Tabla de retención documental', url: 'img/TRD.xlsx' },
        { nombre: 'LuxeIntérieur.docx', desc: 'Información general de la empresa', url: 'img/LuxeIntérieur.docx' },
        { nombre: 'CuentaBancaria.docx', desc: 'Información de cuenta bancaria', url: 'img/CuentaBancaria.docx' },
    ],
    legal: [
        { nombre: 'ACUERDO DE CONFIDENCIALIDAD.docx', desc: 'Acuerdo de confidencialidad', url: 'img/ACUERDO DE CONFIDENCIALIDAD.docx' },
        { nombre: 'POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES.docx', desc: 'Política de datos personales', url: 'img/POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES.docx' },
        { nombre: 'POLÍTICA DE USO DE RECURSOS.docx', desc: 'Política de uso de recursos', url: 'img/POLÍTICA DE USO DE RECURSOS.docx' },
        { nombre: 'SG-SST.docx', desc: 'Sistema de Gestión de Seguridad y Salud en el Trabajo', url: 'img/SG-SST.docx' },
        { nombre: 'Reglamento Interno de Trabajo.docx', desc: 'Reglamento interno', url: 'img/Reglamento Interno de Trabajo.docx' },
        { nombre: 'Contrato de Servicios.pdf', desc: 'Contrato de servicios', url: 'img/Contrato de Servicios.pdf' },
    ],
    financiera: [
        { nombre: 'Declaraciones Tributarias.pdf', desc: 'Declaraciones tributarias', url: 'img/Declaraciones Tributarias.pdf' },
        { nombre: 'Estados Financieros.pdf', desc: 'Estados financieros', url: 'img/Estados Financieros.pdf' },
        { nombre: 'Recibo de pago.pdf', desc: 'Formato de recibo de pago', url: 'img/Recibo de pago.pdf' },
        { nombre: 'Constancia de Pagos .pdf', desc: 'Constancia de pagos', url: 'img/Constancia de Pagos .pdf' },
        { nombre: 'Cámara de comercio.pdf', desc: 'Certificado de cámara de comercio', url: 'img/Cámara de comercio.pdf' },
        { nombre: 'RUT Luxe Interieur.pdf', desc: 'Registro Único Tributario', url: 'img/RUT Luxe Interieur.pdf' },
    ]
};

// Categorías con etiquetas
const categorias = {
    todos: { label: 'TODOS', icon: 'fas fa-list' },
    comercial: { label: 'Área Comercial/Ventas', icon: 'fas fa-shopping-cart' },
    operativa: { label: 'Área Operativa/Proyectos', icon: 'fas fa-cogs' },
    compras: { label: 'Área de Compras/Proveedores', icon: 'fas fa-boxes' },
    talento: { label: 'Área de Talento Humano', icon: 'fas fa-users' },
    administrativa: { label: 'Área Administrativa/Gerencial', icon: 'fas fa-briefcase' },
    legal: { label: 'Área Legal/Cumplimiento', icon: 'fas fa-gavel' },
    financiera: { label: 'Área Financiera/Contable', icon: 'fas fa-coins' }
};

// Estado de la aplicación
let appState = {
    usuarioAutenticado: false,
    filtroActual: 'todos',
    searchTerm: '',
    allDocuments: [] // Lista plana de todos los documentos
};

// Esperar a que el DOM esté completamente listo
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar aplicación
    inicializarLogin();
    prepararDocumentos();
    
    // Manejar menús desplegables
    document.querySelectorAll('.nav-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = toggle.nextElementSibling;
            const isOpen = submenu.classList.contains('open');
            
            // Cerrar todos los demás submenús
            document.querySelectorAll('.nav-submenu.open').forEach(m => {
                m.classList.remove('open');
                m.previousElementSibling.classList.remove('open');
            });
            
            // Abrir/cerrar actual
            if (!isOpen) {
                submenu.classList.add('open');
                toggle.classList.add('open');
            }
        });
    });
    
    // Navegación entre páginas
    document.querySelectorAll('.nav-link:not(.nav-toggle)').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (!appState.usuarioAutenticado) return;
            
            const page = link.dataset.page;
            
            // Remover clase active de todos los links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Ocultar todas las páginas
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            
            // Mostrar página seleccionada
            document.getElementById(page).classList.add('active');
            
            // Si es la página de documentos, renderizar documentos
            if (page === 'documentos') {
                renderizarDocumentos();
            }
            
            // Actualizar título
            const titleMap = {
                'dashboard': 'Dashboard',
                'factura': 'Generar Factura',
                'cotizacion': 'Formato de Cotización',
                'documentos': 'Centro de Documentos',
                'contrato': 'Contrato de Servicios',
                'catalogo': 'Catálogo de Materiales',
                'folleto': 'Folleto Profesional'
            };
            document.getElementById('pageTitle').textContent = titleMap[page] || 'Página';
        });
    });
    
    // Manejar logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            appState.usuarioAutenticado = false;
            document.getElementById('loginModal').classList.remove('hidden');
            document.getElementById('pageTitle').textContent = 'Dashboard';
        });
    }
    
    // Manejar botón del círculo del mapa
    const mapaToggleBtn = document.getElementById('mapaToggleBtn');
    const mapaModal = document.getElementById('mapaModal');
    const mapaImg = document.getElementById('mapaImg');
    const modalClose = document.querySelector('.modal-close');
    
    if (mapaToggleBtn && mapaModal) {
        mapaToggleBtn.addEventListener('click', () => {
            // Resetear la imagen a la del mapa de procesos
            mapaImg.src = 'img/MapaProcesos.png';
            mapaImg.alt = 'Mapa de Procesos Luxe Intérieur';
            mapaModal.classList.add('open');
        });
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                mapaModal.classList.remove('open');
            });
        }
        
        mapaModal.addEventListener('click', (e) => {
            if (e.target === mapaModal) {
                mapaModal.classList.remove('open');
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mapaModal.classList.contains('open')) {
                mapaModal.classList.remove('open');
            }
        });
        
        const mapaImg = document.getElementById('mapaImg');
        if (mapaImg) {
            mapaImg.addEventListener('error', () => {
                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <div style="background-color: var(--dark-bg, #1a1a1a); border: 2px dashed var(--border-color, #333); 
                                padding: 40px; text-align: center; border-radius: 4px; color: var(--text-muted, #b0b0b0); width: 100%;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
                        <p style="margin: 10px 0; font-size: 14px;">📁 Imagen del Mapa de Procesos no encontrada</p>
                    </div>
                `;
            });
        }
    }

    // Inicializar fecha actual
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        fechaInput.valueAsDate = new Date();
    }

    // Manejador de cálculos en la tabla
    function actualizarTotales() {
        let subtotal = 0;
        
        document.querySelectorAll('.item-row').forEach(row => {
            const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
            const price = parseFloat(row.querySelector('.item-price').value) || 0;
            const subtotalItem = qty * price;
            
            row.querySelector('.item-subtotal').textContent = subtotalItem.toLocaleString('es-CO', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            
            subtotal += subtotalItem;
        });
        
        const iva = subtotal * 0.19;
        const total = subtotal + iva;
        
        const subtotalInput = document.getElementById('subtotal');
        const ivaInput = document.getElementById('iva');
        const totalInput = document.getElementById('total');
        
        if (subtotalInput) {
            subtotalInput.value = subtotal.toLocaleString('es-CO', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            subtotalInput.dataset.numValue = Math.round(subtotal);
        }
        
        if (ivaInput) {
            ivaInput.value = iva.toLocaleString('es-CO', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            ivaInput.dataset.numValue = Math.round(iva);
        }
        
        if (totalInput) {
            totalInput.value = total.toLocaleString('es-CO', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            totalInput.dataset.numValue = Math.round(total);
        }
    }

    // Event listeners para la tabla de items
    const itemsTableBody = document.getElementById('itemsTableBody');
    if (itemsTableBody) {
        itemsTableBody.addEventListener('change', (e) => {
            if (e.target.classList.contains('item-qty') || e.target.classList.contains('item-price') || e.target.classList.contains('item-desc')) {
                actualizarTotales();
            }
        });
        
        itemsTableBody.addEventListener('input', (e) => {
            if (e.target.classList.contains('item-qty') || e.target.classList.contains('item-price')) {
                actualizarTotales();
            }
        });
    }

    // Agregar línea a la tabla
    const addItemBtn = document.getElementById('addItemBtn');
    if (addItemBtn) {
        addItemBtn.addEventListener('click', () => {
            const tbody = document.getElementById('itemsTableBody');
            const newRow = document.createElement('tr');
            newRow.className = 'item-row';
            newRow.innerHTML = `
                <td><input type="text" class="item-desc" placeholder="Descripción del servicio/producto" required></td>
                <td><input type="number" class="item-qty" value="1" min="1" step="1" required></td>
                <td><input type="number" class="item-price" value="0" min="0" step="100" required></td>
                <td class="item-subtotal">0</td>
            `;
            tbody.appendChild(newRow);
            actualizarTotales();
        });
    }

    // Generar PDF
    const generatePdfBtn = document.getElementById('generatePdfBtn');
    if (generatePdfBtn) {
        generatePdfBtn.addEventListener('click', async () => {
            actualizarTotales();
            
            const numeroFactura = document.getElementById('numeroFactura')?.value || '---';
            const fecha = document.getElementById('fecha')?.value || '---';
            const cliente = document.getElementById('cliente')?.value || '---';
            const nit = document.getElementById('nit')?.value || '---';
            const direccion = document.getElementById('direccion')?.value || '---';
            
            let subtotal = document.getElementById('subtotal')?.dataset.numValue || '0';
            let iva = document.getElementById('iva')?.dataset.numValue || '0';
            let total = document.getElementById('total')?.dataset.numValue || '0';
            
            const items = [];
            document.querySelectorAll('.item-row').forEach(row => {
                const desc = row.querySelector('.item-desc').value;
                const qty = row.querySelector('.item-qty').value;
                const price = row.querySelector('.item-price').value;
                const subtotalItem = row.querySelector('.item-subtotal').textContent;
                
                if (desc) {
                    items.push({ desc, qty, price, subtotalItem });
                }
            });
            
            try {
                const response = await fetch('./Formato Factura .html');
                if (!response.ok) throw new Error('No se pudo cargar el template');
                let htmlText = await response.text();
                
                htmlText = htmlText.replace(/Factura N\.° &nbsp;<\/span>/, `Factura N.° ${numeroFactura} &nbsp;</span>`);
                htmlText = htmlText.replace(/Fecha &nbsp;<\/span>/, `Fecha ${fecha} &nbsp;</span>`);
                htmlText = htmlText.replace(/CLIENTE: &nbsp;<\/span>/, `CLIENTE: ${cliente} &nbsp;</span>`);
                htmlText = htmlText.replace(/Teléfono: &nbsp;<\/span>/, `Teléfono: ${nit} &nbsp;</span>`);
                htmlText = htmlText.replace(/Direccion: &nbsp;<\/span>/, `Direccion: ${direccion} &nbsp;</span>`);
                htmlText = htmlText.replace(/Subtotal: &nbsp;<\/span>/, `Subtotal: $${subtotal} &nbsp;</span>`);
                htmlText = htmlText.replace(/Impuestos: &nbsp;<\/span>/, `Impuestos: $${iva} &nbsp;</span>`);
                htmlText = htmlText.replace(/Descuentos: &nbsp;<\/span>/, `Descuentos: $0 &nbsp;</span>`);
                htmlText = htmlText.replace(/Total: &nbsp;<\/span>/, `Total: $${total} &nbsp;</span>`);
                
                const itemsHTML = items.map((item, idx) => {
                    const topPosition = 29 + (idx * 1.2);
                    return `
                        <div class="pdf24_01" style="left:12.6514em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">${item.desc} &nbsp;</span></div>
                        <div class="pdf24_01" style="left:30em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">${item.qty} &nbsp;</span></div>
                        <div class="pdf24_01" style="left:35.1595em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">$${item.price} &nbsp;</span></div>
                        <div class="pdf24_01" style="left:41.1167em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">$${item.subtotalItem} &nbsp;</span></div>
                    `;
                }).join('');
                
                htmlText = htmlText.replace(
                    /(<div class="pdf24_01" style="left:41\.1167em;top:27\.0858em;"><span class="pdf24_20 pdf24_14 pdf24_09">Total &nbsp;<\/span><\/div>)/,
                    `$1${itemsHTML}`
                );
                
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlText, 'text/html');

                let styles = '';
                Array.from(doc.querySelectorAll('style, link[rel="stylesheet"]')).forEach(node => {
                    styles += node.outerHTML;
                });

                const element = document.createElement('div');
                element.className = 'pdf-export-container';
                element.style.background = '#ffffff';
                element.innerHTML = styles + doc.body.innerHTML;
                
                const opt = {
                    margin: 0,
                    filename: `Factura_${numeroFactura}_${fecha.replace(/\//g, '-')}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#ffffff', scrollY: 0 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                    pagebreak: { mode: ['css', 'legacy'] }
                };
                
                html2pdf().set(opt).from(element).save().catch(err => {
                    console.error('Error generando PDF:', err);
                    alert('Error al generar PDF.');
                });
                
            } catch (error) {
                console.error('Error:', error);
                alert('No se pudo cargar el template.');
            }
        });
    }

    actualizarTotales();

});

// ======================== FUNCIONES DE LOGIN ========================

function inicializarLogin() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validarLogin();
        });
    }
}

function validarLogin() {
    const usuario = document.getElementById('username').value.trim();
    const contraseña = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    if (usuario === 'admin' && contraseña === '123') {
        appState.usuarioAutenticado = true;
        document.getElementById('loginModal').classList.add('hidden');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        errorDiv.style.display = 'none';
        
        // Mostrar dashboard
        document.querySelector('[data-page="dashboard"]').click();
    } else {
        errorDiv.textContent = 'Usuario o contraseña incorrectos';
        errorDiv.style.display = 'block';
    }
}

// ======================== FUNCIONES DE DOCUMENTOS ========================

function prepararDocumentos() {
    // Crear lista plana de todos los documentos con categoría
    for (const [categoria, docs] of Object.entries(documentos)) {
        docs.forEach(doc => {
            appState.allDocuments.push({
                ...doc,
                categoria: categoria
            });
        });
    }
}

function renderizarDocumentos() {
    const grid = document.getElementById('documentosGrid');
    const noDocumentsMsg = document.getElementById('noDocuments');
    
    if (!grid) return;
    
    let docsAMostrar = [];
    
    // Filtrar según categoría y búsqueda
    if (appState.filtroActual === 'todos') {
        docsAMostrar = appState.allDocuments;
    } else {
        docsAMostrar = appState.allDocuments.filter(doc => doc.categoria === appState.filtroActual);
    }
    
    // Aplicar búsqueda
    if (appState.searchTerm.trim()) {
        const term = appState.searchTerm.toLowerCase();
        docsAMostrar = docsAMostrar.filter(doc => 
            doc.nombre.toLowerCase().includes(term) || 
            doc.desc.toLowerCase().includes(term)
        );
    }
    
    // Limpiar grid
    grid.innerHTML = '';
    
    if (docsAMostrar.length === 0) {
        noDocumentsMsg.style.display = 'block';
        return;
    }
    
    noDocumentsMsg.style.display = 'none';
    
    // Renderizar documentos
    docsAMostrar.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'documento-card';
        card.innerHTML = `
            <div class="documento-header">
                <h4><i class="fas fa-file"></i> ${doc.nombre}</h4>
                <small class="documento-category">${categorias[doc.categoria].label}</small>
            </div>
            <p class="documento-desc">${doc.desc}</p>
            <div class="documento-actions">
                <a href="${doc.url}" download class="doc-btn-download"><i class="fas fa-download"></i> Descargar</a>
                <button class="doc-btn-view" onclick="abrirModalDocumento('${doc.nombre}', '${doc.url}')"><i class="fas fa-eye"></i> Ver</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ======================== EVENTOS DE FILTROS Y BÚSQUEDA ========================

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Evento del filtro desplegable
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                appState.filtroActual = e.target.value;
                renderizarDocumentos();
            });
        }
        
        // Evento de búsqueda
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        
        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => {
                appState.searchTerm = searchInput.value;
                renderizarDocumentos();
            });
            
            // Búsqueda en tiempo real (mientras escriben)
            searchInput.addEventListener('input', (e) => {
                appState.searchTerm = e.target.value;
                renderizarDocumentos();
            });
            
            // Enter para buscar
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    appState.searchTerm = searchInput.value;
                    renderizarDocumentos();
                }
            });
        }
        
        // Manejar cierre del modal de documentos
        const docModalClose = document.getElementById('docModalClose');
        const docModal = document.getElementById('documentModal');
        
        if (docModalClose && docModal) {
            docModalClose.addEventListener('click', () => {
                docModal.classList.remove('open');
                document.getElementById('docModalContent').innerHTML = '';
            });
        }
        
        if (docModal) {
            docModal.addEventListener('click', (e) => {
                if (e.target === docModal) {
                    docModal.classList.remove('open');
                    document.getElementById('docModalContent').innerHTML = '';
                }
            });
        }
        
        // Cerrar modal con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && docModal && docModal.classList.contains('open')) {
                docModal.classList.remove('open');
                document.getElementById('docModalContent').innerHTML = '';
            }
        });
    }, 100);
});

// ======================== FUNCIÓN PARA ABRIR MODAL DE DOCUMENTOS ========================

function abrirModalDocumento(nombre, url) {
    const docModal = document.getElementById('documentModal');
    const docModalTitle = document.getElementById('docModalTitle');
    const docModalContent = document.getElementById('docModalContent');
    const docModalDownloadBtn = document.getElementById('docModalDownloadBtn');
    
    // Actualizar título y botón de descarga
    docModalTitle.textContent = nombre;
    docModalDownloadBtn.href = url;
    docModalDownloadBtn.download = nombre;
    
    // Determinar tipo de archivo
    const fileExtension = nombre.split('.').pop().toLowerCase();
    const fileType = getFileType(fileExtension);
    
    // Limpiar contenido previo
    docModalContent.innerHTML = '';
    
    // Mostrar contenido según tipo de archivo
    if (fileType === 'pdf') {
        docModalContent.innerHTML = `<embed src="${url}" type="application/pdf" width="100%" height="500" />`;
    } else if (fileType === 'image') {
        docModalContent.innerHTML = `<img src="${url}" alt="${nombre}" style="max-width: 100%; max-height: 600px;" />`;
    } else if (fileType === 'word') {
        // Mostrar cargando
        docModalContent.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-spinner fa-spin" style="font-size: 40px; color: var(--primary-color); margin-bottom: 20px; display: block;"></i>
                <p style="color: var(--text-muted);">Cargando documento Word...</p>
            </div>
        `;
        
        // Cargar y procesar documento Word usando JSZip
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                return response.arrayBuffer();
            })
            .then(data => {
                if (!window.JSZip) throw new Error('JSZip no está disponible');
                return JSZip.loadAsync(data);
            })
            .then(zip => {
                // Obtener el contenido de document.xml
                const docFile = zip.file("word/document.xml");
                if (!docFile) throw new Error('document.xml no encontrado');
                return docFile.async("text");
            })
            .then(xmlString => {
                // Parsear XML y extraer texto
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlString, "text/xml");
                
                // Verificar errores de parsing
                if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
                    throw new Error('Error al parsear XML');
                }
                
                let htmlContent = '';
                
                // Obtener todos los párrafos con namespace correcto
                const namespace = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
                const paragraphs = xmlDoc.getElementsByTagNameNS(namespace, 'p');
                
                if (paragraphs.length === 0) {
                    // Intentar sin namespace
                    const allPs = xmlDoc.querySelectorAll('p');
                    paragraphs.length = 0;
                    for (let p of allPs) {
                        paragraphs.push(p);
                    }
                }
                
                for (let para of paragraphs) {
                    let paraText = '';
                    
                    // Obtener texto de todas las corridas (runs)
                    const runs = para.getElementsByTagNameNS(namespace, 't');
                    if (runs.length === 0) {
                        const allTs = para.querySelectorAll('t');
                        for (let t of allTs) {
                            paraText += t.textContent || '';
                        }
                    } else {
                        for (let t of runs) {
                            paraText += t.textContent || '';
                        }
                    }
                    
                    // Agregar al HTML
                    if (paraText.trim()) {
                        htmlContent += `<p>${paraText}</p>`;
                    }
                }
                
                if (!htmlContent.trim()) {
                    throw new Error('No se encontró contenido en el documento');
                }
                
                docModalContent.innerHTML = `
                    <div style="padding: 20px; color: var(--text-light); line-height: 1.8; max-height: 600px; overflow-y: auto;">
                        <style>
                            #docModalContent p { margin: 10px 0; color: var(--text-light); }
                            #docModalContent strong { color: var(--highlight); font-weight: 600; }
                        </style>
                        ${htmlContent}
                    </div>
                `;
            })
            .catch(error => {
                console.error('Error detallado:', error);
                docModalContent.innerHTML = `
                    <div class="doc-unsupported">
                        <i class="fas fa-file-word"></i>
                        <h4 style="color: var(--primary-color); margin: 15px 0;">No se pudo previsualizar</h4>
                        <p style="color: var(--text-muted); margin-bottom: 20px;">Parece que este archivo Word tiene un formato no soportado o está corrupto.</p>
                        <small style="color: var(--text-muted);">Haz clic en "Descargar" para abrir el archivo en Microsoft Word.</small>
                        <div style="margin-top: 15px; padding: 10px; background-color: rgba(212, 175, 55, 0.1); border-radius: 4px; font-size: 11px; color: var(--text-muted);">
                            <small>Error: ${error.message}</small>
                        </div>
                    </div>
                `;
            });
    } else if (fileType === 'excel') {
        // Mostrar cargando
        docModalContent.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-spinner fa-spin" style="font-size: 40px; color: var(--primary-color); margin-bottom: 20px; display: block;"></i>
                <p style="color: var(--text-muted);">Cargando hoja de cálculo...</p>
            </div>
        `;
        
        // Cargar y procesar documento Excel
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => {
                const workbook = XLSX.read(arrayBuffer, {type: 'array'});
                const firstSheet = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheet];
                const html = XLSX.utils.sheet_to_html(worksheet, {editable: false});
                
                docModalContent.innerHTML = `
                    <div style="padding: 20px; overflow: auto; max-height: 600px;">
                        <style>
                            #docModalContent table { border-collapse: collapse; width: 100%; background-color: var(--dark-bg); }
                            #docModalContent table thead { background-color: rgba(212, 175, 55, 0.2); }
                            #docModalContent table th { 
                                border: 1px solid var(--border-color); 
                                padding: 10px; 
                                color: var(--primary-color); 
                                font-weight: 600;
                                text-align: left;
                            }
                            #docModalContent table td { 
                                border: 1px solid var(--border-color); 
                                padding: 10px;
                                color: var(--text-light);
                            }
                            #docModalContent table tr:hover { background-color: rgba(212, 175, 55, 0.05); }
                        </style>
                        <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 12px;">
                            <i class="fas fa-info-circle"></i> Mostrando: <strong>${firstSheet}</strong>
                        </p>
                        ${html}
                    </div>
                `;
            })
            .catch(error => {
                console.error('Error cargando documento Excel:', error);
                docModalContent.innerHTML = `
                    <div class="doc-unsupported">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h4 style="color: var(--primary-color); margin: 15px 0;">Error al cargar la hoja de cálculo</h4>
                        <p style="color: var(--text-muted); margin-bottom: 20px;">No se pudo procesar el archivo Excel.</p>
                        <small style="color: var(--text-muted);">Haz clic en "Descargar" para abrirlo en Microsoft Excel.</small>
                    </div>
                `;
            });
    } else {
        // Otros tipos de archivo
        docModalContent.innerHTML = `
            <div class="doc-unsupported">
                <i class="fas fa-file-alt"></i>
                <h4 style="color: var(--primary-color); margin: 15px 0;">No se puede previsualizar este tipo de archivo</h4>
                <p style="color: var(--text-muted); margin-bottom: 20px;">Haz clic en "Descargar" para abrir el archivo en tu computadora.</p>
                <small style="color: var(--text-muted);">Tipo: ${nombre.split('.').pop().toUpperCase()}</small>
            </div>
        `;
    }
    
    // Abrir modal
    docModal.classList.add('open');
}

function getFileType(extension) {
    const pdfs = ['pdf'];
    const images = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'];
    const words = ['doc', 'docx'];
    const excels = ['xls', 'xlsx'];
    
    if (pdfs.includes(extension)) return 'pdf';
    if (images.includes(extension)) return 'image';
    if (words.includes(extension)) return 'word';
    if (excels.includes(extension)) return 'excel';
    return 'other';
}

// ======================== FUNCIÓN PARA ABRIR IMÁGENES EN MODAL ========================

function abrirModalImagen(url, titulo) {
    const mapaModal = document.getElementById('mapaModal');
    const mapaImg = document.getElementById('mapaImg');
    
    mapaImg.src = url;
    mapaImg.alt = titulo;
    mapaModal.classList.add('open');
}
