export const workflowsData = [
  {
    id: "news-fetching-bot",
    title: "News Fetching & AI Digest Bot",
    description: "Automates the curation of tech news. Fetches top stories from the Hacker News API, feeds article details through Groq AI (Llama 3.3) for concise 2-sentence summaries and keyword extraction, and outputs structured digests.",
    nodesCount: 6,
    trigger: "Scheduled / Manual Trigger",
    integrations: ["Hacker News API", "Groq AI", "HTTP Request", "Batch Loop"],
    downloadFile: "workflows/news-fetching-bot.json",
    fileName: "News fetching Bot.json",
    icon: "Newspaper"
  },
  {
    id: "everyday-code-idea",
    title: "Everyday Random Code Idea Bot",
    description: "A daily autonomous spark bot for developers. Triggers on a daily cron schedule, prompts Groq AI for creative yet practical full-stack project ideas, formats markdown copy, and broadcasts directly to a Telegram channel.",
    nodesCount: 5,
    trigger: "Daily Cron Schedule",
    integrations: ["Groq Cloud", "Telegram Bot API", "Markdown Formatter"],
    downloadFile: "workflows/everyday-code-idea.json",
    fileName: "everyday rendom code idea.json",
    icon: "Lightbulb"
  },
  {
    id: "ai-research-bot",
    title: "AI Multi-Agent Research Assistant",
    description: "Interactive conversational research orchestrator. Understands complex technical research queries and delegates analytical tasks to specialized LangChain sub-agents for literature review and document extraction.",
    nodesCount: 8,
    trigger: "Chat Webhook / WebSocket",
    integrations: ["LangChain Agents", "Groq AI", "Web Search", "Memory Buffer"],
    downloadFile: "workflows/research-bot.json",
    fileName: "resarch Bot.json",
    icon: "BrainCircuit"
  },
  {
    id: "smart-mailing-bot",
    title: "Smart Mailing & Executive Assistant",
    description: "Connects securely to Gmail APIs to triage unread correspondence, draft context-aware responses with Groq AI, and hand off action items to sub-agent workflows automatically.",
    nodesCount: 7,
    trigger: "Gmail Polling Trigger",
    integrations: ["Gmail API OAuth2", "Groq AI", "Filter Node", "Draft Dispatcher"],
    downloadFile: "workflows/mailing-bot.json",
    fileName: "mailing bot.json",
    icon: "MailCheck"
  }
];
