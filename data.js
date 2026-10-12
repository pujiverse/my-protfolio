/* =====================================================================
   ✏️  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   ---------------------------------------------------------------------
   Everything on the website comes from this one file.
   - Change any text between the quotes "..."
   - To add an item, copy one { ... }, block, paste it below, and edit.
   - To remove an item, delete its whole { ... }, block.
   - Keep the commas between items.
   Save → commit on GitHub → Vercel updates the site in ~1 minute.
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- BASIC INFO (top of the page) ---------- */
  name: "Pujith Chowdary Sakhamuri",
  title: "IT Infrastructure & Application Support Engineer",
  subtitle: "Network Data Analyst · Data Engineer · Pujiverse Creator",
  location: "Celina, Texas, USA",
  photo: "media/profile.jpg",          // replace media/profile.jpg to change your photo
  resumeLink: "",                       // optional: paste a link to your resume PDF

  about: [
    "I'm an IT infrastructure, application support and data professional based in Celina, Texas. I currently work as a Network Data Analyst with Telka LLC, placed at T-Mobile's Central Region.",
    "Before that I worked as a Data Engineer on client projects for CVS Pharmacy and Cleveland Clinic, and as a Graduate Assistant in Data Analytics & Reporting at Cleveland State University.",
    "Outside of work I build things: I run the Pujiverse Network, a multi-channel YouTube brand, and a family of data-driven websites at pujiverse.com. I'm currently building AI agents with Google ADK, BigQuery and Cloud Run."
  ],

  /* ---------- CONTACT & LINKS ---------- */
  contact: {
    email: "pujithchowdarys@gmail.com",
    phone: "(216) 307-5432",            // delete the number (leave "") to hide it
    linkedin: "https://www.linkedin.com/in/pujith-sakhamuri-06b69a137/",
    github: "https://github.com/pujiverse",
    website: "https://www.pujiverse.com/",
    youtube: "https://www.youtube.com/@pujiversetech"
  },

  /* ---------- SKILLS (each group becomes a card) ---------- */
  skills: [
    { group: "Data & Analytics",      items: ["SQL", "Python", "R", "Excel", "Power BI", "Tableau", "Data Visualization"] },
    { group: "Data Engineering",      items: ["ETL Pipelines", "BigQuery", "Data Cleaning", "Reporting Automation"] },
    { group: "Cloud & AI",            items: ["Google Cloud", "Google ADK (AI Agents)", "Cloud Run", "Gemini API"] },
    { group: "Infrastructure & Support", items: ["Application Support", "Network Data Analysis", "Troubleshooting", "Linux"] },
    { group: "Web",                   items: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Vercel", "Supabase"] }
  ],

  /* ---------- EXPERIENCE (newest first) ---------- */
  experience: [
    {
      role: "Network Data Analyst",
      company: "Telka LLC — Client: T-Mobile (Central Region)",
      dates: "Present",
      points: [
        "Analyze network data for T-Mobile's Central Region.",
        "Build reports and support day-to-day network operations."
      ]
    },
    {
      role: "Data Engineer",
      company: "SR Systems — Client: CVS Pharmacy",
      dates: "Jul 2024 – Jul 2026",
      points: [
        "Built and maintained data pipelines and reporting for pharmacy operations.",
        "Supported data quality, troubleshooting and application issues for the client team."
      ]
    },
    {
      role: "Data Engineer",
      company: "IvyNova — Client: Cleveland Clinic",
      dates: "Jun 2023 – Jul 2024",
      points: [
        "Worked on healthcare data pipelines, data preparation and reporting.",
        "Collaborated with analysts and engineers to deliver clean, reliable datasets."
      ]
    },
    {
      role: "Graduate Assistant — Data Analytics & Reporting",
      company: "Cleveland State University",
      dates: "During M.S. program",
      points: [
        "Prepared reports and dashboards for university departments using Excel, SQL, Power BI and Tableau.",
        "Maintained student and academic data and helped automate recurring tasks with Python."
      ]
    },
    {
      role: "Freelance Developer",
      company: "Hyderabad, India",
      dates: "Oct 2020 – Jan 2022",
      points: [
        "Helped students with their academic projects.",
        "Built web applications for clients while preparing for graduate study."
      ]
    }
  ],

  /* ---------- PROJECTS ---------- */
  /* link = live site, code = GitHub repo. Leave "" if you don't have one. */
  projects: [
    {
      name: "Pujiverse.com",
      text: "Official home of the Pujiverse brand — hub for all my websites, channels and projects.",
      tags: ["Website", "Vercel"],
      link: "https://www.pujiverse.com/",
      code: ""
    },
    {
      name: "The AI Timeline",
      text: "Interactive history of artificial intelligence on a center-line timeline, with AI companies and the models they launched.",
      tags: ["HTML/CSS/JS", "Data", "AI"],
      link: "https://ai-timeline.pujiverse.com/",
      code: "https://github.com/pujiverse/The-AI-Timeline"
    },
    {
      name: "Pujiverse World Atlas",
      text: "World population explorer — continents down to cities — backed by a BigQuery dataset and an ADK AI agent.",
      tags: ["BigQuery", "Google ADK", "Maps"],
      link: "https://world.pujiverse.com/",
      code: "https://github.com/pujiverse/pujiverse-world-atlas"
    },
    {
      name: "Vehicle Universe",
      text: "Every type of vehicle, from cycles to rockets — brands, models and year-by-year evolution, with a BigQuery dataset and ADK agent.",
      tags: ["BigQuery", "Google ADK", "Website"],
      link: "https://vehicles.pujiverse.com/",
      code: "https://github.com/pujiverse/Vehicle-Universe"
    },
    {
      name: "Pujiverse Film Database",
      text: "IMDb-style database covering world film industries and web series, with where-to-watch info and user ratings.",
      tags: ["Turso", "Supabase", "Website"],
      link: "https://cinema.pujiverse.com/",
      code: ""
    },
    {
      name: "FlyPal",
      text: "Concept app for real-time social matching during airport layovers. Pitch deck and prototype, with safety as the core design focus.",
      tags: ["Product Design", "Prototype"],
      link: "",
      code: ""
    },
    {
      name: "Pujiverse Creative Spark",
      text: "Turns an idea into songs, stories or narrations with downloadable lyrics and voiceovers in multiple languages.",
      tags: ["Gemini API", "Text-to-Speech"],
      link: "https://pujiverse-creative-spark.vercel.app/",
      code: "https://github.com/pujiverse/Creative-Spark"
    },
    {
      name: "VidPrompt Studio",
      text: "Browser-based video tool: generate scripts with AI, auto-trim and combine scenes, narrate and export.",
      tags: ["Gemini API", "Video"],
      link: "https://pujiverse-vid-prompt-studio-new.vercel.app/",
      code: "https://github.com/pujiverse/VidPrompt-Studio_new"
    },
    {
      name: "Business Manager Pro",
      text: "Web app to track daily business, chits, household expenses and loans with summary reports.",
      tags: ["Web App", "Reporting"],
      link: "https://biz-manager-eight.vercel.app/",
      code: "https://github.com/pujiverse/biz-manager"
    }
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    { degree: "Graduate coursework — Data Analytics & Machine Learning", school: "Indiana Wesleyan University", dates: "In progress" },
    { degree: "M.S. in Computer and Information Sciences", school: "Cleveland State University, Ohio", dates: "" },
    { degree: "B.Tech in Computer Science & Engineering", school: "JNTUH, Hyderabad, India", dates: "2016 – 2020" }
  ],

  /* ---------- PUJIVERSE NETWORK ---------- */
  pujiverse: {
    text: "Pujiverse Network is my multi-channel YouTube media brand — 39 channels across tech, AI, careers, movies, history and more, built and run by me.",
    link: "https://www.pujiverse.com/"
  }
};
