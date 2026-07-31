// Shared content for the training site.
// Swap in your own modules / guides / quizzes here later — the two pages
// (index.html and module.html) both just read from this file.

const MODULES = [
  {
    id: "m1",
    code: "EMR 06 / PTS",
    badge: "MODULE 1",
    badgeColor: "purple",
    name: "Booking On, Publications, Rostering & PTS",
    covered: false,
    pinned: false,
    guides: [
      {
        title: "Booking On for Duty, Publications & Rostering — Revision Notes",
        subtitle: "EMR 06-01 / 06-02 / 06-04",
        file: "assets/guides/booking-on-rostering-revision-notes.pdf",
      },
      {
        title: "Personal Track Safety (PTS) — Revision Notes",
        subtitle: "PTS 675-000 V4",
        file: "assets/guides/pts-revision-notes.pdf",
      },
    ],
    quizzes: [
      {
        title: "Booking On & Rostering Quiz",
        bullets: ["Rosters, cover & spare turns", "Fitness for duty & fatigue", "Documents & equipment required"],
      },
      {
        title: "Personal Track Safety (PTS) Quiz",
        bullets: ["Walking routes & the 5-10 rule", "OLE & conductor rail safe distances", "Emergency protection procedure"],
      },
    ],
    tools: [],
  },
  {
    id: "m2",
    code: "RB-02",
    badge: "MODULE 2",
    badgeColor: "blue",
    name: "Signals — Colour Light & Semaphore",
    covered: false,
    pinned: false,
    guides: [
      { title: "Colour Light Signals Revision" },
      { title: "Semaphore Signals Revision Notes" },
    ],
    quizzes: [
      {
        title: "Colour Light Signals Quiz",
        bullets: ["2, 3 & 4-aspect sequences", "Junction indicators & PLS", "Identifying aspects from diagrams"],
      },
      {
        title: "Track Circuit Quiz — Hard",
        bullets: ["Track circuit block rules", "Absolute block working", "Signal-at-danger procedures"],
      },
    ],
    tools: [
      { title: "Module 2 Extra Revision" },
    ],
  },
  {
    id: "m3",
    code: "RB-03",
    badge: "MODULE 3",
    badgeColor: "green",
    name: "Near Misses, Obstructions & Lineside Fires",
    covered: false,
    pinned: false,
    guides: [
      { title: "AC, Near Misses & Obstructions Revision Guide" },
      { title: "Lineside Fires Quick Reference" },
    ],
    quizzes: [
      {
        title: "Near Misses & Obstructions Quiz",
        bullets: ["SMIS reporting categories", "Obstruction on line — protection", "Fires on board procedure"],
      },
      {
        title: "Module 3 Combined Knowledge Sprint",
        bullets: ["Mixed Module 3 questions", "Crossings, speeds & professional driving", "AC lines & near misses"],
      },
    ],
    tools: [],
  },
  {
    id: "m4",
    code: "RB-04",
    badge: "MODULE 4",
    badgeColor: "pink",
    name: "Wrong Direction Movements",
    covered: false,
    pinned: false,
    guides: [
      { title: "Wrong Direction Movements Revision Guide" },
    ],
    quizzes: [
      {
        title: "Wrong Direction Movements Quiz",
        bullets: ["FEW AS GOOD GTP scenarios", "Authority conditions & speed rules", "Level crossings on WDM"],
      },
    ],
    tools: [
      { title: "FEW AS GOOD GTP — Mnemonic Trainer" },
    ],
  },
  {
    id: "m5",
    code: "RB-05",
    badge: "MODULE 5",
    badgeColor: "amber",
    name: "Possessions & Engineering Work",
    covered: false,
    pinned: false,
    guides: [
      { title: "Possessions & EBW Revision Guide" },
      { title: "TSR / ESR Quick Reference" },
    ],
    quizzes: [
      {
        title: "Possessions & Engineering Work Quiz",
        bullets: ["PSAD & EBW conditions", "TSR/ESR application", "SLW & failed train protection"],
      },
    ],
    tools: [],
  },
  {
    id: "m6",
    code: "RB-06",
    badge: "MODULE 6",
    badgeColor: "purple",
    name: "Emergency Procedures",
    covered: false,
    pinned: false,
    guides: [
      { title: "Emergency Procedures Revision Guide" },
    ],
    quizzes: [
      {
        title: "Emergency Procedures Quiz",
        bullets: ["Detonator protocol", "Evacuation procedure", "Emergency communications"],
      },
    ],
    tools: [],
  },
  {
    id: "m7",
    code: "RB-07",
    badge: "MODULE 7",
    badgeColor: "blue",
    name: "Degraded Working",
    covered: false,
    pinned: false,
    guides: [
      { title: "Degraded Working Revision Guide" },
    ],
    quizzes: [
      {
        title: "Degraded Working Quiz",
        bullets: ["Signal failure procedure", "Failure of AWS/TPWS", "Working without signals"],
      },
    ],
    tools: [],
  },
  {
    id: "m8",
    code: "RB-08",
    badge: "MODULE 8",
    badgeColor: "green",
    name: "Train Handling",
    covered: false,
    pinned: false,
    guides: [
      { title: "Train Handling Revision Guide" },
    ],
    quizzes: [
      {
        title: "Train Handling Quiz",
        bullets: ["Braking distances", "Adhesion & weather conditions", "Coupling & uncoupling"],
      },
    ],
    tools: [],
  },
  {
    id: "exam-prep",
    code: "EXAM",
    badge: "EXAM PREP",
    badgeColor: "purple",
    name: "Exam Preparation & Full Recap",
    covered: false,
    pinned: false,
    isExamPrep: true,
    guides: [
      { title: "Master Revision Guide — All Modules" },
      { title: "Midterm Recap Guide" },
      { title: "Post-Midterm Revision Guide — Module 4" },
    ],
    quizzes: [
      {
        title: "Full Course Recap Quiz",
        bullets: ["50 questions across all modules", "MCQ, typed & picture questions", "Final run-through before assessment"],
      },
      {
        title: "Midterm Recap Quiz",
        bullets: ["Modules 2 & 3 content", "Signalling, speeds & crossings", "Professional driving questions"],
      },
      {
        title: "Recap Quiz",
        bullets: ["Mixed module knowledge check", "Core rules & procedures"],
      },
      {
        title: "Post-Midterm Quiz — All Module 4 Topics",
        bullets: ["WDM & wrong direction", "Accidents & fires", "Emergencies & incidents", "Signalling irregularities", "PSAD, Possessions, EBW, TSR/ESR, SLW, Failed Train"],
      },
    ],
    tools: [],
  },
];

function getModule(id){
  return MODULES.find(m => m.id === id);
}
