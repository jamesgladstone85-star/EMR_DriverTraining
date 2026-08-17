// Module / topic data — structured to match the real course layout:
// Exam Prep + Recap, then Modules 1–4, each containing several topics.
//
// Most topics are guides-only for now — quizzes/tools get added in per
// topic as real content becomes available (see "booking-on-rostering-pts"
// below for an example with a live quiz). Topics without one just keep
// an empty quizzes/tools array so module.html's section-hiding logic
// works automatically.

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
            "totalSections": 8,
            "bullets": [
              "Full 80-question exam or pick a single module (10 questions each)",
              "Pass mark: 90%",
              "Every attempt saved to your progress history"
            ],
            "link": "pts-quiz.html"
          },
          {
            "title": "Booking On, Rostering & Publications Assessment (60 Questions)",
            "quizId": "Booking On, Rostering & Publications Assessment",
            "totalSections": 7,
            "bullets": [
              "Full 60-question exam or pick a single module",
              "Includes select-all-that-apply questions with close distractors",
              "Deep-dive modules on the Rule Book and Sectional Appendix",
              "Pass mark: 85%",
              "Every attempt saved to your progress history"
            ],
            "link": "booking-rostering-quiz.html"
          }
        ],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — General Safety Responsibilities & Personal Track Safety",
            "subtitle": "GERT8000-G1 Issue 10",
            "file": "assets/guides/rulebook/gert8000-g1-iss-10.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
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
        "quizzes": [
          {
            "title": "GSM-R Communications Assessment (25 Questions)",
            "quizId": "GSM-R Communications Assessment",
            "totalSections": 0,
            "bullets": [
              "Full 25-question exam covering the whole guide",
              "Includes select-all-that-apply questions with close distractors",
              "Pass mark: 85%",
              "Every attempt saved to your progress history"
            ],
            "link": "gsm-r-quiz.html"
          }
        ],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — GSM-R Handbook",
            "subtitle": "RS523 Issue 2",
            "file": "assets/guides/rulebook/rs523-gsm-r-iss-2.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          }
        ]
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
        "quizzes": [
          {
            "title": "Shunting & Train Preparation Assessment (34 Questions)",
            "quizId": "Shunting & Train Preparation Assessment",
            "totalSections": 0,
            "bullets": [
              "Full 34-question exam covering the whole guide",
              "Includes select-all-that-apply questions with close distractors",
              "Pass mark: 85%",
              "Every attempt saved to your progress history"
            ],
            "link": "shunting-quiz.html"
          }
        ],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Shunting",
            "subtitle": "GERT8000-SS2 Issue 7",
            "file": "assets/guides/rulebook/gert8000-ss2-iss-7.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "signals-colour-light-semaphore",
        "name": "Signals — Colour Light & Semaphore",
        "description": "Signal aspects, sequences, junction indicators, semaphore signals and absolute block working.",
        "guides": [
          {
            "title": "Colour Light Signals Revision",
            "file": "assets/guides/colour-light-signals-revision.pdf"
          },
          {
            "title": "Semaphore Signals Revision Notes",
            "file": "assets/guides/semaphore-signals-revision-notes.pdf"
          }
        ],
        "quizzes": [
          {
            "title": "Colour Light Signals Assessment (40 Questions)",
            "quizId": "Colour Light Signals Assessment",
            "totalSections": 0,
            "bullets": [
              "Full 40-question exam covering the whole guide",
              "Includes select-all-that-apply questions with close distractors",
              "Pass mark: 85%",
              "Every attempt saved to your progress history"
            ],
            "link": "colourlight-quiz.html"
          },
          {
            "title": "Semaphore Signals Assessment (40 Questions)",
            "quizId": "Semaphore Signals Assessment",
            "totalSections": 0,
            "bullets": [
              "Full 40-question exam covering the whole guide",
              "Includes select-all-that-apply questions with close distractors",
              "Pass mark: 85%",
              "Every attempt saved to your progress history"
            ],
            "link": "semaphore-quiz.html"
          }
        ],
        "tools": [
          {
            "title": "Absolute Block Section Diagram — Label It",
            "link": "assets/tools/absolute-block-diagram.html"
          }
        ],
        "rulebook": [
          {
            "title": "Rule Book — Signals, Handsignals, Indicators and Signs",
            "subtitle": "RS521 Issue 9",
            "file": "assets/guides/rulebook/rs521-iss-9.pdf"
          },
          {
            "title": "Rule Book — Observing & Obeying Signalling Indications, Train Warning Systems",
            "subtitle": "GERT8000-S7 Issue 7",
            "file": "assets/guides/rulebook/gert8000-s7-iss-7.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "aws-tpws",
        "name": "AWS & TPWS",
        "description": "AWS operation, fault codes, TPWS OSS/TSS, trains controlled by AWS and defective equipment rules.",
        "guides": [
          {
            "title": "AWS Revision Notes",
            "file": "assets/guides/aws-revision-notes.pdf"
          },
          {
            "title": "TPWS Revision Notes",
            "file": "assets/guides/tpws-revision-notes.pdf"
          },
          {
            "title": "Trains Detained and TCA Revision Guide",
            "file": "assets/guides/trains-detained-tca-revision-guide.pdf"
          }
        ],
        "quizzes": [
          {
            "title": "AWS & TPWS Combined Quiz",
            "link": "aws-tpws-combined-quiz.html",
            "bullets": [
              "AWS magnets, equipment & fault codes",
              "TPWS OSS/TSS, panels & signal box view",
              "Defective equipment rules (TW5)",
              "Brake demand & override procedure"
            ]
          },
          {
            "title": "RS522 AWS Quiz (v3)",
            "link": "rs522-aws-v3-quiz.html",
            "bullets": [
              "Magnets, positioning & gap areas",
              "Indications & acknowledgement timing",
              "Equipment & driver responsibility"
            ]
          },
          {
            "title": "RS522 AWS Quiz (v2)",
            "link": "rs522-aws-v2-quiz.html",
            "bullets": [
              "Write-your-own-answer format",
              "AWS equipment & magnet types",
              "In-cab operation & response"
            ]
          },
          {
            "title": "TW5 — Defective Equipment Quiz",
            "link": "tw5-quiz.html",
            "bullets": [
              "All 29 on-train equipment categories",
              "Defect reporting & competent person rules",
              "Speed limits & conditions per equipment type"
            ]
          }
        ],
        "tools": [
          {
            "title": "AWS Fault Codes Flashcards",
            "link": "assets/tools/aws-fault-codes-flashcards.html"
          },
          {
            "title": "Procedure Sequencer",
            "link": "assets/tools/procedure-sequencer.html"
          }
        ],
        "rulebook": [
          {
            "title": "Rule Book — AWS and TPWS Handbook",
            "subtitle": "RS522 Issue 3",
            "file": "assets/guides/rulebook/rs522-iss-3.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          },
          {
            "title": "Rule Book — Trains or Shunting Movements Detained on Running Lines",
            "subtitle": "GERT8000-S4 Issue 5",
            "file": "assets/guides/rulebook/gert8000-s4-iss-5.pdf"
          },
          {
            "title": "Rule Book — Observing & Obeying Signalling Indications, Train Warning Systems",
            "subtitle": "GERT8000-S7 Issue 7",
            "file": "assets/guides/rulebook/gert8000-s7-iss-7.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          }
        ]
      },
      {
        "id": "module-2-practice-assessment-prep",
        "name": "Module 2 Practice & Assessment Prep",
        "description": "100-question bank, M1/M3 rule book practice and combined quizzes for assessment preparation.",
        "guides": [
          {
            "title": "Module 2 100 Question Bank",
            "file": "assets/guides/module-2-100-question-bank.pdf"
          },
          {
            "title": "M1/M3 Revision Guide",
            "file": "assets/guides/m1-m3-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
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
            "title": "Level Crossings — Revision Guide",
            "file": "assets/guides/level-crossings-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Level Crossings, Drivers' Instructions",
            "subtitle": "GERT8000-TW8 Issue 10",
            "file": "assets/guides/rulebook/gert8000-tw8-iss-10.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "line-side-signage",
        "name": "Line Side Signage",
        "description": "Lineside signs, OHLE, low adhesion boards, countdown markers and permanent speed indicators.",
        "guides": [
          {
            "title": "Line Side Signage — Revision Guide",
            "file": "assets/guides/line-side-signage-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Signals, Handsignals, Indicators and Signs",
            "subtitle": "RS521 Issue 9",
            "file": "assets/guides/rulebook/rs521-iss-9.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "speed-restrictions-tsr-esr",
        "name": "Speed Restrictions, TSR & ESR",
        "description": "PSR, TSR and ESR — trackside boards, WON, set speeds and the full speeds reference guide.",
        "guides": [
          {
            "title": "Speed Restrictions Revision Guide",
            "file": "assets/guides/speed-restrictions-revision-guide.pdf"
          },
          {
            "title": "TSR & ESR Revision Guide",
            "file": "assets/guides/tsr-esr-revision-guide.pdf"
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
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Speeds",
            "subtitle": "GERT8000-SP Issue 7",
            "file": "assets/guides/rulebook/gert8000-sp-iss-7.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "permissive-working",
        "name": "Permissive Working",
        "description": "Entry into an occupied section, approach speeds, platform and shunting yard permissive working.",
        "guides": [
          {
            "title": "Permissive Working — Revision Guide",
            "file": "assets/guides/permissive-working-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "single-line-working",
        "name": "Single Line Working",
        "description": "Token working, pilotman, wrong-direction operations and entering a section without a token.",
        "guides": [
          {
            "title": "Single Line Working Revision Guide",
            "file": "assets/guides/single-line-working-revision-guide.pdf"
          },
          {
            "title": "Single Line Working Module 3 Revision Guide",
            "file": "assets/guides/single-line-working-module3-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Single Line Working",
            "subtitle": "GERT8000-P1 Issue 9",
            "file": "assets/guides/rulebook/gert8000-p1-iss-9.pdf"
          },
          {
            "title": "Rule Book — Working Single & Bi-Directional Lines by Pilot",
            "subtitle": "GERT8000-P2 Issue 8",
            "file": "assets/guides/rulebook/gert8000-p2-iss-8.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "professional-driving-train-dispatch",
        "name": "Professional Driving & Train Dispatch",
        "description": "Train dispatch, platform train interface, authority to start, DOO procedures and commentary driving.",
        "guides": [
          {
            "title": "Professional Driving & Train Dispatch — Revision Guide",
            "file": "assets/guides/professional-driving-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Station Duties and Train Dispatch",
            "subtitle": "GERT8000-SS1 Issue 10",
            "file": "assets/guides/rulebook/gert8000-ss1-iss-10.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "planned-unplanned-routes",
        "name": "Planned & Unplanned Routes",
        "description": "Route competency, advance diversions, short-notice notification sources and route proving.",
        "guides": [
          {
            "title": "Planned & Unplanned Routes — Revision Guide",
            "file": "assets/guides/planned-unplanned-routes-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
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
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — AC Electrified Lines",
            "subtitle": "GERT8000-AC Issue 10",
            "file": "assets/guides/rulebook/gert8000-ac-iss-10.pdf"
          },
          {
            "title": "Rule Book — DC Electrified Lines",
            "subtitle": "GERT8000-DC Issue 8",
            "file": "assets/guides/rulebook/gert8000-dc-iss-8.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "hot-axle-boxes-rotational-tests",
        "name": "Hot Axle Boxes & Rotational Tests",
        "description": "HABD alerts, obtaining a line block, checking a hot axle, permitted speeds and wheel rotation tests.",
        "guides": [
          {
            "title": "Hot Axle Boxes & Rotational Tests — Revision Guide",
            "file": "assets/guides/hot-axle-boxes-rotational-tests-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "near-misses-obstructions-lineside-fires",
        "name": "Near Misses, Obstructions & Lineside Fires",
        "description": "SMIS reporting, obstruction on line, fires on board, driver actions and protection procedures.",
        "guides": [
          {
            "title": "AC, Near Misses & Obstructions Revision Guide",
            "file": "assets/guides/ac-near-miss-obstructions-revision-guide.pdf"
          },
          {
            "title": "Lineside Fires Quick Reference",
            "file": "assets/guides/lineside-fires-quick-reference.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
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
            "title": "Wrong Direction Movements Revision Guide",
            "file": "assets/guides/wrong-direction-movements-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Wrong-Direction Movements",
            "subtitle": "GERT8000-TW7 Issue 10",
            "file": "assets/guides/rulebook/gert8000-tw7-iss-10.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "accidents-fires-derailments",
        "name": "Accidents, Fires & Derailments",
        "description": "Train accidents, fires on board, derailments and obstructions — driver actions, protection and reporting.",
        "guides": [
          {
            "title": "Accidents, Fires & Derailments — Revision Guide",
            "file": "assets/guides/accidents-fires-derailments-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Dealing with a Train Accident or Train Evacuation",
            "subtitle": "GERT8000-M1 Issue 9",
            "file": "assets/guides/rulebook/gert8000-m1-iss-9.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "failed-train-station-incidents",
        "name": "Failed Train & Station Incidents",
        "description": "Assisting a failed train, station overruns, stopping short and failing to call — procedures, limits and driver actions.",
        "guides": [
          {
            "title": "Failed Train & Station Incidents — Revision Guide",
            "file": "assets/guides/failed-train-station-overruns-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Train Stopped by Train Failure",
            "subtitle": "GERT8000-M2 Issue 9",
            "file": "assets/guides/rulebook/gert8000-m2-iss-9.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "emergencies-incidents",
        "name": "Emergencies & Incidents",
        "description": "Train collisions, divided trains, passenger emergencies, PCA rules and evacuation procedures.",
        "guides": [
          {
            "title": "Emergencies & Incidents — Revision Guide",
            "file": "assets/guides/emergencies-incidents-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Managing Incidents, Floods and Snow",
            "subtitle": "GERT8000-M3 Issue 5",
            "file": "assets/guides/rulebook/gert8000-m3-iss-5.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "signalling-irregularities-spad",
        "name": "Signalling Irregularities & Passing Signals at Danger",
        "description": "SPAD procedures, authority to pass, track circuit failures and signalling irregularity rules.",
        "guides": [
          {
            "title": "Signalling Irregularities Revision Guide",
            "file": "assets/guides/signalling-irregularities-revision-guide.pdf"
          },
          {
            "title": "Passing Signals at Danger Revision Guide",
            "file": "assets/guides/passing-signals-at-danger-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Passing a Signal at Danger or an EoA Without Authority",
            "subtitle": "GERT8000-S5 Issue 13",
            "file": "assets/guides/rulebook/gert8000-s5-iss-13.pdf"
          },
          {
            "title": "Rule Book — Proceed-on-Sight Authority (PoSA)",
            "subtitle": "GERT8000-PoSA Issue 3",
            "file": "assets/guides/rulebook/gert8000-posa-iss-3.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      },
      {
        "id": "possessions-ebw",
        "name": "Possessions & EBW",
        "description": "Line possessions, block working within a possession and Emergency Braking Warning procedures.",
        "guides": [
          {
            "title": "Possessions Revision Guide",
            "file": "assets/guides/possessions-revision-guide.pdf"
          },
          {
            "title": "EBW Revision Guide",
            "file": "assets/guides/ebw-revision-guide.pdf"
          }
        ],
        "quizzes": [],
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Possession of a Running Line for Engineering Work",
            "subtitle": "GERT8000-T3 Issue 13",
            "file": "assets/guides/rulebook/gert8000-t3-iss-13.pdf"
          },
          {
            "title": "Rule Book — Possession of a Running Line for Engineering Work (ERTMS)",
            "subtitle": "GERT8000-T3 ERTMS Issue 4.1",
            "file": "assets/guides/rulebook/gert8000-t3-ertms-iss-4-1.pdf"
          },
          {
            "title": "Rule Book — ERTMS Handbook",
            "subtitle": "RS525 Issue 1",
            "file": "assets/guides/rulebook/rs525-iss-1.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
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
        "tools": [],
        "rulebook": [
          {
            "title": "Rule Book — Glossary of Railway Terminology",
            "subtitle": "GERT8000-Gloss Issue 7",
            "file": "assets/guides/rulebook/gert8000-gloss-iss-7.pdf"
          },
          {
            "title": "Rule Book — Preparation and Movement of Trains",
            "subtitle": "GERT8000-TW1 Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "Rule Book — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "GERT8000-TW5 Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "rule-book-library",
    "label": "Rule Book Library — Official RSSB Reference",
    "shortBadge": "RULE BOOK",
    "subtitle": "The full official GERT8000 Rule Book modules and RSSB handbooks, for reference alongside every topic above",
    "color": "amber",
    "topics": [
      {
        "id": "rulebook-rs-handbooks",
        "name": "RS Handbooks",
        "description": "The core RSSB handbooks referenced throughout the Rule Book — signals, AWS/TPWS, GSM-R, dangerous goods and ERTMS.",
        "guides": [
          {
            "title": "RS521 — Signals, Handsignals, Indicators and Signs",
            "subtitle": "Issue 9",
            "file": "assets/guides/rulebook/rs521-iss-9.pdf"
          },
          {
            "title": "RS522 — AWS and TPWS Handbook",
            "subtitle": "Issue 3",
            "file": "assets/guides/rulebook/rs522-iss-3.pdf"
          },
          {
            "title": "RS523 — GSM-R Handbook",
            "subtitle": "Issue 2",
            "file": "assets/guides/rulebook/rs523-gsm-r-iss-2.pdf"
          },
          {
            "title": "RS524 — List of Dangerous Goods and their UN Numbers",
            "subtitle": "Issue 1.2",
            "file": "assets/guides/rulebook/rs524-iss-1-2.pdf"
          },
          {
            "title": "RS525 — ERTMS Handbook",
            "subtitle": "Issue 1",
            "file": "assets/guides/rulebook/rs525-iss-1.pdf"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "rulebook-general-safety",
        "name": "General & Safety",
        "description": "Foundational modules covering safety responsibilities, personal track safety and Rule Book terminology.",
        "guides": [
          {
            "title": "G1 — General Safety Responsibilities and Personal Track Safety",
            "subtitle": "Issue 10",
            "file": "assets/guides/rulebook/gert8000-g1-iss-10.pdf"
          },
          {
            "title": "Gloss — Glossary of Railway Terminology",
            "subtitle": "Issue 7",
            "file": "assets/guides/rulebook/gert8000-gloss-iss-7.pdf"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "rulebook-preparation-movement",
        "name": "Preparation, Movement & Equipment",
        "description": "Preparing and moving trains, defective on-train equipment, wrong-direction movements and level crossings.",
        "guides": [
          {
            "title": "TW1 — Preparation and Movement of Trains",
            "subtitle": "Issue 22",
            "file": "assets/guides/rulebook/gert8000-tw1-iss-22.pdf"
          },
          {
            "title": "TW4 — Preparation and Working of Freight Trains",
            "subtitle": "Issue 2",
            "file": "assets/guides/rulebook/gert8000-tw4-iss-2.pdf"
          },
          {
            "title": "TW5 — Defective or Isolated Vehicles & On-Train Equipment",
            "subtitle": "Issue 14",
            "file": "assets/guides/rulebook/gert8000-tw5-iss-14.pdf"
          },
          {
            "title": "TW7 — Wrong-Direction Movements",
            "subtitle": "Issue 10",
            "file": "assets/guides/rulebook/gert8000-tw7-iss-10.pdf"
          },
          {
            "title": "TW8 — Level Crossings, Drivers' Instructions",
            "subtitle": "Issue 10",
            "file": "assets/guides/rulebook/gert8000-tw8-iss-10.pdf"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "rulebook-signalling-speed",
        "name": "Signalling & Speed",
        "description": "Trains detained on running lines, SPADs, signalling indications, train warning systems and speeds.",
        "guides": [
          {
            "title": "S4 — Trains or Shunting Movements Detained on Running Lines",
            "subtitle": "Issue 5",
            "file": "assets/guides/rulebook/gert8000-s4-iss-5.pdf"
          },
          {
            "title": "S5 — Passing a Signal at Danger or an EoA Without Authority",
            "subtitle": "Issue 13",
            "file": "assets/guides/rulebook/gert8000-s5-iss-13.pdf"
          },
          {
            "title": "S7 — Observing & Obeying Signalling Indications, Train Warning Systems",
            "subtitle": "Issue 7",
            "file": "assets/guides/rulebook/gert8000-s7-iss-7.pdf"
          },
          {
            "title": "SP — Speeds",
            "subtitle": "Issue 7",
            "file": "assets/guides/rulebook/gert8000-sp-iss-7.pdf"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "rulebook-special-working-incidents",
        "name": "Special Working & Incidents",
        "description": "Accidents, failures, incidents, on-track machines, single line and pilot working, dispatch, shunting and possessions.",
        "guides": [
          {
            "title": "M1 — Dealing with a Train Accident or Train Evacuation",
            "subtitle": "Issue 9",
            "file": "assets/guides/rulebook/gert8000-m1-iss-9.pdf"
          },
          {
            "title": "M2 — Train Stopped by Train Failure",
            "subtitle": "Issue 9",
            "file": "assets/guides/rulebook/gert8000-m2-iss-9.pdf"
          },
          {
            "title": "M3 — Managing Incidents, Floods and Snow",
            "subtitle": "Issue 5",
            "file": "assets/guides/rulebook/gert8000-m3-iss-5.pdf"
          },
          {
            "title": "OTM — Working of On-Track Machines",
            "subtitle": "Issue 12",
            "file": "assets/guides/rulebook/gert8000-otm-iss-12.pdf"
          },
          {
            "title": "P1 — Single Line Working",
            "subtitle": "Issue 9",
            "file": "assets/guides/rulebook/gert8000-p1-iss-9.pdf"
          },
          {
            "title": "P2 — Working Single & Bi-Directional Lines by Pilot",
            "subtitle": "Issue 8",
            "file": "assets/guides/rulebook/gert8000-p2-iss-8.pdf"
          },
          {
            "title": "PoSA — Proceed-on-Sight Authority",
            "subtitle": "Issue 3",
            "file": "assets/guides/rulebook/gert8000-posa-iss-3.pdf"
          },
          {
            "title": "SS1 — Station Duties and Train Dispatch",
            "subtitle": "Issue 10",
            "file": "assets/guides/rulebook/gert8000-ss1-iss-10.pdf"
          },
          {
            "title": "SS2 — Shunting",
            "subtitle": "Issue 7",
            "file": "assets/guides/rulebook/gert8000-ss2-iss-7.pdf"
          },
          {
            "title": "T3 — Possession of a Running Line for Engineering Work",
            "subtitle": "Issue 13",
            "file": "assets/guides/rulebook/gert8000-t3-iss-13.pdf"
          },
          {
            "title": "T3 ERTMS — Possession of a Running Line for Engineering Work (ERTMS)",
            "subtitle": "Issue 4.1",
            "file": "assets/guides/rulebook/gert8000-t3-ertms-iss-4-1.pdf"
          }
        ],
        "quizzes": [],
        "tools": []
      },
      {
        "id": "rulebook-electrification",
        "name": "Electrification",
        "description": "AC and DC electrified line procedures.",
        "guides": [
          {
            "title": "AC — AC Electrified Lines",
            "subtitle": "Issue 10",
            "file": "assets/guides/rulebook/gert8000-ac-iss-10.pdf"
          },
          {
            "title": "DC — DC Electrified Lines",
            "subtitle": "Issue 8",
            "file": "assets/guides/rulebook/gert8000-dc-iss-8.pdf"
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
