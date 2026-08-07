// Booking On, Rostering & Publications — question bank.
// Source: EMR 06-01 / 06-02 / 06-04 Revision Notes (Booking On for Duty,
// Publications & Rostering) plus the supplementary Publications &
// Sectional Appendix notes (AWS/TPWS defective-speed figures, PON/Rule
// Book/Sectional Appendix update cycles, Sectional Appendix symbols).
//
// BOOKING_QUIZ_SECTIONS: the section picker on the quiz's own start screen
// ("all" = full assessment, m1-m7 = one module's slice of questions).
// BOOKING_QUIZ_QUESTIONS: every question, each tagged with its section id.
// type "single" = one correct answer (radio). type "multiple" = two or
// more correct answers (checkbox) — several of these carry distractors
// deliberately close to the correct facts, so read carefully.
//
// Do not edit rationale/correct answers without checking against the
// source revision notes — these are safety-critical rulebook facts.
//
// Question ids are 5001+ deliberately, NOT 1-N: getWrongIds() in
// progress.js is a single global "wrong question" list shared across every
// quiz on the site, keyed only by raw numeric id. The PTS quiz already
// uses ids 1-80, so low numbers here would silently collide with it in
// Wrong Answer Review. m1-m5 use 5001-5039; the m6/m7 Rule Book &
// Sectional Appendix deep-dive added later uses 5040-5058. Keep any
// future addition in its own clear block (e.g. next one starts at 6001)
// rather than restarting at 1 or reusing an existing block.

        const BOOKING_QUIZ_SECTIONS = [
            { id: "all", title: "Full Assessment", desc: "Test everything from the Booking On, Rostering & Publications revision notes in one sitting. Pass mark: 85%." },
            { id: "br-m1", title: "Module 1: Rostering, Fitness for Duty & Fatigue", desc: "Types of turn, alteration sheets, exchanging duties, fatigue and coping with shift work." },
            { id: "br-m2", title: "Module 2: Drugs & Alcohol, Booking On for Duty", desc: "National legal limits, random testing, booking on in person and remotely." },
            { id: "br-m3", title: "Module 3: Documents, Equipment, Licence & NTS", desc: "What to carry, licence responsibilities, Non-Technical Skills categories." },
            { id: "br-m4", title: "Module 4: Rule Book & Other Publications", desc: "Rule Book symbols and update cycle, the Sectional Appendix, NESA." },
            { id: "br-m5", title: "Module 5: WON/PON, Notice Cases, Schedule Cards, DOTE & Reports", desc: "Operating notices, notice case durations, schedule card contents, DOTE and report forms." },
            { id: "br-m6", title: "Module 6: The Rule Book — Extended", desc: "Companion publications, role-specific issue, symbols, and other company publications." },
            { id: "br-m7", title: "Module 7: The Sectional Appendix — Extended", desc: "Table A contents, Route Availability, distances, table headings, speed boards, and AWS vs TPWS defective line speeds." }
        ];

        const BOOKING_QUIZ_QUESTIONS = [
            // ================= MODULE 1: ROSTERING, FITNESS & FATIGUE =================
            {
                id: 5001, section: "br-m1",
                question: "Who are driver rosters submitted to?",
                type: "single",
                options: ["The Resource Centre (Resources)", "Directly to the Driver Manager", "The signaller", "The train operating company's head office"],
                correct: [0],
                rationale: "Driver rosters are submitted to the Resource Centre (Resources) rather than to managers directly; roster clerks plan and allocate duties."
            },
            {
                id: 5002, section: "br-m1",
                question: "Which type of turn is used to plan in advance for a driver's known annual leave or long-term sickness?",
                type: "single",
                options: ["Cover Turn", "Spare / Stand-By Turn", "Rest Day Working", "Alteration Sheet"],
                correct: [0],
                rationale: "Cover Turns are used to cover a driver's turn when they are on annual leave or long-term sick; roster clerks plan for these known absences in advance."
            },
            {
                id: 5003, section: "br-m1",
                question: "Which of the following are things a Spare/Stand-by driver may be asked to do?",
                type: "multiple",
                options: [
                    "Relieve a driver involved in an incident or required for interview",
                    "Assist with an unexpected train movement, e.g. taking a defective train out of service",
                    "Cover all or part of another driver's duty",
                    "Automatically take over a driver's annual leave cover without being told",
                    "Refuse any duty not listed on their original roster"
                ],
                correct: [0, 1, 2],
                rationale: "Spare turns cover unexpected absences and can involve relieving a driver for incident/interview, assisting with unplanned movements, or covering all/part of a duty. Planning for known annual leave is what Cover Turns do, and spare duties are allocated, not refused at will."
            },
            {
                id: 5004, section: "br-m1",
                question: "What should you always check at the end of your shift, not just when you arrive?",
                type: "single",
                options: ["The alteration sheet, for details of your next duty", "Your identity PIN", "The Sectional Appendix", "The WON only"],
                correct: [0],
                rationale: "Always check the alteration sheet at the end of your shift for your NEXT duty — not just when you arrive."
            },
            {
                id: 5005, section: "br-m1",
                question: "Which statements about exchanging duties are correct?",
                type: "multiple",
                options: [
                    "Duty swaps must use the correct written form",
                    "Swaps are at the discretion of your TOC/FOC and cannot be guaranteed",
                    "You must never change duty without proper authorisation, agreement or consent",
                    "Any two drivers can swap duties verbally as long as both agree",
                    "Swapping duties is a contractual right that must always be granted"
                ],
                correct: [0, 1, 2],
                rationale: "Drivers may swap duties using the correct written form. Swaps are a benefit at the discretion of the TOC/FOC, not a right, and duty can never be changed without proper authorisation, agreement or consent."
            },
            {
                id: 5006, section: "br-m1",
                question: "How is fatigue defined?",
                type: "single",
                options: ["A state of weariness that results in a reduced ability to perform work effectively", "A minor headache caused by noise", "A condition that only affects night-shift workers", "A disciplinary offence"],
                correct: [0],
                rationale: "Fatigue is a state of weariness that results in a reduced ability to perform work effectively — reaction times slow, information is processed more slowly, and things are more easily forgotten."
            },
            {
                id: 5007, section: "br-m1",
                question: "Which of these are recommended ways to help cope with shift work?",
                type: "multiple",
                options: [
                    "Sleep in a dark, cool room (18°C or less)",
                    "A short nap before a shift to help compensate for lost sleep",
                    "Avoid alcohol before sleep",
                    "Have a large meal shortly before going to sleep",
                    "Keep the room bright to help you wind down"
                ],
                correct: [0, 1, 2],
                rationale: "Recommended coping strategies include a dark, cool room (18°C or less), a short pre-shift nap, and avoiding alcohol before sleep. Large meals at night and bright rooms both work against good sleep quality."
            },
            {
                id: 5008, section: "br-m1",
                question: "Following the Clapham Junction inquiry (1988), how many recommendations were made?",
                type: "single",
                options: ["93", "50", "12", "150"],
                correct: [0],
                rationale: "The Hidden Inquiry into the Clapham Junction accident (1988) resulted in 93 recommendations, including restrictions on excessive overtime and minimum time between shifts — principles that still underpin fatigue management today."
            },

            // ================= MODULE 2: DRUGS & ALCOHOL, BOOKING ON =================
            {
                id: 5009, section: "br-m2",
                question: "What is the national legal breath alcohol limit for safety-critical rail employees?",
                type: "single",
                options: ["13 micrograms per 100ml of breath", "20 micrograms per 100ml of breath", "35 micrograms per 100ml of breath", "13 milligrams per 100ml of breath"],
                correct: [0],
                rationale: "The national legal limit is no more than 13 micrograms of alcohol per 100ml of breath."
            },
            {
                id: 5010, section: "br-m2",
                question: "What is the national legal urine alcohol limit for safety-critical rail employees?",
                type: "single",
                options: ["39 milligrams per 100ml of urine", "13 milligrams per 100ml of urine", "50 milligrams per 100ml of urine", "39 micrograms per 100ml of urine"],
                correct: [0],
                rationale: "The national legal limit is no more than 39 milligrams of alcohol per 100ml of urine — note this is milligrams, not micrograms as with the breath limit."
            },
            {
                id: 5011, section: "br-m2",
                question: "Which statements about the drugs and alcohol policy are correct?",
                type: "multiple",
                options: [
                    "Random testing can be carried out at any time",
                    "The presence of drugs with no legitimate medical need is prohibited regardless of quantity",
                    "You must notify your company if charged by police with a drink/drug-related offence",
                    "The national legal alcohol limits can vary between companies",
                    "Over-the-counter medicines never need to be considered as they cannot impair performance"
                ],
                correct: [0, 1, 2],
                rationale: "Random testing can happen at any time, any quantity of a drug with no legitimate medical need is prohibited, and a drink/drug-related police charge must be notified to your company. The national legal limits are the same for everyone — only company policy detail may vary — and over-the-counter medicines must still be considered carefully."
            },
            {
                id: 5012, section: "br-m2",
                question: "What does 'booking on' (signing on) legally represent?",
                type: "single",
                options: ["A legal statement confirming you are reporting fit for duty", "A casual check-in with no legal standing", "An optional formality", "A record used only for payroll purposes"],
                correct: [0],
                rationale: "By signing on, you are making a legal statement confirming you are reporting fit for duty."
            },
            {
                id: 5013, section: "br-m2",
                question: "Which of these are key actions to take on arrival after booking on?",
                type: "multiple",
                options: [
                    "Check you have the latest documents",
                    "Read the safety and other operational notices",
                    "Review the schedule you will be working that day",
                    "Wait until you reach your starting point before checking any notices",
                    "Assume your equipment is complete without checking it"
                ],
                correct: [0, 1, 2],
                rationale: "On arrival you should check you have the latest documents, read the safety/operational notices, and review your schedule — all before starting your duty, not left until later, and equipment should always be checked, not assumed."
            },
            {
                id: 5014, section: "br-m2",
                question: "Which of the following best describes booking on remotely?",
                type: "single",
                options: ["Reporting via phone, log-in system or company tablet instead of in person", "A method only available to spare drivers", "A backup method used solely during system outages", "Signing a paper sheet at another depot"],
                correct: [0],
                rationale: "Some companies allow remote booking on via phone, log-in system or company tablet, rather than requiring drivers to report in person at their home depot."
            },
            {
                id: 5015, section: "br-m2",
                question: "On returning to duty after leave or sickness, what should you specifically check for, alongside notice cases and periodic publications?",
                type: "single",
                options: ["Withdrawn notices", "Payroll records", "Sectional Appendix boundary changes only", "Union meeting minutes"],
                correct: [0],
                rationale: "After leave or sickness, spend time checking notice cases, company tablet systems and weekly/periodic publications, including checking for any withdrawn notices, before resuming driving."
            },

            // ================= MODULE 3: DOCUMENTS, EQUIPMENT, LICENCE & NTS =================
            {
                id: 5016, section: "br-m3",
                question: "Which of these documents are only required in certain circumstances, rather than on every duty?",
                type: "multiple",
                options: [
                    "Working Timetable (WTT) — if required",
                    "Special Traffic Notice (STN) — if required",
                    "Ballast Circular — if driving an engineering train",
                    "Weekly Operating Notice (WON)",
                    "Your daily schedule card (Diagram)"
                ],
                correct: [0, 1, 2],
                rationale: "The WTT, STN and Ballast Circular are all conditional documents, only needed 'if required' or for engineering trains. The WON and your daily Diagram are standard documents needed for booking on."
            },
            {
                id: 5017, section: "br-m3",
                question: "What must be reported to your Driver Manager at the earliest opportunity if it is damaged, defective or unserviceable?",
                type: "single",
                options: ["Any PPE or required equipment", "Only your handlamp", "Only your Hi-Vis vest", "Nothing — replacements are issued automatically at the start of every shift"],
                correct: [0],
                rationale: "If any PPE or equipment is damaged, defective or unserviceable, it must be reported to your Driver Manager at the earliest opportunity so a replacement can be issued."
            },
            {
                id: 5018, section: "br-m3",
                question: "Which of these are required equipment for booking on?",
                type: "multiple",
                options: [
                    "Handlamp",
                    "Drivers' Keys, including Master Key, BR1a Key and Carriage Key",
                    "High-visibility clothing, kept clean",
                    "A personal mobile phone",
                    "A torch, used in place of a handlamp"
                ],
                correct: [0, 1, 2],
                rationale: "Required equipment includes a handlamp, drivers' keys (Master Key, BR1a Key, Carriage Key) and clean high-visibility clothing. A personal mobile phone isn't listed equipment, and the handlamp specifically — not a general torch — is the required item."
            },
            {
                id: 5019, section: "br-m3",
                question: "How long is a Train Driving Licence and Certificate valid for?",
                type: "single",
                options: ["Ten years", "Five years", "Two years", "Indefinitely, once issued"],
                correct: [0],
                rationale: "The Train Driving Licence and Certificate are each valid for ten years."
            },
            {
                id: 5020, section: "br-m3",
                question: "Which of the following are your responsibilities in relation to your Train Driving Licence and Certificate?",
                type: "multiple",
                options: [
                    "Notify the ORR if you change employer",
                    "Report any loss or theft immediately",
                    "Carry your licence and certificate whenever on duty",
                    "Renew it every year regardless of its ten-year validity",
                    "Keep it at home and only bring it in if asked"
                ],
                correct: [0, 1, 2],
                rationale: "You must notify the ORR of a change of employer, report loss or theft immediately, and carry your licence and certificate whenever on duty. It does not need annual renewal (it's valid for ten years) and must be carried on duty, not left at home."
            },
            {
                id: 5021, section: "br-m3",
                question: "Which Non-Technical Skill (NTS) category relates to knowing what is happening around you at all times?",
                type: "single",
                options: ["Situational Awareness", "Diligence", "Workload Management", "Cooperation"],
                correct: [0],
                rationale: "Situational Awareness is defined as knowing what is happening around you at all times."
            },
            {
                id: 5022, section: "br-m3",
                question: "Which of the following are recognised Non-Technical Skills (NTS) categories?",
                type: "multiple",
                options: [
                    "Decision Making & Action",
                    "Self-Management",
                    "Communication",
                    "Signal Recognition",
                    "Rule Book Memorisation"
                ],
                correct: [0, 1, 2],
                rationale: "The NTS categories are Situational Awareness, Diligence, Communication, Decision Making & Action, Cooperation, Workload Management and Self-Management. Signal recognition and rule book memorisation are technical skills, not NTS categories."
            },

            // ================= MODULE 4: RULE BOOK & OTHER PUBLICATIONS =================
            {
                id: 5023, section: "br-m4",
                question: "Who writes and maintains the Rule Book (National Rule Book)?",
                type: "single",
                options: ["RSSB", "Network Rail", "The ORR", "Your own train operating company"],
                correct: [0],
                rationale: "The Rule Book (National Rule Book/NRB) is written and maintained by RSSB, covering operational rules for the whole GB main line network."
            },
            {
                id: 5024, section: "br-m4",
                question: "How often is the Rule Book updated?",
                type: "single",
                options: ["Twice yearly, in June and December", "Quarterly", "Once a year, in January", "As required, with no fixed schedule"],
                correct: [0],
                rationale: "Rule Book updates are issued in June and December each year. Don't confuse this with the Sectional Appendix, which is updated 'as required' with no fixed schedule."
            },
            {
                id: 5025, section: "br-m4",
                question: "Which of the following Rule Book symbol/meaning pairs are correct?",
                type: "multiple",
                options: [
                    "Red box = very important, critical information",
                    "Blue 'i' symbol = additional information available at the bottom of the page",
                    "Three stars (***) = the last time this item will appear",
                    "Green text = a brand new item just added",
                    "Black vertical line (margin) = the last time this item appears"
                ],
                correct: [0, 1, 2],
                rationale: "Red box = critical information; blue 'i' = additional info at the foot of the page; three stars = last appearance of an item. Green text actually means 'relevant to a specific role only', and a black vertical line in the margin marks a new or amended item — not the last appearance, which is what three stars indicate."
            },
            {
                id: 5026, section: "br-m4",
                question: "What is the Sectional Appendix, and who produces it?",
                type: "single",
                options: ["A modular document written by Network Rail, giving local instructions for specific areas of track", "A national rule book maintained by RSSB", "A company-specific driver policy document", "An operating notice issued weekly"],
                correct: [0],
                rationale: "The Sectional Appendix is a modular document written by Network Rail providing local instructions for specific areas of track; layout can differ between regions."
            },
            {
                id: 5027, section: "br-m4",
                question: "In the Sectional Appendix, which of these symbol meanings are correct?",
                type: "multiple",
                options: [
                    "A square symbol indicates the speed shown carries over from the previous page",
                    "An asterisk (*) indicates a change in permissible speed, whether an increase or a decrease",
                    "Table A (Route Module) contains maps, line speeds, stations and level crossings",
                    "An asterisk indicates a permanent low adhesion zone",
                    "A square symbol indicates a temporary speed restriction is in force"
                ],
                correct: [0, 1, 2],
                rationale: "A square symbol carries the speed over from the previous page, an asterisk marks any change (increase or decrease) in permissible speed, and Table A covers maps, line speeds, stations and level crossings. Low adhesion areas and temporary speed restrictions are separate listed items, not what these two symbols indicate."
            },
            {
                id: 5028, section: "br-m4",
                question: "How often is the Sectional Appendix updated by Network Rail?",
                type: "single",
                options: ["On an 'as required' basis, with no fixed schedule", "Every June and December", "Quarterly, four times a year", "Only once every ten years"],
                correct: [0],
                rationale: "Unlike the Rule Book, the Sectional Appendix is updated on an 'as required' basis by Network Rail, not to a fixed schedule."
            },
            {
                id: 5029, section: "br-m4",
                question: "Which of these publications are updated on a fixed, scheduled basis (rather than 'as required')?",
                type: "multiple",
                options: [
                    "The Rule Book — twice yearly (June and December)",
                    "The Periodical Operating Notice (PON) — quarterly, four times a year",
                    "The Weekly Operating Notice (WON) — every week",
                    "The Sectional Appendix — also fixed, on a quarterly schedule",
                    "Route Maps — updated automatically every month"
                ],
                correct: [0, 1, 2],
                rationale: "The Rule Book (twice yearly), PON (quarterly) and WON (weekly) all run to a fixed publication schedule. The Sectional Appendix is specifically 'as required', not quarterly, and no fixed monthly cycle is given for Route Maps."
            },
            {
                id: 5030, section: "br-m4",
                question: "What does NESA stand for?",
                type: "single",
                options: ["Network Rail Electronic Sectional Appendix", "National Emergency Signalling Authority", "Network Engineering Safety Assessment", "New European Standard Appendix"],
                correct: [0],
                rationale: "NESA (Network Rail Electronic Sectional Appendix) is the online version of the Sectional Appendix, available on company tablets."
            },

            // ================= MODULE 5: WON/PON, NOTICE CASES, SCHEDULE CARDS, DOTE & REPORTS =================
            {
                id: 5031, section: "br-m5",
                question: "What do WON and PON stand for respectively?",
                type: "single",
                options: ["Weekly Operating Notice and Periodical Operating Notice", "Working Operations Notice and Permanent Operating Notice", "Weekly Occurrence Notice and Personal Operating Notice", "Weekly Operating Notes and Periodic Occurrence Notes"],
                correct: [0],
                rationale: "WON = Weekly Operating Notice; PON = Periodical Operating Notice."
            },
            {
                id: 5032, section: "br-m5",
                question: "Which of the following are covered in the Weekly Operating Notice (WON)?",
                type: "multiple",
                options: [
                    "Temporary Speed Restrictions (TSRs)",
                    "Safety notices",
                    "Signalling and permanent way alterations",
                    "Your personal duty roster for the month",
                    "Sectional Appendix table headings"
                ],
                correct: [0, 1, 2],
                rationale: "The WON covers safety notices, TSRs, engineering work, and signalling/permanent way alterations, published weekly by Network Rail. Your roster comes from Resources, not the WON, and Sectional Appendix table headings are a separate publication."
            },
            {
                id: 5033, section: "br-m5",
                question: "What happens to previously published items in the PON that haven't yet been superseded?",
                type: "single",
                options: ["They remain in the second section until the relevant publication is reissued", "They are immediately destroyed", "They are moved to the Late Notice Case", "They are only kept if you personally request them"],
                correct: [0],
                rationale: "Previously published items remain in the second section of the PON until the appropriate publication is reissued."
            },
            {
                id: 5034, section: "br-m5",
                question: "Notices in the Late Notice Case must not be displayed for longer than:",
                type: "single",
                options: ["72 hours, unless an exception applies (e.g. emergency/blanket speed restrictions)", "8 weeks", "12 weeks", "24 hours, with no exceptions"],
                correct: [0],
                rationale: "Late Notice Case items must not be displayed for more than 72 hours unless they are emergency/blanket speed restrictions or a notice specifically states otherwise."
            },
            {
                id: 5035, section: "br-m5",
                question: "Which of these notice case facts are correct?",
                type: "multiple",
                options: [
                    "Late Notice Case — red border/background",
                    "Permanent / HSSE Notice Case — yellow border",
                    "Incident Notice Case — displayed for 12 weeks",
                    "Operations Notice Case — displayed for 12 weeks",
                    "Late Notice Case — yellow border"
                ],
                correct: [0, 1, 2],
                rationale: "The Late Notice Case has a red border/background, the Permanent/HSSE Notice Case has a yellow border, and the Incident Notice Case displays items for 12 weeks. The Operations Notice Case holds items for 8 weeks, not 12, and the yellow border belongs to the Permanent/HSSE case, not the Late Notice Case."
            },
            {
                id: 5036, section: "br-m5",
                question: "What is a 'Multi-SPAD' signal?",
                type: "single",
                options: ["A signal passed at danger (SPAD) more than once in a five-year period", "Any signal near a level crossing", "A signal that has failed mechanically", "A signal with more than one aspect"],
                correct: [0],
                rationale: "A Multi-SPAD signal is one that has been passed at danger (SPAD) more than once in a five-year period, highlighted in the Incident Notice Case."
            },
            {
                id: 5037, section: "br-m5",
                question: "Which of these are shown on a driver's schedule card ('diagram')?",
                type: "multiple",
                options: [
                    "Reporting time and location for duty",
                    "Train ID (headcode) and traction type code",
                    "Whether the train operates Driver Only Working (DOO)",
                    "Your PIN for booking on",
                    "The Sectional Appendix reference for every signal box"
                ],
                correct: [0, 1, 2],
                rationale: "A schedule card shows reporting time/location, train ID and traction type code, and whether the train is DOO, alongside other duty details. Your personal PIN and full Sectional Appendix signal box references aren't part of the schedule card."
            },
            {
                id: 5038, section: "br-m5",
                question: "What must always happen before continuing a journey with defective on-train equipment, according to TW5?",
                type: "single",
                options: ["Speak with control, and follow both TW5 and your company's DOTE document", "Continue as normal until the next scheduled stop", "Wait for a fitter regardless of the fault", "Report it only at the end of the journey"],
                correct: [0],
                rationale: "Always follow both TW5 and your company's DOTE, and speak with control before making a decision about continuing with defective equipment."
            },
            {
                id: 5039, section: "br-m5",
                question: "By when must all reports (e.g. a Driver's Incident Report) be completed and submitted?",
                type: "single",
                options: ["Before the end of your shift, to the appropriate person or department", "Within 30 days", "Only if requested by your manager", "At your next rest day"],
                correct: [0],
                rationale: "All reports must be completed and submitted before the end of your shift to the appropriate person or department, in line with company procedures."
            },

            // ================= MODULE 6: THE RULE BOOK — EXTENDED =================
            {
                id: 5040, section: "br-m6",
                question: "Which of these best describes which parts of the Rule Book a driver is issued?",
                type: "single",
                options: [
                    "You are only issued the modules that relate to your specific role",
                    "You are issued the entire consolidated Rule Book regardless of role",
                    "You choose which modules to keep from a full set",
                    "You are issued a one-page summary version only"
                ],
                correct: [0],
                rationale: "You are only issued the Rule Book modules that relate to your specific role, not the full consolidated set."
            },
            {
                id: 5041, section: "br-m6",
                question: "In what additional format is the Rule Book now available, alongside paper copies?",
                type: "single",
                options: ["A mobile app", "An audio-only recording", "A laminated pocket card", "A printed wall poster"],
                correct: [0],
                rationale: "The Rule Book is now also available as a mobile app, in addition to paper copies."
            },
            {
                id: 5042, section: "br-m6",
                question: "Which of these are genuine Rule Book companion publications?",
                type: "multiple",
                options: [
                    "Glossary of Railway Terminology",
                    "AWS and TPWS Handbook",
                    "Signals, Handsignals, Indicators and Signs Handbook",
                    "Sectional Appendix Table A",
                    "Driver Policy"
                ],
                correct: [0, 1, 2],
                rationale: "The Rule Book's companion publications are the Glossary of Railway Terminology, the AWS and TPWS Handbook, the Signals/Handsignals/Indicators and Signs Handbook, the GSM-R Handbook, and RS524. Table A belongs to the Sectional Appendix, and Driver Policy is a separate company publication — neither is a Rule Book companion publication."
            },
            {
                id: 5043, section: "br-m6",
                question: "What does RS524 list?",
                type: "single",
                options: ["Dangerous Goods / UN Numbers", "Route Availability groups", "Signal aspect sequences", "Notice case categories"],
                correct: [0],
                rationale: "RS524 is the List of Dangerous Goods / UN Numbers, one of the Rule Book's companion publications."
            },
            {
                id: 5044, section: "br-m6",
                question: "Which of the following correctly matches a Rule Book symbol to its meaning?",
                type: "multiple",
                options: [
                    "Black vertical line in the margin = a new or amended item",
                    "Green text = relevant to a specific role only",
                    "Blue 'i' symbol = additional information available at the bottom of the page",
                    "Red box = a minor formatting note, nothing critical",
                    "Three stars (***) = additional information is available elsewhere"
                ],
                correct: [0, 1, 2],
                rationale: "Black vertical line = new/amended item; green text = role-specific; blue 'i' = extra info at the foot of the page. A red box actually flags VERY IMPORTANT, critical information, and three stars mean this is the last time the item will appear — not 'more info elsewhere', which is the blue 'i' symbol's job."
            },
            {
                id: 5045, section: "br-m6",
                question: "What does the 'Appendix to the Rule Book' contain (note: its title may vary by company)?",
                type: "single",
                options: [
                    "A company-specific publication that may reflect local operations in more detail",
                    "National operating rules identical to the Rule Book itself",
                    "PPE specifications only",
                    "Timetable data only"
                ],
                correct: [0],
                rationale: "The Appendix to the Rule Book is a company-specific publication that may reflect local operations in more detail; its exact title can vary by company."
            },
            {
                id: 5046, section: "br-m6",
                question: "What does the PED Policy govern?",
                type: "single",
                options: ["Personal Electronic Device use", "Permanent Emergency Directions", "Public Engagement Duties", "Platform Edge Door operation"],
                correct: [0],
                rationale: "PED Policy stands for Personal Electronic Device policy."
            },
            {
                id: 5047, section: "br-m6",
                question: "Which of these are genuine examples of 'Other Publications' a company may issue alongside the Rule Book?",
                type: "multiple",
                options: [
                    "Appendix to the Rule Book",
                    "Driver Policy",
                    "Traction Manuals",
                    "The Sectional Appendix itself",
                    "Route Availability Tables"
                ],
                correct: [0, 1, 2],
                rationale: "Company 'Other Publications' listed alongside the Rule Book are: Appendix to the Rule Book, Driver Policy, Traction Manuals, PED Policy and Route Maps. The Sectional Appendix is a separate document written by Network Rail, not a company 'other publication', and Route Availability Tables sit inside the Sectional Appendix rather than being one of these company publications."
            },
            {
                id: 5048, section: "br-m6",
                question: "What does the EMR Driver Policy cover, above and beyond national-level rules?",
                type: "single",
                options: [
                    "EMR-specific policies, including guidance on subjects such as defensive driving",
                    "Track layout diagrams for every route",
                    "Signal aspect sequences",
                    "Level crossing type classifications"
                ],
                correct: [0],
                rationale: "Driver Policy sets out EMR-specific policies above the national levels, with guidance on many subjects including defensive driving."
            },
            {
                id: 5049, section: "br-m6",
                question: "Which Rule Book companion publication would you check for automatic warning and train protection system information?",
                type: "single",
                options: ["AWS and TPWS Handbook", "Glossary of Railway Terminology", "GSM-R Handbook", "RS524"],
                correct: [0],
                rationale: "The AWS and TPWS Handbook is the Rule Book companion publication covering the Automatic Warning System and Train Protection & Warning System."
            },

            // ================= MODULE 7: THE SECTIONAL APPENDIX — EXTENDED =================
            {
                id: 5050, section: "br-m7",
                question: "What does Table A (the Route Module) of the Sectional Appendix contain?",
                type: "single",
                options: [
                    "Maps, line speeds, stations, level crossings, tunnels and special working arrangements",
                    "Only signal box telephone numbers",
                    "Only PPE requirements",
                    "Only WON/PON amendments"
                ],
                correct: [0],
                rationale: "Table A (Route Module) contains maps of the network, special working arrangements, track layout for drivers, line speeds, stations, level crossings and tunnels."
            },
            {
                id: 5051, section: "br-m7",
                question: "Which section of the Sectional Appendix covers the controlling signaller for a section and platform lengths?",
                type: "single",
                options: ["General Instructions", "Local Instructions", "Route Availability", "Permissive Working"],
                correct: [0],
                rationale: "General Instructions relate to a broader area, including the controlling signaller for each section and platform lengths."
            },
            {
                id: 5052, section: "br-m7",
                question: "Which section of the Sectional Appendix lists where only certain types of traction unit are permitted?",
                type: "single",
                options: ["Route Availability", "Low Adhesion Areas", "GSM-R Codes", "Table A"],
                correct: [0],
                rationale: "Route Availability lists where only certain types of traction unit are permitted."
            },
            {
                id: 5053, section: "br-m7",
                question: "Which of the following are genuine sections/contents found within the Sectional Appendix?",
                type: "multiple",
                options: [
                    "Low Adhesion Areas",
                    "GSM-R Codes for the area",
                    "Permissive Working details",
                    "The national Rule Book symbols glossary",
                    "Driver Policy guidance on defensive driving"
                ],
                correct: [0, 1, 2],
                rationale: "Low Adhesion Areas, GSM-R Codes and Permissive Working are all genuine Sectional Appendix contents. The Rule Book's symbols glossary and the company Driver Policy are separate publications, not part of the Sectional Appendix."
            },
            {
                id: 5054, section: "br-m7",
                question: "How many yards are there in 1 chain, as referenced in the Sectional Appendix?",
                type: "single",
                options: ["22 yards", "20 yards", "25 yards", "30 yards"],
                correct: [0],
                rationale: "1 chain = 22 yards."
            },
            {
                id: 5055, section: "br-m7",
                question: "How many chains are there in 1 mile?",
                type: "single",
                options: ["80 chains", "100 chains", "60 chains", "40 chains"],
                correct: [0],
                rationale: "1 mile = 80 chains."
            },
            {
                id: 5056, section: "br-m7",
                question: "Which of these table headings genuinely appear within the Sectional Appendix, according to the reference notes?",
                type: "multiple",
                options: [
                    "Platform lengths / Tunnel lengths",
                    "Low Adhesion Zones",
                    "Staff Protection",
                    "Rule Book update schedule",
                    "Booking on procedures"
                ],
                correct: [0, 1, 2],
                rationale: "Sectional Appendix table headings include Platform/Tunnel lengths, Low Adhesion Zones, Staff Protection, Train Protection, Electrification and more. The Rule Book's update schedule and booking on procedures are covered elsewhere, not as Sectional Appendix table headings."
            },
            {
                id: 5057, section: "br-m7",
                question: "What does an RA8 classification (seen in Signalling & Remarks) relate to?",
                type: "single",
                options: [
                    "Route Availability — the type of traction/unit permitted to use that line",
                    "Rule Book amendment number 8",
                    "A specific radio channel code",
                    "An axle counter reference number"
                ],
                correct: [0],
                rationale: "RA8 is a Route Availability code, indicating the type of traction unit that can go on that line, shown in the Signalling & Remarks column."
            },
            {
                id: 5058, section: "br-m7",
                question: "On a Differential Speed Board (e.g. showing 40/60), what do the two speeds typically represent?",
                type: "single",
                options: ["Freight speed / Passenger speed", "Up line speed / Down line speed", "Wet rail speed / Dry rail speed", "Day speed / Night speed"],
                correct: [0],
                rationale: "Differential Speed Boards show two speeds, e.g. 40/60, representing Freight speed / Passenger speed respectively."
            },
            {
                id: 5059, section: "br-m7",
                question: "For AWS (Automatic Warning System) defective line speeds, which of the following restrictions apply WITHOUT a Competent Person present?",
                type: "multiple",
                options: [
                    "Freight / OTMs not to exceed 50mph",
                    "Trains not exceeding 60mph",
                    "In poor visibility, 40mph",
                    "Freight / OTMs not to exceed 40mph",
                    "Trains not exceeding 75mph"
                ],
                correct: [0, 1, 2],
                rationale: "With AWS defective and no Competent Person: freight/OTMs must not exceed 50mph, other trains not exceeding 60mph, and in poor visibility the limit drops further to 40mph. With a Competent Person present, normal line speed applies instead."
            },
            {
                id: 5060, section: "br-m7",
                question: "For TPWS (Train Protection & Warning System) defective line speeds, which of these statements are correct? (Note: TPWS's figures are close to AWS's, but not identical.)",
                type: "multiple",
                options: [
                    "Without a Competent Person, freight/OTMs must not exceed 50mph",
                    "Without a Competent Person, trains must not exceed 60mph",
                    "With a Competent Person present, normal line speed applies",
                    "TPWS also carries a separate 40mph poor-visibility limit, identical to AWS",
                    "Without a Competent Person, trains must not exceed 75mph"
                ],
                correct: [0, 1, 2],
                rationale: "TPWS defective line speeds without a Competent Person match AWS for freight/OTMs (50mph) and other trains (60mph), and normal line speed applies once a Competent Person is present. Unlike AWS, these notes do not list a separate poor-visibility figure for TPWS — don't assume the AWS poor-visibility limit carries across automatically."
            }
        ];
