export interface Project {
  id: string;
  /** Leads the home page. The rest are reachable from /work. */
  featured?: boolean;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categories: string[];
  services: string;
  client: string;
  year: string;
  role: string;
  /**
   * How the work was actually done — employment, client engagement via a
   * studio, freelance, or self-initiated. Rendered in the case-study fact
   * sheet. Left undefined where it is not yet confirmed, so nothing
   * unverified is published.
   */
  engagement?: string;
  duration: string;
  liveUrl?: string;
  coverImage: string;
  heroImage: string;
  description: string;
  goal?: string;
  outcome?: string;
  principles?: { title: string; description: string }[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  designSystem: string;
  /**
   * Full-width artefacts — flow diagrams, annotated screen sets — rendered at
   * their own aspect ratio with a caption. The `gallery` carousel locks every
   * image into one 860/620 frame, which crushes a 3:1 systems diagram into an
   * unreadable strip between two grey bands.
   */
  figures?: { src: string; title: string; caption: string; wide?: boolean }[];
  gallery: string[];
  features: { title: string; description: string }[];
  roadmap?: string[];
  takeaways: string;
}

export const projects: Project[] = [
  {
    "id": "01",
    "featured": true,
    "slug": "omits",
    "title": "Omits Finance",
    "tagline": "Designing Trust, Transparency & Speed into Cross-Border Remittance",
    "category": "Fintech",
    "categories": [
      "Fintech",
      "Mobile UX",
      "Design System",
      "UX Research"
    ],
    "services": "UX Research, Product Strategy, Systems Design, Design System, UI/UX Design",
    "client": "Omits Technology Limited",
    "engagement": "Full-time · Omits Technology Limited",
    "year": "2025–2026",
    "role": "Product Lead & Product Designer",
    "duration": "12 Months",
    "coverImage": "/images/work/omits/00-in-hand.png",
    "heroImage": "/images/work/omits/00-in-hand.png",
    "description": "Omits was built to answer one question: why should sending money internationally be any harder than sending it across the street? As sole product designer and manager, I owned this end-to-end, from first principles to shipped product.",
    "goal": "Make cross-border transfers as seamless, affordable and transparent as a domestic payment — without compromising security or compliance.",
    "outcome": "Shipped to a 500+ user beta across Canada, Nigeria, Ghana and the UK, with average transaction completion under 60 seconds, onboarding at 130 seconds, and four currency corridors live at launch.",
    "principles": [
      {
        "title": "Radical Transparency",
        "description": "Hidden fees don't just frustrate users, they lose them. Live FX, total fees and the exact amount the recipient receives are all stated before the point of commitment — never after."
      },
      {
        "title": "Frictionless Flow",
        "description": "Every additional step is a potential drop-off. The flow had to be intuitive enough for a first-time user and fast enough for a repeat one, which are not the same requirement."
      },
      {
        "title": "Progressive Trust",
        "description": "Traditional KYC asks for everything upfront and kills sign-up before anyone sees value. Verification is tiered and deferred to the moment each jurisdiction actually requires it."
      },
      {
        "title": "Intelligent Assistance",
        "description": "Payment fields adapt per corridor rather than presenting one generic form, so a Ghanaian mobile-money transfer and a Nigerian bank transfer each ask only for what they need."
      }
    ],
    "metrics": [
      {
        "label": "Beta Users Onboarded",
        "value": "500+"
      },
      {
        "label": "Transaction Completion",
        "value": "< 60s"
      },
      {
        "label": "Onboarding Completion",
        "value": "130s"
      },
      {
        "label": "Corridors at Launch",
        "value": "4+"
      }
    ],
    "overview": "Cross-border remittance is broken, and the people it hurts most are those who can least afford it. Migrant workers, international students and families separated by borders pay an average of 6.4% per transaction globally — banks charge up to 11.99% — wait days for transfers that should take seconds, and navigate hidden markups and compliance walls designed to frustrate rather than protect. I researched across three user segments — migrant workers, international students and expats, and small business owners — each with distinct but overlapping needs around cost, speed and flexibility.",
    "challenge": "One app. Multiple countries. Wildly different regulations. Nigeria (CBN), Kenya (CBK) and Ghana (BoG) each impose different KYC tiers, document requirements and transaction limits, so the same screen cannot serve all three. Traditional KYC flows are aggressive: asking for everything upfront was killing sign-up rates before users saw any value. And first-time fintech users in these markets carry high fraud anxiety — too many fields reads as \"this feels like a scam\". Meanwhile 97% of urgent transfers are needed within minutes, because recipients are waiting on funds for emergencies or immediate bills.",
    "solution": "Before a single screen was designed, I mapped the entire money flow — FX engine, KYC/AML/PEP monitoring, Nostro accounts, and every failure and reversal path. Design decisions had to be grounded in how the system actually works, not in how the happy path looks. From that model came a tiered, jurisdiction-aware verification flow with explicit retry states at each stage; a send flow whose review screen states the live rate, total fees and the recipient's exact receiving amount before any commitment; payment fields that adapt per corridor; and dual authorisation where biometrics carry speed and a transaction PIN carries fallback.",
    "designSystem": "A token-based system built for light and dark parity from the start, and for reusable flows across N currencies without building N screens. Every component state was documented for engineering handoff. The hierarchy is consistent throughout: what you are doing at the top, the number that matters in the largest type on screen, and the irreversible action last — with success, pending and failure designed as full screens rather than toasts.",
    "figures": [
      {
        "src": "/images/work/omits/01-money-flow.png",
        "title": "The money flow, mapped before any screen",
        "caption": "Initiation, creation, success and failure paths across the FX engine, the KYC/AML/PEP monitoring layer and Nostro accounts. The red branch is the one that mattered most: when a transfer fails, balances reverse, the transaction is cancelled and a reversal audit documents why — behaviour the interface has to be honest about rather than hide.",
        "wide": true
      },
      {
        "src": "/images/work/omits/02-send-transparency.png",
        "title": "Transparency before commitment",
        "caption": "Payment fields adapt per corridor — a Ghanaian mobile-money transfer asks for an operator and mobile number, a bank transfer asks for a bank and account. Both converge on one review screen stating the live rate, total fees and the exact amount the recipient receives."
      },
      {
        "src": "/images/work/omits/03-authorise-complete.png",
        "title": "The moment of truth, then the receipt",
        "caption": "The full breakdown is shown before PIN entry, not after. Biometrics carry speed and the PIN carries fallback, so neither feels like a compromise. On completion the reference number, receipt and delivery timeline are immediately available."
      },
      {
        "src": "/images/work/omits/04-kyc-flow.png",
        "title": "Tiered verification, with every failure path drawn",
        "caption": "Government ID, selfie and proof of address, each with its own retry and hard-fail branch. Designing the retry states first is what let verification be deferred to the point each jurisdiction requires it, rather than stacked in front of sign-up.",
        "wide": true
      }
    ],
    "gallery": [
      "/images/work/omits/05-home.png",
      "/images/work/omits/06-analytics.png",
      "/images/work/omits/07-convert-notifications.png",
      "/images/work/omits/08-settings.png",
      "/images/work/omits/09-onboarding-failures.png"
    ],
    "features": [
      {
        "title": "The Money Flow, Mapped First",
        "description": "Transaction initiation, creation, success and failure paths modelled end-to-end across the FX engine, the KYC/AML/PEP monitoring layer and Nostro accounts — including balance reversal and audit documentation when a transfer fails."
      },
      {
        "title": "The Review Screen — the Moment of Truth",
        "description": "Full breakdown shown before PIN entry: live rate, total fees, recipient amount, delivery estimate. We called it the moment of truth in design reviews, because it is where trust is either won or lost."
      },
      {
        "title": "Dual Authorisation by Design",
        "description": "PIN and biometrics aren't competing, they're complementary — biometrics for speed, PIN as fallback, both deliberate. The PIN flow was iterated three times against biometric adoption data."
      },
      {
        "title": "Jurisdiction-Aware Tiered KYC",
        "description": "Government ID, selfie and proof-of-address stages each carry their own retry and failure states, sequenced to the KYC tier a given market and transaction limit actually requires."
      },
      {
        "title": "Post-Transaction Clarity",
        "description": "Receipt, reference number and delivery status timeline are immediately available on completion. No ambiguity about what happened to the money — the single largest source of support contact in remittance."
      }
    ],
    "takeaways": "Three things travelled with me. Design systems are a product decision, not a design one — the token system halved the cost of adding a new corridor, which is a commercial outcome expressed as a design artefact. Trust is designed, not assumed: in fintech it has to be re-earned on every screen, and the review step people describe as friction is the step that makes them willing to finish. And tiered KYC was never just good UX — it was a funnel strategy, which is why I stopped treating regulatory constraint as a tax on the design and started treating it as the thing shaping it."
  },
  {
    "id": "02",
    "featured": true,
    "slug": "mindgard-ai-security-labs",
    "title": "Mindgard AI Security Labs",
    "tagline": "Automated Red-Teaming & Vulnerability Assessment for LLMs and AI Models",
    "category": "AI & Cybersecurity",
    "categories": [
      "AI & Cybersecurity",
      "Design System",
      "LLM Red Teaming",
      "Prototyping"
    ],
    "services": "Research → Competitive Analysis → UX Strategy → Design System → UI & Prototyping",
    "client": "Mindgard AI Security Labs",
    "year": "2024",
    "role": "Solo Designer",
    "engagement": "Solo Designer · Cross-Functional Team (PM, 2 SWEs, AI Researcher, SecEng)",
    "duration": "4 Months",
    "coverImage": "/images/work/mindgard-ai-security-labs/01-dashboard-overview.png",
    "heroImage": "/images/work/mindgard-ai-security-labs/01-dashboard-overview.png",
    "description": "Mindgard, a London-based cybersecurity startup, enables enterprises to secure AI and LLM deployments against emerging adversarial attacks. As Solo Designer, I designed a comprehensive overview dashboard that simplifies complex neural threat telemetry into actionable risk management for B2B enterprise customers.",
    "goal": "Provide enterprise security decision-makers with a clear, actionable overview of risks detected across their AI and LLM models, empowering teams to prioritize threats and take swift remediation action.",
    "outcome": "Delivered an end-to-end B2B AI security dashboard now in enterprise Beta testing — integrating 25 MITRE ATLAS risk categories, multi-model inventory, 6-month trend telemetry, and 1-click remediation guidelines.",
    "principles": [
      {
        "title": "Comprehensive but Simplified Risk Overview",
        "description": "Present high-level executive and engineering risk postures across all active enterprise models without drowning operators in raw, unmanageable log dumps."
      },
      {
        "title": "Historical Trend Analysis",
        "description": "Track vulnerability trajectories and risk score fluctuations across 6-month horizons with multi-model comparative filters and precise hover tooltips."
      },
      {
        "title": "Actionable Remediation Guidelines",
        "description": "Connect every discovered vulnerability directly to prioritized remediation actions (model obfuscation, boundary hardening, input restoration) with 1-click action triggers."
      },
      {
        "title": "MITRE ATLAS™ Threat Standardization",
        "description": "Anchor risk categories directly to the industry-standard MITRE ATLAS framework with clear, consistent semantic color-coding (Green for low, Yellow for medium, Red for high threat)."
      }
    ],
    "metrics": [
      {
        "label": "MITRE ATLAS Categories",
        "value": "25 Vectors"
      },
      {
        "label": "Threats Discovered",
        "value": "938 Attacks"
      },
      {
        "label": "User Research Pool",
        "value": "10 Experts"
      },
      {
        "label": "Platform Status",
        "value": "Beta Testing"
      }
    ],
    "overview": "Mindgard is a London-based startup aiming to secure the future of AI against cyberattacks targeting AI, GenAI, and Large Language Models. As Solo Designer over a 4-month sprint, I collaborated closely with a cross-functional team of six — including a Product Manager, two Software Engineers, an AI Researcher, and a Cybersecurity Engineer. The objective was to design a comprehensive overview dashboard for B2B enterprise customers to assess and secure their AI systems.",
    "challenge": "Enterprise security teams managing AI and LLM deployments face novel adversarial attack vectors — from prompt injections and jailbreaks to data leakage and model theft. Existing cybersecurity dashboards failed to simplify this probabilistic, complex data into an easily digestible format, leaving decision-makers without actionable remediation paths to prioritize risks efficiently.",
    "solution": "To align the product with business goals and user workflows, I conducted extensive user research with 10 industry professionals (Offensive Security Engineers, AI Engineers, and Security Architects) through qualitative interviews and surveys, alongside competitive benchmarking against Sydelabs, Adversa, Robust Intelligence, and Hiddenlayer. I translated these insights into an intuitive four-pillar dashboard: an interactive MITRE ATLAS donut widget tracking 25 threat categories, a color-coded model inventory table, 1-click prioritized remediation guidelines, and 6-month trend visualization curves.",
    "designSystem": "Designed a comprehensive component set and style guide tailored for technical users while reinforcing Mindgard's brand identity. The system incorporates disciplined semantic risk tokens — Green (Low Threat / 80–90%+ security score), Amber (Medium Threat / 60%), and Red (High Threat / 16–20% critical risk) — paired with high-contrast data visualization, collapsible navigation with active indicator pills, and frictionless modal dialogs for model onboarding and scan orchestration.",
    "gallery": [
      "/images/work/mindgard-ai-security-labs/01-dashboard-overview.png",
      "/images/work/mindgard-ai-security-labs/02-models.png",
      "/images/work/mindgard-ai-security-labs/03-scan-history.png",
      "/images/work/mindgard-ai-security-labs/04-trend-visualization.png"
    ],
    "features": [
      {
        "title": "MITRE ATLAS™ Risk Categories Donut Widget",
        "description": "Interactive donut chart mapping 25 high-impact threat categories (Reconnaissance, Initial Access, ML Model Access, Execution, Persistence, Defense Evasion, Exfiltration) with hover-over category details, active category filters, and month-over-month percentage changes."
      },
      {
        "title": "AI Model Inventory & Management Table",
        "description": "Sortable table tracking tested models (ViT Beans, Roberta Base Amazon, Mistral, CFP Faces, OpenAI GPT-3.5, Cohere) with date last tested, color-coded threat badges, risk score gauges, attack counts, and 1-click scan triggers."
      },
      {
        "title": "Prioritized Remediation Guidelines Engine",
        "description": "Actionable guidelines prioritized by risk severity (ML Model Obfuscation against Knockoff Nets, Model Hardening against Boundary Attacks, Input Restoration against MiFace) featuring a direct 'Remediate' button linking to step-by-step mitigation code."
      },
      {
        "title": "Interactive 6-Month Risk Trend Visualization",
        "description": "Multi-series line chart visualizing risk level trajectories across months with customizable date ranges, multi-model filtering (ViT Beans, CFP Faces, OpenAI GPT), and interactive tooltips on hover."
      },
      {
        "title": "Frictionless Model Onboarding & Scan Orchestration",
        "description": "Intuitive modal workflows allowing users to upload local models (.h5, .pt, .onnx) or link repositories securely, paired with flexible scan execution (own model, Mindgard hosted, CLI, or scheduled scans) targeting specific attack vectors (IP Theft, Prompt Injection, Jailbreak)."
      }
    ],
    "takeaways": "What went well: Rigorous competitive research (Sydelabs, Adversa, Robust Intelligence, Hiddenlayer) and in-depth interviews with 10 security engineers uncovered critical pain points that steered the product from passive log dumping to proactive, actionable risk management. What challenged us: Balancing the fast-paced AI security threat landscape with MVP delivery required close collaboration with engineering to de-scope secondary features and focus relentlessly on core risk overview, inventory, and 1-click remediation. The platform is currently deployed in enterprise Beta testing."
  },
  {
    "id": "03",
    "slug": "circulaops",
    "title": "Circula",
    "tagline": "Operations, Inventory & Impact Reporting for the Circular Economy",
    "category": "Operational Software",
    "categories": [
      "Circular Economy",
      "Enterprise SaaS",
      "Systems Design",
      "Data Visualisation"
    ],
    "services": "Product Strategy, Information Architecture, Interaction Design, Design System",
    "client": "Circula",
    "engagement": "Co-founder · Circula",
    "year": "2024–2025",
    "role": "Co-founder & Product Designer",
    "duration": "10 Months",
    "coverImage": "/images/work/circulaops/00-impact-report.png",
    "heroImage": "/images/work/circulaops/00-impact-report.png",
    "description": "Informed data and analytics for the circular economy. Circula gives recyclers and material processors one system for the whole loop — material in, operations, inventory, invoicing — and turns the record it produces into an environmental and social impact report.",
    "goal": "Give circular-economy businesses a single operating record for material, money and impact, so that reporting is a by-product of doing the work rather than a separate reconstruction after it.",
    "outcome": "Shipped a seven-module platform tracking six material streams from intake to sale, with multi-currency invoicing across four currencies and an impact report generated from the same operational data.",
    "principles": [
      {
        "title": "Weigh everything, in kilograms",
        "description": "Material is the unit the business actually runs on. Every screen — dashboard, operations, inventory, reports — measures in kilograms first, and money second, because that is the order operators think in."
      },
      {
        "title": "Waste is a first-class output",
        "description": "Recording an operation captures what was produced and what was wasted, side by side. A recovery rate is only credible if the loss was logged at the same moment as the gain, not estimated later."
      },
      {
        "title": "Impact is a read, not an entry",
        "description": "Nobody types their CO₂ figure in. Environmental and social impact are derived from operations already recorded, which is what makes the report defensible to a funder or a regulator."
      }
    ],
    "metrics": [
      {
        "label": "Material Streams Tracked",
        "value": "6"
      },
      {
        "label": "Invoicing Currencies",
        "value": "4"
      },
      {
        "label": "Operational Modules",
        "value": "7"
      }
    ],
    "overview": "Recycling and material-recovery businesses in emerging markets run on paper and memory. Material arrives from informal collectors, gets sorted and baled, and leaves as a sale — but the record of what came in, what was recovered, what was lost, and who was paid lives across notebooks, WhatsApp and a spreadsheet nobody trusts. The same businesses are then asked by funders, offtakers and regulators to prove environmental and social impact they have no reliable data to support. Circula was built to close that gap from the operational end.",
    "challenge": "The hard part was not building an inventory tool. It was that one physical material has to stay identifiable through a chain of transformations. A kilogram of mixed plastic arrives from a vendor, becomes part of a sorting operation, splits into recovered PET and residual waste, and only some of it becomes sellable stock against an invoice. Model that too loosely and the recovery rate is fiction; model it too strictly and a yard supervisor with a phone and no patience will simply not use it. Both failure modes end in the same place: a business that still cannot prove what it did.",
    "solution": "I anchored the whole system on a single object — the inventory record — and made every module a different view of its lifecycle. Material is logged in with vendor, material type, state, quantity and price. An operation consumes one or more inventory records and returns two numbers that must both be entered: quantity produced and waste produced, with a 'ready for sale' flag that promotes output into sellable stock. Inventory splits into raw materials, ready for sale and waste as tabs on one page rather than three separate screens. Invoices draw on the same records, in the currency the trade was actually done in. The impact report is a projection of everything above, expressed in the units its audience uses.",
    "designSystem": "A restrained system carrying a lot of density: white ground, near-black chrome, and a single green accent reserved for the brand and for positive movement. Material streams carry the only other colour in the product — six fixed hues used consistently across the distribution bar, the tables and the reports, so glass is the same colour everywhere it appears. Tables share one row anatomy and one set of status pills across operations, inventory, invoices and contacts.",
    "gallery": [
      "/images/work/circulaops/01-dashboard.png",
      "/images/work/circulaops/02-operations.png",
      "/images/work/circulaops/03-new-operation.png",
      "/images/work/circulaops/04-inventory.png",
      "/images/work/circulaops/05-inventory-in.png",
      "/images/work/circulaops/06-invoices.png",
      "/images/work/circulaops/07-contacts.png",
      "/images/work/circulaops/08-login.jpg"
    ],
    "features": [
      {
        "title": "Operations That Record Loss",
        "description": "Logging an operation asks for input information before it starts and output information after it finishes — quantity produced and waste produced as two required fields, with sub-operations like sorting tracked as ongoing until closed."
      },
      {
        "title": "Inventory in Three States",
        "description": "Raw materials, ready for sale and waste are tabs on one inventory page, so the same physical stock is legible at whatever stage it has reached without navigating to a different part of the product."
      },
      {
        "title": "Material Distribution at a Glance",
        "description": "Glass, paper and cardboard, plastics, metals, e-wastes and rubber share one fixed colour scale, shown as a single distribution bar on both operations and inventory so composition reads the same way in either context."
      },
      {
        "title": "Multi-Currency Invoicing",
        "description": "Balances are held per currency — naira, dollars, pounds, euros — with awaiting, overdue and paid counts against each, because these businesses buy locally in naira and sell to offtakers abroad."
      },
      {
        "title": "Impact Report as an Output",
        "description": "Materials recycled, recovery rate, CO₂ equivalent avoided, energy saved and landfill space avoided — each translated into a plain-language equivalent — alongside social impact: direct and indirect jobs created, and representation of women and youth."
      }
    ],
    "takeaways": "The insight that shaped the product was that impact reporting fails at the point of data entry, not at the point of reporting. Every organisation in this sector can produce a sustainability report; almost none can defend the numbers in it, because the numbers were reconstructed months later from records that were never designed to support them. Making waste a required field alongside output was the single most consequential decision in the system — it is mildly annoying at the moment of entry and it is the only reason the recovery rate downstream means anything. Designing for that trade-off, rather than for the report itself, is what I would carry into any measurement product."
  },
  {
    "id": "04",
    "slug": "voxxy-ai",
    "title": "Voxxy.ai",
    "tagline": "Conversational AI Speech Technology & Voice Modulation Interface",
    "category": "AI",
    "categories": [
      "AI",
      "Interface Design",
      "Interaction Design",
      "Voice AI"
    ],
    "services": "User Research, Interface Design, Interaction Design, Voice Modulation UX",
    "client": "Voxxy.ai",
    "year": "2023–2024",
    "role": "Lead Product Designer",
    "duration": "6 Months",
    "coverImage": "/images/work/voxxy-ai/00-voice-generator.png",
    "heroImage": "/images/work/voxxy-ai/00-voice-generator.png",
    "description": "Voxxy.ai is a voice-first AI application combining speech recognition, natural language processing (NLP), text-to-speech, and an AI voice modulation engine to deliver a conversational, highly customizable user experience.",
    "goal": "Build an intuitive multi-modal voice AI interface that makes complex auditory modulation and natural conversation feel instant and accessible.",
    "outcome": "Pioneered a real-time vocal feedback interface with under 200ms latency, achieving an 85% task completion rate on complex multi-turn commands.",
    "principles": [
      {
        "title": "Multimodal Redundancy",
        "description": "Always pair vocal inputs with crisp on-screen feedback so users never guess whether the AI heard or understood."
      },
      {
        "title": "Zero Acoustic Deadweight",
        "description": "Keep latency low through streaming speech-to-text tokenization and immediate UI status pulses."
      },
      {
        "title": "Human-Centric Soundscapes",
        "description": "Design acoustic parameters that mimic human inflection, cadence, and empathy."
      }
    ],
    "metrics": [
      {
        "label": "Response Latency",
        "value": "< 200ms"
      },
      {
        "label": "Task Success Rate",
        "value": "85%"
      },
      {
        "label": "User Adoption",
        "value": "45K+"
      }
    ],
    "overview": "Voice AI systems often fail because users feel disconnected from the black-box audio pipeline. Voxxy.ai bridges this gap by combining real-time spectral visualization with responsive conversation flows.",
    "challenge": "Designing a reliable experience for non-deterministic speech recognition where accents, audio jitter, and ambient noise create uncertainty.",
    "solution": "Built an interactive audio waveform HUD with real-time confidence scoring, instant rollback triggers, and customizable voice avatars.",
    "designSystem": "Dark-mode optimized UI with neon audio frequency indicators, fluid dynamic typography, and minimal cognitive load controls.",
    "figures": [
      {
        "src": "/images/work/voxxy-ai/00-user-flow.png",
        "title": "The flow behind four tools in one app",
        "caption": "Voice Command, Text-to-Speech, Speech-to-Text and Voice Changer are four different jobs, and the map is what kept them from becoming four different products. Each column converges on the same terminal step \u2014 select a voice, generate, act \u2014 so the interaction a user learns in one mode carries into the next. History, Files and Profile hang off the same root rather than being nested inside any single tool.",
        "wide": true
      }
    ],
    "gallery": [
      "/images/work/voxxy-ai/01-modes.png",
      "/images/work/voxxy-ai/02-voice-command.png",
      "/images/work/voxxy-ai/03-voice-generator.png",
      "/images/work/voxxy-ai/04-select-voice.png",
      "/images/work/voxxy-ai/05-speech-to-text.png",
      "/images/work/voxxy-ai/06-voice-changer.png"
    ],
    "features": [
      {
        "title": "Real-time Spectral Feedback",
        "description": "Live visualizer illustrating input frequency levels and AI synthesis confidence."
      },
      {
        "title": "Multi-turn Conversational Memory",
        "description": "Maintains task context across complex multi-branch requests without requiring repetitive trigger words."
      },
      {
        "title": "Dynamic Waveform Feedback",
        "description": "Immediate visual biofeedback communicating speech recognition accuracy and processing states."
      }
    ],
    "takeaways": "Voice interfaces succeed when they provide transparent visual feedback for auditory inputs. Blending sound and screen creates confidence in conversational AI."
  },
  {
    "id": "05",
    "slug": "eventspad",
    "title": "Eventspad",
    "tagline": "End-to-End Event, Guest & Secure Check-In Operating System",
    "category": "Event Technology",
    "categories": [
      "Event Technology",
      "SaaS Platform",
      "Systems Design",
      "Product Strategy"
    ],
    "services": "Product Strategy, Design System, UI/UX Design, Front-End Implementation",
    "client": "EventspadHQ Ltd",
    "year": "2026",
    "role": "Founder & Product Designer",
    "engagement": "Side project · Founded EventspadHQ Ltd",
    "duration": "4 Months",
    "liveUrl": "https://eventspad.com",
    "coverImage": "/images/work/eventspad/cover.png",
    "heroImage": "/images/work/eventspad/cover.png",
    "description": "Eventspad is an event operating system that carries organisers from the first invitation to the final check-in — guest lists, RSVPs, seating, secure QR passes, and sub-second door validation held in a single synchronised platform.",
    "goal": "Collapse the spreadsheet, printed card, and clipboard workflow into one system where every guest record, seat assignment, and QR pass stays in sync from invitation to door.",
    "outcome": "Shipped the full guest lifecycle: a three-step event wizard, a drag-and-drop 2D floor planner, three-channel invitations, an offline-capable door scanner, and an attendance funnel — priced per guest with no subscription.",
    "principles": [
      {
        "title": "One Guest Record, Everywhere",
        "description": "The guest is the single source of truth. RSVP status, table number, and QR pass all read from one record, so the scanner at the door can never disagree with the seating chart."
      },
      {
        "title": "Design for the Door",
        "description": "The highest-stakes three seconds of any event is the scan. The validator resolves to one of three unambiguous colour-coded states — granted, already used, not valid — legible at arm's length in low light."
      },
      {
        "title": "Pay for Guests, Not Software",
        "description": "Pricing follows the real unit of value. A credit per guest pass means a once-a-year wedding host is never billed like a monthly enterprise seat."
      }
    ],
    "metrics": [
      {
        "label": "Door Verification",
        "value": "< 1s"
      },
      {
        "label": "Event Setup",
        "value": "3 Steps"
      },
      {
        "label": "Cost Per Guest Pass",
        "value": "$0.10"
      },
      {
        "label": "Offline Check-In",
        "value": "100%"
      }
    ],
    "overview": "Most event tools stop at the invitation. Eventspad was built to own the entire lifecycle — creation, invitation, RSVP, seating, ticketing, check-in, and post-event insight — as one connected system rather than six disconnected ones. I led product direction and design across the web application, the marketing site, and the Validator scanner, working alongside engineering to define the data model, the flows, and the interface language that hold them together.",
    "challenge": "The same five failures recur at every wedding, conference, and church programme: guests forget their invitations, hosts lose track of RSVPs across WhatsApp threads, entrances queue while ushers scan paper lists by eye, forged or forwarded passes let uninvited guests through, and once the lights go up nobody knows who actually attended. Each existing tool solved one of these and handed the rest back to a spreadsheet.",
    "solution": "We modelled the platform around the guest rather than the event. A three-step wizard — event details, then seating, tickets and RSVP, then guests and invitations — gets an organiser to a live event page in minutes, with seating skippable for events that do not need it. Guest lists import from CSV through a column-matching step that reconciles whatever headers a spreadsheet arrives with. Invitations go out over WhatsApp, SMS, or email to a browser-based RSVP that requires no download. Confirmed guests receive a unique QR pass carrying their assigned table, and the door team verifies it in under a second — offline if the venue Wi-Fi fails, syncing when it returns.",
    "designSystem": "A violet-on-ink accent system built on Radix primitives and Tailwind, set in Geist Sans with Geist Mono reserved for operational readouts — table counts, scan latency, credit balances. Colour is spent almost entirely on state: violet for action, and a green/amber/red triad held back exclusively for the three check-in outcomes so a scan result reads correctly at a glance without being parsed.",
    "gallery": [
      "/images/work/eventspad/02-seating-floorplan.png",
      "/images/work/eventspad/01-event-overview.png",
      "/images/work/eventspad/03-guest-management.png",
      "/images/work/eventspad/04-seating-list.png",
      "/images/work/eventspad/05-ticket-designer.png",
      "/images/work/eventspad/06-notifications.png",
      "/images/work/eventspad/07-check-in.png",
      "/images/work/eventspad/08-analytics-dashboard.png",
      "/images/work/eventspad/09-events-list.png",
      "/images/work/eventspad/10-create-wizard.png"
    ],
    "features": [
      {
        "title": "Drag-and-Drop 2D Floor Planner",
        "description": "Round, long, stage, and block objects positioned on a zoom-and-pan canvas with smart-guide snapping and fit-to-view, backed by a list view and a dedicated mobile layout for planning on site."
      },
      {
        "title": "Live Ticket-to-Seat Sync",
        "description": "Reassigning a guest updates the table number printed on their digital pass and shown on the usher's scanner screen, removing the class of error where the chart and the door hold different truths."
      },
      {
        "title": "Offline-First Door Validation",
        "description": "A browser scanner and a dedicated Validator app resolve every pass to entry granted, already checked in, or not valid — queueing scans through patchy signal and syncing automatically, with unlimited usher logins on one shared list."
      },
      {
        "title": "Three-Channel Invitations",
        "description": "WhatsApp, SMS, and email composers share one recipient selector and one guest database, so a reminder to non-responders is a filter rather than a rebuilt list."
      },
      {
        "title": "Attendance Funnel Analytics",
        "description": "Invited, RSVP'd, confirmed, and checked-in tracked as a single funnel with attendance rate, per event or across a planner's whole portfolio, closed out by post-event reviews."
      }
    ],
    "roadmap": [
      "Native Validator app releases on the App Store and Google Play",
      "Multi-gate access control with per-entrance usher assignment and live gate throughput",
      "Recurring-event templates that carry guest segments and seating layouts forward"
    ],
    "takeaways": "Owning the whole lifecycle is what makes the individual features work. Seating is only trustworthy because the pass reads from the same record; analytics are only honest because the door writes back to it. The harder design problem was not any single screen but keeping one guest record coherent across an organiser's laptop, a guest's browser, and an usher's phone on a venue's failing Wi-Fi."
  },
  {
    "id": "06",
    "slug": "spotfinance",
    "title": "Spot Finance",
    "tagline": "Investing, Saving and Paying in One Consumer Fintech App",
    "category": "Fintech",
    "categories": [
      "Fintech",
      "Mobile UX",
      "Design System",
      "UX Research"
    ],
    "services": "User Research, Wireframing, UI Design, Prototyping, User Testing",
    "client": "Spot Finance",
    "year": "2023",
    "role": "Senior Product Designer",
    "duration": "5 Months",
    "coverImage": "/images/work/spotfinance/00-invest.png",
    "heroImage": "/images/work/spotfinance/00-invest.png",
    "description": "Spot Finance puts fractional stock investing, automated savings and everyday payments in one app, for people who want to start investing without first learning the language of investing.",
    "goal": "Let someone move between spending, saving and investing without feeling they have crossed into a different, more intimidating product.",
    "outcome": "Shipped to a 4.9★ App Store rating across 120,000+ active users, built on a documented component library with full light and dark parity.",
    "principles": [
      {
        "title": "One account, three behaviours",
        "description": "Home, Invest, Savings and Profile sit on a single tab bar with one balance behind them. Moving money between them is a transfer, not a migration into another product."
      },
      {
        "title": "Recognition before research",
        "description": "The Discover grid leads with logos people already know — Dell, Canon, McDonald's, Amazon, Netflix — because a first-time investor searches for brands, not tickers."
      },
      {
        "title": "Security that stays out of the way",
        "description": "Two-factor and biometric authentication guard the account and the transaction, not every screen in between, so protection is felt at the two moments it matters."
      }
    ],
    "metrics": [
      {
        "label": "App Store Rating",
        "value": "4.9 ★"
      },
      {
        "label": "Active User Base",
        "value": "120K+"
      },
      {
        "label": "Research & Testing",
        "value": "15 Days"
      }
    ],
    "overview": "Most people who want to start investing are not short of options — they are short of confidence. They already have a banking app, and the investing app they are told to download speaks a different language: tickers, spreads, order types. Spot Finance was built for the two people we designed against, Alex and Emma, both in their twenties, both financially capable, neither an investor yet. The product question was not how to add investing to a wallet. It was how to make investing feel like the same app as the wallet.",
    "challenge": "Consolidation is easy to say and hard to design. Payments, savings and investing have genuinely different rhythms — a payment is instant and forgettable, a savings deposit is periodic and passive, an investment is deliberate and carries loss. Put them behind one tab bar carelessly and you either flatten investing into something that feels trivially safe, or you drag the anxiety of a brokerage account onto the screen where someone pays for lunch. The interface had to hold both without lying about either.",
    "solution": "I ran research and usability testing around two personas, then mapped the whole product as a single flow before designing a screen: one authenticated entry point branching into Home, Savings, Invest, Scan-to-pay and Profile, with the same PIN and biometric gate on every action that moves money. Investing was made approachable by leading with recognisable brands and interactive charts rather than market data, and by keeping the buy path to the same number of steps as a transfer. Everything was assembled from a documented component library — inputs, buttons, selection controls and the tab bar, each with its states drawn in both themes.",
    "designSystem": "A dark-first system with a single violet accent, built as components and variants rather than screens: text fields in four states, buttons in three sizes across enabled and disabled, checkboxes, radios and toggles, and the tab bar in light and dark. Light mode uses neutral tones for a clean, professional read; dark mode uses subdued colour to reduce eye strain. Colour is reserved for the accent, for gain and loss, and for nothing else.",
    "figures": [
      {
        "src": "/images/work/spotfinance/01-personas.png",
        "title": "Two people, one product",
        "caption": "Alex, 28, a software developer who values simplicity, and Emma, 25, a marketing executive who prioritises efficiency and aesthetics. Both want to invest; neither wants to learn a trading terminal to do it. Every subsequent decision was argued against these two.",
        "wide": true
      },
      {
        "src": "/images/work/spotfinance/02-user-flow.png",
        "title": "Mapped as one product, not three",
        "caption": "A single authenticated entry — PIN or Face ID — branching into Profile, Savings, Home, Invest and Scan-to-pay. Drawing it this way made the shared spine obvious: every branch reaches the same balance, and every money-moving action passes the same gate.",
        "wide": true
      },
      {
        "src": "/images/work/spotfinance/03-components.png",
        "title": "Components and variants, both themes",
        "caption": "Inputs across four states, buttons across three sizes and two states, selection controls, and the tab bar drawn in light and dark. Building the states before the screens is what made light and dark parity a property of the system rather than a second design pass."
      },
      {
        "src": "/images/work/spotfinance/04-considerations.png",
        "title": "The decisions behind the surface",
        "caption": "Colour, typography and iconography set against the three product requirements they had to serve: navigation simple enough for a first-time investor, security strong enough for a financial account, and charts interactive enough to be worth looking at."
      }
    ],
    "gallery": [
      "/images/work/spotfinance/hero-in-hand.png",
      "/images/work/spotfinance/05.png",
      "/images/work/spotfinance/06.png",
      "/images/work/spotfinance/09.png",
      "/images/work/spotfinance/10.png",
      "/images/work/spotfinance/11.png",
      "/images/work/spotfinance/12.png",
      "/images/work/spotfinance/13.png"
    ],
    "features": [
      {
        "title": "Fractional Investing by Recognition",
        "description": "The Discover grid leads with brands rather than tickers, filtered by Recent, Popular, Watchlist and Latest, so a first-time investor starts from something they already have an opinion about."
      },
      {
        "title": "Interactive Stock Detail",
        "description": "Each holding opens to Overview, Financials and News with a chart across 1D to 5Y, and a watchlist action beside the buy action so following is a lower-commitment first step than owning."
      },
      {
        "title": "Automated Savings",
        "description": "Savings sits on the same tab bar and the same balance as spending, with top-up and withdrawal as ordinary transfers rather than a separate product with its own account."
      },
      {
        "title": "Scan-to-Pay",
        "description": "QR payment is a first-class branch of the flow rather than a feature buried in a menu, because in-person payment is the behaviour that brings someone back to the app daily."
      },
      {
        "title": "Two-Factor and Biometric Auth",
        "description": "Authentication guards the session and each money-moving action, with biometrics as the fast path — the same two-checkpoint pattern rather than security friction spread across the whole product."
      }
    ],
    "takeaways": "Designing three financial behaviours into one app taught me that consolidation is mostly a hierarchy problem, not a feature problem. The temptation is to give each capability its own home and let navigation stitch them together; what actually made the product feel like one thing was a single balance and a single authentication model behind all of it. Building the component library before the screens was the other decision that paid off — light and dark parity stopped being a design task and became a property of the system."
  }
];

