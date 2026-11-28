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
      { day: "Mon", time: "17:30", note: "1-hour mic" }
    ],
    sessions_note: "Only the Monday 5:30pm mic could be confirmed online. Other mics run through the club's registration system — check it for the full week.",
    signup: { method: "online", url: "https://www.laughingbuddhacomedy.com/mics", note: "Register up to a week ahead. Check-in starts 15 min before the mic; arrive before the start or you may lose your spot." },
    cost: { entry: "$7 online, $8 walk-in (Mon 5:30pm mic; other mics vary)", minimum: "One-item minimum" },
    set_length: "6 min (5.5 if the mic is full)",
    language: "English",
    beginner_notes: [
      "Never a bringer — you don't need to bring an audience.",
      "Runs many mics per week, so slots are easier to get than most clubs."
    ],
    verification: { method: "web", last_verified: "2026-11-26", status: "call-ahead" }
  },
  {
    id: "west-side-comedy-club-feedback-mic",
    name: "West Side Comedy Club — Open Mics (some with feedback)",
    venue: "201 W 75th St (downstairs at Playa Betty's)",
    area: "Upper West Side",
    borough: "Manhattan",
    sessions: [
      { day: "Mon", time: "12:30", note: "feedback mic" },
      { day: "Tue", time: "16:30" },
      { day: "Wed", time: "15:00" },
      { day: "Thu", time: "12:30", note: "10-minute mic" },
      { day: "Fri", time: "12:30", note: "10-minute feedback mic" },
      { day: "Sat", time: "15:00" }
    ],
    sessions_note: "Hosts and times rotate week to week — check the Open Mics page before you go.",
    signup: { method: "online", url: "https://www.westsidecomedyclub.com", phone: "(646) 973-1300", note: "Find “Open Mics” in the site menu — deep links break on their site. Register in advance; each mic is capped at 7–10 comics." },
    cost: { entry: "Shown at sign-up (not listed on the event pages)", minimum: "Two-item minimum (food or drink)" },
    set_length: "Varies by mic; some are 10-minute mics",
    language: "English",
    beginner_notes: [
      "Feedback mics (Mon and Fri) give you notes from the room after your set — rare and great for new material.",
      "Daytime slots tend to be lower pressure.",
      "Clean material is required at this mic — plan your set accordingly.",
      "Arrive on time and stay for the whole mic."
    ],
    verification: { method: "web", last_verified: "2026-11-26", status: "verified" }
  },
  {
    id: "soho-playhouse-lifeboat",
    name: "SoHo Playhouse — Lifeboat Mic",
    venue: "15 Vandam St",
    area: "SoHo",
    borough: "Manhattan",
    sessions: [{ day: "Sat", time: "15:00" }],
    signup: { method: "in-person", url: "https://sohoplayhouse.com", note: "Sign up in person at the mic — don't call the theater to sign up." },
    cost: { entry: "Free", minimum: null },
    set_length: "5 min (+2 min if you buy a drink)",
    language: "English",
    beginner_notes: [
      "Free.",
      "Women-priority / gender-inclusive room.",
      "Saturday afternoon — easy to try without rearranging your week."
    ],
    verification: { method: "web", last_verified: "2026-11-26", status: "verified" }
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
    set_length: "~5 min (not stated on the club site — confirm at sign-up)",
    language: "English",
    beginner_notes: ["Real club stage; arrive early rather than exactly on time."],
    verification: { method: "web", last_verified: "2026-11-26", status: "verified" }
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
    set_length: "~5 min (not stated on the club site — confirm at sign-up)",
    language: "English",
    beginner_notes: ["Same system as the Midtown room — early arrival matters more than anything."],
    verification: { method: "web", last_verified: "2026-11-26", status: "verified" }
  },
  {
    id: "fear-city-comedy",
    name: "The Fear City Comedy Club — Open Mic",
    venue: "17 Essex St",
    area: "Lower East Side / Chinatown",
    borough: "Manhattan",
    sessions: [
      { day: "Tue", time: "18:00 & 21:00/22:00" },
      { day: "Wed", time: "18:00 & 21:00/22:00" },
      { day: "Thu", time: "18:00 & 21:00/22:00" },
      { day: "Fri", time: "18:00 & 21:00/22:00" },
      { day: "Sat", time: "18:00 & 21:00/22:00" },
      { day: "Sun", time: "18:00 & 21:00/22:00" }
    ],
    sessions_note: "No mic on Mondays. Late mic is 9pm or 10pm depending on shows; the week's schedule is pinned on the club's Instagram every Monday.",
    signup: { method: "in-person", url: "https://www.thefearcitycomedyclub.com/open-mics", note: "Arrive early (their rule: if you're not 5 min early, you're late). Capped at 16 comics; order is random." },
    cost: { entry: "$5 cash", minimum: "Drink minimum not stated — ask at the door" },
    set_length: "Strict 5 min",
    language: "English",
    beginner_notes: [
      "House rules: strict 5 minutes and no notes on stage — know your set before you come.",
      "Cap of 16 means you'll actually get up if you're on the list.",
      "Sit in the seats around the stage and stay to the end — leaving early gets you banned from future mics."
    ],
    verification: { method: "web", last_verified: "2026-11-26", status: "call-ahead" }
  }
];
