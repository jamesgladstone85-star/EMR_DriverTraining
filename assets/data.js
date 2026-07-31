// Module / topic data — structured to match the real course layout:
// Exam Prep + Recap, then Modules 1–4, each containing several topics.
//
// Where real revision content already exists (Booking On & PTS, Signals,
// Near Misses, Wrong Direction Movements, Exam Prep) it's wired in for
// real. Everything else is a placeholder — the right number of guide /
// quiz / tool slots with generic titles, ready for real content to be
// dropped in later. Just replace the placeholder titles/files as you go;
// nothing else needs to change.

const MODULE_GROUPS = [
  {
    id: "module-1",
    label: "Module 1 — Introduction & Communications",
    shortBadge: "MODULE 1",
    subtitle: "Booking on, GSM-R radio, PTS and rostering procedures",
    color: "orange",
    topics: [
      {
        id: "booking-on-rostering-pts",
        name: "Booking On, Rostering & PTS",
        description: "Booking on procedures, DOTE, rostering rules and personal track safety.",
        guides: [
          { title: "Booking On for Duty, Publications & Rostering — Revision Notes", subtitle: "EMR 06-01 / 06-02 / 06-04", file: "assets/guides/booking-on-rostering-revision-notes.pdf" },
          { title: "Personal Track Safety (PTS) — Revision Notes", subtitle: "PTS 675-000 V4", file: "assets/guides/pts-revision-notes.pdf" },
        ],
        quizzes: [
          { title: "Booking On, Rostering & PTS Quiz", bullets: ["Booking on, rostering & fatigue", "Documents & equipment required", "PTS: walking routes, hazards & emergency protection"] },
        ],
        tools: [],
      },
      {
        id: "gsm-r-communications",
        name: "GSM-R Communications",
        description: "GSM-R radio system, cab secure radio and driver communications procedures.",
        guides: [
          { title: "GSM-R — Revision Guide", subtitle: "RS523 Issue 2 / GERT8000-TW5 Issue 14", file: "assets/guides/gsm-r-revision-notes.pdf" },
        ],
        quizzes: [
          { title: "GSM-R Communications Quiz", bullets: ["Add real questions here"] },
        ],
        tools: [],
      },
    ],
  },
  {
    id: "module-2",
    label: "Module 2 — Signalling & Rules",
    shortBadge: "MODULE 2",
    subtitle: "Colour-light signals, AWS/TPWS, track circuits and rule book fundamentals",
    color: "blue",
    topics: [
      {
        id: "shunting",
        name: "Shunting",
        description: "Shunting movements, authority, signals and safety rules.",
        guides: [{ title: "Shunting — Revision Guide" }],
        quizzes: [{ title: "Shunting Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "signals-colour-light-semaphore",
        name: "Signals — Colour Light & Semaphore",
        description: "Signal aspects, sequences, junction indicators, semaphore signals and absolute block working.",
        guides: [
          { title: "Colour Light Signals Revision" },
          { title: "Semaphore Signals Revision Notes" },
        ],
        quizzes: [
          { title: "Colour Light Signals Quiz", bullets: ["2, 3 & 4-aspect sequences", "Junction indicators & PLS", "Identifying aspects from diagrams"] },
          { title: "Track Circuit Quiz — Hard", bullets: ["Track circuit block rules", "Absolute block working", "Signal-at-danger procedures"] },
        ],
        tools: [{ title: "Module 2 Extra Revision" }],
      },
      {
        id: "aws-tpws",
        name: "AWS & TPWS",
        description: "AWS operation, fault codes, TPWS OSS/TSS, trains controlled by AWS and defective equipment rules.",
        guides: [
          { title: "AWS & TPWS — Revision Guide 1" },
          { title: "AWS & TPWS — Revision Guide 2" },
          { title: "AWS & TPWS — Revision Guide 3" },
        ],
        quizzes: [
          { title: "AWS & TPWS Quiz 1", bullets: ["Add real questions here"] },
          { title: "AWS & TPWS Quiz 2", bullets: ["Add real questions here"] },
          { title: "AWS & TPWS Quiz 3", bullets: ["Add real questions here"] },
          { title: "AWS & TPWS Quiz 4", bullets: ["Add real questions here"] },
          { title: "AWS & TPWS Quiz 5", bullets: ["Add real questions here"] },
        ],
        tools: [
          { title: "AWS & TPWS — Tool 1" },
          { title: "AWS & TPWS — Tool 2" },
        ],
      },
      {
        id: "module-2-practice-assessment-prep",
        name: "Module 2 Practice & Assessment Prep",
        description: "100-question bank, M1/M3 rule book practice and combined quizzes for assessment preparation.",
        guides: [
          { title: "Module 2 Practice — Revision Guide 1" },
          { title: "Module 2 Practice — Revision Guide 2" },
        ],
        quizzes: [
          { title: "Module 2 Practice Quiz 1", bullets: ["Add real questions here"] },
          { title: "Module 2 Practice Quiz 2", bullets: ["Add real questions here"] },
          { title: "Module 2 Practice Quiz 3", bullets: ["Add real questions here"] },
        ],
        tools: [],
      },
    ],
  },
  {
    id: "module-3",
    label: "Module 3 — Train Operations",
    shortBadge: "MODULE 3",
    subtitle: "Speeds, level crossings, line-side signage, permissive and single-line working",
    color: "green",
    topics: [
      {
        id: "level-crossings",
        name: "Level Crossings",
        description: "AHBC, ABCL, AOCL, CCTV, MG, OC, Foot and Barrow crossings — driver actions and failure procedures.",
        guides: [{ title: "Level Crossings — Revision Guide" }],
        quizzes: [{ title: "Level Crossings Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "line-side-signage",
        name: "Line Side Signage",
        description: "Lineside signs, OHLE, low adhesion boards, countdown markers and permanent speed indicators.",
        guides: [{ title: "Line Side Signage — Revision Guide" }],
        quizzes: [{ title: "Line Side Signage Quiz", bullets: ["Add real questions here"] }],
        tools: [{ title: "Line Side Signage — Tool" }],
      },
      {
        id: "speed-restrictions-tsr-esr",
        name: "Speed Restrictions, TSR & ESR",
        description: "PSR, TSR and ESR — trackside boards, WON, set speeds and the full speeds reference guide.",
        guides: [
          { title: "Speed Restrictions — Revision Guide 1" },
          { title: "Speed Restrictions — Revision Guide 2" },
          { title: "Speed Restrictions — Revision Guide 3" },
          { title: "Speed Restrictions — Revision Guide 4" },
          { title: "Speed Restrictions — Revision Guide 5" },
        ],
        quizzes: [
          { title: "Speed Restrictions Quiz 1", bullets: ["Add real questions here"] },
          { title: "Speed Restrictions Quiz 2", bullets: ["Add real questions here"] },
          { title: "Speed Restrictions Quiz 3", bullets: ["Add real questions here"] },
          { title: "Speed Restrictions Quiz 4", bullets: ["Add real questions here"] },
        ],
        tools: [{ title: "Speed Restrictions — Tool" }],
      },
      {
        id: "permissive-working",
        name: "Permissive Working",
        description: "Entry into an occupied section, approach speeds, platform and shunting yard permissive working.",
        guides: [{ title: "Permissive Working — Revision Guide" }],
        quizzes: [{ title: "Permissive Working Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "single-line-working",
        name: "Single Line Working",
        description: "Token working, pilotman, wrong-direction operations and entering a section without a token.",
        guides: [
          { title: "Single Line Working — Revision Guide 1" },
          { title: "Single Line Working — Revision Guide 2" },
        ],
        quizzes: [
          { title: "Single Line Working Quiz 1", bullets: ["Add real questions here"] },
          { title: "Single Line Working Quiz 2", bullets: ["Add real questions here"] },
        ],
        tools: [],
      },
      {
        id: "professional-driving-train-dispatch",
        name: "Professional Driving & Train Dispatch",
        description: "Train dispatch, platform train interface, authority to start, DOO procedures and commentary driving.",
        guides: [{ title: "Professional Driving & Train Dispatch — Revision Guide" }],
        quizzes: [{ title: "Professional Driving & Train Dispatch Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "planned-unplanned-routes",
        name: "Planned & Unplanned Routes",
        description: "Route competency, advance diversions, short-notice notification sources and route proving.",
        guides: [{ title: "Planned & Unplanned Routes — Revision Guide" }],
        quizzes: [{ title: "Planned & Unplanned Routes Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "ac-electrified-lines",
        name: "AC Electrified Lines",
        description: "OLE safety, line light, VCB, ADD operation, pantograph checks and neutral section procedures.",
        guides: [{ title: "AC Electrified Lines — Revision Guide" }],
        quizzes: [{ title: "AC Electrified Lines Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "hot-axle-boxes-rotational-tests",
        name: "Hot Axle Boxes & Rotational Tests",
        description: "HABD alerts, obtaining a line block, checking a hot axle, permitted speeds and wheel rotation tests.",
        guides: [{ title: "Hot Axle Boxes & Rotational Tests — Revision Guide" }],
        quizzes: [{ title: "Hot Axle Boxes & Rotational Tests Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "near-misses-obstructions-lineside-fires",
        name: "Near Misses, Obstructions & Lineside Fires",
        description: "SMIS reporting, obstruction on line, fires on board, driver actions and protection procedures.",
        guides: [
          { title: "AC, Near Misses & Obstructions Revision Guide" },
          { title: "Lineside Fires Quick Reference" },
        ],
        quizzes: [
          { title: "Near Misses & Obstructions Quiz", bullets: ["SMIS reporting categories", "Obstruction on line — protection", "Fires on board procedure"] },
          { title: "Module 3 Combined Knowledge Sprint", bullets: ["Mixed Module 3 questions", "Crossings, speeds & professional driving", "AC lines & near misses"] },
        ],
        tools: [],
      },
    ],
  },
  {
    id: "module-4",
    label: "Module 4 — Emergencies & Incidents",
    shortBadge: "MODULE 4",
    subtitle: "Accidents, fires, derailments, wrong-direction movements, possessions and irregularities",
    color: "red",
    topics: [
      {
        id: "wrong-direction-movements",
        name: "Wrong Direction Movements",
        description: "FEW AS GOOD GTP — 12 authorised WDM scenarios, authority conditions, speed and level crossing rules.",
        guides: [{ title: "Wrong Direction Movements Revision Guide" }],
        quizzes: [
          { title: "Wrong Direction Movements Quiz", bullets: ["FEW AS GOOD GTP scenarios", "Authority conditions & speed rules", "Level crossings on WDM"] },
        ],
        tools: [{ title: "FEW AS GOOD GTP — Mnemonic Trainer" }],
      },
      {
        id: "accidents-fires-derailments",
        name: "Accidents, Fires & Derailments",
        description: "Train accidents, fires on board, derailments and obstructions — driver actions, protection and reporting.",
        guides: [{ title: "Accidents, Fires & Derailments — Revision Guide" }],
        quizzes: [{ title: "Accidents, Fires & Derailments Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "failed-train-station-incidents",
        name: "Failed Train & Station Incidents",
        description: "Assisting a failed train, station overruns, stopping short and failing to call — procedures, limits and driver actions.",
        guides: [{ title: "Failed Train & Station Incidents — Revision Guide" }],
        quizzes: [],
        tools: [],
      },
      {
        id: "emergencies-incidents",
        name: "Emergencies & Incidents",
        description: "Train collisions, divided trains, passenger emergencies, PCA rules and evacuation procedures.",
        guides: [{ title: "Emergencies & Incidents — Revision Guide" }],
        quizzes: [{ title: "Emergencies & Incidents Quiz", bullets: ["Add real questions here"] }],
        tools: [{ title: "Emergencies & Incidents — Tool" }],
      },
      {
        id: "signalling-irregularities-spad",
        name: "Signalling Irregularities & Passing Signals at Danger",
        description: "SPAD procedures, authority to pass, track circuit failures and signalling irregularity rules.",
        guides: [
          { title: "Signalling Irregularities & SPAD — Revision Guide 1" },
          { title: "Signalling Irregularities & SPAD — Revision Guide 2" },
        ],
        quizzes: [{ title: "Signalling Irregularities & SPAD Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
      {
        id: "possessions-ebw",
        name: "Possessions & EBW",
        description: "Line possessions, block working within a possession and Emergency Braking Warning procedures.",
        guides: [
          { title: "Possessions & EBW — Revision Guide 1" },
          { title: "Possessions & EBW — Revision Guide 2" },
        ],
        quizzes: [{ title: "Possessions & EBW Quiz", bullets: ["Add real questions here"] }],
        tools: [],
      },
    ],
  },
  {
    id: "exam-prep",
    label: "Exam Prep & Recap",
    shortBadge: "EXAM PREP",
    subtitle: "Practice exams, midterm recap and full-course revision tools",
    color: "purple",
    topics: [
      {
        id: "exam-prep",
        name: "Exam Preparation & Full Recap",
        description: "Master revision guide covering all modules, full course recap quiz and midterm recap.",
        guides: [
          { title: "Master Revision Guide — All Modules" },
          { title: "Midterm Recap Guide" },
          { title: "Post-Midterm Revision Guide — Module 4" },
        ],
        quizzes: [
          { title: "Full Course Recap Quiz", bullets: ["50 questions across all modules", "MCQ, typed & picture questions", "Final run-through before assessment"] },
          { title: "Midterm Recap Quiz", bullets: ["Modules 2 & 3 content", "Signalling, speeds & crossings", "Professional driving questions"] },
          { title: "Recap Quiz", bullets: ["Mixed module knowledge check", "Core rules & procedures"] },
          { title: "Post-Midterm Quiz — All Module 4 Topics", bullets: ["WDM & wrong direction", "Accidents & fires", "Emergencies & incidents", "Signalling irregularities", "PSAD, Possessions, EBW, TSR/ESR, SLW, Failed Train"] },
        ],
        tools: [],
      },
    ],
  },
];

// Flattened list of every topic, each tagged with its group info.
// This is what module.html and progress.js work with.
const MODULES = MODULE_GROUPS.flatMap(group =>
  group.topics.map(topic => Object.assign({}, topic, {
    groupId: group.id,
    groupLabel: group.label,
    code: group.shortBadge,
    badge: group.shortBadge,
    badgeColor: group.color,
    covered: false,
    pinned: false,
  }))
);

function getModule(id){
  return MODULES.find(m => m.id === id);
}
