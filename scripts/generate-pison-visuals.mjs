import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = '/Users/jimmyarikawe/Jimmy\'s portfolio';
const outDir = path.join(baseDir, 'public/images/work/pison-labs');
const tempDir = path.join(baseDir, 'scripts/temp_visuals');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function renderHtmlToPng(htmlContent, outputPngPath, width = 1920, height = 1080) {
  const tempHtmlPath = path.join(tempDir, `visual-${Date.now()}-${Math.random().toString(36).slice(2, 7)}.html`);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');

  try {
    const cmd = `"${chromePath}" --headless=new --virtual-time-budget=2000 --window-size=${width},${height} --force-device-scale-factor=2 --screenshot="${outputPngPath}" "file://${tempHtmlPath}"`;
    execSync(cmd, { stdio: 'pipe' });
    console.log(`✓ Generated: ${path.basename(outputPngPath)} (${width}x${height})`);
  } catch (err) {
    console.error(`✗ Error generating ${path.basename(outputPngPath)}:`, err.message);
  } finally {
    if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
  }
}

// Common styles matching Jimmy's design tokens and Pison Labs warm obsidian & technical aesthetic
const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');
  
  :root {
    --bg: #09090b;
    --surface: #121215;
    --surface-elevated: #18181c;
    --border: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.16);
    --text-primary: #ffffff;
    --text-muted: #9ea2b0;
    --text-faint: #636674;
    --accent-emerald: #10b981;
    --accent-emerald-glow: rgba(16, 185, 129, 0.15);
    --accent-blue: #3b82f6;
    --accent-blue-glow: rgba(59, 130, 246, 0.15);
    --accent-amber: #f59e0b;
    --accent-amber-glow: rgba(245, 158, 11, 0.15);
    --accent-purple: #8b5cf6;
    --font-sans: 'Geist', 'Inter', -apple-system, sans-serif;
    --font-mono: 'Geist Mono', monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: var(--bg);
    color: var(--text-primary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .canvas {
    width: 100%;
    height: 100%;
    padding: 48px 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.04) 0%, transparent 60%),
                radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
                #09090b;
  }

  .header-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    padding-bottom: 20px;
  }

  .brand-chip {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
  }

  .brand-logo-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent-emerald);
    box-shadow: 0 0 12px var(--accent-emerald);
  }

  .tag-pill {
    padding: 6px 14px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-muted);
    letter-spacing: 0.04em;
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
  }
