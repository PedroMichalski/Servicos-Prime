document.addEventListener("DOMContentLoaded", () => {

    const filter = document.getElementById("filter");
    if (filter) {
        const path = window.location.pathname;

        // Se estiver dentro de /pages/
        const base = path.includes("/pages/") ? "../" : "./";

        fetch(base + "components/filter.html")
            .then(res => res.text())
            .then(html => filter.innerHTML = html)
            .catch(err => console.error("Erro no filter:", err));
    }
});


document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("footer");
    if (footer) {
        const path = window.location.pathname;

        // Se estiver dentro de /pages/
        const base = path.includes("/pages/") ? "../" : "./";

        fetch(base + "components/footer.html")
            .then(res => res.text())
            .then(html => footer.innerHTML = html)
            .catch(err => console.error("Erro no footer:", err));
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("header");
    if (header) {
        const path = window.location.pathname;

        // Se estiver dentro de /pages/
        const base = path.includes("/pages/") ? "../" : "./";

        fetch(base + "components/header_loggout.html")
            .then(res => res.text())
            .then(html => header.innerHTML = html)
            .catch(err => console.error("Erro no header:", err));
    }
});
