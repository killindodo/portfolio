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

    // Curated dataset (Embedded from data/repositories.json)
    const fallbackRepositories = [
        {
            name: "sjdigitals.co",
            title: "SJ Digitals Co. — Agency & Platform Infrastructure",
            description: "Flagship digital systems platform and corporate web presence for SJ Digitals Co., founded by Surya Pratap. Features zero layout shifts, bespoke client portals, NFC smart business card routing, and instant edge caching.",
            category: "web",
            featured: true,
            closed_source: true,
            language: "JavaScript",
            html_url: null,
            homepage: "https://sjdigitals.vercel.app/",
            stargazers_count: 0,
            updated_at: "2026-09-20T05:20:30Z",
            topics: ["agency", "closed-source", "design-system", "edge-deployment", "nfc-cards", "vanilla-js", "web-performance"],
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
            name: "indian-central-school",
            title: "Indian Central School — Institutional Academic Portal",
            description: "Enterprise institutional web portal and academic management infrastructure for Indian Central School (Gaya, Bihar). Engineered for high availability, student admission workflows, and fast mobile responsiveness.",
            category: "web",
            featured: true,
            closed_source: true,
            language: "JavaScript",
            html_url: null,
            homepage: "https://icsgayaji.org",
            stargazers_count: 0,
            updated_at: "2026-09-15T15:00:00Z",
            topics: ["academic-portal", "closed-source", "institutional-web", "mobile-first", "student-records"],
            specs: {
                architecture: "Production Academic Web Portal",
                stack: "Semantic HTML5, CSS3 Grid, Vanilla ES6+, Edge CDN",
                platform: "Hostinger Cloud / Global CDN Edge",
                role: "Lead Systems Architect & Web Engineer"
            },
            case_study: {
                context: "A prominent regional educational institution required an authoritative digital portal for admissions, faculty announcements, and parent communication.",
                problem: "Construct a responsive, tamper-resilient web portal capable of handling peak admissions traffic with zero layout shifts and instant asset caching on low-bandwidth mobile networks.",
                engineering: "Designed modular HTML5 architectures, optimized SVG branding assets, and integrated secure inquiry and admission routing workflows with zero third-party framework overhead.",
                architecture: "Student/Parent Device ➔ Edge CDN Caching ➔ Static Delivery Engine ➔ Secure Inquiry Webhook & Direct School Desk Routing.",
                result: "Reliable 100% uptime during admissions season, sub-second load times on rural cellular networks, and modernized institutional presence."
            }
        },
        {
            name: "chandrawati-enterprises",
            title: "Chandrawati Enterprises — Workforce Outsourcing Portal",
            description: "Production web platform for a major manpower and industrial workforce outsourcing corporation in Gaya, Bihar. Engineered for high performance, local asset bundling, and interactive quote dispatch.",
            category: "web",
            featured: true,
            closed_source: true,
            language: "JavaScript",
            html_url: null,
            homepage: "https://chandrawati-enterprises.vercel.app/",
            stargazers_count: 0,
            updated_at: "2026-08-15T12:00:00Z",
            topics: ["client-portal", "closed-source", "corporate-web", "high-performance", "manpower-solutions", "vanilla-js"],
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
            name: "linux-continuity",
            title: "Linux Continuity — Android ↔ Linux Continuity Bridge",
            description: "Apple-style Continuity ecosystem bridging Linux desktop workstations with Android devices. Real-time clipboard synchronization, AirDrop-like zero-friction file transfer, shared media controls, and interactive shell execution over secure local sockets.",
            category: "linux",
            featured: true,
            closed_source: false,
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
            closed_source: false,
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
            closed_source: false,
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
            closed_source: false,
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
            closed_source: false,
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
            closed_source: false,
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
            name: "redmi-note9-nvram-restore",
            title: "Redmi Note 9 NVRAM & IMEI Recovery Suite",
            description: "Hardware-level guide and automated binary tooling to reconstruct corrupted NVRAM, baseband calibration partitions, and restore null IMEI on MediaTek MT6769 (Helio G85) devices.",
            category: "android",
            featured: false,
            closed_source: false,
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
            closed_source: false,
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
            closed_source: false,
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
                // If existing is marked closed source, keep it closed source!
                if (!existing.closed_source) {
                    existing.stargazers_count = liveRepo.stargazers_count;
                    existing.updated_at = liveRepo.updated_at;
                    if (!existing.description && liveRepo.description) {
                        existing.description = liveRepo.description;
                    }
                }
            } else {
                // Inferred as open-source public repository
                const inferredCategory = inferCategory(liveRepo);
                allRepositories.push({
                    name: liveRepo.name,
                    title: liveRepo.name,
                    description: liveRepo.description || "Public engineering module by Surya Pratap.",
                    category: inferredCategory,
                    featured: false,
                    closed_source: false,
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
            if (activeFilter === 'opensource') {
                if (repo.closed_source) return false;
            } else if (activeFilter !== 'all') {
                if (repo.category !== activeFilter) return false;
            }

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

            const sourceBadge = repo.closed_source
                ? `<span style="font-family: var(--font-mono); font-size: 10px; padding: 2px 6px; border-radius: 4px; background: rgba(217, 119, 6, 0.15); color: var(--amber-light); border: 1px solid rgba(217, 119, 6, 0.3);">PROPRIETARY CLIENT PLATFORM</span>`
                : `<span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary);">★ ${repo.stargazers_count || 0}</span>`;

            card.innerHTML = `
                <div>
                    <div class="repo-card-head">
                        <span class="repo-name-text">${escapeHtml(repo.name)}</span>
                        ${sourceBadge}
                    </div>
                    <p class="repo-card-desc">${escapeHtml(repo.description || 'Production engineering module.')}</p>
                </div>
                <div class="repo-meta-foot">
                    <div class="lang-indicator">
                        <span class="lang-dot ${langClass}"></span>
                        <span>${escapeHtml(repo.language || 'Code')}</span>
                    </div>
                    <div>
                        <span>${repo.closed_source ? 'Live Production' : dateStr}</span>
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
        
        const sourceStatus = repo.closed_source 
            ? 'PROPRIETARY / CLIENT PLATFORM (SOURCE CLOSED)' 
            : 'OPEN SOURCE REPOSITORY';
        document.getElementById('modalCaseKicker').textContent = `CASE STUDY // ${sourceStatus}`;

        const cs = repo.case_study || {
            context: "Engineered to address critical bottlenecks in system performance and reliability.",
            problem: "Developing a robust implementation with zero proprietary lock-in.",
            engineering: "Engineered with modular, low-overhead architectures and rigorous automated validation.",
            architecture: "Client / Input Layer ➔ Hardware/System Layer ➔ Data Processing Engine ➔ Verified Output.",
            result: "Production-ready, highly reliable codebase published as open-source software."
        };

        document.getElementById('modalContext').textContent = cs.context;
        document.getElementById('modalProblem').textContent = cs.problem;
        document.getElementById('modalEngineering').textContent = cs.engineering;
        document.getElementById('modalArchitecture').textContent = cs.architecture;
        document.getElementById('modalResult').textContent = cs.result;

        // Links configuration based on closed_source rule
        const ghBtn = document.getElementById('modalGithubBtn');
        const demoBtn = document.getElementById('modalDemoBtn');
        const closedNotice = document.getElementById('modalClosedNotice');

        if (repo.closed_source) {
            // HARD RULE: Hide GitHub button for closed source
            if (ghBtn) ghBtn.style.display = 'none';
            if (closedNotice) closedNotice.style.display = 'inline-block';
            if (demoBtn) {
                demoBtn.href = repo.homepage;
                demoBtn.style.display = 'inline-flex';
                demoBtn.innerHTML = `<span>VISIT LIVE PLATFORM ↗</span>`;
            }
        } else {
            // Open Source: Show GitHub button
            if (ghBtn) {
                ghBtn.href = repo.html_url;
                ghBtn.style.display = 'inline-flex';
            }
            if (closedNotice) closedNotice.style.display = 'none';
            if (demoBtn) {
                if (repo.homepage && repo.homepage !== repo.html_url) {
                    demoBtn.href = repo.homepage;
                    demoBtn.style.display = 'inline-flex';
                    demoBtn.innerHTML = `<span>LIVE DEMO ↗</span>`;
                } else {
                    demoBtn.style.display = 'none';
                }
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

    // ─── 4b. HISTORICAL ARCHIVE LIGHTBOX SYSTEM ───
    const ARCHIVE_ITEMS = [
        {
            id: 'medal',
            src: 'assets/images/medal.jpg',
            title: '14th SOF National Cyber Olympiad Medal',
            sub: 'Class Topper • Rank 1 (Academic Year 2014–15)',
            category: 'COMPUTING OLYMPIAD // 2014–15',
            desc: 'Class Topper Rank 1 Gold Medal awarded by the Science Olympiad Foundation. This milestone gave me immense validation and motivated me so much that for the next three straight years, I immersed myself in studying C, C++, Java, Arduino, Ruby, and Python under a teacher who understood my curiosity and helped me in achieving fundamental mastery.'
        },
        {
            id: 'rom_fb',
            src: 'assets/images/rom_mod_fb_post.jpg',
            title: 'Original Facebook Post with Shyam Pandey',
            sub: 'March 28, 2017 • Custom ROM & Xposed Framework Era',
            category: 'HISTORICAL ARCHIVE // 2017',
            desc: '“Now a days everyone is mad about custom rom......but here comes ur creativity to modify your boring rom into a peice of art that evry one wants to have..... #xposed_iz_lub #unique #creativity” — Authentic 2017 post tagged with mentor Shyam Pandey while modding the Panasonic Eluga I2.'
        },
        {
            id: 'rom_dialer',
            src: 'assets/images/rom_mod_1sjd.jpg',
            title: 'Custom Minimalist Dialer Mod',
            sub: 'Framework & In-Call Layout Modification',
            category: 'ANDROID ROM MOD // 2017',
            desc: 'Handcrafted custom dialer layout with minimalist typography, custom soft navigation bar, and integrated call framework styling for low-end MediaTek hardware.'
        },
        {
            id: 'rom_assistant',
            src: 'assets/images/rom_mod_2sjd.jpg',
            title: 'Google Assistant Deep Integration',
            sub: 'Build.prop & System Framework Patching',
            category: 'ANDROID ROM MOD // 2017',
            desc: 'Enabled Google Assistant and voice actions on uncertified legacy Android builds via framework XML injection, build.prop spoofing, and Google Play Services patches.'
        },
        {
            id: 'rom_qs',
            src: 'assets/images/rom_mod_3sjd.jpg',
            title: 'Crimson Quick Settings & Battery Pill',
            sub: 'SystemUI Hex Editing & Theme Modding',
            category: 'SYSTEMUI MOD // 2017',
            desc: 'Bespoke dark SystemUI notification shade featuring crimson red toggle highlights, circular battery meter with exact percentage, dual-SIM Jio 4G status indicators, and custom audio profile toggles.'
        },
        {
            id: 'rom_shade',
            src: 'assets/images/rom_mod_4sjd.jpg',
            title: 'Frosted Glass Notification Shade',
            sub: 'Gaussian Blur Background & User Avatar Header',
            category: 'SYSTEMUI MOD // 2017',
            desc: 'Real-time Gaussian blurred background shader layered beneath the notification shade, custom status bar battery pill, and customized user avatar lockscreen tile.'
        }
    ];

    let currentArchiveIndex = 0;

    window.openArchiveModal = function (itemId) {
        const modal = document.getElementById('archiveLightboxModal');
        if (!modal) return;

        let index = ARCHIVE_ITEMS.findIndex(item => item.id === itemId);
        if (index === -1) index = 0;
        currentArchiveIndex = index;

        updateLightboxContent();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeArchiveModal = function () {
        const modal = document.getElementById('archiveLightboxModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    window.navigateArchive = function (direction) {
        currentArchiveIndex = (currentArchiveIndex + direction + ARCHIVE_ITEMS.length) % ARCHIVE_ITEMS.length;
        updateLightboxContent();
    };

    function updateLightboxContent() {
        const item = ARCHIVE_ITEMS[currentArchiveIndex];
        if (!item) return;

        const catEl = document.getElementById('lightboxCategory');
        const titleEl = document.getElementById('lightboxTitle');
        const subEl = document.getElementById('lightboxSub');
        const imgEl = document.getElementById('lightboxImg');
        const descEl = document.getElementById('lightboxDesc');
        const thumbBar = document.getElementById('lightboxThumbBar');

        if (catEl) catEl.textContent = item.category;
        if (titleEl) titleEl.textContent = item.title;
        if (subEl) subEl.textContent = item.sub;
        if (descEl) descEl.textContent = item.desc;

        if (imgEl) {
            imgEl.style.opacity = '0';
            imgEl.style.transform = 'scale(0.96)';
            setTimeout(() => {
                imgEl.src = item.src;
                imgEl.alt = item.title;
                imgEl.style.opacity = '1';
                imgEl.style.transform = 'scale(1)';
            }, 60);
        }

        if (thumbBar) {
            thumbBar.innerHTML = ARCHIVE_ITEMS.map((it, idx) => `
                <button class="lightbox-thumb-btn ${idx === currentArchiveIndex ? 'active' : ''}" onclick="window.setArchiveIndex(${idx})" title="${it.title}">
                    <img src="${it.src}" alt="${it.title}" loading="lazy">
                </button>
            `).join('');
        }
    }

    window.setArchiveIndex = function (idx) {
        if (idx >= 0 && idx < ARCHIVE_ITEMS.length) {
            currentArchiveIndex = idx;
            updateLightboxContent();
        }
    };

    // Backward compatibility for medal triggers
    window.openMedalModal = function () {
        window.openArchiveModal('medal');
    };
    window.closeMedalModal = function () {
        window.closeArchiveModal();
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
            { id: 'web', label: 'WEB PLATFORMS', x: 0.18, y: 0.25, color: '#38bdf8' },
            { id: 'linux', label: 'LINUX KERNEL', x: 0.50, y: 0.20, color: '#3b82f6' },
            { id: 'android', label: 'ANDROID OS', x: 0.82, y: 0.30, color: '#60a5fa' },
            { id: 'rf', label: 'SUB-GHz RF', x: 0.30, y: 0.75, color: '#f59e0b' },
            { id: 'hardware', label: 'ACPI EC & ESP32', x: 0.55, y: 0.80, color: '#fbbf24' },
            { id: 'data', label: 'DATA LAKEHOUSE', x: 0.78, y: 0.70, color: '#10b981' }
        ];

        const connections = [
            [0, 1], [1, 2], [1, 4], [3, 4], [4, 5], [0, 5], [2, 4]
        ];

        let pulses = [
            { conn: 0, progress: 0.1, speed: 0.007, color: '#38bdf8' },
            { conn: 1, progress: 0.4, speed: 0.009, color: '#3b82f6' },
            { conn: 2, progress: 0.7, speed: 0.006, color: '#fbbf24' },
            { conn: 3, progress: 0.2, speed: 0.008, color: '#f59e0b' },
            { conn: 4, progress: 0.8, speed: 0.005, color: '#10b981' },
            { conn: 5, progress: 0.5, speed: 0.007, color: '#38bdf8' }
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
            ctx.fillStyle = '#06080e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Subtle telemetry background grid
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.025)';
            ctx.lineWidth = 1;
            const gridSize = 32;
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Draw Bus Traces
            connections.forEach(([i, j]) => {
                const n1 = nodes[i];
                const n2 = nodes[j];
                const x1 = n1.x * canvas.width;
                const y1 = n1.y * canvas.height;
                const x2 = n2.x * canvas.width;
                const y2 = n2.y * canvas.height;

                const dist1 = Math.hypot(x1 - mouseX, y1 - mouseY);
                const dist2 = Math.hypot(x2 - mouseX, y2 - mouseY);
                const isBusActive = dist1 < 50 || dist2 < 50;

                ctx.strokeStyle = isBusActive ? 'rgba(56, 189, 248, 0.35)' : 'rgba(56, 189, 248, 0.09)';
                ctx.lineWidth = isBusActive ? 2 : 1.2;
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

                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(px, py, 3.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            // Draw Nodes
            nodes.forEach(n => {
                const nx = n.x * canvas.width;
                const ny = n.y * canvas.height;

                const dist = Math.hypot(nx - mouseX, ny - mouseY);
                const isHover = dist < 45;

                // Outer Halo
                if (isHover) {
                    ctx.fillStyle = n.color;
                    ctx.globalAlpha = 0.15;
                    ctx.beginPath();
                    ctx.arc(nx, ny, 22, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }

                // Outer Ring
                ctx.strokeStyle = isHover ? n.color : 'rgba(56, 189, 248, 0.22)';
                ctx.lineWidth = isHover ? 2 : 1;
                ctx.beginPath();
                ctx.arc(nx, ny, isHover ? 14 : 9, 0, Math.PI * 2);
                ctx.stroke();

                // Inner Core
                ctx.fillStyle = n.color;
                ctx.shadowColor = n.color;
                ctx.shadowBlur = isHover ? 12 : 4;
                ctx.beginPath();
                ctx.arc(nx, ny, isHover ? 6 : 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

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
        if (e.key === '`') {
            toggleDiagnosticHud();
            return;
        }

        if (e.key === 'Escape') {
            closeCaseStudy();
            const hud = document.getElementById('diagnosticHud');
            if (hud) hud.classList.remove('active');
            return;
        }

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
        const searchInput = document.getElementById('repoSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim();
                renderRepositories();
            });
        }

        const sortSelect = document.getElementById('repoSortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                renderRepositories();
            });
        }

        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeFilter = pill.getAttribute('data-filter') || 'all';
                renderRepositories();
            });
        });

        const modal = document.getElementById('caseStudyModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeCaseStudy();
            });
        }

        const archiveModal = document.getElementById('archiveLightboxModal');
        if (archiveModal) {
            archiveModal.addEventListener('click', (e) => {
                if (e.target === archiveModal) closeArchiveModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCaseStudy();
                closeArchiveModal();
            } else if (archiveModal && archiveModal.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    navigateArchive(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateArchive(1);
                }
            }
        });

        initArchitectureCanvas();
        initSnakeSlideBar();
        initShyamLoveAnimation();
        loadGitHubData();
    });

    // ─── 6. INTERACTIVE SNAKE SCROLL SLIDE BAR ───
    function initSnakeSlideBar() {
        const wrap = document.getElementById('snakeSlideBar');
        const canvas = document.getElementById('snakeCanvas');
        const tooltip = document.getElementById('snakeTooltip');
        if (!wrap || !canvas) return;

        const ctx = canvas.getContext('2d');
        let width = 0;
        let height = 0;
        let dpr = window.devicePixelRatio || 1;

        function resize() {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }
        resize();
        window.addEventListener('resize', resize);

        const sections = [
            { id: 'hero', label: 'START // HERO' },
            { id: 'domains', label: 'DOMAINS // CAPABILITIES' },
            { id: 'work', label: 'PROJECTS // ARCHIVE' },
            { id: 'timeline', label: 'TIMELINE // 2012–2026' },
            { id: 'agency', label: 'AGENCY // SJ DIGITALS' },
            { id: 'philosophy', label: 'FOUNDATIONS // PHILOSOPHY' },
            { id: 'contact', label: 'DISPATCH // CONTACT' }
        ];

        const marginTop = 50;
        const marginBottom = 50;
        const numSegments = 14;
        const snake = [];
        for (let i = 0; i < numSegments; i++) {
            snake.push({ x: width / 2, y: marginTop });
        }

        let targetY = marginTop;
        let velocityY = 0;
        let lastTargetY = marginTop;
        let isDragging = false;
        let isHovered = false;

        function getScrollFraction() {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            if (max <= 0) return 0;
            return Math.max(0, Math.min(1, window.scrollY / max));
        }

        function getCurrentSectionLabel(frac) {
            const scrollPos = window.scrollY + window.innerHeight * 0.35;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el && el.offsetTop <= scrollPos) {
                    return sections[i].label;
                }
            }
            return sections[0].label;
        }

        function scrollToFrac(frac) {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo({ top: frac * max, behavior: 'auto' });
        }

        function handlePointer(e) {
            const rect = canvas.getBoundingClientRect();
            const clientY = (e.touches && e.touches[0]) ? e.touches[0].clientY : e.clientY;
            const relativeY = clientY - rect.top;
            const trackH = height - marginTop - marginBottom;
            if (trackH > 0) {
                const frac = Math.max(0, Math.min(1, (relativeY - marginTop) / trackH));
                scrollToFrac(frac);
            }
        }

        canvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            handlePointer(e);
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                handlePointer(e);
            }
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            if (!isHovered && tooltip) tooltip.classList.remove('visible');
        });

        canvas.addEventListener('touchstart', (e) => {
            isDragging = true;
            handlePointer(e);
        }, { passive: false });

        window.addEventListener('touchmove', (e) => {
            if (isDragging) {
                e.preventDefault();
                handlePointer(e);
            }
        }, { passive: false });

        window.addEventListener('touchend', () => {
            isDragging = false;
        });

        canvas.addEventListener('mouseenter', () => {
            isHovered = true;
            if (tooltip) tooltip.classList.add('visible');
        });

        canvas.addEventListener('mouseleave', () => {
            isHovered = false;
            if (tooltip && !isDragging) tooltip.classList.remove('visible');
        });

        let time = 0;

        function animate() {
            time += 0.05;
            const trackH = height - marginTop - marginBottom;
            const frac = getScrollFraction();
            targetY = marginTop + frac * trackH;
            velocityY = targetY - lastTargetY;
            lastTargetY = targetY;

            // Head smoothly interpolates to targetY
            snake[0].y += (targetY - snake[0].y) * 0.25;
            const speed = Math.abs(velocityY);
            const waveAmp = Math.min(8, speed * 1.2 + 1.0);
            snake[0].x = (width / 2) + Math.sin(time * 2) * (waveAmp * 0.4);

            // Follower segments slither behind with sinusoidal wave
            for (let i = 1; i < numSegments; i++) {
                const prev = snake[i - 1];
                const cur = snake[i];
                cur.y += (prev.y - cur.y) * 0.38;
                const wave = Math.sin(time * 2.5 - i * 0.55) * (waveAmp * (1 - i / numSegments));
                cur.x = (width / 2) + wave;
            }

            // Update tooltip position & label
            if (tooltip && (isHovered || isDragging)) {
                tooltip.textContent = getCurrentSectionLabel(frac);
                tooltip.style.top = `${Math.max(20, Math.min(height - 40, snake[0].y - 12))}px`;
            }

            // Clear and render canvas
            ctx.clearRect(0, 0, width, height);

            // Draw track line
            const trackX = width / 2;
            ctx.beginPath();
            ctx.moveTo(trackX, marginTop);
            ctx.lineTo(trackX, height - marginBottom);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw section milestones on track
            sections.forEach(sec => {
                const el = document.getElementById(sec.id);
                if (el) {
                    const max = document.documentElement.scrollHeight - window.innerHeight;
                    const secFrac = max > 0 ? Math.min(1, el.offsetTop / max) : 0;
                    const secY = marginTop + secFrac * trackH;
                    ctx.beginPath();
                    ctx.arc(trackX, secY, 2, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
                    ctx.fill();
                }
            });

            // Draw Snake Body
            ctx.save();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = numSegments - 1; i > 0; i--) {
                const p1 = snake[i];
                const p0 = snake[i - 1];
                const segFrac = 1 - (i / numSegments); // 0 at tail, 1 at head
                const segWidth = 2.5 + segFrac * 5.5; // Taper from 8px to 2.5px

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p0.x, p0.y);
                ctx.lineWidth = segWidth;

                if (isDragging) {
                    ctx.strokeStyle = `rgba(245, 158, 11, ${0.3 + segFrac * 0.7})`;
                    ctx.shadowColor = '#f59e0b';
                } else {
                    ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 + segFrac * 0.75})`;
                    ctx.shadowColor = '#38bdf8';
                }
                ctx.shadowBlur = 6 + segFrac * 6;
                ctx.stroke();
            }

            // Draw Snake Head
            const head = snake[0];
            const neck = snake[1] || head;
            const headAngle = Math.atan2(head.y - neck.y, head.x - neck.x) || (Math.PI / 2);
            ctx.save();
            ctx.translate(head.x, head.y);
            ctx.rotate(headAngle);

            // Glowing head aura
            ctx.beginPath();
            ctx.ellipse(0, 0, 6, 4.5, 0, 0, Math.PI * 2);
            ctx.fillStyle = isDragging ? '#fbbf24' : '#38bdf8';
            ctx.shadowColor = isDragging ? '#f59e0b' : '#38bdf8';
            ctx.shadowBlur = 12;
            ctx.fill();

            // Head core
            ctx.beginPath();
            ctx.ellipse(0, 0, 3.5, 2.5, 0, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            // Snake Eyes (cybernetic emerald dots)
            ctx.fillStyle = '#10b981';
            ctx.beginPath();
            ctx.arc(2.5, -2.5, 1.2, 0, Math.PI * 2);
            ctx.arc(2.5, 2.5, 1.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
            ctx.restore();

            requestAnimationFrame(animate);
        }

        animate();
    }

    // ─── 7. SHYAM PANDEY MENTOR LOVE FOUNTAIN ANIMATION ───
    function initShyamLoveAnimation() {
        const hearts = ['❤️', '💖', '💕', '💓', '💗', '✨', '🥰'];

        function spawnHeart(x, y) {
            const heart = document.createElement('div');
            heart.className = 'shyam-heart-particle';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

            const dx = (Math.random() - 0.5) * 64;
            const rot = (Math.random() - 0.5) * 55;
            const size = 15 + Math.random() * 12;

            heart.style.setProperty('--dx', `${dx}px`);
            heart.style.setProperty('--rot', `${rot}deg`);
            heart.style.fontSize = `${size}px`;
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1250);
        }

        document.querySelectorAll('.timeline-mentor-link, [data-mentor-love]').forEach(el => {
            let lastSpawn = 0;

            // On mousemove / hover - gentle streaming fountain
            el.addEventListener('mousemove', (e) => {
                const now = Date.now();
                if (now - lastSpawn > 75) {
                    spawnHeart(e.clientX, e.clientY);
                    lastSpawn = now;
                }
            });

            // On initial hover - instant greeting burst
            el.addEventListener('mouseenter', (e) => {
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => spawnHeart(e.clientX, e.clientY), i * 60);
                }
            });

            // On click - passionate eruption of 14 mini hearts!
            el.addEventListener('click', (e) => {
                for (let i = 0; i < 14; i++) {
                    setTimeout(() => {
                        const jitterX = e.clientX + (Math.random() - 0.5) * 24;
                        const jitterY = e.clientY + (Math.random() - 0.5) * 24;
                        spawnHeart(jitterX, jitterY);
                    }, i * 28);
                }
            });
        });
    }

})();
