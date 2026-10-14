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
  "President, DIU Robotics Club",
  "Always learning in public"
];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter-text");

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

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2200; // Pause at end of text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 400;
  }

  setTimeout(typeRole, typeSpeed);
}

// 2. Navigation & Section Spy
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("bg-slate-950/80", "backdrop-blur-xl", "border-b", "border-slate-800/80");
    } else {
      navbar.classList.remove("bg-slate-950/80", "backdrop-blur-xl", "border-b", "border-slate-800/80");
    }

    // Scroll spy
    const sections = ["home", "about", "projects", "workflows", "leadership", "achievements", "certifications", "skills", "contact"];
    const scrollPos = window.scrollY + 200;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("text-sky-400");
              link.classList.remove("text-slate-300");
            } else {
              link.classList.remove("text-sky-400");
              link.classList.add("text-slate-300");
            }
          });
        }
      }
    });
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// 3. Projects Category Filter & Rendering
let currentProjectCategory = "All";

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = currentProjectCategory === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === currentProjectCategory);

  container.innerHTML = filtered.map(project => `
    <div class="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-6 relative group overflow-hidden border border-slate-800 hover:border-sky-500/40">
      <div class="absolute top-0 right-0 w-36 h-36 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/15 transition duration-500 pointer-events-none"></div>

      <div class="space-y-4">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs font-medium">
            ${project.category}
          </span>
          <span class="text-xs font-mono text-slate-400">
            ${project.metrics}
          </span>
        </div>

        <div>
          <h3 class="font-display font-bold text-xl text-white group-hover:text-sky-300 transition-colors">
            ${project.title}
          </h3>
          <p class="text-xs font-mono text-sky-400 mt-1">
            ${project.tagline}
          </p>
        </div>

        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          ${project.summary}
        </p>

        <div class="flex flex-wrap gap-1.5 pt-1">
          ${project.badges.slice(0, 4).map(badge => `
            <span class="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
              ${badge}
            </span>
          `).join('')}
          ${project.badges.length > 4 ? `
            <span class="px-2 py-0.5 rounded-md bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-500">
              +${project.badges.length - 4}
            </span>
          ` : ''}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onclick="openProjectModal('${project.id}')"
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group/btn"
        >
          <span>Architecture & Details</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
        </button>

        ${project.github ? `
          <a
            href="${project.github}"
            target="_blank"
            rel="noreferrer"
            class="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition"
            aria-label="View Source on GitHub"
          >
            <i data-lucide="github" class="w-4 h-4"></i>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function initProjectFilter() {
  const tabs = document.querySelectorAll(".project-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-gradient-to-r", "from-sky-500", "to-blue-600", "text-white", "shadow-md");
        t.classList.add("bg-slate-900/80", "text-slate-400");
      });
      tab.classList.add("bg-gradient-to-r", "from-sky-500", "to-blue-600", "text-white", "shadow-md");
      tab.classList.remove("bg-slate-900/80", "text-slate-400");

      currentProjectCategory = tab.getAttribute("data-category");
      renderProjects();
    });
  });
}

