const SETTINGS = {
  adminEmail: "admin@ruh.ac.lk",
  adminPassword: "Ruhuna@2026",
  adminName: "Portal Admin",

  logo: "Resource/images/logo.png",

  /* ---- HOME PAGE BIG RECTANGLE: the photos that change -------------------
     Each { } line below is ONE photo. They play one after another.
       image     the file name inside  Resource/images/bigthing/   (e.g. "3.jpg")
       alt       a short description of the photo
       position  (optional) which part stays visible when the photo is cropped:
                 "50% 50%" = centre,  "50% 20%" = a bit towards the top
     TO ADD A PHOTO    1) put the file in Resource/images/bigthing/
                       2) copy one { } line, paste it in the list, change image + alt
     TO REMOVE A PHOTO delete its { } line (the file can stay in the folder)
     TO CHANGE ORDER   move the lines; the first one shows first
     Photos of about 1920 pixels wide look sharpest. Small photos look blurry.   */
  heroFolder: "Resource/images/bigthing/",
  heroSeconds: 4, // how many seconds each photo stays
  heroSlides: [
    { image: "3.jpg", alt: "Aerial view of the Ruhuna campus beside the sea", position: "50% 45%" },
    { image: "4.jpg", alt: "Campus building across the lake", position: "50% 55%" },
    { image: "2.jpeg", alt: "Main entrance", position: "50% 50%" },
    { image: "1.jpeg", alt: "Aerial view of the main campus building", position: "50% 50%" },
    // { image: "5.jpg", alt: "Describe your new photo", position: "50% 50%" },   <- copy this line for a new photo
  ],

  /* ---- Photo folders -------------------------------------------------
     In the NEWS and ANNOUNCEMENTS lists below you only write the file
     NAME (example: "sports.jpg"). The site adds the folder in front.   */
  newsFolder: "Resource/images/news/",
  announcementFolder: "Resource/images/announcement/",

  /* ---- Loading screen -------------------------------------------------
     How long the loading screen stays (milliseconds). 1400 = 1.4 seconds.
     The TEXT and LOGO of the loading screen are edited in index.html.   */
  loaderMs: 1400,

  /* ---- Colours ---------------------------------------------------------
     An admin can also change these live (Admin panel > Look).
     That choice is saved only in that browser. To make a colour the
     default for EVERYONE, paste the 3 colours here.                    */
  theme: { deep: "#3a1a0c", main: "#8a4b12", accent: "#f2b705" },

  /* ---- Light / dark mode ----------------------------------------------
     "light", "dark", or "auto" (follow the visitor's phone/computer).
     Visitors can switch with the sun/moon button in the top bar.        */
  defaultMode: "light",

  /* ---- OPTIONAL FEATURES: ON / OFF SWITCHES ------------------------------
     Don't like one? Change true to false and it disappears.
     (You can also delete its block in index.html — each one is marked
      "OPTIONAL FEATURE".)                                                    */
  features: {
    modeButton: true, // sun/moon button in the top bar
    ticker: true, // scrolling strip of urgent notices under the hero
    quickLinks: true, // 4 big buttons: Student portal, Library, ...
    search: true, // search boxes on the News and Announcements pages
    scrollTools: true, // thin progress line on top + back-to-top button
    footerMarquee: true, // scrolling text strip in the footer (like GRAVITY)
    heroSlideshow: true, // auto-play + progress bars for the big Home photos (false = shows only the first photo)
  },
};

/* The pages of the site. If you add a page in index.html, add its name here. */
const PAGES = ["home", "news", "announcements", "timetables", "results", "contact", "about"];

/* =======================================================================
   SECTION 2 — NEWS LIST
   -----------------------------------------------------------------------
   To add a news item, copy ONE block { ... }, paste it at the TOP of the
   list and change the text. Don't forget the comma after the closing }

     id        a number nobody else has used yet
     category  Research / Campus Life / Academics / Events / Achievements
               (or make up your own — a filter button appears automatically)
     title     the headline
     text      the full story (use \n\n for a blank line between paragraphs)
     date      "YYYY-MM-DD"
     author    who wrote it
     image     file name inside  Resource/images/news/   ("" = no photo)

   HOW TO LINK A PHOTO TO A NEWS ITEM
     1) Copy the photo into the folder  Resource/images/news/
        (small letters, no spaces, e.g.  sports-meet.jpg)
     2) In the news block write only the file name:   image: "sports-meet.jpg",
     That's all. The same photo is used on the card, in the Home slider and in
     the pop-up when somebody opens the story. If the name is wrong, or the file
     is missing, the card just shows a coloured box (nothing breaks).
   ======================================================================= */
const NEWS = [
  {
    id: 1,
    category: "Research",
    title: "Ruhuna researchers launch coastal ecosystem study along the southern shoreline",
    text: "A multi-faculty team has begun a long-term study of the southern coast, combining marine biology, geography and engineering to track erosion and reef health.\n\nStudents from several faculties will join field surveys through the coming semester.",
    date: "2026-11-13",
    author: "Media Unit",
    image: "news1.jpg",
  },
  {
    id: 2,
    category: "Campus Life",
    title: "Annual Faculty Sports Meet draws record participation at Wellamadama",
    text: "Hundreds of undergraduates competed across track, field and team events. Faculty teams celebrated with a closing ceremony on the main grounds.",
    date: "2026-11-11",
    author: "Sports Council",
    image: "news2.jpg",
  },
  {
    id: 3,
    category: "Academics",
    title: "New semester timetables released for all undergraduate faculties",
    text: "Students can now check lecture schedules through their faculty offices. Please confirm your registration details before the first week ends.",
    date: "2026-11-09",
    author: "Academic Branch",
    image: "news3.jpg",
  },
  {
    id: 4,
    category: "Events",
    title: "Cultural evening celebrates the heritage of the Ruhuna region",
    text: "Music, dance and drama performances by student societies filled the auditorium. Proceeds support the student welfare fund.",
    date: "2026-11-06",
    author: "Cultural Society",
    image: "news4.jpg",
  },
  {
    id: 5,
    category: "Research",
    title: "Library extends digital resources access for postgraduate researchers",
    text: "The university library has added new journal subscriptions and extended study-room hours to support thesis writing.",
    date: "2026-11-02",
    author: "Library",
    image: "news5.jpg",
  },
  {
    id: 6,
    category: "Achievements",
    title: "Ruhuna students place among finalists in national innovation challenge",
    text: "A student team presented a low-cost water-quality sensor and advanced to the national finals, with mentorship from academic staff.",
    date: "2026-10-30",
    author: "Media Unit",
    image: "news6.jpg",
  },
];

/* =======================================================================
   SECTION 3 — ANNOUNCEMENTS LIST
   -----------------------------------------------------------------------
   Same idea as the news list. Copy one block, paste on top, edit.

     priority  "urgent" (red)  /  "important" (gold)  /  "general" (grey)
               urgent + important ones also run in the scrolling ticker
     image     file name inside  Resource/images/announcement/  ("" = no photo)
   ======================================================================= */
const ANNOUNCEMENTS = [
  {
    id: 1,
    priority: "urgent",
    title: "Library closed for system maintenance this Saturday",
    text: "Main library services will be unavailable from 8 a.m. to 4 p.m. Online catalogue remains accessible.",
    date: "2026-11-14",
    author: "Library",
    image: "", // put a file name from Resource/images/announcement/ here, e.g. "library.jpg"
  },
  {
    id: 2,
    priority: "important",
    title: "Registration deadline for the next semester",
    text: "All continuing students must complete registration through their faculty office before the deadline shown on the notice board.",
    date: "2026-11-12",
    author: "Registrar",
    image: "", // same: a file name from Resource/images/announcement/
  },
  {
    id: 3,
    priority: "general",
    title: "Student counselling hours extended",
    text: "Counselling services are now open on weekday afternoons. Walk-ins are welcome.",
    date: "2026-11-08",
    author: "Student Welfare",
    image: "",
  },
  {
    id: 4,
    priority: "important",
    title: "Scholarship applications now open",
    text: "Eligible students can collect application forms from the Welfare Branch. Check your faculty notice board for requirements.",
    date: "2026-11-05",
    author: "Student Welfare",
    image: "",
  },
  {
    id: 5,
    priority: "general",
    title: "Convocation rehearsal schedule",
    text: "Graduands should attend the rehearsal at the main auditorium. Dress code details are available at the Examination Branch.",
    date: "2026-11-03",
    author: "Examination Branch",
    image: "",
  },
];

/* =======================================================================
   SECTION 4 — TIMETABLE LIST   (this came from the old timetables.html)
   -----------------------------------------------------------------------
   Two lists: LECTURES (repeat every week) and EXAMS (one date each).
   To add one, copy ONE line, paste it at the bottom of its list, and
   change the words. Don't forget the comma at the end of the line.

   LECTURE LINE:
     LEC( day, start, end, code, title, kind, room, lecturer, faculty, year, cover )
       day       1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday
       start/end "08:00" style, 24-hour clock
       kind      "Lecture", "Practical" or "Tutorial"
       faculty   a number from the FACULTIES list just below (0 = Agriculture ...)
       year      1, 2, 3 or 4
       cover     (optional) what this session covers

   EXAM LINE:
     EXM( date, start, end, code, title, venue, faculty, year, examiner, cover )
       date      "2026-12-14" style (year-month-day).  Exams in the past are hidden.
       examiner  (optional) name of the examiner / lecturer
       cover     (optional) what the exam covers

   NOTE ABOUT THE SAMPLE EXAM DATES:
     soon(3) means "3 days from today", so the demo always has upcoming exams.
     For real exams replace soon(3) with the real date, like "2026-12-14".
   ======================================================================= */

// The faculties (the number in each line above is the position in this list: first = 0)
const FACULTIES = [
  "Agriculture", // 0
  "Engineering", // 1
  "Fisheries & Marine Sciences", // 2
  "Humanities & Social Sciences", // 3
  "Management & Finance", // 4
  "Medicine", // 5
  "Science", // 6
  "Technology", // 7
];
// Short names for the filter buttons (same order as FACULTIES)
const FACULTY_SHORT = ["Agriculture", "Engineering", "Fisheries", "Humanities", "Management", "Medicine", "Science", "Technology"];
const DAY_NAMES = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const DAY_SHORT = ["", "Mon", "Tue", "Wed", "Thu", "Fri"];

/* ---- small helpers used by the lines below (you don't need to edit these) ---- */
// today + n days, written as "YYYY-MM-DD"
const isoDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const soon = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return isoDate(d);
};
// makes a safe id from some words, e.g. "s-1-0800-AGR1103"
const ttId = (...parts) => parts.join("-").replace(/[^a-z0-9-]/gi, "");
// turns one LEC(...) / EXM(...) line into an object
const LEC = (day, start, end, code, title, kind, room, who, fac, yr, cover = "") => ({
  id: ttId("s", day, start, code), day, start, end, code, title, kind, room, who, fac, yr, cover,
});
const EXM = (date, start, end, code, title, room, fac, yr, who = "", cover = "") => ({
  id: ttId("s", "e", start, code), date, start, end, code, title, room, fac, yr, who, cover,
});

/* ---------------------------- LECTURES ---------------------------------
   Order doesn't matter: the site sorts them by day and time.              */
