/* =======================================================================
   script.js  —  THE CORE (the base of the site)
   -----------------------------------------------------------------------
   This file only runs the BASE: header, footer, Home page, light/dark
   mode, colours, menu, sign-in and the admin panel shell.

   News, Announcements and Contact are NOT in here. Each one is its own
   file in the  modules/  folder and plugs itself in with Portal.register().
   If a module file is missing or has an error, the rest of the site still
   works — that page simply doesn't appear.

   Sections (Ctrl+F):  [settings] [portal] [helpers] [saved data] [colours]
   [light/dark mode] [smooth scroll] [pop-ups] [login] [admin panel]
   [pages] [scroll tools] [start]
   ======================================================================= */

/* ---------- [settings] ---------- */
const SETTINGS = {
  adminEmail: "admin@ruh.ac.lk",
  adminPassword: "Ruhuna@2026", // DEMO ONLY: this file is public on GitHub, so never reuse a real password
  adminName: "Portal Admin",

  /* University logo: save your file as  Resource/images/logo.png */
  logo: "Resource/images/logo.png",

  /* Default colours. Admin panel > Look can change them live (saved in that browser only). */
  theme: { deep: "#3a1a0c", main: "#8a4b12", accent: "#f2b705" },

  /* "light", "dark" or "auto" (follow the visitor's device). */
  defaultMode: "light",

  /* OPTIONAL FEATURES: true = on, false = removed.
     (The "ticker" and "search" features live inside the modules that use them.) */
  features: {
    modeButton: true, // sun/moon button in the top bar
    ticker: true, // scrolling strip of urgent notices (made by modules/announcements.js)
    quickLinks: true, // 4 big buttons on Home
    search: true, // search boxes (made by the News and Announcements modules)
    scrollTools: true, // progress line on top + back-to-top button
    footerMarquee: true, // scrolling text strip in the footer
  },
};

/* ---------- [portal] how modules plug in ----------
   A module file calls  Portal.register({ ... })  once. See modules/_template.js.
   Everything a module does is wrapped in safe(), so one broken module
   can never stop the others (or the Home page) from working. */
const Portal = {
  modules: [],
  current: "",
  register(mod) {
    if (!mod || !mod.name) return;
    this.modules = this.modules.filter((m) => m.name !== mod.name);
    this.modules.push(mod);
    this.modules.sort((a, b) => (a.order || 50) - (b.order || 50));
  },
  has(name) {
    return this.modules.some((m) => m.name === name);
  },
  // Redraws every module (called after anything changes, e.g. sign in / publish).
  renderAll() {
    this.modules.forEach((m) => m.render && safe(() => m.render(), m.name + ".render"));
    $$(".rv").forEach((el) => io.observe(el));
    $$("[data-admin-only]").forEach((el) => (el.hidden = !isAdmin()));
  },
};
function safe(fn, label) {
  try {
    return fn();
  } catch (err) {
    console.error("[Portal] problem in " + label + ":", err);
  }
}

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

// true if this id is in a list of ids (used by modules for "hidden" items)
const hasId = (list, id) => list.map(String).includes(String(id));

/* ---------- [saved data] ----------
   Only things the whole site shares are here. Each module keeps its own data. */
const store = {
  users: LS.get("ruh_users", []),
  session: LS.get("ruh_session", null), // who is signed in
  theme: LS.get("ruh_theme", null),
};
function persist() {
  LS.set("ruh_users", store.users);
  LS.set("ruh_session", store.session);
}
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
    if (document.documentElement.classList.contains("locked")) lenis.stop();
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
  Portal.renderAll();
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
      openAdmin();
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
          ? `<div class="hint">Demo admin: <b>${esc(SETTINGS.adminEmail)}</b> / <b>${esc(SETTINGS.adminPassword)}</b><br>Admins can add and remove content. Visitors don't need to sign in to read.</div>`
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
    Portal.renderAll();
    toast(
      store.session.role === "admin"
        ? "Signed in as administrator"
        : "Welcome, " + store.session.name.split(" ")[0],
    );
  };
  openM("mAuth");
  setTimeout(() => ($("#aName") || $("#aMail")).focus(), 150);
}

