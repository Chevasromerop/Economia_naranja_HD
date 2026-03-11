document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close-button");

    const infoData = {
        "NOTION": "Gestión de proyectos y bases de datos de referentes técnicos.",
        "INSTAGRAM": "Curaduría visual diaria. Enfoque en Motion Design y composición.",
        "FIGMA": "Laboratorio de prototipado donde el consumo se vuelve producción.",
        "M. ALBERCA": "Referente en fotografía urbana y edición de color alternativa.",
        "J. SIN MIEDO": "Influencia en ilustración digital y narrativa visual cruda.",
        "T. COKER": "Maestro del diseño de posters y uso vibrante del color.",
        "PERAZNA": "Exploración de texturas y experimentación visual hipermedia."
    };

    // Evento para Apps y Galería
    document.querySelectorAll('.app-item, .gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const text = item.innerText || item.getAttribute('title');
            modalTitle.innerText = text;
            modalText.innerText = infoData[text] || "Referente visual clave en mi proceso creativo.";
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
});