const LECTURES = [
  // ---- Monday ----
  LEC(1, "08:00", "10:00", "AGR 1103", "Crop Science Basics", "Lecture", "Hall A2", "Dr. S. Fernando", 0, 1, "Plant growth, soil and climate basics."),
  LEC(1, "08:00", "10:00", "MGT 1101", "Principles of Management", "Lecture", "Hall M1", "Dr. W. Jayasuriya", 4, 1, "Planning, organising and leading teams."),
  LEC(1, "10:30", "12:30", "ENG 2201", "Engineering Mathematics II", "Lecture", "Lecture Hall 3", "Prof. K. Silva", 1, 2, "Differential equations and Laplace transforms."),
  LEC(1, "10:30", "12:30", "ENG 4402", "Project Management", "Lecture", "Lecture Hall 4", "Eng. J. Pathirana", 1, 4, "Scheduling, risk and cost control for projects."),
  LEC(1, "13:30", "16:30", "FMS 1102", "Marine Biology Lab", "Practical", "Marine Lab", "Dr. N. Jayawardena", 2, 1, "Identifying coastal organisms and sampling methods."),
  LEC(1, "14:00", "16:00", "SCI 1101", "Calculus I", "Lecture", "Science Hall 1", "Dr. P. Wijesinghe", 6, 1, "Limits, derivatives and their applications."),
  // ---- Tuesday ----
  LEC(2, "09:00", "11:00", "HSS 1201", "Introduction to Sociology", "Lecture", "Arts Theatre", "Ms. R. Weerasinghe", 3, 1, "Society, culture and social structure."),
  LEC(2, "09:00", "11:00", "MED 1102", "Human Anatomy", "Lecture", "Anatomy Theatre", "Prof. S. Liyanage", 5, 1, "Bones, muscles and the nervous system."),
  LEC(2, "11:00", "12:00", "AGR 2104", "Soil Science Tutorial", "Tutorial", "Room B5", "Dr. P. Gunasekara", 0, 2, "Soil testing problems and discussion."),
  LEC(2, "13:30", "15:30", "ENG 1105", "Engineering Drawing", "Practical", "Drawing Studio", "Eng. T. Rajapaksha", 1, 1, "Technical sketching and CAD basics."),
  LEC(2, "14:00", "16:00", "SCI 3302", "Quantum Physics", "Lecture", "Science Hall 2", "Prof. M. Gunawardena", 6, 3, "Wave functions and the Schrödinger equation."),
  // ---- Wednesday ----
  LEC(3, "08:30", "10:30", "ENG 3302", "Structural Analysis", "Lecture", "Lecture Hall 1", "Dr. M. Perera", 1, 3, "Beams, frames and truss analysis."),
  LEC(3, "08:30", "10:30", "MED 2205", "Physiology Tutorial", "Tutorial", "Room M3", "Dr. K. Rathnayake", 5, 2, "Case discussions on cardiovascular physiology."),
  LEC(3, "10:30", "12:30", "FMS 2203", "Fisheries Management", "Lecture", "Hall F1", "Prof. D. Amarasinghe", 2, 2, "Stock assessment and sustainable catch limits."),
  LEC(3, "13:00", "16:00", "SCI 2104", "Organic Chemistry Lab", "Practical", "Chemistry Lab 2", "Dr. B. Madushani", 6, 2, "Synthesis and purification experiments."),
  LEC(3, "14:00", "16:00", "HSS 2105", "Public Policy", "Lecture", "Arts Theatre", "Dr. A. Bandara", 3, 2, "How policy is made, tested and reviewed."),
  // ---- Thursday ----
  LEC(4, "08:00", "10:00", "AGR 3201", "Animal Nutrition", "Lecture", "Hall A1", "Prof. L. Wickramasinghe", 0, 3, "Feed formulation for cattle and poultry."),
  LEC(4, "09:00", "11:00", "TEC 2201", "Web Application Development", "Lecture", "Computer Lab 1", "Mr. D. Karunaratne", 7, 2, "HTML, CSS, JavaScript and simple back-ends."),
  LEC(4, "10:30", "12:30", "ENG 1102", "Circuit Theory", "Lecture", "Lecture Hall 2", "Dr. C. Dissanayake", 1, 1, "Ohm's law, nodal and mesh analysis."),
  LEC(4, "10:30", "12:30", "SCI 4401", "Research Seminar", "Tutorial", "Seminar Room", "Prof. M. Gunawardena", 6, 4, "Presenting and discussing final-year research."),
  LEC(4, "13:30", "15:30", "HSS 3102", "Research Methods", "Tutorial", "Room C3", "Ms. I. Herath", 3, 3, "Designing surveys and interviews."),
  LEC(4, "13:30", "15:30", "MGT 2103", "Marketing Basics", "Tutorial", "Room M5", "Ms. T. Fonseka", 4, 2, "Segmentation, targeting and positioning."),
  // ---- Friday ----
  LEC(5, "08:30", "10:30", "FMS 3101", "Coastal Ecology", "Lecture", "Hall F2", "Dr. S. Kumara", 2, 3, "Mangroves, reefs and shoreline change."),
  LEC(5, "09:00", "11:00", "MGT 3202", "Financial Accounting", "Lecture", "Hall M2", "Ms. N. Abeysekara", 4, 3, "Financial statements and ratio analysis."),
  LEC(5, "10:30", "12:30", "AGR 1105", "Farm Practical", "Practical", "University Farm", "Mr. H. Senanayake", 0, 1, "Seed beds, planting and irrigation."),
  LEC(5, "13:00", "15:00", "ENG 2105", "Thermodynamics", "Lecture", "Lecture Hall 3", "Dr. R. Ekanayake", 1, 2, "Laws of thermodynamics and heat engines."),
  LEC(5, "13:30", "15:30", "TEC 1103", "Introduction to Programming", "Practical", "Computer Lab 2", "Ms. S. Dias", 7, 1, "Variables, loops and functions."),
  // ---- ADD YOUR NEW LECTURE LINES ABOVE THIS COMMENT ----
];

/* ------------------------------ EXAMS ---------------------------------- */
const EXAMS = [
  EXM(soon(3), "09:00", "12:00", "ENG 2201", "Engineering Mathematics II", "Main Exam Hall", 1, 2, "Prof. K. Silva", "Units 1 to 5"),
  EXM(soon(5), "09:00", "11:00", "HSS 1201", "Introduction to Sociology", "Arts Theatre", 3, 1, "Ms. R. Weerasinghe", "Chapters 1 to 6"),
  EXM(soon(7), "10:00", "12:00", "MED 1102", "Human Anatomy", "Anatomy Theatre", 5, 1, "Prof. S. Liyanage", "Musculoskeletal and nervous systems"),
  EXM(soon(9), "13:00", "16:00", "AGR 1103", "Crop Science Basics", "Hall A2", 0, 1, "Dr. S. Fernando", "Units 1 to 4"),
  EXM(soon(12), "09:00", "12:00", "FMS 2203", "Fisheries Management", "Hall F1", 2, 2, "Prof. D. Amarasinghe", "Stock assessment and policy"),
  EXM(soon(14), "13:00", "15:00", "SCI 1101", "Calculus I", "Science Hall 1", 6, 1, "Dr. P. Wijesinghe", "Limits and derivatives"),
  EXM(soon(16), "09:00", "12:00", "ENG 3302", "Structural Analysis", "Main Exam Hall", 1, 3, "Dr. M. Perera", "Beams and frames"),
  EXM(soon(19), "09:00", "11:00", "MGT 3202", "Financial Accounting", "Hall M2", 4, 3, "Ms. N. Abeysekara", "Statements and ratios"),
  EXM(soon(21), "13:00", "15:00", "HSS 3102", "Research Methods", "Arts Theatre", 3, 3, "Ms. I. Herath", "Survey design"),
  EXM(soon(24), "09:00", "12:00", "AGR 3201", "Animal Nutrition", "Hall A1", 0, 3, "Prof. L. Wickramasinghe", "Feed formulation"),
  EXM(soon(26), "09:00", "11:00", "TEC 2201", "Web Application Development", "Computer Lab 1", 7, 2, "Mr. D. Karunaratne", "HTML, CSS and JavaScript"),
  EXM(soon(30), "09:00", "12:00", "SCI 4401", "Research Seminar", "Seminar Room", 6, 4, "Prof. M. Gunawardena", "Presentation and viva"),
  // ---- ADD YOUR NEW EXAM LINES ABOVE THIS COMMENT ----
];

/* =======================================================================
   SECTION 5 — EXAM RESULTS LIST
   -----------------------------------------------------------------------
   One STU(...) line per student per semester. A visitor types an index
   number on the Results page and sees these marks.

   STUDENT LINE:
     STU( index, name, faculty, year, semester, [ course, course, ... ] )
       index     the student's index number, e.g. "SC/2022/014"
       faculty   a number from the FACULTIES list (SECTION 4): 0 = Agriculture ...
       year      1, 2, 3 or 4
       semester  1 or 2
     COURSE (one per subject, inside the [ ] ):
       [ "code", "title", credits, marks ]
       e.g.  ["SCI 3101", "Linear Algebra", 3, 82]
       marks is a number from 0 to 100. The GRADE and the GPA are worked out
       automatically from the GRADES table below, so you never type a grade.

   !! ALL STUDENTS BELOW ARE MADE-UP SAMPLE DATA FOR THE DEMO !!
   !! A real site must NOT put real students' marks in a file that anyone can
      read. Real results need a server + a student login. This demo only
      shows how the page works.
   ======================================================================= */

// Grade table: marks from this number up get this grade and grade points.
// (Edit the numbers to match the university's real scale.)  Order: highest first.
const GRADES = [
  [85, "A+", 4.0],
  [75, "A", 4.0],
  [70, "A-", 3.7],
  [65, "B+", 3.3],
  [60, "B", 3.0],
  [55, "B-", 2.7],
  [50, "C+", 2.3],
  [45, "C", 2.0],
  [40, "C-", 1.7],
  [35, "D+", 1.3],
  [30, "D", 1.0],
  [0, "E", 0.0],
];
const PASS_MARK = 40; // marks below this are a fail ("repeat")

// turns one STU(...) line into an object (you don't need to edit this)
const STU = (index, name, fac, year, sem, courses) => ({
  index,
  name,
  fac,
  year,
  sem,
  courses: courses.map(([code, title, credits, marks]) => ({ code, title, credits, marks })),
});

const RESULTS = [
  STU("SC/2022/014", "Nimali Perera", 6, 3, 1, [
    ["SCI 3101", "Linear Algebra", 3, 82],
    ["SCI 3102", "Quantum Physics", 3, 71],
    ["SCI 3103", "Organic Chemistry", 3, 64],
    ["SCI 3104", "Statistics", 2, 58],
    ["SCI 3105", "Research Methods", 2, 90],
  ]),
  STU("EN/2021/087", "Kasun Fernando", 1, 4, 1, [
    ["ENG 4101", "Structural Design", 3, 68],
    ["ENG 4102", "Project Management", 2, 76],
    ["ENG 4103", "Thermodynamics", 3, 52],
    ["ENG 4104", "Control Systems", 3, 38],
    ["ENG 4105", "Final Year Project", 4, 74],
  ]),
  STU("AG/2023/032", "Tharushi Silva", 0, 2, 2, [
    ["AGR 2201", "Soil Science", 3, 79],
    ["AGR 2202", "Crop Science", 3, 85],
    ["AGR 2203", "Animal Nutrition", 2, 66],
    ["AGR 2204", "Farm Practical", 2, 91],
  ]),
  STU("MG/2022/051", "Dilan Jayasuriya", 4, 3, 1, [
    ["MGT 3101", "Financial Accounting", 3, 73],
    ["MGT 3102", "Marketing Management", 3, 61],
    ["MGT 3103", "Business Law", 2, 47],
    ["MGT 3104", "Entrepreneurship", 2, 88],
  ]),
  STU("MD/2023/021", "Ishara Wickramasinghe", 5, 2, 1, [
    ["MED 2101", "Physiology", 4, 77],
    ["MED 2102", "Biochemistry", 4, 69],
    ["MED 2103", "Anatomy", 4, 81],
  ]),
  // ---- ADD YOUR NEW STU(...) LINES ABOVE THIS COMMENT ----
];

/* =======================================================================
   SECTION 6 — ENGINE
   Everything below makes the site work. You normally don't need to edit it.
   Labels you can search for (Ctrl+F):
     [helpers]  [features on/off]  [saved data]  [colours]  [light/dark mode]
     [smooth scroll]  [pop-ups]  [login]  [admin panel]  [news + notices]
     [ticker]  [search]  [hero slideshow]  [timetable]  [results]  [pages]
     [scroll tools]  [loading screen]  [start]
   ======================================================================= */

/* ---------- [helpers] small tools used everywhere ---------- */
const $ = (selector, root = document) => root.querySelector(selector); // find ONE element
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)]; // find ALL elements

// Makes text safe to put inside HTML (stops people injecting code).
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

// "2026-11-13" -> "13 Nov 2026"
const fmt = (d) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Saves small things in the visitor's browser (localStorage).
const LS = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  },
};

// Removes duplicates (same id) and sorts newest first.
const uniq = (list) => {
  const seen = new Set();
  return list.filter((x) => !seen.has(String(x.id)) && seen.add(String(x.id)));
};
const sortNew = (list) =>
  [...list].sort(
    (a, b) => String(b.date).localeCompare(String(a.date)) || Number(b.id) - Number(a.id),
  );

