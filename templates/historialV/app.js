document.addEventListener('DOMContentLoaded', () => {
    const tripHistory = [
        { id: 1, pickup: 'Av. Principal', destination: 'Centro Comercial', distance: 5, time: 10 },
        { id: 2, pickup: 'Estación de Metro', destination: 'Parque Central', distance: 8, time: 15 },
        // Agrega más viajes según sea necesario
    ];

    const tripHistoryContainer = document.getElementById('tripHistory');

    tripHistory.forEach(trip => {
        const tripElement = document.createElement('li');
        tripElement.classList.add('trip-item');

        tripElement.innerHTML = `
            <a href="https://www.youtube.com" target="_blank">
                <h2>Viaje #${trip.id}</h2>
                <p><strong>Desde:</strong> ${trip.pickup}</p>
                <p><strong>Hacia:</strong> ${trip.destination}</p>
                <p><strong>Distancia:</strong> ${trip.distance} km</p>
                <p><strong>Tiempo:</strong> ${trip.time} min</p>
            </a>
        `;

        tripHistoryContainer.appendChild(tripElement);
    });
});
