const campi = [
    "Obiettivo principale",
    "Nome",
    "Cognome",
    "Età",
    "Scuola",
    "Visite mediche",
    "Vista",
    "Ore di sonno",
    "Tempo libero",
    "Livello di inglese",
    "Certificazioni",
    "Accademia scelta",
    "Ore di volo simulate",
    "Aereo preferito",
    "Guadagno",
    "Debito"
];

function creaDashboard() {
    const contenitore = document.getElementById("contenitore");
    contenitore.innerHTML = "";

    campi.forEach(campo => {
        const valoreSalvato = localStorage.getItem(campo) || "";

        const box = document.createElement("div");
        box.className = "box";

        box.innerHTML = `
            <label>${campo}</label>
            <input type="text" id="${campo}" value="${valoreSalvato}">
        `;

        contenitore.appendChild(box);

        box.querySelector("input").addEventListener("input", (e) => {
            localStorage.setItem(campo, e.target.value);
        });
    });
}

creaDashboard();
