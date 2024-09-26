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
                    <h3>University of Florida<br><small><span style="font-weight: normal;">Gainesville, Florida</span></small></h3>
                    <img src="images/uf_banner.jpeg" alt="University of Florida" class="location-image">
                    <p>Pursuing my dual Bachelor's of Science degrees in<br>
                    <b>Environmental Engineering</b> and <br>
                    <b>Computer & Information Sciences</b></p>

                    <!-- Main tabs for UF -->
                    <div class="tabs">
                        <button class="tab-button active" onclick="showTab(event, 'gainesville-research')">Research</button>
                        <button class="tab-button" onclick="showTab(event, 'gainesville-involvement')">Involvement</button>
                        <button class="tab-button" onclick="showTab(event, 'gainesville-teaching')">Teaching</button>
                    </div>

                    <!-- Main tab content: Research -->
                    <div id="gainesville-research" class="tab-content" style="display: block;">
                    <h4 style="display: flex; justify-content: space-between; align-items: center;">
                        <span>
                            <a href="https://www.bowdenlaboratory.com/" target="_blank" style="color: blue; text-decoration: underline;">
                                Dr. John Bowden Research Laboratory
                            </a>
                            <br>
                            <small><i><span style="font-weight: normal;">Undergraduate Researcher</span></i></small>
                        </span>
                        <small style="margin-left: auto; font-weight: normal;">January 2021 - May 2024</small>
                    </h4>

                        <p>Researched the abundance and distribution of Per- and Polyfluoroalkyl Substances (PFAS) in our environment</p>
                    <p class="no-margin">What are PFAS?</p>
                    <ul>
                        <li>Anthropogenic origin, produced industrially for their amphiphilic properties and chemical & thermal stability.</li>
                        <li>Known as "forever chemicals" for their persistence and mobility in the environment (bioaccumulates/biomagnifies).</li>
                        <li>Associated with various toxicological and human health risks.</li>
                        <li>Found in many consumer products, such as water-repellent clothing, non-stick cookware (Teflon), and food packaging.</li>
                    </ul>



                        <!-- Nested tabs within Research -->
                    <div class="nested-tabs">
                        <button class="nested-tab-button" onclick="showNestedTab(event, 'gainesville-research_projects')">Projects</button>
                        <button class="nested-tab-button" onclick="showNestedTab(event, 'gainesville-publications')">Publications</button>
                        <button class="nested-tab-button" onclick="showNestedTab(event, 'gainesville-gallery')">Gallery</button> <!-- New Gallery Tab -->
                    </div>

                    <!-- Nested tab content: Projects -->
                    <div id="gainesville-research_projects" class="nested-tab-content" style="display: block;">
                        <h4>My Contributions</h4>
                        <ul>
                            <li>Collaborated in the UF Creative Campus Project analyzing 2600+ crowdsourced samples from across the state of Florida to isolate PFAS – Per- and Polyfluoroalkyl Substances, or toxic anthropogenic ‘forever chemicals’ resistant to breakdown in environmental systems with toxicological and human health ramifications.</li>
                            <li>Performed extractions and evaporations of solid and liquid phase samples through HPLC – mass spectrometry, followed by peak integration using Thermo Xcalibur Quan Browser for quantification of 50 PFAS compounds</li>
                            <li>Optimized data and developed an R script for the classification of reported spills for use in an online interactive map of results</li>
                            <li>Co-authored a paper on PFAS in pool water samples</li>
                            <li>Designed and organized an investigation of PFAS in particulates captured by AC filters funded by my acceptance to the Emerging Scholars Program and presented at the Undergraduate Research Symposium</li>
                        </ul>
                        <div class="gallery-container">
                            <div class="gallery-item">
                                <img src="images/research5.png" alt="Poster presented at Fall Undergraduate Research Synposium (2022)" class="gallery-image">
                                <p class="gallery-caption">Poster presented at Fall Undergraduate Research Synposium (2022)</p>
                            </div>
                        </div>
                    </div>

                    <!-- Nested tab content: Publications -->
                    <div id="gainesville-publications" class="nested-tab-content" style="display: none;">
                        <ul>
                            <li>
                                <a href="http://doi.org/10.1021/acsestwater.4c00272" target="_blank">Statewide Surveillance and Mapping of PFAS in Florida Surface Water, (2024)</a>
                            </li>
                            <li>
                                <a href="http://doi.org/10.1016/j.chemosphere.2023.138307" target="_blank">Up in the air: Polyfluoroalkyl phosphate esters (PAPs) in airborne dust captured by air conditioning (AC) filters, (2023)</a>
                            </li>
                            <li>
                                <a href="https://doi.org/10.1016/j.chemosphere.2022.136765" target="_blank">Swimming with PFAS in public and private pools, (2023)</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Nested tab content: Gallery -->
                    <div id="gainesville-gallery" class="nested-tab-content" style="display: none;">
                        <h4>Photo Gallery</h4>
                        <div class="gallery-container">
                            <div class="gallery-item">
                                <img src="images/research1.jpeg" alt="Sampling surface water for Creative Campus Project at Clam Pass Park, a mangrove estuary (2020)" class="gallery-image">
                                <p class="gallery-caption">Sampling surface water for Creative Campus Project at Clam Pass Park, a mangrove estuary (2020)</p>
                            </div>
                            <div class="gallery-item">
                                <img src="images/research2.jpeg" alt="Cutting samples from used commercial HVAC filter (2022)" class="gallery-image">
                                <p class="gallery-caption">Cutting samples from used commercial HVAC filter (2022)</p>
                            </div>
                            <div class="gallery-item">
                                <img src="images/research3.jpeg" alt="AC filter project prepared samples (2022)" class="gallery-image">
                                <p class="gallery-caption">AC filter project prepared samples (2022)</p>
                            </div>
                            <div class="gallery-item">
                                <img src="images/research4.jpeg" alt="HPLC-Mass Spectrometer (2022)" class="gallery-image">
                                <p class="gallery-caption">HPLC-Mass Spectrometer (2022)</p>
                            </div>
                        </div>
                    </div>

                    <!-- Main tab content: History -->
                    <div id="iceland-history" class="tab-content" style="display: none;">
                        <h4>Historical Facts about Iceland</h4>
                        <p>Iceland has a rich history of settlement dating back to the Vikings, with Reykjavik being the world's northernmost capital.</p>
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

        // Hide all main tab content
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none"; // Hide all tab content
        }

        // Remove the "active" class from all main tab buttons
        tabbuttons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].classList.remove("active"); // Remove active class
        }

        // Show the current tab and set the clicked button as active
        document.getElementById(tabName).style.display = "block"; // Show the current tab content
        evt.currentTarget.classList.add("active"); // Add active class to the clicked button
    };

    // Define the showNestedTab function in the global scope for nested tabs
    window.showNestedTab = function(evt, nestedTabName) {
        var i, nestedTabContent, nestedTabButtons;

        // Hide all nested tab content
        nestedTabContent = document.getElementsByClassName("nested-tab-content");
        for (i = 0; i < nestedTabContent.length; i++) {
            nestedTabContent[i].style.display = "none"; // Hide all nested tab content
        }

        // Remove the "active" class from all nested tab buttons
        nestedTabButtons = document.getElementsByClassName("nested-tab-button");
        for (i = 0; i < nestedTabButtons.length; i++) {
            nestedTabButtons[i].classList.remove("active"); // Remove active class
        }

        // Show the current nested tab and set the clicked button as active
        document.getElementById(nestedTabName).style.display = "block"; // Show the current nested tab content
        evt.currentTarget.classList.add("active"); // Add active class to the clicked button
    };


    function openModal(src, alt) {
        var modal = document.getElementById("gallery-modal");
        var modalImg = document.getElementById("modal-img");
        var captionText = document.getElementById("caption");
        
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = alt;
    }
    
    function closeModal() {
        var modal = document.getElementById("gallery-modal");
        modal.style.display = "none";
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