// "sports.jpg" -> "Resource/images/news/sports.jpg"  (full links are left alone)
const photo = (file, folder) =>
  !file ? "" : /^(https?:|data:|\/|Resource\/)/i.test(file) ? file : folder + file;
const imgTag = (src) => (src ? `<img class="ph" src="${esc(src)}" alt="" loading="lazy">` : "");

// Little icons
const X_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const CREST =
  '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" style="fill:var(--brand-deep)"/><circle cx="32" cy="32" r="25" fill="none" style="stroke:var(--brand-light)" stroke-width="2"/><path d="M16 40c5-3 11-3 16 0 5-3 11-3 16 0V24c-5-3-11-3-16 0-5-3-11-3-16 0z" style="fill:var(--brand-light)"/><path d="M32 24v16" style="stroke:var(--brand-deep)" stroke-width="2"/><circle cx="32" cy="16" r="3" style="fill:var(--brand-light)"/></svg>';

// Small message at the bottom of the screen.
function toast(message) {
  const t = $("#toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), 2800);
}

// Scrambles a password before saving it (demo level only).
async function scramble(text) {
  try {
    const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    return btoa(unescape(encodeURIComponent(text)));
  }
}

// If a photo file is missing, hide it quietly (a coloured box shows instead).
document.addEventListener(
  "error",
  (e) => {
    const el = e.target;
    if (el && el.tagName === "IMG") {
      if (el.classList.contains("slide")) {
        el.remove(); // a missing big-rectangle photo is dropped from the slideshow
        return heroSync();
      }
      const thumb = el.closest(".athumb");
      thumb ? thumb.remove() : (el.style.display = "none");
    }
  },
  true,
);

// Puts the logo (with a small crest underneath as a backup) everywhere [data-logo] appears.
function paintLogos() {
  $$("[data-logo]").forEach((el) => {
    if (el.dataset.done) return;
    el.dataset.done = 1;
    el.innerHTML = CREST + `<img src="${esc(SETTINGS.logo)}" alt="University of Ruhuna logo">`;
  });
}

/* ---------- [features on/off] ----------
   Anything in index.html marked data-feature="xxx" is removed when
   SETTINGS.features.xxx is false. */
$$("[data-feature]").forEach((el) => {
  if (!SETTINGS.features[el.dataset.feature]) el.remove();
});

/* ---------- [footer scrolling text] ----------
   You write the phrases ONCE in index.html. This repeats them until the strip is
   wider than the screen, so the scrolling loop never shows an empty gap. */
$$(".mq-track").forEach((track) => {
  const set = track.firstElementChild;
  let sets = 1;
  while (track.scrollWidth < innerWidth * 2 && sets < 16) {
    track.append(set.cloneNode(true));
    sets++;
  }
  if (sets % 2) track.append(set.cloneNode(true)); // the loop needs an even number of copies
});

/* ---------- [saved data] ----------
   Things an admin adds in the browser are kept separately from the NEWS /
   ANNOUNCEMENTS lists above, so editing those lists in code always works. */
const store = {
  addedNews: LS.get("ruh_added_news", []),
  addedAnn: LS.get("ruh_added_ann", []),
  goneNews: LS.get("ruh_gone_news", []), // ids hidden by an admin
  goneAnn: LS.get("ruh_gone_ann", []),
  users: LS.get("ruh_users", []),
  session: LS.get("ruh_session", null), // who is signed in
  theme: LS.get("ruh_theme", null),
};
function persist() {
  LS.set("ruh_added_news", store.addedNews);
  LS.set("ruh_added_ann", store.addedAnn);
  LS.set("ruh_gone_news", store.goneNews);
  LS.set("ruh_gone_ann", store.goneAnn);
  LS.set("ruh_users", store.users);
  LS.set("ruh_session", store.session);
}
const isHidden = (list, id) => list.map(String).includes(String(id));
const allNews = () =>
  sortNew(uniq([...NEWS, ...store.addedNews]).filter((n) => !isHidden(store.goneNews, n.id)));
const allAnn = () =>
  sortNew(
    uniq([...ANNOUNCEMENTS, ...store.addedAnn]).filter((a) => !isHidden(store.goneAnn, a.id)),
  );
const isAdmin = () => store.session && store.session.role === "admin";

/* ---------- [colours] ---------- */

// Ready-made colour styles shown in Admin panel > Look.
const PRESETS = [
  { name: "Ruhuna", deep: "#3a1a0c", main: "#8a4b12", accent: "#f2b705" },
  { name: "Ocean", deep: "#0f2f63", main: "#2563c9", accent: "#5790e6" },
  { name: "Forest", deep: "#123524", main: "#2e7d4f", accent: "#c2e029" },
  { name: "Maroon", deep: "#4a0f1c", main: "#9b2335", accent: "#f4a259" },
  { name: "Violet", deep: "#24104a", main: "#6a3fc4", accent: "#f0a6ff" },
  { name: "Teal", deep: "#0b3b3c", main: "#0f8b8d", accent: "#f2c14e" },
];

// Colour maths: hex "#8a4b12" <-> hue/saturation/lightness.
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return { h, s, l };
}
function hslToHex(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const channel = (n) => {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * c)
      .toString(16)
      .padStart(2, "0");
  };
  return "#" + channel(0) + channel(8) + channel(4);
}

// From ONE colour the visitor picks, make the 3 theme colours:
// a dark shade, the colour itself (not too light), and a bright accent.
function paletteFrom(hex) {
  const { h, s, l } = hexToHsl(hex);
  return {
    deep: hslToHex(h, Math.min(s, 0.75) * 0.9, 0.14),
    main: hslToHex(h, s, Math.min(l, 0.42)),
    accent: hslToHex((h + 18) % 360, Math.max(0.75, Math.min(s * 1.1, 0.95)), 0.58),
  };
}

let theme = { ...SETTINGS.theme, ...(store.theme || {}) };
function applyTheme(t) {
  const style = document.documentElement.style;
  style.setProperty("--brand-deep", t.deep);
  style.setProperty("--brand", t.main);
  style.setProperty("--brand-light", t.accent);
}
function setTheme(t) {
  theme = t;
  store.theme = t;
  LS.set("ruh_theme", t);
  applyTheme(t);
}
applyTheme(theme);

/* ---------- [light/dark mode] ---------- */
let mode = LS.get("ruh_mode", SETTINGS.defaultMode); // "light" | "dark" | "auto"
const systemDark = matchMedia("(prefers-color-scheme: dark)");
function applyMode() {
  const actual = mode === "auto" ? (systemDark.matches ? "dark" : "light") : mode;
  document.documentElement.dataset.mode = actual; // the CSS reacts to this
}
function setMode(m) {
  mode = m;
  LS.set("ruh_mode", m);
  applyMode();
}
systemDark.addEventListener("change", () => mode === "auto" && applyMode());
applyMode();
// The sun/moon button flips between light and dark.
$("#modeBtn")?.addEventListener("click", () =>
  setMode(document.documentElement.dataset.mode === "dark" ? "light" : "dark"),
);

/* ---------- [smooth scroll] (optional, loads from the internet) ---------- */
let lenis = null;
let loaderActive = true;
function lock() {
  document.documentElement.classList.add("locked");
  lenis && lenis.stop();
}
function unlock() {
  document.documentElement.classList.remove("locked");
  lenis && lenis.start();
}
function scrollToTop(instant) {
  if (lenis) lenis.scrollTo(0, { immediate: !!instant });
  else scrollTo({ top: 0, behavior: instant ? "auto" : "smooth" });
}
(async () => {
  try {
    const { default: Lenis } = await import("https://cdn.jsdelivr.net/npm/lenis@1.1.18/+esm");
    lenis = new Lenis({ smoothWheel: true });
    const loop = (t) => {
      lenis.raf(t);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    if (loaderActive || document.documentElement.classList.contains("locked")) lenis.stop();
  } catch {} // no internet? normal scrolling is used instead
})();

// Sizes scale up on very wide screens.
function fit() {
  const reduction = ((1920 - innerWidth) / 1920) * 100 * 0.6666;
  const size = 16 - (16 * reduction) / 100;
  if (size > 16) document.documentElement.style.fontSize = size + "px";
  else document.documentElement.style.removeProperty("font-size");
}
addEventListener("resize", fit);
fit();

/* ---------- [pop-ups] glass windows and the right side menu ---------- */
function openM(id) {
  $("#" + id).classList.add("open");
  lock();
}
function closeM(id) {
  $("#" + id).classList.remove("open");
  if (!$(".modal.open") && !$("#drawer.open")) unlock();
}
function openDrawer() {
  renderDrawerFoot();
  $("#drawer").classList.add("open");
  lock();
}
function closeDrawer() {
  $("#drawer").classList.remove("open");
  if (!$(".modal.open")) unlock();
}
document.addEventListener("click", (e) => {
  const closer = e.target.closest("[data-close]");
  if (closer) closer.dataset.close === "drawer" ? closeDrawer() : closeM(closer.dataset.close);
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $$(".modal.open").forEach((m) => closeM(m.id));
    closeDrawer();
  }
});
$("#burger").onclick = openDrawer;
$("#dnav").addEventListener("click", (e) => {
  if (e.target.closest("a")) closeDrawer();
});

/* ---------- [login] ---------- */
function updateAuthUI() {
  $$("[data-admin-only]").forEach((el) => (el.hidden = !isAdmin()));
  renderDrawerFoot();
}
function logout() {
  store.session = null;
  persist();
  updateAuthUI();
  renderAll();
  toast("You have signed out");
}
function renderDrawerFoot() {
  const foot = $("#dfoot");
  const user = store.session;
  foot.innerHTML = user
    ? `<div class="userbox"><span class="av">${esc(user.name[0] || "U").toUpperCase()}</span>
         <span><b style="font-weight:500">${esc(user.name)}</b><small>${user.role === "admin" ? "Administrator" : "Member"}</small></span></div>
       ${user.role === "admin" ? '<button class="pill gold" id="dPost" style="justify-content:center">Admin panel</button>' : ""}
       <button class="pill outline" id="dOut" style="color:#fff;justify-content:center">Sign out</button>`
    : `<p style="font-size:.8rem;opacity:.75;line-height:1.5">Everything is open to read. Sign in only if you are a portal administrator.</p>
       <button class="pill gold" id="dIn" style="justify-content:center">Sign in</button>`;
  const q = (id) => foot.querySelector(id);
  if (q("#dIn"))
    q("#dIn").onclick = () => {
      closeDrawer();
      openAuth("login");
    };
  if (q("#dOut"))
    q("#dOut").onclick = () => {
      closeDrawer();
      logout();
    };
  if (q("#dPost"))
    q("#dPost").onclick = () => {
      closeDrawer();
      openAdmin("news");
    };
}

