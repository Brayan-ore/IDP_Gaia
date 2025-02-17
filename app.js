document.getElementById('fetchButton').addEventListener('click', fetchVehicleData);

async function fetchVehicleData() {
    try        const response = await fetch('https://fipeapi.appspot.com/api/1/carros/marcas.json');
        const data = await response.json();
        displayVehicles(data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

function displayVehicles(vehicles) {
    const vehicleList = document.getElementById('vehicleList');
    vehicleList.innerHTML = '';

    vehicles.forEach(vehicle => {
        const listItem = document.createElement('li');
        listItem.textContent = vehicle.name;
        vehicleList.appendChild(listItem);
    });
}

