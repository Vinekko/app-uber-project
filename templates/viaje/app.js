document.addEventListener('DOMContentLoaded', () => {
    const rideRequests = [
        { id: 1, pickup: 'Av. Principal', destination: 'Centro Comercial', vehicle: 'auto' },
        { id: 2, pickup: 'Estación de Metro', destination: 'Parque Central', vehicle: 'moto' },
        // Agrega más solicitudes según sea necesario
    ];

    const rideRequestsContainer = document.getElementById('rideRequests');

    rideRequests.forEach(request => {
        const requestElement = document.createElement('li');
        requestElement.classList.add('ride-request');

        requestElement.innerHTML = `
            <h2>Solicitud #${request.id}</h2>
            <p><strong>Desde:</strong> ${request.pickup}</p>
            <p><strong>Hacia:</strong> ${request.destination}</p>
            <p><strong>Vehículo:</strong> ${request.vehicle}</p>
            <button onclick="acceptRide(${request.id})">Aceptar Viaje</button>
        `;

        rideRequestsContainer.appendChild(requestElement);
    });
});

function acceptRide(requestId) {
    alert(`Has aceptado la solicitud #${requestId}`);
}