// 4. Project Modal Logic
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-content");

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between gap-4">
        <span class="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold">
          ${project.category}
        </span>
        <span class="text-xs font-mono text-slate-400">
          ${project.metrics}
        </span>
      </div>

      <div>
        <h3 class="text-2xl sm:text-3xl font-display font-extrabold text-white">
          ${project.title}
        </h3>
        <p class="text-sm font-mono text-sky-400 mt-1">
          ${project.tagline}
        </p>
      </div>

      <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
        <span class="text-xs font-mono text-sky-400 uppercase tracking-wide block">
          End-to-End System Pipeline
        </span>
        <div class="text-xs sm:text-sm font-mono text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800/80 overflow-x-auto">
          ${project.architecture}
        </div>
      </div>

      <div class="space-y-3">
        <h4 class="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
          Key Engineering Highlights
        </h4>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
          ${project.highlights.map(h => `
            <li class="flex items-start gap-2">
              <span class="text-sky-400 mt-0.5">•</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="space-y-2">
        <span class="text-xs font-mono text-slate-400 uppercase tracking-wide block">
          Technologies & Tools
        </span>
        <div class="flex flex-wrap gap-1.5">
          ${project.badges.map(badge => `
            <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              ${badge}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
        ${project.github ? `
          <a
            href="${project.github}"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold flex items-center gap-2 transition"
          >
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>View GitHub Repository</span>
          </a>
        ` : '<div></div>'}
        <button
          onclick="closeProjectModal()"
          class="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold hover:bg-sky-500/20 transition"
        >
          Close Preview
        </button>
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
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

// 5. Certifications Left-to-Right Slideshow
let certCurrentIndex = 0;
let certAutoSlideTimer = null;
let isCertPaused = false;

function renderCertificationsSlider() {
  const track = document.getElementById("cert-slides-track");
  const dotsContainer = document.getElementById("cert-dots-container");
  if (!track || !dotsContainer) return;

  track.innerHTML = portfolioData.certificates.map((cert, index) => `
    <div class="w-full shrink-0 max-w-full md:max-w-xl lg:max-w-2xl mx-auto px-2">
      <div class="glass-card rounded-3xl border border-sky-500/20 overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
        <div class="w-full md:w-64 shrink-0 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 group">
          <img
            src="${cert.image}"
            alt="${cert.title}"
            class="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div class="flex-grow space-y-3 text-center md:text-left">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold">
              ${cert.category}
            </span>
            <span class="text-xs font-mono text-slate-400">
              ${cert.year}
            </span>
          </div>

          <h3 class="font-display font-bold text-lg sm:text-xl text-white">
            ${cert.title}
          </h3>

          <div class="text-xs font-semibold text-slate-300">
            Issuer: <span class="text-sky-400">${cert.issuer}</span>
          </div>

          <div class="flex flex-wrap items-center justify-center md:justify-start gap-1.5 pt-2">
            ${cert.skills.map(s => `
              <span class="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                ${s}
              </span>
            `).join('')}
          </div>

          <div class="pt-2">
            <a
              href="https://sameul-hasan.github.io/Cirtification-I-Have/"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-400 hover:text-sky-300 transition"
            >
              <span>View Credential in Live Gallery</span>
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  dotsContainer.innerHTML = portfolioData.certificates.map((_, i) => `
    <button
      onclick="setCertSlide(${i})"
      class="h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-sky-400' : 'w-2 bg-slate-800 hover:bg-slate-700'}"
      id="cert-dot-${i}"
      aria-label="Slide ${i + 1}"
    ></button>
  `).join('');

  updateCertPosition();
  startCertAutoSlide();
  lucide.createIcons();
}

function updateCertPosition() {
  const track = document.getElementById("cert-slides-track");
  if (!track) return;
  track.style.transform = `translateX(-${certCurrentIndex * 100}%)`;

  portfolioData.certificates.forEach((_, i) => {
    const dot = document.getElementById(`cert-dot-${i}`);
    if (dot) {
      if (i === certCurrentIndex) {
        dot.className = "h-2 rounded-full transition-all w-6 bg-sky-400";
      } else {
        dot.className = "h-2 rounded-full transition-all w-2 bg-slate-800 hover:bg-slate-700";
      }
    }
  });
}

function nextCertSlide() {
  certCurrentIndex = (certCurrentIndex + 1) % portfolioData.certificates.length;
  updateCertPosition();
}

function prevCertSlide() {
  certCurrentIndex = (certCurrentIndex - 1 + portfolioData.certificates.length) % portfolioData.certificates.length;
  updateCertPosition();
}

function setCertSlide(index) {
  certCurrentIndex = index;
  updateCertPosition();
}

function startCertAutoSlide() {
  if (prefersReducedMotion) return;
  if (certAutoSlideTimer) clearInterval(certAutoSlideTimer);
  certAutoSlideTimer = setInterval(() => {
    if (!isCertPaused) {
      nextCertSlide();
    }
  }, 3500);
}

function initCertEvents() {
  const container = document.getElementById("cert-carousel-container");
  if (container) {
    container.addEventListener("mouseenter", () => { isCertPaused = true; });
    container.addEventListener("mouseleave", () => { isCertPaused = false; });
  }

  const prevBtn = document.getElementById("cert-prev-btn");
  const nextBtn = document.getElementById("cert-next-btn");
  if (prevBtn) prevBtn.addEventListener("click", prevCertSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextCertSlide);
}

// 6. Skills Tabs Switcher
function renderSkills(category) {
  const container = document.getElementById("skills-display-grid");
  if (!container) return;

  const items = portfolioData.skills[category] || [];
  container.innerHTML = items.map(skill => `
    <div class="glass-card p-5 rounded-2xl border border-slate-800 hover:border-sky-500/30 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <h4 class="font-display font-bold text-base text-white">
          ${skill.name}
        </h4>
        <span class="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-[11px]">
          ${skill.level}
        </span>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed font-mono">
        ${skill.desc}
      </p>
    </div>
  `).join('');
}

function initSkillsTabs() {
  const tabs = document.querySelectorAll(".skill-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-gradient-to-r", "from-sky-500", "to-blue-600", "text-white");
        t.classList.add("bg-slate-900/80", "text-slate-400");
      });
      tab.classList.add("bg-gradient-to-r", "from-sky-500", "to-blue-600", "text-white");
      tab.classList.remove("bg-slate-900/80", "text-slate-400");

      const category = tab.getAttribute("data-category");
      renderSkills(category);
    });
  });

  renderSkills("ai");
}

// 7. Copy Email with Confetti & Toast
function initEmailCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  const copyFeedback = document.getElementById("copy-feedback-text");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("sameulhasanbd@gmail.com");

    if (window.confetti) {
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#818cf8', '#34d399']
        });
      } catch (e) {}
    }

    if (copyFeedback) {
      copyFeedback.textContent = "Email Copied!";
      copyFeedback.classList.add("text-emerald-400");
      setTimeout(() => {
        copyFeedback.textContent = "Copy Email";
        copyFeedback.classList.remove("text-emerald-400");
      }, 2500);
    }
  });
}

// 8. Back to Top Button
function initBackToTop() {
  const topBtn = document.getElementById("back-to-top-btn");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }
}

// Global Modal Close on Escape or Background Click
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectModal();
});

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  typeRole();
  initNavigation();
  renderProjects();
  initProjectFilter();
  renderCertificationsSlider();
  initCertEvents();
  initSkillsTabs();
  initEmailCopy();
  initBackToTop();
  lucide.createIcons();
});
