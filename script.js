/**
 * SURYA PRATAP / KILLINDODO — DIGITAL HEADQUARTERS
 * Core Architectural Engine: Living System Graph, GitHub Data Layer, Case Studies, Search
 */

(function () {
    'use strict';

    // ─── 1. REPOSITORY DATA STATE & CURATION ───
    let allRepositories = [];
    let activeFilter = 'all';
    let searchQuery = '';
    let currentSort = 'relevance';

    // Fallback static dataset (embedded from data/repositories.json)
    const fallbackRepositories = [
        {
            name: "sjdigitals.co",
            title: "SJ Digitals Co. — Agency & Platform Infrastructure",
            description: "Flagship digital systems platform and corporate web presence for SJ Digitals Co., founded by Surya Pratap. Features zero layout shifts, bespoke client portals, NFC smart business card routing, and instant edge caching.",
            category: "web",
            featured: true,
            language: "JavaScript",
            html_url: "https://github.com/killindodo/sjdigitals.co",
            homepage: "https://sjdigitals.vercel.app/",
            stargazers_count: 2,
            updated_at: "2026-09-20T05:20:30Z",
            topics: ["agency", "design-system", "edge-deployment", "nfc-cards", "vanilla-js", "web-performance"],
            specs: {
                architecture: "Edge-Cached Static Architecture",
                stack: "Semantic HTML5, Modular CSS3 Tokens, Vanilla ES6+",
                platform: "Vercel Global Edge & Cloudflare CDN",
                role: "Founder & Principal Systems Architect"
            },
            case_study: {
                context: "Small and medium enterprises often struggle with bloated, slow website templates with massive JavaScript payloads and painful layout shifts.",
                problem: "Create a high-impact, luxury digital agency web presence with zero build dependencies, near-perfect Lighthouse scores, and instant worldwide loading.",
                engineering: "Engineered with modern vanilla web standards, custom CSS property tokens, responsive clamp() typography, and edge CDN cache headers.",
                architecture: "Client Browser ➔ Edge Anycast CDN ➔ Brotli-compressed static assets ➔ Dynamic WhatsApp lead routing API.",
                result: "99+ Lighthouse performance index, sub-100ms first contentful paint, and seamless lead conversion for digital branding clients."
            }
        },
        {
            name: "linux-continuity",
            title: "Linux Continuity — Android ↔ Linux Continuity Bridge",
            description: "Apple-style Continuity ecosystem bridging Linux desktop workstations with Android devices. Real-time clipboard synchronization, AirDrop-like zero-friction file transfer, shared media controls, and interactive shell execution over secure local sockets.",
            category: "linux",
            featured: true,
            language: "Python",
            html_url: "https://github.com/killindodo/linux-continuity",
            homepage: "https://github.com/killindodo/linux-continuity",
            stargazers_count: 3,
            updated_at: "2026-09-17T06:33:14Z",
            topics: ["android", "clipboard-sync", "continuity", "desktop-integration", "linux", "python3", "sockets"],
            specs: {
                architecture: "Local UNIX Socket & Daemon Service",
                stack: "Python 3, ADB Protocol, Linux Desktop Notifications, Cryptography",
                platform: "Linux (Arch / Debian / Fedora) & Android",
                role: "Author & Core Developer"
            },
            case_study: {
                context: "Linux users often lack the seamless device integration that macOS and iOS users enjoy (AirDrop, Universal Clipboard, device controls).",
                problem: "Build an open-source, local-first bridge between Linux and Android without requiring third-party cloud servers or invasive proprietary services.",
                engineering: "Implemented an asynchronous daemon architecture using local sockets, ADB port-forwarding, system notification hooks, and secure peer discovery.",
                architecture: "Android Client ↔ Encrypted Local Transport / ADB Forwarding ↔ Linux Desktop Daemon ↔ Desktop D-Bus / Clipboard Service.",
                result: "Sub-millisecond clipboard transfer, instant file dispatch, and complete independence from cloud services."
            }
        },
        {
            name: "pinion",
            title: "Pinion — Universal Wireless Print Engine for Android",
            description: "Universal wireless print server and hardware spooling daemon for Android. Bridges CUPS, IPP, AirPrint, and Mopria printing protocols with a modern embedded Web UI and root-level automation.",
            category: "android",
            featured: true,
            language: "Java",
            html_url: "https://github.com/killindodo/pinion",
            homepage: "https://github.com/killindodo/pinion",
            stargazers_count: 1,
            updated_at: "2026-09-17T16:03:27Z",
            topics: ["airprint", "android", "cups", "embedded-server", "ipp", "java", "mopria", "print-spooler"],
            specs: {
                architecture: "Native Android Service & Embedded HTTP Core",
                stack: "Java 8+, Android NDK, CUPS Daemon, IPP Protocol, Raw Sockets",
                platform: "Android 8.0+ through Android 15 (ARM64)",
                role: "Lead Architect & Systems Developer"
            },
            case_study: {
                context: "Modern enterprise and legacy USB printers cannot be easily addressed from mobile devices without expensive network print server appliances.",
                problem: "Transform any cheap Android device into an industrial-grade, multi-protocol network print server supporting iOS, Android, macOS, and Windows clients.",
                engineering: "Integrated a lightweight native Java HTTP/IPP engine with direct raw printer spooling over USB OTG and WiFi, managing print queues and status telemetry.",
                architecture: "Client (AirPrint/IPP) ➔ Android WiFi Interface ➔ Pinion IPP Listener ➔ Spooling Buffer ➔ USB OTG Printer Device (/dev/usb/lp0).",
                result: "Zero-configuration wireless printing across iOS, Android, and Linux with full real-time job monitoring."
            }
        },
        {
            name: "Zezes",
            title: "Zezes — Android USB OTG ISO Deployment Core",
            description: "Emergency bare-metal multi-boot installer core running directly on Android. Emulates hardware CD-ROM / USB mass storage devices over USB-C OTG using Linux Kernel USB Gadget ConfigFS.",
            category: "android",
            featured: true,
            language: "Kotlin",
            html_url: "https://github.com/killindodo/Zezes",
            homepage: "https://github.com/killindodo/Zezes",
            stargazers_count: 7,
            updated_at: "2026-09-16T14:43:32Z",
            topics: ["android", "configfs", "iso-boot", "kernel-gadget", "kotlin", "mass-storage", "otg", "recovery"],
            specs: {
                architecture: "Kernel USB Gadget Subsystem & ConfigFS Driver",
                stack: "Kotlin, C / Shell, Linux USB Gadget API, Mass Storage LUNs",
                platform: "Android Root (Kernel 4.19+ / 5.10 / 6.1 GKI)",
                role: "Systems Engineer"
            },
            case_study: {
                context: "When a PC motherboard or operating system crashes, creating a bootable USB installer typically requires access to another working computer.",
                problem: "Enable an Android phone to emulate a physical bootable USB drive via USB OTG so that PC BIOS/UEFI discovers it as a genuine installation media.",
                engineering: "Programmed Android Linux kernel USB Gadget via ConfigFS, configuring virtual Logical Unit Numbers (LUNs) to serve raw ISO blocks directly over hardware endpoints.",
                architecture: "ISO Image on Storage ➔ Kernel ConfigFS Mass Storage Function (f_mass_storage) ➔ USB PHY Controller ➔ PC Motherboard BIOS/UEFI.",
                result: "Successfully boots Windows, Ubuntu, Arch Linux, and diagnostic live distributions directly from phone storage."
            }
        },
        {
            name: "nitrosense-linux",
            title: "NitroSense Linux — Acer EC Thermal & Fan Governor",
            description: "Native Linux fan speed controller and thermal monitor for Acer Nitro series gaming laptops. Directly queries and modifies ACPI Embedded Controller (EC) registers to override proprietary firmware fan limitations.",
            category: "linux",
            featured: true,
            language: "Python",
            html_url: "https://github.com/killindodo/nitrosense-linux",
            homepage: "https://github.com/killindodo/nitrosense-linux",
            stargazers_count: 2,
            updated_at: "2026-09-06T16:36:13Z",
            topics: ["acpi", "c", "ec-controller", "hardware-hacking", "kernel-driver", "linux", "nitro5", "python"],
            specs: {
                architecture: "Direct ACPI EC Register Read/Write Driver",
                stack: "C, Python 3, PyQt6, Linux ec_sys Kernel Module",
                platform: "Linux Kernel 5.x / 6.x on Acer Nitro 5 Hardware",
                role: "Author & Reverse Engineer"
            },
            case_study: {
                context: "Acer Nitro laptops under Linux run fans on conservative default firmware curves, leading to thermal throttling during compute-heavy tasks with no official OEM software.",
                problem: "Reverse-engineer the proprietary Windows NitroSense driver and build an open-source native Linux equivalent that directly commands the laptop's Embedded Controller.",
                engineering: "Mapped ACPI EC memory registers using ec_sys, identifying fan control offsets, automatic/manual control flags, and RPM sensors to build a reactive thermal governor.",
                architecture: "Hardware Thermal Sensors ➔ Linux ec_sys Driver ➔ NitroSense ACPI Register Engine (0x00-0xFF) ➔ Reactive Fan Speed Daemon.",
                result: "Drops sustained gaming/compilation temperatures by 10-15°C with customizable speed curves and zero proprietary Windows bloat."
            }
        },
        {
            name: "Dodo-RF",
            title: "Dodo-RF — Sub-GHz Wireless Protocol Analyzer",
            description: "Ultra-portable hardware RF analysis, signal capture, and packet synthesis platform built for CC1101 transceivers paired with ESP32 and RP2040 microcontrollers across 315, 433, 868, and 915 MHz bands.",
            category: "embedded",
            featured: true,
            language: "C++",
            html_url: "https://github.com/killindodo/Dodo-RF",
            homepage: "https://github.com/killindodo/Dodo-RF",
            stargazers_count: 4,
            updated_at: "2026-08-19T00:12:44Z",
            topics: ["cc1101", "embedded", "esp32", "hardware-security", "iot", "radio-frequency", "rf-capture", "sub-ghz"],
            specs: {
                architecture: "Embedded Firmware & Real-time Signal Processing",
                stack: "C++, Arduino / ESP-IDF, SPI Hardware Bus, Python Desktop GUI",
                platform: "ESP32 / RP2040 Microcontrollers + TI CC1101 Transceiver",
                role: "Embedded Hardware Architect"
            },
            case_study: {
                context: "Sub-GHz RF analysis tools (such as software-defined radios or dedicated analyzers) are either prohibitively expensive or too bulky for field work.",
                problem: "Engineer a handheld, low-cost Sub-GHz radio analyzer capable of sniffing, decoding, recording, and transmitting digital radio signals with microsecond timing accuracy.",
                engineering: "Designed firmware controlling TI CC1101 registers via high-speed SPI, implementing packet filtering, demodulation presets (ASK/OOK, 2-FSK), and pulse-width timing capture.",
                architecture: "RF Antenna ➔ TI CC1101 Transceiver ➔ High-Speed SPI Bus ➔ ESP32 Microcontroller Core ➔ Real-time Signal Analyzer.",
                result: "Reliably decodes remote key fobs, automated weather stations, industrial gate controllers, and security sensors in real time."
            }
        },
        {
            name: "databricks_pipelines",
            title: "Databricks Medallion Data Lakehouse Architecture",
            description: "Industrial distributed data lakehouse pipelines implementing Bronze, Silver, and Gold Medallion architecture on Apache Spark / PySpark and Databricks Delta Lake with ACID transactional guarantees.",
            category: "data",
            featured: true,
            language: "Jupyter Notebook",
            html_url: "https://github.com/killindodo/databricks_pipelines",
            homepage: "https://github.com/killindodo/databricks_pipelines",
            stargazers_count: 1,
            updated_at: "2026-06-20T05:49:11Z",
            topics: ["apache-spark", "databricks", "data-engineering", "delta-lake", "etl-pipeline", "medallion-architecture", "pyspark"],
            specs: {
                architecture: "Medallion Architecture (Bronze ➔ Silver ➔ Gold)",
                stack: "PySpark, Databricks Delta Lake, Apache Spark, Python",
                platform: "Databricks Cloud / Distributed Spark Clusters",
                role: "Data Engineer"
            },
            case_study: {
                context: "Enterprise data systems frequently suffer from corrupted schemas, unreliable batch ETL jobs, and un-reproducible analytical downstream reporting.",
                problem: "Construct a resilient, automated data engineering pipeline that ingests raw telemetry, validates schema integrity, and delivers curated aggregated data marts.",
                engineering: "Built layered PySpark pipelines utilizing Delta Lake ACID transactions, enforcing schema validation at ingestion (Bronze), deduplication and enrichment (Silver), and business aggregation (Gold).",
                architecture: "Raw Source Streams ➔ Bronze (Raw Ingestion) ➔ Delta ACID ➔ Silver (Cleaned & Enriched) ➔ Gold (Aggregated Analytics).",
                result: "Zero data corruption, reproducible schema enforcement, and optimized Z-order queries on millions of records."
            }
        },
        {
            name: "chandrawati-enterprises",
            title: "Chandrawati Enterprises — Workforce Outsourcing Portal",
            description: "Production web platform for a major manpower and industrial workforce outsourcing corporation in Gaya, Bihar. Engineered for high performance, local asset bundling, and interactive quote dispatch.",
            category: "web",
            featured: true,
            language: "JavaScript",
            html_url: "https://github.com/killindodo",
            homepage: "https://chandrawati-enterprises.vercel.app/",
            stargazers_count: 1,
            updated_at: "2026-08-15T12:00:00Z",
            topics: ["client-portal", "corporate-web", "high-performance", "manpower-solutions", "vanilla-js"],
            specs: {
                architecture: "Zero-Dependency Responsive Web Portal",
                stack: "Semantic HTML5, CSS3 Grid/Flexbox, Vanilla JS, Vercel Edge",
                platform: "Vercel Global Edge Production",
                role: "Lead Systems & Web Architect"
            },
            case_study: {
                context: "A local corporate workforce supplier required a modern digital presence to service enterprise clients, verify candidate profiles, and generate contracts.",
                problem: "Deliver a fast, accessible portal with zero third-party framework lock-in, ensuring instant loading even over cellular 4G/3G networks.",
                engineering: "Designed responsive design systems, modular CSS architecture, and direct client WhatsApp API quotation hooks without bloated npm dependencies.",
                architecture: "Static Asset CDN ➔ Local Caching Service Worker ➔ Client Inquiries Engine ➔ Direct Business WhatsApp Dispatch.",
                result: "Instant first contentful paint, 100% responsive compatibility across low-end smartphones, and significant inbound corporate client leads."
            }
        },
        {
            name: "redmi-note9-nvram-restore",
            title: "Redmi Note 9 NVRAM & IMEI Recovery Suite",
            description: "Hardware-level guide and automated binary tooling to reconstruct corrupted NVRAM, baseband calibration partitions, and restore null IMEI on MediaTek MT6769 (Helio G85) devices.",
            category: "android",
            featured: false,
            language: "Python",
            html_url: "https://github.com/killindodo/redmi-note9-nvram-restore",
            homepage: "https://github.com/killindodo/redmi-note9-nvram-restore",
            stargazers_count: 1,
            updated_at: "2026-09-13T20:13:48Z",
            topics: ["android", "baseband", "imei-repair", "mediatek", "nvram", "partition-recovery", "python"],
            specs: {
                architecture: "Low-level Partition Analysis & Hex Rebuilding",
                stack: "Python, SP Flash Tool, MediaTek Partition Table, Hex Binary Editors",
                platform: "MediaTek MT6769 (Redmi Note 9 / Merlin)",
                role: "Systems Researcher & Hardware Recovery Engineer"
            }
        },
        {
            name: "merlin-net-hunter-kernel-MT7601U-WiFi-Adapter-Support-",
            title: "Kali NetHunter Kernel & MT7601U Driver Port",
            description: "Custom Linux kernel compilation and driver backport enabling external USB MT7601U wireless adapters and packet monitor mode on Kali NetHunter for ARM64 Android devices.",
            category: "linux",
            featured: false,
            language: "C",
            html_url: "https://github.com/killindodo/merlin-net-hunter-kernel-MT7601U-WiFi-Adapter-Support-",
            homepage: "https://github.com/killindodo/merlin-net-hunter-kernel-MT7601U-WiFi-Adapter-Support-",
            stargazers_count: 1,
            updated_at: "2026-08-13T13:50:26Z",
            topics: ["arm64", "kali-nethunter", "kernel-patch", "linux-kernel", "mt7601u", "packet-injection", "wireless-driver"],
            specs: {
                architecture: "Kernel Tree Patch & Driver Module Compilation",
                stack: "C, Linux Kernel 4.14 / 4.19 Source, Clang / GCC Cross-Toolchains, DKMS",
                platform: "ARM64 Linux Kernel for MediaTek Merlin",
                role: "Kernel Developer"
            }
        },
        {
            name: "ai-engineering-from-scratch",
            title: "AI Engineering From Scratch",
            description: "Foundational implementations of modern machine learning algorithms, transformer attention mechanisms, tensor computations, and neural architectures coded directly from fundamental mathematics.",
            category: "data",
            featured: false,
            language: "Python",
            html_url: "https://github.com/killindodo/ai-engineering-from-scratch",
            homepage: "https://github.com/killindodo/ai-engineering-from-scratch",
            stargazers_count: 0,
            updated_at: "2026-07-18T16:45:42Z",
            topics: ["ai-engineering", "deep-learning", "from-scratch", "math", "neural-networks", "python", "tensors"],
            specs: {
                architecture: "Mathematical Foundations & Raw Tensor Implementations",
                stack: "Python, NumPy, PyTorch Internals, Mathematical Optimization",
                platform: "Cross-Platform Linux / Python",
                role: "Systems Researcher"
            }
        }
    ];

    // ─── 2. GITHUB LIVE DISCOVERY & MERGE ───
    async function loadGitHubData() {
        allRepositories = [...fallbackRepositories];
        updateSyncRibbon("Synchronized via Local Cache", allRepositories.length);

        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 3500);

            const res = await fetch("https://api.github.com/users/killindodo/repos?sort=updated&per_page=100", {
                signal: controller.signal
            });
            clearTimeout(timeout);

            if (res.ok) {
                const liveRepos = await res.json();
                if (Array.isArray(liveRepos) && liveRepos.length > 0) {
                    mergeLiveRepositories(liveRepos);
                    updateSyncRibbon("Live Sync Active // GitHub API v3", allRepositories.length);
                }
            }
        } catch (err) {
            console.info("[GitHub Engine] Using bundled repository snapshot:", err.message);
        }

        renderRepositories();
    }

    function mergeLiveRepositories(liveList) {
        liveList.forEach(liveRepo => {
            const existing = allRepositories.find(r => r.name.toLowerCase() === liveRepo.name.toLowerCase());
            if (existing) {
                existing.stargazers_count = liveRepo.stargazers_count;
                existing.updated_at = liveRepo.updated_at;
                if (!existing.description && liveRepo.description) {
                    existing.description = liveRepo.description;
                }
            } else {
                // New repository discovered!
                const inferredCategory = inferCategory(liveRepo);
                allRepositories.push({
                    name: liveRepo.name,
                    title: liveRepo.name,
                    description: liveRepo.description || "Public engineering module by Surya Pratap.",
                    category: inferredCategory,
                    featured: false,
                    language: liveRepo.language || "Shell",
                    html_url: liveRepo.html_url,
                    homepage: liveRepo.homepage || liveRepo.html_url,
                    stargazers_count: liveRepo.stargazers_count || 0,
                    updated_at: liveRepo.updated_at,
                    topics: liveRepo.topics || [],
                    specs: {
                        architecture: "Open Source Repository",
                        stack: liveRepo.language || "Code",
                        platform: "Linux / Cross-Platform",
                        role: "Author"
                    }
                });
            }
        });
    }

    function inferCategory(repo) {
        const text = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
        if (text.includes('kernel') || text.includes('linux') || text.includes('acpi') || text.includes('driver')) return 'linux';
        if (text.includes('android') || text.includes('recovery') || text.includes('twrp') || text.includes('root')) return 'android';
        if (text.includes('rf') || text.includes('esp32') || text.includes('embedded') || text.includes('cc1101')) return 'embedded';
        if (text.includes('data') || text.includes('spark') || text.includes('databricks') || text.includes('lakehouse')) return 'data';
        if (text.includes('web') || text.includes('html') || text.includes('css') || text.includes('agency')) return 'web';
        return 'web';
    }

    function updateSyncRibbon(statusText, totalCount) {
        const statusEl = document.getElementById('syncStatusText');
        const countEl = document.getElementById('totalRepoCount');
        const starsEl = document.getElementById('totalStarsCount');

        if (statusEl) statusEl.textContent = statusText;
        if (countEl) countEl.textContent = totalCount;

        if (starsEl) {
            const totalStars = allRepositories.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
            starsEl.textContent = totalStars;
        }
    }

    // ─── 3. REPOSITORY FILTER, SEARCH & SORT ───
    function getFilteredRepositories() {
        return allRepositories.filter(repo => {
            // Category check
            const matchesCategory = (activeFilter === 'all') || (repo.category === activeFilter);
            if (!matchesCategory) return false;

            // Search query check
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const inName = repo.name.toLowerCase().includes(q);
                const inTitle = (repo.title || '').toLowerCase().includes(q);
                const inDesc = (repo.description || '').toLowerCase().includes(q);
                const inLang = (repo.language || '').toLowerCase().includes(q);
                const inTopics = (repo.topics || []).some(t => t.toLowerCase().includes(q));
                return inName || inTitle || inDesc || inLang || inTopics;
            }
            return true;
        }).sort((a, b) => {
            if (currentSort === 'stars') return (b.stargazers_count || 0) - (a.stargazers_count || 0);
            if (currentSort === 'name') return a.name.localeCompare(b.name);
            if (currentSort === 'updated') return new Date(b.updated_at) - new Date(a.updated_at);
            // Default: relevance (featured first, then recent)
            if (a.featured !== b.featured) return b.featured ? 1 : -1;
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
    }

    function renderRepositories() {
        const grid = document.getElementById('reposGrid');
        if (!grid) return;

        const filtered = getFilteredRepositories();
        grid.innerHTML = '';

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-tertiary); font-family: var(--font-mono); font-size: 13px;">
                    No repositories found matching "${searchQuery}".
                </div>
            `;
            return;
        }

        filtered.forEach(repo => {
            const card = document.createElement('article');
            card.className = 'repo-card';

            const langClass = getLangClass(repo.language);
            const dateStr = formatDate(repo.updated_at);

            card.innerHTML = `
                <div>
                    <div class="repo-card-head">
                        <span class="repo-name-text">${escapeHtml(repo.name)}</span>
                        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary);">★ ${repo.stargazers_count || 0}</span>
                    </div>
                    <p class="repo-card-desc">${escapeHtml(repo.description || 'Public engineering module.')}</p>
                </div>
                <div class="repo-meta-foot">
                    <div class="lang-indicator">
                        <span class="lang-dot ${langClass}"></span>
                        <span>${escapeHtml(repo.language || 'Code')}</span>
                    </div>
                    <div>
                        <span>${dateStr}</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                openCaseStudy(repo.name);
            });

            grid.appendChild(card);
        });
    }

    function getLangClass(lang) {
        if (!lang) return '';
        const l = lang.toLowerCase();
        if (l.includes('python')) return 'python';
        if (l.includes('kotlin')) return 'kotlin';
        if (l.includes('java')) return 'java';
        if (l.includes('c++') || l === 'c') return 'cpp';
        if (l.includes('javascript') || l.includes('typescript')) return 'js';
        return '';
    }

    function formatDate(isoStr) {
        if (!isoStr) return 'Recently';
        try {
            const d = new Date(isoStr);
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        } catch {
            return 'Recently';
        }
    }

    function escapeHtml(str) {
        return (str || '').replace(/[&<>"']/g, m => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[m]);
    }

    // ─── 4. CASE STUDY MODAL DRAWER ───
    window.openCaseStudy = function (repoName) {
        const repo = allRepositories.find(r => r.name.toLowerCase() === repoName.toLowerCase()) || fallbackRepositories[0];
        const modal = document.getElementById('caseStudyModal');
        if (!modal) return;

        document.getElementById('modalCaseTitle').textContent = repo.title || repo.name;
        document.getElementById('modalCaseKicker').textContent = `CASE STUDY // ${repo.category ? repo.category.toUpperCase() : 'ENGINEERING'}`;

        const cs = repo.case_study || {
            context: "Engineered to address critical bottlenecks in system performance and reliability.",
            problem: "Developing an open-source, robust implementation with zero proprietary lock-in.",
            engineering: "Engineered with modular, low-overhead architectures and rigorous automated validation.",
            architecture: "Client / Input Layer ➔ Hardware/System Layer ➔ Data Processing Engine ➔ Verified Output.",
            result: "Production-ready, highly reliable codebase published as open-source software."
        };

        document.getElementById('modalContext').textContent = cs.context;
        document.getElementById('modalProblem').textContent = cs.problem;
        document.getElementById('modalEngineering').textContent = cs.engineering;
        document.getElementById('modalArchitecture').textContent = cs.architecture;
        document.getElementById('modalResult').textContent = cs.result;

        // Links
        const ghBtn = document.getElementById('modalGithubBtn');
        const demoBtn = document.getElementById('modalDemoBtn');

        if (ghBtn) ghBtn.href = repo.html_url;
        if (demoBtn) {
            if (repo.homepage && repo.homepage !== repo.html_url) {
                demoBtn.href = repo.homepage;
                demoBtn.style.display = 'inline-flex';
            } else {
                demoBtn.style.display = 'none';
            }
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeCaseStudy = function () {
        const modal = document.getElementById('caseStudyModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ─── 5. LIVING SYSTEM ARCHITECTURE CANVAS ───
    function initArchitectureCanvas() {
        const canvas = document.getElementById('architectureCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const nodes = [
            { id: 'web', label: 'WEB PLATFORMS', x: 0.18, y: 0.25, color: '#3b82f6' },
            { id: 'linux', label: 'LINUX KERNEL', x: 0.50, y: 0.20, color: '#60a5fa' },
            { id: 'android', label: 'ANDROID OS', x: 0.82, y: 0.30, color: '#a855f7' },
            { id: 'rf', label: 'SUB-GHz RF', x: 0.30, y: 0.75, color: '#10b981' },
            { id: 'hardware', label: 'ACPI EC & ESP32', x: 0.55, y: 0.80, color: '#d97706' },
            { id: 'data', label: 'DATA LAKEHOUSE', x: 0.78, y: 0.70, color: '#06b6d4' }
        ];

        const connections = [
            [0, 1], [1, 2], [1, 4], [3, 4], [4, 5], [0, 5], [2, 4]
        ];

        let pulses = [
            { conn: 0, progress: 0.1, speed: 0.007 },
            { conn: 1, progress: 0.4, speed: 0.009 },
            { conn: 2, progress: 0.7, speed: 0.006 },
            { conn: 3, progress: 0.2, speed: 0.008 },
            { conn: 4, progress: 0.8, speed: 0.005 }
        ];

        let mouseX = -1;
        let mouseY = -1;

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            mouseX = -1;
            mouseY = -1;
        });

        function draw() {
            ctx.fillStyle = '#090b10';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Bus Traces
            connections.forEach(([i, j]) => {
                const n1 = nodes[i];
                const n2 = nodes[j];
                const x1 = n1.x * canvas.width;
                const y1 = n1.y * canvas.height;
                const x2 = n2.x * canvas.width;
                const y2 = n2.y * canvas.height;

                ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            });

            // Draw Signal Pulses
            pulses.forEach(p => {
                p.progress += p.speed;
                if (p.progress > 1) p.progress = 0;

                const [i, j] = connections[p.conn];
                const x1 = nodes[i].x * canvas.width;
                const y1 = nodes[i].y * canvas.height;
                const x2 = nodes[j].x * canvas.width;
                const y2 = nodes[j].y * canvas.height;

                const px = x1 + (x2 - x1) * p.progress;
                const py = y1 + (y2 - y1) * p.progress;

                ctx.fillStyle = '#60a5fa';
                ctx.shadowColor = '#60a5fa';
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            // Draw Nodes
            nodes.forEach(n => {
                const nx = n.x * canvas.width;
                const ny = n.y * canvas.height;

                const dist = Math.hypot(nx - mouseX, ny - mouseY);
                const isHover = dist < 45;

                // Outer Ring
                ctx.strokeStyle = isHover ? n.color : 'rgba(255, 255, 255, 0.15)';
                ctx.lineWidth = isHover ? 2 : 1;
                ctx.beginPath();
                ctx.arc(nx, ny, isHover ? 14 : 9, 0, Math.PI * 2);
                ctx.stroke();

                // Inner Core
                ctx.fillStyle = n.color;
                ctx.beginPath();
                ctx.arc(nx, ny, isHover ? 6 : 4, 0, Math.PI * 2);
                ctx.fill();

                // Node Label
                ctx.fillStyle = isHover ? '#ffffff' : '#94a3b8';
                ctx.font = '10px Fira Code, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(n.label, nx, ny + 24);
            });

            requestAnimationFrame(draw);
        }
        draw();
    }

    // ─── 6. EASTER EGG DIAGNOSTIC HUD ───
    let keyBuffer = '';
    window.addEventListener('keydown', (e) => {
        // Toggle on backtick
        if (e.key === '`') {
            toggleDiagnosticHud();
            return;
        }

        // Close on escape
        if (e.key === 'Escape') {
            closeCaseStudy();
            const hud = document.getElementById('diagnosticHud');
            if (hud) hud.classList.remove('active');
            return;
        }

        // Detect "killindodo" secret sequence
        keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-10);
        if (keyBuffer.includes('killindodo')) {
            toggleDiagnosticHud();
            keyBuffer = '';
        }
    });

    function toggleDiagnosticHud() {
        const hud = document.getElementById('diagnosticHud');
        if (hud) hud.classList.toggle('active');
    }

    window.closeDiagnosticHud = function () {
        const hud = document.getElementById('diagnosticHud');
        if (hud) hud.classList.remove('active');
    };

    // ─── 7. NAVBAR SCROLL OBSERVER ───
    const navWrapper = document.querySelector('.nav-wrapper');
    if (navWrapper) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) navWrapper.classList.add('scrolled');
            else navWrapper.classList.remove('scrolled');
        });
    }

    // ─── 8. SETUP EVENT LISTENERS & BOOTSTRAP ───
    window.addEventListener('DOMContentLoaded', () => {
        // Search Input
        const searchInput = document.getElementById('repoSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim();
                renderRepositories();
            });
        }

        // Sort Select
        const sortSelect = document.getElementById('repoSortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                renderRepositories();
            });
        }

        // Filter Pills
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeFilter = pill.getAttribute('data-filter') || 'all';
                renderRepositories();
            });
        });

        // Close modal on click outside
        const modal = document.getElementById('caseStudyModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeCaseStudy();
            });
        }

        // Init Architecture Canvas & Load GitHub Data
        initArchitectureCanvas();
        loadGitHubData();
    });

})();
