export const projectsData = [
  {
    id: "slm-canvas",
    title: "SLM Canvas — Offline Code Synthesis",
    tagline: "Quantized Small Language Models for React & Tailwind CSS Synthesis",
    category: "AI & SLMs",
    featured: true,
    badges: ["Small Language Models", "React", "Tailwind CSS", "Monaco Editor", "Local Inference"],
    summary: "An intelligent offline developer canvas using quantized SLMs (Qwen 2.5 Coder) to synthesize, validate, and render production-ready React and Tailwind components with AST syntax validation.",
    architecture: "Local Model Inference → Draft-Conditioned Constrained Decoding → Abstract Syntax Tree (AST) Validation → Monaco Editor Live Canvas Rendering",
    highlights: [
      "Zero cloud cost: Runs 100% offline via local quantized Small Language Models.",
      "Draft-Conditioned Constrained Decoding to eliminate syntax hallucinations in generated JSX.",
      "Integrated Monaco Editor with live AST linting and responsive preview iframe.",
      "Direct export to clean, self-contained Tailwind and React component files."
    ],
    github: "https://github.com/sameul-hasan",
    demo: null,
    metrics: "100% Offline • Sub-second generation"
  },
  {
    id: "skinx",
    title: "SkinX — AI Dermatology Triage Platform",
    tagline: "Deep Learning Diagnostic Platform for South Asian Skin Tones",
    category: "AI & HealthTech",
    featured: true,
    badges: ["PyTorch", "Computer Vision", "U-Net", "MedSAM", "EfficientNet-B5", "DAAN"],
    summary: "An AI-powered dermatological screening platform tailored specifically to tackle classification bias on darker South Asian skin tones across 23 conditions. Conceptualized for the Harvard HSIL Hackathon & BuildFest.",
    architecture: "Image Preprocessing (CLAHE + DullRazor) → Lesion Segmentation (MedSAM / U-Net) → Feature Classification (EfficientNet-B5) → Domain-Adversarial Adaptation (DAAN) → Telemedicine Routing",
    highlights: [
      "Addresses acute diagnostic disparity and pigmentation bias in traditional dermatological datasets.",
      "Dual segmentation & classification pipeline using MedSAM and domain-adversarial transfer learning.",
      "Designed as a low-bandwidth Progressive Web App (PWA) and Telegram bot for rural accessibility.",
      "Includes delta-analysis tracking to observe lesion changes over time."
    ],
    github: "https://github.com/sameul-hasan",
    demo: null,
    metrics: "23 Conditions • Harvard HSIL Track"
  },
  {
    id: "shohayok",
    title: "Shohayok (সহায়ক) — Higher-Ed AI Assistant",
    tagline: "Document-Grounded Bilingual Academic Intelligence",
    category: "AI & Agentic Systems",
    featured: true,
    badges: ["Gemini API", "RAG", "ElevenLabs", "Bangla NLP", "Google AI Studio"],
    summary: "A bilingual (Bangla & English) academic assistant for university students. Enables direct upload of complex syllabi, circulars, and university policies to receive hallucination-free answers strictly grounded in document context.",
    architecture: "Document Ingestion (PDF/OCR) → Chunking & Vector Embeddings → Gemini Multimodal API with Strict System Prompts → ElevenLabs Audio Synthesis → Interactive Web Chat UI",
    highlights: [
      "Strict context isolation: Answers strictly from uploaded documents, completely preventing academic misinformation.",
      "Native dual-language processing in conversational Bengali and English.",
      "Audio playback powered by ElevenLabs for students on the move.",
      "Rapid query retrieval across 100+ page institutional guidelines and grading policies."
    ],
    github: "https://github.com/sameul-hasan",
    demo: null,
    metrics: "100% Grounded • Dual Language"
  },
  {
    id: "icadhi-dashboard",
    title: "ICADHI 2026 Event Management Dashboard",
    tagline: "Real-Time Event Operations, QR Check-in & Automated Analytics",
    category: "Web & Full-Stack",
    featured: true,
    badges: ["Full-Stack", "JavaScript", "Firebase Auth", "Firestore", "QR Engine", "FCM"],
    summary: "Engineered in just 7 days as Registration Chair for the International Congress on AI & Digital Health Innovations. Handled end-to-end registrations, dynamic QR credential emails, attendance tracking, and live meal/kit logistics.",
    architecture: "Participant Registration → Cloud Function Email Dispatch with Dynamic QR → Scanner Web App → Real-time Firestore Sync → Executive Analytics Dashboard",
    highlights: [
      "Built and deployed single-handedly in 1 week to power international conference operations.",
      "Managed 298 verified registrations, 250 on-site international participants, and 39 organizers seamlessly.",
      "Zero-queue QR check-in scanning reducing arrival bottleneck to under 3 seconds per attendee.",
      "Live logistics dashboard monitoring meal allocation, kit distribution, and session attendance."
    ],
    github: "https://github.com/sameul-hasan",
    demo: null,
    metrics: "298 Registrations • 1-Week Build"
  },
  {
    id: "fiftheye-ai",
    title: "FifthEye AI (যাচাই) — Exam Intelligence",
    tagline: "Automated Paper Exam Capture, Grading & LMS Sync",
    category: "AI & Agentic Systems",
    featured: false,
    badges: ["RAG", "Vision LLMs", "LMS APIs", "EdTech", "FastAPI"],
    summary: "An automated grading and evaluation assistant for educational institutions, converting handwritten paper exams into structured digital grades with rubric-aligned rationale and LMS sync.",
    architecture: "Paper Exam Scanner → Multi-Agent Vision Inspection → Answer Matching via RAG → Grade Formulation & Feedback → LMS Integration",
    highlights: [
      "Automates grading workflows for instructors with comprehensive rubric alignment.",
      "Generates student-specific constructive feedback alongside transparent scoring rationales.",
      "Explored Bengali branding and go-to-market strategies for university deployment."
    ],
    github: "https://github.com/sameul-hasan",
    demo: null,
    metrics: "Automated Grading • LMS Sync"
  }
];
