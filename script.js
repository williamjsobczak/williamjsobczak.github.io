document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([45.0, -60.0], 3);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=5db2d6b2-d3ed-4f83-9d5e-4ed4d9cef8ec', {
        attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under ODbL.',
        maxZoom: 18
    }).addTo(map);

    // Define the icons
    var icons = {
        naples: L.icon({ iconUrl: 'icons/naples.png', iconSize: [30, 30], iconAnchor: [10, 10], popupAnchor: [0, -32] }),
        gainesville: L.icon({ iconUrl: 'icons/gainesville.png', iconSize: [60], iconAnchor: [19, 22], popupAnchor: [0, -32] }),
        tallahassee: L.icon({ iconUrl: 'icons/tallahassee.png', iconSize: [60], iconAnchor: [50, 50], popupAnchor: [0, -32] }),
        ann_arbor: L.icon({ iconUrl: 'icons/ann_arbor.png', iconSize: [100], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        reno: L.icon({ iconUrl: 'icons/reno.png', iconSize: [50], iconAnchor: [8, 35], popupAnchor: [0, 0] }),
        fremont: L.icon({ iconUrl: 'icons/fremont.png', iconSize: [110], iconAnchor: [100, 50], popupAnchor: [0, -32] }),
        eupen: L.icon({ iconUrl: 'icons/eupen.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
        iceland: L.icon({ iconUrl: 'icons/iceland.png', iconSize: [100, 100], iconAnchor: [100, 40], popupAnchor: [0, -32] })
    };

    // Define locations
    var locations = [
        {
            lat: 26.142, 
            lng: -81.794, 
            info: `
                <div class="location-content">
                    <h3>Naples, Florida</h3>
                    <p>Beautiful beaches, luxurious lifestyle, and rich culture.</p>
                    <img src="images/naples_beach.jpg" alt="Naples Beach" class="location-image">
                    
                    <div class="tabs">
                        <button class="tab-button active" onclick="showTab(event, 'naples-attractions')">Attractions</button>
                        <button class="tab-button" onclick="showTab(event, 'naples-history')">History</button>
                    </div>
                    
                    <div id="naples-attractions" class="tab-content" style="display: block;">
                        <h4>Top Attractions</h4>
                        <p>Naples Pier, The Botanical Gardens, and pristine white-sand beaches make this city a top destination.</p>
                    </div>
                    
                    <div id="naples-history" class="tab-content" style="display: none;">
                        <h4>Historical Facts</h4>
                        <p>Naples was founded in the late 1880s. It has a rich history of being a resort town and a haven for nature enthusiasts.</p>
                    </div>
                </div>
            `,
            icon: icons.naples
        },
        {
            lat: 29.6516, 
            lng: -82.3248, 
            info: `
                <div class="location-content">
                    <h3>Gainesville, Florida</h3>
                    <p>Beautiful beaches, luxurious lifestyle, and rich culture.</p>
                    <img src="images/gainesville_beach.jpg" alt="Gainesville Beach" class="location-image">
                    
                    <div class="tabs">
                        <button class="tab-button active" onclick="showTab(event, 'gainesville-attractions')">Attractions</button>
                        <button class="tab-button" onclick="showTab(event, 'gainesville-history')">History</button>
                    </div>
                    
                    <div id="gainesville-attractions" class="tab-content" style="display: block;">
                        <h4>Top Attractions</h4>
                        <p>Gainesville is known for its vibrant arts scene and natural parks.</p>
                    </div>
                    
                    <div id="gainesville-history" class="tab-content" style="display: none;">
                        <h4>Historical Facts</h4>
                        <p>Gainesville was founded in the 1850s and has a rich history linked to the University of Florida.</p>
                    </div>
                </div>
            `,
            icon: icons.gainesville
        },
        { lat: 30.4383, lng: -84.2807, info: "Tallahassee, Florida: The capital city of Florida.", icon: icons.tallahassee },
        { lat: 42.2808, lng: -83.7430, info: "Ann Arbor, Michigan: Known for its vibrant arts scene and the University of Michigan.", icon: icons.ann_arbor },
        { lat: 39.5296, lng: -119.8138, info: "Reno, Nevada: The Biggest Little City in the World.", icon: icons.reno },
        { lat: 37.5483, lng: -121.9886, info: "Fremont, California: A city in the San Francisco Bay Area.", icon: icons.fremont },
        { lat: 50.6306, lng: 6.0348, info: "Eupen, Belgium: A beautiful town in the German-speaking part of Belgium.", icon: icons.eupen },
        { lat: 64.1355, lng: -21.8954, info: "Reykjavik, Iceland: The capital and largest city of Iceland.", icon: icons.iceland }
    ];

    // Define the showTab function in the global scope
    window.showTab = function(evt, tabName) {
        var i, tabcontent, tabbuttons;

        // Hide all tab content
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"; // Hide all tab content
        }

        // Remove the "active" class from all tab buttons
        tabbuttons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].classList.remove("active"); // Remove active class
        }

        // Show the current tab and set the clicked button as active
        document.getElementById(tabName).style.display = "block"; // Show the current tab content
        evt.currentTarget.classList.add("active"); // Add active class to the clicked button
    }

    // Function to toggle sidebar
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('show'); // Hide sidebar
        setTimeout(function() {
            sidebar.classList.add('show'); // Show sidebar after delay
        }, 300); // Match the transition duration in CSS
    }

    // Set up markers for each location
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

    // Close sidebar button event listener
    document.getElementById('close-sidebar').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('show');
    });
});
