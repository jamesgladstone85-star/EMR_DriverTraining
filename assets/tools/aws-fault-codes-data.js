// AWS Fault Codes — Flashcards data
// Source: RS522 Issue 3 (AWS and TPWS Handbook, December 2015), Section 3
// "Failures and irregularities" — official list of fault codes to be
// reported. Scope is Codes 1-10 and 7a only (the AWS "Clear/Bell" and
// "Warning/Horn" required-indication groups) — codes 11-17 (AWS
// arm/disarm faults, ATP/TVM, TPWS 16/17) are out of scope for this set.
//
// required/actual are the official RS522 p.23 table wording. note is the
// short plain-English explanation shown on the reveal side of the card.
const AWS_FAULT_CODES = [
  { code: "1",  required: "Clear (bell)",   actual: "Horn and bell — got both sounds",
    note: "Too much — one extra sound" },
  { code: "2",  required: "Clear (bell)",   actual: "Horn instead of bell",
    note: "Completely wrong sound" },
  { code: "3",  required: "Clear (bell)",   actual: "No indication at all",
    note: "Total silence when bell was expected" },
  { code: "4",  required: "Warning (horn)", actual: "Bell and horn — got both sounds",
    note: "Too much — mirrors code 1 but for warning" },
  { code: "5",  required: "Warning (horn)", actual: "Bell instead of horn",
    note: "Completely wrong sound — mirrors code 2" },
  { code: "6",  required: "Warning (horn)", actual: "Brakes applied but no horn sounded",
    note: "Brake demand fired without the audible warning" },
  { code: "7",  required: "Warning (horn)", actual: "No indication at all",
    note: "Total silence when horn was expected — mirrors code 3" },
  { code: "7a", required: "Warning (horn)", actual: "Sunflower indicator did not change to yellow and black after warning",
    note: "Not a fault if it occurs after cancelling AWS when setting a cab into service" },
  { code: "8",  required: "Warning (horn)", actual: "Horn sounded only — no visual change",
    note: "Partial indication — sound without visual confirmation" },
  { code: "9",  required: "Warning (horn)", actual: "Bell sounded — completely wrong sound for a warning",
    note: "Bell fired when horn was expected" },
  { code: "10", required: "Warning (horn)", actual: "Unable to cancel the AWS indication",
    note: "Acknowledgement button has no effect" }
];
