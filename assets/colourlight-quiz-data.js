// Colour Light Signals — question bank.
// Source: Colour Light Signals Revision Notes (RS521 Issue 9 / GERT8000-S7
// Issue 71). Single standalone quiz, no modules — matches the guide it's
// drawn from.
//
// Question ids are 9001-9040 deliberately: getWrongIds() in progress.js is
// a single global "wrong question" list shared across every quiz on the
// site, keyed only by raw numeric id. Existing blocks in use: PTS 1-80,
// Booking On/Rostering/Publications 5001-5060, GSM-R 7001-7025, Semaphore
// Signals 8001-8040. This quiz claims the 9000 block. Any future quiz
// should claim its own clear block (e.g. next one starts at 10001) rather
// than restarting at 1.

        const COLOURLIGHT_QUIZ_SECTIONS = [
            { id: "all", title: "Colour Light Signals Assessment", desc: "40 questions covering the full Colour Light Signals revision notes (RS521 Issue 9 / GERT8000-S7 Issue 71). Pass mark: 85%." }
        ];

        const COLOURLIGHT_QUIZ_QUESTIONS = [
            {
                id: 9001, section: "all",
                question: "What does a plain black plate with white text (e.g. \"AJ 211\") identify?",
                type: "single",
                options: ["A controlled signal, operated by the signaller", "An automatic signal", "A semi-automatic signal", "An intermediate block signal"],
                correct: [0],
                rationale: "A plain black plate with white text identifies a controlled signal, operated by the signaller."
            },
            {
                id: 9002, section: "all",
                question: "What does a black plate with a white horizontal stripe across the top identify?",
                type: "single",
                options: ["An automatic signal, operated by the passage of trains", "A controlled signal", "A co-acting signal", "A banner repeating signal"],
                correct: [0],
                rationale: "A black plate with a white horizontal stripe across the top identifies an automatic signal, operated by the passage of trains — though the signaller can still place it at danger using the signal post replacement switch."
            },
            {
                id: 9003, section: "all",
                question: "What does \"SEMI\" above a signal identification plate mean?",
                type: "single",
                options: ["A semi-automatic signal — normally train-operated but can also be controlled from a box or ground frame", "The signal is semi-permanently out of use", "The signal only operates during peak hours", "A signal shared between two adjacent signal boxes"],
                correct: [0],
                rationale: "\"SEMI\" identifies a semi-automatic signal: normally operated by the passage of trains, but also controllable from a signal box or ground frame."
            },
            {
                id: 9004, section: "all",
                question: "What does a black plate with a white VERTICAL stripe identify?",
                type: "single",
                options: ["An intermediate block signal", "An automatic signal", "A distant signal", "A banner repeating signal"],
                correct: [0],
                rationale: "A black plate with a white vertical stripe identifies an intermediate block signal — a stop signal controlling exit from an intermediate block section into an absolute block section."
            },
            {
                id: 9005, section: "all",
                question: "Which of the following signal identification plate letters are correctly matched to their meaning?",
                type: "multiple",
                options: [
                    "Upward arrow + letter 'R' = distant signal",
                    "Letters 'RR' = outer distant signal",
                    "Letters 'BR' = banner repeating signal",
                    "Letters 'CA' = controlled automatic signal",
                    "Letters 'RR' = restricted route signal"
                ],
                correct: [0, 1, 2],
                rationale: "Upward arrow + 'R' = distant signal (cannot show a stop aspect); 'RR' = outer distant signal (a second distant further in advance); 'BR' = banner repeating signal. 'CA' actually means co-acting signal, not \"controlled automatic\" — and 'RR' means outer distant, not \"restricted route\"."
            },
            {
                id: 9006, section: "all",
                question: "What are colour light distant signals identified by on their plate?",
                type: "single",
                options: ["A white triangle, or the letters 'R' or 'RR'", "A yellow circle", "A black diamond", "The word 'DISTANT' spelled out in full"],
                correct: [0],
                rationale: "RS521 §1.2: some colour light distant signals are identified by a white triangle, or the letters 'R' or 'RR', on the signal identification plate."
            },
            {
                id: 9007, section: "all",
                question: "Which of these are components of a track circuit?",
                type: "multiple",
                options: [
                    "Power source",
                    "Insulated rail joints (insulated gaps)",
                    "Track circuit relay",
                    "AWS track magnet",
                    "GSM-R base station"
                ],
                correct: [0, 1, 2],
                rationale: "A track circuit's four main components are the power source, insulated rail joints, the track circuit relay, and the rails themselves. AWS magnets and GSM-R base stations are entirely separate systems, not part of a track circuit."
            },
            {
                id: 9008, section: "all",
                question: "What happens to the track circuit relay when a train enters the section?",
                type: "single",
                options: ["It is de-energised (dropped), holding the signal at danger", "It is energised (picked up), clearing the signal", "It remains unchanged until the train fully exits", "It triggers an AWS warning directly"],
                correct: [0],
                rationale: "A train's axles short-circuit the rails, de-energising (dropping) the relay, which holds the signal at danger. The relay is energised (picked up) only when the section is clear."
            },
            {
                id: 9009, section: "all",
                question: "What do axle counters do, as an alternative to track circuits?",
                type: "single",
                options: ["Count axles entering and exiting a section to confirm the complete train has cleared", "Measure the exact speed of a train through a section", "Detect only the leading axle of a train", "Replace the need for insulated rail joints entirely"],
                correct: [0],
                rationale: "Axle counters count axles as a train enters and exits a section, confirming the complete train has cleared before the section is considered free."
            },
            {
                id: 9010, section: "all",
                question: "What is the overlap distance in colour light signalling?",
                type: "single",
                options: ["200 metres beyond the signal", "400 metres beyond the signal", "100 metres beyond the signal", "500 metres beyond the signal"],
                correct: [0],
                rationale: "Overlap (colour light signalling) = 200 metres beyond the signal — the area kept clear in case a train overruns a stop signal. Don't confuse this with the 400m clearance point used in absolute block signalling."
            },
            {
                id: 9011, section: "all",
                question: "What is the clearance point distance in absolute block signalling?",
                type: "single",
                options: ["400 metres beyond the signal", "200 metres beyond the signal", "300 metres beyond the signal", "600 metres beyond the signal"],
                correct: [0],
                rationale: "Clearance point (absolute block signalling) = 400 metres beyond the signal — the distance a train must have passed before the section ahead is considered clear."
            },
            {
                id: 9012, section: "all",
                question: "Where is red always positioned on a colour light signal?",
                type: "single",
                options: ["Always at the bottom", "Always at the top", "Position varies by region", "In the centre of the signal head"],
                correct: [0],
                rationale: "Red is always at the bottom of a colour light signal — a fixed, memorable rule."
            },
            {
                id: 9013, section: "all",
                question: "In two-aspect signalling, how many warnings does a driver get before a stop signal?",
                type: "single",
                options: ["One — there is no multi-aspect sequencing", "Two, via double yellow", "Three, via a graduated sequence", "None — two-aspect signalling has no warning stage"],
                correct: [0],
                rationale: "Two-aspect signalling uses a distant signal followed by a stop signal — one warning stage before the stop, with no multi-aspect sequencing."
            },
            {
                id: 9014, section: "all",
                question: "In three-aspect signalling, which of the following aspect sequences are correct?",
                type: "multiple",
                options: [
                    "If the signal ahead shows red, this signal shows single yellow",
                    "If the signal ahead shows single yellow, this signal shows green",
                    "If the signal ahead shows green, this signal shows green",
                    "If the signal ahead shows red, this signal shows double yellow",
                    "If the signal ahead shows single yellow, this signal shows red"
                ],
                correct: [0, 1, 2],
                rationale: "Three-aspect sequence: signal ahead red → this signal single yellow; ahead single yellow → this signal green; ahead green → this signal green. Double yellow doesn't exist in three-aspect signalling at all — that's a four-aspect feature."
            },
            {
                id: 9015, section: "all",
                question: "In four-aspect signalling, what does double yellow mean?",
                type: "single",
                options: ["Preliminary caution — be prepared to find the next signal at single yellow", "Caution — be prepared to stop at the next signal", "Proceed — line is clear", "The signal is not showing correctly"],
                correct: [0],
                rationale: "Double yellow in four-aspect signalling means preliminary caution — be prepared to find the next signal at single yellow. Single yellow (not double) is the one that means \"be prepared to stop at the next signal.\""
            },
            {
                id: 9016, section: "all",
                question: "You stop or nearly stop at a 2-aspect colour light signal at danger and it then clears. What must you do?",
                type: "single",
                options: ["Be prepared to stop at the next stop signal worked by the same signalbox", "Proceed at full line speed with no further caution needed", "Wait for explicit signaller confirmation before moving at all", "Treat all subsequent signals as clear automatically"],
                correct: [0],
                rationale: "GERT8000-S7 §1.6: after stopping or nearly stopping at a 2-aspect signal at danger (one that cannot display yellow) that then clears, be prepared to stop at the next stop signal worked by the same signalbox — mirroring the equivalent semaphore rule."
            },
            {
                id: 9017, section: "all",
                question: "How should a driver treat these signals if they are not showing correctly?",
                type: "multiple",
                options: [
                    "A stop signal not showing / not clear / showing white = treat as DANGER",
                    "A distant signal not showing correctly = treat as CAUTION",
                    "A position-light, subsidiary or shunting signal not showing correctly = treat as NORMAL (stop) indication",
                    "A stop signal not showing correctly = treat as CLEAR, since no red is displayed",
                    "Any signal not showing correctly may be passed at reduced speed without further caution"
                ],
                correct: [0, 1, 2],
                rationale: "GERT8000-S7 §1.5: a stop signal not showing / unclear / white light = treat as DANGER; a distant not showing correctly = treat as CAUTION; a position-light/subsidiary/shunting signal not showing correctly = treat as NORMAL (i.e. stop). None of these are ever treated as clear or safe to pass without full caution."
            },
            {
                id: 9018, section: "all",
                question: "What do junction indicators display when a proceed aspect is shown?",
                type: "single",
                options: ["A line of white lights, normally above the signal", "A single flashing red light", "A yellow diamond shape", "A digital readout of the route number"],
                correct: [0],
                rationale: "Junction indicators display a line of white lights, normally positioned above the signal, when a proceed aspect is shown."
            },
            {
                id: 9019, section: "all",
                question: "Reading junction indicator feathers, which side represents routes 1, 2, 3?",
                type: "single",
                options: ["Feathers to the LEFT of the signal", "Feathers to the RIGHT of the signal", "Feathers directly above the signal", "Feathers below the signal only"],
                correct: [0],
                rationale: "Feathers to the LEFT of the signal represent routes 1, 2, 3 (furthest left = route 1). Feathers to the RIGHT represent routes 4, 5, 6 (furthest right = route 6)."
            },
            {
                id: 9020, section: "all",
                question: "When a junction indicator lights up, when should the driver proceed?",
                type: "single",
                options: ["Only once the main aspect clears — never act on the junction indicator alone", "Immediately, as soon as the indicator lights up", "Only after confirming verbally with the signaller", "As soon as the feathers stop flashing"],
                correct: [0],
                rationale: "Once a junction indicator lights up, wait for the main aspect to clear before proceeding — never act on the junction indicator alone."
            },
            {
                id: 9021, section: "all",
                question: "What does a flashing yellow aspect mean?",
                type: "single",
                options: ["Facing points at a junction ahead are set for a diverging route with a lower speed than the straight route", "General caution, identical in meaning to a steady yellow", "The signal is defective and should be treated as danger", "The line ahead is temporarily blocked"],
                correct: [0],
                rationale: "A flashing yellow confirms facing points at a junction ahead are set for a diverging route with a lower speed than the straight route — it's advance route information, not a general caution."
            },
            {
                id: 9022, section: "all",
                question: "In four-aspect flashing yellow sequencing, what does 'double flashing yellows' at signal 2 mean?",
                type: "single",
                options: ["Junction ahead is set for a diverging (lower speed) route", "The junction signal itself is at danger", "Signal 3 will definitely also show double flashing yellow", "The straight route is blocked"],
                correct: [0],
                rationale: "In four-aspect sequencing, double flashing yellows at signal 2 confirms the junction ahead is set for a diverging, lower-speed route. Double flashing yellow only exists in four-aspect sequencing — three-aspect areas go straight to a single flashing yellow at signal 3, with no double-flash stage at all."
            },
            {
                id: 9023, section: "all",
                question: "In four-aspect flashing yellow signalling, under what condition may signal 3 display a single flashing yellow, even though a steady aspect was already shown at signal 2?",
                type: "single",
                options: ["If the train is between signals 2 and 3 when signal 4 is cleared for the diverging route", "Only during poor visibility", "Never — signal 3 always matches whatever signal 2 showed", "Only if the driver requests it via GSM-R"],
                correct: [0],
                rationale: "If a train is between signals 2 and 3 when signal 4 is cleared for the diverging route, signal 3 may then display one flashing yellow aspect — even though a steady aspect was already shown at signal 2 (RS521 §2.5)."
            },
            {
                id: 9024, section: "all",
                question: "How many preliminary route indicators are provided in four-aspect signalling areas?",
                type: "single",
                options: ["3", "2", "4", "1"],
                correct: [0],
                rationale: "Four-aspect signalling areas provide 3 preliminary route indicators; three-aspect areas provide 2."
            },
            {
                id: 9025, section: "all",
                question: "How many preliminary route indicators are provided in three-aspect signalling areas?",
                type: "single",
                options: ["2", "3", "1", "4"],
                correct: [0],
                rationale: "Three-aspect signalling areas provide 2 preliminary route indicators; four-aspect areas provide 3 — don't mix the two figures up."
            },
            {
                id: 9026, section: "all",
                question: "When is a preliminary route indicator NOT illuminated?",
                type: "single",
                options: ["When the junction signal is at danger", "When the junction signal is showing green", "During daylight hours only", "When the train has a competent person on board"],
                correct: [0],
                rationale: "A preliminary route indicator is not illuminated when the junction signal ahead is at danger. If cleared for the straight route with no junction indicator, it shows an arrow pointing straight up instead."
            },
            {
                id: 9027, section: "all",
                question: "In a splitting distant signal, what does the primary head relate to?",
                type: "single",
                options: ["The main route", "The diverging route only", "Both routes simultaneously with identical aspects", "Neither route — it is purely decorative"],
                correct: [0],
                rationale: "In a splitting distant signal, the primary head relates to the main route; the off-set head (displaced left or right) relates to the diverging route."
            },
            {
                id: 9028, section: "all",
                question: "In a splitting distant signal, what does the off-set head (displaced left or right) relate to?",
                type: "single",
                options: ["The diverging route", "The main route only", "AWS cancellation status", "The previous signal box's section signal"],
                correct: [0],
                rationale: "The off-set head relates to the diverging route — when the junction clears for the diverging route, the off-set heads show the aspect beyond, and the primary heads show danger-appropriate aspects for the straight route instead."
            },
            {
                id: 9029, section: "all",
                question: "What does a red aspect position-light signal showing two lights at 45° (white) mean?",
                type: "single",
                options: ["Proceed at caution towards the next train, signal or buffer stop — be prepared to stop short of any obstruction", "Stop — do not pass under any circumstances", "Proceed at normal line speed", "The signal is out of use"],
                correct: [0],
                rationale: "Two lights at 45° (white) on a red aspect position-light signal means proceed at caution towards the next train, signal or buffer stop, prepared to stop short of any obstruction. Two lights horizontal (red) means STOP."
            },
            {
                id: 9030, section: "all",
                question: "A yellow aspect position-light (shunting) signal shows two lights horizontal (yellow). What does this mean?",
                type: "single",
                options: ["STOP — though it may be passed if heading to a shunt neck or siding, not the running line", "Proceed at caution regardless of route", "Proceed to the main line only", "The signal only applies to passenger movements"],
                correct: [0],
                rationale: "Two horizontal yellow lights on a yellow aspect position-light signal mean STOP — though it may be passed if the movement is heading to a shunt neck or siding rather than the running line, since the route may be obstructed."
            },
            {
                id: 9031, section: "all",
                question: "What is the normal (unlit) state of a position-light signal associated with a main aspect?",
                type: "single",
                options: ["Unlit — meaning obey the main signal", "Showing red permanently", "Showing white at 45° permanently", "Flashing to draw attention"],
                correct: [0],
                rationale: "A position-light signal associated with a main aspect is normally unlit, meaning simply obey the main signal. Two white lights at 45° means proceed at caution towards the next obstruction."
            },
            {
                id: 9032, section: "all",
                question: "Can a driver proceed with a PASSENGER train on the authority of a position-light signal alone?",
                type: "single",
                options: ["No — not unless entering a permissive platform line on the authority of a position-light or subsidiary signal associated with a main aspect", "Yes, freely at any location", "Yes, but only during daylight hours", "Only for the first vehicle of a multiple unit"],
                correct: [0],
                rationale: "GERT8000-S7 §3.1: a driver must not proceed with a passenger train on the authority of a position-light signal or semaphore shunting signal, unless entering a permissive platform line on the authority of a position-light or subsidiary signal associated with a main aspect."
            },
            {
                id: 9033, section: "all",
                question: "When proceeding under permissive working with a position-light signal (main aspect at red), which of these apply?",
                type: "multiple",
                options: [
                    "Always drive at caution",
                    "Be prepared to stop short of any obstruction, including a train, vehicle or buffer stop",
                    "Do not assume the line is clear",
                    "The route is guaranteed to be clear since the position-light has cleared",
                    "Normal line speed applies once the position-light shows proceed"
                ],
                correct: [0, 1, 2],
                rationale: "Under permissive working with a red main aspect, always drive at caution, be prepared to stop short of any obstruction including another train or vehicle, and never assume the line is clear — the route may be occupied ahead. Neither a guaranteed clear route nor normal line speed apply here."
            },
            {
                id: 9034, section: "all",
                question: "Why are banner repeating signals provided?",
                type: "single",
                options: ["To give the driver advance warning of a signal's aspect, at locations where that signal itself is hard to see in good time (e.g. on a curve, in a tunnel, or behind a building)", "To repeat the exact aspect of a signal at very close range only", "To indicate the presence of a limit of shunt", "To confirm AWS has been cancelled"],
                correct: [0],
                rationale: "Banner repeating signals are provided on the approach to signals with restricted sighting — for example on a curve, in a tunnel, or behind a building — to give the driver advance warning of that signal's aspect before it can be seen directly. (Giving an exact repeat at very close range is what a co-acting signal does instead.)"
            },
            {
                id: 9035, section: "all",
                question: "On a 3-state banner repeater, what does a green-lit OFF indication confirm?",
                type: "single",
                options: ["The signal ahead is showing green specifically", "The signal ahead is showing yellow specifically", "The banner repeater itself is defective", "The signal ahead is at danger"],
                correct: [0],
                rationale: "A 3-state banner repeater's green-lit OFF confirms the signal ahead is showing green specifically. A 2-state repeater's OFF only confirms the signal ahead is showing a proceed aspect (yellow OR green), without distinguishing which."
            },
            {
                id: 9036, section: "all",
                question: "Which of the following are true about co-acting (CA) signals?",
                type: "multiple",
                options: [
                    "They repeat the EXACT aspect or indication of the main signal",
                    "They are always the same type (colour light or semaphore) as the main signal",
                    "They are identified by 'CA' on the signal identification plate",
                    "They show a DIFFERENT, less restrictive aspect than the main signal to ease sighting",
                    "They are only used at level crossings"
                ],
                correct: [0, 1, 2],
                rationale: "Co-acting signals repeat the exact aspect of the main signal, are always the same type as it, and are identified by 'CA' on their plate — provided to give both short and long distance sighting of the same signal. They never show a different aspect, and aren't restricted to level crossings."
            },
            {
                id: 9037, section: "all",
                question: "How is a colour light main or position-light signal marked when not in use?",
                type: "single",
                options: ["Covered up, and main aspects may also have a large 'X' displayed over the cover", "Left in place but permanently showing red", "Removed from the post entirely with no marking", "Marked with a yellow diamond"],
                correct: [0],
                rationale: "A colour light main or position-light signal not in use is covered up; main aspects may also have a large 'X' displayed over the cover."
            },
            {
                id: 9038, section: "all",
                question: "How is a semaphore signal marked when not in use (for comparison)?",
                type: "single",
                options: ["A large X fixed on the signal arm, or the disc is covered over", "The arm is painted white", "A green flag is tied to the post", "It shows a continuous double flash"],
                correct: [0],
                rationale: "A semaphore signal not in use has a large X fixed on the arm, or has its disc covered over — the semaphore-territory equivalent of the colour light 'covered up' convention."
            },
            {
                id: 9039, section: "all",
                question: "Will automatic signals usually have TPWS fitted?",
                type: "single",
                options: ["No — automatic signals will not usually have TPWS", "Yes, always without exception", "Only on high-speed lines", "Only if also fitted with AWS"],
                correct: [0],
                rationale: "Automatic signals will not usually have TPWS fitted — worth remembering as a specific exception rather than assuming all colour light signals carry TPWS."
            },
            {
                id: 9040, section: "all",
                question: "At the junction signal itself, showing a single steady yellow with a junction indicator — what does this mean for the driver, regardless of any flashing aspect shown at the previous signal?",
                type: "single",
                options: ["The normal meaning of a single yellow aspect: be prepared to stop at the next signal", "No action needed — the earlier flashing overrides the steady aspect shown here", "The driver may proceed at full line speed through the junction", "It means the diverging route is blocked"],
                correct: [0],
                rationale: "When a single steady yellow aspect is displayed together with a junction indicator at the junction signal, this has the normal meaning of a yellow aspect — be prepared to stop at the next signal. This applies even though a flashing aspect may have been displayed at the previous signal (RS521 §2.5)."
            }
        ];
