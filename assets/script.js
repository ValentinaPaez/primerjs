// script.js
document.addEventListener('DOMContentLoaded', function() {
    const precioBase = parseInt(document.getElementById('precioBase').innerText);
    let cantidad = parseInt(document.getElementById('cantidad').innerText);

    function actualizarTotal() {
        document.getElementById('totalPagar').innerText = precioBase * cantidad;
    }

    document.getElementById('aumentar').addEventListener('click', function() {
        cantidad++;
        document.getElementById('cantidad').innerText = cantidad;
        actualizarTotal();
    });

    document.getElementById('disminuir').addEventListener('click', function() {
        if (cantidad > 1) {
            cantidad--;
            document.getElementById('cantidad').innerText = cantidad;
            actualizarTotal();
        }
    });
});
