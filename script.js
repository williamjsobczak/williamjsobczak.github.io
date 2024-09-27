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
                    <p>The place that lent me inspiration.</p>
                    <img src="images/naples1.JPG" alt="Naples Beach" class="location-image",loading="lazy">
                    
                    <div class="tabs">
                        <button class="tab-button active" onclick="showTab(event, 'naples-rt')">Red Tide</button>
                        <button class="tab-button" onclick="showTab(event, 'naples-hs')">High School</button>
                        <button class="tab-button" onclick="showTab(event, 'naples-volunteering')">Volunteering</button>
                    </div>
                    
                    
                    <div id="naples-rt" class="tab-content" style="display: block;">
                        <p>I grew up watching K. Brevis "Red Tide" algal blooms increase in frequency and intensity. It later became the subject of my Laureate presentation designed as a call to action and served as motivation to pursue studies in the environmental realm.</p>
                    
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <img src="images/naples2.png" alt="Red Tide Notice at Naples Beach" class="gallery-image", loading="lazy">
                            <p class="gallery-caption">Red Tide Notice at Naples Beach</p>
                        </div>
                    </div>

                    <div class="gallery-container">
                        <div class="gallery-item">
                            <img src="images/naples3.png" alt="Red Tide Conditions: Dark water, fish kills, lobster forced into shallow water for oxygen" class="gallery-image", loading="lazy">
                            <p class="gallery-caption">Red Tide Conditions: Dark water, fish kills, lobster forced into shallow water for oxygen</p>
                        </div>
                    </div>
                    
                    
                    </div>


                    <div id="naples-hs" class="tab-content" style="display: none;">


                    <h4 style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="display: flex; justify-content: space-between; align-items: center;">
                        Barron Collier High School
                        <span style="font-style: italic; font-weight: normal;">2016-2020</span>
                    </h4>

                    <ul>
                        <li>Model United Nations President</li>
                        <li>National Ocean Science Bowel President</li>
                        <li>National Honor Society Vice President</li>
                        <li>Varsity Scholar Bowl Captain</li>
                        <li>Varsity Tennis Team </li>
                        <li>Chamber Orchestra First Stand Violist</li>
                        <li>National AP Scholar</li>
                    </ul>
                    </div>

                    <div id="naples-volunteering" class="tab-content" style="display: none;">


                    <h4 style="display: flex; justify-content: space-between; align-items: center;">
                    <h4 style="display: flex; justify-content: space-between; align-items: center;">
                        Volunteer Tennis Coach
                    </h4>

                    <ul>
                        Hearing a camper ask, “Will Coach Willy be there?” far exceeded the satisfaction of winning any match</li>
                    </ul>
                    </div>

                    


                </div>
            `,
            icon: icons.naples
        },
        {
            lat: 29.647423, 
            lng: -82.353277, 
            info: `
