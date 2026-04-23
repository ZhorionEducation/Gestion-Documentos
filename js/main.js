// Esperar a que el DOM esté completamente listo
document.addEventListener('DOMContentLoaded', () => {
    
    // Navegación entre páginas
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            
            // Remover clase active de todos los links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Ocultar todas las páginas
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            
            // Mostrar página seleccionada
            document.getElementById(page).classList.add('active');
            
            // Actualizar título
            const titleMap = {
                'dashboard': 'Dashboard',
                'factura': 'Generar Factura',
                'cotizacion': 'Formato de Cotización',
                'contrato': 'Contrato de Servicios',
                'catalogo': 'Catálogo de Materiales',
                'folleto': 'Folleto Profesional'
            };
            document.getElementById('pageTitle').textContent = titleMap[page] || 'Página';
        });
    });

    // Inicializar fecha actual
    document.getElementById('fecha').valueAsDate = new Date();

    // Manejo de carga de imagen del mapa
    const mapaImg = document.querySelector('.mapa-img');
    if (mapaImg) {
        mapaImg.addEventListener('error', () => {
            const container = document.querySelector('.mapa-procesos');
            container.innerHTML = `
                <div style="background-color: var(--dark-bg, #1a1a1a); border: 2px dashed var(--border-color, #333); 
                            padding: 40px; text-align: center; border-radius: 4px; color: var(--text-muted, #b0b0b0);">
                    <p style="margin: 10px 0; font-size: 14px;">📁 Imagen del Mapa de Procesos no encontrada</p>
                </div>
            `;
        });
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
        
        // Asignar valores formateados con separadores para inputs type="text"
        document.getElementById('subtotal').value = subtotal.toLocaleString('es-CO', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        
        document.getElementById('iva').value = iva.toLocaleString('es-CO', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        
        document.getElementById('total').value = total.toLocaleString('es-CO', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        
        // Guardar valores numéricos sin formato para usar en el PDF
        document.getElementById('subtotal').dataset.numValue = Math.round(subtotal);
        document.getElementById('iva').dataset.numValue = Math.round(iva);
        document.getElementById('total').dataset.numValue = Math.round(total);
    }

    // Event listeners para la tabla de items - cambio automático
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

    function formatNumber(num) {
        return parseFloat(num).toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }

    // Agregar línea a la tabla
    document.getElementById('addItemBtn').addEventListener('click', () => {
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
        actualizarTotales(); // Calcular automáticamente
    });

    // Generar PDF usando Formato Factura.html como base
    document.getElementById('generatePdfBtn').addEventListener('click', async () => {
        // Asegurar que los totales estén actualizados antes de generar PDF
        actualizarTotales();
        
        const numeroFactura = document.getElementById('numeroFactura').value || '---';
        const fecha = document.getElementById('fecha').value || '---';
        const cliente = document.getElementById('cliente').value || '---';
        const nit = document.getElementById('nit').value || '---';
        const direccion = document.getElementById('direccion').value || '---';
        
        // Leer valores numéricos de totales (sin separadores)
        let subtotal = document.getElementById('subtotal').dataset.numValue || '0';
        let iva = document.getElementById('iva').dataset.numValue || '0';
        let total = document.getElementById('total').dataset.numValue || '0';
        
        // Recopilar items desde la tabla
        const items = [];
        document.querySelectorAll('.item-row').forEach(row => {
            const desc = row.querySelector('.item-desc').value;
            const qty = row.querySelector('.item-qty').value;
            const price = row.querySelector('.item-price').value;
            const subtotalItem = row.querySelector('.item-subtotal').textContent;
            
            if (desc) { // Solo agregar si hay descripción
                items.push({ desc, qty, price, subtotalItem });
            }
        });
        
        try {
            // Cargar HTML como string
            const response = await fetch('./Formato Factura .html');
            if (!response.ok) throw new Error('No se pudo cargar el template');
            let htmlText = await response.text();
            
            // REEMPLAZOS SIMPLES - Datos principales
            htmlText = htmlText.replace(
                /Factura N\.° &nbsp;<\/span>/,
                `Factura N.° ${numeroFactura} &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /Fecha &nbsp;<\/span>/,
                `Fecha ${fecha} &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /CLIENTE: &nbsp;<\/span>/,
                `CLIENTE: ${cliente} &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /Teléfono: &nbsp;<\/span>/,
                `Teléfono: ${nit} &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /Direccion: &nbsp;<\/span>/,
                `Direccion: ${direccion} &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /Subtotal: &nbsp;<\/span>/,
                `Subtotal: $${subtotal} &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /Impuestos: &nbsp;<\/span>/,
                `Impuestos: $${iva} &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /Descuentos: &nbsp;<\/span>/,
                `Descuentos: $0 &nbsp;</span>`
            );
            
            htmlText = htmlText.replace(
                /Total: &nbsp;<\/span>/,
                `Total: $${total} &nbsp;</span>`
            );
            
            // Insertar divs para items después de encabezados "Total"
            // Buscar el div de "Total" en los encabezados y luego insertamos items después
            const itemsHTML = items.map((item, idx) => {
                const topPosition = 29 + (idx * 1.2); // Posición más cercana al original, espaciado de 1.2em entre filas
                return `
                    <div class="pdf24_01" style="left:12.6514em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">${item.desc} &nbsp;</span></div>
                    <div class="pdf24_01" style="left:30em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">${item.qty} &nbsp;</span></div>
                    <div class="pdf24_01" style="left:35.1595em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">$${item.price} &nbsp;</span></div>
                    <div class="pdf24_01" style="left:41.1167em;top:${topPosition}em;"><span class="pdf24_20 pdf24_14 pdf24_09">$${item.subtotalItem} &nbsp;</span></div>
                `;
            }).join('');
            
            // Insertar items después del encabezado "Total"
            htmlText = htmlText.replace(
                /(<div class="pdf24_01" style="left:41\.1167em;top:27\.0858em;"><span class="pdf24_20 pdf24_14 pdf24_09">Total &nbsp;<\/span><\/div>)/,
                `$1${itemsHTML}`
            );
            
            // Parsear HTML del template y crear contenedor limpio (solo head styles + body)
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');

            // Extraer estilos (style y link rel=stylesheet) del head para que apliquen
            let styles = '';
            Array.from(doc.querySelectorAll('style, link[rel="stylesheet"]')).forEach(node => {
                styles += node.outerHTML;
            });

            // Crear contenedor que contendrá estilos y contenido del body
            const element = document.createElement('div');
            element.className = 'pdf-export-container';
            element.style.background = '#ffffff';
            element.innerHTML = styles + doc.body.innerHTML;
            
            // Configurar PDF 
            const opt = {
                margin: 0,
                filename: `Factura_${numeroFactura}_${fecha.replace(/\//g, '-')}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true, 
                    allowTaint: true,
                    backgroundColor: '#ffffff',
                    scrollY: 0
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['css', 'legacy'] }
            };
            
            html2pdf().set(opt).from(element).save().catch(err => {
                console.error('Error generando PDF:', err);
                alert('Error al generar PDF. Detalles en consola.');
            });
            
        } catch (error) {
            console.error('Error cargando template:', error);
            alert('No se pudo cargar el template. El archivo "Formato Factura .html" debe estar en la raíz del proyecto.\nError: ' + error.message);
        }
    });

    // Inicializar totales al cargar la página
    actualizarTotales();

});  // Cerrar DOMContentLoaded
