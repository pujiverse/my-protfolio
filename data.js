/* =====================================================================
   ✏️  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   ---------------------------------------------------------------------
   Everything on the website comes from this file (YouTube channels and
   playlists are in channels.js).
   - Change any text between the quotes "..."
   - To add an item, copy one { ... }, block, paste it below, and edit.
   - To remove an item, delete its whole { ... }, block.
   - Keep the commas between items.
   Save → commit on GitHub → Vercel updates the site in about a minute.
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- BASIC INFO (top of the page) ---------- */
  name: "Pujith Chowdary Sakhamuri",
  title: "Full Stack Data & AI Engineer",
  subtitle: "GCP · BigQuery · Dataflow · Vertex AI · Gemini API  |  Network Data Analyst @ Telka (T-Mobile)  |  Pujiverse Creator",
  location: "Celina, Texas, United States",
  photo: "media/profile.jpg",          // replace media/profile.jpg to change your photo
  resumeLink: "https://github.com/pujiverse/pujiverse/blob/main/resume.pdf",

  about: [
    "I build data platforms and AI tools, from pipelines and semantic models on Google Cloud to web apps people use.",
    "Network Data Analyst at Telka supporting T-Mobile; previously Full Stack Data & AI Engineer for CVS Pharmacy (SR Systems) and Data Engineer for Cleveland Clinic (IvyNova).",
    "Creator of Pujiverse: 41 YouTube channels plus interactive projects like The AI Timeline, Vehicle Universe, the Pujiverse World Atlas and Pujiverse Kitchen."
  ],

  /* ---------- CONTACT & MAIN LINKS ---------- */
  contact: {
    email: "pujithchowdarys@gmail.com",
    brandEmail: "pujiverse@gmail.com",
    phone: "(216) 307-5432",            // leave "" to hide it
    linkedin: "https://www.linkedin.com/in/pujith-sakhamuri-06b69a137/",
    github: "https://github.com/pujiverse",
    website: "https://www.pujiverse.com/",
    pujiverseHome: "https://pujiverse.github.io/Pujiverse-Network/"
  },

  /* ---------- EXPERIENCE (newest first) ---------- */
  experience: [
    {
      role: "Creator & Founder",
      company: "Pujiverse Network",
      type: "Self-employed",
      location: "Remote",
      dates: "Mar 2025 – Present",
      text: "Built and run a network of 41 YouTube channels, interactive data projects (The AI Timeline, Vehicle Universe, World Atlas, Pujiverse Kitchen) and 18+ Gemini-powered apps.",
      link: "https://pujiverse.github.io/Pujiverse-Network/"
    },
    {
      role: "Network Data Analyst",
      company: "Telka LLC",
      type: "Full-time",
      location: "Prosper, TX (client: T-Mobile, Central Region)",
      dates: "Aug 2026 – Present",
      text: "5G/LTE drive-test data and RF metrics (RSRP, RSRQ, SINR, throughput); Python/SQL log validation; FCC compliance audits; weekly KPI dashboards.",
      link: ""
    },
    {
      role: "AI & LLM Evaluation Specialist",
      company: "Alignerr",
      type: "Contract",
      location: "Remote",
      dates: "Jan 2025 – Present",
      text: "Evaluate LLM outputs on Python, SQL and multi-step reasoning under RLHF guidelines; build tool-calling validation datasets.",
      link: ""
    },
    {
      role: "Full Stack & Generative AI Developer",
      company: "Upwork",
      type: "Freelance",
      location: "Remote",
      dates: "Jan 2024 – Present",
      text: "Web apps and AI tools for small businesses with React, TypeScript, Python and the Gemini API on Vercel and Cloud Run.",
      link: ""
    },
    {
      role: "Full Stack Data & AI Engineer",
      company: "SR Systems LLC",
      type: "Full-time",
      location: "Texas (client: CVS Pharmacy)",
      dates: "Jul 2024 – Jul 2026",
      text: "BigQuery semantic models for Vertex AI; Dataflow, Pub/Sub, Cloud Composer pipelines; Cloud Run APIs; Terraform and GitHub Actions; HIPAA data governance.",
      link: ""
    },
    {
      role: "Data Engineer",
      company: "Ivynova Solutions, Inc.",
      type: "Full-time",
      location: "Cleveland, OH (client: Cleveland Clinic)",
      dates: "Jun 2023 – Jul 2024",
      text: "GCS ingestion of clinical feeds; Cloud Functions and Airflow DAGs (99.8% data accuracy); star-schema models in BigQuery for BI.",
      link: ""
    },
    {
      role: "Graduate Assistant, Data Analytics & Infrastructure Support",
      company: "Cleveland State University",
      type: "Part-time",
      location: "Cleveland, OH",
      dates: "Mar 2022 – May 2023",
      text: "SQL reporting datasets, automated ETL workflows, Power BI and Tableau dashboards, data validation checks.",
      link: ""
    },
    {
      role: "Freelance Developer / Data Analyst",
      company: "Self-employed",
      type: "Freelance",
      location: "Hyderabad, India",
      dates: "Oct 2020 – Jan 2022",
      text: "Mentored engineering students on academic projects; built web applications; debugging and project documentation.",
      link: ""
    },
  ],

  /* ---------- PROJECTS ----------
     category groups them into filter buttons. status: Live / In progress / Concept / Code only
     link = live site, code = GitHub repo. Leave "" if there is none. */
  projects: [
    {
      category: "Home",
      name: "Pujiverse Home (Network Hub)",
      text: "Main home page for the Pujiverse Network: channels, projects and apps in one place",
      tags: ["HTML/JS"],
      status: "Live",
      link: "https://pujiverse.github.io/Pujiverse-Network/",
      code: "https://github.com/pujiverse/Pujiverse-Network"
    },
    {
      category: "Featured data platform",
      name: "The AI Timeline",
      text: "Interactive history of AI from 1843 to today: era timeline, release tracker, model library and comparisons",
      tags: ["HTML/JS"],
      status: "Live",
      link: "https://pujiverse.github.io/The-AI-Timeline/",
      code: "https://github.com/pujiverse/The-AI-Timeline"
    },
    {
      category: "Featured data platform",
      name: "Vehicle Universe",
      text: "Every vehicle from bicycles to rockets: 57 types, 3,400+ brands, 59,000+ models",
      tags: ["HTML/JS", "BigQuery"],
      status: "Live",
      link: "https://pujiverse.github.io/Vehicle-Universe/",
      code: "https://github.com/pujiverse/Vehicle-Universe"
    },
    {
      category: "Featured data platform",
      name: "Pujiverse World Atlas",
      text: "3D globe population explorer, world to city, 2015–2025 trends and water bodies",
      tags: ["HTML/JS", "BigQuery"],
      status: "Live",
      link: "https://pujiverse.github.io/pujiverse-world-atlas/",
      code: "https://github.com/pujiverse/pujiverse-world-atlas"
    },
    {
      category: "Featured data platform",
      name: "Pujiverse Film Database",
      text: "IMDb-style database of movies, short films, anime and TV across world film industries",
      tags: ["HTML/JS"],
      status: "In progress",
      link: "",
      code: "https://github.com/pujiverse/Pujiverse-Film-Database"
    },
    {
      category: "Featured data platform",
      name: "Pujiverse Kitchen",
      text: "Indian regional cooking by state: dishes, ingredients and step-by-step recipes",
      tags: ["HTML/JS"],
      status: "Live",
      link: "https://kitchen.pujiverse.com/",
      code: ""
    },
    {
      category: "Web app & tool",
      name: "BizManager Lite",
      text: "Dependency-free business, chit, loan and household expense manager",
      tags: ["HTML/CSS/JS"],
      status: "Live",
      link: "https://pujiverse.github.io/ledger/",
      code: "https://github.com/pujiverse/ledger"
    },
    {
      category: "Web app & tool",
      name: "Household Expense Manager (Firebase)",
      text: "Multi-page expense, business and chit manager with Firebase Authentication",
      tags: ["JavaScript", "Firebase"],
      status: "Live",
      link: "https://pujiverse.github.io/HouseholdExpenseManager/",
      code: "https://github.com/pujiverse/HouseholdExpenseManager"
    },
    {
      category: "Web app & tool",
      name: "Expense Manager (Google Sheets)",
      text: "Household expense, business, chit and loan tracker backed by Google Sheets",
      tags: ["JavaScript", "Google Sheets API"],
      status: "Live",
      link: "https://pujiverse.github.io/Expense-Manager/",
      code: "https://github.com/pujiverse/Expense-Manager"
    },
    {
      category: "Web app & tool",
      name: "Auto-Updating Portfolio",
      text: "Portfolio that pulls its content live from a Google Sheet",
      tags: ["JavaScript", "Google Sheets"],
      status: "Live",
      link: "https://pujiverse.github.io/pujith-portfolio/",
      code: "https://github.com/pujiverse/pujith-portfolio"
    },
    {
      category: "Web app & tool",
      name: "Pujiverse Network Master Data",
      text: "Master data for the channels in the Pujiverse Network",
      tags: ["HTML/JS"],
      status: "Live",
      link: "https://pujiverse.github.io/PujiverseNetwork/",
      code: "https://github.com/pujiverse/PujiverseNetwork"
    },
    {
      category: "Web app & tool",
      name: "FlyPal",
      text: "Concept: real-time social matching app for airport layovers",
      tags: [],
      status: "Concept",
      link: "",
      code: "https://github.com/pujiverse/FlyPal"
    },
    {
      category: "Google AI Studio app",
      name: "Pujiverse Voice Studio",
      text: "Text-to-speech voice-overs with selectable age, gender and emotion",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-voice-studio.vercel.app/",
      code: "https://github.com/pujiverse/Pujiverse-Voice-Studio"
    },
    {
      category: "Google AI Studio app",
      name: "YouTube Video Creator",
      text: "Scripts, voice-overs and background music for YouTube videos",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://puji-verse-video-content-creator.vercel.app/",
      code: "https://github.com/pujiverse/PujiVerse-Video-Content-Creator"
    },
    {
      category: "Google AI Studio app",
      name: "Pujiverse Creation Spark",
      text: "Turns an idea into songs, stories or narrations in multiple languages",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-creative-spark.vercel.app/",
      code: "https://github.com/pujiverse/Creative-Spark"
    },
    {
      category: "Google AI Studio app",
      name: "Recipe Voice-over Generator",
      text: "Multilingual cooking voice-overs from recipe steps",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-recipe-voice-over-generat.vercel.app/",
      code: "https://github.com/pujiverse/Recipe-Voice-over-Generator"
    },
    {
      category: "Google AI Studio app",
      name: "Pujiverse Cinema Storyteller",
      text: "Movie scripts and voice-overs in Telugu–English",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-cinema.vercel.app/",
      code: "https://github.com/pujiverse/pujiverse-cinema"
    },
    {
      category: "Google AI Studio app",
      name: "Movie Storyteller & Live AI",
      text: "Stories from subtitles, transcript analysis and live voice chat",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-subtitle-to-story.vercel.app/",
      code: "https://github.com/pujiverse/movie-subtitle-to-story"
    },
    {
      category: "Google AI Studio app",
      name: "Text to Audio",
      text: "Simple text-to-audio generator",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://voice-three-blush.vercel.app/",
      code: "https://github.com/pujiverse/voice"
    },
    {
      category: "Google AI Studio app",
      name: "VidPrompt Studio",
      text: "Prompt-driven video trimming, narration and in-browser editing",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-vid-prompt-studio-new.vercel.app/",
      code: "https://github.com/pujiverse/VidPrompt-Studio_new"
    },
    {
      category: "Google AI Studio app",
      name: "VidPrompt Studio (earlier version)",
      text: "Earlier offline-first version of VidPrompt Studio",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Code only",
      link: "",
      code: "https://github.com/pujiverse/VidPrompt-Studio"
    },
    {
      category: "Google AI Studio app",
      name: "SmartSceneCutter",
      text: "Cuts and merges clips from prompts and timestamps; generates FFmpeg commands",
      tags: ["TypeScript", "React", "Gemini API", "FFmpeg.wasm"],
      status: "Live",
      link: "https://smart-scene-cutter.vercel.app/",
      code: "https://github.com/pujiverse/SmartSceneCutter"
    },
    {
      category: "Google AI Studio app",
      name: "Text-to-Video Generator",
      text: "Prompt-to-video with aspect-ratio and resolution control",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-text-to-video.vercel.app/",
      code: "https://github.com/pujiverse/text-to-video"
    },
    {
      category: "Google AI Studio app",
      name: "Presentation Generator",
      text: "Animated PPTX slides with voice-over from a single topic",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://ai-animated-presentation-generator.vercel.app/",
      code: "https://github.com/pujiverse/AI-Animated-Presentation-Generator"
    },
    {
      category: "Google AI Studio app",
      name: "PPT Voiceover Generator",
      text: "Per-slide voice-overs with playback and download",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse-ppt-voiceover-generator.vercel.app/",
      code: "https://github.com/pujiverse/PPT-Voiceover-Generator"
    },
    {
      category: "Google AI Studio app",
      name: "Pujiverse Resume Builder",
      text: "Tailors a resume to a job description",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://resume-builder-azure-omega.vercel.app/",
      code: "https://github.com/pujiverse/resume-builder"
    },
    {
      category: "Google AI Studio app",
      name: "Sai Indian Cuisine Digital Concierge",
      text: "Mobile-first restaurant landing page with an AI concierge",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://sai-indian.vercel.app/",
      code: "https://github.com/pujiverse/SAI-INDIAN"
    },
    {
      category: "Google AI Studio app",
      name: "Business Manager Pro",
      text: "Business, chit, expense and loan tracking with reports",
      tags: ["TypeScript", "React", "Supabase", "Recharts"],
      status: "Live",
      link: "https://biz-manager-eight.vercel.app/",
      code: "https://github.com/pujiverse/biz-manager"
    },
    {
      category: "Google AI Studio app",
      name: "Pujiverse Hub (earlier version)",
      text: "First version of the personal hub for socials, projects and contact",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujiverse.vercel.app/",
      code: "https://github.com/pujiverse/pujiverse-hub"
    },
    {
      category: "Google AI Studio app",
      name: "Live-Sync Portfolio",
      text: "Google-Sheet-synced portfolio with a Gemini assistant",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujithsakhamuri.vercel.app/",
      code: "https://github.com/pujiverse/New-Portfolio"
    },
    {
      category: "Google AI Studio app",
      name: "Professional Portfolio",
      text: "Career portfolio",
      tags: ["TypeScript", "React", "Gemini API"],
      status: "Live",
      link: "https://pujith-sakhamuri-portfolio.vercel.app/",
      code: "https://github.com/pujiverse/my-protfolio"
    },
    {
      category: "Academic",
      name: "AIML-500 Professional Portfolio",
      text: "Professional portfolio for AIML-500 (Indiana Wesleyan University)",
      tags: ["HTML"],
      status: "Live",
      link: "https://pujiverse.github.io/pujith_portfolio/",
      code: "https://github.com/pujiverse/pujith_portfolio"
    },
    {
      category: "Profile",
      name: "GitHub Profile README",
      text: "Profile page with projects, channels and links",
      tags: ["Markdown"],
      status: "Live",
      link: "https://github.com/pujiverse",
      code: "https://github.com/pujiverse/pujiverse"
    },
  ],

  /* ---------- SKILLS (each group becomes a card) ---------- */
  skills: [
    { group: "Cloud & Data Platform", items: ["Google Cloud Platform (GCP)", "Google BigQuery", "Vertex AI", "Cloud Dataflow", "Pub/Sub", "Cloud Composer", "Apache Airflow", "Cloud Run", "Cloud Functions", "Cloud Storage"] },
    { group: "AI & Machine Learning", items: ["Generative AI", "Gemini API", "Large Language Models", "AI Agents", "Google ADK", "Prompt Engineering", "Machine Learning", "RLHF evaluation"] },
    { group: "Data Engineering & Analytics", items: ["Data Engineering", "Data Modeling", "Dimensional Modeling", "Semantic Modeling", "ETL", "Data Pipelines", "Data Governance", "Data Quality", "HIPAA Compliance", "KPI Analysis", "RF Analytics (5G/LTE)"] },
    { group: "Programming", items: ["Python", "SQL", "PySpark", "R", "TypeScript", "JavaScript", "HTML", "CSS"] },
    { group: "Web & App Development", items: ["React", "FastAPI", "REST APIs", "Firebase", "Supabase", "PostgreSQL", "MySQL", "Vercel", "GitHub Pages"] },
    { group: "DevOps", items: ["Terraform", "Docker", "GitHub Actions", "CI/CD", "Git", "Linux"] },
    { group: "BI & Visualization", items: ["Power BI", "Tableau", "Data Visualization", "Dashboard Design"] },
    { group: "Creative", items: ["Content Creation", "Video Production", "YouTube", "Brand Identity", "Web Design", "UI/UX Design"] },
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    { degree: "Master of Science — Artificial Intelligence & Machine Learning", school: "Indiana Wesleyan University", dates: "Jul 2026 – Dec 2027 (expected)", note: "Coursework: AIML-500 Machine Learning Fundamentals, DTAN-500 Foundations of Data Analytics, DTAN-505 Data Visualization (R)" },
    { degree: "Master of Science — Computer and Information Sciences", school: "Cleveland State University", dates: "Jan 2022 – May 2023", note: "Graduate Assistant, Data Analytics & Infrastructure Support" },
    { degree: "Bachelor of Technology — Computer Science and Engineering", school: "JNTUH, Hyderabad, India", dates: "2016 – 2020", note: "" }
  ],

  /* ---------- SOCIAL & CREATOR PLATFORMS ----------
     group = heading it appears under. Leave link "" to show the handle without a link. */
  social: [
    { group: "Professional", platform: "LinkedIn (personal)", handle: "pujith-sakhamuri-06b69a137", link: "https://www.linkedin.com/in/pujith-sakhamuri-06b69a137/" },
    { group: "Professional", platform: "LinkedIn (Pujiverse)", handle: "pujiverse-pujith", link: "" },
    { group: "Professional", platform: "GitHub", handle: "pujiverse", link: "https://github.com/pujiverse" },
    { group: "Professional", platform: "Product Hunt", handle: "@pujiverse", link: "https://www.producthunt.com/@pujiverse" },
    { group: "Design", platform: "Behance", handle: "pujiverse", link: "https://www.behance.net/pujiverse" },
    { group: "Design", platform: "Dribbble", handle: "pujiverse", link: "https://dribbble.com/pujiverse" },
    { group: "Design", platform: "Sketchfab", handle: "Pujiverse", link: "https://sketchfab.com/Pujiverse" },
    { group: "Social", platform: "Instagram", handle: "@pujiverseofficial", link: "https://www.instagram.com/pujiverseofficial/" },
    { group: "Social", platform: "Facebook", handle: "pujiverseofficial", link: "https://www.facebook.com/pujiverseofficial/" },
    { group: "Social", platform: "Threads", handle: "@pujiverseofficial", link: "https://www.threads.net/@pujiverseofficial" },
    { group: "Social", platform: "X (Twitter)", handle: "@pujiverse", link: "https://x.com/pujiverse" },
    { group: "Social", platform: "Bluesky", handle: "pujiverse.bsky.social", link: "https://bsky.app/profile/pujiverse.bsky.social" },
    { group: "Social", platform: "Pinterest", handle: "pujiverse", link: "https://in.pinterest.com/pujiverse/" },
    { group: "Social", platform: "Reddit", handle: "u/pujiverse", link: "https://www.reddit.com/user/pujiverse/" },
    { group: "Social", platform: "Telegram", handle: "@pujiverse", link: "https://t.me/pujiverse" },
    { group: "Social", platform: "WhatsApp", handle: "Pujith Sakhamuri", link: "https://wa.me/message/HPIAGRGKO23SM1" },
    { group: "Social", platform: "Discord", handle: "pujiverse", link: "" },
    { group: "Video & audio", platform: "YouTube (personal)", handle: "@PujithSakhamuri", link: "https://www.youtube.com/@PujithSakhamuri" },
    { group: "Video & audio", platform: "TikTok", handle: "@pujiverse", link: "https://www.tiktok.com/@pujiverse" },
    { group: "Video & audio", platform: "Twitch", handle: "pujiverse_ai", link: "https://www.twitch.tv/pujiverse_ai" },
    { group: "Video & audio", platform: "Rumble", handle: "pujiverse", link: "https://rumble.com/user/pujiverse" },
    { group: "Video & audio", platform: "Vimeo", handle: "pujiverse", link: "https://vimeo.com/pujiverse" },
    { group: "Video & audio", platform: "Dailymotion", handle: "PUJIVERSE", link: "https://www.dailymotion.com/PUJIVERSE" },
    { group: "Video & audio", platform: "SoundCloud", handle: "pujiverse", link: "https://soundcloud.com/pujiverse" },
    { group: "Video & audio", platform: "Snapchat Spotlight", handle: "pujiverse official", link: "https://snapchat.com/t/bprrYRF8" },
    { group: "Video & audio", platform: "Likee", handle: "pujiverse", link: "https://l.likee.video/p/h1YdV" },
    { group: "Video & audio", platform: "Kwai", handle: "@Pujiverse", link: "https://k.kwai.com/u/@Pujiverse/2sGeerCN" },
    { group: "Video & audio", platform: "Moj", handle: "@pujiverse", link: "https://mojapp.in/@pujiverse" },
    { group: "Video & audio", platform: "Trendo", handle: "pujiverse", link: "https://s.trendo.vip/Jjoq" },
    { group: "Video & audio", platform: "IMDb", handle: "Pujiverse", link: "https://www.imdb.com/user/p.aclcmdbqqkrtmxcppzezlcxolq/" },
    { group: "Writing", platform: "Substack", handle: "@pujiverse", link: "https://substack.com/@pujiverse" },
    { group: "Writing", platform: "Medium", handle: "@pujiverse", link: "https://medium.com/@pujiverse" },
    { group: "Writing", platform: "Blogger", handle: "pujiverse.blogspot.com", link: "https://pujiverse.blogspot.com/" },
    { group: "Writing", platform: "Tumblr", handle: "pujiverse", link: "https://www.tumblr.com/pujiverse" },
    { group: "Writing", platform: "Quora", handle: "Pujiverse", link: "https://www.quora.com/profile/Pujiverse" },
    { group: "Support & shop", platform: "Patreon", handle: "pujithchowdarysakhamuri", link: "https://www.patreon.com/cw/pujithchowdarysakhamuri" },
    { group: "Support & shop", platform: "Etsy", handle: "pujiverse", link: "https://www.etsy.com/people/jqo8bz5apmta83y3" },
  ]
};
