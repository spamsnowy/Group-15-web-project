/* ===== University of Ruhuna – News Portal (no backend, demo only) ===== */

// Demo accounts (a real site must check these on a server)
const USERS = [
  { username: 'user',  password: 'user123',       role: 'user',  name: 'Student User', mail: 'user@example.ac.lk',  faculty: 'Faculty of Science' },
  { username: 'admin', password: 'password12345', role: 'admin', name: 'Portal Admin', mail: 'admin@example.ac.lk', faculty: 'Administration' }
];

const CATEGORIES = ['Academic', 'Research', 'Campus', 'Sports', 'Admissions', 'Events'];
const ICONS = { Academic: '🎓', Research: '🔬', Campus: '🏛️', Sports: '🏅', Admissions: '📝', Events: '🎉' };

// Sample content – replace with real university news
const DEFAULT_DB = {
  news: [
    { id: 1, title: 'New academic year orientation programme begins for first-year students', cat: 'Academic', date: '2026-11-10', img: '', summary: 'Orientation sessions introduce new students to faculties, libraries and student services.', body: 'The orientation programme helps new students settle in. Sessions cover academic regulations, library access, student welfare services and campus facilities. Students are encouraged to attend all sessions and meet their academic advisors.' },
    { id: 2, title: 'Research symposium showcases student and staff innovations', cat: 'Research', date: '2026-11-08', img: '', summary: 'Posters and talks from across all faculties will be presented at the annual symposium.', body: 'The annual research symposium brings together undergraduates, postgraduates and academic staff to present their work. Best poster awards will be announced at the closing ceremony.' },
    { id: 3, title: 'Library extends opening hours during examination period', cat: 'Campus', date: '2026-11-07', img: '', summary: 'Study spaces will remain open late for students preparing for end-of-semester exams.', body: 'To support students during examinations, the main library will open until late evening on weekdays. Quiet study zones and group rooms can be reserved at the front desk.' },
    { id: 4, title: 'Inter-faculty sports meet: teams announced', cat: 'Sports', date: '2026-11-05', img: '', summary: 'Cricket, volleyball, football and athletics teams have been selected for the meet.', body: 'The inter-faculty sports meet will feature cricket, volleyball, football, netball and athletics. Practice sessions are held daily at the main grounds. Everyone is welcome to cheer for their faculty.' },
    { id: 5, title: 'Applications open for postgraduate study programmes', cat: 'Admissions', date: '2026-11-03', img: '', summary: 'Prospective students can now submit applications for several postgraduate programmes.', body: 'Applications are open for selected postgraduate diplomas and masters programmes. Applicants should read the entry requirements carefully and upload all required documents before the closing date.' },
    { id: 6, title: 'Cultural night celebrates music, dance and drama', cat: 'Events', date: '2026-11-01', img: '', summary: 'Student societies prepare a vibrant evening of performances open to the whole campus.', body: 'The cultural night will feature performances by student societies including music, traditional dance and drama. Entrance is free for students and staff.' },
    { id: 7, title: 'Career fair connects graduates with employers', cat: 'Campus', date: '2026-10-28', img: '', summary: 'Companies from several industries will meet final-year students and recent graduates.', body: 'The career fair offers CV clinics, interview tips and direct conversations with employers. Students should bring printed CVs and dress smartly.' },
    { id: 8, title: 'New e-learning platform guide published for lecturers and students', cat: 'Academic', date: '2026-10-25', img: '', summary: 'A short guide explains how to access course materials, quizzes and announcements online.', body: 'The guide covers logging in, finding course pages, submitting assignments and getting technical help. Training sessions will be held in the computer labs.' },
    { id: 9, title: 'Environmental club launches campus tree-planting drive', cat: 'Events', date: '2026-10-20', img: '', summary: 'Volunteers are invited to help plant saplings around the university premises.', body: 'The environmental club is organising a tree-planting drive. Volunteers meet at the main gate on Saturday morning. Gloves and saplings will be provided.' }
  ],
  notices: [
    { id: 1, title: 'Mid-semester examination timetable released', priority: 'important', date: '2026-11-12', body: 'The timetable is available on faculty notice boards. Report any clashes to your department office within three days.' },
    { id: 2, title: 'Library fines waived this week', priority: 'normal', date: '2026-11-11', body: 'Students may return overdue books at the main library without fines until Friday.' },
    { id: 3, title: 'Water supply interruption in hostels on Sunday', priority: 'urgent', date: '2026-11-10', body: 'Maintenance work will interrupt the supply from 8 a.m. to 2 p.m. Please store water in advance.' },
    { id: 4, title: 'Scholarship applications close soon', priority: 'important', date: '2026-11-09', body: 'Submit completed scholarship forms to the Student Welfare Office before the closing date.' }
  ],
  events: [
    { id: 1, title: 'Research Symposium', date: '2026-11-20', time: '9:00 a.m. – 4:00 p.m.', venue: 'Main Auditorium' },
    { id: 2, title: 'Career Fair', date: '2026-11-24', time: '10:00 a.m. – 3:00 p.m.', venue: 'Student Centre' },
    { id: 3, title: 'Inter-Faculty Sports Meet', date: '2026-11-28', time: '8:00 a.m. – 5:00 p.m.', venue: 'Main Grounds' },
    { id: 4, title: 'Cultural Night', date: '2026-12-05', time: '6:00 p.m. – 9:30 p.m.', venue: 'Open-Air Theatre' }
  ],
  activity: []
};