`;

// 00: HERO COVER MOCKUP
function generateHero() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .hero-grid {
        display: grid;
        grid-template-columns: 280px 1fr 340px;
        gap: 24px;
        height: calc(100% - 80px);
        margin-top: 24px;
      }
      .sidebar {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .main-stage {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
      }
      .aside-inspector {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 14px;
        color: var(--text-muted);
        font-weight: 500;
      }
      .nav-item.active {
        background: var(--surface-elevated);
        color: #fff;
        border: 1px solid var(--border);
      }
      .wave-container {
        height: 160px;
        background: rgba(0,0,0,0.3);
        border: 1px solid var(--border);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 0 24px;
        position: relative;
      }
      .bar {
        width: 4px;
        background: linear-gradient(180deg, #3b82f6, #10b981);
        border-radius: 3px;
      }
      .badge-live {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--accent-emerald-glow);
        color: var(--accent-emerald);
        border: 1px solid rgba(16, 185, 129, 0.3);
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 11px;
        font-family: var(--font-mono);
      }
      .live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--accent-emerald);
      }
      .control-slider {
        margin-top: 14px;
      }
      .slider-label {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--text-muted);
        margin-bottom: 6px;
        font-family: var(--font-mono);
      }
      .slider-track {
        height: 6px;
        background: rgba(255,255,255,0.08);
        border-radius: 3px;
        position: relative;
      }
      .slider-fill {
        height: 100%;
        border-radius: 3px;
        background: #3b82f6;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Labs · Voice Intelligence Layer for Africa</span>
          </div>
          <div style="display:flex; gap:12px;">
            <span class="tag-pill">20 African Languages Mapped</span>
            <span class="tag-pill">Acoustic & Cultural AI</span>
            <span class="tag-pill">Production Architecture</span>
          </div>
        </div>

        <div class="hero-grid">
          <!-- Sidebar -->
          <div class="sidebar">
            <div style="display:flex; align-items:center; gap:10px; padding-bottom:14px; border-bottom:1px solid var(--border);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#10b981" stroke-width="2"/><path d="M8 12h8M12 8v8" stroke="#10b981" stroke-width="2"/></svg>
              <span style="font-weight:600; font-size:16px;">Pison Studio</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:6px;">
              <div class="nav-item active">
                <span>🎙️</span> <span>Voice Studio (TTS)</span>
              </div>
              <div class="nav-item">
                <span>🌐</span> <span>Cultural Translation</span>
              </div>
              <div class="nav-item">
                <span>🎬</span> <span>Video Dubbing</span>
              </div>
              <div class="nav-item">
                <span>👂</span> <span>Speech to Text</span>
              </div>
              <div class="nav-item">
                <span>🤖</span> <span>AI Voice Agents</span>
              </div>
              <div class="nav-item">
                <span>👥</span> <span>Contributor Network</span>
              </div>
              <div class="nav-item">
                <span>🛡️</span> <span>Consent & Rights</span>
              </div>
            </div>

            <div style="margin-top:auto; padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:4px;">COMMUNITY CORPUS</div>
              <div style="font-size:14px; font-weight:600; color:var(--text-primary);">42,800+ Verified Audio Hours</div>
              <div style="font-size:12px; color:var(--accent-emerald); margin-top:4px;">+14.2% peer validation rate</div>
            </div>
          </div>

          <!-- Main Stage -->
          <div class="main-stage">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <div>
                  <span class="badge-live"><span class="live-dot"></span> NEURAL SYNTHESIS ONLINE</span>
                  <h1 style="font-size:26px; font-weight:600; margin-top:8px; letter-spacing:-0.02em;">Yorùbá Voice Engine · Ọ̀yọ́ Conversational</h1>
                </div>
                <div style="display:flex; gap:10px;">
                  <span class="tag-pill" style="border-color:rgba(59,130,246,0.4); color:#93c5fd;">Model: Pison-Acoustic-v2.4</span>
                </div>
              </div>

              <!-- Script Box -->
              <div style="background:var(--surface-elevated); border:1px solid var(--border); border-radius:14px; padding:20px; font-size:18px; line-height:1.6; color:#f3f4f6;">
                <span style="color:var(--text-faint); font-family:var(--font-mono); font-size:12px; display:block; margin-bottom:8px;">INPUT SCRIPT (YORÙBÁ · TONAL DIACRITICS ACTIVE)</span>
                "Ẹ káàárọ̀ gbogbo ilé. Ẹ kú oríire àti ìṣẹ́gun lónìí. A lérò pé ọjọ́ yín yóò dára púpọ̀ síi."
                <div style="margin-top:14px; display:flex; gap:8px;">
                  <span style="font-size:11px; font-family:var(--font-mono); padding:3px 8px; background:rgba(255,255,255,0.06); border-radius:6px; color:#cbd5e1;">Honorific Plural: Ẹ</span>
                  <span style="font-size:11px; font-family:var(--font-mono); padding:3px 8px; background:rgba(255,255,255,0.06); border-radius:6px; color:#cbd5e1;">Dialect: Central Oyo</span>
                  <span style="font-size:11px; font-family:var(--font-mono); padding:3px 8px; background:rgba(16,185,129,0.1); border-radius:6px; color:#6ee7b7;">Tonal Accuracy: 99.4%</span>
                </div>
              </div>
            </div>

            <!-- Waveform Generation Stage -->
            <div style="margin:24px 0;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span style="font-size:13px; font-family:var(--font-mono); color:var(--text-muted);">ACOUSTIC SPECTRAL DENSITY · 24kHz HIGH-FIDELITY</span>
                <span style="font-size:12px; font-family:var(--font-mono); color:var(--accent-emerald);">Latency: 182ms · RTF 0.08</span>
              </div>
              <div class="wave-container">
                ${Array.from({ length: 64 }).map((_, i) => {
                  const h = Math.sin(i * 0.2) * 45 + Math.cos(i * 0.5) * 35 + 50;
                  return `<div class="bar" style="height:${Math.max(12, Math.min(130, h))}px; opacity:${0.4 + (i/64)*0.6}"></div>`;
                }).join('')}
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:16px;">
                <div style="width:48px; height:48px; border-radius:50%; background:#fff; color:#000; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:bold; cursor:pointer;">
                  ▶
                </div>
                <div>
                  <div style="font-size:14px; font-weight:600;">Amina · Warm Conversational</div>
                  <div style="font-size:12px; color:var(--text-muted); font-family:var(--font-mono);">00:04.2 / 00:04.2 · Lossless WAV</div>
                </div>
              </div>
              <div style="display:flex; gap:12px;">
                <button style="padding:10px 20px; background:var(--surface-elevated); border:1px solid var(--border); color:#fff; border-radius:30px; font-size:14px; font-weight:500;">Regenerate</button>
                <button style="padding:10px 24px; background:#fff; border:1px solid #fff; color:#000; border-radius:30px; font-size:14px; font-weight:600;">Export Voice Artifact</button>
              </div>
            </div>
          </div>

          <!-- Aside Inspector -->
          <div class="aside-inspector">
            <div style="font-size:14px; font-weight:600; padding-bottom:12px; border-bottom:1px solid var(--border);">
              Voice Nuance Parameters
            </div>

            <div>
              <div class="slider-label"><span>SPEAKING RATE</span><span>1.02x</span></div>
              <div class="slider-track"><div class="slider-fill" style="width:51%;"></div></div>
            </div>

            <div>
              <div class="slider-label"><span>ACOUSTIC STABILITY</span><span>88%</span></div>
              <div class="slider-track"><div class="slider-fill" style="width:88%; background:#10b981;"></div></div>
            </div>

            <div>
              <div class="slider-label"><span>EMOTIONAL INTENSITY</span><span>Warm / Receptive</span></div>
              <div class="slider-track"><div class="slider-fill" style="width:72%; background:#8b5cf6;"></div></div>
            </div>

            <div>
              <div class="slider-label"><span>FORMALITY REGISTER</span><span>Elder Respect (Àgbà)</span></div>
              <div class="slider-track"><div class="slider-fill" style="width:95%; background:#f59e0b;"></div></div>
            </div>

            <div style="margin-top:auto; padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:6px;">PROVENANCE & RIGHTS</div>
              <div style="font-size:13px; font-weight:500; color:#e2e8f0;">Verified Voice Contributor</div>
              <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">ID: #VOC-NG-7702 · Commercial Royalty Active</div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '00-pison-hero.png'));
}

// 01: ECOSYSTEM ARCHITECTURE DIAGRAM
function generateEcosystem() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .eco-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
        margin-top: 36px;
      }
      .eco-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 280px;
        position: relative;
      }
      .eco-card::after {
        content: '→';
        position: absolute;
        right: -12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color: var(--text-faint);
        z-index: 10;
      }
      .eco-card:last-child::after { display: none; }
      .layer-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 32px;
      }
      .layer-card {
        background: var(--surface-elevated);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 24px;
      }
      .layer-badge {
        font-family: var(--font-mono);
        font-size: 11px;
        padding: 4px 10px;
        border-radius: 6px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        display: inline-block;
        margin-bottom: 12px;
      }
      .feature-pill {
        font-size: 13px;
        color: var(--text-muted);
        padding: 8px 12px;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 8px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Labs · System Architecture & Value Loop</span>
          </div>
          <span class="tag-pill">End-to-End Infrastructure Stack</span>
        </div>

        <div style="margin-top:20px;">
          <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); text-transform:uppercase; letter-spacing:0.06em;">01 / SYSTEM ECOSYSTEM FLOW</div>
          <div style="font-size:22px; font-weight:600; margin-top:4px;">From Community Speakers to Global Enterprise Applications</div>
          
          <div class="eco-grid">
            <div class="eco-card">
              <div>
                <span style="font-size:24px;">👥</span>
                <h3 style="font-size:16px; font-weight:600; margin-top:12px;">01. Native Speakers</h3>
                <p style="font-size:13px; color:var(--text-muted); margin-top:8px; line-height:1.5;">2,000+ African language speakers across regional hubs with authentic phonology and cultural context.</p>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--accent-emerald);">Lagos · Nairobi · Accra · Dakar</div>
            </div>

            <div class="eco-card">
              <div>
                <span style="font-size:24px;">📊</span>
                <h3 style="font-size:16px; font-weight:600; margin-top:12px;">02. Curated Voice Data</h3>
                <p style="font-size:13px; color:var(--text-muted); margin-top:8px; line-height:1.5;">Ethically sourced, consensus-validated audio recordings paired with dialect metadata and explicit consent.</p>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:#93c5fd;">7 Granular Consent Scopes</div>
            </div>

            <div class="eco-card">
              <div>
                <span style="font-size:24px;">🧠</span>
                <h3 style="font-size:16px; font-weight:600; margin-top:12px;">03. AI Models</h3>
                <p style="font-size:13px; color:var(--text-muted); margin-top:8px; line-height:1.5;">Specialized tonal acoustic models, code-switching ASR, and culturally grounded translation transformers.</p>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:#c084fc;">Acoustic + Cultural Embeddings</div>
            </div>

            <div class="eco-card">
              <div>
                <span style="font-size:24px;">⚡</span>
                <h3 style="font-size:16px; font-weight:600; margin-top:12px;">04. Applications</h3>
                <p style="font-size:13px; color:var(--text-muted); margin-top:8px; line-height:1.5;">Creator studios, real-time voice synthesis, video dubbing suites, and low-latency voice agents.</p>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:#fde047;">Studio & Developer APIs</div>
            </div>

            <div class="eco-card">
              <div>
                <span style="font-size:24px;">💼</span>
                <h3 style="font-size:16px; font-weight:600; margin-top:12px;">05. Sustainable Businesses</h3>
                <p style="font-size:13px; color:var(--text-muted); margin-top:8px; line-height:1.5;">Banks, telcos, healthcare services, and media houses communicating naturally with African users.</p>
              </div>
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--accent-emerald);">Fair Revenue Sharing Loop</div>
            </div>
          </div>
        </div>

        <div style="margin-top:28px;">
          <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); text-transform:uppercase; letter-spacing:0.06em;">02 / PLATFORM FUNCTIONAL LAYERS</div>
          <div class="layer-grid">
            <div class="layer-card">
              <span class="layer-badge" style="background:rgba(59,130,246,0.15); color:#60a5fa;">LAYER 01 · CREATE</span>
              <div class="feature-pill"><span>🔊</span> <span>Text to Speech (Tonal TTS)</span></div>
              <div class="feature-pill"><span>🎙️</span> <span>Voice Generation & Nuance</span></div>
              <div class="feature-pill"><span>🧬</span> <span>Ethical Voice Cloning</span></div>
              <div class="feature-pill"><span>🎬</span> <span>Automated Multilingual Dubbing</span></div>
            </div>

            <div class="layer-card">
              <span class="layer-badge" style="background:rgba(16,185,129,0.15); color:#34d399;">LAYER 02 · UNDERSTAND</span>
              <div class="feature-pill"><span>📝</span> <span>Speech to Text (ASR)</span></div>
              <div class="feature-pill"><span>🌍</span> <span>Dialect & Language Detection</span></div>
              <div class="feature-pill"><span>🔀</span> <span>Code-Switching Disambiguation</span></div>
              <div class="feature-pill"><span>💡</span> <span>Cultural AI & Context Analysis</span></div>
            </div>

            <div class="layer-card">
              <span class="layer-badge" style="background:rgba(139,92,246,0.15); color:#a78bfa;">LAYER 03 · BUILD</span>
              <div class="feature-pill"><span>🤖</span> <span>Autonomous AI Voice Agents</span></div>
              <div class="feature-pill"><span>🔌</span> <span>Low-Latency Streaming APIs</span></div>
              <div class="feature-pill"><span>📱</span> <span>Mobile & Web SDKs</span></div>
              <div class="feature-pill"><span>⚙️</span> <span>Enterprise Webhook Pipelines</span></div>
            </div>

            <div class="layer-card">
              <span class="layer-badge" style="background:rgba(245,158,11,0.15); color:#fbbf24;">LAYER 04 · CONTRIBUTE</span>
              <div class="feature-pill"><span>📱</span> <span>Mobile Speech Data Recording</span></div>
              <div class="feature-pill"><span>✅</span> <span>Pronunciation & Peer Validation</span></div>
              <div class="feature-pill"><span>🔍</span> <span>Cultural Nuance Verification</span></div>
              <div class="feature-pill"><span>💰</span> <span>Transparent Contributor Rewards</span></div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '01-pison-ecosystem-architecture.png'));
}

// 02: INFORMATION ARCHITECTURE
function generateIA() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .tree-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 28px;
        margin-top: 40px;
      }
      .node-root {
        padding: 16px 36px;
        background: #fff;
        color: #000;
        font-weight: 600;
        font-size: 16px;
        border-radius: 30px;
        box-shadow: 0 0 24px rgba(255,255,255,0.1);
      }
      .node-row {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
      }
      .node-branch {
        flex: 1;
        min-width: 180px;
        max-width: 220px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .node-branch-title {
        font-size: 13px;
        font-family: var(--font-mono);
        color: var(--text-muted);
        text-transform: uppercase;
        border-bottom: 1px solid var(--border);
        padding-bottom: 8px;
      }
      .node-leaf {
        font-size: 13px;
        color: #e2e8f0;
        padding: 6px 10px;
        background: var(--surface-elevated);
        border-radius: 6px;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Labs · Product Information Architecture</span>
          </div>
          <span class="tag-pill">Progressive Complexity & Separation of Concerns</span>
        </div>

        <div style="margin-top:20px;">
          <h2 style="font-size:24px; font-weight:600;">Structured for Visual Creators, Developers and Language Communities</h2>
          <p style="font-size:14px; color:var(--text-muted); margin-top:6px; max-width:70ch;">
            One cohesive platform supporting simple 1-click generation while progressively exposing deep acoustic controls, cultural validation rules, and low-level API infrastructure.
          </p>
        </div>

        <div class="tree-container">
          <div class="node-root">
            Pison Labs Platform Root
          </div>

          <div style="width:2px; height:24px; background:var(--border);"></div>

          <div class="node-row">
            <div class="node-branch">
              <div class="node-branch-title">01 · Create Studio</div>
              <div class="node-leaf">Text to Speech</div>
              <div class="node-leaf">Voice Synthesis</div>
              <div class="node-leaf">Voice Cloning Studio</div>
              <div class="node-leaf">Video Dubbing Suite</div>
            </div>

            <div class="node-branch">
              <div class="node-branch-title">02 · Understand</div>
              <div class="node-leaf">Speech to Text</div>
              <div class="node-leaf">Cultural Translation</div>
              <div class="node-leaf">Language Detection</div>
              <div class="node-leaf">Dialect Code-Switching</div>
            </div>

            <div class="node-branch">
              <div class="node-branch-title">03 · Cultural AI</div>
              <div class="node-leaf">Honorifics Engine</div>
              <div class="node-leaf">Contextual Idioms</div>
              <div class="node-leaf">Social Seniority Rules</div>
              <div class="node-leaf">Ethnographic Sources</div>
            </div>

            <div class="node-branch">
              <div class="node-branch-title">04 · Developer Core</div>
              <div class="node-leaf">AI Voice Agents</div>
              <div class="node-leaf">WebSocket Streaming</div>
              <div class="node-leaf">API Keys & Quotas</div>
              <div class="node-leaf">Latency Benchmarks</div>
            </div>

            <div class="node-branch">
              <div class="node-branch-title">05 · Contributor Portal</div>
              <div class="node-leaf">Mobile Recording Queue</div>
              <div class="node-leaf">Pronunciation Review</div>
              <div class="node-leaf">Dialect Validation</div>
              <div class="node-leaf">Consent & Data Rights</div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '02-pison-information-architecture.png'));
}

// 03: THE PISON WORKSPACE DASHBOARD
function generateWorkspace() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .ws-container {
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 24px;
        height: calc(100% - 70px);
        margin-top: 20px;
      }
      .recent-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 12px;
      }
      .recent-table th {
        text-align: left;
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-faint);
        padding: 8px 12px;
        border-bottom: 1px solid var(--border);
      }
      .recent-table td {
        padding: 12px;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        font-size: 13px;
      }
      .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 11px;
        font-family: var(--font-mono);
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Workspace · Executive Console</span>
          </div>
          <div style="display:flex; gap:12px;">
            <span class="tag-pill">Workspace: Lagos Product Ops</span>
            <span class="tag-pill" style="color:#34d399;">Quota: 92% Available</span>
          </div>
        </div>

        <div class="ws-container">
          <div style="display:flex; flex-direction:column; gap:20px;">
            <!-- Quick Actions -->
            <div class="card">
              <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:12px;">QUICK CAPABILITIES</div>
              <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px;">
                <div style="padding:14px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:10px;">
                  <div style="font-size:20px; margin-bottom:6px;">🎙️</div>
                  <div style="font-size:14px; font-weight:600;">Text to Speech</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">Generate 20+ dialects</div>
                </div>
                <div style="padding:14px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:10px;">
                  <div style="font-size:20px; margin-bottom:6px;">🌍</div>
                  <div style="font-size:14px; font-weight:600;">Cultural Translate</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">Honorifics & context</div>
                </div>
                <div style="padding:14px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:10px;">
                  <div style="font-size:20px; margin-bottom:6px;">🎬</div>
                  <div style="font-size:14px; font-weight:600;">Dub Video</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">Lip & duration sync</div>
                </div>
                <div style="padding:14px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:10px;">
                  <div style="font-size:20px; margin-bottom:6px;">🤖</div>
                  <div style="font-size:14px; font-weight:600;">Deploy Agent</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">Conversational bots</div>
                </div>
              </div>
            </div>

            <!-- Recent Projects Table -->
            <div class="card" style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint);">ACTIVE ENTERPRISE PROJECTS</div>
                <span style="font-size:12px; color:var(--text-muted);">View all 24 projects →</span>
              </div>
              <table class="recent-table">
                <thead>
                  <tr>
                    <th>PROJECT NAME</th>
                    <th>CAPABILITY</th>
                    <th>LANGUAGES</th>
                    <th>LATENCY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight:600; color:#fff;">Lagos Retail Bank Voice Agent</td>
                    <td style="color:var(--text-muted);">AI Voice Agent</td>
                    <td><span class="tag-pill" style="padding:2px 8px; font-size:10px;">pcm</span> <span class="tag-pill" style="padding:2px 8px; font-size:10px;">yo</span></td>
                    <td style="font-family:var(--font-mono); color:#10b981;">184ms</td>
                    <td><span class="status-pill" style="background:rgba(16,185,129,0.1); color:#34d399;">● Live</span></td>
                  </tr>
                  <tr>
                    <td style="font-weight:600; color:#fff;">Yorùbá Health Outreach Dubbing</td>
                    <td style="color:var(--text-muted);">Video Dubbing</td>
                    <td><span class="tag-pill" style="padding:2px 8px; font-size:10px;">yo</span> <span class="tag-pill" style="padding:2px 8px; font-size:10px;">en</span></td>
                    <td style="font-family:var(--font-mono); color:#93c5fd;">Batch (0.4x RT)</td>
                    <td><span class="status-pill" style="background:rgba(59,130,246,0.1); color:#60a5fa;">● Rendering</span></td>
                  </tr>
                  <tr>
                    <td style="font-weight:600; color:#fff;">East Africa Agritech IVR Flow</td>
                    <td style="color:var(--text-muted);">Speech to Text</td>
                    <td><span class="tag-pill" style="padding:2px 8px; font-size:10px;">sw</span></td>
                    <td style="font-family:var(--font-mono); color:#10b981;">162ms</td>
                    <td><span class="status-pill" style="background:rgba(16,185,129,0.1); color:#34d399;">● Live</span></td>
                  </tr>
                  <tr>
                    <td style="font-weight:600; color:#fff;">Kano Market Audio Campaign</td>
                    <td style="color:var(--text-muted);">Text to Speech</td>
                    <td><span class="tag-pill" style="padding:2px 8px; font-size:10px;">ha</span></td>
                    <td style="font-family:var(--font-mono); color:#f59e0b;">Cached</td>
                    <td><span class="status-pill" style="background:rgba(245,158,11,0.1); color:#fbbf24;">● Review</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Right Sidebar Stats -->
          <div style="display:flex; flex-direction:column; gap:20px;">
            <div class="card">
              <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:12px;">LANGUAGE MODEL COVERAGE</div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
                <span>Yorùbá (Ọ̀yọ́ · Ìbàdàn · Lagos)</span>
                <span style="font-family:var(--font-mono); color:#10b981;">Production</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
                <span>Nigerian Pidgin (Lagos · Warri)</span>
                <span style="font-family:var(--font-mono); color:#10b981;">Production</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
                <span>Hausa (Kano · Zaria)</span>
                <span style="font-family:var(--font-mono); color:#10b981;">Production</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
                <span>Igbo (Owerri · Onitsha)</span>
                <span style="font-family:var(--font-mono); color:#10b981;">Production</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
                <span>Kiswahili (Kiunguja · Kimvita)</span>
                <span style="font-family:var(--font-mono); color:#10b981;">Production</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
                <span>Twi / Akan (Asante)</span>
                <span style="font-family:var(--font-mono); color:#60a5fa;">Beta</span>
              </div>
              <div style="display:flex; justify-content:space-between; font-size:13px;">
                <span>Amharic · isiZulu · Wolof</span>
                <span style="font-family:var(--font-mono); color:#fbbf24;">Research</span>
              </div>
            </div>

            <div class="card" style="flex:1;">
              <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:8px;">ETHICAL COMPLIANCE MONITOR</div>
              <div style="font-size:24px; font-weight:600; color:#10b981;">100%</div>
              <p style="font-size:12px; color:var(--text-muted); margin-top:4px;">All synthetic speech tracks verified against active contributor consent registries.</p>
              <div style="margin-top:16px; padding:12px; background:var(--surface-elevated); border-radius:8px; font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">
                Zero unconsented voice cloning tolerated under platform charter.
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '03-pison-workspace-dashboard.png'));
}

// 04: VOICE STUDIO (TTS)
function generateVoiceStudio() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .studio-grid {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 24px;
        height: calc(100% - 70px);
        margin-top: 20px;
      }
      .voice-card {
        padding: 14px;
        background: var(--surface-elevated);
        border: 1px solid var(--border);
        border-radius: 12px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      .voice-card.selected {
        border-color: #3b82f6;
        background: rgba(59,130,246,0.06);
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Voice Studio · High-Fidelity Speech Generation</span>
          </div>
          <span class="tag-pill">Target: Yorùbá (Ọ̀yọ́ Dialect)</span>
        </div>

        <div class="studio-grid">
          <!-- Voice Persona Selector -->
          <div class="card" style="display:flex; flex-direction:column;">
            <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:12px;">SELECT AFRICAN VOICE PERSONA</div>
            
            <div class="voice-card selected">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:600; font-size:15px; color:#fff;">Amina</span>
                <span class="tag-pill" style="padding:2px 8px; font-size:10px; color:#34d399;">Verified</span>
              </div>
              <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Female · Adult · Lagos/Oyo · Warm</div>
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint); margin-top:6px;">12.4k community generations</div>
            </div>

            <div class="voice-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:600; font-size:15px; color:#fff;">Tunde</span>
                <span class="tag-pill" style="padding:2px 8px; font-size:10px;">Pidgin</span>
              </div>
              <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Male · Young Adult · Conversational</div>
            </div>

            <div class="voice-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:600; font-size:15px; color:#fff;">Chinedu</span>
                <span class="tag-pill" style="padding:2px 8px; font-size:10px;">Igbo</span>
              </div>
              <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Male · Adult · Professional</div>
            </div>

            <div class="voice-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:600; font-size:15px; color:#fff;">Fatima</span>
                <span class="tag-pill" style="padding:2px 8px; font-size:10px;">Hausa</span>
              </div>
              <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Female · Adult · Kano Broadcast</div>
            </div>

            <div style="margin-top:auto; padding:12px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:10px;">
              <span style="font-size:12px; color:var(--text-muted);">Custom Cloned Voices (1) · Private Consent Protected</span>
            </div>
          </div>

          <!-- Studio Editor -->
          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <span style="font-size:14px; font-weight:600;">Text to Speech Scripting</span>
                <span style="font-size:12px; font-family:var(--font-mono); color:var(--text-muted);">Diacritics Parser: Active</span>
              </div>

              <div style="background:var(--surface-elevated); border:1px solid var(--border); border-radius:14px; padding:24px; min-height:180px; font-size:19px; line-height:1.7;">
                Kú àbọ̀ sí àwùjọ wa. Inú wa dùn láti ní yín pẹ̀lú wa lónìí. Ẹ jọ̀wọ́, ẹ fi ara balẹ̀ kí ẹ sì gbádùn ìrìn-àjò yín.
              </div>
            </div>

            <!-- Controls Grid -->
            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:16px; margin:20px 0;">
              <div style="padding:14px; background:var(--surface-elevated); border-radius:10px; border:1px solid var(--border);">
                <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">PACE</div>
                <div style="font-size:16px; font-weight:600; margin-top:4px;">1.00x Regular</div>
              </div>
              <div style="padding:14px; background:var(--surface-elevated); border-radius:10px; border:1px solid var(--border);">
                <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">STABILITY</div>
                <div style="font-size:16px; font-weight:600; margin-top:4px; color:#10b981;">92% Stable</div>
              </div>
              <div style="padding:14px; background:var(--surface-elevated); border-radius:10px; border:1px solid var(--border);">
                <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">EXPRESSION</div>
                <div style="font-size:16px; font-weight:600; margin-top:4px; color:#3b82f6;">Warm Welcoming</div>
              </div>
              <div style="padding:14px; background:var(--surface-elevated); border-radius:10px; border:1px solid var(--border);">
                <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">TONE REGISTER</div>
                <div style="font-size:16px; font-weight:600; margin-top:4px; color:#f59e0b;">Respectful (Àgbà)</div>
              </div>
            </div>

            <!-- Waveform & Actions -->
            <div style="background:var(--surface-elevated); border:1px solid var(--border); border-radius:14px; padding:20px; display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:16px;">
                <div style="width:44px; height:44px; border-radius:50%; background:#fff; color:#000; display:flex; align-items:center; justify-content:center; font-weight:bold;">▶</div>
                <div>
                  <div style="font-size:14px; font-weight:600;">Amina_Yoruba_Welcome_v2.wav</div>
                  <div style="font-size:12px; color:var(--text-muted); font-family:var(--font-mono);">00:06.4 · 24kHz Lossless · Latency 174ms</div>
                </div>
              </div>
              <div style="display:flex; gap:12px;">
                <button style="padding:10px 20px; background:transparent; border:1px solid var(--border); color:#fff; border-radius:24px; font-size:13px;">Save Preset</button>
                <button style="padding:10px 24px; background:#fff; color:#000; border:none; border-radius:24px; font-size:13px; font-weight:600;">Download Audio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '04-pison-voice-studio.png'));
}

// 05: VOICE IDENTITY DIMENSIONS
function generateVoiceDimensions() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .comparison-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        margin-top: 32px;
      }
      .dim-pill {
        padding: 12px 16px;
        background: var(--surface-elevated);
        border: 1px solid var(--border);
        border-radius: 12px;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Voice Architecture · Design Principle 01</span>
          </div>
          <span class="tag-pill">Voice Identity is Not Just Gender & Age</span>
        </div>

        <div style="margin-top:20px;">
          <h2 style="font-size:24px; font-weight:600;">Redefining Voice AI Primitives for African Linguistic Diversity</h2>
          <p style="font-size:14px; color:var(--text-muted); margin-top:4px;">Comparing the reductive Western AI voice model with Pison's multi-dimensional cultural taxonomy.</p>
        </div>

        <div class="comparison-grid">
          <!-- Traditional Model -->
          <div class="card" style="border-color:rgba(239, 68, 68, 0.2); background:rgba(239,68,68,0.02);">
            <div style="font-size:12px; font-family:var(--font-mono); color:#f87171; margin-bottom:12px;">TRADITIONAL COMMERCIAL VOICE AI (ELEVENLABS / GENERIC)</div>
            <h3 style="font-size:18px; font-weight:600; margin-bottom:16px;">Binary & Surface-Level Attributes</h3>
            
            <div class="dim-pill" style="opacity:0.6;">
              <span>Gender</span>
              <span style="font-family:var(--font-mono); color:var(--text-muted);">Male / Female</span>
            </div>
            <div class="dim-pill" style="opacity:0.6;">
              <span>Age Band</span>
              <span style="font-family:var(--font-mono); color:var(--text-muted);">Young / Middle / Old</span>
            </div>
            <div class="dim-pill" style="opacity:0.6;">
              <span>Global Accent Tag</span>
              <span style="font-family:var(--font-mono); color:var(--text-muted);">"African" (Monolithic token)</span>
            </div>
            <div class="dim-pill" style="opacity:0.4; border-style:dashed;">
              <span>Tonal Phonology</span>
              <span style="font-family:var(--font-mono); color:#f87171;">Unsupported</span>
            </div>
            <div class="dim-pill" style="opacity:0.4; border-style:dashed;">
              <span>Regional Dialect Nuance</span>
              <span style="font-family:var(--font-mono); color:#f87171;">Stripped</span>
            </div>
            <div class="dim-pill" style="opacity:0.4; border-style:dashed;">
              <span>Social Seniority / Respect</span>
              <span style="font-family:var(--font-mono); color:#f87171;">Absent</span>
            </div>
          </div>

          <!-- Pison Multi-Dimensional Model -->
          <div class="card" style="border-color:rgba(16, 185, 129, 0.3); background:rgba(16,185,129,0.02);">
            <div style="font-size:12px; font-family:var(--font-mono); color:#34d399; margin-bottom:12px;">PISON MULTI-DIMENSIONAL VOICE IDENTITY</div>
            <h3 style="font-size:18px; font-weight:600; margin-bottom:16px;">8-Dimensional African Acoustic Primitive</h3>

            <div class="dim-pill" style="border-color:rgba(16,185,129,0.2);">
              <span style="font-weight:500;">01. Language & Dialect</span>
              <span style="font-family:var(--font-mono); color:#6ee7b7;">Yorùbá · Ọ̀yọ́ Central</span>
            </div>
            <div class="dim-pill" style="border-color:rgba(16,185,129,0.2);">
              <span style="font-weight:500;">02. Regional Accent Inflection</span>
              <span style="font-family:var(--font-mono); color:#6ee7b7;">South-West Urban (Lagos)</span>
            </div>
            <div class="dim-pill" style="border-color:rgba(16,185,129,0.2);">
              <span style="font-weight:500;">03. Social Seniority (Àgbà)</span>
              <span style="font-family:var(--font-mono); color:#6ee7b7;">Elder Respect Plural (Ẹ)</span>
            </div>
            <div class="dim-pill" style="border-color:rgba(16,185,129,0.2);">
              <span style="font-weight:500;">04. Speaking Style</span>
              <span style="font-family:var(--font-mono); color:#6ee7b7;">Conversational / Welcoming</span>
            </div>
            <div class="dim-pill" style="border-color:rgba(16,185,129,0.2);">
              <span style="font-weight:500;">05. Tonal Contour Accuracy</span>
              <span style="font-family:var(--font-mono); color:#6ee7b7;">High / Mid / Low Diacritics</span>
            </div>
            <div class="dim-pill" style="border-color:rgba(16,185,129,0.2);">
              <span style="font-weight:500;">06. Code-Switching Handling</span>
              <span style="font-family:var(--font-mono); color:#6ee7b7;">Fluid English-Yorùbá Integration</span>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '05-voice-identity-dimensions.png'));
}

// 06: CULTURAL AI COMPARISON
function generateCulturalAI() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .trans-card {
        padding: 28px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 16px;
      }
      .annot-chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: var(--font-mono);
        font-size: 11px;
        padding: 4px 10px;
        border-radius: 6px;
        margin-right: 8px;
        margin-bottom: 8px;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Cultural AI · Translation is Not Localisation</span>
          </div>
          <span class="tag-pill">Case Study: English → Yorùbá Social Context</span>
        </div>

        <div style="margin-top:20px;">
          <h2 style="font-size:24px; font-weight:600;">How Pison Solves the Respect and Seniority Gap</h2>
          <p style="font-size:14px; color:var(--text-muted); margin-top:4px;">Literal translation breaks cultural norms in African communication. Pison models social seniority and kinship semantics.</p>
        </div>

        <!-- English Source Input -->
        <div class="card" style="margin-top:24px; background:var(--surface-elevated);">
          <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint); display:block; margin-bottom:6px;">ENGLISH SOURCE INPUT PROMPT (ADDRESSING AN ELDER)</span>
          <div style="font-size:20px; font-weight:500; color:#fff;">
            "Good morning father. We are very happy to welcome your family into our community today."
          </div>
        </div>

        <!-- Comparative Side by Side -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:24px;">
          <!-- Literal Translation -->
          <div class="trans-card" style="border-color:rgba(239, 68, 68, 0.25);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span style="font-size:12px; font-family:var(--font-mono); color:#f87171;">LITERAL MACHINE TRANSLATION (GENERIC LLM)</span>
              <span class="tag-pill" style="color:#f87171; border-color:rgba(239,68,68,0.2);">Culturally Fractured</span>
            </div>

            <div style="font-size:18px; line-height:1.6; color:#e2e8f0; font-weight:500;">
              "Ó dáa àárọ̀ bàbá. Inú wa dùn láti gbà ẹbí rẹ sí àwùjọ wa lónìí."
            </div>

            <div style="margin-top:20px; border-top:1px solid var(--border); padding-top:16px;">
              <div class="annot-chip" style="background:rgba(239,68,68,0.1); color:#fca5a5;">❌ Casual "Ó dáa" greeting</div>
              <div class="annot-chip" style="background:rgba(239,68,68,0.1); color:#fca5a5;">❌ Informal pronoun "rẹ" instead of honorific "yín"</div>
              <div class="annot-chip" style="background:rgba(239,68,68,0.1); color:#fca5a5;">❌ Mechanical "gbà" (receive) misses hospitality</div>
            </div>
          </div>

          <!-- Culturally Adapted Translation -->
          <div class="trans-card" style="border-color:rgba(16, 185, 129, 0.3); background:rgba(16,185,129,0.02);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span style="font-size:12px; font-family:var(--font-mono); color:#34d399;">CULTURALLY ADAPTED (PISON CULTURAL AI)</span>
              <span class="tag-pill" style="color:#34d399; border-color:rgba(16,185,129,0.3);">Context Validated</span>
            </div>

            <div style="font-size:18px; line-height:1.6; color:#fff; font-weight:500;">
              "Ẹ káàárọ̀, Bàbá. Inú wa dùn púpọ̀ láti kí gbogbo ẹbí yín káàbọ̀ sí àwùjọ wa lónìí."
            </div>

            <div style="margin-top:20px; border-top:1px solid var(--border); padding-top:16px;">
              <div class="annot-chip" style="background:rgba(16,185,129,0.1); color:#6ee7b7;">✓ Honorific plural prefix "Ẹ" applied</div>
              <div class="annot-chip" style="background:rgba(16,185,129,0.1); color:#6ee7b7;">✓ Respectful capitalization & honorific pronoun "yín"</div>
              <div class="annot-chip" style="background:rgba(16,185,129,0.1); color:#6ee7b7;">✓ Authentic hospitality syntax "kí ... káàbọ̀"</div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:24px; padding:16px 20px; background:var(--surface); border:1px solid var(--border); border-radius:12px;">
          <span style="font-size:12px; font-family:var(--font-mono); color:var(--text-muted);">VALIDATION PROVENANCE: Ethnographic Corpus (3 sources) · Yoruba Language Review Committee · 14 Community Verifications</span>
          <span style="font-size:12px; font-family:var(--font-mono); color:#34d399;">Confidence: 99.1%</span>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '06-cultural-ai-comparison.png'));
}

// 07: AI DUBBING PIPELINE
function generateDubbing() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .pipe-row {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 12px;
        margin-top: 36px;
      }
      .pipe-step {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 18px 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 180px;
        position: relative;
      }
      .pipe-step::after {
        content: '→';
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        color: var(--text-faint);
        z-index: 5;
      }
      .pipe-step:last-child::after { display: none; }
      .timeline-box {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 24px;
        margin-top: 28px;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Dubbing Pipeline · 7-Stage End-to-End Workflow</span>
          </div>
          <span class="tag-pill">Audio-Visual Lip & Phoneme Alignment</span>
        </div>

        <div style="margin-top:20px;">
          <h2 style="font-size:24px; font-weight:600;">Preserving Voice Identity, Pacing and Tone Across Languages</h2>
          <p style="font-size:14px; color:var(--text-muted); margin-top:4px;">How Pison translates spoken media into African languages while compensating for syllabic duration differences.</p>
        </div>

        <!-- 7 Stages -->
        <div class="pipe-row">
          <div class="pipe-step">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">01. INGEST</span>
            <div style="font-size:14px; font-weight:600;">Upload Video</div>
            <p style="font-size:11px; color:var(--text-muted);">MP4/MOV parsing with multi-channel audio extraction.</p>
          </div>

          <div class="pipe-step">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">02. SEPARATE</span>
            <div style="font-size:14px; font-weight:600;">Speech Detect</div>
            <p style="font-size:11px; color:var(--text-muted);">Vocal isolation from background music and sound effects.</p>
          </div>

          <div class="pipe-step">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">03. TRANSCRIBE</span>
            <div style="font-size:14px; font-weight:600;">Speech to Text</div>
            <p style="font-size:11px; color:var(--text-muted);">Word-level timestamps & speaker diarization.</p>
          </div>

          <div class="pipe-step">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">04. ADAPT</span>
            <div style="font-size:14px; font-weight:600;">Cultural Translation</div>
            <p style="font-size:11px; color:var(--text-muted);">Idiomatic and honorific localization into target language.</p>
          </div>

          <div class="pipe-step">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">05. SYNTHESIZE</span>
            <div style="font-size:14px; font-weight:600;">Voice Synthesis</div>
            <p style="font-size:11px; color:var(--text-muted);">Cloning timbre & pacing into target African tongue.</p>
          </div>

          <div class="pipe-step">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">06. ALIGN</span>
            <div style="font-size:14px; font-weight:600;">Lip & Time Sync</div>
            <p style="font-size:11px; color:var(--text-muted);">Syllabic expansion compensation and audio ducking.</p>
          </div>

          <div class="pipe-step">
            <span style="font-size:11px; font-family:var(--font-mono); color:var(--accent-emerald);">07. EXPORT</span>
            <div style="font-size:14px; font-weight:600; color:#34d399;">Mastered Render</div>
            <p style="font-size:11px; color:var(--text-muted);">Multi-track audio stems & burn-in subtitle captions.</p>
          </div>
        </div>

        <!-- Timeline Mockup -->
        <div class="timeline-box">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div style="font-size:13px; font-weight:600;">Timeline Audio Stems Synchronisation</div>
            <div style="font-size:12px; font-family:var(--font-mono); color:var(--accent-emerald);">Time Shift: +0.14s (Syllable compensation applied)</div>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; align-items:center; gap:16px;">
              <span style="width:140px; font-size:12px; font-family:var(--font-mono); color:var(--text-muted);">Original (English)</span>
              <div style="flex:1; height:36px; background:rgba(59,130,246,0.15); border:1px solid #3b82f6; border-radius:6px; display:flex; align-items:center; padding:0 14px; font-size:11px; font-family:var(--font-mono); color:#93c5fd;">
                "Welcome to our healthcare briefing today..." (00:00 - 00:04.2)
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:16px;">
              <span style="width:140px; font-size:12px; font-family:var(--font-mono); color:var(--accent-emerald);">Dubbed (Yorùbá)</span>
              <div style="flex:1; height:36px; background:rgba(16,185,129,0.15); border:1px solid #10b981; border-radius:6px; display:flex; align-items:center; padding:0 14px; font-size:11px; font-family:var(--font-mono); color:#6ee7b7;">
                "Ẹ káàbọ̀ sí ìpàdé àlàáfíà wa lónìí..." (00:00 - 00:04.34 · Time-Stretched 1.03x)
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '07-dubbing-pipeline.png'));
}

// 08: CONTRIBUTOR EXPERIENCE
function generateContributor() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .contrib-grid {
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 24px;
        margin-top: 24px;
      }
      .metric-card {
        padding: 18px;
        background: var(--surface-elevated);
        border: 1px solid var(--border);
        border-radius: 12px;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Contributor Portal · Responsible Data Network</span>
          </div>
          <span class="tag-pill">Community Data Engine</span>
        </div>

        <div style="margin-top:20px;">
          <h2 style="font-size:24px; font-weight:600;">The Human Data Network Behind African Voice AI</h2>
          <p style="font-size:14px; color:var(--text-muted); margin-top:4px;">Turning ethical data collection into an engaging, transparent, peer-validated product workflow.</p>
        </div>

        <div class="contrib-grid">
          <!-- Left Column Metrics -->
          <div class="card" style="display:flex; flex-direction:column; gap:16px;">
            <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint);">CONTRIBUTOR DASHBOARD (PROTOTYPE)</div>
            
            <div class="metric-card">
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-muted);">RECORDINGS SUBMITTED</div>
              <div style="font-size:28px; font-weight:700; color:#fff; margin-top:4px;">248</div>
              <div style="font-size:11px; color:#34d399; margin-top:2px;">+18 this week · Central Oyo</div>
            </div>

            <div class="metric-card">
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-muted);">PEER VALIDATED ITEMS</div>
              <div style="font-size:28px; font-weight:700; color:#fff; margin-top:4px;">231</div>
              <div style="font-size:11px; color:#60a5fa; margin-top:2px;">93.1% peer consensus rate</div>
            </div>

            <div class="metric-card">
              <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-muted);">CAMPAIGN PROGRESS</div>
              <div style="font-size:28px; font-weight:700; color:#fff; margin-top:4px;">78%</div>
              <div style="width:100%; height:6px; background:rgba(255,255,255,0.08); border-radius:3px; margin-top:8px;">
                <div style="width:78%; height:100%; background:#10b981; border-radius:3px;"></div>
              </div>
            </div>

            <div style="padding:14px; background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); border-radius:10px;">
              <span style="font-size:12px; font-weight:600; color:#34d399;">Earned Reward: ₦42,500</span>
              <span style="font-size:11px; color:var(--text-muted); display:block; margin-top:2px;">Transparent per-task rate · Instant mobile bank payout</span>
            </div>
          </div>

          <!-- Right Column Supply Chain -->
          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:14px;">DATA SUPPLY CHAIN LIFECYCLE</div>
              
              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:14px;">
                <div style="padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
                  <span style="font-size:20px;">🎙️</span>
                  <div style="font-size:14px; font-weight:600; margin-top:6px;">1. Mobile Record</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Native speaker records script prompts in quiet environment.</div>
                </div>

                <div style="padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
                  <span style="font-size:20px;">🎧</span>
                  <div style="font-size:14px; font-weight:600; margin-top:6px;">2. Audio Validate</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Automated SNR noise floor check and phoneme clipping audit.</div>
                </div>

                <div style="padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
                  <span style="font-size:20px;">👥</span>
                  <div style="font-size:14px; font-weight:600; margin-top:6px;">3. Peer Review</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">3 independent community speakers verify tone and pronunciation.</div>
                </div>

                <div style="padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
                  <span style="font-size:20px;">📜</span>
                  <div style="font-size:14px; font-weight:600; margin-top:6px;">4. Consent Bind</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Contributor signs granular licensing scope on cryptographic log.</div>
                </div>

                <div style="padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
                  <span style="font-size:20px;">📦</span>
                  <div style="font-size:14px; font-weight:600; margin-top:6px;">5. Dataset Ingestion</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Normalized audio packaged with rich dialect & demographic tags.</div>
                </div>

                <div style="padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px;">
                  <span style="font-size:20px;">⚡</span>
                  <div style="font-size:14px; font-weight:600; margin-top:6px;">6. Model Training</div>
                  <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Fine-tuning acoustic models with retroactive deletion support.</div>
                </div>
              </div>
            </div>

            <div style="padding:16px; background:var(--surface-elevated); border:1px solid var(--border); border-radius:12px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-size:13px; font-weight:600;">Active Contributor Task Queue</div>
                <div style="font-size:12px; color:var(--text-muted);">Hausa (Kano) Pronunciation Review · 24 tasks waiting</div>
              </div>
              <button style="padding:8px 18px; background:#fff; color:#000; border:none; border-radius:20px; font-size:12px; font-weight:600;">Start Review Session</button>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '08-pison-contributor-network.png'));
}

// 09: TRUST, CONSENT & DATA OWNERSHIP
function generateConsent() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .scope-card {
        padding: 20px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 14px;
      }
      .switch-toggle {
        width: 44px;
        height: 24px;
        background: #10b981;
        border-radius: 12px;
        position: relative;
      }
      .switch-toggle::after {
        content: '';
        position: absolute;
        right: 3px;
        top: 3px;
        width: 18px;
        height: 18px;
        background: #fff;
        border-radius: 50%;
      }
      .switch-toggle.off {
        background: rgba(255,255,255,0.15);
      }
      .switch-toggle.off::after {
        left: 3px;
        right: auto;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Governance · Trust, Consent & Voice Rights</span>
          </div>
          <span class="tag-pill">7 Granular Consent Scopes</span>
        </div>

        <div style="margin-top:20px;">
          <h2 style="font-size:24px; font-weight:600;">Responsible Voice AI: Dignity, Control and Provable Ownership</h2>
          <p style="font-size:14px; color:var(--text-muted); margin-top:4px;">Voice identity is an extension of bodily autonomy. Pison makes permissions human-readable and legally enforceable.</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:28px;">
          <div>
            <div class="scope-card">
              <div>
                <div style="font-size:15px; font-weight:600;">01. Acoustic Model Training</div>
                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">Use recordings to improve general pronunciation & speech recognition.</div>
              </div>
              <div class="switch-toggle"></div>
            </div>

            <div class="scope-card">
              <div>
                <div style="font-size:15px; font-weight:600;">02. Speech Synthesis (TTS)</div>
                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">Allow text-to-speech rendering of verified community voice samples.</div>
              </div>
              <div class="switch-toggle"></div>
            </div>

            <div class="scope-card" style="border-color:rgba(239,68,68,0.3); background:rgba(239,68,68,0.02);">
              <div>
                <div style="font-size:15px; font-weight:600; color:#fca5a5;">03. Direct Voice Cloning (Opt-In Only)</div>
                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">Generate new speech mimicing exact individual vocal timbre. Off by default.</div>
              </div>
              <div class="switch-toggle off"></div>
            </div>

            <div class="scope-card">
              <div>
                <div style="font-size:15px; font-weight:600;">04. Commercial Deployment</div>
                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">License voice for enterprise customer service & media with recurring royalty.</div>
              </div>
              <div class="switch-toggle"></div>
            </div>
          </div>

          <div>
            <div class="scope-card">
              <div>
                <div style="font-size:15px; font-weight:600;">05. Open Academic Datasets</div>
                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">Contribute anonymized audio to African linguistic researchers.</div>
              </div>
              <div class="switch-toggle"></div>
            </div>

            <div class="scope-card">
              <div>
                <div style="font-size:15px; font-weight:600;">06. Public Attribution</div>
                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">Credit contributor username/handle on public model card.</div>
              </div>
              <div class="switch-toggle off"></div>
            </div>

            <div class="scope-card" style="border-color:rgba(59,130,246,0.3);">
              <div>
                <div style="font-size:15px; font-weight:600; color:#93c5fd;">07. Unconditional Right to Withdraw</div>
                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">Revoke consent at any moment. Removes data from active training corpora.</div>
              </div>
              <span class="tag-pill" style="color:#93c5fd; border-color:rgba(59,130,246,0.4);">Enforceable</span>
            </div>

            <div style="padding:16px; background:var(--surface); border:1px solid var(--border); border-radius:14px; font-size:12px; font-family:var(--font-mono); color:var(--text-faint);">
              AUDIT RECORD: Contributor hash: 0x9e8b... · Policy v2.4 (2026) · Append-only consent ledger verified.
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '09-pison-trust-consent-matrix.png'));
}

// 10: DESIGN SYSTEM PRIMITIVES
function generateDesignSystem() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>${baseStyles}
      .ds-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 28px;
      }
    </style></head>
    <body>
      <div class="canvas">
        <div class="header-meta">
          <div class="brand-chip">
            <div class="brand-logo-dot"></div>
            <span>Pison Design System · Component Primitives & Token Scale</span>
          </div>
          <span class="tag-pill">Light / Dark Parity · Accessible Tokens</span>
        </div>

        <div style="margin-top:20px;">
          <h2 style="font-size:24px; font-weight:600;">Systematized for Precision Audio & Multilingual Content</h2>
          <p style="font-size:14px; color:var(--text-muted); margin-top:4px;">Built on semantic tokens, diacritic typography support, and accessible audio waveform primitives.</p>
        </div>

        <div class="ds-grid">
          <!-- Card 1: Color & Tone -->
          <div class="card">
            <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:14px;">COLOR TOKENS</div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--surface-elevated); border-radius:8px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <div style="width:14px; height:14px; border-radius:4px; background:#10b981;"></div>
                  <span style="font-size:13px;">--accent-emerald</span>
                </div>
                <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-faint);">#10B981</span>
              </div>

              <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--surface-elevated); border-radius:8px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <div style="width:14px; height:14px; border-radius:4px; background:#3b82f6;"></div>
                  <span style="font-size:13px;">--accent-blue</span>
                </div>
                <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-faint);">#3B82F6</span>
              </div>

              <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--surface-elevated); border-radius:8px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <div style="width:14px; height:14px; border-radius:4px; background:#f59e0b;"></div>
                  <span style="font-size:13px;">--accent-amber</span>
                </div>
                <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-faint);">#F59E0B</span>
              </div>

              <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--surface-elevated); border-radius:8px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <div style="width:14px; height:14px; border-radius:4px; background:#1b1a18; border:1px solid #444;"></div>
                  <span style="font-size:13px;">--warm-obsidian</span>
                </div>
                <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-faint);">#1B1A18</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Typography & Diacritics -->
          <div class="card">
            <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:14px;">TONAL TYPOGRAPHY</div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              <div>
                <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">DISPLAY (GEIST SANS)</span>
                <div style="font-size:20px; font-weight:600; color:#fff;">Ọ̀yọ́ · Ìbàdàn · Kú àbọ̀</div>
              </div>
              <div>
                <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">PROSE (INTER)</span>
                <div style="font-size:14px; color:var(--text-muted); line-height:1.5;">Rendering tonemarks without glyph clipping across viewport widths.</div>
              </div>
              <div>
                <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">CODE & METRICS (GEIST MONO)</span>
                <div style="font-size:13px; font-family:var(--font-mono); color:#10b981;">RTF: 0.08 · LATENCY: 182MS</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Interactive Audio Elements -->
          <div class="card">
            <div style="font-size:12px; font-family:var(--font-mono); color:var(--text-faint); margin-bottom:14px;">AUDIO CONTROLS</div>
            <div style="display:flex; flex-direction:column; gap:10px;">
              <div style="padding:10px; background:var(--surface-elevated); border-radius:8px; display:flex; align-items:center; gap:10px;">
                <span style="width:28px; height:28px; border-radius:50%; background:#fff; color:#000; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold;">▶</span>
                <div style="flex:1; height:4px; background:rgba(255,255,255,0.1); border-radius:2px;">
                  <div style="width:45%; height:100%; background:#10b981; border-radius:2px;"></div>
                </div>
                <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-faint);">0:04</span>
              </div>

              <div style="display:flex; gap:8px;">
                <span class="tag-pill" style="border-color:#10b981; color:#34d399;">24kHz Lossless</span>
                <span class="tag-pill">WAV Export</span>
                <span class="tag-pill">JSON Stems</span>
              </div>

              <div style="padding:10px; background:rgba(59,130,246,0.06); border:1px solid rgba(59,130,246,0.2); border-radius:8px; font-size:12px; color:#93c5fd;">
                Accessible ARIA live regions for async speech synthesis announcements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  renderHtmlToPng(html, path.join(outDir, '10-pison-design-system-tokens.png'));
}

console.log('Generating Pison Labs high-fidelity visual assets...');
generateHero();
generateEcosystem();
generateIA();
generateWorkspace();
generateVoiceStudio();
generateVoiceDimensions();
generateCulturalAI();
generateDubbing();
generateContributor();
generateConsent();
generateDesignSystem();
console.log('Done generating all 11 visual assets!');
