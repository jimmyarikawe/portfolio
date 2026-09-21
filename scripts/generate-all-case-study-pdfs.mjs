import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = '/Users/jimmyarikawe/Jimmy\'s portfolio';
const publicDir = path.join(baseDir, 'public');
const outDir = path.join(baseDir, 'case-studies-pdf');
const publicOutDir = path.join(publicDir, 'case-studies-pdf');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(publicOutDir)) fs.mkdirSync(publicOutDir, { recursive: true });

function toBase64(relPath) {
  if (!relPath) return '';
  const fullPath = path.join(publicDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn('Warning: file not found:', fullPath);
    return '';
  }
  const ext = path.extname(fullPath).toLowerCase();
  const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
  return `data:${mime};base64,${fs.readFileSync(fullPath).toString('base64')}`;
}

const projects = [
  {
    slug: 'omits',
    filename: 'Omits_Finance_Case_Study_Jimmy_Arikawe.pdf',
    title: 'Omits Finance',
    tagline: 'Designing Trust, Transparency & Speed into Cross-Border Remittance',
    category: 'Fintech · Mobile UX · Design System',
    accent: '#6366F1',
    accentLight: '#818CF8',
    accentGlow: 'rgba(99, 102, 241, 0.22)',
    badgeColor: 'badge-indigo',
    meta: {
      role: 'Product Lead & Sole Product Designer',
      engagement: 'Full-time · 12 Months (2025–2026)',
      client: 'Omits Technology Limited (UK)',
      deliverables: 'Mobile App (iOS/Android), Design System, Money Flow Engine',
    },
    heroImage: '/images/work/omits/00-in-hand.png',
    metrics: [
      { value: '500+', label: 'Beta Users Onboarded' },
      { value: '< 60s', label: 'Transaction Completion' },
      { value: '130s', label: 'Onboarding Completion' },
      { value: '4+', label: 'Corridors at Launch' },
    ],
    overview: 'Cross-border remittance is broken, hurting migrant workers, international students, and cross-border families who pay an average of 6.4% to 11.99% per transfer while waiting days for settlement. As sole product designer and manager, I owned this end-to-end: conducting research across three user segments, mapping the full money flow across banking rails, and shipping the product to an active 500+ user beta across Canada, Nigeria, Ghana, and the UK.',
    challenge: 'One app. Multiple countries. Wildly different regulations. Central Bank of Nigeria (CBN), Central Bank of Kenya (CBK), and Bank of Ghana (BoG) each enforce different KYC tiers, document requirements, and transaction limits. Traditional KYC flows were aggressive, demanding everything upfront and killing signup before users saw value. Furthermore, first-time fintech users had high fraud anxiety—excessive fields felt like a scam.',
    personas: [
      { title: 'Migrant Workers', desc: 'Sending urgent monthly family support; prioritized transaction speed, absolute fee transparency, and receipt certainty.' },
      { title: 'International Students', desc: 'Managing living expenses and tuition from overseas; needed predictable FX rates and low fees.' },
      { title: 'Small Business Importers', desc: 'Frequent cross-border inventory payments requiring reliable verification and instant delivery receipts.' }
    ],
    principles: [
      { num: '01', title: 'Radical Transparency', desc: 'Live FX rate, transfer fees, and the exact recipient amount are explicitly stated before commitment—never hidden in post-transaction deductions.' },
      { num: '02', title: 'Frictionless Flow', desc: 'Every step is a potential drop-off. Flows adapt dynamically per corridor: Ghanaian mobile-money asks for operator/number; Nigerian transfer asks for bank/account.' },
      { num: '03', title: 'Progressive Trust', desc: 'Tiered KYC defers heavy verification until required by transaction limits, allowing users to experience product value before uploading documents.' },
      { num: '04', title: 'Intelligent Assistance', desc: 'Corridor-aware inputs, real-time banking validation, and clear error recovery states replace generic, intimidating fintech forms.' }
    ],
    strategicInsight: 'Trust in fintech is won or lost at the point of commitment. The review step users describe as friction is actually what gives them the confidence to finish, provided all numbers are honest and unambiguous.',
    architecture: {
      title: 'Money Flow & System State Machine',
      subtitle: 'Mapped before a single interface screen was designed',
      diagram: '/images/work/omits/01-money-flow.png',
      caption: 'End-to-end money flow: FX engine, KYC/AML monitoring, Nostro accounts, and critical balance reversal paths for failed transactions.',
      secondaryDiagram: '/images/work/omits/04-kyc-flow.png',
      secondaryCaption: 'Tiered jurisdiction-aware KYC state machine with explicit retry states.',
      cards: [
        { title: 'System-First Mapping', desc: 'Modelled the FX engine, liquidity providers, Nostro accounts, and settlement webhooks before opening Figma to ensure design matched engineering reality.' },
        { title: 'Reversal & Failure Paths', desc: 'Prioritised failure and reversal branches. When a corridor fails, balances reverse immediately and audit logs explain why, reflected transparently in UI.' },
        { title: 'Corridor-Aware Adaptability', desc: 'Different banking rails (NIBSS, Mobile Money, Faster Payments) converge into one predictable review and confirmation state.' }
      ]
    },
    features: [
      {
        title: 'Transparency Before Commitment',
        desc: 'Review screen reveals the live exchange rate, exact fee breakdown, recipient payout, and estimated arrival before PIN entry. We called this the "Moment of Truth".',
        image: '/images/work/omits/02-send-transparency.png'
      },
      {
        title: 'Dual-Layer Authorisation & Receipt',
        desc: 'Biometrics carry speed while a transaction PIN provides fallback. On completion, instant transaction reference, PDF receipt, and live status tracker are available.',
        image: '/images/work/omits/03-authorise-complete.png'
      }
    ],
    designSystem: {
      desc: 'Built a token-based design system with 100% light and dark mode parity. Designed to scale across N currencies and corridors without creating N bespoke screens. Every component state (default, active, loading, error, empty) was documented for zero-ambiguity developer handoff.',
      images: ['/images/work/omits/05-home.png', '/images/work/omits/06-analytics.png'],
      highlights: [
        'Semantic risk & status tokens (Success, Pending, Reversed, Failed)',
        'Fluid typography hierarchy with large numerical readout priority',
        'Light and dark mode parity tested across 40+ responsive screens',
        'Component library built for rapid corridor expansion'
      ]
    },
    takeaways: 'Design systems are a commercial decision, not just a design aesthetic—our token architecture halved the engineering cost of onboarding new corridors. Trust is designed, not assumed: progressive KYC wasn’t just good UX, it was our core conversion funnel strategy.',
    outcomes: 'Successfully shipped to a 500+ user beta across Canada, Nigeria, Ghana, and the UK. Achieved average transaction times under 60 seconds, cut onboarding time to 130 seconds, and sustained zero critical transaction failures across four live corridors.'
  },
  {
    slug: 'mindgard-ai-security-labs',
    filename: 'Mindgard_AI_Security_Case_Study_Jimmy_Arikawe.pdf',
    title: 'Mindgard AI Security Labs',
    tagline: 'Automated Red-Teaming & Vulnerability Assessment for LLMs and AI Models',
    category: 'AI & Cybersecurity · Enterprise B2B SaaS',
    accent: '#06B6D4',
    accentLight: '#38BDF8',
    accentGlow: 'rgba(6, 182, 212, 0.22)',
    badgeColor: 'badge-cyan',
    meta: {
      role: 'Solo Product Designer',
      engagement: 'Cross-Functional (PM, 2 SWEs, AI Researcher, SecEng)',
      client: 'Mindgard AI Security Labs (London, UK)',
      deliverables: 'Enterprise SaaS Dashboard, Threat Taxonomy, 1-Click Remediation',
    },
    heroImage: '/images/work/mindgard-ai-security-labs/01-dashboard-overview.png',
    metrics: [
      { value: '25', label: 'MITRE ATLAS Vectors' },
      { value: '938', label: 'Threats Discovered' },
      { value: '10', label: 'Security Experts Researched' },
      { value: 'Beta', label: 'Enterprise Beta Status' },
    ],
    overview: 'Mindgard is a London-based cybersecurity startup enabling enterprises to defend AI and LLM deployments against adversarial attacks. As Solo Designer over a 4-month sprint, I collaborated closely with a team of six (PM, 2 SWEs, AI Researcher, and Security Engineer) to translate complex neural threat telemetry into an actionable, enterprise-grade risk overview dashboard.',
    challenge: 'Enterprises deploying LLMs and machine learning models face novel adversarial attack vectors: prompt injections, jailbreaks, training data leakage, model theft, and evasion attacks. Existing cybersecurity dashboards dumped raw, probabilistic log data, leaving security teams paralyzed without actionable remediation paths or standardized severity metrics.',
    personas: [
      { title: 'Offensive Security Engineers', desc: 'Conducting active penetration tests on AI models; required standardized taxonomy and repeatable scan orchestration.' },
      { title: 'AI & ML Engineers', desc: 'Deploying models into production; needed clear remediation code snippets and model health benchmarks.' },
      { title: 'Enterprise CISOs & SecOps', desc: 'Evaluating enterprise risk posture; needed high-level 6-month trend telemetry and executive compliance views.' }
    ],
    principles: [
      { num: '01', title: 'Simplified Risk Overview', desc: 'Present executive and engineering threat postures across all models without drowning operators in raw unmanageable log dumps.' },
      { num: '02', title: 'Historical Trend Telemetry', desc: 'Track vulnerability trajectories and risk score fluctuations over 6-month horizons with comparative multi-model filters.' },
      { num: '03', title: 'Actionable Remediation', desc: 'Every vulnerability connects directly to prioritized remediation guidelines (model obfuscation, boundary hardening) with 1-click triggers.' },
      { num: '04', title: 'MITRE ATLAS™ Standardization', desc: 'Anchor threat categories directly to the industry-standard MITRE ATLAS framework with semantic color-coded risk tiers.' }
    ],
    strategicInsight: 'In enterprise cybersecurity, visibility without immediate remediation breeds operational fatigue. Moving from passive log reporting to 1-click remediation transforms a monitoring tool into a proactive defense system.',
    architecture: {
      title: '6-Month Risk Trend & Telemetry Analytics',
      subtitle: 'Comparative model vulnerability trajectories and automated scan orchestration',
      diagram: '/images/work/mindgard-ai-security-labs/04-trend-visualization.png',
      caption: 'Multi-series risk trajectory tracking model vulnerabilities over time with customizable date ranges and model selection.',
      secondaryDiagram: '/images/work/mindgard-ai-security-labs/00-dashboard.png',
      secondaryCaption: 'Full enterprise dashboard view showing threat categories, model inventory, and immediate mitigation actions.',
      cards: [
        { title: 'MITRE ATLAS Framework', desc: 'Standardized 25 attack categories (Reconnaissance, Initial Access, ML Model Access, Exfiltration) into intuitive semantic donut widgets.' },
        { title: 'Multi-Model Benchmarking', desc: 'Engineered comparative filters allowing teams to compare Mistral, GPT-3.5, and internal proprietary models on a single graph.' },
        { title: 'Frictionless Model Ingestion', desc: 'Designed intuitive modal workflows for uploading local weights (.h5, .pt, .onnx) or securely connecting HuggingFace repositories.' }
      ]
    },
    features: [
      {
        title: 'MITRE ATLAS™ Risk Donut Widget',
        desc: 'Interactive donut chart visualizing 25 high-impact attack vectors with hover-over risk severity breakdown, active filtering, and month-over-month shifts.',
        image: '/images/work/mindgard-ai-security-labs/01-dashboard-overview.png'
      },
      {
        title: 'AI Model Inventory & Management',
        desc: 'Sortable enterprise inventory tracking tested models with date last scanned, color-coded threat badges, risk gauges, attack counts, and 1-click rescan triggers.',
        image: '/images/work/mindgard-ai-security-labs/02-models.png'
      }
    ],
    designSystem: {
      desc: 'Tailored for technical operators and decision-makers: disciplined semantic risk tokens (Green for Low Threat 80–90%+, Amber for Medium 60%, Red for Critical 16–20%), paired with high-contrast charts, collapsible navigation, and frictionless modal dialogs.',
      images: ['/images/work/mindgard-ai-security-labs/03-scan-history.png', '/images/work/mindgard-ai-security-labs/00-dashboard.png'],
      highlights: [
        'Semantic risk token architecture (Low, Medium, Critical)',
        'Dense data tables with inline scan triggers and health badges',
        'Standardized modal workflows for model file and repo ingestion',
        'High-contrast charts optimized for enterprise dark environments'
      ]
    },
    takeaways: 'In-depth interviews with 10 offensive security engineers revealed that operators do not want more alert volume—they want prioritized remediation. Close engineering collaboration allowed us to de-scope secondary features and ship an enterprise beta that solved the core problem.',
    outcomes: 'Delivered an end-to-end B2B AI security dashboard currently deployed in enterprise Beta testing. Integrated 25 MITRE ATLAS categories, multi-model inventory, 6-month trend telemetry, and 1-click remediation guidelines.'
  },
  {
    slug: 'circulaops',
    filename: 'Circula_Operations_Case_Study_Jimmy_Arikawe.pdf',
    title: 'Circula',
    tagline: 'Operations, Inventory & Impact Reporting for the Circular Economy',
    category: 'Operational Software · Enterprise SaaS · Systems Design',
    accent: '#10B981',
    accentLight: '#34D399',
    accentGlow: 'rgba(16, 185, 129, 0.22)',
    badgeColor: 'badge-emerald',
    meta: {
      role: 'Co-founder & Product Designer',
      engagement: 'Co-founder · 10 Months (2024–2025)',
      client: 'Circula (Circular Economy Platform)',
      deliverables: '7-Module SaaS, Inventory State Machine, Invoicing, ESG Reports',
    },
    heroImage: '/images/work/circulaops/00-impact-report.png',
    metrics: [
      { value: '6', label: 'Material Streams Tracked' },
      { value: '4', label: 'Invoicing Currencies' },
      { value: '7', label: 'Operational Modules' },
      { value: '100%', label: 'Automated Impact Calculation' },
    ],
    overview: 'Recycling and material recovery businesses in emerging markets run on paper notebooks, WhatsApp, and fragmented spreadsheets. Consequently, when funders, offtakers, and international regulators demand environmental and social impact proof, companies cannot defend their numbers. As co-founder and product designer, I designed Circula to bridge this gap directly from yard operations to audit-grade reporting.',
    challenge: 'A single physical material undergoes continuous transformation: mixed plastic arrives from an informal collector, enters sorting, splits into recovered PET and residual waste, and only a portion becomes sellable stock against an invoice. If modelled too loosely, the recovery rate is fiction; if modelled too strictly, yard operators will bypass the system.',
    personas: [
      { title: 'Yard Supervisors', desc: 'Managing intake scales, sorting lines, and baling crews; needed rapid kilogram entry with zero cognitive friction.' },
      { title: 'Operations Directors', desc: 'Tracking multi-material inventory across warehouses and managing international offtaker contracts.' },
      { title: 'Funders & ESG Auditors', desc: 'Demanding verifiable CO₂ avoided, landfill diversion, and direct/indirect green jobs data backed by immutable records.' }
    ],
    principles: [
      { num: '01', title: 'Weigh Everything in Kilograms', desc: 'Material weight is the unit the business runs on. Every screen measures in kilograms first and currency second, reflecting operational reality.' },
      { num: '02', title: 'Waste is a First-Class Output', desc: 'Recording an operation requires logging what was produced and what was wasted side-by-side. Recovery rates are only credible when loss is recorded at the moment of gain.' },
      { num: '03', title: 'Impact is a Read, Not an Entry', desc: 'Nobody types their CO₂ figure in. Environmental and social impact are computed mathematically from operational records, making them legally defensible.' }
    ],
    strategicInsight: 'Impact reporting fails at the point of data entry, not at the point of reporting. Requiring waste logging alongside production output made downstream ESG reports completely defensible to international funders.',
    architecture: {
      title: 'Material Transformation & Operational Lifecycle',
      subtitle: 'Tracking raw intake through processing to ready-for-sale inventory and waste',
      diagram: '/images/work/circulaops/02-operations.png',
      caption: 'Operations lifecycle tracking batch inputs, transformation stages, and output yields with real-time loss attribution.',
      secondaryDiagram: '/images/work/circulaops/03-new-operation.png',
      secondaryCaption: 'New operation modal requiring input weight and residual waste before promoting output to sellable stock.',
      cards: [
        { title: 'Single Inventory Object', desc: 'Anchored the platform on one unified inventory entity, with modules (sorting, baling, sales) representing distinct lifecycle states.' },
        { title: 'Dual-Output Verification', desc: 'Operations require entering both recovered quantity and waste quantity, enforcing operational honesty on the ground.' },
        { title: 'Multi-Currency Trade Engine', desc: 'Supported local currency purchases (NGN) alongside foreign currency sales (USD, GBP, EUR) with live exchange rate logging.' }
      ]
    },
    features: [
      {
        title: 'Inventory Across Three States',
        desc: 'Raw materials, ready for sale, and waste live as tabs on one inventory page, allowing operators to understand stock progression without losing context.',
        image: '/images/work/circulaops/04-inventory.png'
      },
      {
        title: 'Multi-Currency Invoicing Engine',
        desc: 'Balances held per currency with awaiting, overdue, and paid statuses, bridging local supply chain collections with international export orders.',
        image: '/images/work/circulaops/06-invoices.png'
      }
    ],
    designSystem: {
      desc: 'Restrained, dense design system built for high data throughput: crisp neutral ground, dark chrome navigation, and a single green accent reserved for brand and positive movement. Six fixed material stream hues (glass, paper, plastic, metal, e-waste, rubber) maintain 100% semantic consistency across distribution bars, tables, and reports.',
      images: ['/images/work/circulaops/01-dashboard.png', '/images/work/circulaops/07-contacts.png'],
      highlights: [
        'Fixed 6-stream material color scale (Glass, Paper, Plastic, Metal, E-waste, Rubber)',
        'Unified dense table row anatomy across operations, inventory, and invoices',
        'Standardized status pills with clear semantic hierarchy',
        'Automated ESG calculation formulas translating kilograms to CO₂ metrics'
      ]
    },
    takeaways: 'Designing for the operational trade-off—making waste entry compulsory at the yard scale—was the pivotal decision. It created mild friction during recording but generated the only credible circular economy impact data in the sector.',
    outcomes: 'Shipped a comprehensive seven-module SaaS platform tracking six material streams from intake to sale. Enabled multi-currency invoicing across four currencies and delivered automated, defensible environmental and social impact reports.'
  },
  {
    slug: 'voxxy-ai',
    filename: 'Voxxy_AI_Voice_Case_Study_Jimmy_Arikawe.pdf',
    title: 'Voxxy.ai',
    tagline: 'Conversational AI Speech Technology & Voice Modulation Interface',
    category: 'Voice AI · Multimodal Interface · Interaction Design',
    accent: '#8B5CF6',
    accentLight: '#A78BFA',
    accentGlow: 'rgba(139, 92, 246, 0.22)',
    badgeColor: 'badge-purple',
    meta: {
      role: 'Lead Product Designer',
      engagement: 'Contract · 6 Months (2023–2024)',
      client: 'Voxxy.ai (Voice Intelligence Platform)',
      deliverables: 'Voice-First UI, Spectral HUD, 4-in-1 Architecture, Audio Visualizer',
    },
    heroImage: '/images/work/voxxy-ai/00-voice-generator.png',
    metrics: [
      { value: '< 200ms', label: 'Response Latency' },
      { value: '85%', label: 'Task Success Rate' },
      { value: '45K+', label: 'Active User Adoption' },
      { value: '4-in-1', label: 'Unified Tool Architecture' },
    ],
    overview: 'Voxxy.ai is a voice-first application uniting speech recognition, natural language processing, text-to-speech synthesis, and real-time voice modulation. As Lead Product Designer, I designed a multi-modal interface that transforms complex acoustic engineering into an intuitive, responsive consumer and creator application.',
    challenge: 'Voice AI interfaces often fail because users feel alienated by a black-box auditory pipeline. Non-deterministic speech recognition, background noise, accents, and latency create hesitation. Users need immediate on-screen visual confirmation of whether the AI is listening, processing, or synthesizing.',
    personas: [
      { title: 'Content Creators & Streamers', desc: 'Requiring real-time voice modulation, custom vocal avatars, and low-latency audio rendering.' },
      { title: 'Accessibility Users', desc: 'Relying on speech-to-text and text-to-speech for seamless hands-free communication and interaction.' },
      { title: 'Enterprise Audio Teams', desc: 'Generating multi-speaker conversational voice tracks with precise cadence, pitch, and inflection controls.' }
    ],
    principles: [
      { num: '01', title: 'Multimodal Redundancy', desc: 'Always pair auditory inputs with instant visual feedback so users never have to guess whether their command was recognized.' },
      { num: '02', title: 'Zero Acoustic Deadweight', desc: 'Minimize perceived latency through streaming speech-to-text tokenization and immediate visual status pulses.' },
      { num: '03', title: 'Human-Centric Soundscapes', desc: 'Design acoustic parameter controls that mimic natural human inflection, emotional cadence, and conversational rhythm.' }
    ],
    strategicInsight: 'In voice interfaces, visual biofeedback is the foundation of trust. Combining dynamic waveform visualizations with sub-200ms processing status eliminates audio anxiety and drives interaction confidence.',
    architecture: {
      title: 'Four Tools in One Unified Interaction Flow',
      subtitle: 'Voice Command, Text-to-Speech, Speech-to-Text, and Voice Changer mapped to one terminal action',
      diagram: '/images/work/voxxy-ai/00-user-flow.png',
      caption: 'Architecture mapping four core capabilities into a single cohesive interaction tree converging on Select Voice → Generate → Act.',
      secondaryDiagram: '/images/work/voxxy-ai/01-modes.png',
      secondaryCaption: 'Unified modal switcher maintaining state and project context across tools.',
      cards: [
        { title: 'Unified Interaction Model', desc: 'Four distinct audio tools share one interaction root, ensuring that interaction skills learned in one mode transfer effortlessly to the next.' },
        { title: 'Streaming Token Pulses', desc: 'UI displays live word-by-word streaming transcriptions with real-time confidence scores, avoiding jarring delayed batch updates.' },
        { title: 'Global Audio HUD', desc: 'Persistent mini-player HUD allows users to preview, scrub, pitch-shift, and export generated audio from anywhere in the application.' }
      ]
    },
    features: [
      {
        title: 'Real-Time Spectral Command HUD',
        desc: 'Live audio visualizer displaying input frequency curves, background noise levels, and immediate AI transcription status.',
        image: '/images/work/voxxy-ai/02-voice-command.png'
      },
      {
        title: 'Voice Generator & Parameter Modulation',
        desc: 'Granular pitch, speed, and emotional inflection controls paired with custom avatar presets and one-click voice cloning.',
        image: '/images/work/voxxy-ai/03-voice-generator.png'
      }
    ],
    designSystem: {
      desc: 'Dark-mode optimized interface designed for studio environments: neon audio frequency visualizers, fluid dynamic typography, and minimal cognitive load controls for seamless creator workflows.',
      images: ['/images/work/voxxy-ai/04-select-voice.png', '/images/work/voxxy-ai/05-speech-to-text.png'],
      highlights: [
        'Dark-mode studio aesthetic with neon audio frequency indicators',
        'Custom interactive waveform visualizer with scrub and slice handles',
        'Multi-avatar selection library with preview audio samples',
        'Streaming text transcription components with real-time confidence states'
      ]
    },
    takeaways: 'Voice interfaces succeed when they provide transparent visual feedback for auditory inputs. Blending sound and screen creates confidence in conversational AI and removes the feeling of talking to an unresponsive black box.',
    outcomes: 'Pioneered an auditory feedback interface operating under 200ms latency. Achieved an 85% task completion rate on complex multi-turn commands and scaled to over 45,000 active users.'
  },
  {
    slug: 'eventspad',
    filename: 'Eventspad_Case_Study_Jimmy_Arikawe.pdf',
    title: 'Eventspad',
    tagline: 'End-to-End Event, Guest & Secure Check-In Operating System',
    category: 'Event Technology · SaaS Platform · Systems Design',
    accent: '#7C3AED',
    accentLight: '#9333EA',
    accentGlow: 'rgba(124, 58, 237, 0.22)',
    badgeColor: 'badge-purple',
    meta: {
      role: 'Founder & Product Designer',
      engagement: 'Founded EventspadHQ Ltd · 4 Months (2026)',
      client: 'EventspadHQ Ltd (live at eventspad.com)',
      deliverables: 'Web App, 2D Floor Planner, QR Validator App, Funnel Analytics',
    },
    heroImage: '/images/work/eventspad/cover.png',
    metrics: [
      { value: '< 1s', label: 'Door Verification Speed' },
      { value: '3 Steps', label: 'Event Creation Setup' },
      { value: '$0.10', label: 'Cost Per Guest Pass' },
      { value: '100%', label: 'Offline Check-In Tolerance' },
    ],
    overview: 'Most event tools stop at invitation distribution, leaving organizers with printed spreadsheets and chaotic entrances. Eventspad was conceived to own the entire guest lifecycle: creation, multi-channel invitations, RSVPs, 2D seating layouts, unique QR passes, and sub-second door validation on a single synchronized platform.',
    challenge: 'Recurring failures plague events: hosts lose track of RSVPs across WhatsApp threads, door queues stall while ushers manually scan paper lists, uninvited guests enter with forwarded passes, and organizers have zero post-event attendance data. Existing tools solved one step and offloaded the rest to spreadsheets.',
    personas: [
      { title: 'Event Planners & Hosts', desc: 'Organizing weddings, galas, and summits; needed seamless guest imports, RSVP tracking, and seating arrangement.' },
      { title: 'Venue Ushers & Security', desc: 'Scanning hundreds of guests in low-light entrances; required instant, unambiguous pass validation under 1 second.' },
      { title: 'Attending Guests', desc: 'Receiving invitations via WhatsApp or SMS; wanted 1-click browser RSVP without downloading an app.' }
    ],
    principles: [
      { num: '01', title: 'One Guest Record Everywhere', desc: 'The guest is the single source of truth. RSVP status, table number, and QR pass all derive from one record—the door scanner can never disagree with the seating chart.' },
      { num: '02', title: 'Design for the Door', desc: 'The scan is the highest-stakes three seconds of any event. The validator resolves into three high-contrast states: entry granted, already used, not valid—legible at arm’s length in dark venues.' },
      { num: '03', title: 'Pay for Guests, Not Software', desc: 'Priced per guest credit ($0.10) with zero subscription fees, aligning cost directly with the value delivered to occasional and professional hosts alike.' }
    ],
    strategicInsight: 'Keeping one guest record coherent across an organizer’s laptop, a guest’s browser, and an usher’s phone on a venue’s failing Wi-Fi was the real design challenge. Designing offline-first made the entire system trustworthy.',
    architecture: {
      title: 'Interactive 2D Floor Planner & Seating Canvas',
      subtitle: 'Drag-and-drop table layouts with live seat-to-pass synchronization',
      diagram: '/images/work/eventspad/02-seating-floorplan.png',
      caption: 'Zoom-and-pan canvas with round, long, and stage objects, smart-guide snapping, and instant pass synchronization.',
      secondaryDiagram: '/images/work/eventspad/10-create-wizard.png',
      secondaryCaption: 'Three-step event setup wizard getting organizers from blank canvas to live RSVP in under five minutes.',
      cards: [
        { title: 'Live Ticket-to-Seat Sync', desc: 'Reassigning a guest table instantly updates the digital pass and the usher scanner, eliminating discrepancies between seating and entry.' },
        { title: 'Offline-First Door Validation', desc: 'Browser validator caches guest hashes locally, resolving passes in under 1 second and syncing queued check-ins when connectivity restores.' },
        { title: 'Three-Channel Delivery', desc: 'Automated invitations and reminders via WhatsApp, SMS, and Email sharing a single guest status filter.' }
      ]
    },
    features: [
      {
        title: 'High-Stakes Door Validator',
        desc: 'Scanner resolves to three bold states (Green: Granted, Amber: Already In, Red: Invalid) with audio cues, designed for rapid processing in noisy, dim environments.',
        image: '/images/work/eventspad/07-check-in.png'
      },
      {
        title: 'Unified Guest CRM & CSV Matcher',
        desc: 'Column-matching onboarding wizard reconciles arbitrary spreadsheet columns into clean, filterable guest profiles with instant RSVP tracking.',
        image: '/images/work/eventspad/03-guest-management.png'
      }
    ],
    designSystem: {
      desc: 'Built on Radix primitives and Tailwind CSS with a violet-on-ink accent palette. Geist Sans handles clean UI readability, while Geist Mono powers operational metrics: table counts, scan latencies, and pass credits. Semantic color is strictly reserved for validation state.',
      images: ['/images/work/eventspad/08-analytics-dashboard.png', '/images/work/eventspad/05-ticket-designer.png'],
      highlights: [
        'Geist Sans typography paired with Geist Mono for numerical operational readouts',
        'Radix UI accessible interaction primitives with custom violet theme',
        'High-contrast scan state triad (Green, Amber, Red) visible from 6 feet',
        'Customizable digital ticket designer with dynamic QR placement'
      ]
    },
    takeaways: 'Owning the entire guest lifecycle is what makes individual features succeed. Seating charts are only trustworthy because digital passes read from the same record; post-event analytics are only honest because the door scanner writes back to it in real time.',
    outcomes: 'Shipped a complete end-to-end event OS: 3-step creation wizard, 2D floor planner, three-channel invites, offline door scanner, and attendance funnel analytics. Live in production at eventspad.com.'
  },
  {
    slug: 'spotfinance',
    filename: 'Spot_Finance_Case_Study_Jimmy_Arikawe.pdf',
    title: 'Spot Finance',
    tagline: 'Investing, Saving and Paying in One Consumer Fintech App',
    category: 'Fintech · Consumer Mobile UX · Design System',
    accent: '#8B5CF6',
    accentLight: '#A78BFA',
    accentGlow: 'rgba(139, 92, 246, 0.22)',
    badgeColor: 'badge-purple',
    meta: {
      role: 'Senior Product Designer',
      engagement: 'Contract · 5 Months (2023)',
      client: 'Spot Finance (Consumer Fintech)',
      deliverables: 'Mobile App (iOS/Android), Design System, User Research & Flows',
    },
    heroImage: '/images/work/spotfinance/00-invest.png',
    metrics: [
      { value: '4.9 ★', label: 'App Store Rating' },
      { value: '120K+', label: 'Active User Base' },
      { value: '15 Days', label: 'Research & Usability Testing' },
      { value: '5 Mos', label: 'Timeline to Handover' },
    ],
    overview: 'Most people who want to start investing are not short of options—they are short of confidence. While comfortable with basic banking apps, prospective investors are intimidated by the jargon of trading terminals: tickers, spreads, and order books. Spot Finance unified fractional stock investing, automated savings, and everyday payments into one approachable app.',
    challenge: 'Consolidation is easy to propose and difficult to design. Payments, savings, and investments have distinct psychological rhythms: payments are instant and transactional; savings are passive and routine; investments carry risk and anxiety. Placing them behind one tab bar carelessly risks either trivializing investing or making paying for coffee stressful.',
    personas: [
      { title: 'Alex, 28 (Software Engineer)', desc: 'Financially capable, values minimal clean UI, wanted fractional investing in tech brands without learning technical trading terminals.' },
      { title: 'Emma, 25 (Marketing Exec)', desc: 'Focused on aesthetics and effortless automated savings; wanted simple visual performance tracking without jargon.' }
    ],
    principles: [
      { num: '01', title: 'One Account, Three Behaviours', desc: 'Home, Invest, Savings, and Profile share a single balance spine. Moving funds between them is a simple internal transfer, not a migration into a separate product.' },
      { num: '02', title: 'Recognition Before Research', desc: 'The Discover grid leads with familiar brand logos (Apple, Amazon, Nike, Netflix) because first-time investors search for companies they know, not ticker symbols.' },
      { num: '03', title: 'Security That Stays Out of the Way', desc: 'Two-factor and biometric authentication guard session entry and money-moving actions, protecting the user at the moments that matter without friction on passive browsing.' }
    ],
    strategicInsight: 'Consolidation is primarily an information hierarchy problem. What made Spot Finance feel unified was establishing a single balance spine and building the comprehensive component library before drawing screens.',
    architecture: {
      title: 'Unified Product Architecture & User Flow',
      subtitle: 'Single authenticated entry branching into Home, Savings, Invest, and Scan-to-Pay',
      diagram: '/images/work/spotfinance/02-user-flow.png',
      caption: 'Full user flow showing how spending, saving, and investing branch from one authenticated root with shared security checkpoints.',
      secondaryDiagram: '/images/work/spotfinance/01-personas.png',
      secondaryCaption: 'User personas (Alex & Emma) against whom every interaction and information density decision was benchmarked.',
      cards: [
        { title: 'Single Balance Spine', desc: 'Unified liquidity model allows users to invest spare change or withdraw investment gains to debit accounts seamlessly.' },
        { title: 'Approachability First', desc: 'Replaced traditional order books with simplified "Buy / Sell" amounts and clear 1D to 5Y performance charts.' },
        { title: 'Integrated Scan-to-Pay', desc: 'Positioned QR payment as a first-class feature on the navigation bar, driving daily transactional habit and engagement.' }
      ]
    },
    features: [
      {
        title: 'Discover Investing by Recognition',
        desc: 'Brand-first Discover grid categorized by Popular, Recent, and Top Movers, lowering intimidation for novice retail investors.',
        image: '/images/work/spotfinance/hero-in-hand.png'
      },
      {
        title: 'One Account, Three Behaviours',
        desc: 'Home, Invest, and Savings sit on a single navigation bar with a shared balance, making money movement an internal transfer rather than an app switch.',
        image: '/images/work/spotfinance/10.png'
      }
    ],
    designSystem: {
      desc: 'A dark-first component system built with a signature violet accent. Features comprehensive component states (inputs across 4 states, buttons across 3 sizes and 2 states, toggles, checkboxes, tab bars) designed with 100% parity across light and dark modes.',
      images: ['/images/work/spotfinance/03-components.png', '/images/work/spotfinance/05.png'],
      highlights: [
        'Comprehensive component library with full dark and light mode parity',
        'Text fields across 4 states (Default, Active, Error, Filled)',
        'Disciplined color palette: violet for primary action, green/red strictly for gains and losses',
        'Standardized 8pt grid spacing and accessible contrast ratios throughout'
      ]
    },
    takeaways: 'Consolidation is a hierarchy challenge, not a feature challenge. Sticking to a single balance and authenticating at the two crucial checkpoints gave users freedom without compromising security. Building components first allowed light and dark parity to become a natural property of the system.',
    outcomes: 'Shipped to a 4.9★ App Store rating across 120,000+ active users. Delivered a production-ready component library and design system that accelerated engineering delivery.'
  }
];

