// Sameul Hasan - Portfolio JavaScript Engine

// Data Store
const portfolioData = {
  projects: [
    {
      id: "slm-canvas",
      title: "SLM Canvas — Offline Code Playground",
      tagline: "Generating React and Tailwind snippets with local small language models",
      category: "AI & SLMs",
      featured: true,
      badges: ["Small Language Models", "React", "Tailwind CSS", "Monaco Editor", "Local Inference"],
      summary: "A personal experiment to run quantized SLMs (Qwen 2.5 Coder) locally and turn prompts into editable React + Tailwind component drafts without relying on cloud APIs.",
      architecture: "Prompt Input → Local Quantized Model Inference → Syntax Validation → Monaco Editor + Live Preview",
      highlights: [
        "Runs fully on my machine, which made it useful for low-connectivity environments and cost-free testing.",
        "Added syntax checks before rendering so broken JSX is caught early.",
        "Used Monaco with a live preview to quickly iterate on generated UI components.",
        "Exports plain component files that can be reused in other projects."
      ],
      github: "https://github.com/sameul-hasan",
      demo: null,
      metrics: "Offline-first prototype"
    },
    {
      id: "skinx",
      title: "SkinX — AI Dermatology Triage Prototype",
      tagline: "A concept focused on improving support for South Asian skin tones",
      category: "AI & HealthTech",
      featured: true,
      badges: ["PyTorch", "Computer Vision", "U-Net", "MedSAM", "EfficientNet-B5", "DAAN"],
      summary: "A hackathon concept for dermatology pre-screening that explored how to reduce classification bias on darker South Asian skin tones across 23 conditions.",
      architecture: "Image Cleanup → Lesion Segmentation (MedSAM / U-Net) → Classification (EfficientNet-B5) → Domain Adaptation (DAAN) → Triage Output",
      highlights: [
        "Started from the problem of dataset bias and tested a segmentation + classification pipeline.",
        "Combined MedSAM and transfer-learning experiments to compare model behavior across skin tones.",
        "Planned low-bandwidth delivery paths (PWA and Telegram) for wider accessibility.",
        "Included a simple progress-tracking idea for monitoring lesion changes over time."
      ],
      github: "https://github.com/sameul-hasan",
      demo: null,
      metrics: "Hackathon concept • 23 conditions explored"
    },
    {
      id: "shohayok",
      title: "Shohayok (সহায়ক) — University Document Assistant",
      tagline: "A bilingual assistant grounded in uploaded academic documents",
      category: "AI & Agentic Systems",
      featured: true,
      badges: ["Gemini API", "RAG", "ElevenLabs", "Bangla NLP", "Google AI Studio"],
      summary: "A Bangla-English assistant for students that answers questions from uploaded course outlines, notices, and policy documents instead of relying on generic model responses.",
      architecture: "Document Upload (PDF/OCR) → Chunking + Embeddings → Prompted Gemini Retrieval → Optional Audio Output → Chat UI",
      highlights: [
        "Built retrieval constraints so responses stay tied to source documents.",
        "Supports both Bangla and English queries for day-to-day student use.",
        "Added audio playback with ElevenLabs for quick listening.",
        "Designed for long documents like policy handbooks and grading guidelines."
      ],
      github: "https://github.com/sameul-hasan",
      demo: null,
      metrics: "RAG-based student helper"
    },
    {
      id: "icadhi-dashboard",
      title: "ICADHI 2026 Event Operations Dashboard",
      tagline: "Registration, QR check-in, and live coordination tools",
      category: "Web & Full-Stack",
      featured: true,
      badges: ["Full-Stack", "JavaScript", "Firebase Auth", "Firestore", "QR Engine", "FCM"],
      summary: "Built while serving as Registration Chair to handle signups, QR-based check-in, and operational tracking for ICADHI 2026 in one place.",
      architecture: "Registration Form → QR Email Dispatch → Scanner App → Firestore Sync → Operations Dashboard",
      highlights: [
        "Delivered a practical internal system within a one-week timeline before the event.",
        "Used it to coordinate 298 registrations and on-site check-in flow.",
        "QR scanning replaced manual verification and reduced queue pressure at entry points.",
        "Included real-time views for meals, kits, and attendance coordination."
      ],
      github: "https://github.com/sameul-hasan",
      demo: null,
      metrics: "298 registrations tracked"
    },
    {
      id: "fiftheye-ai",
      title: "FifthEye AI (যাচাই) — Exam Workflow Concept",
      tagline: "Exploring paper-to-digital grading support for instructors",
      category: "AI & Agentic Systems",
      featured: false,
      badges: ["RAG", "Vision LLMs", "LMS APIs", "EdTech", "FastAPI"],
      summary: "An early concept for helping instructors digitize handwritten exam scripts, generate rubric-based draft feedback, and sync results with LMS tools.",
      architecture: "Script Capture → Vision/OCR Review → RAG-based Answer Matching → Draft Scoring + Feedback → LMS Export",
      highlights: [
        "Focused on reducing repetitive grading steps rather than replacing instructor judgment.",
        "Drafts feedback notes alongside score suggestions for faster review.",
        "Explored bilingual usability for Bangla-medium and English-medium contexts."
      ],
      github: "https://github.com/sameul-hasan",
      demo: null,
      metrics: "Early-stage concept"
    }
  ],

  certificates: [
    {
      id: "aws-cloud-security",
      title: "AWS Academy Graduate — Cloud Security Foundations",
      issuer: "Amazon Web Services (AWS) Academy",
      year: "2026",
      category: "Cloud & Security",
      image: "certificates/aws-cloud-security.png",
      skills: ["Cloud Security", "AWS Architecture", "IAM & Compliance", "Cloud Security Foundations"]
    },
    {
      id: "datacamp-machine-learning",
      title: "Understanding Machine Learning",
      issuer: "DataCamp",
      year: "2026",
      category: "AI & Machine Learning",
      image: "certificates/datacamp-machine-learning.png",
      skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "ML Pipelines"]
    },
    {
      id: "datacamp-intermediate-python",
      title: "Intermediate Python",
      issuer: "DataCamp",
      year: "2026",
      category: "Programming",
      image: "certificates/datacamp-intermediate-python.png",
      skills: ["Matplotlib", "Dictionaries & Pandas", "Logic & Control Flow", "Loops & Scripting"]
    },
    {
      id: "datacamp-intro-python",
      title: "Introduction to Python",
      issuer: "DataCamp",
      year: "2026",
      category: "Programming",
      image: "certificates/datacamp-intro-python.png",
      skills: ["Python Basics", "Functions & Packages", "NumPy Arrays", "Data Manipulation"]
    },
    {
      id: "datacamp-intermediate-sql",
      title: "Intermediate SQL",
      issuer: "DataCamp",
      year: "2026",
      category: "Databases & SQL",
      image: "certificates/datacamp-intermediate-sql.png",
      skills: ["Aggregate Functions", "Subqueries", "Set Operations", "Complex Queries"]
    },
    {
      id: "datacamp-joining-sql",
      title: "Joining Data in SQL",
      issuer: "DataCamp",
      year: "2026",
      category: "Databases & SQL",
      image: "certificates/datacamp-joining-sql.png",
      skills: ["INNER JOIN", "LEFT/RIGHT JOIN", "Set Operations", "Relational Database Queries"]
    },
    {
      id: "datacamp-intro-sql",
      title: "Introduction to SQL",
      issuer: "DataCamp",
      year: "2026",
      category: "Databases & SQL",
      image: "certificates/datacamp-intro-sql.png",
      skills: ["SQL Basics", "Filtering Records", "Sorting & Grouping", "Relational Concepts"]
    },
    {
      id: "datacamp-data-engineering",
      title: "Understanding Data Engineering",
      issuer: "DataCamp",
      year: "2026",
      category: "Data Engineering",
      image: "certificates/datacamp-data-engineering.png",
      skills: ["ETL Pipelines", "Data Warehousing", "Big Data Concepts", "Data Management"]
    },
    {
      id: "datacamp-intro-git",
      title: "Introduction to Git",
      issuer: "DataCamp",
      year: "2026",
      category: "DevOps & Tools",
      image: "certificates/datacamp-intro-git.png",
      skills: ["Git Workflow", "Branching & Merging", "Remotes & GitHub", "Version History"]
    },
    {
      id: "codesignal-webdev",
      title: "Web Development with HTML, CSS, and JavaScript",
      issuer: "CodeSignal",
      year: "2026",
      category: "Web Development",
      image: "certificates/codesignal-webdev.png",
      skills: ["HTML5", "CSS3 Responsive Design", "JavaScript DOM Manipulation", "Frontend Engineering"]
    },
    {
      id: "codesignal-php-laravel",
      title: "PHP Laravel Basics",
      issuer: "CodeSignal",
      year: "2026",
      category: "Web Development",
      image: "certificates/codesignal-php-laravel.png",
      skills: ["PHP OOP", "Laravel Routing & Controllers", "Blade Templates", "Backend Architecture"]
    },
    {
      id: "udemy-figma",
      title: "Figma from Start to Finish: Design Like a Pro",
      issuer: "Udemy",
      year: "2026",
      category: "UI/UX Design",
      image: "certificates/udemy-figma.png",
      skills: ["UI/UX Design", "Wireframing & Prototyping", "Design Systems", "Component Architecture"]
    },
    {
      id: "simplilearn-completion",
      title: "Professional Skills Certificate",
      issuer: "Simplilearn",
      year: "2026",
      category: "Professional Growth",
      image: "certificates/simplilearn-completion.png",
      skills: ["Professional Development", "Technology Fundamentals", "Technical Upskilling"]
    }
  ],

  skills: {
    ai: [
      { name: "Quantized SLMs & Local Inference", level: "Applied", desc: "Hands-on work with local model runs, prompt constraints, and output validation" },
      { name: "Computer Vision & PyTorch", level: "Advanced", desc: "Model experimentation with MedSAM, U-Net, EfficientNet, and OpenCV pipelines" },
      { name: "RAG & LLM Agents", level: "Applied", desc: "Building document-grounded assistants with embeddings, retrieval, and prompt design" },
      { name: "Workflow Automation (n8n)", level: "Applied", desc: "Automating Telegram/Gmail workflows with webhooks, schedulers, and AI nodes" }
    ],
    fullstack: [
      { name: "HTML5, Vanilla JS & Modern CSS", level: "Core", desc: "Responsive interfaces, DOM interactions, and accessible frontend behavior" },
      { name: "Tailwind CSS", level: "Applied", desc: "Component styling, responsive layout systems, and theme customization" },
      { name: "Node.js & Express", level: "Proficient", desc: "REST APIs, middleware patterns, auth basics, and service integration" },
      { name: "PHP & Laravel", level: "Proficient", desc: "MVC app development with Blade templates and relational data models" }
    ],
    languages: [
      { name: "Python", level: "Primary", desc: "PyTorch, FastAPI, NumPy, Pandas, automation scripting" },
      { name: "JavaScript / ES6+", level: "Primary", desc: "Modern frontend logic, asynchronous flows, APIs" },
      { name: "C / C++", level: "Foundational", desc: "Memory management, data structures, low-level algorithms" },
      { name: "Java", level: "Academic", desc: "Object-oriented software engineering principles and design patterns" }
    ],
    cloud: [
      { name: "AWS Cloud Security", level: "Certified", desc: "IAM, shared responsibility basics, and practical cloud security foundations" },
      { name: "Firebase Suite", level: "Applied", desc: "Auth, Firestore, Cloud Functions, and push notifications for app workflows" },
      { name: "Docker & Containers", level: "Proficient", desc: "Container-based local development and reproducible environment setup" },
      { name: "Git & GitHub Actions", level: "Daily Use", desc: "Branch-based collaboration, pull requests, and CI workflow familiarity" }
    ]
  }
};

