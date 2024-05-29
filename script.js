document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([40.0, -30.0], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var locations = [
        { lat: 27.9944024, lng: -81.7602544, info: "Florida: Known for its beaches and theme parks." },
        { lat: 36.778259, lng: -119.417931, info: "California: Home to Hollywood and Silicon Valley." },
        { lat: 44.3148443, lng: -85.6023643, info: "Michigan: Famous for its Great Lakes." },
        { lat: 64.963051, lng: -19.020835, info: "Iceland: Land of fire and ice, with stunning landscapes." },
        { lat: 50.850346, lng: 4.351721, info: "Belgium: Renowned for its chocolate, waffles, and beer." }
    ];

    locations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(location.info);
    });
});
