// includeHTML.js
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(element => {
        const fileName = element.getAttribute('data-include');
        fetch(fileName)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
            });
    });
}
