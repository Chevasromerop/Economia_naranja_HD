document.addEventListener('DOMContentLoaded', () => {
    // Referencias al DOM del modal
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDynamic = document.getElementById("modal-dynamic-content");
    const closeBtn = document.querySelector(".close-button");

    /**
     * Objeto con toda la información de la infografía.
     * isCustom: true permite inyectar HTML complejo (como tablas)
     */
    const infoData = {
        "METRICAS_FULL": {
            title: "ANÁLISIS DE DATOS SEMANALES",
            isCustom: true,
            content: `
                <p style="margin-bottom:20px; font-weight:300;">Análisis del ecosistema digital basado en registros de tiempo de pantalla y objetivos formativos.</p>
                <div class="modal-table-container">
                    <table>
                        <thead>
                            <tr><th>Plataforma</th><th>Frecuencia</th><th>Horas</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>YouTube & Twitch</td><td>Diario</td><td class="bar-cell"><div class="bar-level" style="width: 100%;">70h</div></td></tr>
                            <tr><td>Videojuegos</td><td>4x Sem</td><td class="bar-cell"><div class="bar-level" style="width: 35%;">15h</div></td></tr>
                            <tr><td>Museos / Galerías</td><td>Mensual</td><td class="bar-cell"><div class="bar-level" style="width: 8%;">2h</div></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="chart-container-modal">
                    <div class="stat-row-modal">
                        <span style="display:block; margin-bottom:10px; font-weight:900; font-size:12px; color:var(--orange);">Foco: Producción e Investigación</span>
                        <div class="stat-bar-modal orange" style="width: 85%;">85% - REFERENCIACIÓN TÉCNICA</div>
                    </div>
                    <div class="stat-row-modal">
                        <span style="display:block; margin-bottom:10px; font-weight:900; font-size:12px; color:var(--green);">Foco: Recreación y Desconexión</span>
                        <div class="stat-bar-modal green" style="width: 15%;">15% - ENTRETENIMIENTO PASIVO</div>
                    </div>
                </div>
            `
        },
        "NOTION": { 
            desc: "Mi cerebro digital. Aquí organizo flujos de trabajo, bases de datos de referentes y la estructura de mis proyectos hipermedia.", 
            link: "" 
        },
        "INSTAGRAM": { 
            desc: "Plataforma de curaduría visual diaria. Mi feed está diseñado para mostrar solo Motion Graphics e ilustración.", 
            link: "" 
        },
        "FIGMA": { 
            desc: "El puente entre el consumo y la producción. Aquí diseño interfaces (UI) basadas en lo que consumo diariamente.", 
            link: "" 
        },
        "GAMING": { 
            desc: "Analizo títulos como COD y Fortnite desde sus mecánicas de interacción y diseño de interfaces HUD.", 
            link: "" 
        },
        "ALBERCA": { 
            desc: "Fotógrafo español reconocido por su canal de YouTube. Sus tutoriales de edición y composición son un referente técnico constante.", 
            link: "https://www.instagram.com/marcosalberca/?hl=es-la" 
        },
        "SINMIEDO": { 
            desc: "Juan Sin Miedo en el mundo de la ilustración. Diseñador gráfico bogotano que fusiona la identidad colombiana con ilustración de vanguardia.", 
            link: "https://www.instagram.com/juansinmiedo/" 
        },
        "COKER": { 
            desc: "Director de arte nigeriano-estadounidense reconocido por su estilo visual vibrante que mezcla tipografía experimental y elementos culturales.", 
            link: "https://www.instagram.com/temi.coker/" 
        },
        "PERAZNA": { 
            desc: "Melissa Cartagena es una fotógrafa colombiana reconocida por un enfoque visual que mezcla estética contemporánea, moda y exploración de identidad.", 
            link: "https://www.instagram.com/perazna/" 
        }
    };

    /**
     * Función para asignar eventos de click a todos los elementos con data-key
     */
    document.querySelectorAll('[data-key]').forEach(item => {
        item.addEventListener('click', () => {
            const key = item.getAttribute('data-key');
            const data = infoData[key];
            
            // Lógica de formateo del título según el key
            let displayTitle = data.title || key;
            if (key === "SINMIEDO") displayTitle = "JUAN SIN MIEDO";
            if (key === "ALBERCA") displayTitle = "MARCOS ALBERCA";
            if (key === "COKER") displayTitle = "TEMI COKER";
            if (key === "GAMING") displayTitle = "FPS GAMING";
            
            modalTitle.innerText = displayTitle;
            
            // Inyectar contenido según el tipo de dato
            if (data.isCustom) {
                modalDynamic.innerHTML = data.content;
            } else {
                modalDynamic.innerHTML = `
                    <p id="modal-text" style="line-height:1.8; font-size:1.1rem; margin-bottom:25px;">${data.desc}</p>
                    ${data.link ? `<a href="${data.link}" target="_blank" class="instagram-link">Abrir Perfil de Instagram</a>` : ''}
                `;
            }
            
            // Mostrar modal
            modal.style.display = "block";
            // Bloquear scroll de la página al abrir modal
            document.body.style.overflow = "hidden";
        });
    });

    // Cerrar modal
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    closeBtn.onclick = closeModal;

    // Cerrar si se hace click fuera del contenido del modal
    window.onclick = (e) => { 
        if(e.target == modal) closeModal(); 
    };
});