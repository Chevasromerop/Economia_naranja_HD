document.addEventListener('DOMContentLoaded', () => {
    // 1. Contador Animado
    const counter = document.getElementById('hours-counter');
    let count = 0;
    const interval = setInterval(() => {
        if(count < 10) {
            count++;
            counter.innerText = count + "h";
        } else { clearInterval(interval); }
    }, 150);

    // 2. Lógica de Pop-ups (Modales)
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close-button");

    const infoData = {
        "NOTION": "Uso Notion como mi cerebro digital. Aquí organizo flujos de trabajo, código y proyectos de Diseño Hipermedia.",
        "INSTAGRAM": "Es mi feed de curaduría. Sigo exclusivamente a artistas de Motion Graphics, ilustradores y cineastas alternativos.",
        "FIGMA": "Mi herramienta principal de creación funcional. Aquí es donde el consumo se convierte en producción de interfaces.",
        "GAMING: COD / FORTNITE / MARIO PARTY": "Analizo estos títulos desde sus mecánicas de interacción (UX) y su capacidad de retención de usuario."
    };

    // Evento para Apps
    document.querySelectorAll('.app-item').forEach(item => {
        item.addEventListener('click', () => {
            const text = item.innerText;
            modalTitle.innerText = text;
            modalText.innerText = infoData[text];
            modal.style.display = "block";
        });
    });

    // Evento para Gaming
    document.querySelector('.clickable-game').addEventListener('click', () => {
        const title = "GAMING: COD / FORTNITE / MARIO PARTY";
        modalTitle.innerText = "SOFTWARE INTERACTIVO";
        modalText.innerText = infoData[title];
        modal.style.display = "block";
    });

    // Cerrar Modal
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
});