function generateHTML(p) {
  const heroImg = toBase64(p.heroImage);
  const archDiag = toBase64(p.architecture.diagram);
  const archSecDiag = toBase64(p.architecture.secondaryDiagram);
  const feat1Img = toBase64(p.features[0]?.image);
  const feat2Img = toBase64(p.features[1]?.image);
  const ds1Img = toBase64(p.designSystem.images[0]);
  const ds2Img = toBase64(p.designSystem.images[1]);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${p.title} — Case Study by Jimmy Arikawe</title>
<style>
  @page {
    size: 1920px 1080px;
    margin: 0;
  }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    background: #080A0F;
    color: #F8FAFC;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  :root {
    --accent: ${p.accent};
    --accent-light: ${p.accentLight};
    --accent-glow: ${p.accentGlow};
  }
  .slide {
    width: 1920px;
    height: 1080px;
    max-height: 1080px;
    min-height: 1080px;
    padding: 44px 64px 34px 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    page-break-after: always;
    break-after: page;
    background: radial-gradient(circle at 88% 12%, var(--accent-glow) 0%, transparent 42%),
                radial-gradient(circle at 10% 90%, rgba(30, 41, 59, 0.45) 0%, transparent 45%),
                linear-gradient(155deg, #07090D 0%, #0F131C 55%, #0A0C12 100%);
  }
  .slide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 16px;
    flex-shrink: 0;
  }
  .designer-brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .avatar-badge {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--accent) 0%, #1E1B4B 100%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 15px;
    color: #fff;
    letter-spacing: 0.04em;
  }
  .designer-name {
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: 0.02em;
  }
  .designer-title {
    font-size: 13px;
    color: #94A3B8;
    margin-left: 6px;
    font-weight: 400;
  }
  .header-badges {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .badge-accent {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--accent);
    color: var(--accent-light);
  }
  .badge-emerald {
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.35);
    color: #6EE7B7;
  }
  .badge-neutral {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #CBD5E1;
  }
  .slide-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 0;
    padding: 20px 0;
  }
  .slide-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 14px;
    font-size: 12.5px;
    color: #64748B;
    flex-shrink: 0;
  }
  .footer-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .footer-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #475569;
  }
  .footer-right {
    font-family: 'SF Mono', Menlo, monospace;
    font-size: 12px;
    letter-spacing: 0.06em;
    color: #94A3B8;
    font-weight: 600;
  }

  /* Section Header inside slides */
  .section-tag {
    font-family: 'SF Mono', Menlo, monospace;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent-light);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .section-tag::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: var(--accent);
  }
  .section-heading {
    font-size: 30px;
    font-weight: 800;
    color: #FFFFFF;
    letter-spacing: -0.025em;
    line-height: 1.2;
    margin: 0 0 16px 0;
  }

  /* Slide 1 Cover */
  .cover-layout {
    display: grid;
    grid-template-columns: 1.12fr 0.88fr;
    gap: 40px;
    align-items: center;
    height: 100%;
  }
  .cover-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
  }
  .cover-title-area h1 {
    font-size: 54px;
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.05;
    margin: 8px 0 10px 0;
    color: #FFFFFF;
  }
  .cover-tagline {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    color: #CBD5E1;
    margin: 0;
  }
  .cover-description {
    font-size: 15px;
    line-height: 1.6;
    color: #94A3B8;
    margin: 0;
  }
  .meta-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    background: rgba(18, 24, 38, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 16px 20px;
  }
  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .meta-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #64748B;
  }
  .meta-val {
    font-size: 13px;
    font-weight: 600;
    color: #F1F5F9;
  }
  .metrics-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .metric-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .metric-val {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--accent-light);
  }
  .metric-label {
    font-size: 11px;
    font-weight: 500;
    color: #94A3B8;
    line-height: 1.3;
  }
  .cover-right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .hero-frame {
    width: 100%;
    aspect-ratio: 16 / 10;
    max-height: 600px;
    border-radius: 20px;
    overflow: hidden;
    background: #0D1117;
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-frame img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
  }

  /* Slide 2 Challenge & Principles */
  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    height: 100%;
    align-items: stretch;
  }
  .content-card {
    background: rgba(18, 24, 38, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 22px 26px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .content-card-title {
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .content-card-title span {
    color: var(--accent-light);
  }
  .content-text {
    font-size: 14.5px;
    line-height: 1.6;
    color: #94A3B8;
    margin: 0;
  }
  .persona-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 4px;
  }
  .persona-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .persona-title {
    font-size: 12.5px;
    font-weight: 700;
    color: #E2E8F0;
  }
  .persona-desc {
    font-size: 11px;
    line-height: 1.4;
    color: #94A3B8;
  }
  .principles-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    justify-content: space-between;
  }
  .principle-box {
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-left: 3px solid var(--accent);
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .principle-head {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .principle-num {
    font-family: 'SF Mono', Menlo, monospace;
    font-size: 11.5px;
    font-weight: 700;
    color: var(--accent-light);
  }
  .principle-name {
    font-size: 14.5px;
    font-weight: 700;
    color: #F8FAFC;
  }
  .principle-desc {
    font-size: 12.5px;
    line-height: 1.48;
    color: #94A3B8;
    margin: 0;
  }
  .highlight-callout {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(15, 23, 42, 0.6) 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .callout-label {
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent-light);
  }
  .callout-body {
    font-size: 13px;
    line-height: 1.45;
    color: #CBD5E1;
    font-style: italic;
  }

  /* Slide 3 Architecture */
  .arch-layout {
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: 100%;
  }
  .arch-visual-area {
    flex: 1;
    display: grid;
    grid-template-columns: ${archSecDiag ? '1.2fr 0.8fr' : '1fr'};
    gap: 20px;
    min-height: 0;
  }
  .diagram-frame {
    background: rgba(15, 20, 31, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 10px 14px;
  }
  .diagram-frame img {
    width: 100%;
    flex: 1;
    object-fit: contain;
    border-radius: 8px;
    min-height: 0;
  }
  .diagram-caption {
    font-size: 11.5px;
    color: #94A3B8;
    margin-top: 8px;
    line-height: 1.4;
  }
  .arch-cards-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    flex-shrink: 0;
  }
  .arch-card {
    background: rgba(22, 28, 44, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 14px;
    padding: 14px 18px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .arch-card-title {
    font-size: 13.5px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .arch-card-title::before {
    content: "✦";
    color: var(--accent-light);
    font-size: 11px;
  }
  .arch-card-desc {
    font-size: 12px;
    line-height: 1.48;
    color: #94A3B8;
    margin: 0;
  }

  /* Slide 4 Features */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    height: 100%;
    align-items: stretch;
  }
  .feature-column {
    background: rgba(18, 24, 38, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 18px;
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .feature-img-box {
    flex: 1;
    min-height: 0;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(10, 14, 22, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }
  .feature-img-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
  .feature-text-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-shrink: 0;
  }
  .feature-title {
    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .feature-title::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
  }
  .feature-desc {
    font-size: 13px;
    line-height: 1.5;
    color: #94A3B8;
    margin: 0;
  }

  /* Slide 5 Design System */
  .ds-layout {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 36px;
    height: 100%;
    align-items: stretch;
  }
  .ds-left {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
  }
  .ds-spec-card {
    background: rgba(18, 24, 38, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .ds-spec-title {
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ds-spec-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ds-spec-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12.5px;
    color: #CBD5E1;
    line-height: 1.45;
  }
  .ds-spec-item::before {
    content: "✓";
    font-weight: 800;
    color: #10B981;
    font-size: 12px;
    margin-top: 1px;
  }
  .engineering-bridge-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(15, 23, 42, 0.6) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .bridge-title {
    font-size: 13px;
    font-weight: 700;
    color: var(--accent-light);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .bridge-desc {
    font-size: 12.5px;
    line-height: 1.5;
    color: #94A3B8;
    margin: 0;
  }
  .ds-right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    height: 100%;
    min-height: 0;
  }
  .ds-img-frame {
    background: rgba(15, 20, 31, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    overflow: hidden;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
  }
  .ds-img-frame img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  /* Slide 6 Results & Upwork CTA */
  .results-layout {
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: 100%;
    justify-content: space-between;
  }
  .impact-hero-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .impact-box {
    background: rgba(22, 28, 44, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 14px;
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    overflow: hidden;
  }
  .impact-box::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent) 0%, transparent 100%);
  }
  .impact-num {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #FFFFFF;
  }
  .impact-label {
    font-size: 11.5px;
    font-weight: 600;
    color: var(--accent-light);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .outcome-banner {
    background: rgba(18, 24, 38, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 16px 22px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .outcome-title {
    font-size: 14.5px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .outcome-desc {
    font-size: 13.5px;
    line-height: 1.55;
    color: #94A3B8;
    margin: 0;
  }
  .bottom-cards-grid {
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    gap: 20px;
    align-items: stretch;
  }
  .takeaways-card {
    background: rgba(18, 24, 38, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }
  .takeaways-title {
    font-size: 14.5px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .takeaways-text {
    font-size: 13px;
    line-height: 1.55;
    color: #CBD5E1;
    font-style: italic;
    margin: 0;
    position: relative;
    padding-left: 14px;
    border-left: 2px solid var(--accent);
  }
  .cta-card {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
  }
  .cta-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cta-designer {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cta-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--accent) 0%, #1E1B4B 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 16px;
    color: #fff;
  }
  .cta-name {
    font-size: 15px;
    font-weight: 800;
    color: #FFFFFF;
  }
  .cta-sub {
    font-size: 11.5px;
    color: #94A3B8;
  }
  .cta-services-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
    font-size: 11.5px;
    color: #CBD5E1;
  }
  .cta-services-list div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .cta-services-list div::before {
    content: "✦";
    color: var(--accent-light);
    font-size: 10px;
  }
  .cta-links-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 12px;
  }
  .cta-link-item {
    color: #E2E8F0;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
  }
</style>
</head>
<body>

  <!-- ==================== SLIDE 1: COVER & EXECUTIVE OVERVIEW ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="designer-brand">
        <div class="avatar-badge">JA</div>
        <div>
          <span class="designer-name">JIMMY ARIKAWE</span>
          <span class="designer-title">· Senior Product Designer & Design Engineer</span>
        </div>
      </div>
      <div class="header-badges">
        <span class="badge badge-emerald">★ Available on Upwork</span>
        <span class="badge badge-accent">${p.category}</span>
      </div>
    </div>

    <div class="slide-body">
      <div class="cover-layout">
        <div class="cover-left">
          <div class="cover-title-area">
            <span class="badge badge-neutral">Upwork Portfolio Case Study</span>
            <h1>${p.title}</h1>
            <p class="cover-tagline">${p.tagline}</p>
          </div>

          <p class="cover-description">${p.overview}</p>

          <div class="meta-grid">
            <div class="meta-item">
              <span class="meta-label">Role & Scope</span>
              <span class="meta-val">${p.meta.role}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Engagement & Timeline</span>
              <span class="meta-val">${p.meta.engagement}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Client / Organization</span>
              <span class="meta-val">${p.meta.client}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Key Deliverables</span>
              <span class="meta-val">${p.meta.deliverables}</span>
            </div>
          </div>

          <div class="metrics-strip">
            ${p.metrics.map(m => `
              <div class="metric-card">
                <span class="metric-val">${m.value}</span>
                <span class="metric-label">${m.label}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="cover-right">
          <div class="hero-frame">
            <img src="${heroImg}" alt="${p.title} Hero Showcase" />
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="footer-left">
        <span>${p.title}</span>
        <span class="footer-dot"></span>
        <span>Executive Overview</span>
        <span class="footer-dot"></span>
        <span>jimmyarikawe.com</span>
      </div>
      <div class="footer-right">SLIDE 01 / 06</div>
    </div>
  </div>

  <!-- ==================== SLIDE 2: THE CHALLENGE & PRINCIPLES ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="designer-brand">
        <div class="avatar-badge">JA</div>
        <div>
          <span class="designer-name">JIMMY ARIKAWE</span>
          <span class="designer-title">· Product Discovery & UX Strategy</span>
        </div>
      </div>
      <div class="header-badges">
        <span class="badge badge-accent">01 / Challenge & Context</span>
      </div>
    </div>

    <div class="slide-body">
      <div class="two-col-grid">
        <div class="content-card">
          <div>
            <div class="section-tag">Problem Framing</div>
            <div class="section-heading">The Challenge & Friction Points</div>
          </div>
          <p class="content-text">${p.challenge}</p>

          <div style="margin-top: auto;">
            <div class="content-card-title" style="margin-bottom: 8px;">
              <span>✦</span> Target User Segments & Stakeholders
            </div>
            <div class="persona-strip">
              ${p.personas.map(per => `
                <div class="persona-item">
                  <span class="persona-title">${per.title}</span>
                  <span class="persona-desc">${per.desc}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="content-card">
          <div>
            <div class="section-tag">Strategic Foundation</div>
            <div class="section-heading">Core Design Principles</div>
          </div>

          <div class="principles-list">
            ${p.principles.map(pr => `
              <div class="principle-box">
                <div class="principle-head">
                  <span class="principle-num">${pr.num}</span>
                  <span class="principle-name">${pr.title}</span>
                </div>
                <p class="principle-desc">${pr.desc}</p>
              </div>
            `).join('')}

            <div class="highlight-callout">
              <span class="callout-label">Strategic Insight</span>
              <span class="callout-body">"${p.strategicInsight}"</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="footer-left">
        <span>${p.title}</span>
        <span class="footer-dot"></span>
        <span>Discovery & Framework</span>
      </div>
      <div class="footer-right">SLIDE 02 / 06</div>
    </div>
  </div>

  <!-- ==================== SLIDE 3: ARCHITECTURE & INTERACTION FLOWS ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="designer-brand">
        <div class="avatar-badge">JA</div>
        <div>
          <span class="designer-name">JIMMY ARIKAWE</span>
          <span class="designer-title">· Systems Design & Information Architecture</span>
        </div>
      </div>
      <div class="header-badges">
        <span class="badge badge-accent">02 / Systems Architecture</span>
      </div>
    </div>

    <div class="slide-body">
      <div class="arch-layout">
        <div>
          <div class="section-tag">System Blueprints</div>
          <div class="section-heading">${p.architecture.title}</div>
        </div>

        <div class="arch-visual-area">
          <div class="diagram-frame">
            <img src="${archDiag}" alt="${p.architecture.title}" />
            <div class="diagram-caption">${p.architecture.caption}</div>
          </div>
          ${archSecDiag ? `
            <div class="diagram-frame">
              <img src="${archSecDiag}" alt="Secondary Blueprint" />
              <div class="diagram-caption">${p.architecture.secondaryCaption}</div>
            </div>
          ` : ''}
        </div>

        <div class="arch-cards-strip">
          ${p.architecture.cards.map(c => `
            <div class="arch-card">
              <span class="arch-card-title">${c.title}</span>
              <p class="arch-card-desc">${c.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="footer-left">
        <span>${p.title}</span>
        <span class="footer-dot"></span>
        <span>Interaction State Machine</span>
      </div>
      <div class="footer-right">SLIDE 03 / 06</div>
    </div>
  </div>

  <!-- ==================== SLIDE 4: CORE SOLUTION & INTERFACE SHOWCASE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="designer-brand">
        <div class="avatar-badge">JA</div>
        <div>
          <span class="designer-name">JIMMY ARIKAWE</span>
          <span class="designer-title">· High-Fidelity UI & Interaction Design</span>
        </div>
      </div>
      <div class="header-badges">
        <span class="badge badge-accent">03 / Core Solution</span>
      </div>
    </div>

    <div class="slide-body">
      <div style="margin-bottom: 12px;">
        <div class="section-tag">Interface Highlights</div>
        <div class="section-heading">Core Product Experience & Touchpoints</div>
      </div>

      <div class="features-grid">
        <div class="feature-column">
          <div class="feature-img-box">
            <img src="${feat1Img}" alt="${p.features[0]?.title}" />
          </div>
          <div class="feature-text-box">
            <div class="feature-title">${p.features[0]?.title}</div>
            <p class="feature-desc">${p.features[0]?.desc}</p>
          </div>
        </div>

        <div class="feature-column">
          <div class="feature-img-box">
            <img src="${feat2Img}" alt="${p.features[1]?.title}" />
          </div>
          <div class="feature-text-box">
            <div class="feature-title">${p.features[1]?.title}</div>
            <p class="feature-desc">${p.features[1]?.desc}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="footer-left">
        <span>${p.title}</span>
        <span class="footer-dot"></span>
        <span>Key Experience Screens</span>
      </div>
      <div class="footer-right">SLIDE 04 / 06</div>
    </div>
  </div>

  <!-- ==================== SLIDE 5: DESIGN SYSTEM & TECHNICAL EXECUTION ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="designer-brand">
        <div class="avatar-badge">JA</div>
        <div>
          <span class="designer-name">JIMMY ARIKAWE</span>
          <span class="designer-title">· Design Systems & Design Engineering</span>
        </div>
      </div>
      <div class="header-badges">
        <span class="badge badge-accent">04 / Design Systems & Engineering</span>
      </div>
    </div>

    <div class="slide-body">
      <div class="ds-layout">
        <div class="ds-left">
          <div>
            <div class="section-tag">Scalable Foundations</div>
            <div class="section-heading">Tokens, States & Parity</div>
            <p class="content-text">${p.designSystem.desc}</p>
          </div>

          <div class="ds-spec-card">
            <div class="ds-spec-title"><span>✦</span> System Specifications</div>
            <div class="ds-spec-list">
              ${p.designSystem.highlights.map(h => `
                <div class="ds-spec-item">${h}</div>
              `).join('')}
            </div>
          </div>

          <div class="engineering-bridge-card">
            <div class="bridge-title">The Design Engineer Advantage</div>
            <p class="bridge-desc">
              Bridging the gap between Figma and production front-end code (React, Next.js, TypeScript). Zero guesswork during developer handoff, pixel-perfect responsive execution, and bulletproof component architectures.
            </p>
          </div>
        </div>

        <div class="ds-right">
          <div class="ds-img-frame">
            <img src="${ds1Img}" alt="Design System Preview 1" />
          </div>
          <div class="ds-img-frame">
            <img src="${ds2Img}" alt="Design System Preview 2" />
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="footer-left">
        <span>${p.title}</span>
        <span class="footer-dot"></span>
        <span>Design System Architecture</span>
      </div>
      <div class="footer-right">SLIDE 05 / 06</div>
    </div>
  </div>

  <!-- ==================== SLIDE 6: RESULTS, TAKEAWAYS & UPWORK CTA ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="designer-brand">
        <div class="avatar-badge">JA</div>
        <div>
          <span class="designer-name">JIMMY ARIKAWE</span>
          <span class="designer-title">· Measurable Impact & Client Collaboration</span>
        </div>
      </div>
      <div class="header-badges">
        <span class="badge badge-emerald">★ Available for Contract on Upwork</span>
      </div>
    </div>

    <div class="slide-body">
      <div class="results-layout">
        <div>
          <div class="section-tag">Business & User Impact</div>
          <div class="section-heading">Shipped Outcomes & Measured Results</div>
        </div>

        <div class="impact-hero-strip">
          ${p.metrics.map(m => `
            <div class="impact-box">
              <span class="impact-num">${m.value}</span>
              <span class="impact-label">${m.label}</span>
            </div>
          `).join('')}
        </div>

        <div class="outcome-banner">
          <div class="outcome-title"><span>✦</span> Validated Project Milestone</div>
          <p class="outcome-desc">${p.outcomes}</p>
        </div>

        <div class="bottom-cards-grid">
          <div class="takeaways-card">
            <div class="takeaways-title"><span>✦</span> Senior Product Reflections</div>
            <p class="takeaways-text">"${p.takeaways}"</p>
          </div>

          <div class="cta-card">
            <div class="cta-header">
              <div class="cta-designer">
                <div class="cta-avatar">JA</div>
                <div>
                  <div class="cta-name">Jimmy Arikawe</div>
                  <div class="cta-sub">Senior Product Designer & Design Engineer · Ex-Pentagram</div>
                </div>
              </div>
              <span class="badge badge-emerald">Available on Upwork</span>
            </div>

            <div class="cta-services-list">
              <div>End-to-End Product Design (0 to 1)</div>
              <div>Complex SaaS & Enterprise Dashboards</div>
              <div>Design Systems & Component Libraries</div>
              <div>Design Engineering (React / Next.js / TS)</div>
            </div>

            <div class="cta-links-strip">
              <span class="cta-link-item">🌐 jimmyarikawe.com</span>
              <span class="cta-link-item">✉️ hi@jimmyarikawe.com</span>
              <span class="cta-link-item">💼 linkedin.com/in/jimmyarikawe</span>
              <span class="cta-link-item">⚡ Upwork Direct Contract</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="footer-left">
        <span>${p.title}</span>
        <span class="footer-dot"></span>
        <span>Results & Collaboration</span>
        <span class="footer-dot"></span>
        <span>jimmyarikawe.com</span>
      </div>
      <div class="footer-right">SLIDE 06 / 06</div>
    </div>
  </div>

</body>
</html>`;
}

console.log('Starting generation of all 6 Upwork-ready PDF case studies...');

for (const p of projects) {
  console.log(`\n========================================`);
  console.log(`Generating case study for: ${p.title} (${p.slug})...`);
  const htmlContent = generateHTML(p);
  const tempHtmlPath = path.join(outDir, `${p.slug}.html`);
  fs.writeFileSync(tempHtmlPath, htmlContent);

  const outPdfPath = path.join(outDir, p.filename);
  const publicPdfPath = path.join(publicOutDir, p.filename);

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const cmd = `"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-background --print-to-pdf="${outPdfPath}" "file://${tempHtmlPath}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });
    fs.copyFileSync(outPdfPath, publicPdfPath);
    const sizeKb = Math.round(fs.statSync(outPdfPath).size / 1024);
    console.log(`✓ Successfully generated: ${p.filename} (${sizeKb} KB)`);
    console.log(`  Saved to: ${outPdfPath}`);
    console.log(`  Mirrored to: ${publicPdfPath}`);
  } catch (err) {
    console.error(`✗ Error generating ${p.title}:`, err.message);
  } finally {
    if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
  }
}

console.log('\n========================================');
console.log('All 6 PDF case studies successfully created!');