// The sign in / register window.
function openAuth(authMode = "login") {
  const panel = $("#pAuth");
  const isLogin = authMode === "login";
  panel.innerHTML = `
    <div class="mhead">
      <div><span class="eyebrow">${isLogin ? "Welcome back" : "Join the portal"}</span>
      <h2>${isLogin ? "Sign in" : "Create account"}</h2></div>
      <button class="xbtn" data-close="mAuth" aria-label="Close">${X_ICON}</button>
    </div>
    <div class="tabs">
      <button class="${isLogin ? "on" : ""}" data-m="login">Sign in</button>
      <button class="${!isLogin ? "on" : ""}" data-m="reg">Register</button>
    </div>
    <form class="f" id="fAuth" novalidate style="margin-top:1.25rem">
      ${!isLogin ? '<div class="field"><label for="aName">Full name</label><input id="aName" placeholder="Nimal Perera" autocomplete="name"></div>' : ""}
      <div class="field"><label for="aMail">Email</label><input id="aMail" type="email" placeholder="you@email.com" autocomplete="email"></div>
      <div class="field"><label for="aPass">Password</label><input id="aPass" type="password" placeholder="••••••••" autocomplete="${isLogin ? "current-password" : "new-password"}"></div>
      <div class="err" id="aErr"></div>
      ${
        isLogin
          ? `<div class="hint">Demo admin: <b>${esc(SETTINGS.adminEmail)}</b> / <b>${esc(SETTINGS.adminPassword)}</b><br>Admins can add and remove news and announcements. Visitors don't need to sign in to read.</div>`
          : '<div class="hint">Member accounts can sign in but cannot publish. Publishing is for administrators only.</div>'
      }
      <button class="pill solid" type="submit">${isLogin ? "Sign in" : "Create account"}</button>
    </form>`;
  $$(".tabs button", panel).forEach((b) => (b.onclick = () => openAuth(b.dataset.m)));

  $("#fAuth").onsubmit = async (e) => {
    e.preventDefault();
    const email = $("#aMail").value.trim().toLowerCase();
    const pass = $("#aPass").value;
    const err = $("#aErr");
    if (!/^\S+@\S+\.\S+$/.test(email))
      return void (err.textContent = "Enter a valid email address.");
    if (pass.length < 6) return void (err.textContent = "Password must be at least 6 characters.");

    if (isLogin) {
      if (email === SETTINGS.adminEmail.toLowerCase() && pass === SETTINGS.adminPassword) {
        store.session = { name: SETTINGS.adminName, email, role: "admin" };
      } else {
        const hash = await scramble(pass);
        const user = store.users.find((u) => u.email === email && u.h === hash);
        if (!user) return void (err.textContent = "Incorrect email or password.");
        store.session = { name: user.name, email: user.email, role: "member" };
      }
    } else {
      const name = $("#aName").value.trim();
      if (name.length < 2) return void (err.textContent = "Please enter your name.");
      if (email === SETTINGS.adminEmail.toLowerCase() || store.users.some((u) => u.email === email))
        return void (err.textContent = "That email is already registered.");
      store.users.push({ name, email, h: await scramble(pass) });
      store.session = { name, email, role: "member" };
    }
    persist();
    closeM("mAuth");
    updateAuthUI();
    renderAll();
    toast(
      store.session.role === "admin"
        ? "Signed in as administrator"
        : "Welcome, " + store.session.name.split(" ")[0],
    );
  };
  openM("mAuth");
  setTimeout(() => ($("#aName") || $("#aMail")).focus(), 150);
}

/* ---------- [admin panel]  tabs: News | Notice | Look | Save ---------- */
function openAdmin(tab = "news") {
  if (!isAdmin()) return openAuth("login");
  const panel = $("#pAdmin");
  const tabs = [
    ["news", "News"],
    ["ann", "Notice"],
    ["lec", "Lecture"],
    ["exm", "Exam"],
    ["res", "Result"],
    ["look", "Look"],
    ["export", "Save"],
  ];

  let body = "";
  if (tab === "news" || tab === "ann") body = postFormHtml(tab === "news");
  else if (tab === "lec" || tab === "exm") body = ttFormHtml(tab === "lec");
  else if (tab === "res") body = rsFormHtml();
  else if (tab === "look") body = lookTabHtml();
  else body = saveTabHtml();

  panel.innerHTML = `
    <div class="mhead">
      <div><span class="eyebrow">Administrator</span><h2>Admin panel</h2></div>
      <button class="xbtn" data-close="mAdmin" aria-label="Close">${X_ICON}</button>
    </div>
    <div class="tabs">${tabs.map((t) => `<button class="${tab === t[0] ? "on" : ""}" data-t="${t[0]}">${t[1]}</button>`).join("")}</div>
    ${body}`;
  $$(".tabs button", panel).forEach((b) => (b.onclick = () => openAdmin(b.dataset.t)));

  if (tab === "news" || tab === "ann") bindPostForm(tab);
  if (tab === "lec" || tab === "exm") bindTTForm(tab === "lec");
  if (tab === "res") bindRsForm();
  if (tab === "look") bindLookTab();
  if (tab === "export") bindSaveTab();
  openM("mAdmin");
}

/* --- tab: add news / add notice --- */
function postFormHtml(isNews) {
  return `<form class="f" id="fPost" novalidate style="margin-top:1.25rem">
    <div class="field"><label for="pT">Title</label><input id="pT" placeholder="Headline"></div>
    ${
      isNews
        ? '<div class="field"><label for="pC">Category</label><select id="pC"><option>Campus Life</option><option>Research</option><option>Academics</option><option>Events</option><option>Achievements</option></select></div>'
        : '<div class="field"><label for="pC">Priority</label><select id="pC"><option value="general">General</option><option value="important">Important</option><option value="urgent">Urgent</option></select></div>'
    }
    <div class="field"><label for="pB">Details</label><textarea id="pB" rows="5" placeholder="Write the full text…"></textarea></div>
    <div class="field"><label for="pI">Photo file name (optional)</label><input id="pI" placeholder="example: sports.jpg"></div>
    <div class="hint">Put the photo in the folder <b>${isNews ? "Resource/images/news" : "Resource/images/announcement"}</b> first, then type its file name above.</div>
    <div class="err" id="pErr"></div>
    <button class="pill solid" type="submit">Publish</button>
  </form>`;
}
function bindPostForm(tab) {
  $("#fPost").onsubmit = (e) => {
    e.preventDefault();
    const title = $("#pT").value.trim();
    const text = $("#pB").value.trim();
    if (title.length < 4 || text.length < 10)
      return void ($("#pErr").textContent = "Add a title and at least a short description.");
    const item = {
      id: Date.now(),
      title,
      text,
      date: new Date().toISOString().slice(0, 10),
      author: store.session.name,
      image: $("#pI").value.trim(),
    };
    if (tab === "news") {
      item.category = $("#pC").value;
      store.addedNews.push(item);
    } else {
      item.priority = $("#pC").value;
      store.addedAnn.push(item);
    }
    persist();
    closeM("mAdmin");
    renderAll();
    toast("Published successfully");
  };
  setTimeout(() => $("#pT") && $("#pT").focus(), 150);
}

/* --- tab: Look (mode + colours) --- */
function sameTheme(a, b) {
  return a.deep === b.deep && a.main === b.main && a.accent === b.accent;
}

// A colour square the admin can tap. The real <input type="color"> is invisible and
// sits on top of a plain coloured box, so it always looks neat in every browser.
function swatchHtml(id, value) {
  return `<span class="swatch" style="--c:${value}"><input type="color" id="${id}" value="${value}" aria-label="Choose colour"></span>`;
}
function setSwatch(id, value) {
  const input = $("#" + id);
  input.value = value;
  input.parentElement.style.setProperty("--c", value);
}

function lookTabHtml() {
  const modeBtn = (m, label) =>
    `<button data-m="${m}" class="${mode === m ? "on" : ""}">${label}</button>`;
  return `
    <p class="lbl">Mode</p>
    <div class="seg" id="modeSeg">
      ${modeBtn("light", "☀ Light")}${modeBtn("dark", "☾ Dark")}${modeBtn("auto", "Auto")}
    </div>

    <p class="lbl">Colour style</p>
    <div class="pgrid">
      ${PRESETS.map(
        (p, i) => `<button class="pcard ${sameTheme(p, theme) ? "on" : ""}" data-p="${i}">
          <span class="sw" style="background:linear-gradient(135deg,${p.deep},${p.main} 55%,${p.accent})"></span>
          <b>${p.name}</b><span class="tick">✓</span></button>`,
      ).join("")}
    </div>

    <p class="lbl">Or pick your own colour</p>
    <label class="custom">
      ${swatchHtml("cOne", theme.main)}
      <span class="ctext"><b>Any colour you like</b><small>The site makes the matching dark and bright shades for you.</small></span>
      <code id="cHex">${theme.main}</code>
    </label>

    <p class="lbl">Preview</p>
    <div class="preview"><div><b>University of Ruhuna</b><span>News Portal</span></div><i>Button</i></div>

    <details class="adv">
      <summary>Advanced: set the 3 colours one by one</summary>
      <div class="crow"><span>Dark colour<small>hero, footer, menu</small></span>${swatchHtml("cDeep", theme.deep)}</div>
      <div class="crow"><span>Main colour<small>buttons and highlights</small></span>${swatchHtml("cMain", theme.main)}</div>
      <div class="crow"><span>Accent colour<small>bright touches</small></span>${swatchHtml("cAcc", theme.accent)}</div>
    </details>

    <details class="adv">
      <summary>Make this the default for everyone</summary>
      <p class="mini">Your choice is saved in <b>this browser only</b>. To make it the default for every visitor, copy these lines into <b>SETTINGS</b> in script.js:</p>
      <textarea class="codebox" id="cCode" readonly rows="3"></textarea>
    </details>

    <button class="pill outline" id="cReset" style="color:#fff;margin-top:1.2rem">Reset to default colours</button>`;
}

function bindLookTab() {
  const panel = $("#pAdmin");
  const refreshCode = () => {
    $("#cCode").value =
      `theme: { deep: "${theme.deep}", main: "${theme.main}", accent: "${theme.accent}" },\ndefaultMode: "${mode}",`;
  };
  // Updates everything shown in the panel without rebuilding it.
  const refreshLook = () => {
    $$(".pcard", panel).forEach((c, i) => c.classList.toggle("on", sameTheme(PRESETS[i], theme)));
    setSwatch("cOne", theme.main);
    setSwatch("cDeep", theme.deep);
    setSwatch("cMain", theme.main);
    setSwatch("cAcc", theme.accent);
    $("#cHex").textContent = theme.main;
    refreshCode();
  };
  refreshCode();

  // Light / Dark / Auto
  $$("#modeSeg button").forEach((b) => {
    b.onclick = () => {
      setMode(b.dataset.m);
      $$("#modeSeg button").forEach((x) => x.classList.toggle("on", x === b));
      refreshCode();
    };
  });
  // Ready-made styles
  $$(".pcard", panel).forEach((card) => {
    card.onclick = () => {
      const p = PRESETS[+card.dataset.p];
      setTheme({ deep: p.deep, main: p.main, accent: p.accent });
      refreshLook();
    };
  });
  // ONE colour -> the whole palette
  $("#cOne").addEventListener("input", (e) => {
    setTheme(paletteFrom(e.target.value));
    $("#cOne").parentElement.style.setProperty("--c", e.target.value);
    $$(".pcard", panel).forEach((c, i) => c.classList.toggle("on", sameTheme(PRESETS[i], theme)));
    setSwatch("cDeep", theme.deep);
    setSwatch("cMain", theme.main);
    setSwatch("cAcc", theme.accent);
    $("#cHex").textContent = e.target.value;
    refreshCode();
  });
  // The three colours one by one
  ["cDeep", "cMain", "cAcc"].forEach((id) =>
    $("#" + id).addEventListener("input", (e) => {
      e.target.parentElement.style.setProperty("--c", e.target.value);
      setTheme({ deep: $("#cDeep").value, main: $("#cMain").value, accent: $("#cAcc").value });
      $$(".pcard", panel).forEach((c, i) => c.classList.toggle("on", sameTheme(PRESETS[i], theme)));
      setSwatch("cOne", theme.main);
      $("#cHex").textContent = theme.main;
      refreshCode();
    }),
  );
  $("#cReset").onclick = () => {
    LS.set("ruh_theme", null);
    store.theme = null;
    theme = { ...SETTINGS.theme };
    applyTheme(theme);
    openAdmin("look");
    toast("Colours reset");
  };
}

/* --- tab: Save (code to copy into script.js) --- */
function saveTabHtml() {
  return `<p class="mini" style="margin-top:1.1rem">Things you add here are saved in <b>this browser only</b>. To keep them for everyone, copy the code below and paste it into <b>script.js</b>: news at the top of the <b>NEWS</b> list, notices at the top of <b>ANNOUNCEMENTS</b>, lectures and exams at the bottom of <b>LECTURES</b> / <b>EXAMS</b>, results at the bottom of <b>RESULTS</b>. Then commit to git.</p>
    <textarea class="codebox" id="xCode" readonly rows="10">${esc(exportCode())}</textarea>
    <button class="pill solid" id="xCopy" style="margin-top:1rem;justify-content:center;width:100%">Copy code</button>`;
}
function bindSaveTab() {
  $("#xCopy").onclick = async () => {
    const box = $("#xCode");
    try {
      await navigator.clipboard.writeText(box.value);
    } catch {
      box.select();
      document.execCommand("copy");
    }
    toast("Code copied");
  };
}
function exportCode() {
  const indent = (obj) => JSON.stringify(obj, null, 2).replace(/^/gm, "  ");
  let out = "// ---- paste at the TOP of the NEWS list ----\n";
  out += store.addedNews.length
    ? store.addedNews.map(indent).join(",\n") + ",\n"
    : "// (no news added in this browser)\n";
  out += "\n// ---- paste at the TOP of the ANNOUNCEMENTS list ----\n";
  out += store.addedAnn.length
    ? store.addedAnn.map(indent).join(",\n") + ",\n"
    : "// (no announcements added in this browser)\n";
  const c = ttCustom();
  const q = JSON.stringify;
  out += "\n// ---- paste at the BOTTOM of the LECTURES list (SECTION 4) ----\n";
  out += c.lectures.length
    ? c.lectures.map((x) => `  LEC(${x.day}, "${x.start}", "${x.end}", ${q(x.code)}, ${q(x.title)}, "${x.kind}", ${q(x.room)}, ${q(x.who)}, ${x.fac}, ${x.yr}, ${q(x.cover)}),`).join("\n") + "\n"
    : "// (no lectures added in this browser)\n";
  out += "\n// ---- paste at the BOTTOM of the EXAMS list (SECTION 4) ----\n";
  out += c.exams.length
    ? c.exams.map((x) => `  EXM("${x.date}", "${x.start}", "${x.end}", ${q(x.code)}, ${q(x.title)}, ${q(x.room)}, ${x.fac}, ${x.yr}, ${q(x.who)}, ${q(x.cover)}),`).join("\n") + "\n"
    : "// (no exams added in this browser)\n";
  const rc = rsCustom();
  out += "\n// ---- paste at the BOTTOM of the RESULTS list (SECTION 5) ----\n";
  out += rc.length
    ? rc.map((x) => `  STU(${q(x.index)}, ${q(x.name)}, ${x.fac}, ${x.year}, ${x.sem}, [${x.courses.map((k) => `[${q(k.code)}, ${q(k.title)}, ${k.credits}, ${k.marks}]`).join(", ")}]),`).join("\n") + "\n"
    : "// (no results added in this browser)\n";
  out += `\n// ---- colours + mode: paste into SETTINGS ----\ntheme: { deep: "${theme.deep}", main: "${theme.main}", accent: "${theme.accent}" },\ndefaultMode: "${mode}",`;
  return out;
}