const FACULTIES = [
  ['🌾', 'Agriculture'], ['⚙️', 'Engineering'], ['🌊', 'Fisheries & Marine Sciences'],
  ['📚', 'Humanities & Social Sciences'], ['💼', 'Management & Finance'], ['🩺', 'Medicine'],
  ['🧪', 'Science'], ['🩻', 'Allied Health Sciences'], ['💻', 'Technology']
];
const LINKS = [
  ['📅', 'Academic Calendar'], ['🕒', 'Exam Timetables'], ['📖', 'Library'], ['🖥️', 'E-Learning (LMS)'],
  ['🎓', 'Admissions'], ['💰', 'Scholarships'], ['🏠', 'Hostel Services'], ['🧑‍💼', 'Career Guidance'],
  ['📞', 'Help Desk'], ['📄', 'Downloads & Forms']
];

/* ===== Helpers ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtDate = d => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
function safeGet(store, key) { try { return store.getItem(key); } catch (e) { return null; } }
function safeSet(store, key, val) { try { store.setItem(key, val); } catch (e) {} }

let db = JSON.parse(safeGet(localStorage, 'ruhunaDB') || 'null') || JSON.parse(JSON.stringify(DEFAULT_DB));
const saveDB = () => safeSet(localStorage, 'ruhunaDB', JSON.stringify(db));
let session = JSON.parse(safeGet(sessionStorage, 'ruhunaSession') || 'null');
let activeCat = 'All', searchTerm = '';

function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 2400);
}
function logActivity(text) {
  db.activity.unshift(new Date().toLocaleString('en-GB') + ' – ' + text);
  db.activity = db.activity.slice(0, 12); saveDB();
}

/* ===== Theme (light / dark) ===== */
function setTheme(t) { document.documentElement.setAttribute('data-theme', t); safeSet(localStorage, 'ruhunaTheme', t); }
setTheme(safeGet(localStorage, 'ruhunaTheme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
$$('[data-theme-toggle]').forEach(b => b.addEventListener('click', () =>
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')));

/* ===== Login / logout ===== */
$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const u = $('#loginUser').value.trim().toLowerCase(), p = $('#loginPass').value;
  const found = USERS.find(x => x.username === u && x.password === p);
  if (!found) { $('#loginError').hidden = false; return; }
  session = { username: found.username, time: new Date().toLocaleString('en-GB') };
  safeSet(sessionStorage, 'ruhunaSession', JSON.stringify(session));
  $('#loginError').hidden = true; $('#loginForm').reset();
  startApp();
});
$('#logoutBtn').addEventListener('click', () => {
  try { sessionStorage.removeItem('ruhunaSession'); } catch (e) {}
  session = null; $('#app').hidden = true; $('#loginScreen').hidden = false; window.scrollTo(0, 0);
});

/* ===== Start app ===== */
function startApp() {
  const me = USERS.find(x => x.username === session.username);
  if (!me) return;
  $('#loginScreen').hidden = true; $('#app').hidden = false;
  const initial = me.name[0];
  $('#avatar').textContent = $('#avatar2').textContent = initial;
  $('#profileName').textContent = $('#pmName').textContent = me.name;
  $('#roleTag').textContent = $('#pmRole').textContent = me.role;
  $('#pmMail').textContent = me.mail; $('#pmUser').textContent = me.username;
  $('#pmFaculty').textContent = me.faculty; $('#pmLogin').textContent = session.time;
  const isAdmin = me.role === 'admin';
  $('#adminNav').hidden = !isAdmin; $('#admin').hidden = !isAdmin;
  $('#todayDate').textContent = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  $('#year').textContent = new Date().getFullYear();
  renderAll(); initReveal(); animateCounters();
}

/* ===== Profile dropdown ===== */
$('#profileBtn').addEventListener('click', () => $('#profileMenu').hidden = !$('#profileMenu').hidden);
document.addEventListener('click', e => { if (!$('#profileWrap').contains(e.target)) $('#profileMenu').hidden = true; });
$('#menuBtn').addEventListener('click', () => $('#mainnav').classList.toggle('open'));
$$('#mainnav a').forEach(a => a.addEventListener('click', () => {
  $('#mainnav').classList.remove('open');
  $$('#mainnav a').forEach(x => x.classList.remove('active')); a.classList.add('active');
}));

/* ===== Rendering ===== */
function thumb(n, cls = '') {
  return n.img
    ? `<div class="thumb has-img ${cls}" style="background-image:url('${esc(n.img)}')"></div>`
    : `<div class="thumb t-${n.cat} ${cls}">${ICONS[n.cat] || '📰'}</div>`;
}
function sortedNews() { return [...db.news].sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id); }

function renderChips() {
  $('#chips').innerHTML = ['All', ...CATEGORIES].map(c =>
    `<button class="chip ${c === activeCat ? 'on' : ''}" data-cat="${c}">${c === 'All' ? 'All news' : c}</button>`).join('');
  $$('#chips .chip').forEach(b => b.addEventListener('click', () => { activeCat = b.dataset.cat; renderNews(); renderChips(); }));
}
function renderTicker() {
  const items = db.notices.map(n => `<span>${esc(n.title)}</span>`).join('');
  $('#tickerMove').innerHTML = items + items;
}
function renderHero() {
  const list = sortedNews();
  const f = list[0];
  if (!f) { $('#heroMain').innerHTML = '<div class="hero-text"><h2>No news yet</h2></div>'; $('#heroSide').innerHTML = ''; return; }
  $('#heroMain').innerHTML = `<span class="tag">${esc(f.cat)}</span>${thumb(f)}
    <div class="hero-text"><small>${fmtDate(f.date)}</small><h2>${esc(f.title)}</h2><p>${esc(f.summary)}</p></div>`;
  $('#heroMain').onclick = () => openNews(f.id);
  $('#heroSide').innerHTML = list.slice(1, 3).map(n => `
    <article class="side-card" data-id="${n.id}"><span class="tag">${esc(n.cat)}</span>${thumb(n)}
      <div class="txt"><small>${fmtDate(n.date)}</small><h3>${esc(n.title)}</h3></div></article>`).join('');
  $$('#heroSide .side-card').forEach(c => c.addEventListener('click', () => openNews(+c.dataset.id)));
}
function renderNews() {
  const term = searchTerm.toLowerCase();
  const list = sortedNews().filter(n =>
    (activeCat === 'All' || n.cat === activeCat) &&
    (!term || (n.title + n.summary + n.body + n.cat).toLowerCase().includes(term)));
  $('#newsCount').textContent = list.length + ' stories';
  $('#noResults').hidden = list.length > 0;
  $('#newsGrid').innerHTML = list.map(n => `
    <article class="card reveal in" data-id="${n.id}">
      <div class="thumbwrap">${thumb(n)}</div>
      <div class="card-body">
        <div class="card-meta"><span class="cat-label">${esc(n.cat)}</span><span>${fmtDate(n.date)}</span></div>
        <h3>${esc(n.title)}</h3><p>${esc(n.summary)}</p>
      </div></article>`).join('');
  $$('#newsGrid .card').forEach(c => c.addEventListener('click', () => openNews(+c.dataset.id)));
}
function renderNotices() {
  const order = { urgent: 0, important: 1, normal: 2 };
  const list = [...db.notices].sort((a, b) => order[a.priority] - order[b.priority] || b.date.localeCompare(a.date));
  $('#noticeList').innerHTML = list.map(n => `
    <div class="notice ${n.priority}" data-id="${n.id}">
      <h4>${esc(n.title)} <span class="badge ${n.priority}">${n.priority}</span></h4>
      <p>${esc(n.body.length > 110 ? n.body.slice(0, 110) + '…' : n.body)}</p>
      <small class="muted">${fmtDate(n.date)}</small></div>`).join('') || '<p class="muted">No notices.</p>';
  $$('#noticeList .notice').forEach(c => c.addEventListener('click', () => openNotice(+c.dataset.id)));
}
function renderEvents() {
  const list = [...db.events].sort((a, b) => a.date.localeCompare(b.date));
  $('#eventList').innerHTML = list.map(e => {
    const d = new Date(e.date + 'T00:00:00');
    return `<div class="event"><div class="date-box"><small>${d.toLocaleDateString('en-GB', { month: 'short' })}</small><b>${d.getDate()}</b></div>
      <div><h4>${esc(e.title)}</h4><p>${esc(e.time)}<br>📍 ${esc(e.venue)}</p></div></div>`;
  }).join('') || '<p class="muted">No upcoming events.</p>';
}
function renderStatic() {
  $('#facultyGrid').innerHTML = FACULTIES.map(f => `<div class="fac"><i>${f[0]}</i>${f[1]}</div>`).join('');
  $('#linksGrid').innerHTML = LINKS.map(l => `<a class="lnk" href="#"><i>${l[0]}</i>${l[1]}</a>`).join('');
  $('#newsCat').innerHTML = CATEGORIES.map(c => `<option>${c}</option>`).join('');
}
function renderAdmin() {
  $('#adminStats').innerHTML = `<div><b>${db.news.length}</b><span>News</span></div><div><b>${db.notices.length}</b><span>Notices</span></div>
    <div><b>${db.events.length}</b><span>Events</span></div><div><b>${USERS.length}</b><span>Users</span></div>`;
  $('#activityList').innerHTML = db.activity.map(a => `<li>${esc(a)}</li>`).join('') || '<li>No activity yet.</li>';
  const row = (type, id, t, s) => `<div class="row"><div><b>${esc(t)}</b><br><small>${esc(s)}</small></div><button class="del" data-type="${type}" data-id="${id}">Delete</button></div>`;
  $('#adminNewsList').innerHTML = sortedNews().map(n => row('news', n.id, n.title, n.cat + ' · ' + fmtDate(n.date))).join('');
  $('#adminNoticeList').innerHTML = db.notices.map(n => row('notices', n.id, n.title, n.priority + ' · ' + fmtDate(n.date))).join('');
  $('#adminEventList').innerHTML = db.events.map(e => row('events', e.id, e.title, fmtDate(e.date) + ' · ' + e.venue)).join('');
  $$('.del').forEach(b => b.addEventListener('click', () => {
    const t = b.dataset.type, id = +b.dataset.id;
    db[t] = db[t].filter(x => x.id !== id); logActivity('Deleted an item from ' + t); saveDB(); renderAll(); toast('Deleted');
  }));
}
function renderAll() { renderChips(); renderTicker(); renderHero(); renderNews(); renderNotices(); renderEvents(); renderStatic(); renderAdmin(); }

/* ===== Modal ===== */
function openModal(html) { $('#modalBody').innerHTML = html; $('#modal').hidden = false; }
function openNews(id) {
  const n = db.news.find(x => x.id === id); if (!n) return;
  openModal(`${thumb(n)}<div class="modal-inner"><span class="cat-label">${esc(n.cat)}</span> · <small class="muted">${fmtDate(n.date)}</small>
    <h2>${esc(n.title)}</h2><p><b>${esc(n.summary)}</b></p><p>${esc(n.body)}</p></div>`);
}
function openNotice(id) {
  const n = db.notices.find(x => x.id === id); if (!n) return;
  openModal(`<div class="modal-inner"><span class="badge ${n.priority}">${n.priority}</span> <small class="muted">${fmtDate(n.date)}</small>
    <h2>${esc(n.title)}</h2><p>${esc(n.body)}</p></div>`);
}
$('#modalClose').addEventListener('click', () => $('#modal').hidden = true);
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') $('#modal').hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#modal').hidden = true; });

/* ===== Search / newsletter ===== */
$('#searchForm').addEventListener('submit', e => { e.preventDefault(); searchTerm = $('#searchInput').value.trim(); renderNews(); $('#news').scrollIntoView(); });
$('#searchInput').addEventListener('input', e => { searchTerm = e.target.value.trim(); renderNews(); });
$('#newsletterForm').addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast('Thanks! You are subscribed (demo).'); });

