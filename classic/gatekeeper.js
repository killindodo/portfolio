/**
 * Surya Pratap Console - Cyber Edge Gatekeeper
 * Controls Live / Maintenance / Offline states dynamically via GitHub Remote Config
 */
(function() {
    const SITE_KEY = 'portfolio';
    const GIST_ID = '20ebeae35f6ac354a606ec7bb22161f6';
    const CONFIG_URL = `https://gist.githubusercontent.com/killindodo/${GIST_ID}/raw/sites_status.json?_t=${Date.now()}`;
    const STORAGE_KEY = 'portfolio_bypass_active';

    const params = new URLSearchParams(window.location.search);
    const bypassParam = params.get('bypass');
    const forceTestParam = params.get('test_offline');

    // Local Development Safeguard: Never lock during local offline file inspection
    const isLocal = window.location.protocol === 'file:' || 
                    window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1';

    if (isLocal && !forceTestParam) {
        console.info("[Gatekeeper] Local development environment detected. Bypassing gatekeeper.");
        return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2800);

    fetch(CONFIG_URL, { signal: controller.signal, cache: 'no-store' })
        .then(res => res.json())
        .then(data => {
            clearTimeout(timeoutId);
            const siteConfig = (data && data[SITE_KEY]) ? data[SITE_KEY] : { status: 'online' };
            handleSiteStatus(siteConfig);
        })
        .catch(err => {
            console.warn("[Gatekeeper] Remote edge check skipped:", err.message);
        });

    function handleSiteStatus(cfg) {
        const bypassKey = cfg.bypassKey || 'cyber2026';
        const isBypassed = localStorage.getItem(STORAGE_KEY) === bypassKey;

        if (bypassParam && bypassParam === bypassKey) {
            localStorage.setItem(STORAGE_KEY, bypassKey);
            params.delete('bypass');
            const cleanUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
            window.history.replaceState({}, document.title, cleanUrl);
            renderBypassBadge(bypassKey);
            return;
        }

        if (isBypassed && !forceTestParam) {
            renderBypassBadge(bypassKey);
            return;
        }

        if (cfg.status !== 'online' || forceTestParam) {
            window.__SP_GATEKEEPER_LOCKED = true;
            const alien = document.getElementById('alien-creature');
            if (alien) alien.remove();
            const uCanvas = document.getElementById('universeBgCanvas');
            if (uCanvas) uCanvas.remove();
            renderCyberMaintenance(cfg);
        }
    }

    function renderCyberMaintenance(cfg) {
        const style = document.createElement('style');
        style.id = 'sp-gatekeeper-style';
        style.innerHTML = `
            html, body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                height: 100% !important;
                overflow: hidden !important;
                background-color: #050811 !important;
                font-family: 'Fira Code', monospace, -apple-system, sans-serif !important;
            }
            body > *:not(#sp-terminal-root) {
                display: none !important;
            }
            #sp-terminal-root {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background: #050811 radial-gradient(circle at center, rgba(6, 182, 212, 0.08) 0%, transparent 70%) !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 20px !important;
                box-sizing: border-box !important;
                z-index: 999999999 !important;
                color: #00FF9D !important;
            }
            .sp-terminal-card {
                background: rgba(10, 15, 29, 0.85) !important;
                border: 1px solid rgba(0, 255, 157, 0.3) !important;
                box-shadow: 0 0 35px rgba(0, 255, 157, 0.15), inset 0 0 20px rgba(0,0,0,0.8) !important;
                border-radius: 14px !important;
                padding: 28px !important;
                max-width: 520px !important;
                width: 100% !important;
                position: relative !important;
                overflow: hidden !important;
            }
            .sp-terminal-bar {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding-bottom: 14px !important;
                margin-bottom: 18px !important;
                border-bottom: 1px solid rgba(0, 255, 157, 0.2) !important;
                font-size: 11px !important;
                letter-spacing: 1px !important;
            }
            .sp-dots {
                display: flex !important;
                gap: 6px !important;
            }
            .sp-dot {
                width: 10px !important;
                height: 10px !important;
                border-radius: 50% !important;
                background: #ef4444 !important;
            }
            .sp-dot.yellow { background: #f59e0b !important; }
            .sp-dot.green { background: #10b981 !important; }
            .sp-alert-tag {
                background: rgba(239, 68, 68, 0.15) !important;
                color: #f87171 !important;
                border: 1px solid rgba(239, 68, 68, 0.3) !important;
                padding: 4px 10px !important;
                border-radius: 6px !important;
                font-weight: 700 !important;
                font-size: 10px !important;
                letter-spacing: 1.5px !important;
                display: inline-block !important;
                margin-bottom: 12px !important;
            }
            .sp-cli-title {
                color: #ffffff !important;
                font-size: 20px !important;
                font-weight: 700 !important;
                margin-bottom: 12px !important;
                letter-spacing: -0.5px !important;
            }
            .sp-cli-line {
                color: #94a3b8 !important;
                font-size: 13px !important;
                line-height: 1.6 !important;
                margin-bottom: 20px !important;
            }
            .sp-cli-btn {
                background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(0, 255, 157, 0.15)) !important;
                border: 1px solid #00FF9D !important;
                color: #00FF9D !important;
                padding: 12px 18px !important;
                border-radius: 8px !important;
                font-family: inherit !important;
                font-size: 13px !important;
                font-weight: 700 !important;
                text-decoration: none !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
                box-shadow: 0 0 15px rgba(0, 255, 157, 0.2) !important;
                transition: all 0.2s ease !important;
            }
            .sp-cli-btn:hover {
                background: #00FF9D !important;
                color: #050811 !important;
            }
            .sp-bypass-prompt {
                margin-top: 22px !important;
                font-size: 11px !important;
                color: #475569 !important;
                text-align: center !important;
                cursor: pointer !important;
                letter-spacing: 1px !important;
            }
            .sp-bypass-prompt:hover {
                color: #00FF9D !important;
            }
        `;
        document.head.appendChild(style);

        const headline = cfg.headline || "SYSTEM UNDER MAINTENANCE";
        const message = cfg.message || "Upgrading core algorithms and project showcases. Access temporarily suspended.";
        const whatsapp = cfg.whatsapp || "+917004185301";

        const root = document.createElement('div');
        root.id = 'sp-terminal-root';

        root.innerHTML = `
            <div class="sp-terminal-card">
                <div class="sp-terminal-bar">
                    <div class="sp-dots">
                        <div class="sp-dot"></div>
                        <div class="sp-dot yellow"></div>
                        <div class="sp-dot green"></div>
                    </div>
                    <span>SURYA_PRATAP://CONSOLE_GATE</span>
                </div>
                <div class="sp-alert-tag">[ 0xMAINTENANCE_LOCK ]</div>
                <div class="sp-cli-title">> ${headline}</div>
                <div class="sp-cli-line">${message}</div>
                <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Surya%2C%20visiting%20your%20console%20portfolio." target="_blank" class="sp-cli-btn">
                    <span>⚡ TRANSMIT_DIRECT_DISPATCH (WhatsApp)</span>
                </a>
                <div class="sp-bypass-prompt" id="spBypassBtn">> AUTHENTICATE_ROOT_OPERATOR_ACCESS</div>
            </div>
        `;

        if (document.body) {
            document.body.appendChild(root);
            attachAdminPrompt(cfg.bypassKey || 'cyber2026');
        } else {
            window.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(root);
                attachAdminPrompt(cfg.bypassKey || 'cyber2026');
            });
        }
    }

    function attachAdminPrompt(expectedKey) {
        const btn = document.getElementById('spBypassBtn');
        if (btn) {
            btn.onclick = function() {
                const key = prompt("INPUT ROOT PASSCODE:");
                if (key && key.trim() === expectedKey) {
                    localStorage.setItem(STORAGE_KEY, expectedKey);
                    alert("ROOT GRANTED. DISABLING GATE.");
                    location.reload();
                } else if (key) {
                    alert("ACCESS DENIED: INVALID KEY.");
                }
            };
        }
    }

    function renderBypassBadge(expectedKey) {
        window.addEventListener('DOMContentLoaded', () => {
            const badge = document.createElement('div');
            badge.style.cssText = `
                position: fixed;
                bottom: 16px;
                right: 16px;
                background: #0a0f1d;
                color: #00FF9D;
                border: 1px solid #00FF9D;
                padding: 6px 14px;
                border-radius: 6px;
                font-size: 11px;
                font-family: monospace;
                font-weight: 700;
                box-shadow: 0 0 15px rgba(0, 255, 157, 0.3);
                z-index: 999999;
                display: flex;
                align-items: center;
                gap: 8px;
            `;
            badge.innerHTML = `
                <span>⚡ ROOT_BYPASS_ACTIVE</span>
                <span style="color: #ef4444; cursor: pointer;" id="spLockBtn">[LOCK]</span>
            `;
            document.body.appendChild(badge);

            document.getElementById('spLockBtn').onclick = () => {
                localStorage.removeItem(STORAGE_KEY);
                location.reload();
            };
        });
    }
})();
