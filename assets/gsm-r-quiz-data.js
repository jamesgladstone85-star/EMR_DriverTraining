// GSM-R Communications — question bank.
// Source: GSM-R Revision Guide (RS523 Issue 2, December 2025 / GERT8000-TW5
// Issue 14). This is a single standalone quiz, not split into modules — the
// "all" section is the only section, matching the guide it's drawn from.
//
// Question ids are 7001-7025 deliberately: getWrongIds() in progress.js is
// a single global "wrong question" list shared across every quiz on the
// site, keyed only by raw numeric id. PTS uses 1-80, the Booking On/
// Rostering/Publications quiz uses 5001-5060 — this quiz claims the 7000
// block so none of them collide in Wrong Answer Review. Any future quiz
// should claim its own clear block (e.g. next one starts at 8001) rather
// than restarting at 1.
//
// Several "multiple" questions use deliberately close distractors (e.g.
// short dial codes, TW5 defective-radio conditions) per the difficulty
// level requested — read carefully rather than pattern-matching.

        const GSMR_QUIZ_SECTIONS = [
            { id: "all", title: "GSM-R Communications Assessment", desc: "25 questions covering the full GSM-R Revision Guide (RS523 Issue 2 / GERT8000-TW5 Issue 14). Pass mark: 85%." }
        ];

        const GSMR_QUIZ_QUESTIONS = [
            {
                id: 7001, section: "all",
                question: "What does GSM-R stand for?",
                type: "single",
                options: ["Global System for Mobile Communications — Railway", "Global Signalling and Messaging — Rail", "General System Messaging Radio", "Ground Station Mobile Radio"],
                correct: [0],
                rationale: "GSM-R stands for Global System for Mobile Communications — Railway, the dedicated digital radio system used across the GB mainline network."
            },
            {
                id: 7002, section: "all",
                question: "Which of the following are classed as Group Calls under GSM-R?",
                type: "multiple",
                options: [
                    "Railway Emergency Group Call (REC)",
                    "Broadcast area calls",
                    "Shunting group calls",
                    "DSD alarm calls",
                    "Urgent calls"
                ],
                correct: [0, 1, 2],
                rationale: "Group Calls include the REC, broadcast area calls and shunting group calls. DSD alarm calls and Urgent calls are both Point-to-Point calls, not Group Calls."
            },
            {
                id: 7003, section: "all",
                question: "Which DCP button makes the highest-priority call on the GSM-R network?",
                type: "single",
                options: ["REC (Red)", "Urgent (Yellow)", "ST (Acknowledge)", "Call Signaller"],
                correct: [0],
                rationale: "The REC (red) button makes a Railway Emergency Group Call — the highest priority call on the network."
            },
            {
                id: 7004, section: "all",
                question: "Can the cab radio be switched on without a driver's key?",
                type: "single",
                options: ["Yes — limited functions are available, including REC and echo test calls", "No — a key is always required to power the radio on", "Yes, but no calls of any kind can be made", "Only during pre-registration"],
                correct: [0],
                rationale: "The cab radio can be switched on without a driver's key. Limited functions are available, but REC and echo test calls can still be made."
            },
            {
                id: 7005, section: "all",
                question: "What is the structure of the 7-digit GSM-R registration code?",
                type: "single",
                options: ["First 4 digits = train headcode; last 3 digits = location code", "First 3 digits = location code; last 4 digits = headcode", "All 7 digits represent the headcode only", "First 4 digits = wild card code; last 3 = headcode"],
                correct: [0],
                rationale: "The registration code is 7 digits: the first 4 are the train's headcode (reporting number), and the last 3 are the location code."
            },
            {
                id: 7006, section: "all",
                question: "Can a driver register the cab radio while the train is moving?",
                type: "single",
                options: ["No — you must not register on the move; the code can be stored (pre-registration) while stationary", "Yes, at any speed", "Yes, but only below 10mph", "Only if instructed by the signaller"],
                correct: [0],
                rationale: "You must NOT register while on the move. If pre-registration is needed, the code is stored while stationary first, and the transfer happens on the move later."
            },
            {
                id: 7007, section: "all",
                question: "Two trains are sharing a platform or siding. When may the second driver register?",
                type: "single",
                options: ["Only after the first train has departed AND the signal has returned to danger", "As soon as the first train's doors close", "Immediately — registration doesn't depend on the other train", "Only with explicit signaller permission each time"],
                correct: [0],
                rationale: "Where two or more trains share a platform or siding, the second driver must not register until the first train has departed AND the signal has returned to danger."
            },
            {
                id: 7008, section: "all",
                question: "Which of the following statements about pending registration are correct?",
                type: "multiple",
                options: [
                    "It is used when GSM-R network coverage is not available at the registration point",
                    "The radio automatically completes registration once coverage is detected",
                    "It is initiated by pressing the Registration button, not accessed via the menu",
                    "It is accessed through the menu, the same way as pre-registration",
                    "Once started, it cannot be cancelled"
                ],
                correct: [0, 1, 2],
                rationale: "Pending registration handles the case where coverage isn't available yet — the radio stores the code and completes registration automatically once coverage returns. Unlike pre-registration, it's initiated via the Registration button, NOT through the menu, and it can be cancelled at any time by pressing Cancel."
            },
            {
                id: 7009, section: "all",
                question: "A driver's first two registration attempts fail. What is the correct third step?",
                type: "single",
                options: ["Try once more using the company wild card code", "Abandon the journey immediately", "Contact the ECO directly on 1400", "Switch the radio off and restart it"],
                correct: [0],
                rationale: "After a second failed attempt, call the signaller using the phonebook, then make one further attempt using the company wild card code."
            },
            {
                id: 7010, section: "all",
                question: "What does a \"Duplicate\" message during registration mean?",
                type: "single",
                options: ["The registration code is already in use by another train radio", "The driver entered the headcode twice by mistake", "Two REC calls have been made simultaneously", "The radio has a hardware fault"],
                correct: [0],
                rationale: "\"Duplicate\" means the registration code is already in use — contact the signaller for a new code or alternative wild card."
            },
            {
                id: 7011, section: "all",
                question: "Which of the following are correct ways the train radio deregisters?",
                type: "multiple",
                options: [
                    "Automatically, 10 seconds after the driver's key is removed",
                    "Immediately, by pressing the Cancel/Reject button",
                    "Manually, by pressing Registration/Turn On, then Accept",
                    "Automatically, the instant the train comes to a stop",
                    "Only remotely, by the signaller deregistering it for you"
                ],
                correct: [0, 1, 2],
                rationale: "Deregistration happens automatically 10 seconds after key removal, immediately via Cancel/Reject, or manually via Registration/Turn On then Accept. Stopping the train doesn't trigger deregistration, and the signaller cannot deregister it remotely."
            },
            {
                id: 7012, section: "all",
                question: "When reversing a train to change the leading cab, what is the correct order of actions?",
                type: "single",
                options: ["Deregister in the old leading cab BEFORE registering in the new leading cab", "Register in the new cab first, then deregister the old one", "Both cabs remain registered simultaneously", "No deregistration is required when reversing"],
                correct: [0],
                rationale: "For a reversing movement, deregister from the radio in the old leading cab before registering in the new leading cab."
            },
            {
                id: 7013, section: "all",
                question: "If you want to retain your registration when removing your key, how long do you have to press Accept?",
                type: "single",
                options: ["10 seconds", "30 seconds", "1 minute", "2 minutes"],
                correct: [0],
                rationale: "You have 10 seconds to retain the registration by pressing the tick (Accept) button after removing your key."
            },
            {
                id: 7014, section: "all",
                question: "Which of the following happen when a driver's radio receives a REC?",
                type: "multiple",
                options: [
                    "The radio sounds \"Emergency, Emergency, Emergency\"",
                    "The display shows \"STOP EMERGENCY\"",
                    "Any calls already in progress are automatically disconnected",
                    "The driver must immediately make a voice call to confirm receipt",
                    "The train radio automatically deregisters"
                ],
                correct: [0, 1, 2],
                rationale: "A REC triggers the audible \"Emergency, Emergency, Emergency\" warning, the \"STOP EMERGENCY\" display, and disconnects any in-progress calls. Good practice is NOT to speak unless requested by the lead signaller or you have important information — you don't need to confirm receipt by voice, and the radio does not deregister."
            },
            {
                id: 7015, section: "all",
                question: "How does a driver know a REC has fully ended?",
                type: "single",
                options: ["The lead signaller states: \"End of railway emergency group call.\"", "The screen simply goes blank", "Two minutes pass with no further messages", "The driver presses the ST button"],
                correct: [0],
                rationale: "A REC is not completed until the lead signaller states \"End of railway emergency group call.\""
            },
            {
                id: 7016, section: "all",
                question: "Once a REC has ended, when can a train proceed?",
                type: "single",
                options: ["Only if not instructed to remain at a stand AND the driver is certain the train isn't affected", "As soon as the emergency message stops playing", "Immediately, regardless of any instructions", "Only once the signaller calls the driver individually"],
                correct: [0],
                rationale: "After a REC ends, a train not instructed to remain at a stand can proceed — but only if the driver is certain the train is not affected by the incident."
            },
            {
                id: 7017, section: "all",
                question: "Can a REC be transferred to a third party?",
                type: "single",
                options: ["No — a REC cannot be transferred to a third party", "Yes, freely between any signaller", "Yes, but only once per incident", "Only the lead signaller can authorise a transfer"],
                correct: [0],
                rationale: "A REC cannot be transferred to a third party."
            },
            {
                id: 7018, section: "all",
                question: "Which of the following statements about acknowledging a safety broadcast call with the ST button are correct?",
                type: "multiple",
                options: [
                    "You must wait for the call to be fully terminated before pressing ST",
                    "There can be a 1–2 second delay between the signaller ending the message and the call actually terminating",
                    "Pressing ST too early causes the acknowledgement to fail and the signal will not be cleared",
                    "Pressing ST as soon as the message starts speeds up the process",
                    "Advisory broadcast calls also require ST to be pressed"
                ],
                correct: [0, 1, 2],
                rationale: "ST must only be pressed once the call has fully terminated and the screen has returned to normal — there can be a 1-2 second gap after the signaller finishes speaking. Pressing early makes the acknowledgement fail. Advisory calls need no acknowledgement at all — only safety (acknowledged) broadcasts require ST."
            },
            {
                id: 7019, section: "all",
                question: "Which of these scenarios call for an acknowledged (safety) broadcast, rather than an advisory one?",
                type: "multiple",
                options: [
                    "A missing or obscured Temporary Speed Restriction (TSR) board",
                    "Animals on or near the line (not in tunnels)",
                    "Poor or reportable railhead conditions",
                    "General congestion or delay information",
                    "A blanket speed restriction notice"
                ],
                correct: [0, 1, 2],
                rationale: "Safety (acknowledged) broadcasts cover missing/obscured TSR boards, animals on or near the line, poor railhead conditions, defective emergency indicators, and unusual non-track/signalling events. Congestion/delay information and blanket speed restrictions are examples of advisory calls, which need no acknowledgement."
            },
            {
                id: 7020, section: "all",
                question: "How long after no DSD reset action is taken (with the master switch in forward or reverse) is a DSD alarm message sent to the signaller?",
                type: "single",
                options: ["One minute", "30 seconds", "Two minutes", "Five minutes"],
                correct: [0],
                rationale: "The train radio sends a DSD alarm message to the signaller after one minute of no reset action, with the master switch in the forward or reverse position."
            },
            {
                id: 7021, section: "all",
                question: "Which of the following short dial code pairings are correct?",
                type: "multiple",
                options: [
                    "1200 — Controlling Signaller",
                    "1300 — Operations Control",
                    "1400 — Electrical Control Operator (ECO)",
                    "1900 — Controlling Signaller",
                    "1200 — Echo call test"
                ],
                correct: [0, 1, 2],
                rationale: "1200 connects to the Controlling Signaller, 1300 to Operations Control, and 1400 to the ECO. 1900 is actually the echo call test, not the signaller — don't mix up the two."
            },
            {
                id: 7022, section: "all",
                question: "What indicates a service-affecting radio failure?",
                type: "single",
                options: ["Failure XX (01–07), \"Radio Failure\", \"Cab Radio Flt\", \"EPROM/RAM Flt\", or a blank screen", "A \"Warning\" message with a number", "The screen briefly flickers on power-up", "A low-battery icon only"],
                correct: [0],
                rationale: "Service-affecting failures are indicated by Failure XX (01-07), 'Radio Failure', 'Cab Radio Flt', 'EPROM/RAM Flt', or a blank screen — these mean the radio is unable to enter service. A 'Warning' plus a number is a non-service-affecting failure, where the train can still enter service."
            },
            {
                id: 7023, section: "all",
                question: "According to TW5, which of the following allow a train to start from somewhere OTHER than a maintenance depot with a defective radio in the driving cab?",
                type: "multiple",
                options: [
                    "An operative transportable or portable GSM-R radio has been provided in the cab",
                    "A competent person is in an alternative cab with an operative radio, with a direct means of communication to the driver",
                    "Permission has been given to complete the journey without an operative radio",
                    "The driver personally judges the fault to be minor",
                    "It is starting from a maintenance depot with the same defect"
                ],
                correct: [0, 1, 2],
                rationale: "TW5 permits starting away from a maintenance depot with a defective cab radio if a portable radio is provided, a competent person with an operative radio is in an alternative cab with direct communication, or permission is given to travel without one (among other listed conditions). A driver's own judgement of severity isn't one of the listed conditions — and starting FROM a maintenance depot with a defective radio is never permitted, regardless of the defect."
            },
            {
                id: 7024, section: "all",
                question: "What speed restriction may apply if told of a GSM-R radio NETWORK FAILURE (as distinct from a defective radio)?",
                type: "single",
                options: ["Not exceeding 100mph (160km/h) or 60mph (100km/h) through the affected area, as instructed", "No restriction applies at all", "A blanket 20mph restriction everywhere", "The train must stop and wait for coverage to return"],
                correct: [0],
                rationale: "If told of a radio network failure, you may be instructed not to exceed 100mph (160km/h) or 60mph (100km/h) through the affected area — whichever you're told applies."
            },
            {
                id: 7025, section: "all",
                question: "What are the symptoms of \"silent radio\", and how is it prevented?",
                type: "single",
                options: ["No REC introduction message, no double-beep during registration, no single-beep on Cancel — prevented by leaving a 10-second gap when cycling power", "A constant high-pitched tone — prevented by muting the radio overnight", "The screen permanently displays \"Silent Mode\" — prevented by an echo call test before every journey", "The radio deregisters every 30 seconds — prevented by disabling auto-deregistration"],
                correct: [0],
                rationale: "Silent radio occurs if power is removed and restored within 10 seconds, and shows as missing REC introduction, missing double-beep on registration, and missing single-beep on Cancel. It's prevented by leaving at least a 10-second gap when cycling power."
            }
        ];