/* ---------- [news + notices] drawing the cards ---------- */
function newsCard(n, i) {
  const src = photo(n.image, SETTINGS.newsFolder);
  return `<li class="rv" style="transition-delay:${(i % 3) * 120}ms">
    <article class="ncard" data-open="news:${esc(n.id)}" tabindex="0">
      ${isAdmin() ? `<button class="del" data-del="news:${esc(n.id)}" aria-label="Delete">✕</button>` : ""}
      <div class="im">${imgTag(src)}</div>
      <div class="bd">
        <span class="cat">${esc(n.category)}</span>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.text)}</p>
        <time>${fmt(n.date)}</time>
      </div>
    </article></li>`;
}
function annItem(a, i) {
  const d = new Date(a.date + "T00:00:00");
  const src = photo(a.image, SETTINGS.announcementFolder);
  return `<li class="rv" style="transition-delay:${i * 70}ms">
    <article class="aitem" data-open="ann:${esc(a.id)}" style="cursor:pointer">
      <div class="d"><b>${d.getDate()}</b><small>${d.toLocaleDateString("en-GB", { month: "short" })}</small></div>
      <div class="ab"><span class="pri ${esc(a.priority)}">${esc(a.priority)}</span><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></div>
      ${src ? `<div class="athumb">${imgTag(src)}</div>` : ""}
      ${isAdmin() ? `<button class="del" data-del="ann:${esc(a.id)}" aria-label="Delete">✕</button>` : ""}
    </article></li>`;
}

/* [search] — what the visitor typed in the two search boxes */
const query = { news: "", ann: "" };
const matches = (item, q) =>
  !q ||
  [item.title, item.text, item.category, item.priority, item.author]
    .join(" ")
    .toLowerCase()
    .includes(q);
$("#qNews")?.addEventListener("input", (e) => {
  query.news = e.target.value.trim().toLowerCase();
  renderAll();
});
$("#qAnn")?.addEventListener("input", (e) => {
  query.ann = e.target.value.trim().toLowerCase();
  renderAll();
});

let newsFilter = "All"; // which category button is selected
const NOTHING = '<li class="empty" style="grid-column:1/-1">Nothing found.</li>';

// Redraws every list on every page. Called after anything changes.
function renderAll() {
  const news = allNews();
  const ann = allAnn();

  $("#homeNews").innerHTML = news.slice(0, 3).map(newsCard).join("");
  $("#homeAnn").innerHTML =
    ann.slice(0, 3).map(annItem).join("") || '<li class="empty">No announcements yet.</li>';

  // News page: category buttons + search
  const cats = ["All", ...new Set(news.map((n) => n.category))];
  if (!cats.includes(newsFilter)) newsFilter = "All";
  $("#filters").innerHTML = cats
    .map(
      (c) =>
        `<button class="chip ${c === newsFilter ? "on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`,
    )
    .join("");
  $("#newsGrid").innerHTML =
    news
      .filter((n) => (newsFilter === "All" || n.category === newsFilter) && matches(n, query.news))
      .map(newsCard)
      .join("") || NOTHING;

  // Announcements page
  $("#annList").innerHTML =
    ann
      .filter((a) => matches(a, query.ann))
      .map(annItem)
      .join("") || NOTHING;

  renderTimetable();
  renderResults();
  renderSlider(news.slice(0, 3));
  renderTicker(ann);
  $$(".rv").forEach((el) => io.observe(el));
  $$("[data-admin-only]").forEach((el) => (el.hidden = !isAdmin()));
}
$("#filters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  newsFilter = chip.dataset.cat;
  renderAll();
});

/* [ticker] scrolling strip with urgent + important notices */
function renderTicker(ann) {
  const box = $("#ticker");
  if (!box) return; // feature switched off
  let list = ann.filter((a) => a.priority !== "general").slice(0, 6);
  if (!list.length) list = ann.slice(0, 5);
  if (!list.length) return void (box.hidden = true);
  const items = list
    .map(
      (a) =>
        `<button data-open="ann:${esc(a.id)}"><i class="dot ${esc(a.priority)}"></i>${esc(a.title)}</button>`,
    )
    .join("");
  $("#tickerItems").innerHTML = items + items; // twice, so the loop never has a gap
  box.hidden = false;
}

/* The small rotating card in the hero (3 latest news) */
const slider = { index: 0, list: [] };
function drawSlide() {
  const card = $("#sCard");
  const dots = $("#sDots");
  const n = slider.list[slider.index];
  if (!n) {
    card.innerHTML = "";
    dots.innerHTML = "";
    return;
  }
  card.innerHTML = `<div class="th">${imgTag(photo(n.image, SETTINGS.newsFolder))}</div>
    <div><b>${esc(n.category)}</b><em>${esc(n.title)}</em><u>Read story →</u></div>`;
  card.onclick = () => openRead("news", n.id);
  dots.innerHTML = slider.list
    .map(
      (_, k) =>
        `<button class="${k === slider.index ? "on" : ""}" aria-label="Slide ${k + 1}" data-i="${k}"><i></i></button>`,
    )
    .join("");
}
function goSlide(k) {
  const card = $("#sCard");
  card.classList.add("sw"); // fade out
  setTimeout(() => {
    slider.index = k;
    drawSlide();
    card.classList.remove("sw"); // fade in
  }, 400);
}
function renderSlider(list) {
  slider.list = list;
  if (slider.index >= list.length) slider.index = 0;
  drawSlide();
}
$("#sDots").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) goSlide(+b.dataset.i);
});
setInterval(() => {
  if (ready && current === "home" && slider.list.length > 1)
    goSlide((slider.index + 1) % slider.list.length);
}, 3800);

/* Opens one news item / announcement in a glass window */
function openRead(kind, id) {
  if (kind === "tt") return openTT(id); // a lecture / exam from the Timetables page
  const list = kind === "news" ? allNews() : allAnn();
  const item = list.find((x) => String(x.id) === String(id));
  if (!item) return;
  const src = photo(
    item.image,
    kind === "news" ? SETTINGS.newsFolder : SETTINGS.announcementFolder,
  );
  $("#pRead").innerHTML = `
    <div class="mhead">
      <div><span class="eyebrow">${esc(kind === "news" ? item.category : item.priority)}</span>
      <h2 style="font-size:2rem">${esc(item.title)}</h2></div>
      <button class="xbtn" data-close="mRead" aria-label="Close">${X_ICON}</button>
    </div>
    ${src ? `<div class="dimg">${imgTag(src)}</div>` : ""}
    <p class="meta">${fmt(item.date)} · ${esc(item.author || "University of Ruhuna")}</p>
    <div class="detail-body">${esc(item.text)}</div>`;
  openM("mRead");
}

// Admin: delete an item (items from script.js are only hidden in this browser).
function removeItem(kind, id) {
  if (!isAdmin()) return;
  if (kind === "tt") {
    // a timetable entry (lecture or exam)
    if (!confirm("Delete this entry from the timetable? (If it comes from script.js it is only hidden in this browser.)")) return;
    ttRemove(id);
    renderTimetable();
    toast("Entry deleted");
    return;
  }
  if (kind === "rs") {
    // a student's exam results
    if (!confirm("Delete these exam results? (If they come from script.js they are only hidden in this browser.)")) return;
    rsRemove(id);
    renderResults();
    toast("Results deleted");
    return;
  }
  if (!confirm("Delete this item? (If it comes from script.js it is only hidden in this browser.)"))
    return;
  const addedKey = kind === "news" ? "addedNews" : "addedAnn";
  const goneKey = kind === "news" ? "goneNews" : "goneAnn";
  if (store[addedKey].some((x) => String(x.id) === String(id)))
    store[addedKey] = store[addedKey].filter((x) => String(x.id) !== String(id));
  else store[goneKey].push(id);
  persist();
  renderAll();
  toast("Deleted");
}

/* One place that handles clicks on cards, delete buttons and admin buttons */
document.addEventListener("click", (e) => {
  const del = e.target.closest("[data-del]");
  if (del) {
    e.stopPropagation();
    const [kind, id] = del.dataset.del.split(":");
    return removeItem(kind, id);
  }
  const open = e.target.closest("[data-open]");
  if (open) {
    const [kind, id] = open.dataset.open.split(":");
    return openRead(kind, id);
  }
  const act = e.target.closest("[data-act]");
  if (act) {
    e.preventDefault();
    const name = act.dataset.act;
    if (name === "admin-news") openAdmin("news");
    else if (name === "admin-ann") openAdmin("ann");
    else if (name === "admin-theme") openAdmin("look");
    else if (name === "admin-lecture") openAdmin("lec");
    else if (name === "admin-exam") openAdmin("exm");
    else if (name === "admin-result") openAdmin("res");
    else if (name === "admin-save") openAdmin("export");
    else if (name === "top") scrollToTop();
    else if (name === "signin") store.session ? logout() : openAuth("login");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.matches && e.target.matches("[data-open]")) {
    const [kind, id] = e.target.dataset.open.split(":");
    openRead(kind, id);
  }
});

/* Contact form (demo — it does not send anything) */
$("#fContact").onsubmit = (e) => {
  e.preventDefault();
  const name = $("#cn").value.trim();
  const email = $("#ce").value.trim();
  const message = $("#cm").value.trim();
  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 5)
    return void ($("#cErr").textContent = "Please fill in your name, a valid email and a message.");
  $("#cWrap").innerHTML = `<div class="success" style="background:var(--surface);color:var(--ink)">
    <i><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg></i>
    <b>Message received</b>
    <p style="color:var(--ink-soft)">Thanks, ${esc(name.split(" ")[0])}. This demo form doesn't send anything yet, so please use the phone number for urgent matters.</p></div>`;
};

/* ---------- [hero slideshow] the big rectangle on the Home page ----------
   The photos come from SETTINGS.heroSlides (SECTION 1). This code:
     - makes one <img> per photo and fades from one to the next,
     - makes the little progress bars + counter at the bottom (display only),
     - changes photo BY ITSELF every SETTINGS.heroSeconds seconds (there are no buttons),
     - pauses while the mouse is over the big rectangle, and lets phones swipe.
   If a photo file is missing it is removed from the show automatically.   */
const hero = { i: 0, elapsed: 0, paused: false };

