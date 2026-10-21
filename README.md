# Pujith Sakhamuri — Portfolio

Live: https://pujith-sakhamuri-portfolio.vercel.app/

Plain HTML, CSS and JavaScript. No build step, no npm, no API keys.

## How to edit

| What you want to change | File |
|---|---|
| Any text: name, about, jobs, projects, skills, education, social links, contact | `data.js` |
| YouTube channels and their playlists | `channels.js` |
| Colors, fonts, spacing | `style.css` (colors are at the top) |
| Your photo | replace `media/profile.jpg` (keep the same name) |
| Page layout / section order | `index.html` |

You can edit right on GitHub: open `data.js` (or `channels.js`) → click the pencil ✏️ → change the text → **Commit changes**. Vercel redeploys automatically in about a minute.

### Add a project
In `data.js`, copy one project block, paste it under the others, and edit:

```js
{
  name: "My New Project",
  text: "One or two sentences about it.",
  tags: ["Python", "BigQuery"],
  link: "https://live-site-url",
  code: "https://github.com/pujiverse/repo-name"
},
```

### Preview on your computer
Just double-click `index.html` to open it in your browser.
