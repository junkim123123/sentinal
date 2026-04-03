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

export type InquiryIntentKey =
  | "contact"
  | "demo"
  | "consultation"
  | "support-request";

export type ComparisonLink = {
  href: string;
  label: string;
  description: string;
};

export type SupportingField = {
  name: "clientStatus" | "requestCategory" | "expectedUse";
  label: string;
  options: { label: string; value: string }[];
};

export type InquiryPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  heroLabel: string;
  heroHighlight: string;
  expectationLabel: string;
  expectationTitle: string;
  expectationItems: string[];
  promptLabel: string;
  promptTitle: string;
  prompts: string[];
  pathLabel: string;
  pathTitle: string;
  paths: OfferPath[];
  formPlaceholder: string;
  submitLabel: string;
  assuranceLabel: string;
  assuranceTitle: string;
  assuranceText: string;
  intentKey: InquiryIntentKey;
  introTitle: string;
  introBody: string;
  bestFor: string[];
  notFor: string[];
  nextStep: string;
  responseWindow: string;
  heroVariant: "contact" | "demo" | "consultation" | "support";
  comparisonLinks: ComparisonLink[];
  supportingFields?: SupportingField[];
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
    label: "Request demo",
    href: "/demo",
  },
  secondaryCta: {
    label: "Request consultation",
    href: "/consultation",
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
      "Current monitoring across agricultural chemicals plus adjacent strategic chemical lanes entering the U.S.",
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
  "Monthly watchlists with reviewed refreshes",
  "Workbook, export, and summary-pack structure",
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
    title: "Agricultural chemicals",
    description:
      "The deepest current lane, organized around herbicide, fungicide, and insecticide watchlists for recurring active-ingredient review.",
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
    title: "Pharma ingredients and APIs",
    description:
      "Illustrative pharmaceutical molecules and intermediates that can sit inside the same molecule-first operating model when adjacent category scope matters.",
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
    title: "Fertilizers and nutrients",
    description:
      "Illustrative nutrient and fertilizer inputs grouped into a comparable import-intelligence view rather than treated as a side note.",
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
    title: "Start new issues through the support request desk",
    description:
      "Use the support request form when delivery, workflow interpretation, or escalation needs to be routed against urgency and client status.",
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
      "Support is designed around direct access to the Sentinel team through guided review, scoped help, and the existing secure client workflow, with current-client operational issues prioritized first.",
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

export const ctaDirectory = {
  demo: {
    href: "/demo",
    label: "Request demo",
    purpose: "Validate the product and working output in a live session.",
  },
  contact: {
    href: "/contact",
    label: "Contact Sentinel",
    purpose: "Start a commercial conversation when scope is still broad.",
  },
  consultation: {
    href: "/consultation",
    label: "Request consultation",
    purpose: "Open a strategic advisory discussion around scope and stakeholders.",
  },
  support: {
    href: "/support-request",
    label: "Support request",
    purpose: "Route delivery, workflow, and escalation questions quickly.",
  },
} as const;

export const inquiryPageContent: Record<InquiryIntentKey, InquiryPageContent> = {
  contact: {
    eyebrow: "Commercial intake",
    title: "Use one commercial intake when the need is real but the right engagement is not settled yet",
    description:
      "Contact is Sentinel's broadest commercial entry point. Use it when you know the business pressure, but still need help deciding whether the next step should be a demo, a scoped engagement, or a strategic consultation.",
    heroLabel: "Commercial intake",
    heroHighlight: "Start with the business pressure and Sentinel will route the right next conversation.",
    expectationLabel: "What happens next",
    expectationTitle: "The first reply clarifies fit, route, and timing before anyone jumps into the wrong call.",
    expectationItems: [
      "Sentinel reads the molecule scope, timing pressure, and internal stakeholders behind the request.",
      "The team recommends whether the best next move is a demo, a scoped commercial conversation, or a strategy consultation.",
      "You get a named follow-up with a concrete next step instead of a generic sales sequence.",
    ],
    promptLabel: "Useful intake context",
    promptTitle: "What helps the team route a commercial request well",
    prompts: contactPrompts,
    pathLabel: "Typical routes",
    pathTitle: "Where a broad commercial intake usually goes next",
    paths: engagementModels,
    formPlaceholder:
      "Tell Sentinel what changed, which molecules or categories matter, and what commercial decision your team is trying to make.",
    submitLabel: "Send commercial intake",
    assuranceLabel: "Routing standard",
    assuranceTitle: "Commercial requests are reviewed by a person who can direct the next move, not by a lead queue.",
    assuranceText:
      "The point of this page is to narrow ambiguity quickly. Sentinel uses the first reply to recommend the right motion, expected participants, and likely scope shape.",
    intentKey: "contact",
    introTitle: "Brief the commercial situation.",
    introBody:
      "A concise note on timing, category pressure, and the internal team involved helps Sentinel decide whether to route you to demo, consultation, or scoped commercial follow-up.",
    bestFor: [
      "You know there is a real intelligence need, but the right engagement shape is still unclear.",
      "You need recurring monitoring, a custom project, or workflow-fit discussion and want help choosing the path.",
      "A commercial owner needs to understand response timing before a deeper session is booked.",
    ],
    notFor: [
      "Use Demo when you already want a live product walkthrough or sample-file review.",
      "Use Consultation when leadership alignment, stakeholder framing, or advisory scoping is the main need.",
      "Use Support Request for file delivery issues, interpretation help, or active-client escalations.",
    ],
    nextStep:
      "Expect Sentinel to recommend the most useful next motion, often a demo for product validation or a consultation for higher-stakes strategic scoping.",
    responseWindow:
      "Typical response window: within one business day with route, participants, and likely next call format.",
    heroVariant: "contact",
    comparisonLinks: [
      {
        href: "/demo",
        label: "Need product validation instead?",
        description: "Go to Demo if the main question is what the workflow, file depth, and walkthrough will look like.",
      },
      {
        href: "/consultation",
        label: "Need strategic scoping?",
        description: "Go to Consultation if the discussion starts with business stakes, executive alignment, or advisory framing.",
      },
    ],
    supportingFields: [
      {
        name: "expectedUse",
        label: "What kind of follow-up do you expect?",
        options: [
          { label: "Need help choosing the next step", value: "route-selection" },
          { label: "Recurring monitoring conversation", value: "monitoring" },
          { label: "Custom investigation or project", value: "investigation" },
          { label: "Workflow or delivery fit review", value: "workflow-fit" },
        ],
      },
    ],
  },
  demo: {
    eyebrow: "Product validation",
    title: "Request a demo when the next step is to inspect the workflow, sample depth, and live review structure",
    description:
      "The demo page is for teams that already want to pressure-test the product. Sentinel uses the session to show live workflow fit, sample-file depth, and how a real review would unfold for your molecules and companies.",
    heroLabel: "Demo session",
    heroHighlight: "This is a working walkthrough, not a generic product tour.",
    expectationLabel: "Session structure",
    expectationTitle: "The walkthrough is organized around what the buying team needs to verify before moving forward.",
    expectationItems: [
      "Sentinel confirms the category scope, target stakeholders, and whether the session should emphasize live walkthrough or sample review.",
      "The session agenda typically covers workflow fit, watchlist logic, company drill-down, and delivery mechanics in one pass.",
      "Follow-up focuses on whether the product is credible enough for the next buying conversation, not on keeping the meeting alive.",
    ],
    promptLabel: "Best demo inputs",
    promptTitle: "What helps Sentinel prepare a sharper walkthrough",
    prompts: demoPrompts,
    pathLabel: "Session types",
    pathTitle: "How the walkthrough can be tailored",
    paths: demoPaths,
    formPlaceholder:
      "Tell Sentinel which molecules, categories, or files the session should cover and whether you want a live walkthrough, a sample review, or both.",
    submitLabel: "Request demo",
    assuranceLabel: "Demo design",
    assuranceTitle: "Every demo is built around a decision, not around feature theater.",
    assuranceText:
      "Use this page when the buying team wants to verify what will be shown, who should attend, and what the working output feels like before commercial scoping goes deeper.",
    intentKey: "demo",
    introTitle: "Shape the session before it is booked.",
    introBody:
      "A good note here tells Sentinel which buyer questions need to be answered live, whether sample review matters, and which team members should be in the room.",
    bestFor: [
      "You want a live walkthrough of company drill-down, watchlist review, or delivery structure.",
      "A buying team needs to compare live workflow against sample-file depth before committing.",
      "You want to know who should attend, how long the session runs, and what Sentinel will actually show.",
    ],
    notFor: [
      "Use Contact if you still need help deciding whether demo, consultation, or direct scoping is the right motion.",
      "Use Consultation for strategic or executive advisory conversations that start with business pressure rather than product proof.",
      "Use Support Request if you already have files or delivery issues that need resolution.",
    ],
    nextStep:
      "Sentinel typically replies with a proposed agenda, recommended attendees, expected session length, and whether live walkthrough or sample review should lead.",
    responseWindow:
      "Typical response window: within one business day with agenda, attendee guidance, and session format recommendation.",
    heroVariant: "demo",
    comparisonLinks: [
      {
        href: "/contact",
        label: "Still deciding on the route?",
        description: "Go to Contact if the conversation is still broad and you want Sentinel to recommend the next move.",
      },
      {
        href: "/consultation",
        label: "Need advisory framing first?",
        description: "Go to Consultation if the main issue is strategic scope, stakeholder alignment, or executive decision support.",
      },
    ],
    supportingFields: [
      {
        name: "expectedUse",
        label: "What should the session emphasize?",
        options: [
          { label: "Live walkthrough", value: "live-walkthrough" },
          { label: "Sample file review", value: "sample-review" },
          { label: "Both live and sample", value: "live-and-sample" },
          { label: "Delivery workflow fit", value: "delivery-fit" },
        ],
      },
    ],
  },
  consultation: {
    eyebrow: "Strategic advisory",
    title: "Request consultation when the business stakes, stakeholder alignment, and scope shape matter more than a product tour",
    description:
      "Consultation is the high-value advisory path. Use it when the team needs a sharper discussion about what should be monitored, who needs to trust the output, and what kind of engagement will actually fit the decision environment.",
    heroLabel: "Advisory path",
    heroHighlight: "Consultation starts with strategic judgment and ends with a recommended operating shape.",
    expectationLabel: "Advisory flow",
    expectationTitle: "The conversation is designed for executive, cross-functional, or higher-stakes scoping moments.",
    expectationItems: [
      "Sentinel clarifies the business decision, the stakeholder group, and the timing pressure behind the request.",
      "The session can end with a proposed engagement shape, stakeholder sequence, or scoped advisory path rather than a generic next-call suggestion.",
      "Outputs often include scope framing, delivery guidance, and what leadership should see first.",
    ],
    promptLabel: "Useful strategy context",
    promptTitle: "What makes a consultation more valuable",
    prompts: consultationPrompts,
    pathLabel: "Advisory outcomes",
    pathTitle: "Where consultation usually creates leverage",
    paths: consultationPaths,
    formPlaceholder:
      "Tell Sentinel what decision is in front of the business, which stakeholders need to align, and what timing or category pressure is driving the request.",
    submitLabel: "Request consultation",
    assuranceLabel: "Advisory standard",
    assuranceTitle: "This path is for teams that need a clearer recommendation, not simply another meeting.",
    assuranceText:
      "Use this page when the real need is scoping judgment: which category surface matters, what the executive audience needs, and how Sentinel should be embedded into the workflow.",
    intentKey: "consultation",
    introTitle: "Outline the decision environment.",
    introBody:
      "The strongest consultation requests explain the business stakes, who needs to buy in, and what a useful recommendation would help the team decide next.",
    bestFor: [
      "Leadership or cross-functional teams need clarity on scope, cadence, or stakeholder communication.",
      "The need sits above a product demo because the main question is how Sentinel should fit the operating model.",
      "You want a higher-context advisory conversation about recurring monitoring, custom work, or executive-facing delivery.",
    ],
    notFor: [
      "Use Demo if the main need is to see the product, sample-file depth, or live walkthrough mechanics.",
      "Use Contact if the commercial path is still broad and you want Sentinel to route the next motion.",
      "Use Support Request for active delivery, interpretation, or escalation issues.",
    ],
    nextStep:
      "Sentinel typically responds with a suggested conversation format, the right participants, and what kind of scope recommendation the consultation can produce.",
    responseWindow:
      "Typical response window: within one business day with participant guidance, likely outputs, and recommended discussion structure.",
    heroVariant: "consultation",
    comparisonLinks: [
      {
        href: "/demo",
        label: "Need a walkthrough first?",
        description: "Go to Demo if your team first needs to verify the product and working files before advisory scoping.",
      },
      {
        href: "/contact",
        label: "Need a broader commercial intake?",
        description: "Go to Contact if the route is still broad and you want Sentinel to recommend the right motion.",
      },
    ],
    supportingFields: [
      {
        name: "expectedUse",
        label: "What kind of advisory outcome matters most?",
        options: [
          { label: "Engagement shape and scope", value: "engagement-shape" },
          { label: "Stakeholder and leadership framing", value: "stakeholder-framing" },
          { label: "Workflow and delivery model", value: "workflow-model" },
          { label: "Custom investigation path", value: "custom-path" },
        ],
      },
    ],
  },
  "support-request": {
    eyebrow: "Support desk",
    title: "Open a support request when delivery, interpretation, or escalation needs fast routing",
    description:
      "Support Request is the operating desk for delivery problems, workflow interpretation, and deeper escalations. It is not only for current clients, but the form makes client status and request type explicit so routing is clear immediately.",
    heroLabel: "Support routing",
    heroHighlight: "Choose this path when a file, workflow, or active question needs fast handling.",
    expectationLabel: "Routing logic",
    expectationTitle: "Support requests are separated by client status, request type, and urgency before the first reply goes out.",
    expectationItems: [
      "Sentinel identifies whether the request is from an active client, a pre-onboarding team, or a prospective buyer needing guided support.",
      "The desk distinguishes file delivery, workflow interpretation, deeper research follow-up, and escalation cases instead of mixing them together.",
      "Response timing is set by impact and current relationship status so the request lands with the right owner.",
    ],
    promptLabel: "Fastest-response inputs",
    promptTitle: "What helps the support desk route correctly",
    prompts: supportRequestPrompts,
    pathLabel: "Support lanes",
    pathTitle: "How Sentinel routes help requests",
    paths: supportRequestPaths,
    formPlaceholder:
      "Tell Sentinel what changed, which file or workflow is involved, whether you are a current client, and what kind of response is needed.",
    submitLabel: "Send support request",
    assuranceLabel: "Support desk standard",
    assuranceTitle: "Requests are triaged against delivery impact, not dropped into a generic inbox.",
    assuranceText:
      "This page is built to remove ambiguity. Current-client issues, pre-onboarding questions, interpretation help, and escalations each have a clearer route and response expectation.",
    intentKey: "support-request",
    introTitle: "Describe the support situation clearly.",
    introBody:
      "The faster you identify client status, request type, and urgency, the faster Sentinel can route the issue to delivery support, guided interpretation, or deeper escalation review.",
    bestFor: [
      "You need help with file delivery, access, interpretation, or workflow use.",
      "A recurring file surfaced a deeper question that needs guided escalation.",
      "A pre-onboarding team needs operational help before a broader engagement is fully underway.",
    ],
    notFor: [
      "Use Contact for broad commercial intake and scope discovery.",
      "Use Demo for live product validation and workflow walkthroughs.",
      "Use Consultation for strategic or executive scoping conversations.",
    ],
    nextStep:
      "Sentinel replies with the route owner, urgency band, and whether the issue stays in support or needs escalation into deeper review.",
    responseWindow:
      "Typical response window: current-client operational issues are prioritized first, with other requests acknowledged within one business day.",
    heroVariant: "support",
    comparisonLinks: [
      {
        href: "/support",
        label: "Need support policy first?",
        description: "Go to Support to review response expectations, ownership, and escalation rules before submitting.",
      },
      {
        href: "/contact",
        label: "Need a commercial conversation instead?",
        description: "Go to Contact if the question is really about fit, scope, or a new commercial request.",
      },
    ],
    supportingFields: [
      {
        name: "clientStatus",
        label: "What best describes your status?",
        options: [
          { label: "Current client", value: "current-client" },
          { label: "Pre-onboarding team", value: "pre-onboarding" },
          { label: "Prospective buyer", value: "prospective" },
        ],
      },
      {
        name: "requestCategory",
        label: "What kind of support is this?",
        options: [
          { label: "Delivery or file access", value: "delivery" },
          { label: "Interpretation or workflow help", value: "interpretation" },
          { label: "Advanced escalation", value: "escalation" },
          { label: "Custom follow-up request", value: "custom-follow-up" },
        ],
      },
    ],
  },
};

export const thanksPageContent: Record<
  InquiryIntentKey,
  {
    eyebrow: string;
    title: string;
    description: string;
    responseWindow: string;
    nextSteps: string[];
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
  }
> = {
  contact: {
    eyebrow: "Commercial intake received",
    title: "Sentinel has the commercial intake and will recommend the right next motion.",
    description:
      "The next reply will usually confirm whether the request should move into demo, consultation, or scoped commercial follow-up.",
    responseWindow: "Most commercial requests receive a named reply within one business day.",
    nextSteps: [
      "Expect a response that clarifies route, likely participants, and whether a demo or consultation makes more sense.",
      "If the need is urgent, include timing or decision pressure in any follow-up reply so routing stays accurate.",
    ],
    primaryHref: "/pricing",
    primaryLabel: "Review engagement models",
    secondaryHref: "/product",
    secondaryLabel: "Review product fit",
  },
  demo: {
    eyebrow: "Demo request received",
    title: "Sentinel has the demo request and will shape the walkthrough around your buying questions.",
    description:
      "The follow-up should clarify agenda, who should attend, how long the session should run, and whether live walkthrough or sample review should lead.",
    responseWindow: "Most demo requests receive a named reply within one business day.",
    nextSteps: [
      "Expect agenda guidance, attendee recommendations, and a note on whether a sample review should accompany the session.",
      "If internal stakeholders change, reply to the confirmation so Sentinel can tune the walkthrough before the meeting is set.",
    ],
    primaryHref: "/reports",
    primaryLabel: "Review report preview",
    secondaryHref: "/dashboard",
    secondaryLabel: "Review dashboard preview",
  },
  consultation: {
    eyebrow: "Consultation request received",
    title: "Sentinel has the consultation request and will frame the next conversation around the decision environment.",
    description:
      "The response should clarify likely participants, the kind of recommendation the session can produce, and what materials or context would sharpen the advisory discussion.",
    responseWindow: "Most consultation requests receive a named reply within one business day.",
    nextSteps: [
      "Expect a note on who should join, what decision the consultation can help resolve, and what scope framing is realistic.",
      "If the conversation becomes more product-validation oriented, Sentinel may recommend adding a demo or sample review before the advisory session.",
    ],
    primaryHref: "/pricing",
    primaryLabel: "Review engagement models",
    secondaryHref: "/about",
    secondaryLabel: "Review operating model",
  },
  "support-request": {
    eyebrow: "Support request received",
    title: "Sentinel has the support request and will route it by status, urgency, and request type.",
    description:
      "Current-client operational issues are prioritized first, while interpretation and escalation requests are directed to the right owner with a clearer timing signal.",
    responseWindow: "Current-client delivery issues are prioritized; other requests are typically acknowledged within one business day.",
    nextSteps: [
      "Expect a reply that confirms the owner, urgency band, and whether the issue stays in support or moves into a deeper escalation.",
      "If the request involves a specific file, workflow, or access issue, keep that reference in the reply chain so routing stays intact.",
    ],
    primaryHref: "/support",
    primaryLabel: "Review support expectations",
    secondaryHref: "/contact",
    secondaryLabel: "Return to commercial contact",
  },
};

export const homeCategoryProof = [
  {
    label: "Core coverage",
    title: "Agrochemical monitoring remains the deepest current lane.",
    description:
      "Sentinel is still anchored in agricultural chemical imports, company drill-down, and recurring watchlist review.",
  },
  {
    label: "Adjacent categories",
    title: "Pharma and fertilizer are treated as real adjacent lanes, not a footnote.",
    description:
      "The same molecule-first model can extend into strategic chemical categories when the buying team needs a broader view.",
  },
  {
    label: "Trust model",
    title: "Named sources, analyst review, and working-file delivery show up early.",
    description:
      "The offer is not just data access. It is a reviewed signal with Excel, Tableau, and briefing-friendly delivery.",
  },
] as const;

export const pricingScopeDrivers: InfoCard[] = [
  {
    label: "Scope driver",
    title: "Molecule breadth",
    description:
      "Broader watchlists and more category surfaces expand the recurring coverage and review load.",
  },
  {
    label: "Scope driver",
    title: "Cadence and urgency",
    description:
      "Monthly monitoring, faster escalation expectations, and timing-sensitive support all change the shape of the engagement.",
  },
  {
    label: "Scope driver",
    title: "Investigation depth",
    description:
      "Supplier, competitor, and market investigations add work beyond the standing monitoring layer.",
  },
  {
    label: "Scope driver",
    title: "Stakeholder surface",
    description:
      "Executive summaries, cross-functional delivery, and wider circulation needs increase the packaging and support burden.",
  },
];

export const aboutOperatorCards: InfoCard[] = [
  {
    label: "Operator credibility",
    title: "Named human review before delivery",
    description:
      "Sentinel treats review ownership as part of the product: source cleanup, escalation framing, and final delivery all stay accountable to an operator.",
  },
  {
    label: "Operating model",
    title: "Built for a small number of serious client workflows",
    description:
      "The business favors controlled delivery, direct follow-up, and repeatable review motions instead of broad self-serve volume.",
  },
  {
    label: "Coverage posture",
    title: "Focused by design, expandable with judgment",
    description:
      "Agricultural chemicals remain the public center of gravity, while adjacent pharma and fertilizer scopes can be added carefully when the fit is real.",
  },
];

export const methodologyGovernanceCards: InfoCard[] = [
  {
    label: "Governance",
    title: "Review ownership is visible",
    description:
      "Source collection, normalization, and final output each include a human review step so buyers understand where judgment enters the workflow.",
  },
  {
    label: "Quality control",
    title: "Escalations trigger tighter checking",
    description:
      "When a signal matters more, Sentinel tightens validation, framing, and delivery notes instead of treating every row the same.",
  },
  {
    label: "Cadence handling",
    title: "Gaps and anomalies are explained, not hidden",
    description:
      "The methodology acknowledges irregular source behavior and surfaces what changed, what is stable, and where caution is warranted.",
  },
];

export const solutionWorkflowCards = [
  {
    role: "Procurement",
    output: "Supplier pressure brief + importer-by-molecule view",
    change:
      "Moves negotiation prep from raw shipment hunting into a faster supplier and landed-value review rhythm.",
  },
  {
    role: "Compliance",
    output: "Reviewed movement notes + escalation-ready trace",
    change:
      "Keeps shipment context, source interpretation, and follow-up notes closer together for audit and escalation use.",
  },
  {
    role: "Strategy",
    output: "Executive summary + category movement narrative",
    change:
      "Turns monthly trade motion into something leadership can scan, share, and use in planning conversations.",
  },
] as const;

export const supportResponseCards: InfoCard[] = [
  {
    label: "Response window",
    title: "Current-client delivery issues are prioritized first",
    description:
      "Operational issues tied to active delivery get the fastest triage because they affect current workflows immediately.",
  },
  {
    label: "Ownership",
    title: "Requests are routed to a named owner",
    description:
      "Support is tied to the same service relationship, so the person replying can usually clarify route and next action in the same thread.",
  },
  {
    label: "Escalation",
    title: "Deeper questions can move into custom review",
    description:
      "When a support issue becomes a broader market or supplier question, Sentinel can escalate it without losing context.",
  },
];

export const dashboardPreviewCues = [
  "Company dossier drill-down available in the live engagement",
  "Signal badges tuned for weekly review and stakeholder handoff",
  "Export and report pack paths sit beside the dashboard, not outside it",
] as const;

export const reportDeliveryCards: InfoCard[] = [
  {
    label: "Included in",
    title: "Monitoring and Investigation packages",
    description:
      "The report preview represents a deliverable buyers can expect inside recurring monitoring and deeper investigation scopes.",
  },
  {
    label: "Distribution",
    title: "Built for analyst and leadership circulation",
    description:
      "The structure supports row-level review, manager summary, and executive scan without rewriting the whole output.",
  },
  {
    label: "Mechanics",
    title: "Versioned, exportable, and easy to brief from",
    description:
      "Preview mode stands in for a real deliverable that can be exported, archived, and circulated in a controlled workflow.",
  },
];

export const aiRoadmapFrames = [
  {
    label: "Current product first",
    title: "The core product has to feel complete before AI earns attention.",
    description:
      "Sentinel leads with reviewed monitoring, working files, and delivery clarity. AI is framed as a later accelerant, not as cover for an unfinished core offer.",
  },
  {
    label: "Near term",
    title: "Summaries, pattern explanation, and internal drafting come first.",
    description:
      "The most credible early AI uses make reviewed output easier to summarize and route without moving judgment off the product team.",
  },
  {
    label: "Not now",
    title: "High-consequence automation stays off the front edge.",
    description:
      "Compliance-sensitive recommendations, autonomous actions, and opaque decisioning remain out of scope until the core trust model is much deeper.",
  },
] as const;
