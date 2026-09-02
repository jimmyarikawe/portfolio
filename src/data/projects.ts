export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categories: string[];
  services: string;
  client: string;
  year: string;
  role: string;
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
    "title": "Omits Finance",
    "tagline": "Cross-Border Remittance & Global Money Transfer Application",
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
    "duration": "12 Months",
    "coverImage": "/images/work/omits/02.png",
    "heroImage": "/images/work/omits/05.png",
    "description": "Omits is a cross-border remittance application engineered to remove friction, hidden fees, and delays in international money transfers, reducing repeat transaction time to under 60 seconds.",
    "goal": "Eliminate exchange rate anxiety, streamline multi-tiered KYC verification, and reduce repeat transfer time to under 60 seconds.",
    "outcome": "Shipped multi-currency remittance ecosystem across 25+ FX corridors with 94% unassisted completion and zero rate slippage.",
    "principles": [
      {
        "title": "Progressive Reassurance",
        "description": "Provide immediate, transparent fee breakdowns and real-time status tracking at every touchpoint to eliminate financial anxiety."
      },
      {
        "title": "Frictionless Repetition",
        "description": "Surface smart beneficiary lists and biometric 1-tap confirmation to turn recurring transfers into effortless sub-minute routines."
      },
      {
        "title": "Uncompromising Trust",
        "description": "Card-based visual boundaries, crisp cryptographic indicators, and high-contrast states reinforce security without adding cognitive clutter."
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
        "label": "End-to-End Encryption",
        "value": "100%"
      },
      {
        "label": "Multi-Currency Coverage",
        "value": "25+ FX"
      }
    ],
    "overview": "Omits successfully addresses the core challenges of cross-border remittance through thoughtful design and user-centered development. As both designer and product manager, I collaborated closely with engineering, compliance, risk, and CX teams to ensure design feasibility, regulatory adherence, and seamless scalability.",
    "challenge": "Cross-border financial transactions carry high cognitive load and anxiety for users. Senders worry about unpredictable exchange rate slippage, delayed settlement, and hidden intermediary fees. Traditional remittance apps suffer from cumbersome multi-step KYC processes and disjointed transaction status communication.",
    "solution": "We engineered an ultra-streamlined remittance flow combining real-time exchange rate synchronization, smart beneficiary management, progressive tiered verification, and multi-factor biometric authentication. The interface provides constant reassurance through instant push feedback, transparent fee breakdowns, and real-time transaction tracking.",
    "designSystem": "Card-based visual boundaries guide the user's eye through clear information hierarchies. Consistent padding, high-contrast states, and typography establish rhythm and reinforce security at every touchpoint.",
    "gallery": [
      "/images/work/omits/02.png",
      "/images/work/omits/05.png",
      "/images/work/omits/03.png",
      "/images/work/omits/04.png",
      "/images/work/omits/06.png"
    ],
    "features": [
      {
        "title": "Real-Time FX Lock & Sync",
        "description": "The app leverages real-time synchronization for global exchange rates, ensuring users lock exact rates before confirming transfers with zero hidden slippage."
      },
      {
        "title": "Smart Beneficiary Management",
        "description": "Beneficiary lists load progressively, surfacing frequently used recipients first to reduce friction on repeat transfers significantly."
      },
      {
        "title": "Multi-Factor Biometric Security",
        "description": "Combines biometric verification with PIN codes, end-to-end encryption, and secure token-based session management with automatic timeout."
      },
      {
        "title": "Multi-Currency Financial Statements",
        "description": "Comprehensive account statements with custom date ranges, providing users and businesses with complete financial visibility and instant audit exports."
      }
    ],
    "roadmap": [
      "Predictive transfer timing algorithms based on historical exchange rate patterns",
      "Group payment functionality allowing multiple senders to contribute to a single transfer",
      "Cross-border utility bill payment integrations"
    ],
    "takeaways": "In financial applications, every design decision must reinforce security and reliability. Users need constant reassurance through visual feedback, clear communication, and transparent processes. Creating a simple experience for complex transactions requires deep backend intelligence and disciplined information architecture."
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
    "role": "Director of Product Design",
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
      },
      {
        "label": "Telemetry Uptime",
        "value": "99.9%"
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
    "role": "Staff Product Designer & AI UX Technologist",
    "duration": "6 Months",
    "coverImage": "/images/work/mindgard-ai-security-labs/11.png",
    "heroImage": "/images/work/mindgard-ai-security-labs/02.png",
    "description": "Automated red-teaming and security analysis suite protecting enterprise AI models from prompt injections, adversarial exploits, and data leakage.",
    "goal": "Demystify complex probabilistic LLM attack vectors and empower security engineers to triage model risks 3.5x faster.",
    "outcome": "Delivered MITRE ATLAS-aligned automated red teaming dashboard evaluating 100+ attack vectors with instant guardrail generation.",
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
      },
      {
        "label": "Threat Mapping",
        "value": "MITRE ATLAS"
      },
      {
        "label": "Enterprise Readiness",
        "value": "SOC2"
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
        "label": "Voice Modulation Options",
        "value": "20+ Profiles"
      },
      {
        "label": "Task Execution Latency",
        "value": "< 250ms"
      },
      {
        "label": "User Engagement",
        "value": "+85%"
      },
      {
        "label": "Accessibility Score",
        "value": "WCAG AAA"
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
        "label": "Modes Supported",
        "value": "Light & Dark"
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
        "label": "Space Discovery Latency",
        "value": "< 100ms"
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
  }
];
