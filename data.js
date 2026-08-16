// nyc-standup — open mic data (clean-room authored; objective fields only)
// Schema: stable id · single-fact entries · per-entry verification status
// verification.status: "verified" (checked on last_verified date) | "call-ahead" (confirm before going)
// All times are US Eastern.

const MICS = [
  {
    id: "laughing-buddha-buddha-room",
    name: "Laughing Buddha — The Buddha Room",
    venue: "410 8th Ave, 2nd Fl",
    area: "Chelsea / Penn Station",
    borough: "Manhattan",
    sessions: [
      { day: "Mon", time: "18:30" },
      { day: "Mon", time: "20:00" },
      { day: "Tue", time: "17:30" },
      { day: "Thu", time: "18:30" },
      { day: "Sat", time: "17:00" },
      { day: "Sun", time: "19:00" }
    ],
    sessions_note: "Multiple mics most days — check the calendar for the full week.",
    signup: { method: "online", url: "https://www.laughingbuddhacomedy.com/mics", note: "Slots open online (TicketTailor) about a week ahead." },
    cost: { entry: "$5–6.50 online (+fee), $6–10 walk-in", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: [
      "Never a bringer — you don't need to bring an audience.",
      "Runs many mics per week, so slots are easier to get than most clubs."
    ],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "west-side-comedy-club-feedback-mic",
    name: "West Side Comedy Club — Open Mic (with feedback)",
    venue: "201 W 75th St (downstairs at Playa Betty's)",
    area: "Upper West Side",
    borough: "Manhattan",
    sessions: [
      { day: "Mon", time: "15:30" },
      { day: "Tue", time: "17:00" },
      { day: "Fri", time: "12:00" }
    ],
    signup: { method: "online", url: "https://westsidecomedyclub.com", note: null },
    cost: { entry: "$5", minimum: "No drink minimum" },
    set_length: "5 min + 2 min feedback",
    language: "English",
    beginner_notes: [
      "You get 2 minutes of structured feedback after your set — rare and great for new material.",
      "Daytime slots (Fri noon) tend to be lower pressure."
    ],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "soho-playhouse-lifeboat",
    name: "SoHo Playhouse — Lifeboat Mic",
    venue: "15 Vandam St",
    area: "SoHo",
    borough: "Manhattan",
    sessions: [{ day: "Sat", time: "15:00" }],
    signup: { method: "in-person", url: "https://sohoplayhouse.com", note: "Sign up in person." },
    cost: { entry: "Free", minimum: null },
    set_length: "5 min",
    language: "English",
    beginner_notes: [
      "Free.",
      "Women-priority / gender-inclusive room.",
      "Saturday afternoon — easy to try without rearranging your week."
    ],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "knockouts-the-stand",
    name: "Knockouts @ The Stand",
    venue: "116 E 16th St",
    area: "Gramercy / Union Square",
    borough: "Manhattan",
    sessions: [{ day: "Thu", time: "17:00" }],
    signup: { method: "online", url: "https://www.instagram.com/knockoutscomedy", note: "Sign-up posted via Instagram @knockoutscomedy." },
    cost: { entry: "$5 (includes one drink)", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Entry fee includes a drink — no surprise minimums."],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "nycc-midtown",
    name: "New York Comedy Club — Midtown Open Mic",
    venue: "241 E 24th St",
    area: "Kips Bay / Midtown East",
    borough: "Manhattan",
    sessions: [
      { day: "Mon", time: "17:00" },
      { day: "Fri", time: "16:00" }
    ],
    signup: { method: "in-person", url: "https://newyorkcomedyclub.com", note: "In-person sign-up. Arrive 20–30 min early — lists fill fast." },
    cost: { entry: "$5", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Real club stage; arrive early rather than exactly on time."],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "nycc-east-village",
    name: "New York Comedy Club — East Village Open Mic",
    venue: "85 E 4th St",
    area: "East Village",
    borough: "Manhattan",
    sessions: [
      { day: "Tue", time: "16:00" },
      { day: "Wed", time: "17:00" }
    ],
    signup: { method: "in-person", url: "https://newyorkcomedyclub.com", note: "In-person sign-up. Arrive 20–30 min early — lists fill fast." },
    cost: { entry: "$5", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Same system as the Midtown room — early arrival matters more than anything."],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "st-marks-comedy-club",
    name: "St. Marks Comedy Club — Open Mic",
    venue: "St. Marks Pl",
    area: "East Village",
    borough: "Manhattan",
    sessions: [{ day: "Wed", time: "17:00", note: "Doors 16:30" }],
    signup: { method: "online", url: "https://www.tixr.com", note: "Search “Laughing Buddha Open Mic” on Tixr." },
    cost: { entry: "~$5", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Audience tickets exist for this mic — there's usually a real (small) crowd, not just comics."],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "rodneys-ues",
    name: "Rodney's (formerly Dangerfield's) — Open Mic",
    venue: "1118 1st Ave",
    area: "Upper East Side",
    borough: "Manhattan",
    sessions: [
      { day: "Tue", time: "19:00" },
      { day: "Tue", time: "20:45" },
      { day: "Wed", time: "17:30" },
      { day: "Thu", time: "21:45", note: "Late-night slot" }
    ],
    signup: { method: "phone", phone: "(212) 256-0961", note: "Call to sign up; some slots run through Laughing Buddha online." },
    cost: { entry: "~$5", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Historic room (the old Dangerfield's). Phone sign-up is a little more friction but lists are less slammed."],
    verification: { method: "phone-only", last_verified: "2026-08-09", status: "call-ahead" }
  },
  {
    id: "fear-city-comedy",
    name: "The Fear City Comedy Club — Open Mic",
    venue: "17 Essex St",
    area: "Lower East Side / Chinatown",
    borough: "Manhattan",
    sessions: [{ day: "Sun", time: "Evening", note: "Mics most days; Sunday is the main night — check their calendar." }],
    signup: { method: "in-person", url: null, note: "Sign in 15 min before showtime. Capped at 16 comics." },
    cost: { entry: "$5", minimum: null },
    set_length: "Strict 5 min",
    language: "English",
    beginner_notes: [
      "House rules: strict 5 minutes and no notes on stage — know your set before you come.",
      "Cap of 16 means you'll actually get up if you're on the list."
    ],
    verification: { method: "web", last_verified: "2026-08-09", status: "verified" }
  },
  {
    id: "comedy-shop-bleecker",
    name: "Comedy Shop — Open Mic",
    venue: "167 Bleecker St",
    area: "Greenwich Village",
    borough: "Manhattan",
    sessions: [
      { day: "Daily", time: "16:00" },
      { day: "Daily", time: "18:00" }
    ],
    signup: { method: "online", phone: "(718) 986-9871", url: null, note: "Online sign-up; call to confirm the day's mics — the website calendar misses them." },
    cost: { entry: null, minimum: "2-item minimum in the room" },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Two mics a day means low stakes — if one list is full, another starts in two hours."],
    verification: { method: "phone-only", last_verified: "2026-08-09", status: "call-ahead" }
  },
  {
    id: "grisly-pear-midtown",
    name: "Grisly Pear — Midtown Open Mics",
    venue: "243 W 54th St",
    area: "Midtown West",
    borough: "Manhattan",
    sessions: [{ day: "Daily", time: "From 16:00", note: "Multiple mics daily — schedule lives in the Google Calendar embedded on their site." }],
    signup: { method: "online", url: "https://www.grislypear.com", note: null },
    cost: { entry: "~$5", minimum: "One-item minimum" },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["High volume of mics — a good place to get reps once you've done your first one or two."],
    verification: { method: "web", last_verified: "2026-08-09", status: "call-ahead" }
  },
  {
    id: "nycc-stamford-monday",
    name: "New York Comedy Club Stamford — Monday Night Mic & Pre-Game",
    venue: "230 Tresser Blvd",
    area: "Stamford",
    borough: "Stamford, CT",
    sessions: [
      { day: "Mon", time: "19:30", note: "Monday Night Mic" },
      { day: "Wed", time: "17:00", note: "Pre-Game Weekly Open Mic" }
    ],
    signup: { method: "online", url: "https://stamford.newyorkcomedyclub.com/open-mics-calendar", note: "Online sign-up, free, usually has open slots days ahead." },
    cost: { entry: "Free", minimum: "1 drink minimum" },
    set_length: "5 min",
    language: "English",
    beginner_notes: [
      "Free online sign-up with real availability — one of the easiest first mics to book anywhere near NYC.",
      "Metro-North accessible (Stamford station)."
    ],
    verification: { method: "in-person", last_verified: "2026-08-10", status: "verified" }
  }
];