function buildHero() {
  const box = $("#heroSlides");
  if (!box) return;
  const list = (SETTINGS.heroSlides || []).filter((s) => s && s.image);
  box.innerHTML = list
    .map(
      (s, k) =>
        `<img class="slide${k === 0 ? " on" : ""}" src="${esc(photo(s.image, SETTINGS.heroFolder))}"
          alt="${esc(s.alt || "University of Ruhuna campus")}"
          style="object-position:${esc(s.position || "50% 50%")}"
          ${k === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>`,
    )
    .join("");
  box.style.setProperty("--hs", SETTINGS.heroSeconds + "s");
  heroSync();
}

// Draws the bars + counter to match the photos that are really in the page.
function heroSync() {
  const slides = $$("#heroSlides .slide");
  const dots = $("#heroDots");
  const single = slides.length < 2 || !SETTINGS.features.heroSlideshow;
  if (hero.i >= slides.length) hero.i = 0;
  slides.forEach((el, k) => el.classList.toggle("on", k === hero.i));
  dots.hidden = single;
  if (single) return;
  dots.innerHTML =
    slides.map((_, k) => `<span class="${k === hero.i ? "on" : ""}"><i></i></span>`).join("") +
    `<span class="hnum">${String(hero.i + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}</span>`;
}

// Show photo number k (wraps round at both ends).
function heroGo(k) {
  const n = $$("#heroSlides .slide").length;
  if (n < 2) return;
  hero.i = (k + n) % n;
  hero.elapsed = 0;
  heroSync();
}
// Pause while the mouse is on the big rectangle; swipe left/right on phones.
const heroBox = $(".hero");
heroBox.addEventListener("mouseenter", () => (hero.paused = true));
heroBox.addEventListener("mouseleave", () => (hero.paused = false));
let swipeX = null;
heroBox.addEventListener("touchstart", (e) => (swipeX = e.touches[0].clientX), { passive: true });
heroBox.addEventListener("touchend", (e) => {
  if (swipeX === null) return;
  const dx = e.changedTouches[0].clientX - swipeX;
  swipeX = null;
  if (Math.abs(dx) > 50) heroGo(hero.i + (dx < 0 ? 1 : -1));
});

// The clock: every 100 ms add time; when it reaches heroSeconds go to the next photo.
// It also moves the thin progress bar under the current photo number.
setInterval(() => {
  const total = SETTINGS.heroSeconds * 1000;
  const bar = $("#heroDots .on i");
  if (!SETTINGS.features.heroSlideshow || !ready || current !== "home" || hero.paused || document.hidden) return;
  hero.elapsed += 100;
  if (bar) bar.style.setProperty("--p", Math.min(1, hero.elapsed / total));
  if (hero.elapsed >= total) heroGo(hero.i + 1);
}, 100);

/* ---------- [timetable] lectures + exams page ----------
   Parts:  helpers | saved entries | drawing (cards, week grid, numbers) |
           details pop-up | admin form | click handlers                    */

/* -- helpers for times and dates -- */
const ttMins = (t) => +t.slice(0, 2) * 60 + +t.slice(3); // "08:30" -> 510 minutes
const tt12 = (t) => `${+t.slice(0, 2) % 12 || 12}:${t.slice(3)}`; // "14:00" -> "2:00"
const ttAm = (t) => (+t.slice(0, 2) < 12 ? "AM" : "PM");
const ttRange = (a, b) => `${tt12(a)} ${ttAm(a)} – ${tt12(b)} ${ttAm(b)}`;
const ttLength = (a, b) => {
  const m = ttMins(b) - ttMins(a);
  return (m % 60 ? (m / 60).toFixed(1) : m / 60) + "h";
};
const daysUntil = (iso) => Math.round((new Date(iso + "T00:00:00") - new Date().setHours(0, 0, 0, 0)) / 864e5);
const ttNextDate = (day) => {
  // the next calendar date that falls on this weekday (1 = Monday)
  const d = new Date();
  d.setDate(d.getDate() + ((day - d.getDay() + 7) % 7));
  return isoDate(d);
};
const nowMins = () => new Date().getHours() * 60 + new Date().getMinutes();
const todayNo = new Date().getDay(); // 0 = Sunday ... 6 = Saturday

/* -- what is selected on the page (faculty, year, day, view...) -- */
const ttSaved = LS.get("ruh_tt", {});
const tt = {
  type: "lectures", // "lectures" or "exams"
  view: ttSaved.view === "day" || ttSaved.view === "week" ? ttSaved.view : innerWidth >= 900 ? "week" : "day",
  fac: ttSaved.fac ?? -1, // -1 = all faculties
  year: ttSaved.year ?? 0, // 0 = all years
  day: todayNo >= 1 && todayNo <= 5 ? todayNo : 1, // day shown in the day list
  q: "", // search words
};
const ttRemember = () => LS.set("ruh_tt", { fac: tt.fac, year: tt.year, view: tt.view }); // kept in this browser

/* -- saved entries: the lists in SECTION 4 + what an admin added in the browser --
      Admin-added entries have ids starting "c-". Entries from script.js can only be
      hidden in the browser (delete their line in script.js to remove them for real). */
const ttCustom = () => {
  const c = LS.get("ruh_tt_custom", {});
  return { lectures: c.lectures || [], exams: c.exams || [] };
};
const ttHidden = () => LS.get("ruh_tt_hidden", []);
const ttLectures = () => [...LECTURES, ...ttCustom().lectures].filter((x) => !ttHidden().includes(x.id));
const ttExams = () => [...EXAMS, ...ttCustom().exams].filter((x) => !ttHidden().includes(x.id));
function ttRemove(id) {
  if (String(id).startsWith("c-")) {
    const c = ttCustom();
    c.lectures = c.lectures.filter((x) => x.id !== id);
    c.exams = c.exams.filter((x) => x.id !== id);
    LS.set("ruh_tt_custom", c);
  } else LS.set("ruh_tt_hidden", [...ttHidden(), id]);
}

// Does this entry match the selected faculty, year and search words?
const ttFits = (x) =>
  (tt.fac < 0 || x.fac === tt.fac) &&
  (!tt.year || x.yr === tt.year) &&
  (!tt.q || `${x.code} ${x.title} ${x.room} ${x.who} ${x.cover || ""}`.toLowerCase().includes(tt.q));

// A filter button.  k = what it changes, v = the value it sets.
const ttChip = (k, v, label, on, count) =>
  `<button class="chip${on ? " on" : ""}" data-tt="${k}" data-v="${v}">${esc(label)}${count === undefined ? "" : ` <em>${count}</em>`}</button>`;
// A switch (two or three buttons side by side, like Lectures | Exams).
const ttSeg = (k, items, value) =>
  items.map(([v, label]) => `<button class="${v === value ? "on" : ""}" data-tt="${k}" data-v="${v}" role="tab">${label}</button>`).join("");

/* -- one card (used by the Day list and by Exams) -- */
function ttCard(x, i) {
  const exam = !!x.date;
  // left box: for exams the date, for lectures the start time
  const left = exam
    ? `<b>${+x.date.slice(8)}</b><small>${new Date(x.date + "T00:00:00").toLocaleDateString("en-GB", { month: "short" })}</small>`
    : `<b>${tt12(x.start)}</b><small>${ttAm(x.start)}</small>`;
  // the coloured tag at the top of the card
  let badge;
  if (exam) {
    const d = daysUntil(x.date);
    badge = `<span class="pri ${d <= 7 ? "urgent" : d <= 14 ? "important" : "general"}">${d === 0 ? "Today" : d === 1 ? "Tomorrow" : "In " + d + " days"}</span>`;
  } else {
    badge = `<span class="pri ${x.kind === "Practical" ? "important" : "general"}">${esc(x.kind)}</span>`;
    if (x.day === todayNo && nowMins() >= ttMins(x.start) && nowMins() < ttMins(x.end)) badge = `<span class="pri urgent">In progress</span>`;
  }
  const meta = [
    ["Time", ttRange(x.start, x.end)],
    ["Venue", x.room],
    ...(x.who ? [[exam ? "Examiner" : "Lecturer", x.who]] : []),
    ["Faculty", `${FACULTY_SHORT[x.fac]} · Year ${x.yr}`],
  ];
  return `<article class="tt-card k-${exam ? "Exam" : esc(x.kind)} rv" data-open="tt:${esc(x.id)}" tabindex="0" style="transition-delay:${(i % 6) * 60}ms">
    <div class="tt-time"><div class="d">${left}</div>${exam ? "" : `<em>${ttLength(x.start, x.end)}</em>`}</div>
    <div class="tt-main">
      ${badge}
      <h3>${esc(x.code)} · ${esc(x.title)}</h3>
      <dl class="tt-meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      ${x.cover ? `<p class="tt-cover"><b>Covers:</b> ${esc(x.cover)}</p>` : ""}
    </div>
    ${isAdmin() ? `<button class="del" data-del="tt:${esc(x.id)}" aria-label="Delete this entry">✕</button>` : ""}
  </article>`;
}

/* -- the WEEK GRID: Monday to Friday side by side, hours going down --
      Each lecture is a box placed by its start time and length.
      If two lectures overlap they share the width of the column.        */
function ttWeek(list) {
  const HOUR = 4.4; // height of one hour in rem (change to make the grid taller / shorter)
  const first = Math.min(8, ...list.map((x) => Math.floor(ttMins(x.start) / 60)));
  const last = Math.max(17, ...list.map((x) => Math.ceil(ttMins(x.end) / 60)));
  const hours = last - first;
  const inProgress = (x) => x.day === todayNo && nowMins() >= ttMins(x.start) && nowMins() < ttMins(x.end);

  // the time labels on the left
  let times = "";
  for (let h = first; h < last; h++)
    times += `<span style="top:${(h - first) * HOUR}rem">${h % 12 || 12} ${h < 12 ? "AM" : "PM"}</span>`;

  // one column per day
  let cols = "";
  for (let day = 1; day <= 5; day++) {
    const items = list.filter((x) => x.day === day).sort((a, b) => ttMins(a.start) - ttMins(b.start) || ttMins(a.end) - ttMins(b.end));
    // work out side-by-side "lanes" for overlapping lectures
    let cluster = [];
    let clusterEnd = 0;
    const closeCluster = () => {
      const lanes = Math.max(0, ...cluster.map((c) => c.lane)) + 1;
      cluster.forEach((c) => (c.lanes = lanes));
      cluster = [];
    };
    items.forEach((x) => {
      const s = ttMins(x.start);
      if (cluster.length && s >= clusterEnd) closeCluster();
      const used = cluster.filter((c) => ttMins(c.x.end) > s).map((c) => c.lane);
      let lane = 0;
      while (used.includes(lane)) lane++;
      cluster.push({ x, lane });
      x._slot = cluster[cluster.length - 1];
      clusterEnd = Math.max(clusterEnd, ttMins(x.end));
    });
    closeCluster();

    const boxes = items
      .map((x) => {
        const top = ((ttMins(x.start) - first * 60) / 60) * HOUR;
        const height = ((ttMins(x.end) - ttMins(x.start)) / 60) * HOUR;
        const { lane, lanes } = x._slot;
        const short = ttMins(x.end) - ttMins(x.start) <= 60; // one-hour boxes get a compact layout
        return `<button class="wk-ev k-${esc(x.kind)}${short ? " short" : ""}${inProgress(x) ? " live" : ""}" data-open="tt:${esc(x.id)}"
          style="top:${top}rem;height:calc(${height}rem - 3px);left:calc(${(lane / lanes) * 100}% + 2px);width:calc(${100 / lanes}% - 4px)"
          title="${esc(x.code)} · ${esc(x.title)}">
          <small>${tt12(x.start)} ${ttAm(x.start)}</small><b>${esc(x.code)}</b><span>${esc(x.title)}</span><em>${esc(x.room)}</em>
        </button>`;
      })
      .join("");

    // a thin red "now" line in today's column
    const n = nowMins();
    const nowLine =
      day === todayNo && n >= first * 60 && n <= last * 60 ? `<i class="wk-now" style="top:${((n - first * 60) / 60) * HOUR}rem"></i>` : "";
    cols += `<div class="wk-col${day === todayNo ? " today" : ""}">${nowLine}${boxes}</div>`;
  }

  const heads = [1, 2, 3, 4, 5].map((d) => `<b class="${d === todayNo ? "today" : ""}">${DAY_SHORT[d]}${d === todayNo ? "<small>Today</small>" : ""}</b>`).join("");
  return `<div class="wk-scroll rv"><div class="wk" style="--hour:${HOUR}rem;--hours:${hours}">
      <div class="wk-head"><span></span>${heads}</div>
      <div class="wk-body"><div class="wk-times">${times}</div>${cols}</div>
    </div></div>`;
}