/* ---------- [admin panel]  tabs: one per module that has an admin form | Look | Save ---------- */
function adminTabs() {
  const fromModules = Portal.modules
    .filter((m) => m.admin)
    .map((m) => [m.name, m.admin.label || m.label || m.name]);
  return [...fromModules, ["look", "Look"], ["export", "Save"]];
}
function openAdmin(tab) {
  if (!isAdmin()) return openAuth("login");
  const panel = $("#pAdmin");
  const tabs = adminTabs();
  if (!tabs.some((t) => t[0] === tab)) tab = tabs[0][0];
  const mod = Portal.modules.find((m) => m.name === tab && m.admin);

  let body = "";
  if (mod) body = safe(() => mod.admin.html(), tab + ".admin.html") || "";
  else if (tab === "look") body = lookTabHtml();
  else body = saveTabHtml();

  panel.innerHTML = `
    <div class="mhead">
      <div><span class="eyebrow">Administrator</span><h2>Admin panel</h2></div>
      <button class="xbtn" data-close="mAdmin" aria-label="Close">${X_ICON}</button>
    </div>
    <div class="tabs">${tabs.map((t) => `<button class="${tab === t[0] ? "on" : ""}" data-t="${t[0]}">${esc(t[1])}</button>`).join("")}</div>
    ${body}`;
  $$(".tabs button", panel).forEach((b) => (b.onclick = () => openAdmin(b.dataset.t)));

  if (mod) safe(() => mod.admin.bind && mod.admin.bind(), tab + ".admin.bind");
  if (tab === "look") bindLookTab();
  if (tab === "export") bindSaveTab();
  openM("mAdmin");
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

/* --- tab: Save (code to copy into the module files) --- */
function saveTabHtml() {
  return `<p class="mini" style="margin-top:1.1rem">Things you add here are saved in <b>this browser only</b>. To keep them for everyone, copy the code below and paste it where each comment says (inside the matching file in the <b>modules</b> folder), then commit to git.</p>
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
  let out = "";
  Portal.modules.forEach((m) => {
    const code = m.admin && m.admin.code && safe(() => m.admin.code(), m.name + ".admin.code");
    if (code) out += code + "\n\n";
  });
  out += `// ---- colours + mode: paste into SETTINGS in script.js ----\ntheme: { deep: "${theme.deep}", main: "${theme.main}", accent: "${theme.accent}" },\ndefaultMode: "${mode}",`;
  return out;
}

/* ---------- [pages] switching pages without reloading ---------- */
const view = $("#view");
const TITLES = { home: "University of Ruhuna — News Portal" };
let PAGES = ["home"]; // filled in by start() from the modules that loaded

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
    requestAnimationFrame(() =>
      requestAnimationFrame(() => $$(".words,.tag", page).forEach((el) => el.classList.add("go"))),
    );
}
function resetReveals(scope) {
  const els = $$(".rv,.rv-line", scope);
  els.forEach((el, index) => {
    io.unobserve(el);
    el.classList.remove("in");

    // MODIFIED: a very small stagger makes cards/sections appear one after another.
    el.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
  });
  requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
}
function activate(name, goTop) {
  $$(".page").forEach((p) => p.classList.toggle("active", p.dataset.page === name));
  $$("[data-nav]").forEach((a) => a.classList.toggle("on", a.dataset.nav === name));
  document.title = TITLES[name] || TITLES.home;
  const page = $(`.page[data-page="${name}"]`);
  $$(".words", page).forEach(prepWords);
  if (goTop) scrollToTop(true);
  resetReveals(page);
  resetReveals($("footer.ft"));
  playIntro(page);
  onScroll();
}
function route(force) {
  let name = (location.hash.replace(/^#\/?/, "") || "home").split("?")[0];
  if (!PAGES.includes(name)) name = "home"; // unknown or removed page -> Home
  if (name === Portal.current && !force) return;
  const same = name === Portal.current;
  Portal.current = name;
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

/* One simple window that any module can use to show a story or notice. */
function openRead(item) {
  $("#pRead").innerHTML = `
    <div class="mhead">
      <div><span class="eyebrow">${esc(item.eyebrow || "")}</span>
      <h2 style="font-size:2rem">${esc(item.title)}</h2></div>
      <button class="xbtn" data-close="mRead" aria-label="Close">${X_ICON}</button>
    </div>
    ${item.src ? `<div class="dimg">${imgTag(item.src)}</div>` : ""}
    <p class="meta">${fmt(item.date)} · ${esc(item.author || "University of Ruhuna")}</p>
    <div class="detail-body">${esc(item.text)}</div>`;
  openM("mRead");
}

/* Clicks on admin buttons: data-act="admin-news", "admin-announcements", "admin-theme", ... */
document.addEventListener("click", (e) => {
  const act = e.target.closest("[data-act]");
  if (!act) return;
  e.preventDefault();
  const name = act.dataset.act;
  if (name === "admin-theme") openAdmin("look");
  else if (name.startsWith("admin-")) openAdmin(name.slice(6));
  else if (name === "top") scrollToTop();
  else if (name === "signin") store.session ? logout() : openAuth("login");
});

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

/* ---------- [start] everything begins here, after every module file has loaded ---------- */
function navHtml(kind) {
  const links = [["home", "Home"], ...Portal.modules.filter((m) => m.page && m.nav !== false).map((m) => [m.name, m.label || m.name])];
  return links
    .map(([name, label], i) =>
      kind === "drawer"
        ? `<a href="#/${name}" data-nav="${name}" style="transition-delay:${(0.12 + i * 0.07).toFixed(2)}s">${esc(label)} <small>${String(i + 1).padStart(2, "0")}</small></a>`
        : kind === "footer"
          ? `<li><a href="#/${name}">${esc(label)}</a></li>`
          : `<a href="#/${name}" data-nav="${name}">${esc(label)}</a>`,
    )
    .join("");
}

function mountModule(m) {
  if (m.page)
    view.insertAdjacentHTML("beforeend", `<section class="page" data-page="${esc(m.name)}">${m.page}</section>`);
  [].concat(m.home || []).forEach((h) => {
    const slot = $(`[data-slot="${h.slot}"]`);
    if (slot) slot.insertAdjacentHTML("beforeend", h.html);
  });
  if (m.title) TITLES[m.name] = m.title;
  if (m.page) PAGES.push(m.name);
}

function start() {
  history.scrollRestoration = "manual";
  scrollTo(0, 0);

  // 1. put every module's pages and Home sections into the page
  Portal.modules = Portal.modules.filter((m) => safe(() => (mountModule(m), true), m.name + ".mount"));

  // 2. menus made from the modules that really loaded
  $("#topnav").innerHTML = navHtml("top");
  $("#dnav").innerHTML = navHtml("drawer");
  $("#fPortal").innerHTML = navHtml("footer");
  $$("[data-needs]").forEach((el) => !Portal.has(el.dataset.needs) && el.remove());

  // 3. optional features that are switched off
  $$("[data-feature]").forEach((el) => {
    if (!SETTINGS.features[el.dataset.feature]) el.remove();
  });

  // 4. footer scrolling text: repeat the phrases until the strip is wider than the screen
  $$(".mq-track").forEach((track) => {
    const set = track.firstElementChild;
    let sets = 1;
    while (track.scrollWidth < innerWidth * 2 && sets < 16) {
      track.append(set.cloneNode(true));
      sets++;
    }
    if (sets % 2) track.append(set.cloneNode(true)); // the loop needs an even number of copies
  });

  // 5. modules wire up their buttons, then everything is drawn
  Portal.modules.forEach((m) => m.init && safe(() => m.init(), m.name + ".init"));
  paintLogos();
  updateAuthUI();
  Portal.renderAll();
  if (!location.hash) history.replaceState(null, "", "#/home");
  route(true);
}
document.addEventListener("DOMContentLoaded", start);
