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
  gallery: string[];
  features: { title: string; description: string }[];
  roadmap?: string[];
  takeaways: string;
}

export const projects: Project[] = [
  {
    "id": "01",
    "slug": "omits",
    "featured": true,
    "title": "Omits Finance",
    "tagline": "Cross-Border Money Transfer & Multi-Currency Wallet for the UK–Africa Corridor",
    "category": "Fintech",
    "categories": [
      "Fintech",
      "Mobile UX",
      "Design System",
      "UX Research"
    ],
    "services": "UX Research, Design System, UI/UX Design, Cross-Platform Strategy",
    "client": "Omits Technology Limited",
    "year": "2025–2026",
    "role": "Product Lead & Product Designer",
    "engagement": "Full-time · Omits Technology Limited",
    "duration": "12 Months",
    "coverImage": "/images/work/omits/02.png",
    "heroImage": "/images/work/omits/05.png",
    "description": "The iOS and Android app people use to send money from the UK to Nigeria, Ghana and Kenya — multi-currency wallets, a five-step guarded send flow, and in-app conversion at a rate you lock before you commit.",
    "goal": "Remove the two things that stop people completing a transfer — not trusting the rate they were quoted, and not knowing whether the money arrived — without loosening the security a regulated payments app has to carry.",
    "outcome": "Shipped a multi-currency wallet and send flow across iOS and Android, with rate confirmation before commit, biometric and PIN-guarded authorisation, and progressive KYC that defers verification until the moment it is actually required.",
    "principles": [
      {
        "title": "Show the rate before the commitment",
        "description": "The review screen states the exact rate, fee and amount the recipient receives before the PIN step. Nothing changes after you authorise — the anxiety in remittance is not the price, it is the suspicion that the price will move."
      },
      {
        "title": "Ask for identity when it is needed, not at the door",
        "description": "Onboarding gets you to a working account first. Verification, transaction PIN and biometrics are introduced at the points they become necessary, rather than as a wall between signup and the product."
      },
      {
        "title": "Security you feel once, not every time",
        "description": "Biometric unlock and a transaction PIN sit at the two moments that matter — opening the app and authorising money — so the rest of the experience carries no security tax."
      }
    ],
    "metrics": [
      {
        "label": "Repeat Transfer Time",
        "value": "< 60s"
      },
      {
        "label": "Unassisted First Transfer",
        "value": "94%"
      },
      {
        "label": "Send Flow",
        "value": "5 Steps"
      }
    ],
    "overview": "Sending money home is a high-stakes, low-trust transaction. The sender is usually paying for something specific at the other end — school fees, rent, a medical bill — and the cost of the transfer going wrong is not inconvenience, it is a missed obligation. I led design on the mobile app across iOS and Android, working with engineering, compliance and risk to take the product from an existing codebase to a flow people would complete without calling support.",
    "challenge": "Two problems sat on top of each other. Senders did not trust quoted rates, because in this category the number you are shown and the number you are charged often differ — so people screenshot the quote before confirming. And regulated onboarding wants full identity verification up front, which is precisely the point at which a first-time user has been given no reason to hand over a passport. Solving either one carelessly makes the other worse: reassurance costs steps, and removing steps costs compliance.",
    "solution": "The send flow was rebuilt as five explicit steps — choose recipient, enter details, review, authorise with PIN, see the outcome — with the review step carrying the full breakdown and the recipient\u2019s exact receiving amount. Recipients can be reached either by Omits username or by bank account, so the common case of sending to someone already on the platform skips account-number entry entirely. Onboarding defers verification: an account works first, identity checks arrive when a limit or a payout requires them, and the transaction PIN and biometric unlock are introduced at their moment of use. Conversion between held currencies is its own flow rather than a hidden step inside sending.",
    "designSystem": "A card-based system with one consistent hierarchy: what you are doing at the top, the number that matters in the largest type on the screen, and the irreversible action last. Success, pending and failure states are designed as full screens rather than toasts, because in a payments app the outcome of a transfer is the most important thing the product ever tells you.",
    "gallery": [
      "/images/work/omits/02.png",
      "/images/work/omits/05.png",
      "/images/work/omits/03.png",
      "/images/work/omits/04.png",
      "/images/work/omits/06.png"
    ],
    "features": [
      {
        "title": "Guarded Five-Step Send Flow",
        "description": "Recipient, details, review, PIN, outcome. The review step is the contract — rate, fee and exact receiving amount — and nothing after it changes the numbers. Success and failure are full screens, each with a clear next action."
      },
      {
        "title": "Send by Username or Bank Account",
        "description": "Transfers to someone already on Omits resolve by username, skipping account numbers and sort codes entirely; transfers out use the bank flow. The two paths converge on the same review screen so the confirmation is always identical."
      },
      {
        "title": "Multi-Currency Wallets & In-App Conversion",
        "description": "Users hold balances in several currencies and convert between them as a first-class flow with its own rate screen, rather than as a hidden step buried inside a transfer."
      },
      {
        "title": "Deferred Identity Verification",
        "description": "Signup, phone verification and profile come first; address, identity documents, transaction PIN and biometrics are introduced at the point each becomes necessary — so a new user reaches a working account before being asked for a passport."
      },
      {
        "title": "PIN and Biometric Authorisation",
        "description": "A device lock screen on re-entry and a transaction PIN at the moment of authorisation, with biometrics offered as the fast path for both — two checkpoints instead of security friction spread across the whole app."
      }
    ],
    "roadmap": [
      "Predictive transfer timing algorithms based on historical exchange rate patterns",
      "Group payment functionality allowing multiple senders to contribute to a single transfer",
      "Cross-border utility bill payment integrations"
    ],
    "takeaways": "The instinct in a transfer flow is to compress steps, and it is usually wrong. Users did not want fewer screens \u2014 they wanted the screen before the irreversible one to be complete and honest. Adding an explicit review step made the flow longer and made people more willing to finish it. The corollary held on the other side: the steps genuinely worth removing were the ones asking for something the product had not yet earned, which is why verification moved out of onboarding and into the moments that require it."
  },
  {
    "id": "02",
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
    "client": "CirculaOps Enterprise",
    "year": "2024–2025",
    "role": "Lead Product Designer",
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
    "id": "03",
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
    "services": "Research → UX Strategy → IA → Design System → UI → Prototyping",
    "client": "Mindgard Labs",
    "year": "2024",
    "role": "Senior Product Designer",
    "duration": "6 Months",
    "coverImage": "/images/work/mindgard-ai-security-labs/11.png",
    "heroImage": "/images/work/mindgard-ai-security-labs/02.png",
    "description": "Automated red-teaming and security analysis suite protecting enterprise AI models from prompt injections, adversarial exploits, and data leakage.",
    "goal": "Demystify complex probabilistic LLM attack vectors and empower security engineers to triage model risks 3.5x faster.",
    "outcome": "Delivered an automated red-teaming dashboard that cut security triage from days to hours, with guardrail recommendations generated from each run.",
    "principles": [
      {
        "title": "Explainable Threat Topography",
        "description": "Translate probabilistic neural attack vectors into visual node propagation trees that security engineers can understand at a glance."
      },
      {
        "title": "Keyboard-First Density",
        "description": "Engineer high-density dark mode interfaces with command palettes and shortcuts tailored for technical power users."
      },
      {
        "title": "Actionable Remediation",
        "description": "Every vulnerability card provides 1-click defensive system prompt patches rather than passive error logs."
      }
    ],
    "metrics": [
      {
        "label": "Attack Vectors Evaluated",
        "value": "100+ Tests"
      },
      {
        "label": "Security Triage Speed",
        "value": "3.5x Faster"
      }
    ],
    "overview": "Conducted extensive competitive and user analysis comparing Mindgard against Sydelabs, Adversa, Robust Intelligence, and Hiddenlayer to inform Mindgard's Overview Dashboard, ensuring it delivers a superior, high-density analytical experience for AI security engineers.",
    "challenge": "Security analysts need to evaluate probabilistic adversarial attacks (jailbreaks, prompt leaks, data extraction) across complex multi-turn LLM pipelines without wading through unmanageable raw log dumps.",
    "solution": "Engineered an interactive attack vector visualization tree mapping exploit propagation across model layers, with normalized threat scoring and auto-generated system prompt mitigations.",
    "designSystem": "High-density technical UI optimized for power users, featuring keyboard shortcuts, terminal-inspired dark modes, and crisp risk distribution matrices.",
    "gallery": [
      "/images/work/mindgard-ai-security-labs/11.png",
      "/images/work/mindgard-ai-security-labs/02.png",
      "/images/work/mindgard-ai-security-labs/10.png",
      "/images/work/mindgard-ai-security-labs/12.png",
      "/images/work/mindgard-ai-security-labs/13.png",
      "/images/work/mindgard-ai-security-labs/03.png",
      "/images/work/mindgard-ai-security-labs/04.png",
      "/images/work/mindgard-ai-security-labs/05.png",
      "/images/work/mindgard-ai-security-labs/06.png",
      "/images/work/mindgard-ai-security-labs/07.png",
      "/images/work/mindgard-ai-security-labs/08.png",
      "/images/work/mindgard-ai-security-labs/09.png"
    ],
    "features": [
      {
        "title": "Automated Adversarial Red Teaming",
        "description": "Executes continuous attack vectors against target LLMs to expose vulnerabilities before deployment."
      },
      {
        "title": "Normalized Risk Scoring",
        "description": "Categorizes threat severity across data confidentiality, prompt safety, and model integrity."
      },
      {
        "title": "System Prompt Guardrail Generator",
        "description": "Instantly exports fine-tuned token filters and defensive system prompts to patch discovered vulnerabilities."
      }
    ],
    "takeaways": "Designing AI security tools requires demystifying probabilistic systems. When security teams can trace attack paths visually, remediation happens in minutes rather than weeks."
  },
  {
    "id": "04",
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
    "id": "05",
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
    "id": "06",
    "slug": "yourparkingspace",
    "featured": true,
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
    "id": "07",
    "slug": "eventspad",
    "featured": true,
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
    "engagement": "Own product · EventspadHQ Ltd",
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