// 1. Typewriter Effect in Hero
const roles = [
  "Software Engineering student at DIU",
  "Full-stack web developer",
  "Builder of practical AI-assisted tools",
  "President, DIU Robotics Club"
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const typewriterEl = document.getElementById("typewriter-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!typewriterEl) return;

  if (prefersReducedMotion) {
    typewriterEl.textContent = roles[0];
    return;
  }

  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 70;
  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 350;
  }

  setTimeout(typeRole, speed);
}

// 2. Navigation
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sectionIds = ["about", "skills", "projects", "contact"];

  window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 30) {
      navbar.classList.add("shadow-md");
    } else {
      navbar.classList.remove("shadow-md");
    }

    const scrollPos = window.scrollY + 180;
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (!section) return;

      const inView = scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight;
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.toggle("text-slate-950", inView);
          link.classList.toggle("text-slate-700", !inView);
        }
      });
    });
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// 3. Projects Category Filter & Rendering
let currentProjectCategory = "All";

function projectCardTemplate(project) {
  const badges = project.badges.slice(0, 4).map(badge => `
    <span class="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600">${badge}</span>
  `).join("");

  return `
    <article class="glass-card interactive-card rounded-2xl p-5 sm:p-6" data-reveal-item>
      <div class="flex items-start justify-between gap-3">
        <span class="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600">${project.category}</span>
        <span class="text-[11px] font-mono text-slate-500">${project.metrics}</span>
      </div>

      <h3 class="mt-4 font-display text-xl font-bold text-slate-900">${project.title}</h3>
      <p class="mt-1 text-xs font-mono text-slate-500">${project.tagline}</p>
      <p class="mt-3 text-sm leading-relaxed text-slate-700">${project.summary}</p>

      <div class="mt-4 flex flex-wrap gap-2">${badges}</div>

      <div class="mt-5 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <button onclick="openProjectModal('${project.id}')" class="text-sm font-semibold text-slate-800 hover:text-slate-950">
          View Details
        </button>
        <a href="${project.github}" target="_blank" rel="noreferrer" class="rounded-lg border border-slate-300 bg-white p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-900" aria-label="View ${project.title} on GitHub">
          <i data-lucide="github" class="h-4 w-4"></i>
        </a>
      </div>
    </article>
  `;
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = currentProjectCategory === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === currentProjectCategory);

  container.innerHTML = filtered.map(projectCardTemplate).join("");
  lucide.createIcons();
}

