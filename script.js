document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([45.0, -60.0], 3);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=5db2d6b2-d3ed-4f83-9d5e-4ed4d9cef8ec', {
        attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under ODbL.',
        maxZoom: 18
    }).addTo(map);


    var icons = {
        naples: L.icon({ iconUrl: 'icons/naples.png', iconSize: [30, 30], iconAnchor: [10, 10], popupAnchor: [0, -32] }),
        gainesville: L.icon({ iconUrl: 'icons/gainesville.png', iconSize: [60,], iconAnchor: [19, 22], popupAnchor: [0, -32] }),
        tallahassee: L.icon({ iconUrl: 'icons/tallahassee.png', iconSize: [60], iconAnchor: [50, 50], popupAnchor: [0, -32] }),
        ann_arbor: L.icon({ iconUrl: 'icons/ann_arbor.png', iconSize: [100,], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        reno: L.icon({ iconUrl: 'icons/reno.png', iconSize: [50, ], iconAnchor: [8, 35], popupAnchor: [0, 0] }),
        fremont: L.icon({ iconUrl: 'icons/fremont.png', iconSize: [110, ], iconAnchor: [100, 50], popupAnchor: [0, -32] }),
        eupen: L.icon({ iconUrl: 'icons/eupen.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        iceland: L.icon({ iconUrl: 'icons/iceland.png', iconSize: [100, 100], iconAnchor: [100, 40], popupAnchor: [0, -32] })
    };
    

    var locations = [
        { lat: 26.142, lng: -81.794, info: "Naples, Florida: Beautiful beaches and luxurious lifestyle.", icon: icons.naples },
        { lat: 29.6516, lng: -82.3248, info: "Gainesville, Florida: Home to the University of Florida.", icon: icons.gainesville },
        { lat: 30.4383, lng: -84.2807, info: "Tallahassee, Florida: The capital city of Florida.", icon: icons.tallahassee },
        { lat: 42.2808, lng: -83.7430, info: "Ann Arbor, Michigan: Known for its vibrant arts scene and the University of Michigan.", icon: icons.ann_arbor },
        { lat: 39.5296, lng: -119.8138, info: "Reno, Nevada: The Biggest Little City in the World.", icon: icons.reno },
        { lat: 37.5483, lng: -121.9886, info: "Fremont, California: A city in the San Francisco Bay Area.", icon: icons.fremont },
        { lat: 50.6306, lng: 6.0348, info: "Eupen, Belgium: A beautiful town in the German-speaking part of Belgium.", icon: icons.eupen },
        { lat: 64.1355, lng: -21.8954, info: "Reykjavik, Iceland: The capital and largest city of Iceland.", icon: icons.iceland }
    ];
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('show'); // Hide sidebar
        setTimeout(function() {
            sidebar.classList.add('show'); // Show sidebar after delay
        }, 300); // Match the transition duration in CSS
    }

    locations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng], { icon: location.icon }).addTo(map);

        marker.on('click', function() {
            toggleSidebar(); // Retract and expand sidebar

            // Remove the expand class from all markers
            document.querySelectorAll('.leaflet-marker-icon.expand').forEach(function(icon) {
                icon.classList.remove('expand');
            });

            // Add the expand class to the clicked marker
            var icon = marker._icon;
            if (icon) {
                icon.classList.add('expand');
                // Remove the expand class after the animation is complete
                setTimeout(function() {
                    icon.classList.remove('expand');
                }, 600); // Match the animation duration
            }

            // Delay updating sidebar content to allow retract animation
            setTimeout(function() {
                document.getElementById('sidebar-body').innerHTML = location.info;
            }, 300); // Delay to match the sidebar retract animation
        });
    });

    document.getElementById('close-sidebar').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('show');
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([45.0, -60.0], 3);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=5db2d6b2-d3ed-4f83-9d5e-4ed4d9cef8ec', {
        attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under ODbL.',
        maxZoom: 18
    }).addTo(map);

    var icons = {
        naples: L.icon({ iconUrl: 'icons/naples.png', iconSize: [30, 30], iconAnchor: [10, 10], popupAnchor: [0, -32] }),
        gainesville: L.icon({ iconUrl: 'icons/gainesville.png', iconSize: [60,], iconAnchor: [19, 22], popupAnchor: [0, -32] }),
        tallahassee: L.icon({ iconUrl: 'icons/tallahassee.png', iconSize: [60], iconAnchor: [50, 50], popupAnchor: [0, -32] }),
        ann_arbor: L.icon({ iconUrl: 'icons/ann_arbor.png', iconSize: [100,], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        reno: L.icon({ iconUrl: 'icons/reno.png', iconSize: [50, ], iconAnchor: [8, 35], popupAnchor: [0, -32] }),
        fremont: L.icon({ iconUrl: 'icons/fremont.png', iconSize: [110, ], iconAnchor: [100, 50], popupAnchor: [0, -32] }),
        eupen: L.icon({ iconUrl: 'icons/eupen.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        iceland: L.icon({ iconUrl: 'icons/iceland.png', iconSize: [100, 100], iconAnchor: [100, 40], popupAnchor: [0, -32] })
    };
    

    var locations = [
        { lat: 26.142, lng: -81.794, info: "Naples, Florida: Beautiful beaches and luxurious lifestyle.", icon: icons.naples },
        { lat: 29.6516, lng: -82.3248, info: "Gainesville, Florida: Home to the University of Florida.", icon: icons.gainesville },
        { lat: 30.4383, lng: -84.2807, info: "Tallahassee, Florida: The capital city of Florida.", icon: icons.tallahassee },
        { lat: 42.2808, lng: -83.7430, info: "Ann Arbor, Michigan: Known for its vibrant arts scene and the University of Michigan.", icon: icons.ann_arbor },
        { lat: 39.5296, lng: -119.8138, info: "Reno, Nevada: The Biggest Little City in the World.", icon: icons.reno },
        { lat: 37.5483, lng: -121.9886, info: "Fremont, California: A city in the San Francisco Bay Area.", icon: icons.fremont },
        { lat: 50.6306, lng: 6.0348, info: "Eupen, Belgium: A beautiful town in the German-speaking part of Belgium.", icon: icons.eupen },
        { lat: 64.1355, lng: -21.8954, info: "Reykjavik, Iceland: The capital and largest city of Iceland.", icon: icons.iceland }
    ];

    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('show'); // Hide sidebar
        setTimeout(function() {
            sidebar.classList.add('show'); // Show sidebar after delay
        }, 300); // Match the transition duration in CSS
    }

    locations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng], { icon: location.icon }).addTo(map);

        // Create a container element for the marker icon
        var iconContainer = L.DomUtil.create('div', 'leaflet-marker-icon-container');
        iconContainer.appendChild(marker._icon);
        
        // Replace the marker icon with the container
        marker._icon.parentNode.replaceChild(iconContainer, marker._icon);
        marker._icon = iconContainer;

        marker.on('click', function() {
            toggleSidebar(); // Retract and expand sidebar

            // Remove the expand class from all markers
            document.querySelectorAll('.leaflet-marker-icon-container.expand').forEach(function(container) {
                container.classList.remove('expand');
            });

            // Add the expand class to the clicked marker container
            var container = marker._icon;
            if (container) {
                container.classList.add('expand');
                // Remove the expand class after the animation is complete
                setTimeout(function() {
                    container.classList.remove('expand');
                }, 600); // Match the animation duration
            }

            // Delay updating sidebar content to allow retract animation
            setTimeout(function() {
                document.getElementById('sidebar-body').innerHTML = location.info;
            }, 300); // Delay to match the sidebar retract animation
        });
    });

    document.getElementById('close-sidebar').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('show');
    });
});
