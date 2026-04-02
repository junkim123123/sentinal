export type NavItem = {
  label: string;
  href: string;
};

export type ProofPoint = {
  label: string;
  value: string;
  detail: string;
};

export type ServicePillar = {
  title: string;
  description: string;
  bullets: string[];
};

export type PersonaCard = {
  role: string;
  title: string;
  challenge: string;
  payoff: string;
};

export type MethodStep = {
  step: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HeroSignal = {
  value: string;
  label: string;
};

export type SectorHighlight = {
  title: string;
  description: string;
  note: string;
};

export type ContentCluster = {
  title: string;
  description: string;
  bullets: string[];
};

export type WorkflowStage = {
  step: string;
  title: string;
  description: string;
};

export type ResourceCard = {
  type: string;
  title: string;
  description: string;
};

export type InfoCard = {
  title: string;
  description: string;
  label?: string;
};

export type OfferPath = {
  title: string;
  description: string;
};

export type PricingBucket = {
  name: string;
  fit: string;
  description: string;
  inclusions: string[];
};

export type ValidatedCapability = {
  title: string;
  summary: string;
  sentinelUse: string;
  precedent: string;
  validation: string;
  href: string;
};

export type PromptWorkflow = {
  category: string;
  description: string;
  sentinelUse: string;
  samplePrompt: string;
};

export const siteConfig = {
  name: "Sentinel Imports",
  shortName: "Sentinel",
  url: "https://www.sentinelimports.online",
  description:
    "Molecule-level import intelligence for company, supplier, and shipment monitoring across strategic chemical categories entering the United States.",
  contactEndpoint: "/api/contact",
  loginHref: "https://SentinelImports.sharefile.com",
  dashboardPreviewHref: "/dashboard",
  reportsPreviewHref: "/reports",
  primaryCta: {
    label: "Request a private briefing",
    href: "/demo",
  },
  secondaryCta: {
    label: "View methodology",
    href: "/methodology",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Engagement", href: "/pricing" },
  { label: "Methodology", href: "/methodology" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const proofPoints: ProofPoint[] = [
  {
    label: "Tracked coverage",
    value: "140+ molecules",
    detail:
      "Current monitoring across agricultural chemicals and intermediates entering the U.S.",
  },
  {
    label: "Delivery cadence",
    value: "Monthly delivery",
    detail:
      "Recurring reporting built for commercial, sourcing, and market-review workflows.",
  },
  {
    label: "Output formats",
    value: "Excel + Tableau",
    detail:
      "Pivot-table files and visualization-ready delivery for teams that need shareable output.",
  },
  {
    label: "Source stack",
    value: "7 named systems",
    detail:
      "Trade, customs, regulatory, and crop-data inputs supporting the methodology.",
  },
];

export const heroSignals: HeroSignal[] = [
  {
    value: "140+ molecules",
    label: "Focused monitoring across current molecule coverage",
  },
  {
    value: "7 inputs",
    label: "Trade, customs, regulatory, and crop-data sources",
  },
  {
    value: "Secure delivery",
    label: "Monthly reporting plus client-ready Excel and Tableau workflows",
  },
];

export const sectorHighlights: SectorHighlight[] = [
  {
    title: "Agricultural chemical monitoring",
    description:
      "Track current import movement across the molecules your team follows most closely.",
    note: "Core service line",
  },
  {
    title: "Intermediates and supplier visibility",
    description:
      "Translate shipment detail into a cleaner picture of origin, supplier activity, and landed value.",
    note: "Operational intelligence",
  },
  {
    title: "Adjacent custom intelligence",
    description:
      "Use Sentinel for sharper project work when a standard monthly file is not enough.",
    note: "Scoped with the client",
  },
];

export const servicePillars: ServicePillar[] = [
  {
    title: "Know who is shipping what",
    description:
      "Track supplier and consignee activity across the molecules your team follows most closely.",
    bullets: [
      "Recurring molecule watchlists",
      "Supplier, consignee, and shipment visibility",
      "Monthly monitoring built for ongoing review",
    ],
  },
  {
    title: "See landed-value shifts earlier",
    description:
      "Bring quantity, formulation, import value, and CIF context into one reporting stream when available.",
    bullets: [
      "Import value plus shipping and insurance fields",
      "Change signals that are easier to escalate internally",
      "Cleaner views for sourcing and market discussions",
    ],
  },
  {
    title: "Scope deeper work when the signal changes",
    description:
      "Use Sentinel for one-off investigations when the monthly file surfaces a bigger supplier, competitor, or market question.",
    bullets: [
      "Custom reporting and ad hoc projects",
      "Question-led analysis for unusual movement",
      "Delivery shaped around the internal team using it",
    ],
  },
];

export const personaCards: PersonaCard[] = [
  {
    role: "Procurement teams",
    title: "Benchmark suppliers before the next negotiation",
    challenge:
      "Raw shipment data is noisy and hard to translate into sourcing decisions.",
    payoff:
      "See supplier activity, shipment shifts, and landed-value signals in a format your team can act on.",
  },
  {
    role: "Trade compliance",
    title: "Catch changes before they become surprises",
    challenge:
      "Classification, shipment detail, and source validation often live in separate places.",
    payoff:
      "Use a single reporting stream to support review, escalation, and internal documentation.",
  },
  {
    role: "Strategy and commercial leaders",
    title: "Turn trade movement into a market read",
    challenge:
      "Most teams can find data, but not a fast, defensible story about what changed and why it matters.",
    payoff:
      "Combine shipment activity with context so the business can react with less guesswork.",
  },
];

export const methodologySteps: MethodStep[] = [
  {
    step: "01",
    title: "Source and normalize records",
    description:
      "Sentinel draws from trade and regulatory sources including Datamyne, PIERS, US Census Foreign Trade Statistics, the US Customs Harmonized Schedule, EPA FOIA requests, NPIRS, and crop data systems.",
  },
  {
    step: "02",
    title: "Map records to usable molecule intelligence",
    description:
      "Shipment records are translated into molecule-level views so clients can work from a cleaner, decision-ready picture rather than raw manifests.",
  },
  {
    step: "03",
    title: "Deliver reporting that fits the question",
    description:
      "Outputs are shaped around recurring monitoring or project-based analysis, with room for custom company, supplier, and molecule slices.",
  },
];

export const reportHighlights = [
  "Shipper and supplier identity",
  "Consignee, quantity, and formulation detail",
  "Estimated lbs ai",
  "Import value plus shipping and insurance (CIF) when available",
  "Monthly Excel pivot table delivery",
  "Tableau-ready reporting when needed",
];

export const dataSources = [
  "Datamyne",
  "PIERS",
  "US Census Foreign Trade Statistics",
  "US Customs Harmonized Schedule",
  "EPA FOIA Requests",
  "National Pesticide Information Retrieval System",
  "Crop Data Management Systems",
];

export const moleculeExamples = [
  "2,4-D",
  "Glyphosate",
  "Dicamba",
  "Imidacloprid",
  "Clothianidin",
  "Trifluralin",
  "Clethodim",
  "Propiconazole",
  "Cyfluthrin",
  "Fosetyl-Al",
  "Metribuzin",
  "Oxyfluorfen",
];

export const roadmapSignals = [
  {
    title: "Deeper supplier investigations",
    description:
      "Recurring monitoring can expand into one-off supplier, competitor, and market questions when the situation calls for a sharper answer.",
  },
  {
    title: "Adjacent chemical categories",
    description:
      "The same monitoring discipline can extend carefully into adjacent intelligence asks without changing the core public offer today.",
  },
  {
    title: "AI as a delivery layer",
    description:
      "Any AI layer should accelerate summary, interpretation, and routing while keeping Sentinel grounded in current reporting and expert review.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What does Sentinel deliver today?",
    answer:
      "Sentinel currently provides recurring and custom reporting focused on agricultural chemicals and intermediates entering the United States, with outputs shaped around client needs.",
  },
  {
    question: "How do clients receive reports?",
    answer:
      "The current delivery model includes Excel pivot tables for easy manipulation and analysis, plus Tableau-ready reporting when visualization workflows are needed.",
  },
  {
    question: "Can Sentinel work on one-off projects?",
    answer:
      "Yes. In addition to standard monthly monitoring, Sentinel supports custom reporting and ad hoc projects for specific molecules, suppliers, or market questions.",
  },
  {
    question: "Does the website publish hard pricing?",
    answer:
      "No. Engagements are scoped around the reporting need, delivery format, and level of customization, so the site is designed to start a sales conversation rather than post public rates.",
  },
];

export const aboutPoints = [
  "Sentinel is built for teams that need recurring import visibility in a specialized category, not a generic trade-data portal.",
  "The service is designed to make shipment records easier to review, share, and act on across sourcing, compliance, and strategy workflows.",
  "Recurring monitoring remains the core offer, with custom investigations available when a standard monthly file is not enough.",
];

export const contactPrompts = [
  "Which molecules or product families matter most right now?",
  "Are you solving for procurement, compliance, market visibility, or a one-off question?",
  "Do you need recurring reporting, a custom project, or a Tableau-ready workflow?",
];

export const demoPrompts = [
  "Which molecules or product categories do you want to see in a live walkthrough?",
  "Do you want the demo framed around procurement, compliance, market visibility, or sample-data depth?",
  "Should the session focus on recurring monitoring, custom analysis, sample review, or workflow delivery?",
];

export const consultationPrompts = [
  "What business decision is driving the conversation right now?",
  "Do you need a recurring reporting partner, a custom market investigation, or a strategy discussion?",
  "Which internal team needs to understand the answer first?",
];

export const supportRequestPrompts = [
  "Are you an existing client or planning support before onboarding?",
  "Is the issue about file delivery, workflow interpretation, or a deeper custom question?",
  "What changed, and what response do you need from Sentinel?",
];

export const engagementModels = [
  {
    title: "Recurring monitoring",
    description:
      "For teams that need a standing view of molecules, suppliers, and shipment movement over time.",
  },
  {
    title: "Custom project scope",
    description:
      "For a focused sourcing, competitor, regulatory, or market question that needs a sharper answer.",
  },
  {
    title: "Workflow integration",
    description:
      "For groups that want Sentinel outputs structured around analyst collaboration or dashboard delivery.",
  },
];

export const demoPaths: OfferPath[] = [
  {
    title: "Recurring monitoring walkthrough",
    description:
      "See how a standing molecule-monitoring workflow would look for your team.",
  },
  {
    title: "Custom project preview",
    description:
      "Use the session to pressure-test a one-off market or supplier question before scoping work.",
  },
  {
    title: "Delivery workflow review",
    description:
      "Focus the demo on Excel, Tableau, and secure delivery fit for your internal process.",
  },
];

export const consultationPaths: OfferPath[] = [
  {
    title: "Commercial conversation",
    description:
      "Talk through the reporting pressure, timing, and internal stakeholders shaping the need.",
  },
  {
    title: "Market intelligence scoping",
    description:
      "Use the conversation to define where recurring reporting stops and custom research should begin.",
  },
  {
    title: "Workflow fit discussion",
    description:
      "Map Sentinel output to the way analysts, managers, and leadership already review information.",
  },
];

export const supportRequestPaths: OfferPath[] = [
  {
    title: "Delivery and file support",
    description:
      "Resolve issues tied to secure delivery, file access, or the current reporting package.",
  },
  {
    title: "Interpretation and workflow help",
    description:
      "Get guided help when a file needs more context, explanation, or downstream workflow tuning.",
  },
  {
    title: "Advanced escalation",
    description:
      "Turn a support issue into a deeper custom review when the question needs expert attention.",
  },
];

export const productClusters: ContentCluster[] = [
  {
    title: "Coverage that starts with the molecules that matter",
    description:
      "Sentinel is organized around agricultural chemicals and intermediates, giving teams a narrower and more usable lens than a generic trade feed.",
    bullets: [
      "Current agricultural chemical and intermediate coverage",
      "Configured watchlists for the molecules your team actually follows",
      "Monthly delivery built for ongoing commercial review",
    ],
  },
  {
    title: "Supplier and landed-value context",
    description:
      "The product brings together shipment movement, supplier visibility, and value fields so teams can read the market faster.",
    bullets: [
      "Supplier and consignee visibility",
      "Import value plus CIF context where available",
      "Change signals that are easier to escalate internally",
    ],
  },
  {
    title: "Outputs built for working teams",
    description:
      "Sentinel fits the way analysts and managers already review information together instead of forcing a new operating model.",
    bullets: [
      "Excel pivot tables for analyst workflows",
      "Tableau-ready delivery for shared dashboards",
      "Secure client delivery through existing workflows",
    ],
  },
  {
    title: "Custom investigations when the signal changes",
    description:
      "Use Sentinel for deeper supplier, competitor, or market questions once recurring monitoring surfaces something worth pursuing.",
    bullets: [
      "Ad hoc investigations and custom report scopes",
      "Market context layered on top of source records",
      "Expert support when the question goes deeper",
    ],
  },
];

export const productHeroCapabilities = [
  "Molecule watchlists with monthly delivery",
  "Supplier, consignee, quantity, and landed-value visibility",
  "Excel, Tableau, and secure client delivery",
];

export const productInclusions = [
  "Current molecule coverage and configured watchlists",
  "Supplier, consignee, and shipment-level visibility",
  "Import value plus shipping and insurance (CIF) when available",
  "Monthly delivery cadence for recurring monitoring",
  "Custom project support for one-off market questions",
  "Excel, Tableau, and secure client-delivery workflows",
];

export const companyDetailCards: InfoCard[] = [
  {
    label: "Company detail",
    title: "See what a company is importing, sourcing, and shipping",
    description:
      "Track importer, supplier, consignee, origin, port, and movement cadence so teams can see what a company is doing and what it is dealing with.",
  },
  {
    label: "Commercial depth",
    title: "Read quantity, formulation, value, and CIF context faster",
    description:
      "Move beyond a shipment count into formulation detail, landed value, freight, insurance, and CIF context where available.",
  },
  {
    label: "Competitive lens",
    title: "Benchmark suppliers, competitors, and category pressure",
    description:
      "Compare changes across named companies, route shifts, and watchlist movement before a negotiation or escalation becomes urgent.",
  },
  {
    label: "Working files",
    title: "Inspect downloadable sample depth before scoping work",
    description:
      "Use an illustrative sample file to review field depth by molecule and decide whether a broader Sentinel scope fits the team.",
  },
];

export const verticalIntegrationCards: InfoCard[] = [
  {
    label: "01 Source",
    title: "Named trade, customs, regulatory, and crop-data inputs",
    description:
      "Sentinel begins with raw import and supporting records rather than a thin dashboard summary.",
  },
  {
    label: "02 Normalize",
    title: "Company, supplier, and molecule cleanup",
    description:
      "Records are translated into company views and molecule-level structure that teams can review without manual cleanup first.",
  },
  {
    label: "03 Integrate",
    title: "Excel, Tableau, and briefing delivery that fits the workflow",
    description:
      "Sentinel connects the data to the files, briefings, and internal review motions clients already use.",
  },
  {
    label: "04 Support",
    title: "Direct follow-through with the Sentinel team",
    description:
      "Teams can move from monitoring into custom investigation quickly when a molecule, supplier, or company needs a deeper read.",
  },
];

export const moleculeCategoryGroups: ContentCluster[] = [
  {
    title: "Agrochemical",
    description:
      "Illustrative herbicide, fungicide, and insecticide watchlists grouped for active-ingredient review.",
    bullets: [
      "Glyphosate",
      "Dicamba",
      "2,4-D",
      "Imidacloprid",
      "Clothianidin",
      "Propiconazole",
    ],
  },
  {
    title: "Pharma",
    description:
      "Illustrative pharmaceutical molecules and intermediates that can be organized into the same molecule-first structure.",
    bullets: [
      "Acetaminophen",
      "Ibuprofen",
      "Metformin HCl",
      "Amoxicillin",
      "Ciprofloxacin",
      "Aspirin",
    ],
  },
  {
    title: "Fertilizers",
    description:
      "Illustrative nutrient and fertilizer inputs grouped into a comparable import-intelligence view.",
    bullets: [
      "Urea",
      "Ammonium Sulfate",
      "Monoammonium Phosphate (MAP)",
      "Diammonium Phosphate (DAP)",
      "Potassium Chloride (MOP)",
      "Ammonium Nitrate",
    ],
  },
];

export const accessPathCards: InfoCard[] = [
  {
    label: "Request a demo",
    title: "Review a live workflow around your target molecules",
    description:
      "Walk through company detail, landed-value depth, and delivery fit with the Sentinel team in a private session.",
  },
  {
    label: "Free sample",
    title: "Download an illustrative dataset and inspect field depth",
    description:
      "Use a sample file to see how molecule, supplier, shipment, route, and CIF detail can be structured before commercial scoping starts.",
  },
  {
    label: "Direct contact",
    title: "Reach the team without waiting on a generic support queue",
    description:
      "Send a molecule, company, or category question directly to Sentinel when the next step is a conversation, not another form field.",
  },
];

export const sampleDataHighlights = [
  "Illustrative downloadable CSV",
  "Company, supplier, route, formulation, and CIF fields",
  "Depth preview before commercial scoping",
];

export const workflowStages: WorkflowStage[] = [
  {
    step: "01",
    title: "Source",
    description:
      "Collect trade and regulatory records from Sentinel's current source stack.",
  },
  {
    step: "02",
    title: "Normalize",
    description:
      "Translate raw records into cleaner molecule, supplier, and shipment views.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Package recurring monitoring or custom project outputs into formats clients already use.",
  },
  {
    step: "04",
    title: "Act",
    description:
      "Support procurement, compliance, and strategy teams with information that is easier to review and share.",
  },
];

export const integrationPoints = [
  "Excel pivot-table workflows",
  "Tableau-ready reporting",
  "Secure client delivery through ShareFile",
  "Analyst collaboration and custom reporting review",
];

export const supportChannels: InfoCard[] = [
  {
    title: "Direct expert access",
    description:
      "Route complex questions to the Sentinel team when recurring files are not enough on their own.",
    label: "Expert support",
  },
  {
    title: "Guided onboarding",
    description:
      "Help teams move from first delivery to a repeatable review process faster.",
    label: "First 30 days",
  },
  {
    title: "Advanced product help",
    description:
      "Use support for custom reporting questions, workflow tuning, and deeper interpretation.",
    label: "Advanced use",
  },
];

export const supportAccessPoints: InfoCard[] = [
  {
    title: "Start new questions through the contact flow",
    description:
      "Use the contact form for new support requests, product questions, or scoped custom-reporting conversations.",
    label: "Primary channel",
  },
  {
    title: "Keep secure delivery inside the current client workflow",
    description:
      "Existing clients continue to receive files and shared materials through ShareFile and Sentinel's secure delivery path.",
    label: "Existing clients",
  },
  {
    title: "Escalate advanced work to expert review",
    description:
      "When a recurring file surfaces a bigger question, Sentinel can turn support into a deeper market or workflow review.",
    label: "Escalation path",
  },
];

export const supportFaqs: FaqItem[] = [
  {
    question: "How do clients get help once they are onboarded?",
    answer:
      "Support is designed around direct access to the Sentinel team through guided review, scoped help, and the existing secure client workflow.",
  },
  {
    question: "Is there support for advanced or custom requests?",
    answer:
      "Yes. Sentinel supports deeper investigations, custom reporting scopes, and workflow-specific questions when the standard recurring file is not enough.",
  },
  {
    question: "What kinds of help-center material should clients expect?",
    answer:
      "The help-center direction includes quick-start guides, workflow videos, and advanced reporting explainers for teams using more tailored outputs.",
  },
  {
    question: "Can Sentinel support both recurring monitoring and one-off projects?",
    answer:
      "Yes. The support model is meant to cover both steady-state monthly reporting and deeper custom investigations.",
  },
];

export const supportResources: ResourceCard[] = [
  {
    type: "Guide",
    title: "Getting started with recurring monitoring",
    description:
      "A quick-start path for new users who need to understand file structure, cadence, and the first set of questions to ask.",
  },
  {
    type: "Video",
    title: "How to review shipment movement faster",
    description:
      "A product walkthrough showing how Sentinel reporting can be used to spot supplier movement, landed-value shifts, and questions worth escalating.",
  },
  {
    type: "Checklist",
    title: "Advanced custom-project intake",
    description:
      "A practical checklist for clients requesting deeper custom work around sourcing, competitors, regulatory pressure, or unusual movement.",
  },
];

export const aboutDifferentiators: InfoCard[] = [
  {
    title: "Focused category coverage",
    description:
      "Sentinel stays centered on agricultural chemicals and intermediates instead of trying to be a broad, generic trade-data destination.",
  },
  {
    title: "Workflow-ready delivery",
    description:
      "Excel pivot tables, Tableau-ready outputs, and secure delivery make the reporting easier to use across analysts, managers, and leadership.",
  },
  {
    title: "Research discipline over raw-data volume",
    description:
      "The value is not only access to source records. It is the work of translating those records into usable reporting and sharper custom investigations.",
  },
];

export const aboutCredibility: ProofPoint[] = [
  {
    label: "Coverage",
    value: "140+ molecules",
    detail:
      "Current monitoring is centered on agricultural chemicals and intermediates entering the United States.",
  },
  {
    label: "Source systems",
    value: "7 named systems",
    detail:
      "Trade, customs, regulatory, and crop-data sources all feed the current methodology.",
  },
  {
    label: "Delivery model",
    value: "Monthly + custom",
    detail:
      "Sentinel supports both recurring reporting and one-off project scopes.",
  },
  {
    label: "Client workflow",
    value: "Secure delivery",
    detail:
      "Outputs are designed for monthly review, team sharing, and secure client access.",
  },
];

export const aboutExpertise = [
  {
    type: "Leadership and client strategy",
    title: "Commercial framing",
    description:
      "Engagements are shaped around the business question first so the reporting maps cleanly to sourcing, compliance, or market-review needs.",
  },
  {
    type: "Research and trade-data analysis",
    title: "Source-to-signal interpretation",
    description:
      "Source records are normalized into molecule, supplier, and shipment views that are easier for a client team to evaluate together.",
  },
  {
    type: "Delivery and support",
    title: "Workflow-aware client service",
    description:
      "Sentinel supports recurring files, secure delivery, and deeper follow-up when a monthly report opens a bigger question.",
  },
];

export const pricingBuckets: PricingBucket[] = [
  {
    name: "Monitoring",
    fit: "A standing relationship for teams that need dependable recurring visibility.",
    description:
      "Best when the core need is a disciplined monthly watchlist, a private briefing rhythm, and quiet escalation when something shifts.",
    inclusions: [
      "Configured molecule watchlists",
      "Monthly reporting cadence",
      "Supplier, consignee, and shipment visibility",
      "Excel-ready delivery with usable working files",
    ],
  },
  {
    name: "Investigation",
    fit: "An expanded scope for teams that need deeper questions answered alongside monitoring.",
    description:
      "Adds sharper supplier, competitor, and market work when a standard recurring brief is not enough on its own.",
    inclusions: [
      "Everything in Monitoring",
      "Custom market or supplier investigations",
      "Benchmarking and change analysis",
      "More tailored delivery around the business question",
    ],
  },
  {
    name: "Embedded",
    fit: "A more private operating model for teams that want Sentinel inside a broader decision workflow.",
    description:
      "Framed around executive communication, cross-functional review, and a more embedded intelligence relationship.",
    inclusions: [
      "Everything in Investigation",
      "Executive-ready summaries and stakeholder views",
      "Workflow design for recurring review and escalation",
      "Custom reporting structure across teams and leadership needs",
    ],
  },
];

export const pricingNotes = [
  "Commercial specifics are still handled through conversation rather than posted dollar figures.",
  "The three engagement models help clients understand scope before detailed scoping and commercial discussion.",
  "Final proposals still depend on molecule coverage, delivery format, and customization depth.",
];

export const aiPrinciples = [
  "Start with explainable outputs that save analyst time before pursuing heavier automation.",
  "Keep a human-in-the-loop for escalations, compliance-sensitive decisions, and high-consequence recommendations.",
  "Use AI to summarize, flag, and route work faster rather than replace Sentinel's domain judgment.",
  "Adopt only where trusted source data, security controls, and auditability are clear.",
];

export const aiPilotSequence = [
  "Phase 1: executive summaries, pattern explanations, and report drafting.",
  "Phase 2: supply chain anomaly alerts, competitor watchlists, and natural-language exploration.",
  "Phase 3: compliance assistance, triage workflows, and role-specific copilots.",
];

export const validatedAiCapabilities: ValidatedCapability[] = [
  {
    title: "Executive intelligence",
    summary:
      "Use AI to turn raw monitoring into faster leadership-ready summaries, key findings, and recommended next actions.",
    sentinelUse:
      "Sentinel could generate executive briefs from recurring shipment changes so teams spend less time formatting and more time deciding.",
    precedent: "Kpler AI",
    validation:
      "Kpler positions AI around natural-language market analysis, continuous monitoring, and automated report or dashboard generation for trade intelligence users.",
    href: "https://www.kpler.com/product/commodities/kpler-ai",
  },
  {
    title: "Supply chain intelligence",
    summary:
      "Use AI to surface disruptions earlier, explain shipment risk, and prioritize which exceptions deserve attention first.",
    sentinelUse:
      "Sentinel could highlight supplier movement, landed-value shifts, or route disruptions that need follow-up before they become surprises.",
    precedent: "project44 Supply Chain AI",
    validation:
      "project44 markets AI agents for disruption detection, exception resolution, data-quality fixes, predictive insights, and natural-language answers inside logistics workflows.",
    href: "https://www.project44.com/supply-chain-ai/",
  },
  {
    title: "Competitive intelligence",
    summary:
      "Use AI to track competitor visibility, category shifts, and emerging prompts or themes faster than manual monitoring can.",
    sentinelUse:
      "Sentinel could build competitor and category watchlists that summarize who is gaining visibility, where sources are shifting, and which topics are becoming more important.",
    precedent: "Similarweb Gen AI Intelligence and AI Studio",
    validation:
      "Similarweb now offers AI-powered competitive benchmarking, executive reporting, and AI-visibility tracking across prompts, sources, traffic, sentiment, and competitor comparisons.",
    href: "https://www.similarweb.com/corp/ai/ai-studio/",
  },
  {
    title: "Compliance assistance",
    summary:
      "Use AI to speed up screening, classification, and adjudication work while keeping review trails visible to humans.",
    sentinelUse:
      "Sentinel could assist teams with explainable screening flags, product classification support, and audit-friendly review notes where compliance context matters.",
    precedent: "Trademo Clara and Trade Compliance",
    validation:
      "Trademo publicly positions AI for sanctions adjudication, explainable notes, confidence scoring, HS or ECCN classification, and workflow integration with human review.",
    href: "https://www.trademo.com/clara-ai-sanctions-adjudication",
  },
];

export const openAiProductWorkflowReference = {
  title: "ChatGPT for product",
  source: "OpenAI Academy",
  published: "July 21, 2025",
  updated: "August 12, 2025",
  href: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/use-cases-product",
} as const;

export const promptWorkflows: PromptWorkflow[] = [
  {
    category: "Competitive and market research",
    description:
      "Use prompt packs to compare competitors, benchmark pricing structures, and surface research questions faster.",
    sentinelUse:
      "This is directly relevant to Sentinel's GTM, pricing, and mock-website work because it speeds up competitor scanning and structured market comparisons.",
    samplePrompt:
      "Compare how the top 5 trade intelligence competitors frame onboarding, pricing tiers, AI claims, and enterprise trust signals. Output a comparison table with recommendations for Sentinel.",
  },
  {
    category: "Product strategy and roadmapping",
    description:
      "Use ChatGPT to prioritize roadmap items, explore monetization options, and turn messy input into clearer product direction.",
    sentinelUse:
      "Sentinel can use this workflow to refine the three-bucket pricing story, rank AI roadmap items, and test which features belong in the next public narrative.",
    samplePrompt:
      "Review Sentinel's current roadmap ideas across executive intelligence, supply chain, competitive intelligence, and compliance. Prioritize them by buyer value, implementation complexity, and presentation readiness.",
  },
  {
    category: "Product content and communication",
    description:
      "Use structured prompts to draft PRDs, launch FAQs, release notes, or stakeholder decks with much less blank-page time.",
    sentinelUse:
      "This fits Sentinel's need to move quickly between website copy, presentation materials, client-facing explanations, and internal handoff notes.",
    samplePrompt:
      "Write a first-draft PRD for Sentinel's executive summary copilot. Include the problem, target user, workflow, acceptance criteria, risks, and success metrics.",
  },
  {
    category: "UX and visual design",
    description:
      "Use ChatGPT to map journeys, create wireframe prompts, and turn rough ideas into clearer design artifacts before full implementation.",
    sentinelUse:
      "This supports the request to make the website more robust and dynamic by helping the team validate flows, content hierarchy, and visual comparisons faster.",
    samplePrompt:
      "Create a user journey for a procurement lead visiting Sentinel's website, moving from awareness to demo request. Include friction points, trust moments, and content needed at each step.",
  },
  {
    category: "Data analysis and insights",
    description:
      "Use prompt packs to summarize feedback, identify adoption risks, and turn usage or experiment data into clearer product implications.",
    sentinelUse:
      "This is useful for synthesizing stakeholder feedback after presentations, spotting objections, and converting meeting notes into prioritized follow-up work.",
    samplePrompt:
      "Analyze the latest Sentinel team and client feedback. Identify the top themes, the highest-priority concerns, and the changes that should be reflected in the website and AI roadmap next.",
  },
];