/* -- the four big numbers at the bottom of the page -- */
function ttStatsHtml(lectures, exams) {
  const todays = lectures.filter((x) => x.day === todayNo);
  // find the next session: first the rest of today, then the following days
  let next = null;
  let nextWhen = "";
  for (let off = 0; off < 8 && !next; off++) {
    const day = (todayNo + off) % 7;
    if (day < 1 || day > 5) continue;
    const found = lectures
      .filter((x) => x.day === day && (off > 0 || ttMins(x.end) > nowMins()))
      .sort((a, b) => ttMins(a.start) - ttMins(b.start))[0];
    if (found) {
      next = found;
      nextWhen = off === 0 ? "today" : off === 1 ? "tomorrow" : DAY_SHORT[day];
    }
  }
  const hours = lectures.reduce((s, x) => s + (ttMins(x.end) - ttMins(x.start)) / 60, 0);
  const d = exams[0] ? daysUntil(exams[0].date) : null;
  const stats = [
    [todays.length, "Sessions today"],
    [next ? tt12(next.start) : "—", next ? `Next session (${nextWhen})` : "Next session"],
    [Math.round(hours * 10) / 10 + "h", "Lecture hours a week"],
    [d === null ? "—" : d === 0 ? "Today" : d + "d", "Until next exam"],
  ];
  return stats.map(([n, l], i) => `<div class="rv" style="transition-delay:${i * 110}ms"><b>${n}</b><span>${l}</span></div>`).join("");
}

/* -- draws the whole Timetables page (called after every click and after sign in/out) -- */
function renderTimetable() {
  const page = $("#ttPage");
  if (!page) return;
  const lec = tt.type === "lectures";
  const week = lec && tt.view === "week";

  const lectures = ttLectures().filter(ttFits);
  const exams = ttExams()
    .filter(ttFits)
    .filter((x) => daysUntil(x.date) >= 0) // past exams are hidden
    .sort((a, b) => a.date.localeCompare(b.date) || a.start.localeCompare(b.start));

  // switches + filter buttons
  $("#ttType").innerHTML = ttSeg("type", [["lectures", "Lectures"], ["exams", "Exams"]], tt.type);
  $("#ttView").innerHTML = ttSeg("view", [["week", "Week grid"], ["day", "Day list"]], tt.view);
  $("#ttView").hidden = !lec;
  $("#ttFac").innerHTML = ttChip("fac", -1, "All faculties", tt.fac < 0) + FACULTY_SHORT.map((n, i) => ttChip("fac", i, n, tt.fac === i)).join("");
  $("#ttYear").innerHTML = ttChip("year", 0, "All years", !tt.year) + [1, 2, 3, 4].map((y) => ttChip("year", y, "Year " + y, tt.year === y)).join("");
  // day buttons show how many lectures are on that day
  $("#ttDayRow").hidden = !(lec && !week);
  $("#ttDay").innerHTML = [1, 2, 3, 4, 5]
    .map((n) => ttChip("day", n, DAY_SHORT[n] + (n === todayNo ? " · Today" : ""), tt.day === n, lectures.filter((x) => x.day === n).length))
    .join("");

  // the list / grid itself
  const empty = (msg) => `<div class="empty">${msg}</div>`;
  let body;
  if (!lec) {
    body = exams.length ? `<div class="tt-list">${exams.map(ttCard).join("")}</div>` : empty("No upcoming exams for your selection.");
  } else if (week) {
    body = lectures.length ? ttWeek(lectures) : empty("No lectures for your selection. Try “All faculties” or “All years”.");
  } else {
    const rows = lectures.filter((x) => x.day === tt.day).sort((a, b) => a.start.localeCompare(b.start));
    body = rows.length
      ? `<div class="tt-list">${rows.map(ttCard).join("")}</div>`
      : empty(`No lectures on ${DAY_NAMES[tt.day]} for your selection. Try another day, or the Week grid.`);
  }
  $("#ttBody").innerHTML = body;

  // small note under the list
  $("#ttNote").innerHTML = week
    ? '<span class="lg k-Lecture"></span>Lecture <span class="lg k-Practical"></span>Practical <span class="lg k-Tutorial"></span>Tutorial · click a box for details'
    : lec
      ? "Click a card for the full details."
      : "Only upcoming exams are shown. Click a card for the full details.";

  $("#ttStats").innerHTML = ttStatsHtml(lectures, exams);
  $$(".rv", page.parentElement).forEach((el) => io.observe(el)); // slide-in animation for the new cards
}

/* -- details pop-up for one lecture or exam -- */
function openTT(id) {
  let x = ttExams().find((e) => e.id === id);
  const exam = !!x;
  if (!x) x = ttLectures().find((l) => l.id === id);
  if (!x) return;
  const rows = [
    exam ? ["Date", fmt(x.date)] : ["Day", DAY_NAMES[x.day] + " (every week)"],
    ["Time", ttRange(x.start, x.end) + " · " + ttLength(x.start, x.end)],
    ["Venue", x.room],
    ...(x.who ? [[exam ? "Examiner" : "Lecturer", x.who]] : []),
    ["Faculty", FACULTIES[x.fac]],
    ["Year", "Year " + x.yr],
    ...(x.cover ? [["Covers", x.cover]] : []),
  ];
  $("#pRead").innerHTML = `
    <div class="mhead">
      <div><span class="eyebrow">${exam ? "Exam" : esc(x.kind)}</span>
      <h2 style="font-size:2rem">${esc(x.code)} — ${esc(x.title)}</h2></div>
      <button class="xbtn" data-close="mRead" aria-label="Close">${X_ICON}</button>
    </div>
    <dl class="tt-dl">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    ${exam ? '<p class="meta">Bring your student ID and arrive 15 minutes early.</p>' : ""}`;
  openM("mRead");
}

/* -- ADMIN: the "Lecture" and "Exam" tabs of the Admin panel (add an entry) -- */
function ttFormHtml(lec) {
  const field = (id, label, input) => `<div class="field"><label for="${id}">${label}</label>${input}</div>`;
  const opts = (list, first = 0) => list.map((n, i) => `<option value="${i + first}">${esc(n)}</option>`).join("");
  return `<form class="f" id="fTT" novalidate style="margin-top:1.25rem">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));gap:1rem">
      ${field("tfCode", "Course code", '<input id="tfCode" placeholder="ENG 2201" maxlength="20">')}
      ${field("tfTitle", "Course title", '<input id="tfTitle" placeholder="Engineering Mathematics II" maxlength="80">')}
      ${
        lec
          ? field("tfDay", "Day", `<select id="tfDay">${opts(DAY_NAMES.slice(1), 1)}</select>`) +
            field("tfKind", "Type", '<select id="tfKind"><option>Lecture</option><option>Practical</option><option>Tutorial</option></select>')
          : field("tfDate", "Exam date", `<input id="tfDate" type="date" min="${isoDate(new Date())}">`)
      }
      ${field("tfStart", "Start time", '<input id="tfStart" type="time">')}
      ${field("tfEnd", "End time", '<input id="tfEnd" type="time">')}
      ${field("tfRoom", "Venue", '<input id="tfRoom" placeholder="Lecture Hall 3" maxlength="60">')}
      ${field("tfWho", lec ? "Lecturer name" : "Examiner name (optional)", '<input id="tfWho" placeholder="Dr. K. Silva" maxlength="60">')}
      ${field("tfFac", "Faculty", `<select id="tfFac">${opts(FACULTIES)}</select>`)}
      ${field("tfYear", "Year", `<select id="tfYear">${opts(["Year 1", "Year 2", "Year 3", "Year 4"], 1)}</select>`)}
    </div>
    ${field("tfCover", "Intended cover area (optional)", `<textarea id="tfCover" rows="3" maxlength="200" placeholder="${lec ? "Topics this session will cover" : "Units / chapters the exam covers"}"></textarea>`)}
    <div class="err" id="tfErr"></div>
    <button class="pill solid" type="submit">Save ${lec ? "lecture" : "exam"}</button>
  </form>`;
}
function bindTTForm(lec) {
  $("#fTT").onsubmit = (e) => {
    e.preventDefault();
    if (!isAdmin()) return;
    const v = (id) => $("#" + id).value.trim();
    const err = $("#tfErr");
    const x = {
      id: "c-" + Date.now().toString(36),
      code: v("tfCode").toUpperCase(),
      title: v("tfTitle"),
      start: v("tfStart"),
      end: v("tfEnd"),
      room: v("tfRoom"),
      who: v("tfWho"),
      cover: v("tfCover"),
      fac: +v("tfFac"),
      yr: +v("tfYear"),
    };
    if (!x.code || !x.title) return void (err.textContent = "Enter the course code and title.");
    if (lec) {
      x.day = +v("tfDay");
      x.kind = v("tfKind");
    } else {
      x.date = v("tfDate");
      if (!x.date) return void (err.textContent = "Choose the exam date.");
      if (daysUntil(x.date) < 0) return void (err.textContent = "The exam date must be today or later (past exams are not shown).");
    }
    if (!x.start || !x.end) return void (err.textContent = "Enter the start and end time.");
    if (ttMins(x.end) <= ttMins(x.start)) return void (err.textContent = "The end time must be after the start time.");
    if (!x.room) return void (err.textContent = "Enter the venue.");
    if (lec && !x.who) return void (err.textContent = "Enter the lecturer name.");

    const c = ttCustom();
    (lec ? c.lectures : c.exams).push(x);
    LS.set("ruh_tt_custom", c);
    // show the new entry straight away: set the filters so it is visible
    Object.assign(tt, { type: lec ? "lectures" : "exams", fac: x.fac, year: x.yr, q: "" });
    if (lec) tt.day = x.day;
    ttRemember();
    if ($("#ttQ")) $("#ttQ").value = "";
    closeM("mAdmin");
    renderTimetable();
    if (current !== "timetables") location.hash = "#/timetables";
    toast((lec ? "Lecture" : "Exam") + " added");
  };
  setTimeout(() => $("#tfCode")?.focus(), 150);
}

/* -- clicks and typing on the Timetables page -- */
$("#ttPage").addEventListener("click", (e) => {
  const b = e.target.closest("[data-tt]");
  if (!b) return;
  const k = b.dataset.tt;
  tt[k] = k === "type" || k === "view" ? b.dataset.v : +b.dataset.v;
  ttRemember();
  renderTimetable();
});
$("#ttQ")?.addEventListener("input", (e) => {
  tt.q = e.target.value.trim().toLowerCase();
  renderTimetable();
});

/* ---------- [results] exam results page ----------
   Parts: grade maths | saved entries | drawing the result | admin form | clicks
   The visitor types an index number; we look it up in RESULTS (SECTION 5)
   plus anything an admin added in the browser, then draw a result sheet.     */

/* -- grade maths -- */
const rsGrade = (marks) => GRADES.find(([min]) => marks >= min); // -> [min, "A", 4.0]
const rsNorm = (text) => String(text).toUpperCase().replace(/\s+/g, ""); // "sc/2022/ 014" -> "SC/2022/014"
// Adds up credits and grade points for one student.  GPA = sum(points x credits) / sum(credits)
function rsCalc(s) {
  let credits = 0;
  let points = 0;
  let earned = 0;
  let passed = 0;
  s.courses.forEach((c) => {
    credits += c.credits;
    points += rsGrade(c.marks)[2] * c.credits;
    if (c.marks >= PASS_MARK) {
      earned += c.credits;
      passed++;
    }
  });
  return { gpa: credits ? points / credits : 0, credits, earned, passed, total: s.courses.length };
}

/* -- saved entries: the list in SECTION 5 + what an admin added in the browser -- */
const rsCustom = () => LS.get("ruh_results_custom", []);
const rsHidden = () => LS.get("ruh_results_hidden", []);
const rsAll = () => [...RESULTS, ...rsCustom()].filter((s) => !rsHidden().includes(s.index));
const rs = { q: "" }; // the index number being shown (cleaned)

