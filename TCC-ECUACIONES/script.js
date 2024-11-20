// script.js
document.getElementById('eulerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const x0 = parseFloat(document.getElementById('x0').value);
    const y0 = parseFloat(document.getElementById('y0').value);
    const h = parseFloat(document.getElementById('h').value);
    const n = parseInt(document.getElementById('n').value, 10);
    const b = parseFloat(document.getElementById('b').value);

    let x = x0;
    let y = y0;

    // Contenedor de resultados
    let output = `Día inicial: ${x0}, Población inicial: ${y0}\n\n`;

    for (let i = 0; i <= n; i++) {
        // Eliminar decimales innecesarios si el número es entero
        const dia = Number.isInteger(x) ? x : x.toFixed(2);
        const poblacion = Number.isInteger(y) ? y : y.toFixed(5);

        output += `Día ${dia}, Población: ${poblacion}\n`;
        y = y + h * b; // Incrementar la población diaria
        x = x + h;     // Incrementar el tiempo (día)
    }

    // Mostrar resultados
    document.getElementById('output').innerText = output;
});


