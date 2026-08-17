// nyc-standup — open mic data (clean-room authored; objective fields only)
// Schema: stable id · single-fact entries · per-entry verification status
// verification.status: "verified" (signup path checked on last_verified date) | "call-ahead" (confirm before going)
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
    signup: { method: "online", url: "https://www.laughingbuddhacomedy.com/mics", note: "Slots open online about a week ahead." },
    cost: { entry: "$5–6.50 online (+fee), $6–10 walk-in", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: [
      "Never a bringer — you don't need to bring an audience.",
      "Runs many mics per week, so slots are easier to get than most clubs."
    ],
    verification: { method: "web", last_verified: "2026-08-16", status: "verified" }
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
    signup: { method: "online", url: "https://www.westsidecomedyclub.com", phone: "(646) 973-1300", note: "Find “Open Mics” in the site menu — deep links break on their site. Limited to 15 comics; register in advance." },
    cost: { entry: "$5", minimum: "No drink minimum" },
    set_length: "5 min + 2 min feedback",
    language: "English",
    beginner_notes: [
      "You get 2 minutes of structured feedback after your set — rare and great for new material.",
      "Daytime slots (Fri noon) tend to be lower pressure.",
      "Clean material is required at this mic — plan your set accordingly."
    ],
    verification: { method: "web", last_verified: "2026-08-16", status: "verified" }
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
    verification: { method: "web", last_verified: "2026-08-16", status: "verified" }
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
    signup: { method: "in-person", url: "https://newyorkcomedyclub.com/open-mics", note: "In-person sign-up. Arrive 20–30 min early — lists fill fast." },
    cost: { entry: "$5", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Real club stage; arrive early rather than exactly on time."],
    verification: { method: "web", last_verified: "2026-08-16", status: "verified" }
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
    signup: { method: "in-person", url: "https://newyorkcomedyclub.com/open-mics", note: "In-person sign-up. Arrive 20–30 min early — lists fill fast." },
    cost: { entry: "$5", minimum: null },
    set_length: "~5 min",
    language: "English",
    beginner_notes: ["Same system as the Midtown room — early arrival matters more than anything."],
    verification: { method: "web", last_verified: "2026-08-16", status: "verified" }
  },
  {
    id: "fear-city-comedy",
    name: "The Fear City Comedy Club — Open Mic",
    venue: "17 Essex St",
    area: "Lower East Side / Chinatown",
    borough: "Manhattan",
    sessions: [{ day: "Daily", time: "Varies", note: "Mics most days — check the calendar; Sunday evening is the main night." }],
    signup: { method: "in-person", url: "https://www.thefearcitycomedyclub.com/open-mics", note: "Sign in 15 min before showtime. Capped at 16 comics." },
    cost: { entry: "$5", minimum: "No drink minimum" },
    set_length: "Strict 5 min",
    language: "English",
    beginner_notes: [
      "House rules: strict 5 minutes and no notes on stage — know your set before you come.",
      "Cap of 16 means you'll actually get up if you're on the list."
    ],
    verification: { method: "web", last_verified: "2026-08-16", status: "verified" }
  }
];