/* -- draws the grading scale table at the bottom of the page -- */
function renderScale() {
  const box = $("#rsScale");
  if (!box) return;
  box.innerHTML = GRADES.map(([min, letter, pts], i) => {
    const max = i ? GRADES[i - 1][0] - 1 : 100;
    return `<div class="rv"><b>${letter}</b><span>${min}${i ? "–" + max : "+"} marks</span><em>${pts.toFixed(1)} points</em></div>`;
  }).join("");
}

/* -- draws the result sheet (or a message) -- */
function renderResults() {
  const box = $("#rsBody");
  if (!box) return;
  // demo buttons: the first four sample index numbers
  $("#rsChips").innerHTML = RESULTS.slice(0, 4).map((s) => `<button type="button" class="chip" data-rs="${esc(s.index)}">${esc(s.index)}</button>`).join("");

  if (!rs.q) return void (box.innerHTML = '<div class="empty">Enter your index number above to see your results.</div>');
  const s = rsAll().find((x) => rsNorm(x.index) === rs.q);
  if (!s) return void (box.innerHTML = `<div class="empty">No results found for <b>${esc(rs.q)}</b>. Check the index number and try again.</div>`);

  const t = rsCalc(s);
  const fails = t.total - t.passed;
  const rows = s.courses
    .map((c) => {
      const [, letter, pts] = rsGrade(c.marks);
      const tier = c.marks >= PASS_MARK ? (pts >= 3.7 ? "top" : pts >= 2.3 ? "mid" : "low") : "fail";
      return `<tr><td>${esc(c.code)}</td><td>${esc(c.title)}</td><td class="n">${c.credits}</td><td class="n">${c.marks}</td>
        <td class="n"><span class="grade ${tier}">${letter}</span></td><td class="n">${pts.toFixed(1)}</td></tr>`;
    })
    .join("");
  box.innerHTML = `<article class="rs-card rv" id="rsCard">
    <header class="rs-head">
      <span class="av">${esc(s.name[0] || "S").toUpperCase()}</span>
      <div><h2>${esc(s.name)}</h2>
        <p>${esc(s.index)} · ${esc(FACULTIES[s.fac])} · Year ${s.year} · Semester ${s.sem}</p></div>
    </header>
    <dl class="rs-stats">
      <div><dt>Semester GPA</dt><dd>${t.gpa.toFixed(2)}</dd></div>
      <div><dt>Credits earned</dt><dd>${t.earned}<small> / ${t.credits}</small></dd></div>
      <div><dt>Courses passed</dt><dd>${t.passed}<small> / ${t.total}</small></dd></div>
      <div><dt>Result</dt><dd class="${fails ? "bad" : "good"}">${fails ? "Repeat " + fails : "All passed"}</dd></div>
    </dl>
    <div class="rs-scroll"><table class="rs-table">
      <thead><tr><th>Code</th><th>Course</th><th class="n">Credits</th><th class="n">Marks</th><th class="n">Grade</th><th class="n">Points</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
    <div class="rs-actions">
      <button class="pill outline" type="button" data-print>Print / save as PDF</button>
      ${isAdmin() ? `<button class="pill gold" type="button" data-del="rs:${esc(s.index)}">Delete these results</button>` : ""}
    </div>
    <p class="rs-note">Pass mark: ${PASS_MARK}. Grade points follow the scale below. Demo data only, not an official transcript.</p>
  </article>`;
  io.observe($("#rsCard"));
}

// Remove a student's results (admin). Entries from script.js are only hidden in this browser.
function rsRemove(index) {
  const c = rsCustom();
  if (c.some((s) => s.index === index)) LS.set("ruh_results_custom", c.filter((s) => s.index !== index));
  else LS.set("ruh_results_hidden", [...rsHidden(), index]);
}

/* -- ADMIN: the "Result" tab of the Admin panel (add one student) -- */
function rsRowHtml() {
  return `<div class="rs-crow">
    <input class="rc-code" placeholder="SCI 3101" maxlength="20" aria-label="Course code">
    <input class="rc-title" placeholder="Course title" maxlength="60" aria-label="Course title">
    <input class="rc-cr" type="number" min="0.5" max="10" step="0.5" placeholder="Cr" aria-label="Credits">
    <input class="rc-mk" type="number" min="0" max="100" step="1" placeholder="Marks" aria-label="Marks">
  </div>`;
}
function rsFormHtml() {
  const field = (id, label, input) => `<div class="field"><label for="${id}">${label}</label>${input}</div>`;
  return `<form class="f" id="fRs" novalidate style="margin-top:1.25rem">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));gap:1rem">
      ${field("rfIndex", "Index number", '<input id="rfIndex" placeholder="SC/2022/014" maxlength="20">')}
      ${field("rfName", "Student name", '<input id="rfName" placeholder="Full name" maxlength="60">')}
      ${field("rfFac", "Faculty", `<select id="rfFac">${FACULTIES.map((n, i) => `<option value="${i}">${esc(n)}</option>`).join("")}</select>`)}
      ${field("rfYear", "Year", '<select id="rfYear"><option>1</option><option>2</option><option>3</option><option>4</option></select>')}
      ${field("rfSem", "Semester", '<select id="rfSem"><option>1</option><option>2</option></select>')}
    </div>
    <div class="field"><label>Courses (code, title, credits, marks)</label>
      <div id="rfRows" class="rs-crows">${rsRowHtml().repeat(3)}</div>
      <button class="pill outline" type="button" id="rfAdd" style="align-self:flex-start;color:#fff;margin-top:.5rem">+ Add course</button>
    </div>
    <div class="err" id="rfErr"></div>
    <button class="pill solid" type="submit">Save results</button>
  </form>`;
}
function bindRsForm() {
  $("#rfAdd").onclick = () => $("#rfRows").insertAdjacentHTML("beforeend", rsRowHtml());
  $("#fRs").onsubmit = (e) => {
    e.preventDefault();
    if (!isAdmin()) return;
    const err = $("#rfErr");
    const index = $("#rfIndex").value.trim().toUpperCase();
    const name = $("#rfName").value.trim();
    if (!index || !name) return void (err.textContent = "Enter the index number and the student name.");
    if (rsAll().some((s) => rsNorm(s.index) === rsNorm(index))) return void (err.textContent = "This index number already has results. Delete them first.");
    const courses = [];
    for (const row of $$(".rs-crow", $("#rfRows"))) {
      const v = (c) => $(c, row).value.trim();
      if (!v(".rc-code") && !v(".rc-title") && !v(".rc-cr") && !v(".rc-mk")) continue; // empty row: skip
      const credits = parseFloat(v(".rc-cr"));
      const marks = parseFloat(v(".rc-mk"));
      if (!v(".rc-code") || !v(".rc-title") || !(credits > 0) || !(marks >= 0 && marks <= 100))
        return void (err.textContent = "Every course needs a code, a title, credits above 0 and marks from 0 to 100.");
      courses.push({ code: v(".rc-code").toUpperCase(), title: v(".rc-title"), credits, marks });
    }
    if (!courses.length) return void (err.textContent = "Add at least one course.");
    LS.set("ruh_results_custom", [...rsCustom(), { index, name, fac: +$("#rfFac").value, year: +$("#rfYear").value, sem: +$("#rfSem").value, courses }]);
    rs.q = rsNorm(index);
    $("#rsIndex").value = index;
    closeM("mAdmin");
    renderResults();
    if (current !== "results") location.hash = "#/results";
    toast("Results saved");
  };
  setTimeout(() => $("#rfIndex")?.focus(), 150);
}

/* -- clicks on the Results page -- */
$("#fResult").addEventListener("submit", (e) => {
  e.preventDefault();
  rs.q = rsNorm($("#rsIndex").value);
  renderResults();
});
$("#rsChips").addEventListener("click", (e) => {
  const b = e.target.closest("[data-rs]");
  if (!b) return;
  $("#rsIndex").value = b.dataset.rs;
  rs.q = rsNorm(b.dataset.rs);
  renderResults();
});
$("#rsBody").addEventListener("click", (e) => {
  if (e.target.closest("[data-print]")) print(); // opens the browser print window (choose "Save as PDF")
});
renderScale();

/* ---------- [pages] switching pages without reloading ---------- */
const view = $("#view");
const TITLES = {
  home: "University of Ruhuna — News Portal",
  news: "News · University of Ruhuna",
  announcements: "Announcements · University of Ruhuna",
  timetables: "Timetables · University of Ruhuna",
  results: "Exam Results · University of Ruhuna",
  contact: "Contact · University of Ruhuna",
  about: "About · University of Ruhuna",
};
let current = ""; // the page being shown
let ready = false; // true when the loading screen is gone

// Makes things with class "rv" slide up the first time they come into view.
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
);

// Splits a big title into words so they can slide in one by one.
function prepWords(el) {
  if (el.dataset.done) return;
  el.dataset.done = 1;
  el.innerHTML = el.textContent
    .trim()
    .split(/\s+/)
    .map(
      (w, i) =>
        `<span class="w"><span style="transition-delay:${i * 140}ms">${esc(w)}</span></span>`,
    )
    .join(" ");
}
function playIntro(page) {
  $$(".words,.tag", page).forEach((el) => el.classList.remove("go"));
  if (ready)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => $$(".words,.tag", page).forEach((el) => el.classList.add("go"))),
    );
}
function resetReveals(scope) {
  const els = $$(".rv,.rv-line", scope);
  els.forEach((el) => {
    io.unobserve(el);
    el.classList.remove("in");
  });
  requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
}
function activate(name, goTop) {
  $$(".page").forEach((p) => p.classList.toggle("active", p.dataset.page === name));
  $$("[data-nav]").forEach((a) => a.classList.toggle("on", a.dataset.nav === name));
  document.title = TITLES[name] || TITLES.home;
  const page = $(`.page[data-page="${name}"]`);
  $$(".words", page).forEach(prepWords);
  if (name === "timetables") renderTimetable(); // fresh "today / now" every time the page opens
  if (goTop) scrollToTop(true);
  resetReveals(page);
  resetReveals($("footer.ft"));
  playIntro(page);
  onScroll();
}
function route(force) {
  let name = (location.hash.replace(/^#\/?/, "") || "home").split("?")[0];
  if (!PAGES.includes(name)) name = "home";
  if (name === current && !force) return;
  const same = name === current;
  current = name;
  view.classList.add("swap"); // fade out
  setTimeout(
    () => {
      activate(name, !same);
      view.classList.remove("swap"); // fade in
    },
    same ? 0 : 300,
  );
}
addEventListener("hashchange", () => route());

/* ---------- [scroll tools] header glass, photo parallax, progress line, back-to-top ---------- */
let ticking = false;
function onScroll() {
  $("#top").classList.toggle("stuck", scrollY > 40);

  const plate = $(".page.active [data-parallax]"); // moves the big photo slower than the page
  if (plate) {
    const rect = plate.closest(".hero,.phero").getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, -rect.top / (rect.height || 1)));
    plate.style.transform = `translateY(${progress * 12}%)`;
  }

  const bar = $("#progress"); // OPTIONAL: thin line on top
  if (bar) {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  }
  $("#toTop")?.classList.toggle("show", scrollY > 600); // OPTIONAL: back-to-top button
  ticking = false;
}
addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
$("#toTop")?.addEventListener("click", () => scrollToTop());

/* ---------- [loading screen] ---------- */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const MIN_TIME = reduceMotion ? 200 : SETTINGS.loaderMs;
const MAX_TIME = MIN_TIME + 1200;
const EXIT_TIME = reduceMotion ? 0 : 850;
function finishLoading() {
  if (ready) return;
  ready = true;
  loaderActive = false;
  const loader = $("#loader");
  loader.classList.add("out"); // slides up
  unlock();
  const page = $(".page.active");
  if (page) playIntro(page);
  setTimeout(() => loader.remove(), EXIT_TIME + 50);
}
let started = false;
function beginLoading() {
  if (started) return;
  started = true;
  setTimeout(finishLoading, MIN_TIME);
}

/* ---------- [start] everything begins here ---------- */
history.scrollRestoration = "manual";
scrollTo(0, 0);
lock();
paintLogos();
buildHero();
updateAuthUI();
renderAll();
if (!location.hash) history.replaceState(null, "", "#/home");
route(true);
if (document.readyState === "complete") beginLoading();
else addEventListener("load", beginLoading);
setTimeout(beginLoading, MAX_TIME);
