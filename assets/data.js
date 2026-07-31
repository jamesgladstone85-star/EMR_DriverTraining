// Module / topic data — structured to match the real course layout:
// Exam Prep + Recap, then Modules 1–4, each containing several topics.
//
// Quizzes and tools have been stripped out for now (guides only) — add
// them back in per topic as real quiz/tool content becomes available.
// Each topic still has empty quizzes/tools arrays so module.html's
// section-hiding logic just works automatically when they're populated.

const MODULE_GROUPS = [
  {
    "id": "module-1",
    "label": "Module 1 — Introduction & Communications",
    "shortBadge": "MODULE 1",
    "subtitle": "Booking on, GSM-R radio, PTS and rostering procedures",
    "color": "orange",
    "topics": [
      {
        "id": "booking-on-rostering-pts",
        "name": "Booking On, Rostering & PTS",
        "description": "Booking on procedures, DOTE, rostering rules and personal track safety.",
        "guides": [
          {
            "title": "Booking On for Duty, Publications & Rostering — Revision Notes",
            "subtitle": "EMR 06-01 / 06-02 / 06-04",
            "file": "assets/guides/booking-on-rostering-revision-notes.pdf"
          },
          {
            "title": "Personal Track Safety (PTS) — Revision Notes",
            "subtitle": "PTS 675-000 V4",
            "file": "assets/guides/pts-revision-notes.pdf"
          }
        ],
        "quizzes": [
          {
            "title": "PTS Master Assessment (80 Questions)",
            "quizId": "PTS Master Assessment",
            "bullets": ["Full 80-question exam or pick a single module (10 questions each)", "Pass mark: 90%", "Every attempt saved to your progress history"],
            "link": "pts-quiz.html"
          }
        ],
        "tools": []
      },
      {
        "id": "gsm-r-communications",
        "name": "GSM-R Communications",
        "description": "GSM-R radio system, cab secure radio and driver communications procedures.",
        "guides": [
          {
            "title": "GSM-R — Revision Guide",
            "subtitle": "RS523 Issue 2 / GERT8000-TW5 Issue 14",
            "file": "assets/guides/gsm-r-revision-notes.pdf"
          }
        ],
        "quizzes": [],
        "tools": []
      }
    ]
  },
  {
    "id": "module-2",
    "label": "Module 2 — Signalling & Rules",
    "shortBadge": "MODULE 2",
    "subtitle": "Colour-light signals, AWS/TPWS, track circuits and rule book fundamentals",
    "color": "blue",
    "topics": [
      {
        "id": "shunting",
        "name": "Shunting",
        "description": "Shunting movements, authority, signals and safety rules.",
        "guides": [
          {
            "title": "Shunting — Revision Guide",
            "subtitle": "GERT8000-SS2 Issue 7",
            "file": "assets/guides/shunting-revision-notes.pdf"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "signals-colour-light-semaphore",
        "name": "Signals — Colour Light & Semaphore",
        "description": "Signal aspects, sequences, junction indicators, semaphore signals and absolute block working.",
        "guides": [
          {
            "title": "Colour Light Signals Revision"
          },
          {
            "title": "Semaphore Signals Revision Notes"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "aws-tpws",
        "name": "AWS & TPWS",
        "description": "AWS operation, fault codes, TPWS OSS/TSS, trains controlled by AWS and defective equipment rules.",
        "guides": [
          {
            "title": "AWS & TPWS — Revision Guide 1"
          },
          {
            "title": "AWS & TPWS — Revision Guide 2"
          },
          {
            "title": "AWS & TPWS — Revision Guide 3"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "module-2-practice-assessment-prep",
        "name": "Module 2 Practice & Assessment Prep",
        "description": "100-question bank, M1/M3 rule book practice and combined quizzes for assessment preparation.",
        "guides": [
          {
            "title": "Module 2 Practice — Revision Guide 1"
          },
          {
            "title": "Module 2 Practice — Revision Guide 2"
          }
        ],
        "quizzes": [],
        "tools": []
      }
    ]
  },
  {
    "id": "module-3",
    "label": "Module 3 — Train Operations",
    "shortBadge": "MODULE 3",
    "subtitle": "Speeds, level crossings, line-side signage, permissive and single-line working",
    "color": "green",
    "topics": [
      {
        "id": "level-crossings",
        "name": "Level Crossings",
        "description": "AHBC, ABCL, AOCL, CCTV, MG, OC, Foot and Barrow crossings — driver actions and failure procedures.",
        "guides": [
          {
            "title": "Level Crossings — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "line-side-signage",
        "name": "Line Side Signage",
        "description": "Lineside signs, OHLE, low adhesion boards, countdown markers and permanent speed indicators.",
        "guides": [
          {
            "title": "Line Side Signage — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "speed-restrictions-tsr-esr",
        "name": "Speed Restrictions, TSR & ESR",
        "description": "PSR, TSR and ESR — trackside boards, WON, set speeds and the full speeds reference guide.",
        "guides": [
          {
            "title": "Speed Restrictions — Revision Guide 1"
          },
          {
            "title": "Speed Restrictions — Revision Guide 2"
          },
          {
            "title": "Speed Restrictions — Revision Guide 3"
          },
          {
            "title": "Speed Restrictions — Revision Guide 4"
          },
          {
            "title": "Speed Restrictions — Revision Guide 5"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "permissive-working",
        "name": "Permissive Working",
        "description": "Entry into an occupied section, approach speeds, platform and shunting yard permissive working.",
        "guides": [
          {
            "title": "Permissive Working — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "single-line-working",
        "name": "Single Line Working",
        "description": "Token working, pilotman, wrong-direction operations and entering a section without a token.",
        "guides": [
          {
            "title": "Single Line Working — Revision Guide 1"
          },
          {
            "title": "Single Line Working — Revision Guide 2"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "professional-driving-train-dispatch",
        "name": "Professional Driving & Train Dispatch",
        "description": "Train dispatch, platform train interface, authority to start, DOO procedures and commentary driving.",
        "guides": [
          {
            "title": "Professional Driving & Train Dispatch — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "planned-unplanned-routes",
        "name": "Planned & Unplanned Routes",
        "description": "Route competency, advance diversions, short-notice notification sources and route proving.",
        "guides": [
          {
            "title": "Planned & Unplanned Routes — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "ac-electrified-lines",
        "name": "AC Electrified Lines",
        "description": "OLE safety, line light, VCB, ADD operation, pantograph checks and neutral section procedures.",
        "guides": [
          {
            "title": "AC Electrified Lines — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "hot-axle-boxes-rotational-tests",
        "name": "Hot Axle Boxes & Rotational Tests",
        "description": "HABD alerts, obtaining a line block, checking a hot axle, permitted speeds and wheel rotation tests.",
        "guides": [
          {
            "title": "Hot Axle Boxes & Rotational Tests — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "near-misses-obstructions-lineside-fires",
        "name": "Near Misses, Obstructions & Lineside Fires",
        "description": "SMIS reporting, obstruction on line, fires on board, driver actions and protection procedures.",
        "guides": [
          {
            "title": "AC, Near Misses & Obstructions Revision Guide"
          },
          {
            "title": "Lineside Fires Quick Reference"
          }
        ],
        "quizzes": [],
        "tools": []
      }
    ]
  },
  {
    "id": "module-4",
    "label": "Module 4 — Emergencies & Incidents",
    "shortBadge": "MODULE 4",
    "subtitle": "Accidents, fires, derailments, wrong-direction movements, possessions and irregularities",
    "color": "red",
    "topics": [
      {
        "id": "wrong-direction-movements",
        "name": "Wrong Direction Movements",
        "description": "FEW AS GOOD GTP — 12 authorised WDM scenarios, authority conditions, speed and level crossing rules.",
        "guides": [
          {
            "title": "Wrong Direction Movements Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "accidents-fires-derailments",
        "name": "Accidents, Fires & Derailments",
        "description": "Train accidents, fires on board, derailments and obstructions — driver actions, protection and reporting.",
        "guides": [
          {
            "title": "Accidents, Fires & Derailments — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "failed-train-station-incidents",
        "name": "Failed Train & Station Incidents",
        "description": "Assisting a failed train, station overruns, stopping short and failing to call — procedures, limits and driver actions.",
        "guides": [
          {
            "title": "Failed Train & Station Incidents — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "emergencies-incidents",
        "name": "Emergencies & Incidents",
        "description": "Train collisions, divided trains, passenger emergencies, PCA rules and evacuation procedures.",
        "guides": [
          {
            "title": "Emergencies & Incidents — Revision Guide"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "signalling-irregularities-spad",
        "name": "Signalling Irregularities & Passing Signals at Danger",
        "description": "SPAD procedures, authority to pass, track circuit failures and signalling irregularity rules.",
        "guides": [
          {
            "title": "Signalling Irregularities & SPAD — Revision Guide 1"
          },
          {
            "title": "Signalling Irregularities & SPAD — Revision Guide 2"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "possessions-ebw",
        "name": "Possessions & EBW",
        "description": "Line possessions, block working within a possession and Emergency Braking Warning procedures.",
        "guides": [
          {
            "title": "Possessions & EBW — Revision Guide 1"
          },
          {
            "title": "Possessions & EBW — Revision Guide 2"
          }
        ],
        "quizzes": [],
        "tools": []
      }
    ]
  },
  {
    "id": "exam-prep",
    "label": "Exam Prep & Recap",
    "shortBadge": "EXAM PREP",
    "subtitle": "Practice exams, midterm recap and full-course revision tools",
    "color": "purple",
    "topics": [
      {
        "id": "exam-prep",
        "name": "Exam Preparation & Full Recap",
        "description": "Master revision guide covering all modules, full course recap quiz and midterm recap.",
        "guides": [
          {
            "title": "Master Revision Guide — All Modules"
          },
          {
            "title": "Midterm Recap Guide"
          },
          {
            "title": "Post-Midterm Revision Guide — Module 4"
          }
        ],
        "quizzes": [],
        "tools": []
      }
    ]
  }
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
