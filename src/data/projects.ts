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
      "/images/work/omits/05-onboarding.png",
      "/images/work/omits/06-convert.png",
      "/images/work/omits/07-wallet-analytics.png",
      "/images/work/omits/08-light-dark.png"
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
    "featured": true,
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
    "coverImage": "/images/work/eventspad/01-event-overview.png",
    "heroImage": "/images/work/eventspad/02-seating-floorplan.png",
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
    "id": "04",
    "slug": "circulaops",
    "title": "CirculaOps",
    "tagline": "Enterprise AI Circular Supply Chain & Operational Telemetry Platform",
    "category": "Operational AI",
    "categories": [
      "Operational AI",
      "Enterprise SaaS",
      "Systems Design",
      "Data Visualization"
    ],
    "services": "User Research, Design Leadership, Product Strategy, Systems Architecture",
    "client": "CirculaOps",
    "year": "2024–2025",
    "role": "Co-founder & Product Designer",
    "engagement": "Co-founder · CirculaOps",
    "duration": "10 Months",
    "coverImage": "/images/work/circulaops/08.png",
    "heroImage": "/images/work/circulaops/02.png",
    "description": "CirculaOps orchestrates complex circular supply chains, material traceability, and ESG regulatory compliance across collection networks, sorting centers, and processing plants.",
    "goal": "Unify fragmented weighbridge IoT telemetry, sorting operations, and international ESG chain-of-custody compliance into a single operational cockpit.",
    "outcome": "Increased operational throughput by +42%, slashed compliance audit preparation by 70%, and achieved 98% plant floor adoption across processing centers.",
    "principles": [
      {
        "title": "Rugged Ergonomics",
        "description": "High-contrast touch targets optimized for high-dust, high-speed tablet environments with intermittent connectivity."
      },
      {
        "title": "Disciplined Color States",
        "description": "Reserve color exclusively for operational severity (Normal, Warning, Critical) to eliminate visual fatigue across 12-hour shifts."
      },
      {
        "title": "Audit-Ready Transparency",
        "description": "Immutable material chain-of-custody graphs exportable with 1 click for global environmental compliance directives."
      }
    ],
    "metrics": [
      {
        "label": "Operational Throughput",
        "value": "+42%"
      },
      {
        "label": "Compliance Audit Time",
        "value": "-70%"
      },
      {
        "label": "Plant Floor Adoption",
        "value": "98%"
      }
    ],
    "overview": "Managing circular economy supply chains requires tracking millions of material assets across fragmented processing facilities, remote weighbridges, and stringent international environmental compliance standards. CirculaOps unifies operational telemetry, IoT weight verification, and chain-of-custody data into an actionable digital cockpit.",
    "challenge": "Plant floor operators work in fast-paced, high-dust environments with intermittent connectivity, while global enterprise buyers and compliance auditors need immutable, audit-ready data. The platform had to bridge the divide between rugged physical data capture and high-level executive analytics.",
    "solution": "Architected a multi-tiered design system featuring high-contrast operational modes for plant floor tablets, rapid barcode/weighbridge data ingestion, automated anomaly detection alerts, and one-click ESG regulatory reporting.",
    "designSystem": "Strictly disciplined color tokens where color is reserved exclusively for operational states (Normal, Warning, Critical) to prevent visual fatigue in high-density data environments.",
    "gallery": [
      "/images/work/circulaops/08.png",
      "/images/work/circulaops/02.png",
      "/images/work/circulaops/07.png",
      "/images/work/circulaops/06.png",
      "/images/work/circulaops/03.png",
      "/images/work/circulaops/04.png",
      "/images/work/circulaops/05.png",
      "/images/work/circulaops/09.png",
      "/images/work/circulaops/10.png"
    ],
    "features": [
      {
        "title": "Material Traceability Graph",
        "description": "Interactive node graph visualizing asset movements, bottleneck choke points, and custody handoffs in real-time."
      },
      {
        "title": "Predictive Equipment Diagnostics",
        "description": "Machine learning models predicting sorting line downtime and maintenance intervals before failures occur."
      },
      {
        "title": "Automated Regulatory Audits",
        "description": "Instant export of certified chain-of-custody documentation compliant with international environmental directives."
      }
    ],
    "takeaways": "Designing enterprise systems for physical operations requires spending time on the ground with operators. True simplicity in high-stakes environments eliminates error rates and saves millions in operational waste."
  },
  {
    "id": "05",
    "slug": "voxaid",
    "title": "VoxAid",
    "tagline": "Conversational AI Speech Technology & Voice Modulation Interface",
    "category": "AI & Healthcare",
    "categories": [
      "AI & Healthcare",
      "Interface Design",
      "Interaction Design",
      "Voice AI"
    ],
    "services": "User Research, Interface Design, Interaction Design, Voice Modulation UX",
    "client": "VoxAid AI Labs",
    "year": "2023–2024",
    "role": "Lead Product Designer",
    "duration": "6 Months",
    "coverImage": "/images/work/voxaid/10.png",
    "heroImage": "/images/work/voxaid/hero-mockup.png",
    "description": "VoxAid is a voice-first AI application combining speech recognition, natural language processing (NLP), text-to-speech, and an AI voice modulation engine to deliver a conversational, highly customizable user experience.",
    "goal": "Transform voice into a primary, emotionally expressive productivity interface with low-latency synthetic modulation.",
    "outcome": "Designed and shipped 60+ screen mobile app ecosystem with sub-250ms latency and 20+ customizable vocal identity profiles.",
    "principles": [
      {
        "title": "Multi-Sensory Audio Biofeedback",
        "description": "Real-time organic waveform animations communicate model processing states and speech recognition accuracy."
      },
      {
        "title": "Continuous Conversational Context",
        "description": "Maintain conversational state across complex multi-branch requests without requiring repeated trigger phrases."
      },
      {
        "title": "Tactile Voice Control",
        "description": "Seamlessly blend voice-first inputs with precise touch sliders and context chips for swift audio modulation."
      }
    ],
    "metrics": [
      {
        "label": "Task Execution Latency",
        "value": "< 250ms"
      },
      {
        "label": "User Engagement",
        "value": "+85%"
      }
    ],
    "overview": "Most voice assistants rely on rigid command structures and generic voices, creating friction in nuanced tasks and limiting emotional connection. VoxAid transforms voice into a primary productivity interface by introducing expressive, customizable voice modulation.",
    "challenge": "Traditional voice assistants fail to maintain context across multi-step commands and lack personalized vocal identity, making hands-free productivity feel sterile and frustrating.",
    "solution": "Designed an intuitive audio canvas with real-time waveform feedback, dynamic voice changer sliders, context-aware command chips, and seamless switching between voice-first and touch modes.",
    "designSystem": "Fluid organic waveform particle states paired with calming, tactile controls and high-contrast accessibility themes.",
    "gallery": [
      "/images/work/voxaid/10.png",
      "/images/work/voxaid/hero-mockup.png",
      "/images/work/voxaid/04.png",
      "/images/work/voxaid/02.png",
      "/images/work/voxaid/03.png",
      "/images/work/voxaid/05.png",
      "/images/work/voxaid/06.png",
      "/images/work/voxaid/07.png",
      "/images/work/voxaid/08.png",
      "/images/work/voxaid/09.png"
    ],
    "features": [
      {
        "title": "AI Voice Modulation Engine",
        "description": "Real-time tone, pitch, and resonance personalization for synthetic assistant voices and user speech."
      },
      {
        "title": "Multi-Step Conversational Memory",
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
    "id": "06",
    "slug": "spotfinance",
    "title": "Spot Finance",
    "tagline": "Comprehensive Mobile Fintech App for Savings, Investments & Payments",
    "category": "Fintech",
    "categories": [
      "Fintech",
      "Mobile UX",
      "Interface Design",
      "Design System"
    ],
    "services": "User Research, Interface Design, User Flows, Dark & Light Mode UX",
    "client": "Spot Finance App",
    "year": "2023",
    "role": "Senior Product Designer",
    "duration": "5 Months",
    "coverImage": "/images/work/spotfinance/13.png",
    "heroImage": "/images/work/spotfinance/hero-in-hand.png",
    "description": "Spot Finance is a unified fintech mobile application integrating stock investments, automated savings vaults, peer-to-peer transfers, and QR code merchant payments into a single intuitive interface.",
    "goal": "Consolidate fragmented banking, fractional stock investing, automated round-up savings, and P2P payments into a unified consumer app.",
    "outcome": "Achieved a 4.9★ rating across 120,000+ active users with 99.8% transaction success and seamless dark/light mode parity.",
    "principles": [
      {
        "title": "Progressive Financial Disclosure",
        "description": "Present high-level portfolio summaries cleanly, allowing users to drill down into dense candlestick charts on demand."
      },
      {
        "title": "Micro-Haptic Confirmation",
        "description": "Reinforce critical financial actions with tactile feedback and multi-factor biometric approvals."
      },
      {
        "title": "Adaptive Dual-Theme Engine",
        "description": "Curate bespoke contrast ratios for high-sunlight outdoor payments and low-light evening portfolio monitoring."
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
        "label": "Transaction Success",
        "value": "99.8%"
      }
    ],
    "overview": "In today's dynamic financial landscape, individuals struggle with fragmented apps for banking, stock trading, and savings. Spot Finance consolidates these services into a holistic, secure mobile experience tailored for both casual savers and active investors.",
    "challenge": "Combining high-frequency payment features with dense stock portfolio charts without cluttering navigation or intimidating everyday users.",
    "solution": "Designed modular financial cards with progressive disclosure, customizable dashboard widgets, biometric payment approvals, and a native dark/light mode engine.",
    "designSystem": "Sophisticated typography, high-contrast currency counters, micro-haptic transaction feedback, and vibrant portfolio gain/loss indicators.",
    "gallery": [
      "/images/work/spotfinance/13.png",
      "/images/work/spotfinance/hero-in-hand.png",
      "/images/work/spotfinance/08.png",
      "/images/work/spotfinance/01.png",
      "/images/work/spotfinance/03.png",
      "/images/work/spotfinance/04.png",
      "/images/work/spotfinance/05.png",
      "/images/work/spotfinance/06.png",
      "/images/work/spotfinance/07.png",
      "/images/work/spotfinance/09.png",
      "/images/work/spotfinance/10.png",
      "/images/work/spotfinance/11.png",
      "/images/work/spotfinance/12.png"
    ],
    "features": [
      {
        "title": "Stock Investments & Fractional Shares",
        "description": "Zero-commission real-time trading with candlestick charting and instant portfolio rebalancing."
      },
      {
        "title": "Automated Round-Up Savings",
        "description": "Spare-change round-up vaults with goal tracking and yield-bearing interest accounts."
      },
      {
        "title": "QR Code & P2P Instant Payments",
        "description": "Contactless merchant checkout and immediate peer transfers via phone numbers or username tags."
      }
    ],
    "takeaways": "Balancing density with simplicity is the hallmark of great fintech design. When complex portfolio charts feel effortless to explore, users gain agency over their financial future."
  },
  {
    "id": "07",
    "slug": "yourparkingspace",
    "title": "YourParkingSpace",
    "tagline": "Event Parking & Smart Mobility Experience for the UK & Ireland Market",
    "category": "Mobility",
    "categories": [
      "Mobility & Travel",
      "Design Research",
      "Interface Design",
      "Conversion"
    ],
    "services": "Design Research, Interface & Experience Design, Event Parking Integration",
    "client": "YourParkingSpace UK",
    "year": "2022–2023",
    "role": "Lead UX/UI Designer",
    "duration": "8 Months",
    "coverImage": "/images/work/yourparkingspace/hero-mockup.png",
    "heroImage": "/images/work/yourparkingspace/07.png",
    "description": "YourParkingSpace is the UK's leading online parking marketplace and operator. We designed dedicated event parking flows catering to millions of drivers attending stadium concerts, sports matches, and festivals.",
    "goal": "Eliminate pre-event parking anxiety, provide guaranteed venue-centric reservations, and reduce checkout drop-off.",
    "outcome": "Boosted event booking conversion by +34%, decreased checkout abandonment by 22%, and scaled to 1.5M+ annual drivers.",
    "principles": [
      {
        "title": "Venue-Centric Proximity",
        "description": "Anchor search results around stadium gates and precise walking duration rather than generic city center pins."
      },
      {
        "title": "Time-Sensitive Clarity",
        "description": "Clearly communicate event start times, road closure zones, and egress bottlenecks so drivers make informed choices."
      },
      {
        "title": "1-Tap Gate Pass Delivery",
        "description": "Streamline checkout into a single click with instant Apple Wallet barcode pass delivery and turn-by-turn routing."
      }
    ],
    "metrics": [
      {
        "label": "Event Booking Conversion",
        "value": "+34%"
      },
      {
        "label": "Checkout Abandonment",
        "value": "-22%"
      },
      {
        "label": "Annual Drivers Served",
        "value": "1.5M+"
      }
    ],
    "overview": "Drivers attending major stadium events and concerts face extreme parking anxiety, dynamic congestion pricing, and unclear walking distances. YourParkingSpace integrated dedicated event discovery and pre-booking into its core platform.",
    "challenge": "Event attendees need guaranteed parking spots close to venues with clear walking routes, but previous search flows were generic and failed to highlight event start times, road closures, or EV charging.",
    "solution": "Conducted extensive surveys, user interviews, and usability testing to design venue-centric parking maps, real-time walking distance estimates, guaranteed space reservations, and 1-tap express checkout.",
    "designSystem": "High-contrast outdoor-friendly UI palette optimized for mobile sunlight visibility, prominent venue landmark pins, and instant Apple Wallet gate pass integration.",
    "gallery": [
      "/images/work/yourparkingspace/hero-mockup.png",
      "/images/work/yourparkingspace/07.png",
      "/images/work/yourparkingspace/10.png",
      "/images/work/yourparkingspace/02.png",
      "/images/work/yourparkingspace/03.png",
      "/images/work/yourparkingspace/04.png",
      "/images/work/yourparkingspace/05.png",
      "/images/work/yourparkingspace/06.png",
      "/images/work/yourparkingspace/08.png",
      "/images/work/yourparkingspace/09.png",
      "/images/work/yourparkingspace/11.png"
    ],
    "features": [
      {
        "title": "Venue-Centric Event Search",
        "description": "Filtered parking spaces by proximity to stadium entry gates, walking distance, and post-event egress speed."
      },
      {
        "title": "ANPR Plate Recognition & Express Checkout",
        "description": "Seamless single-click reservations with automatic number plate synchronization."
      },
      {
        "title": "Digital Wallet Gate Passes",
        "description": "Instant barcode and Apple Wallet pass delivery with live turn-by-turn navigation deep links."
      }
    ],
    "takeaways": "Eliminating friction for time-sensitive, high-anxiety journeys requires anticipating physical real-world constraints like road closures and post-match stadium traffic."
  },
  {
    "id": "08",
    "slug": "omits-admin",
    "title": "Omits Admin Portal",
    "tagline": "Back-Office Console for Cross-Border Transaction Operations & Compliance",
    "category": "Fintech Operations",
    "categories": [
      "Fintech",
      "Enterprise Tools",
      "Systems Design",
      "Design Systems"
    ],
    "services": "Product Strategy, Information Architecture, Interaction Design, Design System",
    "client": "Omits Technology Limited",
    "engagement": "Full-time · Omits Technology Limited",
    "year": "2025–2026",
    "role": "Product Lead & Product Designer",
    "duration": "5 Months",
    "coverImage": "/images/work/omits-admin/02-transactions.png",
    "heroImage": "/images/work/omits-admin/01-transaction-detail.png",
    "description": "The internal console Omits staff use to investigate cross-border transactions, verify customers, adjust FX rates and approve one another's actions — designed so that no single person can move money alone.",
    "goal": "Give operations, compliance and support one console for the money, with every sensitive action gated behind a second signature and written to an audit trail.",
    "outcome": "Shipped a thirteen-module back-office built on a granular permission model, a maker-checker approval queue, and a transaction timeline that shows where money actually is rather than only its final status.",
    "principles": [
      {
        "title": "Show the journey, not the verdict",
        "description": "\"Pending\" tells an agent nothing they can act on. Every transaction renders as a timeline — initiated, screened, risk cleared, credited — so the next question is always obvious."
      },
      {
        "title": "No single pair of hands",
        "description": "Anything that moves money or unlocks an account is a request, not an action. One person raises it, another approves it, and both are recorded."
      },
      {
        "title": "Permission is part of the layout",
        "description": "Roles are modelled at the level of the individual action, so the interface a support agent sees is genuinely a different product from the one a finance approver sees."
      }
    ],
    "metrics": [
      {
        "label": "Operational Modules",
        "value": "13"
      },
      {
        "label": "Granular Permissions",
        "value": "~50"
      },
      {
        "label": "Sensitive Actions Gated",
        "value": "2-of-2"
      }
    ],
    "overview": "Omits moves money between the UK, Nigeria, Ghana and Kenya. Everything a customer does on the mobile app eventually lands on a member of staff — a stalled payout, a KYC document that needs a human decision, a rate that has to be corrected before the next batch. Before this console, that work happened across database queries, spreadsheets and messages. I led design for the internal product that replaced it, working from the operations team's actual escalation paths rather than from a feature list.",
    "challenge": "Back-office tools in regulated finance carry a specific tension: the people using them need to move quickly, and the regulator needs them to be unable to move alone. An agent chasing a stuck transfer wants one screen with the whole story. A compliance officer needs the same screen to prove, months later, exactly who did what and on whose authority. Designing for speed usually means fewer steps; designing for auditability usually means more. Both requirements are non-negotiable, and the console had to hold them at once.",
    "solution": "The console is organised around the objects staff actually escalate — a transaction, a customer, a rate, a request — rather than around the teams that own them. Transactions open into a summary, a full detail record and a timeline that shows every stage the money passed through. Customers open into a tabbed record covering wallets, transaction history, compliance documents, security events and their own audit log. Sensitive actions do not execute inline: they create a request that lands in an authorisation queue for a second, differently-permissioned admin to approve or decline, with the reason captured on both sides.",
    "designSystem": "A deliberately quiet system: white ground, near-black chrome, and colour reserved almost entirely for state — green for completed, amber for pending, red for failed or blocked. Every table shares one row anatomy, one status pill and one empty state, so an agent moving between transactions, users and requests is reading the same grammar. Dense by intent: these are screens people work in for a full shift, not screens they visit.",
    "gallery": [
      "/images/work/omits-admin/01-transaction-detail.png",
      "/images/work/omits-admin/02-transactions.png",
      "/images/work/omits-admin/03-overview.png",
      "/images/work/omits-admin/04-user-management.png",
      "/images/work/omits-admin/05-user-detail.png",
      "/images/work/omits-admin/06-roles.png",
      "/images/work/omits-admin/07-login.png"
    ],
    "features": [
      {
        "title": "Transaction Timeline",
        "description": "Each transfer renders as the sequence it actually passed through — deposit initiated, compliance scan, flag raised, risk cleared, wallet credited — so an agent can see where a payment stopped instead of inferring it from a status word."
      },
      {
        "title": "Maker-Checker Authorisation Queue",
        "description": "Refunds, cancellations, wallet adjustments, credential resets and role changes are raised as requests with a stated reason, then approved or declined by a second admin from a shared queue split into all requests and the ones assigned to you."
      },
      {
        "title": "Action-Level Permission Model",
        "description": "Roles are composed from roughly fifty discrete permissions — transactions:refund, compliance:review, wallets:adjust — so a Support Agent, a Compliance Reviewer and a Finance Approver each see a genuinely different console."
      },
      {
        "title": "Tabbed Customer Record",
        "description": "One customer, eight views: profile, wallet accounts, transactions, compliance documents, referrals, security events, support tickets and their audit log — so an investigation never requires leaving the person you are investigating."
      },
      {
        "title": "Audit Trail at Three Levels",
        "description": "Actions are written to a global log, to the acting admin's own record, and to the affected customer's record, so the same event can be reconstructed from whichever direction a question arrives."
      }
    ],
    "takeaways": "Designing for auditability changed how I think about confirmation. In consumer products a confirmation step is friction to be minimised; here the second pair of eyes is the product, and the design problem is making a deliberately slow path feel purposeful rather than obstructive. Framing sensitive actions as requests with a stated reason — rather than as buttons with a warning dialog — turned a compliance requirement into something the operations team could actually use to hand work to each other."
  }
];
