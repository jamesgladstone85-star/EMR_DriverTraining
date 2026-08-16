// Shunting & Train Preparation — question bank.
// Source: Shunting — Preparation & Berthing Revision Guide (GERT8000-SS2
// Issue 7). Single standalone quiz, no modules — matches the guide it's
// drawn from.
//
// Question ids are 10001-10034 deliberately: getWrongIds() in progress.js
// is a single global "wrong question" list shared across every quiz on
// the site, keyed only by raw numeric id. Existing blocks in use: PTS
// 1-80, Booking On/Rostering/Publications 5001-5060, GSM-R 7001-7025,
// Semaphore Signals 8001-8040, Colour Light Signals 9001-9040. This quiz
// claims the 10000 block. Any future quiz should claim its own clear
// block (e.g. next one starts at 11001) rather than restarting at 1.

        const SHUNTING_QUIZ_SECTIONS = [
            { id: "all", title: "Shunting & Train Preparation Assessment", desc: "34 questions covering the full Shunting — Preparation & Berthing revision guide (GERT8000-SS2 Issue 7). Pass mark: 85%." }
        ];

        const SHUNTING_QUIZ_QUESTIONS = [
            {
                id: 10001, section: "all",
                question: "What is the definition of a shunting movement?",
                type: "single",
                options: ["Any movement of a train or vehicle other than a train passing normally along a running line", "Only movements that take place within a maintenance depot", "Any movement authorised by a signal, regardless of location", "A movement made exclusively without a shunter present"],
                correct: [0],
                rationale: "A shunting movement is any movement of a train or vehicle other than a train passing normally along a running line."
            },
            {
                id: 10002, section: "all",
                question: "What is the difference between tandem working and multiple working?",
                type: "single",
                options: ["Tandem: two or more locos driven by two or more separate drivers. Multiple: two or more locos driven by ONE driver via control cables", "Tandem and multiple working are two names for the same arrangement", "Tandem always involves loose shunting; multiple never does", "Multiple working requires a shunter; tandem working never does"],
                correct: [0],
                rationale: "Tandem working is two or more locomotives driven by two or more separate drivers. Multiple working is two or more locomotives driven by ONE driver through control cables connecting all locos."
            },
            {
                id: 10003, section: "all",
                question: "What is \"propelling\", and what does it NOT include?",
                type: "single",
                options: ["Pushing vehicles by a traction unit — it does NOT include push-pull trains", "Any movement where the traction unit is at the rear, including push-pull trains", "Loose shunting vehicles downhill under gravity", "Moving vehicles using a rope or chain"],
                correct: [0],
                rationale: "Propelling means pushing vehicles by a traction unit. This specifically does NOT include push-pull trains, which are a separate arrangement."
            },
            {
                id: 10004, section: "all",
                question: "What is loose shunting, and when is it permitted?",
                type: "single",
                options: ["Shunting where vehicles become detached from the traction unit during the movement — only permitted where specially authorised in local instructions", "Any shunting movement performed without a shunter present", "Shunting where the traction unit remains coupled throughout", "A movement authorised verbally rather than by signal"],
                correct: [0],
                rationale: "Loose shunting is shunting of vehicles that do not remain attached to the traction unit during the movement — it may only be carried out where specially authorised in local instructions."
            },
            {
                id: 10005, section: "all",
                question: "Which of the following are correct restrictions on loose shunting?",
                type: "multiple",
                options: [
                    "Coaching stock vehicles must NOT be loose shunted",
                    "Other vehicles must NOT be loose shunted against coaching stock vehicles",
                    "Loose shunting requires specific authorisation in local instructions",
                    "Loose shunting is permitted anywhere as long as a shunter is present",
                    "Loose shunting of coaching stock is permitted at reduced speed only"
                ],
                correct: [0, 1, 2],
                rationale: "You must not loose shunt coaching stock vehicles, and must not loose shunt other vehicles against coaching stock vehicles either way round. It's only permitted at all where specially authorised in local instructions — a shunter's presence alone doesn't authorise it, and there's no reduced-speed exception for coaching stock."
            },
            {
                id: 10006, section: "all",
                question: "Who is IN CHARGE of a specific shunting movement?",
                type: "single",
                options: ["The shunter — the driver must work to their instructions even if a signal has cleared", "The driver, who has final authority regardless of the shunter", "The controlling signaller only, with no shunter involvement", "Whoever gave the original movement authority on the diagram"],
                correct: [0],
                rationale: "The shunter is in charge of a specific shunting movement. The driver must work to the instructions given — even if a signal has cleared for the movement."
            },
            {
                id: 10007, section: "all",
                question: "Before starting any shunting, what must the driver and shunter reach a clear understanding about?",
                type: "single",
                options: ["Exactly what needs to be done, and how the movements will be controlled", "Only the final destination of the movement", "The identity of the signaller on duty", "The exact time the movement must be completed by"],
                correct: [0],
                rationale: "GERT8000-SS2 §4.1: before starting any shunting, the driver and shunter must reach a clear understanding about exactly what needs to be done, and how the shunting movements will be controlled."
            },
            {
                id: 10008, section: "all",
                question: "Which of the following are safety checks the shunter (or unaccompanied driver) must make before any shunting movement?",
                type: "multiple",
                options: [
                    "No 'NOT TO BE MOVED' boards are placed on the vehicles",
                    "Any derailer or scotch block has been removed",
                    "All points the movement will go over are correctly set for the movement",
                    "The train preparation checklist has been fully completed that shift",
                    "The controlling signaller has personally inspected the route"
                ],
                correct: [0, 1, 2],
                rationale: "GERT8000-SS2 §4.2 requires checking for 'not to be moved' boards, removing any derailer/scotch block, and confirming points are correctly set (unless trailing hand points are specifically authorised to be pushed through). Train preparation and a personal signaller inspection aren't part of this pre-shunting safety check."
            },
            {
                id: 10009, section: "all",
                question: "What is the speed limit in a siding, unless specifically authorised otherwise?",
                type: "single",
                options: ["5 mph (10 km/h)", "10 mph (16 km/h)", "3 mph (5 km/h)", "15 mph (24 km/h)"],
                correct: [0],
                rationale: "The general speed limit in a siding is 5 mph (10 km/h), unless specifically authorised to exceed it."
            },
            {
                id: 10010, section: "all",
                question: "What is the speed limit in a washer, wheel lathe, shed, or fuel line (F&I) area?",
                type: "single",
                options: ["3 mph", "5 mph", "1 mph", "10 mph"],
                correct: [0],
                rationale: "Washers, wheel lathes, sheds and fuel lines (F&I) have a lower speed limit of 3 mph, distinct from the general 5 mph siding limit."
            },
            {
                id: 10011, section: "all",
                question: "A signal has cleared for a shunting movement. Must the driver make the move?",
                type: "single",
                options: ["No — the driver must only move if the shunter has authorised it, or operated a shunting/other indicator authorising it", "Yes, a cleared signal is always sufficient authority on its own", "Only if the shunter is physically visible to the driver", "Only during daylight hours"],
                correct: [0],
                rationale: "GERT8000-SS2 §5.1: a movement must only be made — even when a signal has cleared — if the shunter has authorised the movement, or operated a shunting or other indicator which authorises it."
            },
            {
                id: 10012, section: "all",
                question: "The driver loses sight of the shunter's handsignals during a movement. What must the driver do?",
                type: "single",
                options: ["Stop immediately, and restart only when the shunter gives the correct handsignal", "Continue at reduced speed until the shunter reappears", "Sound the horn continuously and keep moving", "Contact the signaller before taking any action"],
                correct: [0],
                rationale: "If the driver loses sight of the shunter or their handsignals, they must stop immediately and restart only when the shunter gives the correct handsignal again."
            },
            {
                id: 10013, section: "all",
                question: "Which of the following handsignal meanings are correctly matched?",
                type: "multiple",
                options: [
                    "Arm(s) moved in a circular motion / white light waved in a circle = Move away",
                    "Arm(s) raised above head / red light raised = Stop",
                    "Arm raised, moved up and down = Ease up (slow down)",
                    "Arm(s) moved towards body = Stop",
                    "One arm held steady (in a vehicle) = Move away"
                ],
                correct: [0, 1, 2],
                rationale: "Circular arm motion/circular white light = move away; arm(s) raised above head or a raised red light = stop; arm raised and moved up and down = ease up. Moving the arm(s) towards the body actually means 'move towards' (not stop), and one arm held steady in a vehicle specifically means stop (not move away)."
            },
            {
                id: 10014, section: "all",
                question: "During radio-controlled shunting, what must the shunter do throughout each movement?",
                type: "single",
                options: ["Speak continuously OR transmit a continuous bleep signal", "Only transmit at the start and end of the movement", "Remain silent unless an issue arises", "Send a single confirmation bleep once per minute"],
                correct: [0],
                rationale: "GERT8000-SS2 §5.2b: the shunter must speak continuously, or transmit a continuous bleep signal, throughout each radio-controlled movement."
            },
            {
                id: 10015, section: "all",
                question: "If there is a break in radio transmission during a shunting movement, what must the driver do?",
                type: "single",
                options: ["Stop immediately, and restart only when the shunter confirms it's safe to continue", "Continue cautiously, assuming transmission will resume shortly", "Switch to handsignals automatically without stopping", "Sound the horn and carry on at reduced speed"],
                correct: [0],
                rationale: "If radio transmission breaks during the movement, the driver must stop immediately and restart only once the shunter has confirmed it is safe to continue."
            },
            {
                id: 10016, section: "all",
                question: "Which of the following bell/buzzer codes are correctly matched?",
                type: "multiple",
                options: [
                    "1 = Stop",
                    "2 = Move away (in direction of travel)",
                    "6 = All clear / right away",
                    "3 = Ease up / slow down",
                    "4 = Move towards (reverse)"
                ],
                correct: [0, 1, 2],
                rationale: "1 bell/buzz = stop; 2 = move away in the direction of travel; 6 = all clear/right away. 3 bells actually means 'move towards' (reverse), not ease up — and 4 bells means 'ease up/slow down', not move towards. Don't mix up 3 and 4."
            },
            {
                id: 10017, section: "all",
                question: "Before allowing a movement to enter a shed or building, what must happen?",
                type: "single",
                options: ["Stop at the entrance, check it's safe, then sound a short horn blast before restarting (unless otherwise authorised)", "Proceed directly at reduced speed without stopping", "Only sound the horn if other staff are visible nearby", "Contact the depot supervisor by phone before every entry"],
                correct: [0],
                rationale: "GERT8000-SS2 §5.7: stop the movement at the entrance, only proceed once checked safe, and sound a short blast of the horn (soft setting or depot whistle) as a warning before restarting, unless otherwise authorised."
            },
            {
                id: 10018, section: "all",
                question: "Which of the following situations always require driving from the leading cab during a shunting movement?",
                type: "multiple",
                options: [
                    "Within a depot or stabling siding",
                    "Entering a shed or building",
                    "Approaching buffer stops",
                    "Whenever radio contact with the shunter is available",
                    "Only when propelling vehicles containing passengers"
                ],
                correct: [0, 1, 2],
                rationale: "You must always drive from the leading cab within a depot/stabling siding, entering a shed or building, proceeding onto vehicles, or approaching buffer stops. Having radio contact available doesn't remove this requirement on its own — driving from another cab is only permitted if the shunter is controlling by radio AND it isn't necessary to observe signals or handsignals."
            },
            {
                id: 10019, section: "all",
                question: "Under what specific condition can a driver drive from a non-leading cab during shunting?",
                type: "single",
                options: ["Only if a shunter is controlling the movement by radio AND it is not necessary to observe signals or handsignals", "Whenever the driver judges visibility to be adequate", "Only at night, when signal aspects are more visible from any cab", "Whenever the movement speed is below 3mph"],
                correct: [0],
                rationale: "A driver may only drive from a non-leading cab if a shunter is controlling the movement by radio AND it isn't necessary to observe signals or handsignals — both conditions must be met together."
            },
            {
                id: 10020, section: "all",
                question: "When is propelling permitted, and over what distance?",
                type: "single",
                options: ["Only if necessary, and over the shortest possible distance", "Whenever convenient for depot operations", "Only during daylight hours, over any distance", "Only when the shunter rides in the trailing cab"],
                correct: [0],
                rationale: "Propelling is only allowed if necessary, and must be carried out over the shortest possible distance."
            },
            {
                id: 10021, section: "all",
                question: "During a propelling movement, where may the shunter be positioned to control it?",
                type: "multiple",
                options: [
                    "Riding in the leading cab, able to apply the automatic brake",
                    "Riding in the vehicle at the leading end, able to control the movement and apply the automatic brake",
                    "On the ground, ahead of the movement, in contact with the driver or where the driver can see them",
                    "In the trailing cab, communicating by radio only",
                    "Anywhere within the depot boundary, regardless of sightline to the movement"
                ],
                correct: [0, 1, 2],
                rationale: "The shunter must ride in the leading cab (able to apply the automatic brake), or ride in a suitable leading-end vehicle able to control the movement and apply the brake, or control from a safe ground position ahead of the movement in contact with or visible to the driver. Riding in the trailing cab, or being anywhere in the depot regardless of sightline, are not valid positions."
            },
            {
                id: 10022, section: "all",
                question: "What must the shunter/unaccompanied driver do after each shunting movement?",
                type: "multiple",
                options: [
                    "Make sure vehicles are secured by handbrakes where necessary",
                    "Scotch vehicles with no working handbrake, unless attached to vehicles with working handbrakes that can hold them",
                    "Secure stationary vehicles before making a draw-away movement",
                    "Rely on the automatic brake to secure any vehicle left standing",
                    "Report to the signaller only if the vehicles are left on a siding"
                ],
                correct: [0, 1, 2],
                rationale: "GERT8000-SS2 §5.4: secure vehicles by handbrake where necessary, scotch those with no working handbrake (unless held by attached vehicles with working brakes), and secure stationary vehicles before a draw-away move. The automatic brake must NEVER be relied on to secure a vehicle."
            },
            {
                id: 10023, section: "all",
                question: "What is the rule about a limit of shunt signal or indicator?",
                type: "single",
                options: ["No part of the movement may pass it without the signaller's permission — an overrun is considered a SPAD", "It may be passed freely if the line ahead appears clear", "It only applies to movements over 5mph", "It applies only during possessions"],
                correct: [0],
                rationale: "GERT8000-SS2 §5.5: no part of a movement may pass a limit of shunt signal or indicator without the signaller's permission. An overrun of a Limit of Shunt board is considered a SPAD (Signal Passed at Danger)."
            },
            {
                id: 10024, section: "all",
                question: "For a wrong-direction shunting movement on a falling gradient towards the next signal box, which conditions permit it to go beyond a home signal (with the signaller's permission)?",
                type: "multiple",
                options: [
                    "The automatic brake is working throughout the train",
                    "The locomotive is at the end nearer to the next signal box",
                    "The movement proceeds at very low speed regardless of brake status",
                    "A member of staff walks ahead of the movement on foot",
                    "The shunter is riding in the leading vehicle"
                ],
                correct: [0, 1],
                rationale: "GERT8000-SS2 §5.6: on a falling gradient, the movement must not be made beyond a home signal unless the automatic brake is working throughout the train, OR the locomotive is at the end nearer to the next signal box. Low speed alone, a person walking ahead, or the shunter's riding position aren't the stated conditions."
            },
            {
                id: 10025, section: "all",
                question: "Before authorising a movement over points worked from a signal box, what must the shunter/unaccompanied driver normally obtain?",
                type: "single",
                options: ["The signaller's permission (verbally or by handsignal), and check the points are fitting correctly where possible", "Written confirmation from the depot supervisor only", "No permission is required if the points appear correctly set by sight alone", "A second shunter's independent confirmation"],
                correct: [0],
                rationale: "GERT8000-SS2 §8: before authorising a movement over signal-box-worked points, get the signaller's permission (verbally or by handsignal) and check the points are fitting correctly where possible."
            },
            {
                id: 10026, section: "all",
                question: "What is the signaller's permission signal for a movement over points, given in daylight?",
                type: "single",
                options: ["Arm raised above the head", "A white light waved in a circle", "Two short blasts on a whistle", "A red flag lowered slowly"],
                correct: [0],
                rationale: "In daylight, the signaller's permission signal is an arm raised above the head; in darkness, it's a white light twisted quickly."
            },
            {
                id: 10027, section: "all",
                question: "When approaching to couple, at what distance must the traction unit first stop from the vehicle?",
                type: "single",
                options: ["2 metres (6 feet 6 inches)", "5 metres", "1 metre", "10 metres"],
                correct: [0],
                rationale: "When approaching to couple, you must always stop the traction unit 2 metres (6 feet 6 inches) from the vehicle, then stop again at any further distance set out in instructions for that class of traction."
            },
            {
                id: 10028, section: "all",
                question: "Before detaching a traction unit on a gradient, at which end must the train be secured?",
                type: "single",
                options: ["The LOWER end", "The UPPER end", "Either end, driver's discretion", "Both ends simultaneously, always"],
                correct: [0],
                rationale: "Before detaching a traction unit on a gradient, the train must be secured at the LOWER end."
            },
            {
                id: 10029, section: "all",
                question: "Where can a traction unit be uncoupled from another traction unit on a running line?",
                type: "single",
                options: ["Only at a signal box, at a signal, or on a platform line", "Anywhere, provided the line is temporarily blocked", "Only within a maintenance depot boundary", "Only with written permission from Operations Control, regardless of location"],
                correct: [0],
                rationale: "GERT8000-SS2 §7.4: a traction unit must not be uncoupled from another traction unit on a running line except at a signal box, at a signal, or on a platform line."
            },
            {
                id: 10030, section: "all",
                question: "Must the automatic brake be in use when attaching to or detaching from a passenger or postal train?",
                type: "single",
                options: ["Yes — the automatic brake must be in use on all such movements", "No, it's optional depending on local instructions", "Only for postal trains, not passenger trains", "Only during attaching, not detaching"],
                correct: [0],
                rationale: "GERT8000-SS2 §7.1: the automatic brake must be in use on movements which involve attaching to or detaching from a passenger or postal train — no exceptions for either direction of the operation."
            },
            {
                id: 10031, section: "all",
                question: "When leaving vehicles on a running line, what must be done regarding lights?",
                type: "single",
                options: ["A red light must be placed on the rear end, or on BOTH ends if on a single or bi-directional line", "No light is ever required if it's daytime", "A white light must always be placed on the front end only", "A flashing amber light must be placed at the midpoint of the vehicles"],
                correct: [0],
                rationale: "GERT8000-SS2 §9.3: when leaving vehicles on a running line, place a red light on the rear end — or on both ends if the line is single or bi-directional — after first telling the signaller (unless routine at that location)."
            },
            {
                id: 10032, section: "all",
                question: "What colour light must be placed on vehicles left facing an approaching movement on a dead-end line?",
                type: "single",
                options: ["The SAME colour as the light already shown on the buffer stops (red or white)", "Always red, regardless of the buffer stop light colour", "Always white, regardless of the buffer stop light colour", "Green, to indicate the line is otherwise clear"],
                correct: [0],
                rationale: "GERT8000-SS2 §9.4: a light of the SAME colour as that on the buffer stops (red or white) must be placed on the end of the vehicles facing approaching movements — though this may be unnecessary if TOC instructions confirm the vehicle will otherwise be sufficiently visible."
            },
            {
                id: 10033, section: "all",
                question: "What must be confirmed before boarding a train during preparation, to avoid a serious risk?",
                type: "single",
                options: ["The road number AND the unit number", "Only the unit number", "Only the scheduled departure time", "The name of the depot supervisor on duty"],
                correct: [0],
                rationale: "You must confirm both the road number AND the unit number before boarding — boarding the wrong train is a serious risk."
            },
            {
                id: 10034, section: "all",
                question: "Which of the following are among the three types of train preparation?",
                type: "multiple",
                options: [
                    "Full Preparation — all required exterior, cab and interior checks",
                    "Partial / Mobilisation — basic check of traction, braking, communication and door systems only",
                    "Above Solebar / Station Preparation — interior and cab checks only, used where exterior cannot be checked",
                    "Emergency Preparation — a rapid single-system check used only after an incident",
                    "Remote Preparation — checks carried out entirely via the company tablet with no physical inspection"
                ],
                correct: [0, 1, 2],
                rationale: "The three defined types are Full Preparation (all checks), Partial/Mobilisation (basic traction, braking, communication and doors only), and Above Solebar/Station Preparation (interior and cab checks only, used where trains are berthed in platforms and exterior equipment can't be accessed). 'Emergency' and 'Remote' preparation aren't defined categories in this guide."
            }
        ];
