document.getElementById('cargar-boton').addEventListener('click', cargarMarcas);

async function cargarMarcas() {
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';

    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarResultados(data.Results);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        document.getElementById('resultado').innerHTML = 'Error al cargar los datos.';
    }
}

function mostrarResultados(marcas) {
    let listaHTML = '<ul>';
    marcas.forEach(marca => {
        listaHTML += '<li>${marca.Make_Name}</li>';
    });
    listaHTML += '</ul>';
    document.getElementById('resultado').innerHTML = listaHTML;
}
