// This file reads PORTFOLIO (data.js) and CHANNELS (channels.js) and builds the page.
// You normally don't need to edit this file — edit data.js or channels.js instead.

const P = PORTFOLIO;
const $ = (id) => document.getElementById(id);

// Safely insert text
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ext = 'target="_blank" rel="noopener"';
const unique = (arr) => [...new Set(arr)];

// Builds a row of filter buttons; onPick(value) is called with "All" or a category
function filters(el, values, onPick) {
  el.innerHTML = ["All", ...values].map((v, i) =>
    `<button class="chip${i === 0 ? " on" : ""}" data-v="${esc(v)}">${esc(v)}</button>`).join("");
  el.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    el.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    onPick(b.dataset.v);
  });
}

// ---------- Hero ----------
$("name").textContent = P.name;
$("nav-name").textContent = P.name.split(" ")[0];
$("footer-name").textContent = P.name;
$("title").textContent = P.title;
$("subtitle").textContent = P.subtitle;
$("location").textContent = P.location;
$("photo").src = P.photo;
$("year").textContent = new Date().getFullYear();

const c = P.contact;
$("hero-buttons").innerHTML = [
  `<a class="btn" href="#contact">Contact me</a>`,
  P.resumeLink && `<a class="btn ghost" href="${esc(P.resumeLink)}" ${ext}>Resume</a>`,
  c.linkedin && `<a class="btn ghost" href="${esc(c.linkedin)}" ${ext}>LinkedIn</a>`,
  c.github && `<a class="btn ghost" href="${esc(c.github)}" ${ext}>GitHub</a>`,
  c.website && `<a class="btn ghost" href="${esc(c.website)}" ${ext}>Pujiverse</a>`
].filter(Boolean).join("");

// ---------- Stats (counted automatically) ----------
const playlistCount = CHANNELS.reduce((n, ch) => n + ch.playlists.length, 0);
const stats = [
  [P.projects.length, "Projects"],
  [P.projects.filter((p) => p.status === "Live").length, "Live sites & apps"],
  [CHANNELS.length, "YouTube channels"],
  [playlistCount, "Playlists"],
  [P.social.length, "Platforms"]
];
$("stats").innerHTML = stats.map(([n, l]) =>
  `<div class="stat"><strong>${n.toLocaleString()}</strong><span>${esc(l)}</span></div>`).join("");

// ---------- About ----------
$("about-text").innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join("");

// ---------- Experience ----------
$("experience-list").innerHTML = P.experience.map((job) => `
  <article class="job">
    <div class="job-head">
      <h3>${esc(job.role)}</h3>
      <span class="dates">${esc(job.dates)}</span>
    </div>
    <p class="company">${job.link ? `<a href="${esc(job.link)}" ${ext}>${esc(job.company)}</a>` : esc(job.company)}
      <span class="meta">· ${esc(job.type)} · ${esc(job.location)}</span></p>
    <p class="job-text">${esc(job.text)}</p>
  </article>`).join("");

// ---------- Projects ----------
function showProjects(cat) {
  const list = P.projects.filter((p) => cat === "All" || p.category === cat);
  $("project-list").innerHTML = list.map((pr) => `
    <article class="card">
      <div class="card-top">
        <span class="cat">${esc(pr.category)}</span>
        <span class="status s-${esc(pr.status.toLowerCase().replace(/\s+/g, "-"))}">${esc(pr.status)}</span>
      </div>
      <h3>${esc(pr.name)}</h3>
      <p>${esc(pr.text)}</p>
      <div class="tags">${pr.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="card-links">
        ${pr.link ? `<a href="${esc(pr.link)}" ${ext}>Live site →</a>` : ""}
        ${pr.code ? `<a href="${esc(pr.code)}" ${ext}>Code</a>` : ""}
      </div>
    </article>`).join("");
}
filters($("project-filters"), unique(P.projects.map((p) => p.category)), showProjects);
showProjects("All");

// ---------- YouTube channels ----------
$("youtube-lead").textContent =
  `${CHANNELS.length} channels and ${playlistCount.toLocaleString()} playlists, grouped into ${unique(CHANNELS.map((c) => c.category)).length} categories. Tap a channel to see its playlists.`;

function showChannels(cat) {
  const list = CHANNELS.filter((ch) => cat === "All" || ch.category === cat);
  $("channel-list").innerHTML = list.map((ch) => `
    <article class="card channel">
      <div class="card-top">
        <span class="cat">${esc(ch.category)}</span>
        <span class="count">${ch.playlists.length} playlists</span>
      </div>
      <h3><a href="${esc(ch.link)}" ${ext}>${esc(ch.name)}</a></h3>
      <a class="handle" href="${esc(ch.link)}" ${ext}>${esc(ch.handle)}</a>
      ${ch.tagline ? `<p>${esc(ch.tagline.charAt(0).toUpperCase() + ch.tagline.slice(1))}</p>` : ""}
      ${ch.playlists.length ? `
        <details>
          <summary>View playlists</summary>
          <ol>${ch.playlists.map((pl) => `<li>${esc(pl)}</li>`).join("")}</ol>
        </details>` : ""}
    </article>`).join("");
}
filters($("channel-filters"), unique(CHANNELS.map((ch) => ch.category)), showChannels);
showChannels("All");

// ---------- Skills ----------
$("skill-list").innerHTML = P.skills.map((s) => `
  <article class="card">
    <h3>${esc(s.group)}</h3>
    <div class="tags">${s.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div>
  </article>`).join("");

// ---------- Education ----------
$("education-list").innerHTML = P.education.map((e) => `
  <div class="edu-item">
    <div>
      <h3>${esc(e.degree)}</h3>
      <p>${esc(e.school)}</p>
      ${e.note ? `<p class="note">${esc(e.note)}</p>` : ""}
    </div>
    ${e.dates ? `<span class="dates">${esc(e.dates)}</span>` : ""}
  </div>`).join("");

// ---------- Social ----------
const groups = unique(P.social.map((s) => s.group));
$("social-list").innerHTML = groups.map((g) => `
  <div class="social-group">
    <h3>${esc(g)}</h3>
    <div class="social-links">
      ${P.social.filter((s) => s.group === g).map((s) => s.link
        ? `<a href="${esc(s.link)}" ${ext}><b>${esc(s.platform)}</b><span>${esc(s.handle)}</span></a>`
        : `<div><b>${esc(s.platform)}</b><span>${esc(s.handle)}</span></div>`).join("")}
    </div>
  </div>`).join("");

// ---------- Contact ----------
const contactItems = [
  c.email      && ["Email", c.email, "mailto:" + c.email],
  c.brandEmail && ["Pujiverse email", c.brandEmail, "mailto:" + c.brandEmail],
  c.phone      && ["Phone", c.phone, "tel:" + c.phone.replace(/[^\d+]/g, "")],
  c.linkedin   && ["LinkedIn", "View profile", c.linkedin],
  c.github     && ["GitHub", c.github.replace("https://", ""), c.github],
  c.website    && ["Website", c.website.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, ""), c.website]
].filter(Boolean);

$("contact-list").innerHTML = contactItems.map(([label, text, href]) => `
  <a class="contact-item" href="${esc(href)}" ${href.startsWith("http") ? ext : ""}>
    <span class="label">${esc(label)}</span>
    <span>${esc(text)}</span>
  </a>`).join("");
