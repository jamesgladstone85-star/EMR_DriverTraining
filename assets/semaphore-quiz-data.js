// Semaphore Signals — question bank.
// Source: GERT8000 Revision Notes — Semaphore Signals & Signalling Systems
// (cross-referenced to GERT8000-S7, GERT8000-SS2, RS521). Single standalone
// quiz, no modules — matches the guide it's drawn from.
//
// Deliberately EXCLUDED from this bank: the "Block Instrument" entry and
// the entire "Co-Acting Signals" section, both flagged NOT VERIFIED against
// rule book material in the source PDF, and the specific "three types of
// sign" claim under Limit of Shunt (also flagged unverified) — only the
// underlying confirmed rule (GERT8000-SS2 §5.5) is tested for that topic.
//
// Question ids are 8001-8040 deliberately: getWrongIds() in progress.js is
// a single global "wrong question" list shared across every quiz on the
// site, keyed only by raw numeric id. Existing blocks in use: PTS 1-80,
// Booking On/Rostering/Publications 5001-5060, GSM-R 7001-7025. This quiz
// claims the 8000 block; the Colour Light Signals quiz claims 9000. Any
// future quiz should claim its own clear block (e.g. next one starts at
// 10001) rather than restarting at 1.

        const SEMAPHORE_QUIZ_SECTIONS = [
            { id: "all", title: "Semaphore Signals Assessment", desc: "40 questions covering the full Semaphore Signals & Signalling Systems revision guide (GERT8000-S7 / SS2). Pass mark: 85%." }
        ];

        const SEMAPHORE_QUIZ_QUESTIONS = [
            {
                id: 8001, section: "all",
                question: "What does a semaphore stop signal show when ON (horizontal arm)?",
                type: "single",
                options: ["DANGER — do not pass", "PROCEED — line is clear", "CAUTION — be prepared to stop", "No meaning — signal not in use"],
                correct: [0],
                rationale: "A stop signal ON (horizontal arm) means DANGER — do not pass."
            },
            {
                id: 8002, section: "all",
                question: "What does the rear of a stop signal arm look like?",
                type: "single",
                options: ["White with a black horizontal stripe", "Solid red", "Yellow with a fish-tail notch", "Plain white with no markings"],
                correct: [0],
                rationale: "The rear of a stop signal arm is white with a black horizontal stripe."
            },
            {
                id: 8003, section: "all",
                question: "In an Upper Quadrant semaphore signal, which direction does the arm move for CLEAR?",
                type: "single",
                options: ["The arm raises to 45°", "The arm drops to 45°", "The arm stays horizontal", "The arm rotates 90° to vertical"],
                correct: [0],
                rationale: "Upper Quadrant: the arm raises to 45° for clear — this is the most common arrangement in modern semaphore areas."
            },
            {
                id: 8004, section: "all",
                question: "In a Lower Quadrant semaphore signal, which direction does the arm move for CLEAR?",
                type: "single",
                options: ["The arm drops to 45°", "The arm raises to 45°", "The arm stays horizontal", "The arm disappears from view"],
                correct: [0],
                rationale: "Lower Quadrant: the arm drops to 45° for clear. Both quadrant types are in use, and the Rule Book applies equally to both — only the direction of travel differs."
            },
            {
                id: 8005, section: "all",
                question: "Which of the following are true about multiple stop signals (home signals)?",
                type: "multiple",
                options: [
                    "A block section may have up to 4 home signals",
                    "If there are 2 home signals, the furthest from the signal box is the Outer Home",
                    "If 2 signals are on the same post, you must obey both",
                    "Only the nearest home signal to the box needs to be obeyed",
                    "A block section can never have more than 1 home signal"
                ],
                correct: [0, 1, 2],
                rationale: "A block section may have up to 4 home signals; with 2, the furthest from the box is the Outer Home and the nearest is the Inner Home. Where 2 signals share a post, both must be obeyed (GERT8000-S7 §1.1b) — you cannot selectively ignore one."
            },
            {
                id: 8006, section: "all",
                question: "You have stopped or nearly stopped at a semaphore signal at danger and it then clears. What must you do?",
                type: "single",
                options: ["Be prepared to stop at the NEXT stop signal worked by the same signal box", "Proceed at full line speed immediately", "Wait 5 minutes before proceeding", "Contact the signaller before moving, regardless of circumstance"],
                correct: [0],
                rationale: "GERT8000-S7 §1.6: if you have stopped or nearly stopped at a semaphore signal at danger and it then clears, you must be prepared to stop at the next stop signal worked by the same signal box."
            },
            {
                id: 8007, section: "all",
                question: "Is there an exception to the rule requiring a driver to be prepared to stop at the next signal, after stopping at a semaphore at danger?",
                type: "single",
                options: ["Yes — it does not apply to a signal controlling entrance to an IBS section", "No exceptions exist", "Yes — it only applies at night", "Yes — it only applies to freight trains"],
                correct: [0],
                rationale: "GERT8000-S7 §1.6 has a stated exception: it does not apply to the signal controlling entrance to an IBS (Intermediate Block Signal) section."
            },
            {
                id: 8008, section: "all",
                question: "If a semaphore signal is not showing correctly, how must it be treated?",
                type: "multiple",
                options: [
                    "A stop signal not showing correctly is treated as AT DANGER",
                    "A distant signal not showing correctly is treated as AT CAUTION",
                    "Any signal not showing correctly can be passed at normal speed",
                    "A stop signal not showing correctly is treated as CLEAR",
                    "You should ignore the signal and proceed on sighting only"
                ],
                correct: [0, 1],
                rationale: "GERT8000-S7 §1.5: treat a stop signal not showing correctly as AT DANGER, and a distant signal not showing correctly as AT CAUTION. Neither is ever treated as clear or safe to ignore."
            },
            {
                id: 8009, section: "all",
                question: "What colour is a distant signal arm, and what shape distinguishes it from a stop signal?",
                type: "single",
                options: ["Yellow arm with a fish-tail notch and black chevron", "Red arm with a square end", "Green arm with a rounded end", "White arm with a black stripe"],
                correct: [0],
                rationale: "A distant signal has a yellow arm with a fish-tail notch on the end and a black chevron (V) marked on it, distinguishing it visually from a red, square-ended stop signal."
            },
            {
                id: 8010, section: "all",
                question: "If a distant signal is OFF (arm at 45°), what does this mean?",
                type: "single",
                options: ["CLEAR — all associated stop signals are also off", "CAUTION — be prepared to stop", "It allows the driver to pass a stop signal at danger", "The signal is out of use"],
                correct: [0],
                rationale: "Distant OFF (arm at 45°) means CLEAR — all associated stop signals must also be off for this to be the case."
            },
            {
                id: 8011, section: "all",
                question: "Can a driver ever pass a stop signal at danger on the authority of a distant signal showing clear?",
                type: "single",
                options: ["No — the distant gives advance warning only and is NOT a stop signal", "Yes, if the distant is showing clear", "Yes, but only at reduced speed", "Only with verbal signaller permission"],
                correct: [0],
                rationale: "The distant signal gives advance warning only — it is not a stop signal. A stop signal at danger must never be passed on the authority of a distant."
            },
            {
                id: 8012, section: "all",
                question: "What is a Fixed Distant Signal?",
                type: "single",
                options: ["A caution indication painted on a board (not a moving arm), always treated as AT CAUTION", "A distant signal permanently locked in the clear position", "A temporary distant signal used only during possessions", "A distant signal with no identification plate"],
                correct: [0],
                rationale: "A fixed distant signal is painted on a board, not a moving arm, and permanently indicates caution — it can be placed before a buffer stop or on approach to a terminal area, and is always treated as AT CAUTION."
            },
            {
                id: 8013, section: "all",
                question: "In an absolute block signal layout, what is the correct order of signals approaching a signal box?",
                type: "single",
                options: ["Distant → Home (Outer/Inner) → Section", "Section → Home → Distant", "Home → Distant → Section", "Distant → Section → Home"],
                correct: [0],
                rationale: "The correct order approaching a station/box is Distant → Home (Outer/Inner) → Section."
            },
            {
                id: 8014, section: "all",
                question: "How are \"station limits\" defined?",
                type: "single",
                options: ["From the FIRST home signal up to (and including) the section signal", "From the distant signal up to the first home signal", "From the section signal to the next signal box only", "The entire block section between two signal boxes"],
                correct: [0],
                rationale: "Station limits run from the first home signal up to and including the section signal — all movements within this range are the responsibility of the signaller for that box."
            },
            {
                id: 8015, section: "all",
                question: "What is \"service braking distance\"?",
                type: "single",
                options: ["The distance from the distant signal to the home/section signal, sufficient for a train to brake to a stop", "The distance a shunting movement may travel beyond a limit of shunt", "The distance an AWS magnet is placed ahead of a distant signal", "The overlap distance used in colour light signalling"],
                correct: [0],
                rationale: "Service braking distance is the distance from the distant signal to the home/section signal, which must be sufficient for a train to brake to a stop."
            },
            {
                id: 8016, section: "all",
                question: "What is the purpose of a clearance point / overlap beyond a home signal?",
                type: "single",
                options: ["To protect against a train over-running slightly after the signal clears, before the previous signal returns to danger", "To mark where a shunting movement must stop", "To define the boundary of station limits", "To indicate where AWS magnets are fitted"],
                correct: [0],
                rationale: "The clearance point/overlap is the distance of track beyond a home signal that must be clear before the previous signal is returned to danger — protecting against a slight over-run."
            },
            {
                id: 8017, section: "all",
                question: "How do semaphore signal cables fail?",
                type: "single",
                options: ["Fail-safe TO ON (danger) — a broken cable automatically puts the signal to danger", "Fail-safe to OFF (clear)", "They do not fail safely and must be manually checked each shift", "They lock in their last-known position regardless of a break"],
                correct: [0],
                rationale: "Semaphore signal cables fail safe to ON (danger) — a broken cable puts the signal to danger automatically."
            },
            {
                id: 8018, section: "all",
                question: "Where a distant signal is on the same post as a section signal, which signal box controls which arm?",
                type: "single",
                options: ["The NEXT signal box controls the distant arm; the PREVIOUS box controls the section signal arm", "The PREVIOUS signal box controls both arms", "The NEXT signal box controls both arms", "Neither arm is controlled remotely — both are worked purely locally"],
                correct: [0],
                rationale: "The next signal box controls the distant arm, while the previous signal box controls the section signal arm, even though both are on the same physical post."
            },
            {
                id: 8019, section: "all",
                question: "Where is the AWS track magnet positioned relative to a distant signal?",
                type: "single",
                options: ["180 metres in advance of the distant signal", "50 metres in advance of the distant signal", "At the same location as the distant signal", "180 metres beyond the distant signal"],
                correct: [0],
                rationale: "The AWS track magnet is positioned 180 metres in advance of the distant signal it relates to."
            },
            {
                id: 8020, section: "all",
                question: "Which of the following AWS indications are correctly matched?",
                type: "multiple",
                options: [
                    "Horn (bong) = distant signal is ON (caution)",
                    "Bell (ding) = distant signal is OFF (clear)",
                    "AWS is fitted on distant signals only, not stop signals",
                    "Horn (bong) = distant signal is OFF (clear)",
                    "AWS is fitted on both stop and distant signals equally"
                ],
                correct: [0, 1, 2],
                rationale: "Horn (bong) warns the distant is ON (caution); bell (ding) confirms the distant is OFF (clear). AWS track magnets are fitted on distant signals only, not stop signals — swapping the horn/bell meanings, or claiming AWS covers stop signals too, are both wrong."
            },
            {
                id: 8021, section: "all",
                question: "What must a driver do immediately on receiving an AWS warning (horn)?",
                type: "single",
                options: ["Cancel it immediately — failure to do so causes an automatic brake application", "Ignore it if the distant signal appears clear", "Wait until reaching the signal before cancelling", "Report it to the signaller before cancelling"],
                correct: [0],
                rationale: "GERT8000-S7 §5.1: the AWS warning indication must be cancelled immediately. Failure to cancel within the allowed time causes an automatic brake application."
            },
            {
                id: 8022, section: "all",
                question: "The distant signal is showing CLEAR but the driver receives an AWS warning (horn). What must the driver do?",
                type: "single",
                options: ["Treat the distant signal as being AT CAUTION", "Ignore the AWS warning as a false alarm", "Treat the distant signal as clear since that's what it's showing", "Stop the train immediately regardless of the distant signal"],
                correct: [0],
                rationale: "GERT8000-S7 §5.2: if the distant is showing clear but an AWS warning (horn) is received, treat the distant signal as being AT CAUTION — with stated exceptions (e.g. the signal changed to clear after passing the magnet, or a warning board is positioned at the signal)."
            },
            {
                id: 8023, section: "all",
                question: "What should a driver do if they receive an AWS warning but there is no AWS track equipment present at that location?",
                type: "single",
                options: ["Proceed normally and report to the signaller at the earliest opportunity", "Stop the train immediately and do not proceed", "Ignore it completely and take no further action", "Contact the ECO before proceeding"],
                correct: [0],
                rationale: "GERT8000-S7 §5.3: an unexpected AWS warning with no track equipment present means proceed normally, and report to the signaller at the earliest opportunity."
            },
            {
                id: 8024, section: "all",
                question: "What is the purpose of an Intermediate Block Signal (IBS)?",
                type: "single",
                options: ["To divide a long block section into two shorter sections, increasing line capacity", "To replace a distant signal on short block sections", "To control level crossings only", "To mark the limit of shunt within a block section"],
                correct: [0],
                rationale: "An IBS divides a long block section into two shorter sections, increasing line capacity. It's located between two signal boxes and isn't directly controlled by either."
            },
            {
                id: 8025, section: "all",
                question: "How is an IBS identified on the signal post?",
                type: "single",
                options: ["A white square sign with a vertical black line", "A yellow diamond with a number", "A red cross painted on the post", "A black plate with a white horizontal stripe"],
                correct: [0],
                rationale: "An IBS is identified by a white square sign with a vertical black line."
            },
            {
                id: 8026, section: "all",
                question: "What does \"permissive working\" authorise?",
                type: "single",
                options: ["Two trains to occupy ONE block section simultaneously", "A train to pass a stop signal at danger without authority", "A driver to bypass the distant signal warning", "Unlimited trains in a block section with no restriction"],
                correct: [0],
                rationale: "Permissive working allows two trains to occupy one block section simultaneously, authorised by a subsidiary signal on the same post as the stop signal."
            },
            {
                id: 8027, section: "all",
                question: "Which of the following are true about subsidiary signals?",
                type: "multiple",
                options: [
                    "They are fitted on the same post as the stop signal",
                    "A driver should only proceed on the subsidiary if the main stop signal is NOT showing proceed",
                    "When proceeding on a subsidiary, the driver must proceed AT CAUTION",
                    "A subsidiary signal overrides the main stop signal even when it is showing proceed",
                    "Subsidiary signals are only used for freight trains"
                ],
                correct: [0, 1, 2],
                rationale: "Subsidiary signals sit on the same post as the stop signal and are only obeyed when the main aspect is not showing proceed — proceeding on them is always done at caution. A subsidiary never overrides a main aspect that's already showing proceed, and there's no freight-only restriction."
            },
            {
                id: 8028, section: "all",
                question: "What does the letter \"S\" below a semaphore stop arm indicate?",
                type: "single",
                options: ["Shunt-Ahead — the train may proceed as far as needed over the points to complete the shunt", "Stop — the signal is fully at danger", "Section signal identification", "Signaller override in progress"],
                correct: [0],
                rationale: "The letter S below the main arm indicates Shunt-Ahead: the train may proceed as far as needed over the points to complete the shunt. (The letter C, by contrast, indicates Calling-On — same meaning as a normal subsidiary.)"
            },
            {
                id: 8029, section: "all",
                question: "Can passenger trains proceed on the authority of a semaphore SHUNTING signal?",
                type: "single",
                options: ["No — they may only proceed on a subsidiary signal when entering a permissive platform line", "Yes, freely at any location", "Yes, but only during daylight hours", "Only with a competent person present"],
                correct: [0],
                rationale: "GERT8000-S7 §3.1: passenger trains must not proceed on the authority of a semaphore shunting signal — they may proceed on a subsidiary signal only when entering a permissive platform line."
            },
            {
                id: 8030, section: "all",
                question: "If a subsidiary signal clears but the normal route indication is NOT shown, what must the driver do?",
                type: "single",
                options: ["Proceed at caution, prepared to stop before any obstruction", "Treat the signal as still at danger and not move", "Proceed at normal line speed since the subsidiary has cleared", "Contact the signaller and wait for a route indication before moving at all"],
                correct: [0],
                rationale: "GERT8000-S7 §3.2: if a subsidiary clears without the normal route indication, proceed at caution and be prepared to stop before any obstruction."
            },
            {
                id: 8031, section: "all",
                question: "What does a Yellow Shunting Disk showing ON mean?",
                type: "single",
                options: ["Proceed at caution within the sidings", "Stop — do not pass", "Proceed to the main line at normal speed", "The disk is out of use"],
                correct: [0],
                rationale: "A Yellow Shunting Disk ON means proceed at caution within the sidings; OFF (cleared by the signaller) means proceed from sidings onto the main line."
            },
            {
                id: 8032, section: "all",
                question: "What is the \"golden rule\" for reading semaphore shunting signals with multiple disks on one post?",
                type: "single",
                options: ["Read top to bottom, left to right — where 3 disks: top = left line, middle = middle line, bottom = right line", "Read bottom to top, right to left", "Always obey only the topmost disk", "Disks are read in whatever order the signaller instructs verbally"],
                correct: [0],
                rationale: "The golden rule: read shunting signals top to bottom, left to right. Where three disks are displayed, the top disk relates to the left line, the middle to the middle line, and the bottom to the right line."
            },
            {
                id: 8033, section: "all",
                question: "After completing a shunting movement on the authority of a shunt-ahead signal, what must happen before continuing the journey?",
                type: "single",
                options: ["The movement must return to the approach side of the signal, and the signal must display the proper proceed indication", "The driver may continue directly without returning to the signal", "The signaller must reset the points remotely with no further signal check needed", "The train must reverse all the way back to the signal box"],
                correct: [0],
                rationale: "GERT8000-S7 §3.3: the movement must return to the approach side of the signal, and the signal must display the appropriate proceed aspect/indication before the journey continues."
            },
            {
                id: 8034, section: "all",
                question: "What is the confirmed rule about passing a limit of shunt signal or indicator?",
                type: "single",
                options: ["You must NOT allow any part of the movement to pass it without the signaller's permission", "You may pass it freely if the line appears clear", "It only applies to passenger trains", "It only applies during hours of darkness"],
                correct: [0],
                rationale: "GERT8000-SS2 §5.5: you must not allow any part of the movement to pass a limit of shunt signal or indicator unless the signaller has given permission."
            },
            {
                id: 8035, section: "all",
                question: "What happens if a movement passes beyond the limit of shunt without permission?",
                type: "single",
                options: ["It is treated as a SPAD (Signal Passed at Danger)", "It is treated as a minor administrative error only", "Nothing — limit of shunt has no formal consequence", "It automatically triggers an AWS warning"],
                correct: [0],
                rationale: "Passing beyond the limit of shunt without permission is treated as a SPAD (Signal Passed at Danger)."
            },
            {
                id: 8036, section: "all",
                question: "For a wrong-direction shunting movement with a falling gradient towards the next signal box, which conditions allow it to proceed beyond a home signal (with the signaller's permission)?",
                type: "multiple",
                options: [
                    "The automatic brake is working throughout the train",
                    "The locomotive is at the end nearer to the next signal box",
                    "The movement travels at reduced speed regardless of brake or loco position",
                    "A competent person walks ahead of the movement",
                    "The distant signal is showing clear"
                ],
                correct: [0, 1],
                rationale: "GERT8000-SS2 §5.6: on a falling gradient, the wrong-direction movement must not proceed beyond a home signal unless either the automatic brake is working throughout the train, OR the locomotive is at the end nearer to the next signal box. Reduced speed alone, a person walking ahead, or the distant showing clear are not the stated conditions."
            },
            {
                id: 8037, section: "all",
                question: "What does a Stepping Route Indicator in its tallest position show?",
                type: "single",
                options: ["The main line (or principal route)", "The most divergent route available", "A route that is temporarily out of use", "A shunting movement only"],
                correct: [0],
                rationale: "A Stepping Route Indicator in its tallest position shows the main line (or principal route); lower positions show diverging routes in sequence, with lower positions indicating more divergent routes."
            },
            {
                id: 8038, section: "all",
                question: "What does a plain White Diamond indicator confirm?",
                type: "single",
                options: ["That the presence of a train or shunting movement is indicated to the signaller by track circuit", "That the line ahead is permanently out of use", "That AWS is fitted at that location", "That a limit of shunt applies at that point"],
                correct: [0],
                rationale: "RS521 §11.3: a plain white diamond confirms the presence of a train or shunting movement is indicated to the signaller by track circuit — no telephone is provided at the sign itself."
            },
            {
                id: 8039, section: "all",
                question: "What does a White Diamond WITH a number added provide, in addition to the plain diamond's meaning?",
                type: "single",
                options: ["A telephone number that may be used to contact the signaller if GSM-R is not available", "The distance in metres to the next signal box", "The permitted line speed at that point", "The identification number of the block section"],
                correct: [0],
                rationale: "RS521 §11.3: where a number is shown on a white diamond and GSM-R is unavailable, that number may be used to contact the signaller by telephone."
            },
            {
                id: 8040, section: "all",
                question: "Which of the following are correct about reporting signal/AWS failures using Form RT3185?",
                type: "multiple",
                options: [
                    "Both driver and signaller must normally complete Form RT3185 when a failure is reported",
                    "If the fault is clearly a right-side failure, RT3185 may not need to be completed immediately — but Operations Control must still be told and a Train Register entry made",
                    "RT3185 is only required for AWS failures, never for signal irregularities",
                    "A right-side failure identified by the signaller always requires immediate on-the-spot RT3185 completion with no exception",
                    "The driver alone is responsible for completing the form; the signaller has no part in it"
                ],
                correct: [0, 1],
                rationale: "GERT8000-S7 §7.8a/§7.8c: both driver and signaller normally complete RT3185 for a reported failure. If it's clearly a right-side failure (or the signaller can explain it as one), immediate completion isn't required — but Operations Control must still be told, a Train Register entry made, and the form completed at the first convenient opportunity instead. RT3185 covers both signal and AWS irregularities, and it is a joint driver/signaller responsibility, not the driver's alone."
            }
        ];