function updateTabStyles(tabs, activeTab, activeClasses, inactiveClasses) {
  tabs.forEach(tab => {
    tab.classList.remove(...activeClasses);
    tab.classList.remove(...inactiveClasses);
    tab.classList.add(...inactiveClasses);
    tab.setAttribute("aria-selected", "false");
  });
  activeTab.classList.remove(...inactiveClasses);
  activeTab.classList.add(...activeClasses);
  activeTab.setAttribute("aria-selected", "true");
}

function initProjectFilter() {
  const tabs = document.querySelectorAll(".project-tab");
  const activeClasses = ["bg-slate-900", "text-white", "border", "border-slate-900"];
  const inactiveClasses = ["border", "border-slate-300", "bg-white", "text-slate-700"];

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      currentProjectCategory = tab.getAttribute("data-category") || "All";
      updateTabStyles(tabs, tab, activeClasses, inactiveClasses);
      renderProjects();
      initInteractiveCards();
    });
  });
}

// 4. Project Modal
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(item => item.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const content = document.getElementById("project-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-5">
      <div class="flex items-center justify-between gap-3">
        <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">${project.category}</span>
        <span class="text-xs font-mono text-slate-500">${project.metrics}</span>
      </div>

      <div>
        <h3 id="project-modal-title" class="font-display text-2xl font-bold text-slate-900">${project.title}</h3>
        <p class="mt-1 text-sm text-slate-600">${project.tagline}</p>
      </div>

      <p class="text-sm leading-relaxed text-slate-700">${project.summary}</p>

      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wide text-slate-500">Architecture</h4>
        <p class="mt-2 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">${project.architecture}</p>
      </div>

      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wide text-slate-500">Highlights</h4>
        <ul class="mt-2 space-y-2 text-sm text-slate-700">
          ${project.highlights.map(item => `<li class="flex gap-2"><span aria-hidden="true">•</span><span>${item}</span></li>`).join("")}
        </ul>
      </div>

      <div class="flex flex-wrap gap-2">
        ${project.badges.map(badge => `<span class="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600">${badge}</span>`).join("")}
      </div>

      <div class="flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <a href="${project.github}" target="_blank" rel="noreferrer" class="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800">View GitHub</a>
        <button onclick="closeProjectModal()" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:border-slate-400">Close</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// 5. Skills
function renderSkills(category) {
  const container = document.getElementById("skills-display-grid");
  if (!container) return;

  const skills = portfolioData.skills[category] || [];
  container.innerHTML = skills.map(skill => `
    <article class="glass-card interactive-card rounded-2xl p-5" data-reveal-item>
      <div class="flex items-center justify-between gap-3">
        <h3 class="font-semibold text-slate-900">${skill.name}</h3>
        <span class="rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600">${skill.level}</span>
      </div>
      <p class="mt-2 text-sm leading-relaxed text-slate-700">${skill.desc}</p>
    </article>
  `).join("");
}

function initSkillsTabs() {
  const tabs = document.querySelectorAll(".skill-tab");
  const activeClasses = ["bg-slate-900", "text-white"];
  const inactiveClasses = ["border", "border-slate-300", "bg-white", "text-slate-700"];

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      updateTabStyles(tabs, tab, activeClasses, inactiveClasses);
      renderSkills(tab.getAttribute("data-category") || "ai");
      initInteractiveCards();
    });
  });

  renderSkills("ai");
}

