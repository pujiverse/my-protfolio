// This file reads PORTFOLIO from data.js and builds the page.
// You normally don't need to edit this file — edit data.js instead.

const P = PORTFOLIO;
const $ = (id) => document.getElementById(id);

// Small helper to safely insert text
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---------- Hero ----------
$("name").textContent = P.name;
$("nav-name").textContent = P.name.split(" ")[0];
$("footer-name").textContent = P.name;
$("title").textContent = P.title;
$("subtitle").textContent = P.subtitle;
$("location").textContent = P.location;
$("photo").src = P.photo;
$("year").textContent = new Date().getFullYear();

let heroButtons = `<a class="btn" href="#contact">Contact me</a>`;
if (P.contact.linkedin) heroButtons += `<a class="btn ghost" href="${esc(P.contact.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`;
if (P.contact.github) heroButtons += `<a class="btn ghost" href="${esc(P.contact.github)}" target="_blank" rel="noopener">GitHub</a>`;
if (P.resumeLink) heroButtons += `<a class="btn ghost" href="${esc(P.resumeLink)}" target="_blank" rel="noopener">Resume</a>`;
$("hero-buttons").innerHTML = heroButtons;

// ---------- About ----------
$("about-text").innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join("");

// ---------- Experience ----------
$("experience-list").innerHTML = P.experience.map((job) => `
  <article class="job">
    <div class="job-head">
      <h3>${esc(job.role)}</h3>
      <span class="dates">${esc(job.dates)}</span>
    </div>
    <p class="company">${esc(job.company)}</p>
    <ul>${job.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
  </article>`).join("");

// ---------- Projects ----------
$("project-list").innerHTML = P.projects.map((pr) => `
  <article class="card">
    <h3>${esc(pr.name)}</h3>
    <p>${esc(pr.text)}</p>
    <div class="tags">${pr.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="card-links">
      ${pr.link ? `<a href="${esc(pr.link)}" target="_blank" rel="noopener">Live site →</a>` : ""}
      ${pr.code ? `<a href="${esc(pr.code)}" target="_blank" rel="noopener">Code</a>` : ""}
    </div>
  </article>`).join("");

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
    </div>
    ${e.dates ? `<span class="dates">${esc(e.dates)}</span>` : ""}
  </div>`).join("");

// ---------- Pujiverse ----------
$("pujiverse-text").textContent = P.pujiverse.text;
$("pujiverse-link").href = P.pujiverse.link;

// ---------- Contact ----------
const c = P.contact;
const contactItems = [
  c.email    && ["Email", c.email, "mailto:" + c.email],
  c.phone    && ["Phone", c.phone, "tel:" + c.phone.replace(/[^\d+]/g, "")],
  c.linkedin && ["LinkedIn", "View profile", c.linkedin],
  c.github   && ["GitHub", c.github.replace("https://", ""), c.github],
  c.website  && ["Website", c.website.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, ""), c.website],
  c.youtube  && ["YouTube", "Pujiverse", c.youtube]
].filter(Boolean);

$("contact-list").innerHTML = contactItems.map(([label, text, href]) => `
  <a class="contact-item" href="${esc(href)}" ${href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
    <span class="label">${esc(label)}</span>
    <span>${esc(text)}</span>
  </a>`).join("");