<div class="location-content">
    <h3>Gainesville, Florida<br>
        <small><span style="font-weight: normal;">Gainesville, Florida</span></small>
    </h3>
    <img src="images/uf_banner.jpeg" alt="University of Florida" class="location-image", loading="lazy">
    <p>Pursuing my dual Bachelor's of Science degrees in<br>
        <b>Environmental Engineering</b> and <br>
        <b>Computer & Information Sciences</b><br>
        <span style="line-height: 1.2;">with a minor in <b>French & Francophone Studies</b></span>
    </p>



    <!-- Main tabs for UF -->
    <div class="tabs">
        <button class="tab-button active" onclick="showTab(event, 'gainesville-research')">Research</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-involvement')">Involvement</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-teaching')">Teaching</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-projects')">Projects</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-work')">Work</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-recognitions')">Recognitions</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-scholarships')">Scholarships</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-certifications')">Skills and Certifications</button>
        <button class="tab-button" onclick="showTab(event, 'gainesville-coursework')">Coursework</button>
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
            <button class="nested-tab-button active" onclick="showNestedTab(event, 'gainesville-research_projects')">Projects</button>
            <button class="nested-tab-button" onclick="showNestedTab(event, 'gainesville-publications')">Publications</button>
            <button class="nested-tab-button" onclick="showNestedTab(event, 'gainesville-gallery')">Gallery</button>
        </div>

        <!-- Nested tab content: Projects -->
        <div id="gainesville-research_projects" class="nested-tab-content" style="display: block;">
            <h4>My Contributions</h4>
            <ul>
                <li>Collaborated in the UF Creative Campus Project analyzing 2600+ crowdsourced samples from across the state of Florida to isolate PFAS – Per- and Polyfluoroalkyl Substances, or toxic anthropogenic ‘forever chemicals’ resistant to breakdown in environmental systems with toxicological and human health ramifications.</li>
                <li>Performed extractions and evaporations of solid and liquid phase samples through HPLC – mass spectrometry, followed by peak integration using Thermo Xcalibur Quan Browser for quantification of 50 PFAS compounds.</li>
                <li>Optimized data and developed an R script for the classification of reported spills for use in an online interactive map of results.</li>
                <li>Co-authored a paper on PFAS in pool water samples.</li>
                <li>Designed and organized an investigation of PFAS in particulates captured by AC filters funded by my acceptance to the Emerging Scholars Program and presented at the Undergraduate Research Symposium.</li>
            </ul>
            <div class="gallery-container">
                <div class="gallery-item">
                    <img src="images/research5.png" alt="Poster presented at Fall Undergraduate Research Symposium (2022)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">Poster presented at Fall Undergraduate Research Symposium (2022)</p>
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
                    <img src="images/research1.jpeg" alt="Sampling surface water for Creative Campus Project at Clam Pass Park, a mangrove estuary (2020)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">Sampling surface water for Creative Campus Project at Clam Pass Park, a mangrove estuary (2020)</p>
                </div>
                <div class="gallery-item">
                    <img src="images/research2.jpeg" alt="Cutting samples from used commercial HVAC filter (2022)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">Cutting samples from used commercial HVAC filter (2022)</p>
                </div>
                <div class="gallery-item">
                    <img src="images/research3.jpeg" alt="AC filter project prepared samples (2022)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">AC filter project prepared samples (2022)</p>
                </div>
                <div class="gallery-item">
                    <img src="images/research4.jpeg" alt="HPLC-Mass Spectrometer (2022)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">HPLC-Mass Spectrometer (2022)</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Main tab content: Involvement -->
    <div id="gainesville-involvement" class="tab-content" style="display: none;">
        <div class="nested-tabs">
            <button class="nested-tab-button" onclick="showNestedTab(event, 'gainesville-ursp')">URSP</button>
            <button class="nested-tab-button" onclick="showNestedTab(event, 'gainesville-ursp_advisory_board')">URSP Advisory Board</button>
            <button class="nested-tab-button active" onclick="showNestedTab(event, 'gainesville-tbp')">Tau Beta Pi</button>
        </div>

        <!-- Nested tab content: URSP -->
        <div id="gainesville-ursp" class="nested-tab-content" style="display: none;">
            <h3 style="display: flex; justify-content: space-between; align-items: center;">
                <span><i>2020 Cohort Member</i></span>
                <small style="font-weight: normal;">August 2020 - Present</small>
            </h3>
            <ul>
                <li>Admitted to invitation-only program offered only to the Top 2% of all first-year students admitted to the University of Florida</li>
                <li>Obtained fundamental research training, mentorship, networking, and resources through exclusive Research & Creativity, Course-Based Undergraduate Research Experience (CURE), and Fundamentals of Research Integrity courses </li>
                <li>Awarded a stipend to fund first research project materials and certified in Responsible Conduct of Research (RCR)</li>
            </ul>

            <div class="gallery-container">
                <div class="gallery-item">
                    <img src="images/ursp.jpeg" alt="Touring HiPerGator NVIDIA Supercomputer (2023)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">Touring HiPerGator NVIDIA Supercomputer (2023)</p>
                </div>
            </div>
        </div>

        <!-- Nested tab content: URSP AB -->
        <div id="gainesville-ursp_advisory_board" class="nested-tab-content" style="display: none;">
            <h3 style="display: flex; justify-content: space-between; align-items: center;">
                <span><i>President (Elected Spring 2022)</i></span>
                <small style="font-weight: normal;">December 2020 - Present</small>
            </h3>
            <ul>
                <li>Oversaw all operations, execute external directives, and pursue development goals for 1000+ program members </li>
                <li>Spearheaded initiatives to connect undergraduate students to research opportunities and faculty mentors on campus</li>
                <li>Mentored first-year students invited/admitted to URSP in navigating their college life and research ambitions each Fall</li>
            </ul>

            <div class="gallery-container">
                <div class="gallery-item">
                    <img src="images/uab.jpeg" alt="URSP Advisory Board (2023)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">URSP Advisory Board (2023)</p>
                </div>
            </div>
        </div>

        <!-- Nested tab content: TBP -->
        <div id="gainesville-tbp" class="nested-tab-content" style="display: block;">
            <h3 style="display: flex; justify-content: space-between; align-items: center;">
                <span><i>Member, Tau Beta Pi Florida Alpha Chapter</i></span>
                <small style="font-weight: normal;">Initiated April 2024</small>
            </h3>

            <div class="gallery-container">
                <div class="gallery-item">
                    <img src="images/tbp1.jpeg" alt="TBP FL-A Spring 2024 Initiates" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">TBP FL-A Spring 2024 Initiates</p>
                </div>
            </div>
            <div class="gallery-container">
                <div class="gallery-item">
                    <img src="images/tbp2.jpeg" alt="Kennedy Space Center Visit (2024)" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">Kennedy Space Center Visit (2024)</p>
                </div>
            </div>
        </div>

    </div>



     <!-- Main tab content: Teaching -->
    <div id="gainesville-teaching" class="tab-content" style="display: none;">
        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    Teaching Assistantship: Intro to Software Engineering (CEN 3031) 
            </span>
            <small style="margin-left: auto; font-weight: normal;">August 2024 - December 2024</small>
        </h4>
        <ul>
            <li>Instruct a 1-hr weekly discussion section, hold office hours, and grade student work</li>
            <li>Assist students as a Peer Mentor in navigating their semester-long full-stack project </li>
        </ul>
    </div>

    <!-- Main tab content: Projects -->
    <div id="gainesville-projects" class="tab-content" style="display: none;">
        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                World.ly (Python, Plotly Dash, Pandas, Oracle SQL) | 
                <a href="http://www.worldly.live" target="_blank" style="color: #007bff; text-decoration: underline;">www.worldly.live</a>
            </span>
            <small style="margin-left: auto; font-weight: normal;">April 2023</small>
        </h4>
        <ul>
            <li>Developed a Dash App featuring a suite of interactive visualizations of pertinent country-stratified metrics over time</li>
            <li>Adopted an Oracle SQL Auto. Relational Database (260,000 tuples) as backend for the core complex SQL trend queries</li>
            <li>Deployed the web app for public access on an Oracle VM instance (Linux), assigning a custom DNS (worldly.live)</li>
        </ul>



        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    FREEcycle (React JS, Node JS, Express, PostgreSQL, Tailwind CSS)	
            </span>
            <small style="margin-left: auto; font-weight: normal;">April 2024</small>
        </h4>
        <ul>
            <li>Designed a full-stack web app for the local exchange of free goods (donations) between users, winning Best Project Award</li>
        </ul>

        <div class="gallery-container">
                <div class="gallery-item">
                    <img src="images/freecycle.png" alt="Sample page of FREEcycle" class="gallery-image", loading="lazy">
                    <p class="gallery-caption">Sample page of FREEcycle</p>
                </div>
        </div>


        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    File Manager (C, Linux Kernel, Android, Ubuntu, FUSE)
            </span>
            <small style="margin-left: auto; font-weight: normal;">April 2024</small>
        </h4>
        <ul>
            <li>Built a custom file manager in Reptilian OS to mount a filesystem from a .wad file to an n-ary tree, implemented daemon</li>
        </ul>



        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    Memory Manager (C)
            </span>
            <small style="margin-left: auto; font-weight: normal;">March 2024</small>
        </h4>
        <ul>
            <li>Coded a data structure to fully manage the allocation and deallocation of memory using alternate assignment algorithms </li>
        </ul>


        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    Minesweeper Clone (C++, Simple and Fast Multimedia Library)
            </span>
            <small style="margin-left: auto; font-weight: normal;">April 2022</small>
        </h4>
        <ul>
            <li>Created a fully functional version of the game with random tile generation, input/click recognition, and exit conditions</li>
            <li>Utilized SFML libraries for texture management, recursion, and encapsulated classes using inheritance and polymorphism</li>
            <li>Organized board and tile information in classes with inheritance/polymorphism and dynamic array & map data structures</li>
        </ul>

    </div>


    <!-- Main tab content: Work -->
    <div id="gainesville-work" class="tab-content" style="display: none;">
        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    Center for Undergraduate Reserach (CUR) Office Assistant
            </span>
            <small style="margin-left: auto; font-weight: normal;">January 2022 - May 2023</small>
        </h4>
        <ul>
            <li>Facilitated the logistics of programs in the suite managed by CUR, reporting directly to the Director, Dr. Anne Donnelly</li>
        </ul>
    </div>

    <!-- Main tab content: Recognitions -->
    <div id="gainesville-recognitions" class="tab-content" style="display: none;">
        <h4 style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
        </h4>
        
        <ul style="margin-top: 0; position: relative;">
            <li style="position: relative; padding-right: 80px;">
                Presidential Honor Roll (4.00 GPA)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2020 - Present</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Dean’s List
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2020 - Present</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Phi Kappa Phi Invitation
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2021</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Tau Beta Pi Member
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2024 - Present</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Honors Program
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2020 - Present</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                University Research Scholars Program 2020 Cohort
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2020</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Research Excellence Program for Undergraduates (REPU)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2022-Present</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Emerging Scholars Program (Center for Undergraduate Research)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2022</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Intro to Software Engineering Best Project Award (FREEcycle)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2024</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Certified Peer Mentor (International Mentoring Association)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2022</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Sunshine State Scholar - Collier County
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2019</span>
            </li>
        </ul>
    </div>


    <!-- Main tab content: Scholarships -->
    <div id="gainesville-scholarships" class="tab-content" style="display: none;">
        <h4 style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
        </h4>
        
        <ul style="margin-top: 0; position: relative;">
            <li style="position: relative; padding-right: 80px;">
                Wheat Scholarship (presented by UF Herbert Wertheim College of Engineering)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">September 2024</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                J. Fred and Lilly C. Wilkes Endowment (presented by UF Dept of Environmental Engineering Sciences) 
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">August 2024</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Tau Beta Pi Honor Society National Scholarship 
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">July 2024</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Dr. Andrew and Laura Dahlem Scholarship (presented by Ding Darling Wildlife Society) 
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">June 2024</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Learning Without Borders Scholarship (presented by UF International Center) 
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">December 2023</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Beyond120 Scholarship (affiliated with UF College of Liberal Arts and Sciences)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">December 2023</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                John & Mittie Collins Engineering Scholarship (presented by UF Herbert Wertheim College of Engineering) 
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">August 2023</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Charles Vincent and Heidi Cole McLaughlin Endowment (presented by UF College of Liberal Arts and Sciences)
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">May 2023</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Optimist Club of Naples University Scholarship 
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2020-2024</span>
            </li>
            <li style="position: relative; padding-right: 80px;">
                Florida Bright Futures Academic Scholarship
                <span style="position: absolute; right: 0; font-size: 0.9em; font-weight: normal; min-width: 60px; text-align: right;">2020 – 2024</span>
            </li>
        </ul>
    </div>

    <!-- Main tab content: Certifications -->
    <div id="gainesville-certifications" class="tab-content" style="display: none;">
        <h4 style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
            <span>
                    Professional Certification: IBM Data Science Specialization
            </span>
            <small style="margin-left: auto; font-weight: normal;">2022</small>
        </h4>
        <ul style="margin-top: 0;">
            <li>Querying in SQL (ipython-sql) | Relational Database Design | Data Science Tools and Methodology</li>
            <li>Python: ETL Pipelining, Dashboarding, ML Models (Pandas, NumPy, Matplotlib, Plotly Dash, Scikit-learn)</li>
        </ul>

        <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    Research Certification: Undergraduate Responsible Conduct of Research (RCR) Certification 
            </span>
            <small style="margin-left: auto; font-weight: normal;">2021</small>

        </h4>
            <h4 style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                    Misc Technical Skills: C++ | Java | R | Python | SQL | JS | HTML | CSS | Git | VBA | MATLAB | Tableau | PowerBI | AWS RDS & EC2
            </span>
        </h4>
    </div>
    
    </div>


    <!-- Main tab content: Coursework -->
    <div id="gainesville-coursework" class="tab-content" style="display: none;">
        <h4 style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
        </h4>
        <p><b> GPA: 3.99/4.00 </b></p>

        <p><b> Environmental Engineering Courses: </b></p>
        <ul style="margin-top: 0; position: relative;">
            <li style="position: relative; padding-right: 80px;">
                Environmental Engineering Cores 1-4 (Air, Water, Ecology, Sustainable Materials Management)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Environmental Resource Management (ENV 4601)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Environmental Chemistry (EES 3206)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Environmental Engineering Design 1 (ENV 4454)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Renewable Energy and Sustainability (EGN 4932)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Hydraulics (CWR 4202)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Environmental Analysis (ENV 4041C)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Hydrodynamics (CWR 3201)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Computational Methods in R (ENV 3040C)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Materials (EMA 3010)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Technical Drawing and Visualization (CGN 2328)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Engineering Mechanics: Statics (EGM 2511)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Computational Programming for Engineers in Matlab (COP 2271)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Professional Communication for Engineers (ENC 3246)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Environmental Engineering Ethics Seminar (ENV 3930)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Intro to Mass Spectrometric Techniques (VME 4906)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Intro to Water Analysis (VME 4906)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Engineering Design and Society (EGN 2020C)
            </li>
        </ul>

        <p><b> Computer Science Courses: </b></p>
        <ul style="margin-top: 0; position: relative;">
            <li style="position: relative; padding-right: 80px;">
                CS Teaching and Learning (CIS 4715)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Intro to Software Engineering (CEN 3031)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Information and Database Systems 1 (CIS 4301)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Operating Systems (COP 4600)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Enterprise Software Engineering Practices (CIS 4930)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Enterprise Security (CIS 4213)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Data Structures and Algorithms (COP 3530)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Introduction to Computer Organization (CDA 3101)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Applications of Discrete Structures (COT 3100)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Engineering Statistics (STA 3032)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Computational Linear Algebra (MAS 3114)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Programming Fundamentals 2 (COP 3503C)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Programming Fundamentals 1 (COP 3502C)
            </li>
        </ul>

        <p><b> French Courses: </b></p>
        <ul style="margin-top: 0; position: relative;">
            <li style="position: relative; padding-right: 80px;">
                French Conversation and Interaction (FRE 3410)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Composition and Stylistics (FRE 3320)
            </li>
            <li style="position: relative; padding-right: 80px;">
                French Grammar and Composition (FRE 3300)
            </li>
        </ul>

        <p><b> General Courses: </b></p>
        <ul style="margin-top: 0; position: relative;">
            <li style="position: relative; padding-right: 80px;">
                Wildlife Issues in a Changing World (WIS 2040)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Engineering Ethics and Professionalism (EGS 4034)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Principles of Macroeconomics (ECO 2013)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Theatre Appreciation 1 (THE 2000)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Uncommon Reads: Ditch of Dreams (IDH 2930)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Uncommon Read: Health, Chemicals, and Environment (IDH 2920)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Uncommon Read: When the Rivers Run Dry (IDH 2930)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Physics 2 with Calculus (PHY 2048/L)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Enriched Physics 1 with Calculus (PHY 2060)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Calculus w/ Analytical Geometry III
            </li>
            <li style="position: relative; padding-right: 80px;">
                Elementary Differential Equations (MAP 2302)
            </li>
            <li style="position: relative; padding-right: 80px;">
                Economics of Resource Use (AEB 2451)
            </li>
            <li style="position: relative; padding-right: 80px;">
                General Chemistry 2 w/ Lab (CHM 2046/L)
            </li>
            <li style="position: relative; padding-right: 80px;">
                FUNdamentals of Research Integrity (EDH 3931)
            </li>
        </ul>
    </div>