// 6. Copy Email CTA
function initEmailCopy() {
  const button = document.getElementById("copy-email-btn");
  const feedback = document.getElementById("copy-feedback-text");
  if (!button) return;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("sameulhasanbd@gmail.com");
      if (feedback) {
        feedback.textContent = "Copied";
        setTimeout(() => {
          feedback.textContent = "Copy Email";
        }, 1800);
      }
    } catch (error) {
      if (feedback) feedback.textContent = "Copy unavailable";
    }
  });
}

// 7. Back To Top
function initBackToTop() {
  const button = document.getElementById("back-to-top-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

// 8. GSAP Motion System
function initInteractiveCards() {
  if (prefersReducedMotion || !window.gsap) return;

  document.querySelectorAll(".interactive-card").forEach(card => {
    if (card.dataset.gsapBound === "true") return;
    card.dataset.gsapBound = "true";

    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -4, duration: 0.25, ease: "power2.out" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.25, ease: "power2.out" });
    });
  });
}

function initAnimations() {
  if (prefersReducedMotion || !window.gsap) return;

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const heroIntro = gsap.utils.toArray("[data-hero-intro]");
  gsap.from(heroIntro, {
    opacity: 0,
    y: 22,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out"
  });

  const revealSections = gsap.utils.toArray("[data-reveal]");
  revealSections.forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%"
      }
    });
  });

  const staggerGroups = gsap.utils.toArray("[data-stagger]");
  staggerGroups.forEach(group => {
    const items = group.querySelectorAll("[data-reveal-item]");
    if (!items.length) return;

    gsap.from(items, {
      opacity: 0,
      y: 16,
      duration: 0.55,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: group,
        start: "top 88%"
      }
    });
  });

  initInteractiveCards();
}

window.addEventListener("keydown", event => {
  if (event.key === "Escape") closeProjectModal();
});

document.addEventListener("DOMContentLoaded", () => {
  typeRole();
  initNavigation();
  renderProjects();
  initProjectFilter();
  initSkillsTabs();
  initEmailCopy();
  initBackToTop();
  initAnimations();
  lucide.createIcons();
});
