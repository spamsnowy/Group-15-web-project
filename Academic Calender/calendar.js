/* ===== Academic Calendar (standalone page) =====
   - Reads the sign-in session saved by the main portal (sessionStorage 'ruhunaSession').
   - Everyone signed in can VIEW; only admins see the "Manage" section.
   - Calendar data is stored separately (localStorage 'ruhunaCalendar') so the portal's own data is never touched. */
(function () {
  // Mirror of the portal's demo accounts (usernames -> role). Keep in sync with ../script.js
  const ROLES = { user: 'user', admin: 'admin' };
  const KEY = 'ruhunaCalendar';

  const CAL_TYPES = { Semester: '#8a1fe0', Exam: '#e11d48', Holiday: '#16a34a', Registration: '#2563eb', Deadline: '#d97706', Event: '#0891b2' };

  // Sample dates – replace with the official calendar from the admin section
  const DEFAULT = {
    pdf: '',
    entries: [
      { id: 1,  title: 'First-year orientation programme', type: 'Event',        start: '2026-11-10', end: '2026-11-14', note: 'Orientation sessions for new students.' },
      { id: 2,  title: 'Research Symposium',               type: 'Event',        start: '2026-11-20', end: '',           note: 'Main Auditorium, 9:00 a.m. – 4:00 p.m.' },
      { id: 3,  title: 'Lectures end for the semester',    type: 'Semester',     start: '2026-11-27', end: '',           note: 'Last day of regular lectures.' },
      { id: 4,  title: 'Scholarship application deadline', type: 'Deadline',     start: '2026-11-30', end: '',           note: 'Submit forms to the Student Welfare Office.' },
      { id: 5,  title: 'Study leave',                      type: 'Semester',     start: '2026-11-30', end: '2026-12-04', note: 'No lectures; library open late.' },
      { id: 6,  title: 'End-semester examinations',        type: 'Exam',         start: '2026-12-07', end: '2026-12-23', note: 'Check your faculty notice board for the timetable.' },
      { id: 7,  title: 'Christmas Day',                    type: 'Holiday',      start: '2026-12-25', end: '',           note: 'Public holiday.' },
      { id: 8,  title: "New Year's Day",                   type: 'Holiday',      start: '2027-01-01', end: '',           note: 'Public holiday.' },
      { id: 9,  title: 'Next semester registration',       type: 'Registration', start: '2027-01-11', end: '2027-01-15', note: 'Register for modules through your faculty office.' },
      { id: 10, title: 'Next semester begins',             type: 'Semester',     start: '2027-01-18', end: '',           note: 'Lectures resume.' }
    ]
  };

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmtDate = d => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const clone = o => JSON.parse(JSON.stringify(o));
  const safeGet = (st, k) => { try { return st.getItem(k); } catch (e) { return null; } };
  const safeSet = (st, k, v) => { try { st.setItem(k, v); } catch (e) {} };
  const pad2 = n => String(n).padStart(2, '0');
  const ymd = (y, m, d) => y + '-' + pad2(m + 1) + '-' + pad2(d);
  const localToday = () => { const t = new Date(); return ymd(t.getFullYear(), t.getMonth(), t.getDate()); };
  const nextId = arr => arr.reduce((m, x) => Math.max(m, x.id), 0) + 1;
  const calColor = t => CAL_TYPES[t] || '#8a1fe0';

  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 2400);
  }

  /* ---------- theme (shares the portal's saved choice) ---------- */
  function setTheme(t) { document.documentElement.setAttribute('data-theme', t); safeSet(localStorage, 'ruhunaTheme', t); }
  setTheme(safeGet(localStorage, 'ruhunaTheme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  $('#themeBtn').addEventListener('click', () =>
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  /* ---------- session / role gate ---------- */
  let session = null;
  try { session = JSON.parse(safeGet(sessionStorage, 'ruhunaSession') || 'null'); } catch (e) {}
  const role = session && ROLES[session.username];
  if (!role) { $('#gate').hidden = false; return; }
  const isAdmin = role === 'admin';

  $('#page').hidden = false;
  $('#avatar').textContent = session.username[0].toUpperCase();
  $('#whoName').textContent = session.username;
  $('#roleTag').textContent = role;
  $('#manage').hidden = !isAdmin;
  $('#year').textContent = new Date().getFullYear();

  /* ---------- data ---------- */
  function load() {
    try {
      const d = JSON.parse(safeGet(localStorage, KEY) || 'null');
      if (d && Array.isArray(d.entries)) return { entries: d.entries, pdf: typeof d.pdf === 'string' ? d.pdf : '' };
    } catch (e) {}
    return clone(DEFAULT);
  }
  let store = load();
  const save = () => safeSet(localStorage, KEY, JSON.stringify(store));

  let cur = { y: new Date().getFullYear(), m: new Date().getMonth() };
  let filter = 'All';
  const endOf = it => it.end || it.start;
  const visible = () => store.entries.filter(it => filter === 'All' || it.type === filter);
  const on = ds => visible().filter(it => it.start <= ds && ds <= endOf(it));
  const range = it => (it.end && it.end !== it.start) ? fmtDate(it.start) + ' – ' + fmtDate(it.end) : fmtDate(it.start);

  /* ---------- calendar view ---------- */
  function renderCalendar() {
    const { y, m } = cur;
    $('#calTitle').textContent = new Date(y, m, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

    const pdf = $('#calPdfBtn');
    pdf.hidden = !store.pdf;
    if (store.pdf) pdf.href = store.pdf;

    $('#calFilters').innerHTML = ['All', ...Object.keys(CAL_TYPES)].map(t =>
      `<button class="cal-chip ${t === filter ? 'on' : ''}" data-type="${t}" style="--c:${t === 'All' ? 'transparent' : calColor(t)}">${t === 'All' ? '' : '<i class="dot"></i>'}${t}</button>`).join('');
    $$('#calFilters .cal-chip').forEach(b => b.addEventListener('click', () => { filter = b.dataset.type; renderCalendar(); }));

    const first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), t = localToday();
    let html = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => `<div class="cal-dow">${d}</div>`).join('');
    for (let i = 0; i < first; i++) html += '<div class="cal-cell empty"></div>';
    for (let d = 1; d <= days; d++) {
      const ds = ymd(y, m, d), items = on(ds);
      html += `<button class="cal-cell${ds === t ? ' today' : ''}" data-date="${ds}"><span class="num">${d}</span>`
        + items.slice(0, 2).map(it => `<span class="cal-pill" style="--c:${calColor(it.type)}">${esc(it.title)}</span>`).join('')
        + (items.length > 2 ? `<span class="cal-more">+${items.length - 2} more</span>` : '') + '</button>';
    }
    $('#calGrid').innerHTML = html;

    const mStart = ymd(y, m, 1), mEnd = ymd(y, m, days);
    const list = visible().filter(it => it.start <= mEnd && endOf(it) >= mStart).sort((a, b) => a.start.localeCompare(b.start));
    $('#calList').innerHTML = list.map(it => `
      <div class="cal-li" data-id="${it.id}" style="--c:${calColor(it.type)}">
        <span class="cal-type">${esc(it.type)}</span><b>${esc(it.title)}</b><small>${range(it)}</small></div>`).join('')
      || '<p class="muted">Nothing scheduled this month.</p>';
    $$('#calList .cal-li').forEach(c => c.addEventListener('click', () => openItem(+c.dataset.id)));
  }

  /* ---------- modal ---------- */
  const openModal = html => { $('#modalBody').innerHTML = html; $('#modal').hidden = false; };
  const detail = it => `<div class="cal-detail" style="--c:${calColor(it.type)}"><span class="cal-type">${esc(it.type)}</span>
    <h3>${esc(it.title)}</h3><small class="muted">${range(it)}</small>${it.note ? `<p>${esc(it.note)}</p>` : ''}</div>`;
  function openItem(id) {
    const it = store.entries.find(x => x.id === id); if (!it) return;
    openModal(`<div class="modal-inner"><h2>Academic calendar</h2>${detail(it)}</div>`);
  }
  function openDay(ds) {
    const items = on(ds);
    openModal(`<div class="modal-inner"><small class="muted">${fmtDate(ds)}</small><h2>${items.length ? 'Academic calendar' : 'Nothing scheduled'}</h2>`
      + (items.map(detail).join('') || '<p class="muted">No calendar entries on this day.</p>') + '</div>');
  }
  $('#modalClose').addEventListener('click', () => $('#modal').hidden = true);
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') $('#modal').hidden = true; });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#modal').hidden = true; });

  /* ---------- navigation ---------- */
  function shift(n) { const d = new Date(cur.y, cur.m + n, 1); cur = { y: d.getFullYear(), m: d.getMonth() }; renderCalendar(); }
  $('#calPrev').addEventListener('click', () => shift(-1));
  $('#calNext').addEventListener('click', () => shift(1));
  $('#calToday').addEventListener('click', () => { const t = new Date(); cur = { y: t.getFullYear(), m: t.getMonth() }; renderCalendar(); });
  $('#calGrid').addEventListener('click', e => { const c = e.target.closest('.cal-cell[data-date]'); if (c) openDay(c.dataset.date); });

  /* ---------- admin: manage entries ---------- */
  const form = $('#calForm');
  const field = n => form.elements.namedItem(n);
  $('#calType').innerHTML = Object.keys(CAL_TYPES).map(t => `<option>${t}</option>`).join('');

  function resetForm() {
    form.reset(); field('id').value = '';
    $('#calFormTitle').textContent = 'Add calendar entry'; $('#calSubmit').textContent = 'Add entry'; $('#calCancel').hidden = true;
  }
  function renderAdmin() {
    if (!isAdmin) return;
    $('#calPdfForm [name=url]').value = store.pdf || '';
    if (field('id').value && !store.entries.some(x => x.id === +field('id').value)) resetForm();
    $('#adminCalList').innerHTML = [...store.entries].sort((a, b) => a.start.localeCompare(b.start)).map(it => `
      <div class="row"><div><b>${esc(it.title)}</b><br><small>${esc(it.type)} · ${range(it)}</small></div>
        <div class="row-btns"><button class="edit" data-edit="${it.id}">Edit</button>
        <button class="del" data-id="${it.id}">Delete</button></div></div>`).join('') || '<p class="muted">No calendar entries yet.</p>';
    $$('#adminCalList .edit').forEach(b => b.addEventListener('click', () => editEntry(+b.dataset.edit)));
    $$('#adminCalList .del').forEach(b => b.addEventListener('click', () => {
      if (!confirm('Delete this calendar entry?')) return;
      store.entries = store.entries.filter(x => x.id !== +b.dataset.id);
      save(); renderAll(); toast('Entry deleted');
    }));
  }
  function editEntry(id) {
    const it = store.entries.find(x => x.id === id); if (!it) return;
    field('id').value = it.id; field('title').value = it.title; field('type').value = it.type;
    field('start').value = it.start; field('end').value = it.end || ''; field('note').value = it.note || '';
    $('#calFormTitle').textContent = 'Edit calendar entry'; $('#calSubmit').textContent = 'Save changes'; $('#calCancel').hidden = false;
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  function renderAll() { renderCalendar(); renderAdmin(); }

  if (isAdmin) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(form));
      if (f.end && f.end < f.start) { toast('End date must be on or after the start date'); return; }
      const data = { title: f.title.trim(), type: f.type, start: f.start, end: f.end || '', note: f.note.trim() };
      const existing = f.id && store.entries.find(x => x.id === +f.id);
      if (existing) { Object.assign(existing, data); toast('Entry updated'); }
      else { store.entries.push({ id: nextId(store.entries), ...data }); toast('Entry added'); }
      const d = new Date(data.start + 'T00:00:00'); cur = { y: d.getFullYear(), m: d.getMonth() };
      save(); resetForm(); renderAll();
    });
    $('#calCancel').addEventListener('click', resetForm);
    $('#calPdfForm').addEventListener('submit', e => {
      e.preventDefault();
      const url = String(new FormData(e.target).get('url') || '').trim();
      if (/^\s*(javascript|data|vbscript):/i.test(url)) { toast('That link type is not allowed'); return; }
      store.pdf = url; save(); renderAll(); toast(url ? 'PDF link saved' : 'PDF link removed');
    });
    $('#resetBtn').addEventListener('click', () => {
      if (!confirm('Reset the calendar to the sample dates? Your entries will be lost.')) return;
      store = clone(DEFAULT); save(); resetForm(); renderAll(); toast('Sample dates restored');
    });
    $('#exportBtn').addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(store, null, 2)], { type: 'application/json' }));
      a.download = 'academic-calendar.json'; a.click();
    });
  }

  renderAll();
})();
