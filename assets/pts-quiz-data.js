// PTS Master Assessment — question bank.
// Source: PTS 675-000 V4 rulebook slide deck, converted from a standalone
// React prototype into plain data for use by pts-quiz.html.
//
// PTS_QUIZ_SECTIONS: the section picker on the quiz's own start screen
// ("all" = full 80-question assessment, m1-m8 = one module's 10 questions).
// PTS_QUIZ_QUESTIONS: all 80 questions, each tagged with its section id.
//
// Do not edit rationale/correct answers without checking against the
// PTS 675-000 V4 material — these are safety-critical rulebook facts.

        const PTS_QUIZ_SECTIONS = [
            { id: "all", title: "Full 80-Question Master Assessment", desc: "Test everything in one massive exam. Pass mark: 90% (72/80 correct)." },
            { id: "m1", title: "Module 1: Walking Routes, PPE & Depot Safety", desc: "Green/Yellow/Red routes, tramlines, stabled train rules, depot hazards." },
            { id: "m2", title: "Module 2: Permanent Way & Track Geometry", desc: "Cess, 4-foot, 6-foot, 10-foot, bi-directional lines, rail/sleeper components." },
            { id: "m3", title: "Module 3: Speed, Sighting & Position of Safety", desc: "5-10 Rule, acknowledgment signals, equipment placement, sighting hazards." },
            { id: "m4", title: "Module 4: Signs, Telephones & Emergency Calls", desc: "Safety colors, SPT, Lineside, LC phones, ABC protocol & phonetic alphabet." },
            { id: "m5", title: "Module 5: 25kV AC Overhead Line Equipment (OLE)", desc: "OLE voltage, 2.75m distances, cant rail, Red Bonds, and structure plates." },
            { id: "m6", title: "Module 6: 650-750V DC Conductor Rail (CRE/3rd Rail)", desc: "CRE voltage, 1.5m distances, collector shoes, gaps, and emergency rescue." },
            { id: "m7", title: "Module 7: Emergency Protection & Track Equipment", desc: "Detonators, Track Circuit Clips, Axle counters, 2km walk, Hand signals." },
            { id: "m8", title: "Module 8: COSS Roles, Badges & Safe Systems of Work", desc: "COSS, Lookouts, Site Wardens, Safeguarded/Fenced/Separated systems." }
        ];

        const PTS_QUIZ_QUESTIONS = [
            // ================= MODULE 1: WALKING ROUTES & DEPOT SAFETY =================
            {
                id: 1, section: "m1",
                question: "What color walking route markings identify a route that is separated from the operational railway by a permanent barrier or fence?",
                type: "single",
                options: ["Green Walking Route", "Yellow Walking Route", "Red Walking Route", "Blue Walking Route"],
                correct: [0],
                rationale: "Slide 8: Green Walking Routes do not pass through high-risk areas, are inside maintenance shed personal protection areas, lineside, or separated by a permanent barrier/fence."
            },
            {
                id: 2, section: "m1",
                question: "On a Yellow Walking Route, what is the MAXIMUM number of conducted visitors permitted per Responsible Person?",
                type: "single",
                options: ["5 visitors per Responsible Person", "2 visitors per Responsible Person", "10 visitors per Responsible Person", "1 visitor per Responsible Person"],
                correct: [0],
                rationale: "Slide 9: When conducted on a Yellow Walking Route 'On or Near the Line', a maximum of 5 visitors per Responsible Person applies."
            },
            {
                id: 3, section: "m1",
                question: "When two users carrying tools meet on a narrow walking route, what must happen?",
                type: "single",
                options: [
                    "One person must give way and move to the side as far as reasonably practical",
                    "Both users must stop and wait for a lookout",
                    "The person carrying the lighter equipment must step into the four-foot",
                    "Both users must turn around and walk backwards"
                ],
                correct: [0],
                rationale: "Slide 7: If 2 users are required to pass one another, 1 person must give way and move to the side as far as is reasonably practical."
            },
            {
                id: 4, section: "m1",
                question: "How close can an object be placed or moved relative to the nearest running line on a walking route?",
                type: "single",
                options: ["No objects shall be placed or moved within 2 metres of the nearest running line", "Within 1.25 metres", "Within 0.5 metres", "Directly on the sleeper ends"],
                correct: [0],
                rationale: "Slide 7: No objects shall be placed or moved within 2 metres of the nearest running line."
            },
            {
                id: 5, section: "m1",
                question: "How must long items be carried when walking around depots or lineside?",
                type: "single",
                options: ["Horizontally, using a second person where possible", "Vertically over the shoulder", "Slung across the back at a 45-degree angle", "Dragged along the ballast"],
                correct: [0],
                rationale: "Slide 7 & 94: Carry long items horizontally, using a second person where possible to avoid contacting overhead structures or wires."
            },
            {
                id: 6, section: "m1",
                question: "What minimum PPE must be worn at ALL times on a Red Walking Route?",
                type: "single",
                options: [
                    "Approved High-Visibility jacket or vest AND authorised safety footwear",
                    "High-Visibility vest and sensible street shoes",
                    "Hard hat and ear defenders only",
                    "No PPE is required if escorted by a COSS"
                ],
                correct: [0],
                rationale: "Slide 10: As a minimum, approved High-Visibility jacket or vest AND authorised safety footwear must be worn at all times on Red Routes."
            },
            {
                id: 7, section: "m1",
                question: "What warning indicates that depot protection is isolated and train movements are commencing?",
                type: "single",
                options: ["A loud siren and flashing strobe lights", "A green flashing light", "A continuous series of horn blasts", "A yellow flag waved at the shed door"],
                correct: [0],
                rationale: "Slide 13: A loud siren and flashing strobe lights indicate depot protection has been turned off and train movements will commence."
            },
            {
                id: 8, section: "m1",
                question: "What is the minimum safe distance required when crossing between stabled trains?",
                type: "single",
                options: ["15 metres (50 feet)", "5 metres (15 feet)", "2 metres (6.5 feet)", "30 metres (100 feet)"],
                correct: [0],
                rationale: "Slide 14: Leave a minimum distance of 50 feet or 15 metres when crossing between stabled trains."
            },
            {
                id: 9, section: "m1",
                question: "What sign indicates a Red Walking Route divergence point painted on the floor?",
                type: "single",
                options: ["Solid red line or red painted person sign", "Yellow crosshatch", "Green arrow", "White dashed line"],
                correct: [0],
                rationale: "Slide 6: Red routes diverging from Yellow routes use a solid red line or red painted person sign."
            },
            {
                id: 10, section: "m1",
                question: "What must you do before entering and walking around an unfamiliar depot?",
                type: "single",
                options: [
                    "Receive and fully understand a site safety brief & depot layout instructions",
                    "Sign in at the station platform",
                    "Put on ear defenders and a blue COSS armband",
                    "Obtain permission directly from Network Rail Eco control"
                ],
                correct: [0],
                rationale: "Slide 11: You must ensure you have received and fully understood a site safety brief and follow all local working instructions."
            },

            // ================= MODULE 2: PERMANENT WAY & TRACK GEOMETRY =================
            {
                id: 11, section: "m2",
                question: "What is the definition of 'On or Near the Line'?",
                type: "single",
                options: [
                    "Inside the boundary fence and less than 3 metres away from the nearest running line",
                    "Inside the boundary fence and more than 3 metres away from the nearest running line",
                    "Standing inside the four-foot space only",
                    "Within 10 metres of a signal post"
                ],
                correct: [0],
                rationale: "Slide 19: 'On or near the line' is inside the boundary fence and less than 3 metres away from the nearest running line."
            },
            {
                id: 12, section: "m2",
                question: "What is the space between the two running rails of a single track called?",
                type: "single",
                options: ["The Four-Foot", "The Six-Foot", "The Ten-Foot", "The Cess"],
                correct: [0],
                rationale: "Slide 21-23: The 'Four-Foot' is the space between the two rails of a single running line."
            },
            {
                id: 13, section: "m2",
                question: "On a standard two-track railway, what is the space between the two adjacent running lines called?",
                type: "single",
                options: ["The Six-Foot", "The Four-Foot", "The Ten-Foot", "The Cess"],
                correct: [0],
                rationale: "Slide 21-22: The 'Six-Foot' is the space separating two adjacent running lines."
            },
            {
                id: 14, section: "m2",
                question: "On a four-track railway, what is the wider area separating two distinct pairs of tracks called?",
                type: "single",
                options: ["The Ten-Foot", "The Six-Foot", "The Four-Foot", "The Cess"],
                correct: [0],
                rationale: "Slide 23: The 'Ten-Foot' is the wider middle space between two sets of double tracks."
            },
            {
                id: 15, section: "m2",
                question: "Where is the 'Cess' located on a railway line?",
                type: "single",
                options: [
                    "The area along the outside of the tracks beyond the ballast shoulder",
                    "Between the rails of the main line",
                    "Underneath the sleeper baseplate",
                    "Between the Up Fast and Down Fast lines"
                ],
                correct: [0],
                rationale: "Slide 21-23: The Cess is the area alongside the outer running rail on either side of the railway."
            },
            {
                id: 16, section: "m2",
                question: "What rail component holds the rail into the chair or baseplate?",
                type: "single",
                options: ["Pandrol Clip (or Spikes/Keys)", "Fishplate", "Sleeper", "Ballast"],
                correct: [0],
                rationale: "Slide 20: Pandrol Clips (or spikes/keys) hold the steel rail securely into the chair or baseplate."
            },
            {
                id: 17, section: "m2",
                question: "What metal plates are bolted to the ends of rails to join them together?",
                type: "single",
                options: ["Fishplates", "Baseplates", "Pandrol Clips", "Structure Bonds"],
                correct: [0],
                rationale: "Slide 20: Fishplates join two rail ends together."
            },
            {
                id: 18, section: "m2",
                question: "If no walking route is provided, where is the safest place to walk along the railway?",
                type: "single",
                options: ["In the Cess, facing oncoming traffic", "In the four-foot, walking with traffic", "In the six-foot", "On the ballast shoulder with back to traffic"],
                correct: [0],
                rationale: "Slide 31: If a walking route is not available, the safest place to walk is in the Cess, facing oncoming traffic."
            },
            {
                id: 19, section: "m2",
                question: "What is a 'Bi-Directional Line'?",
                type: "single",
                options: [
                    "A track signalled to run trains in BOTH directions",
                    "A line restricted to freight trains only",
                    "A track with both 3rd rail and overhead line electrification",
                    "A walking route painted with green and yellow tramlines"
                ],
                correct: [0],
                rationale: "Slide 29: Bi-Directional lines are signalled to run trains in both directions. Extra care is required!"
            },
            {
                id: 20, section: "m2",
                question: "Which line direction terminology refers to trains travelling TOWARDS London?",
                type: "single",
                options: ["UP Line", "DOWN Line", "FAST Line", "SLOW Line"],
                correct: [0],
                rationale: "Slide 26-28: UP Line typically runs TOWARDS London (or primary headquarters), and DOWN Line runs AWAY from London."
            },

            // ================= MODULE 3: SPEED, SIGHTING & POSITION OF SAFETY =================
            {
                id: 21, section: "m3",
                question: "State the '5 and 10 Second Rule' for walking on or near the line.",
                type: "single",
                options: [
                    "Look up at least every 5 seconds and reach safety at least 10 seconds before a train arrives",
                    "Look up every 10 seconds and reach safety 5 seconds before a train arrives",
                    "Wait 5 seconds after a train passes and look around for 10 seconds",
                    "Look up only when you hear a horn and clear the line in 10 seconds"
                ],
                correct: [0],
                rationale: "Slide 33: You must look up at least every 5 seconds and reach a position of safety at least 10 seconds before the train arrives."
            },
            {
                id: 22, section: "m3",
                question: "How do you acknowledge the driver's audible warning from an approaching train?",
                type: "single",
                options: [
                    "Move to a position of safety and raise one arm above your head",
                    "Wave both arms above your head",
                    "Shout back towards the cab",
                    "Blow a hand horn twice"
                ],
                correct: [0],
                rationale: "Slide 35: Acknowledge the driver by moving to safety and raising ONE arm above your head."
            },
            {
                id: 23, section: "m3",
                question: "What is the required Position of Safety for line speeds up to 100 mph?",
                type: "single",
                options: ["At least 4 feet (1.25 metres)", "At least 6 feet 6 inches (2 metres)", "At least 9 feet (2.75 metres)", "At least 15 feet (5 metres)"],
                correct: [0],
                rationale: "Slide 36: For speeds 0-100 mph, the position of safety is at least 4 feet (1.25 metres) from the nearest running line."
            },
            {
                id: 24, section: "m3",
                question: "What is the required Position of Safety for line speeds OVER 101 mph?",
                type: "single",
                options: ["At least 6 feet 6 inches (2 metres)", "At least 4 feet (1.25 metres)", "At least 9 feet (2.75 metres)", "At least 12 feet (3.5 metres)"],
                correct: [0],
                rationale: "Slide 36: For speeds above 101 mph, the position of safety distance increases to at least 6 feet 6 inches (2 metres)."
            },
            {
                id: 25, section: "m3",
                question: "If walking with equipment and a train approaches, how far away from the line must you place the equipment?",
                type: "single",
                options: ["At least 6 feet 6 inches (2 metres) away regardless of line speed", "At least 4 feet (1.25 metres) away", "Directly in the four-foot", "In the middle of the six-foot"],
                correct: [0],
                rationale: "Slide 38: Place equipment down at least 6 feet 6 inches (2 metres) away from the running line regardless of line speed."
            },
            {
                id: 26, section: "m3",
                question: "When crossing a line, which crossing procedure is prohibited?",
                type: "single",
                options: ["Crossing diagonally over the line", "Stepping straight across the rails in one movement", "Looking both ways before stepping out", "Checking for a position of safety on the far side"],
                correct: [0],
                rationale: "Slide 42 & 44: Always cross directly straight over at right angles. NEVER cross diagonally."
            },
            {
                id: 27, section: "m3",
                question: "When caught between two lines with trains approaching on BOTH, where should you lay down?",
                type: "single",
                options: ["In the 6-foot or 10-foot area", "In the 4-foot of either line", "Under the wheels of the train", "On top of the ballast shoulder in the four-foot"],
                correct: [0],
                rationale: "Slide 51: Lay down in the 6-foot or 10-foot. NEVER lay down in the 4-foot!"
            },
            {
                id: 28, section: "m3",
                question: "Why are umbrellas strictly prohibited while walking lineside or on or near the line?",
                type: "single",
                options: [
                    "They severely restrict forward visibility (down to 5m in wind) and prevent seeing trains 10 seconds ahead",
                    "They attract static electricity from OLE",
                    "They block signals from signallers",
                    "They cover up high-visibility clothing"
                ],
                correct: [0],
                rationale: "Slide 48: Umbrella tests prove forward sighting can drop to 5m in 10mph headwinds, failing the 10-second safety rule."
            },
            {
                id: 29, section: "m3",
                question: "What distance apart must individuals walk when moving as a group without a COSS?",
                type: "single",
                options: ["At least 20 yards / 20 metres apart", "At least 5 metres apart", "At least 50 metres apart", "Side-by-side in pairs"],
                correct: [0],
                rationale: "Slide 45: Individuals in a group must walk at least 20 yards/metres apart unless a COSS is appointed."
            },
            {
                id: 30, section: "m3",
                question: "Which of the following environmental factors can reduce sighting distances? (Select all that apply)",
                type: "multiple",
                options: ["Curves and bends", "Bridges & Gantries", "Fog, snow & heavy rain", "Foliage and overgrown trees"],
                correct: [0, 1, 2, 3],
                rationale: "Slide 47: Curves, bridges, gantries, bad weather, and foliage all reduce sighting distances."
            },

            // ================= MODULE 4: SIGNS, TELEPHONES & EMERGENCY CALLS =================
            {
                id: 31, section: "m4",
                question: "What does a RED circular sign with a diagonal bar mean?",
                type: "single",
                options: ["Prohibition (Something you MUST NOT do)", "Mandatory Action", "Warning of Danger", "Information"],
                correct: [0],
                rationale: "Slide 56-57: Red circles with diagonal bars indicate Prohibition."
            },
            {
                id: 32, section: "m4",
                question: "What does a BLUE circular sign mean?",
                type: "single",
                options: ["Mandatory Action (Something you MUST do)", "Prohibition", "Danger Warning", "Information"],
                correct: [0],
                rationale: "Slide 56-57: Blue circles indicate Mandatory Actions (e.g., Wear Eye Protection)."
            },
            {
                id: 33, section: "m4",
                question: "What does a YELLOW equilateral triangle sign indicate?",
                type: "single",
                options: ["Warning / Danger", "Mandatory Action", "Prohibition", "Safe Condition"],
                correct: [0],
                rationale: "Slide 56-57: Yellow triangles warn of danger (e.g. Overhead live wires)."
            },
            {
                id: 34, section: "m4",
                question: "What does a 'Warning - No Refuges' sign indicate?",
                type: "single",
                options: [
                    "There are NO positions of safety on THIS side, but there ARE refuges on the OPPOSITE side",
                    "There are no refuges on either side of the railway",
                    "Refuges are available every 20 metres",
                    "You may stand in the 4-foot safely"
                ],
                correct: [0],
                rationale: "Slide 60: 'No Refuges' means no safety position on that side, but refuges exist on the opposite side."
            },
            {
                id: 35, section: "m4",
                question: "Which telephone is attached to a signal post with black and white diagonal stripes?",
                type: "single",
                options: ["Signal Post Telephone (SPT)", "Lineside Telephone", "Level Crossing Telephone", "Station Help Point"],
                correct: [0],
                rationale: "Slide 66: SPTs are mounted on signal posts (marked with diagonal black/white stripes) and connect to the signaller."
            },
            {
                id: 36, section: "m4",
                question: "What does a phone marked with a White/Yellow Diamond with the letter 'X' mean?",
                type: "single",
                options: [
                    "Located in a Limited Clearance area; do NOT use except in an emergency or when the line is blocked",
                    "Connects directly to 999 emergency services",
                    "Out of service",
                    "Reserved for shunter use only"
                ],
                correct: [0],
                rationale: "Slide 70: 'X' marked phones are in limited clearance areas and must only be used in emergencies."
            },
            {
                id: 37, section: "m4",
                question: "What does 'ABC' stand for in safety communication protocols?",
                type: "single",
                options: ["Accurate, Brief, Clear", "Always Be Careful", "Alert, Block, Confirm", "Action, Boundaries, Caution"],
                correct: [0],
                rationale: "Slide 71: Communication Protocol ABC = Accurate, Brief, Clear."
            },
            {
                id: 38, section: "m4",
                question: "Using the Phonetic Alphabet, how should signal post identity 'LR 123' be spoken?",
                type: "single",
                options: ["Lima Romeo - One Two Three", "Lau Romeo - One Hundred Twenty Three", "Lima Romeo - Twelve Three", "London Railway - One Two Three"],
                correct: [0],
                rationale: "Slide 72 & 75: Read letters phonetically (Lima Romeo) and numbers individually (One Two Three)."
            },
            {
                id: 39, section: "m4",
                question: "How MUST an emergency call regarding dangerous goods start?",
                type: "single",
                options: [
                    "'This is a rail dangerous goods emergency'",
                    "'This is a level 1 chemical spill'",
                    "'Emergency call to signaller'",
                    "'Hazardous cargo alert'"
                ],
                correct: [0],
                rationale: "Slide 74: Always state: 'This is a rail dangerous goods emergency' and state the UN number."
            },
            {
                id: 40, section: "m4",
                question: "Convert railway distances: How many yards are in 1 chain, and how many chains in 1 mile?",
                type: "single",
                options: ["1 chain = 22 yards; 1 mile = 80 chains", "1 chain = 10 yards; 1 mile = 100 chains", "1 chain = 50 yards; 1 mile = 40 chains", "1 chain = 100 yards; 1 mile = 10 chains"],
                correct: [0],
                rationale: "Slide 64: 1 chain = 22 yards. 1 mile = 80 chains (1,760 yards)."
            },

            // ================= MODULE 5: 25kV AC OVERHEAD LINES (OLE) =================
            {
                id: 41, section: "m5",
                question: "What voltage is 25kV AC Overhead Line Equipment (OLE) electrified at?",
                type: "single",
                options: ["25,000 Volts AC", "750 Volts DC", "400,000 Volts AC", "650 Volts DC"],
                correct: [0],
                rationale: "Slide 84: OLE equipment is electrified at 25,000 Volts AC."
            },
            {
                id: 42, section: "m5",
                question: "What device on top of an electric train collects power from the OLE contact wire?",
                type: "single",
                options: ["Pantograph", "Collector Shoe", "Red Bond", "Catenary dropper"],
                correct: [0],
                rationale: "Slide 84: Trains draw power via a roof-mounted pantograph."
            },
            {
                id: 43, section: "m5",
                question: "What is the minimum safe distance you must maintain from live 25kV OLE?",
                type: "single",
                options: ["2.75 metres (9 feet)", "1.5 metres (5 feet)", "5 metres (15 feet)", "1.25 metres (4 feet)"],
                correct: [0],
                rationale: "Slide 92: Keep at least 2.75 metres (9 feet) away from OLE."
            },
            {
                id: 44, section: "m5",
                question: "What is the 'Cant Rail' line on a train?",
                type: "single",
                options: [
                    "An orange stripe running above the windows; you must NEVER climb above cab floor level or go above it",
                    "A step on the bogie",
                    "The edge of the platform yellow line",
                    "The lower wire on the catenary"
                ],
                correct: [0],
                rationale: "Slide 91: The Cant Rail is the orange stripe above train windows. Never go above it!"
            },
            {
                id: 45, section: "m5",
                question: "What is the function of the RED Bond on OLE structures?",
                type: "single",
                options: [
                    "It connects the structure to the running rail to return current to earth and must ALWAYS be treated as live",
                    "It acts as a mechanical support wire",
                    "It isolates the signal box",
                    "It indicates a red walking route"
                ],
                correct: [0],
                rationale: "Slide 89: Red Bonds return current to earth and must always be considered LIVE."
            },
            {
                id: 46, section: "m5",
                question: "What material MUST ladders be made of if carried or used near OLE?",
                type: "single",
                options: ["Wood or approved non-conducting material", "Aluminum", "Stainless steel", "Reinforced copper"],
                correct: [0],
                rationale: "Slide 94: Only wooden or approved non-conducting ladders may be used."
            },
            {
                id: 47, section: "m5",
                question: "If high-voltage electricity lines belonging to the National Grid fall onto the railway, what distance must you stay away?",
                type: "single",
                options: ["At least 5 metres / 5 yards / 15 feet (can be 400,000V)", "At least 2.75 metres (9 feet)", "At least 1.5 metres (5 feet)", "At least 1 metre"],
                correct: [0],
                rationale: "Slide 95: National Grid power lines carry up to 400,000V. Keep at least 5m (15ft) away."
            },
            {
                id: 48, section: "m5",
                question: "Who must you contact to request an Emergency Switch Off of 25kV OLE power?",
                type: "single",
                options: ["Electrical Control Operator (ECO) directly or via Signaller", "COSS", "Station Master", "999 Operator"],
                correct: [0],
                rationale: "Slide 96-97: Contact the ECO directly or via the Signaller."
            },
            {
                id: 49, section: "m5",
                question: "On a new style OLE ID structure plate marked 'SPC2 / 88 / 248 / UF', what does 'UF' stand for?",
                type: "single",
                options: ["Up Fast track", "Under Foot", "Ultra Frequency", "Unfenced Zone"],
                correct: [0],
                rationale: "Slide 87: UF indicates the OLE structure is adjacent to the Up Fast track."
            },
            {
                id: 50, section: "m5",
                question: "When rescuing a person within 2.75m of OLE when power IS switched off, how close can you/tools get without touching OLE?",
                type: "single",
                options: ["Must stay at least 600 mm (2 feet) away from OLE", "Must stay 1.5m away", "Can touch directly with bare hands immediately", "Must wait 24 hours"],
                correct: [0],
                rationale: "Slide 100: Ensure the victim and rescuers remain more than 600 mm (2 feet) from OLE."
            },

            // ================= MODULE 6: 650-750V DC CONDUCTOR RAIL (3RD RAIL) =================
            {
                id: 51, section: "m6",
                question: "What voltage is the Conductor Rail Equipment (CRE / 3rd Rail) energized at?",
                type: "single",
                options: ["650 to 750 Volts DC", "25,000 Volts AC", "110 Volts DC", "400 Volts AC"],
                correct: [0],
                rationale: "Slide 104: Conductor Rail (3rd Rail) is energized at 650-750V DC."
            },
            {
                id: 52, section: "m6",
                question: "What is the minimum safe distance from live Conductor Rail Equipment (3rd Rail)?",
                type: "single",
                options: ["1.5 metres (5 feet)", "2.75 metres (9 feet)", "300 mm (1 foot)", "2 metres"],
                correct: [0],
                rationale: "Slide 104: Maintain at least 1.5 metres (5 feet) from live CRE."
            },
            {
                id: 53, section: "m6",
                question: "What are the metal contact blocks on trains that pick up 3rd rail power called?",
                type: "single",
                options: ["Collector shoes (Pickup/Contact shoes)", "Pantographs", "Red Bonds", "Fishplates"],
                correct: [0],
                rationale: "Slide 105: Collector shoes brush along the 3rd rail and MUST be treated as live at all times."
            },
            {
                id: 54, section: "m6",
                question: "Where is the BEST place to cross a track fitted with a Conductor Rail?",
                type: "single",
                options: ["Where there is a Gap, Bridge, Designated Walkway, or Guard Boards", "Directly across pointwork", "Through floodwater", "Stepping between conductor rail and running rail"],
                correct: [0],
                rationale: "Slide 107: Best crossing points are gaps, bridges, walkways, or guard board covered areas."
            },
            {
                id: 55, section: "m6",
                question: "If no gap or cover is available on a 3rd rail track, how MUST you step across?",
                type: "single",
                options: ["Step over BOTH the running rail and conductor rail in ONE movement", "Step into the space between conductor rail and running rail", "Stand on top of the conductor rail insulator pot", "Crawl under the rail"],
                correct: [0],
                rationale: "Slide 107: Step over both rails in one single movement. NEVER step between CRE and running rail!"
            },
            {
                id: 56, section: "m6",
                question: "What is strictly PROHIBITED in a 3rd Rail DC area? (Select all that apply)",
                type: "multiple",
                options: [
                    "Stepping between the conductor rail and adjacent running rail",
                    "Touching collector shoes on a train",
                    "Stepping into floodwater in contact with CRE",
                    "Directing a jet of water onto the CRE"
                ],
                correct: [0, 1, 2, 3],
                rationale: "Slide 106: All these actions are strictly prohibited in DC 3rd rail territory."
            },
            {
                id: 57, section: "m6",
                question: "If attempting an urgent rescue from 3rd rail when power CANNOT be isolated, what rule applies?",
                type: "single",
                options: [
                    "Cover hands with dry non-conducting material and stand on dry non-conducting material",
                    "Use a wet wooden pole",
                    "Grab victim's bare skin directly",
                    "Splash water on the rail to short it out"
                ],
                correct: [0],
                rationale: "Slide 111: Ensure hands and standing area are covered with dry non-conducting materials."
            },
            {
                id: 58, section: "m6",
                question: "What safety distance must be maintained from CRE when rescuing someone without touching them?",
                type: "single",
                options: ["Person must be switched off OR stay clear by 300 mm (1 foot)", "Stay clear by 2.75m", "Stay clear by 5m", "Stay clear by 10m"],
                correct: [0],
                rationale: "Slide 111: CRE must be switched off if victim is touching or within 300 mm (1 foot)."
            },
            {
                id: 59, section: "m6",
                question: "What sit on top of sleepers to support the 3rd rail off the ground?",
                type: "single",
                options: ["Insulator pots", "Fishplates", "Baseplates", "Red Bonds"],
                correct: [0],
                rationale: "Slide 104: The conductor rail sits elevated on insulator pots."
            },
            {
                id: 60, section: "m6",
                question: "Can trains still move during an Emergency Electrical Switch Off?",
                type: "single",
                options: [
                    "YES, diesel trains and coasting trains can still move!",
                    "NO, all trains instantly freeze",
                    "Only maintenance trolleys can move",
                    "Only signal lights stay on"
                ],
                correct: [0],
                rationale: "Slide 110: An electrical switch off stops power to electric trains, but diesel trains or coasting trains CAN STILL MOVE."
            },

            // ================= MODULE 7: EMERGENCY PROTECTION & TRACK EQUIPMENT =================
            {
                id: 61, section: "m7",
                question: "What emergency protection equipment is carried in every train cab? (Select all that apply)",
                type: "multiple",
                options: ["10 Detonators", "2 Red Flags", "2 Track Circuit Operating Clips", "1 Emergency Horn"],
                correct: [0, 1, 2],
                rationale: "Slide 114: Standard cab kit: 10 Detonators, 2 Red Flags, 2 Track Circuit Operating Clips."
            },
            {
                id: 62, section: "m7",
                question: "What is the shelf life of detonators, and how many come in a standard box?",
                type: "single",
                options: ["5 years lifespan; Box of 10 detonators", "10 years lifespan; Box of 5 detonators", "2 years lifespan; Box of 20 detonators", "1 year lifespan; Box of 10 detonators"],
                correct: [0],
                rationale: "Slide 115: Detonators come in boxes of 10 and have a 5-year lifespan."
            },
            {
                id: 63, section: "m7",
                question: "How far apart must detonators be attached to the railhead?",
                type: "single",
                options: ["20 metres (20 yards) apart", "10 metres apart", "50 metres apart", "100 metres apart"],
                correct: [0],
                rationale: "Slide 116: Place 3 detonators spaced 20 metres (20 yards) apart."
            },
            {
                id: 64, section: "m7",
                question: "How far away must YOU stand from detonators when expecting a train to explode them?",
                type: "single",
                options: ["At least 30 metres (30 yards) away", "At least 10 metres away", "At least 2 metres away", "At least 100 metres away"],
                correct: [0],
                rationale: "Slide 116: Ensure you stand at least 30 metres (30 yards) away when detonators explode."
            },
            {
                id: 65, section: "m7",
                question: "In 3rd Rail DC areas, which rail must detonators be placed on?",
                type: "single",
                options: [
                    "On the running rail FURTHEST away from the conductor rail",
                    "On the conductor rail itself",
                    "On the running rail closest to the conductor rail",
                    "On both rails simultaneously"
                ],
                correct: [0],
                rationale: "Slide 116: Always place detonators on the rail furthest from the 3rd rail."
            },
            {
                id: 66, section: "m7",
                question: "When applying Track Circuit Operating Clips in 3rd Rail DC areas, what order must be followed?",
                type: "single",
                options: [
                    "Attach clip furthest from 3rd rail FIRST; when removing, remove clip closest to 3rd rail FIRST",
                    "Attach clip closest to 3rd rail first",
                    "Attach both clips to the conductor rail",
                    "Clips cannot be used in 3rd rail areas"
                ],
                correct: [0],
                rationale: "Slide 118: Apply clip furthest from 3rd rail first. Remove clip closest to 3rd rail first."
            },

            {
                id: 67, section: "m7",
                question: "Must Track Circuit Clips be used on lines fitted with Axle Counters?",
                type: "single",
                options: [
                    "YES! Always use Track Circuit Clips during emergency protection even on lines with Axle Counters!",
                    "NO, clips destroy axle counter sensors",
                    "Only if requested by the signaller",
                    "Only during nighttime"
                ],
                correct: [0],
                rationale: "Slide 118 & 121: Track Circuit Clips MUST ALWAYS be used during Emergency Protection, even on lines with Axle Counters!"
            },
            {
                id: 68, section: "m7",
                question: "What distance must you walk from an obstruction to set up full Emergency Protection?",
                type: "single",
                options: ["2 kilometres (1¼ miles)", "1 kilometre (⅝ mile)", "500 metres", "5 kilometres"],
                correct: [0],
                rationale: "Slide 124: Walk 2km (1¼ miles) from the obstruction to place 3 detonators."
            },
            {
                id: 69, section: "m7",
                question: "What is the rule regarding placing detonators inside tunnels?",
                type: "single",
                options: [
                    "NEVER place detonators inside a tunnel; place them at the tunnel entrance or proceed through to the far end",
                    "Always place detonators in the middle of the tunnel",
                    "Place detonators every 50m inside tunnels",
                    "Tunnels do not require detonators"
                ],
                correct: [0],
                rationale: "Slide 128: NEVER place detonators inside a tunnel. Place them at the entrance or far exit."
            },
            {
                id: 70, section: "m7",
                question: "What is the daytime Hand Danger Signal given to stop a train?",
                type: "single",
                options: ["BOTH arms raised above head OR waving a Red Flag", "One arm raised above head", "Waving a yellow jacket", "Holding hands at waist level"],
                correct: [0],
                rationale: "Slide 122: Daylight Hand Danger Signal = Both arms raised above head or waving a red flag."
            },

            // ================= MODULE 8: COSS ROLES, BADGES & SAFE SYSTEMS =================
            {
                id: 71, section: "m8",
                question: "What does 'COSS' stand for?",
                type: "single",
                options: ["Controller of Site Safety", "Chief Operator of Signal Systems", "Coordinator of Safety Standards", "Command Officer for Track Side"],
                correct: [0],
                rationale: "Slide 132: COSS = Controller of Site Safety."
            },
            {
                id: 72, section: "m8",
                question: "When MUST a COSS be appointed?",
                type: "single",
                options: [
                    "Whenever a group of 2 or more people need to carry out work on the railway",
                    "Only for groups over 10 people",
                    "Only when working inside tunnels",
                    "Only during nighttime engineering work"
                ],
                correct: [0],
                rationale: "Slide 45 & 132: A COSS is appointed whenever a group of 2 or more people work on or near the line."
            },
            {
                id: 73, section: "m8",
                question: "What color armband or badge is worn by a Controller of Site Safety (COSS)?",
                type: "single",
                options: ["BLUE armlet / badge with 'COSS' in white letters", "WHITE armlet with 'LOOKOUT' in red", "WHITE armlet with 'SITE WARDEN' in blue", "YELLOW armlet"],
                correct: [0],
                rationale: "Slide 132 & NR Standards: COSS wears a BLUE armband/badge."
            },
            {
                id: 74, section: "m8",
                question: "What color armband is worn by a LOOKOUT?",
                type: "single",
                options: ["WHITE armlet with 'LOOKOUT' in red letters", "BLUE armlet", "RED armlet", "GREEN armlet"],
                correct: [0],
                rationale: "NR Standards: Lookouts wear a WHITE armband with RED lettering."
            },
            {
                id: 75, section: "m8",
                question: "What color armband is worn by a SITE WARDEN?",
                type: "single",
                options: ["WHITE armlet with 'SITE WARDEN' in blue letters", "BLUE armlet", "ORANGE armlet", "YELLOW armlet"],
                correct: [0],
                rationale: "NR Standards: Site Wardens wear a WHITE armband with BLUE lettering."
            },
            {
                id: 76, section: "m8",
                question: "Under a 'Safeguarded' Safe System of Work, what are train speeds restricted to if movements occur?",
                type: "single",
                options: ["Extreme caution, no more than 5 mph", "20 mph", "15 mph", "50 mph"],
                correct: [0],
                rationale: "Slide 134: Safeguarded means all lines are blocked, or train movements occur at extreme caution ≤ 5 mph."
            },
            {
                id: 77, section: "m8",
                question: "What safe system of work uses physical barriers to prevent workers stepping into open lines?",
                type: "single",
                options: ["Fenced Safe System of Work", "Safeguarded", "Separated", "Lookout Operated Warning System (LOWS)"],
                correct: [0],
                rationale: "Slide 135: Fenced systems use visual/physical fencing to keep workers in safe zones."
            },
            {
                id: 78, section: "m8",
                question: "In a 'Separated' Safe System of Work, what minimum distance separates the worksite from open lines?",
                type: "single",
                options: ["At least 2 metres (6 feet 6 inches)", "At least 1.25 metres (4 feet)", "At least 5 metres", "At least 10 metres"],
                correct: [0],
                rationale: "Slide 136: Separated worksites are separated from open lines by at least 2m (6ft 6in) guarded by a Site Warden."
            },
            {
                id: 79, section: "m8",
                question: "What is the primary role of a Site Warden?",
                type: "single",
                options: [
                    "To watch the workforce and warn anyone if they move outside the safe working zone towards an open line",
                    "To look out for approaching trains 2km away",
                    "To drive the maintenance vehicle",
                    "To operate the signal post telephone"
                ],
                correct: [0],
                rationale: "Slide 136: A Site Warden ensures workers stay inside the designated safe zone."
            },
            {
                id: 80, section: "m8",
                question: "What automatic warning system uses track-mounted sensors to alert workers of approaching trains?",
                type: "single",
                options: ["ATWS (Auto Track Warning System)", "LOWS", "SPT", "DEP"],
                correct: [0],
                rationale: "Slide 133: ATWS = Auto Track Warning System."
            }
        ];