/* ===== Admin forms ===== */
const nextId = arr => arr.reduce((m, x) => Math.max(m, x.id), 0) + 1;
const today = () => new Date().toISOString().slice(0, 10);
$$('#adminTabs .tab').forEach(t => t.addEventListener('click', () => {
  $$('#adminTabs .tab').forEach(x => x.classList.remove('active')); t.classList.add('active');
  $$('.tabpane').forEach(p => p.hidden = p.id !== 'tab-' + t.dataset.tab);
}));
$('#newsForm').addEventListener('submit', e => {
  e.preventDefault(); const f = Object.fromEntries(new FormData(e.target));
  db.news.push({ id: nextId(db.news), title: f.title, cat: f.cat, date: today(), img: f.img.trim(), summary: f.summary, body: f.body });
  logActivity('Published news: ' + f.title); saveDB(); e.target.reset(); renderAll(); toast('News published');
});
$('#noticeForm').addEventListener('submit', e => {
  e.preventDefault(); const f = Object.fromEntries(new FormData(e.target));
  db.notices.push({ id: nextId(db.notices), title: f.title, priority: f.priority, date: today(), body: f.body });
  logActivity('Posted notice: ' + f.title); saveDB(); e.target.reset(); renderAll(); toast('Notice posted');
});
$('#eventForm').addEventListener('submit', e => {
  e.preventDefault(); const f = Object.fromEntries(new FormData(e.target));
  db.events.push({ id: nextId(db.events), title: f.title, date: f.date, time: f.time, venue: f.venue });
  logActivity('Added event: ' + f.title); saveDB(); e.target.reset(); renderAll(); toast('Event added');
});
$('#resetBtn').addEventListener('click', () => {
  if (!confirm('Reset all news, notices and events to the sample data?')) return;
  db = JSON.parse(JSON.stringify(DEFAULT_DB)); saveDB(); renderAll(); toast('Sample data restored');
});
$('#exportBtn').addEventListener('click', () => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' }));
  a.download = 'ruhuna-portal-data.json'; a.click();
});

/* ===== Animations ===== */
function initReveal() {
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .15 });
  $$('.reveal:not(.in)').forEach(el => io.observe(el));
}
function animateCounters() {
  $$('[data-count]').forEach(el => {
    const end = +el.dataset.count, plus = el.dataset.plus || '', start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / 1400, 1);
      el.textContent = Math.floor(end * (1 - Math.pow(1 - p, 3))).toLocaleString() + (p === 1 ? plus : '');
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  });
}

/* ===== Boot ===== */
if (session && USERS.find(x => x.username === session.username)) startApp();
