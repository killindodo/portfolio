/**
 * Surya Pratap Portfolio — Dual-Theme Controller & Interactive Engine
 * Cinematic Editorial Studio ⇄ Retro Cyber Console
 */

(function () {
    'use strict';

    // ─── 1. THEME ENGINE ───
    const THEME_STORAGE_KEY = 'sp_portfolio_theme';
    let currentTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'cinematic';

    function initTheme() {
        // Check URL parameter override (e.g. ?theme=cyber or ?theme=cinematic)
        const urlParams = new URLSearchParams(window.location.search);
        const themeParam = urlParams.get('theme');
        if (themeParam === 'cyber' || themeParam === 'cinematic') {
            currentTheme = themeParam;
        }

        applyTheme(currentTheme);
    }

    function applyTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);

        // Update Theme Switcher buttons
        document.querySelectorAll('.theme-opt-btn').forEach(btn => {
            if (btn.getAttribute('data-set-theme') === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Trigger or stop Matrix canvas
        if (theme === 'cyber') {
            startMatrixRain();
        } else {
            stopMatrixRain();
        }

        // Re-render skills bar animation
        renderSkills(currentDomain);
    }

    window.toggleTheme = function (theme) {
        applyTheme(theme);
    };

    // ─── 2. INTERACTIVE CUSTOM CURSOR ───
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isCursorActive = false;

    if (cursorDot && cursorRing) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

            if (!isCursorActive) {
                isCursorActive = true;
                cursorDot.style.display = 'block';
                cursorRing.style.display = 'block';
            }
        });

        // Smooth trailing animation for outer ring
        function animateCursor() {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Expand cursor on interactive hover
        const interactiveElements = 'a, button, input, textarea, .filter-btn, .hud-tab, .project-card, .telemetry-card';
        document.querySelectorAll(interactiveElements).forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }

    // ─── 3. MATRIX RAIN CANVAS (Active on Cyber theme) ───
    const canvas = document.getElementById('matrix-canvas');
    let matrixCtx = canvas ? canvas.getContext('2d') : null;
    let matrixAnimationId = null;
    let drops = [];
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユヨラリルレワヲンABCDEF';

    function initMatrix() {
        if (!canvas || !matrixCtx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const columns = Math.floor(canvas.width / 20);
        drops = Array(columns).fill(1);
    }

    function drawMatrix() {
        if (!matrixCtx) return;
        matrixCtx.fillStyle = 'rgba(5, 8, 17, 0.08)';
        matrixCtx.fillRect(0, 0, canvas.width, canvas.height);

        matrixCtx.fillStyle = '#00FF9D';
        matrixCtx.font = '14px Fira Code, monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            matrixCtx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        matrixAnimationId = requestAnimationFrame(drawMatrix);
    }

    function startMatrixRain() {
        if (!canvas) return;
        initMatrix();
        if (!matrixAnimationId) {
            drawMatrix();
        }
    }

    function stopMatrixRain() {
        if (matrixAnimationId) {
            cancelAnimationFrame(matrixAnimationId);
            matrixAnimationId = null;
            if (matrixCtx) {
                matrixCtx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
    }

    window.addEventListener('resize', () => {
        if (currentTheme === 'cyber') initMatrix();
    });

    // ─── 4. SKILLS TELEMETRY DATA & RENDERER ───
    const skillsData = {
        web: [
            { name: "Vanilla ES6+ & High-Perf DOM Architecture", level: 98, note: "Zero layout shift, micro-interactions" },
            { name: "Vercel Edge & Cloudflare Workers Deployment", level: 95, note: "Global CDN caching & low-latency routing" },
            { name: "Modern CSS3 / Design Tokens & Responsive Grid", level: 96, note: "Fluid clamp() typography & glassmorphism" },
            { name: "NFC Smart Business Solutions & Micro-Portals", level: 92, note: "Client contact dispatch & catalog integration" }
        ],
        systems: [
            { name: "Linux Continuity (Android ↔ Linux Bridge)", level: 95, note: "UNIX domain sockets, ADB, daemon sync" },
            { name: "Zezes Mobile ISO Core (USB Gadget OTG)", level: 90, note: "Kernel mass-storage emulation on Android" },
            { name: "Nitrosense Linux (ACPI EC Read/Write)", level: 92, note: "Thermal monitoring via ec_sys registers" },
            { name: "Android GKI v4/6.1 & Custom Recovery Trees", level: 88, note: "TWRP / OrangeFox device builds & EROFS" }
        ],
        embedded: [
            { name: "CC1101 Sub-GHz Transceivers (Dodo-RF)", level: 90, note: "315/433/868/915MHz packet sniffing & replay" },
            { name: "Microcontrollers: ESP32 & RP2040 Architecture", level: 94, note: "FreeRTOS, dual-core tasks, hardware interrupts" },
            { name: "Bus Protocols: SPI, I2C, UART, Direct GPIO", level: 92, note: "High-speed bitbanging & peripheral control" },
            { name: "RF Modulation & Signal Analysis (FSK, ASK/OOK)", level: 88, note: "Rolling-code inspection & packet decoding" }
        ],
        data: [
            { name: "Apache Spark / PySpark Distributed Compute", level: 92, note: "High-throughput dataframe transformations" },
            { name: "Databricks Delta Lakehouse (Medallion Flow)", level: 90, note: "Bronze / Silver / Gold ACID transactional ETL" },
            { name: "Parquet & Delta Schema Enforcement", level: 88, note: "Automated data contracts & time-travel audits" },
            { name: "Data Optimization & Z-Ordering Indexing", level: 85, note: "Minimizing shuffle & partition skew" }
        ],
        languages: [
            { name: "Python (Systems, Daemons, Spark ETL)", level: 95, note: "Core backend, hardware automation" },
            { name: "JavaScript / TypeScript (ES6+, Node, DOM)", level: 94, note: "Edge Workers, interactive client portals" },
            { name: "C / C++ (Linux Kernel, Microcontrollers)", level: 88, note: "Hardware abstraction, ACPI registers" },
            { name: "Bash & Linux Shell Scripting", level: 96, note: "OS provisioning, ROM building, CI automation" },
            { name: "SQL (Analytical Queries & Transformations)", level: 90, note: "Relational optimization & warehousing" }
        ]
    };

    let currentDomain = 'web';

    function renderSkills(domain) {
        currentDomain = domain;
        const container = document.getElementById('skillsListContainer');
        if (!container) return;

        const items = skillsData[domain] || skillsData.web;
        container.innerHTML = '';

        items.forEach(skill => {
            const row = document.createElement('div');
            row.className = 'skill-row';
            row.innerHTML = `
                <div class="skill-row-head">
                    <span>${skill.name}</span>
                    <span style="color: var(--accent); font-family: var(--font-mono); font-size: 12px;">${skill.level}%</span>
                </div>
                <div class="skill-bar-track">
                    <div class="skill-bar-fill" style="width: 0%"></div>
                </div>
                <div style="font-size: 11px; color: var(--text-dim);">${skill.note}</div>
            `;
            container.appendChild(row);

            // Trigger animation
            setTimeout(() => {
                const bar = row.querySelector('.skill-bar-fill');
                if (bar) bar.style.width = `${skill.level}%`;
            }, 60);
        });

        // Update tabs active state
        document.querySelectorAll('.hud-tab').forEach(t => {
            if (t.getAttribute('data-domain') === domain) t.classList.add('active');
            else t.classList.remove('active');
        });
    }

    window.switchSkillDomain = function (domain) {
        renderSkills(domain);
    };

    // ─── 5. PROJECT CATEGORY FILTERING ───
    window.filterProjects = function (category) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.getAttribute('data-filter') === category) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (category === 'all' || cardCat === category) {
                card.style.display = 'flex';
                setTimeout(() => card.style.opacity = '1', 20);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 200);
            }
        });
    };

    // ─── 6. NAVBAR SCROLL LISTENER ───
    const navbar = document.querySelector('.navbar-wrap');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });
    }

    // ─── 7. CLIPBOARD / TOAST UTILITY ───
    window.copyText = function (text, label) {
        navigator.clipboard.writeText(text).then(() => {
            alert((label || 'Link') + ' copied to clipboard!');
        });
    };

    // ─── 8. BOOTSTRAP ───
    window.addEventListener('DOMContentLoaded', () => {
        initTheme();
        renderSkills('web');
    });
})();