</div>
            `,
            icon: icons.gainesville
        },
        {
            lat: 30.477069, 
            lng: -84.358069, 
            info: `
            <div class="location-content">
                <h3>Tallahassee, Florida</h3>
                <img src="images/fdep.png" alt="FDEP" class="location-image", loading="lazy">
                <br>
                <i style="display: inline;">
                    Intern, Division of Water Resource Management, MS4/NPDES Stormwater Program
                    <span style="float: right; font-style: italic;">July 2022 - August 2022</span>
                </i>
                
                <ul style="margin-top: 0; position: relative;">
                    <li style="position: relative; padding-right: 80px;">
                        Developed an outreach initiative to elucidate Best Management Practices (BMPs) with emphasis on the amelioration of broader Florida water quality issues (e.g., nutrient pollution) towards permittees (i.e., officials of municipalities operating a Municipal Separate Storm Sewer System) of the National Pollutant Discharge Elimination System
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Enhanced the front-end of a Microsoft Access Database using Visual Basic (VBA) to streamline ease of use for MS4 Coordinators through an Audit Report reminder function featuring an all-inclusive master list for the Environmental Manager
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Pitched a proposal for a central database development plan in comparing options utilizing SQL and Power BI
                    </li>
                </ul>

                <div class="gallery-container">
                    <div class="gallery-item">
                        <img src="images/fdep.jpg" alt="Inside FDEP Headquarters (Twin Towers) Office" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Inside FDEP Headquarters (Twin Towers) Office</p>
                    </div>
                </div>
            </div>
            `,
            icon: icons.tallahassee
        },
        {
            lat: 42.3040104, 
            lng: -83.7111609, 
            info: `
            <div class="location-content">
                <h3>Ann Arbor, Michigan</h3>
                <img src="images/epa1.jpeg" alt="NVFEL" class="location-image", loading="lazy">
                <br>
                <i style="display: inline;">
                    Pathways Intern, Office of Transportation and Air Quality (OTAQ)
                    <span style="float: right; font-style: italic;">June 2023 - May 2024</span> 
                </i>
                
                <ul style="margin-top: 0; position: relative;">
                    <li style="position: relative; padding-right: 80px;">
                        Formulated a methodology in R for the classification of marine vessel activity using Automatic Identification System data and unsupervised machine learning techniques to enhance regulation-informing emissions inventory models
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Captured activity patterns 30% more accurately than the existing method, enabling more defensible emissions estimates 
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Presented results to the greater organization and professionals in other federal agencies (i.e., USDOT Volpe Center)
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Drafted manuscript for publication of methodology to academic journal (submitting to Transportation Research Part B)
                    </li>
                </ul>

                <div class="gallery-container">
                    <div class="gallery-item">
                        <img src="images/epa2.jpg" alt="Team Photo (2023)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Team Photo (2023)</p>
                    </div>
                </div>


                <div class="gallery-container">
                    <div class="gallery-item">
                        <img src="images/epa3.png" alt="Sample AIS Classification results using LA/Long Beach Dataset" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Sample AIS Classification results using LA/Long Beach Dataset</p>
                    </div>
                </div>
            </div>
            `,
            icon: icons.ann_arbor
        },
        {
            lat: 39.5411663, 
            lng: -119.4391124, 
            info: `
            <div class="location-content">
                <h3>Reno, Nevada</h3>
                <img src="images/reno1.jpg" alt="Giga Nevada" class="location-image", loading="lazy">
                <br>
                <i style="display: inline;">
                    Intern, Global Environment, Health, Safety & Security
                    <span style="float: right; font-style: italic;">August 2023 - January 2024</span> 
                </i>
                
                <ul style="margin-top: 0; position: relative;">
                    <li>
                        Crafted custom PowerBI dashboards based on stakeholder specifications to inform business decision-making
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Project managed the creation of a standardized job profile data repository as input for a tool (portable script) to streamline return to work accommodations, projected to save the energy business upwards of $1,000,000 per year
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Automated content conveyance with Power Automate to integrate Teams, SharePoint, and dynamic weekly emails
                    </li>
                </ul>

                <div class="gallery-container">
                    <div class="gallery-item">
                        <img src="images/reno2.jpeg" alt="Inside Gigafactory 1 (Sparks, Nevada)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Inside Gigafactory 1 (Sparks, Nevada)</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/reno3.jpg" alt="Intern Cohort" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Intern Cohort</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/reno4.jpeg" alt="Cybertruck (Pre-Launch)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Cybertruck (Pre-Launch)</p>
                    </div>
                </div>
            </div>

            `,
            icon: icons.reno
        },
        {
            lat: 37.4940265, 
            lng: -121.9452050, 
            info: `
            <div class="location-content">
                <h3>Fremont, California</h3>
                <img src="images/fremont1.jpg" alt="Fremont Factory" class="location-image", loading="lazy">
                <br>
                <i style="display: inline;">
                    Data Engineering Intern
                    <span style="float: right; font-style: italic;">June 2024 - August 2024</span> 
                </i>
                
                <ul style="margin-top: 0; position: relative;">
                    <li>
                        Crafted custom PowerBI dashboards to inform critical business decision-making based on stakeholder needs and specifications
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Deprecated and eased complexity of computationally intensive dashboards within the PowerBI Workspace, increasing uptime
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Validated the Airflow (ETL) pipeline from the Sustainability & Environment internal web app to a central MSSQL database
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                    Received the Collaborative Badge from Laurie Shelby (VP) for “hitting the ground running” in support of my team and others
                    </li>
                </ul>

                <div class="gallery-container">
                    <div class="gallery-item">
                        <img src="images/fremont2.jpeg" alt="Outside Tesla Fremont Factory (2024)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Outside Tesla Fremont Factory (2024)</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/fremont3.jpeg" alt="Pointing at Fremont Factory from Mission Peak (2024)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Pointing at Fremont Factory from Mission Peak (2024)</p>
                    </div>
                </div>
            </div>

            `,
            icon: icons.fremont
        },
        {
            lat: 64.1355, 
            lng: -21.8954, 
            info: `
            <div class="location-content">
                <h3>Reykjavík, Iceland</h3>
                <img src="images/iceland1.png" alt="UFIC" class="location-image", loading="lazy">
                <br>

                UF In Iceland Study Abroad: Sustainability and Renewable Energy
                <i style="display: inline;">
                    <span style="float: right; font-style: italic;">May 2024</span> 
                </i>
                
                <ul style="margin-top: 0; position: relative;">
                    <li>
                        Explored the engineering and public policy surrounding renewable energy adoption (hydro & geothermal)
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Toured an ON geothermal power plant and on-site carbon & hydrogen sulfide deep well injection (CarbFix)
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Attended lectures at Orkustofun (Nat Energy Authority), Iceland University, Reykjavík University, GEORG, and Ocean Cluster	
                    </li>
                </ul>

                <div class="gallery-container">
                    <div class="gallery-item">
                        <img src="images/iceland2.jpg" alt="UF Group inside ON Geothermal Facility" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">UF Group inside ON Geothermal Facility</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/iceland3.jpg" alt="UF Group at Ocean Cluster" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">UF Group at Ocean Cluster</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/iceland4.jpg" alt="UF Group at Icelandic Althing, the Oldest Parliament in the World" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">UF Group at Icelandic Althing, the Oldest Parliament in the World</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/iceland5.jpg" alt="CO2 and Hydrogen Sulfide Deep Well Injector" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">CO2 and Hydrogen Sulfide Deep Well Injector</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/iceland6.jpeg" alt="CO2 and Hydrogen Sulfide Deep Well Injector" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">CO2 and Hydrogen Sulfide Deep Well Injector</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/iceland8.jpeg" alt="CO2 and Perlan Museum Observatory" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Perlan Museum Observatory (Reykjavík)</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/iceland7.jpeg" alt="Discovered Skyr (Icelandic for Yogurt)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Discovered Skyr (Icelandic for Yogurt)</p>
                    </div>
                </div>
            </div>

            `,
            icon: icons.iceland
        },
        {
            lat: 50.6306, 
            lng: 6.0348, 
            info: `
            <div class="location-content">
                <h3>Lontzen, Belgium</h3>
                <img src="images/bel1.png" alt="Belgium/US Flags" class="location-image", loading="lazy">
                <br>
                <i style="display: inline;">
                    Bilingual English-French | Dual Citizenship (United States & Belgium)
                </i>
                
                <ul style="margin-top: 0; position: relative;">
                    <li>
                        Dual Citizenship (United States & Belgium)
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Conversational Proficiency in French
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        Visited family in Lontzen most summers prior to COVID
                    </li>
                    <li style="position: relative; padding-right: 80px;">
                        French fries, despite the name, were invented in Belgium
                    </li>
                </ul>

                <div class="gallery-container">
                    <div class="gallery-item">
                        <img src="images/bel2.png" alt="Classic Belgian Frites Stand (2011)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">Classic Belgian Frites Stand (2011)</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/bel3.JPG" alt="My brother and I at "Mini Europe" (2017) in Brussels, Atomium in Background" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">My brother and I at "Mini Europe" (2017) in Brussels, Atomium in Background</p>
                    </div>
                    <div class="gallery-item">
                        <img src="images/bel4.JPG" alt="(Electric) Train at Gare de Liège-Guillemins (2011)" class="gallery-image", loading="lazy">
                        <p class="gallery-caption">(Electric) Train at Gare de Liège-Guillemins (2011)</p>
                    </div>
                </div>
            </div>

            `,
            icon: icons.eupen
        }
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
