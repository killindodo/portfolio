/**
 * SURYA PRATAP / KILLINDODO — DIGITAL HEADQUARTERS
 * Core Architectural Engine: Living System Graph, GitHub Data Layer, Case Studies, Search
 */

(function () {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════
    // COLOR ORCHESTRA ENGINE — imperceptible living color system
    // 4 hue oscillators at irrational period ratios. 18-min base cycle.
    // Updates ALL CSS accent variables every requestAnimationFrame.
    // ═══════════════════════════════════════════════════════════════════
    function initColorOrchestra() {
        const root       = document.documentElement;
        const GOLD_ANG   = 137.507764;
        const T_BASE     = 1080;   // 18-min full cycle in seconds
        // Irrational sub-period wobble denominators (seconds)
        const W1=137.5, W2=383.2, W3=1001.7;
        const W4=211.3, W5=317.9;
        const W6=173.1, W7=258.7;
        const W8=197.4, W9=256.8, WA=143.2;

        function hsl(h,s,l){ return 'hsl('+h.toFixed(2)+','+s.toFixed(2)+'%,'+l.toFixed(2)+'%)'; }
        function hsla(h,s,l,a){ return 'hsla('+h.toFixed(2)+','+s.toFixed(2)+'%,'+l.toFixed(2)+'%,'+a.toFixed(4)+')'; }
        function set(p,v){ root.style.setProperty(p,v); }

        function tick() {
            var t = Date.now() / 1000;

            // Primary hue: slow base + irrational wobbles = non-repeating path
            var h1Raw = (t / T_BASE) * 360
                      + 12 * Math.sin(t / W1)
                      +  6 * Math.sin(t / W2)
                      +  3 * Math.cos(t / W3);
            var h1 = ((h1Raw % 360) + 360) % 360;
            // Golden-angle companions — always spread across spectrum
            var h2 = (h1 + GOLD_ANG)         % 360;
            var h3 = (h1 + GOLD_ANG * 2)     % 360;
            var h4 = (h1 + GOLD_ANG * 0.618) % 360;

            var s1 = 74 + 9  * Math.sin(t / W4);
            var s2 = 85 + 7  * Math.sin(t / W5);
            var l1 = 57 + 4  * Math.sin(t / W6);
            var l2 = 73 + 3  * Math.cos(t / W7);
            var sg = 88 + 5  * Math.sin(t / (W4 * 1.17));
            var ga = 0.32 + 0.06 * Math.sin(t / (W1 * 1.3));

            // accent-violet group (h1)
            set('--accent-violet',       hsl (h1,s1,l1));
            set('--accent-violet-light', hsl (h1,s2,l2));
            set('--accent-violet-glow',  hsla(h1,s1,l1,ga));
            // accent-pink group (h4)
            set('--accent-pink',         hsl (h4,s1,l1));
            set('--accent-pink-light',   hsl (h4,s2,l2));
            set('--accent-pink-glow',    hsla(h4,s1,l1,ga*0.9));
            // accent-teal group (h3)
            set('--accent-teal',         hsl (h3,s1,l1));
            set('--accent-teal-light',   hsl (h3,s2,l2));
            set('--accent-teal-glow',    hsla(h3,s1,l1,ga*0.8));
            // accent-gold group (h2)
            set('--accent-gold',         hsl (h2,sg,l1));
            set('--accent-gold-light',   hsl (h2,sg+5,l2));
            set('--accent-gold-glow',    hsla(h2,sg,l1,ga*0.85));

            // spec aliases
            set('--spec-cyan',           hsl (h3,s1,l1));
            set('--spec-cyan-light',     hsl (h3,s2,l2));
            set('--spec-cyan-glow',      hsla(h3,s1,l1,ga*0.8));
            set('--spec-cobalt',         hsl (h1,s1,l1));
            set('--spec-cobalt-light',   hsl (h1,s2,l2));
            set('--spec-cobalt-glow',    hsla(h1,s1,l1,ga*0.8));
            set('--spec-amber',          hsl (h2,sg,l1));
            set('--spec-amber-light',    hsl (h2,sg+5,l2));
            set('--spec-amber-glow',     hsla(h2,sg,l1,ga*0.8));
            set('--spec-emerald',        hsl (h4,s1,l1));
            set('--spec-emerald-light',  hsl (h4,s2,l2));
            set('--spec-emerald-glow',   hsla(h4,s1,l1,ga*0.8));
            set('--cobalt',              hsl (h1,s1,l1));
            set('--cobalt-light',        hsl (h1,s2,l2));
            set('--cobalt-glow',         hsla(h1,s1,l1,ga*0.8));
            set('--amber',               hsl (h2,sg,l1));
            set('--amber-light',         hsl (h2,sg+5,l2));
            set('--amber-glow',          hsla(h2,sg,l1,ga*0.8));
            set('--emerald',             hsl (h4,s1,l1));
            set('--emerald-glow',        hsla(h4,s1,l1,ga*0.8));
            set('--cyan',                hsl (h3,s1,l1));

            // borders
            var bA = 0.10 + 0.04 * Math.sin(t / WA);
            set('--border-hairline', hsla(h1,55,72,bA));
            set('--border-subtle',   hsla(h1,55,72,bA*2));
            set('--border-accent',   hsla(h1,s1,l1,0.5));

            // aurora blobs
            var a1 = 0.14 + 0.06 * Math.sin(t / W8);
            var a2 = 0.11 + 0.05 * Math.sin(t / W9 + 1.2);
            set('--aurora-c1', hsla(h1,s1,l1,a1));
            set('--aurora-c2', hsla(h4,s1,l1,a2*0.9));
            set('--aurora-c3', hsla(h2,sg,l1,a2*0.7));
            set('--aurora-c4', hsla(h3,s1,l1,a2*0.7));
            set('--aurora-c5', hsla(h4,s1,l1,0.045+0.025*Math.sin(t/(W8+W9))));

            // hero name gradient midpoints
            set('--hero-grad-mid', hsl(h1,s2*0.7,88));
            set('--hero-grad-end', hsl(h4,s2*0.75,84));

            // shadows
            set('--shadow-card',     '0 12px 32px -10px rgba(0,0,0,0.88), 0 0 1px '+hsla(h1,s1,l1,0.18));
            set('--shadow-elevated', '0 24px 55px -10px rgba(0,0,0,0.95), 0 0 24px '+hsla(h1,s1,l1,0.12));

            requestAnimationFrame(tick);
        }

        tick();
    }



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
            homepage: "https://chandrawatienterprises.vercel.app",
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
            name: "twrp-moto-pad-60-pro",
            title: "TWRP 3.7.1 Custom Recovery (Moto Pad 60 Pro — Android 16 & 14)",
            description: "Custom recovery device trees for Motorola Moto Pad 60 Pro (XT2571-1) and Lenovo Idea Tab Pro 12.7 (TB373FU) on MediaTek Dimensity 8300 (MT6897). Engineered on Android GKI Boot Header v4 with recovery embedded inside vendor_boot.img, dynamic EROFS/F2FS system mounting, hardware KMS graphics acceleration at 2944x1840 @ 144Hz, and full Android 16 (LineageOS 23) compatibility.",
            category: "android",
            featured: true,
            closed_source: false,
            language: "C++",
            html_url: "https://github.com/killindodo/TWRP-A16-moto-pad-60-pro",
            homepage: "https://github.com/killindodo/TWRP-A16-moto-pad-60-pro",
            stargazers_count: 5,
            updated_at: "2026-09-18T10:20:00Z",
            topics: ["android", "dimensity-8300", "erofs", "fastboot", "gki", "lineageos-23", "twrp", "vendor-boot"],
            specs: {
                architecture: "Android GKI Boot Header v4 & Embedded vendor_boot Recovery",
                stack: "C++, Device Trees, Linux Kernel 6.1 GKI, DRM/KMS Display Subsystem",
                platform: "MediaTek Dimensity 8300 (Moto Pad 60 Pro XT2571-1 / TB373FU)",
                role: "Android Systems & Recovery Architect"
            },
            case_study: {
                context: "Modern Android devices utilizing Google Generic Kernel Image (GKI) eliminate traditional recovery partitions and bundle recovery ramdisks into vendor_boot.",
                problem: "Build a stable, touch-responsive TWRP custom recovery for the 144Hz high-resolution display of Moto Pad 60 Pro across both Android 14 ZUI and Android 16 LineageOS 23.",
                engineering: "Reverse-engineered hardware display timings for hardware KMS rendering at 2944x1840, configured dynamic partition management (EROFS and encrypted F2FS), and verified fastboot flashing scripts.",
                architecture: "Fastboot USB Transport ➔ vendor_boot_a Partition ➔ GKI Ramdisk Unpack ➔ Hardware KMS TWRP GUI ➔ Dynamic Partition Mounting.",
                result: "Fully functional touchscreen recovery with MTP support, ADB sideload, dynamic partition flashing, and multi-Android generation compatibility."
            }
        },
        {
            name: "merlin-net-hunter-kernel-MT7601U-WiFi-Adapter-Support-",
            title: "MT7601U WiFi Driver Patch on Kali NetHunter",
            description: "Custom Linux kernel compilation and driver backport enabling external USB MT7601U wireless adapters and packet monitor mode on Kali NetHunter for ARM64 Android devices.",
            category: "linux",
            featured: true,
            closed_source: false,
            language: "C",
            html_url: "https://github.com/killindodo/merlin-net-hunter-kernel-MT7601U-WiFi-Adapter-Support-",
            homepage: "https://github.com/killindodo/merlin-net-hunter-kernel-MT7601U-WiFi-Adapter-Support-",
            stargazers_count: 2,
            updated_at: "2026-08-13T13:50:26Z",
            topics: ["airmon-ng", "arm64", "kali-nethunter", "kernel-patch", "linux-kernel", "monitor-mode", "mt7601u", "packet-injection"],
            specs: {
                architecture: "Kernel Tree Patch & Driver Module Compilation",
                stack: "C, Linux Kernel 4.14 Source, Proton-Clang LLVM 13, mac80211 Subsystem",
                platform: "ARM64 Linux Kernel for MediaTek Merlin (Redmi Note 9)",
                role: "Kernel Developer & Security Researcher"
            },
            case_study: {
                context: "Penetration testers using Kali NetHunter on ARM64 smartphones frequently experience silent crashes or lack of monitor mode when plugging in low-cost USB WiFi adapters.",
                problem: "The stock vendor kernel failed to enumerate MT7601U chipsets and failed compilation with modern LLVM/Clang due to GNU C dialect incompatibilities.",
                engineering: "Patched driver sources within kernel 4.14 tree, resolved Proton-Clang toolchain linker conflicts with glibc, enabled mac80211 monitor mode hooks, and compiled standalone modules.",
                architecture: "USB OTG Bus ➔ Linux USB Core ➔ mt7601u Kernel Driver ➔ mac80211 Wireless Stack ➔ Kali NetHunter airmon-ng / airodump-ng.",
                result: "Zero-crash raw frame injection and beacon capture operating seamlessly on mobile hardware."
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
        const q = (repoName || '').toLowerCase();
        const repo = allRepositories.find(r => 
            r.name.toLowerCase() === q || 
            (q.includes('twrp') && r.name.toLowerCase().includes('twrp')) ||
            (q.includes('merlin') && r.name.toLowerCase().includes('merlin')) ||
            (r.title && r.title.toLowerCase().includes(q))
        ) || fallbackRepositories[0];
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
    // ─── 5. LIVING SYSTEM ARCHITECTURE CANVAS (CYBERNETIC SYSTEMS MATRIX) ───
    function initArchitectureCanvas() {
        const canvas = document.getElementById('architectureCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let dpr = window.devicePixelRatio || 1;
        let width = 0;
        let height = 0;

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.offsetWidth || 800;
            height = canvas.offsetHeight || 350;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener('resize', resize);

        // ─── Cybernetic Nodes (Hacking, Modding, Low-Level, Hardware, Lakehouse) ───
        const nodes = [
            {
                id: 'core',
                name: 'SURYA_CORE',
                subtitle: 'UID 0 // ROOT ARCHITECT',
                tag: 'ROOT_UID0',
                x: 0.50, y: 0.48,
                color: '#38bdf8',
                accent: '#0284c7',
                radius: 13,
                stats: [
                    'ROLE: MULTI-SYSTEMS ARCHITECT & EXPLOIT DEV',
                    'BUS RING: 0.12ms INTER-NODE BUS LATENCY',
                    'SECURITY: SELINUX POLICY PERMISSIVE / ENFORCED',
                    'STATE: ALL 5 CYBERNETIC FEEDS SYNCHRONIZED'
                ]
            },
            {
                id: 'rf',
                name: 'TI CC1101 SUB-GHz',
                subtitle: 'RF PACKET SNIFFER & REPLAY',
                tag: 'RF_433',
                x: 0.18, y: 0.24,
                color: '#f59e0b',
                accent: '#d97706',
                radius: 9,
                stats: [
                    'CARRIER: 433.920 MHz (ISM FREQ BAND)',
                    'MODULATION: 2-FSK / ASK / OOK DEMOD',
                    'PACKET: PREAMBLE 0xAA 0xD3 SYNC WORD',
                    'ATTACK: ROLLING CODE CAPTURE & REPLAY'
                ]
            },
            {
                id: 'kernel',
                name: 'LINUX GKI & ACPI EC',
                subtitle: 'RING 0 KERNELSPACE & DRIVERS',
                tag: 'RING_0',
                x: 0.50, y: 0.16,
                color: '#60a5fa',
                accent: '#2563eb',
                radius: 9,
                stats: [
                    'KERNEL: 6.1.75-android14-gki AOSP',
                    'IOCTL: /dev/acpi_ec SMBus READ/WRITE',
                    'TRACING: eBPF KPROBES sys_enter HOOKS',
                    'ROOTFS: EROFS + LZ4HC DECOMPRESS 0.08ms'
                ]
            },
            {
                id: 'android',
                name: 'NETHUNTER & XPOSED',
                subtitle: 'WIRELESS SEC & ART BYTECODE',
                tag: 'DROID_SEC',
                x: 0.82, y: 0.24,
                color: '#ec4899',
                accent: '#db2777',
                radius: 9,
                stats: [
                    'IFACE: wlan0mon (802.11 MONITOR MODE)',
                    'INJECTION: RAW BEACON / DEAUTH FORGERY',
                    'BYTECODE: XposedBridge.hookMethod()',
                    'ROOT: KernelSU KERNEL-LEVEL NAMESPACE'
                ]
            },
            {
                id: 'silicon',
                name: 'ESP32 & RP2040 BUS',
                subtitle: 'SPI / I2C LOGIC ANALYZER',
                tag: 'SILICON',
                x: 0.20, y: 0.74,
                color: '#10b981',
                accent: '#059669',
                radius: 9,
                stats: [
                    'BUS: DUAL SPI @ 10 MHz DMA RX/TX RING',
                    'I2C: 0x3C OLED + 0x68 GYRO SENSORS',
                    'IRQ: GDO0 FALLING EDGE INTERRUPT',
                    'BITBANG: HIGH-SPEED PARALLEL GPIO'
                ]
            },
            {
                id: 'data',
                name: 'DELTA LAKE & SPARK',
                subtitle: 'MEDALLION STREAMING LAKEHOUSE',
                tag: 'LAKEHOUSE',
                x: 0.80, y: 0.74,
                color: '#a855f7',
                accent: '#7e22ce',
                radius: 9,
                stats: [
                    'ENGINE: PySpark 3.4 STRUCTURED STREAM',
                    'MEDALLION: BRONZE -> SILVER -> GOLD',
                    'THROUGHPUT: 142,000 REC/SEC BURST',
                    'ACID: SERIALIZABLE SNAPSHOT ISOLATION'
                ]
            }
        ];

        // ─── Chamfered PCB Routes with Authentic 45-degree Traces ───
        const routes = [
            // RF -> CORE
            { from: 1, to: 0, waypoints: [{x: 0.18, y: 0.24}, {x: 0.34, y: 0.24}, {x: 0.44, y: 0.42}, {x: 0.50, y: 0.48}], color: '#f59e0b' },
            // KERNEL -> CORE
            { from: 2, to: 0, waypoints: [{x: 0.50, y: 0.16}, {x: 0.50, y: 0.48}], color: '#60a5fa' },
            // ANDROID -> CORE
            { from: 3, to: 0, waypoints: [{x: 0.82, y: 0.24}, {x: 0.66, y: 0.24}, {x: 0.56, y: 0.42}, {x: 0.50, y: 0.48}], color: '#ec4899' },
            // SILICON -> CORE
            { from: 4, to: 0, waypoints: [{x: 0.20, y: 0.74}, {x: 0.35, y: 0.74}, {x: 0.44, y: 0.54}, {x: 0.50, y: 0.48}], color: '#10b981' },
            // DATA -> CORE
            { from: 5, to: 0, waypoints: [{x: 0.80, y: 0.74}, {x: 0.65, y: 0.74}, {x: 0.56, y: 0.54}, {x: 0.50, y: 0.48}], color: '#a855f7' },
            // HARDWARE BUS: RF -> SILICON (CC1101 SPI control by ESP32)
            { from: 1, to: 4, waypoints: [{x: 0.18, y: 0.24}, {x: 0.10, y: 0.32}, {x: 0.10, y: 0.66}, {x: 0.20, y: 0.74}], color: '#f59e0b' },
            // KERNEL -> ANDROID (GKI NetHunter Kernel Module link)
            { from: 2, to: 3, waypoints: [{x: 0.50, y: 0.16}, {x: 0.68, y: 0.16}, {x: 0.82, y: 0.24}], color: '#ec4899' },
            // KERNEL -> SILICON (ACPI EC Hardware Interface)
            { from: 2, to: 4, waypoints: [{x: 0.50, y: 0.16}, {x: 0.32, y: 0.16}, {x: 0.20, y: 0.24}], color: '#60a5fa' }
        ];

        function getPointAlongPath(pts, progress) {
            let totalLen = 0;
            const lens = [];
            for (let i = 0; i < pts.length - 1; i++) {
                const dx = pts[i+1].x - pts[i].x;
                const dy = pts[i+1].y - pts[i].y;
                const l = Math.hypot(dx, dy);
                lens.push(l);
                totalLen += l;
            }
            if (totalLen <= 0) return { x: pts[0].x, y: pts[0].y, angle: 0 };

            const target = Math.max(0, Math.min(1, progress)) * totalLen;
            let acc = 0;
            for (let i = 0; i < lens.length; i++) {
                if (acc + lens[i] >= target || i === lens.length - 1) {
                    const segProgress = lens[i] > 0 ? (target - acc) / lens[i] : 0;
                    const p1 = pts[i];
                    const p2 = pts[i+1];
                    return {
                        x: p1.x + (p2.x - p1.x) * segProgress,
                        y: p1.y + (p2.y - p1.y) * segProgress,
                        angle: Math.atan2(p2.y - p1.y, p2.x - p1.x)
                    };
                }
                acc += lens[i];
            }
            return { x: pts[pts.length - 1].x, y: pts[pts.length - 1].y, angle: 0 };
        }

        // Continuous streaming bus pulses
        const opcodes = ['0xAA', '0xD3', '0x9B', 'SYN', 'ACK', 'DMA', 'eBPF', 'KSU', 'IRQ', '433M'];
        const pulses = [
            { route: 0, progress: 0.15, speed: 0.007, color: '#f59e0b', opcode: '0xAA' },
            { route: 1, progress: 0.45, speed: 0.009, color: '#60a5fa', opcode: 'eBPF' },
            { route: 2, progress: 0.70, speed: 0.008, color: '#ec4899', opcode: 'KSU' },
            { route: 3, progress: 0.20, speed: 0.006, color: '#10b981', opcode: 'DMA' },
            { route: 4, progress: 0.85, speed: 0.007, color: '#a855f7', opcode: 'ACID' },
            { route: 5, progress: 0.35, speed: 0.008, color: '#f59e0b', opcode: 'SPI' },
            { route: 6, progress: 0.60, speed: 0.009, color: '#ec4899', opcode: 'RAW' },
            { route: 7, progress: 0.10, speed: 0.006, color: '#60a5fa', opcode: 'SMB' }
        ];

        // Exploit injection burst particles & shockwaves
        let bursts = [];
        let shockwaves = [];
        let selectedNode = null;
        let hoveredNode = null;
        let mouseX = -1;
        let mouseY = -1;

        // Rolling Cyber-Terminal Logs
        const terminalLogs = [
            '[SYS_LOG] CC1101: 433.92 MHz carrier locked // PREAMBLE_SYNC_OK (0xAA 0xD3)',
            '[KSU_ROOT] KernelSU: hook sys_faccessat2 // UID 0 granted to /sbin/su',
            '[NETHUNTER] wlan0mon: 802.11 monitor mode active // raw frame injection OK',
            '[XPOSED] ART Runtime: XposedBridge.hookMethod() attached to SystemUI',
            '[ACPI_EC] /dev/acpi_ec: SMBus byte 0x68 read status 0x01 [thermal_dma]',
            '[RP2040] PIO State Machine 0: 8-bit parallel bus clock locked @ 125MHz',
            '[DELTA] DeltaLake: Commit version #4,892 verified // ACID snapshot isolated',
            '[GKI_MOD] init_module: sys_custom_sensor.ko loaded [Taint: P, Ring 0]',
            '[ESP32] SPI2 DMA ring buffer dispatched 1024 bytes to CC1101 RF chip',
            '[PYSPARK] StreamingQuery: 142,000 rec/s // checkpoint /lakehouse/gold/sensors',
            '[EROFS] /system_ext mounted ro,lazytime // LZ4HC block decompress 0.08ms',
            '[OP_SURYA] All 6 cybernetic vectors synchronized // Nexus operational'
        ];
        let currentLogIndex = 0;
        let logTimer = 0;
        let logFlash = '';

        // Audio synthesizer feedback (subtle cyber chirrup)
        let audioCtx = null;
        function playChirp(freq, dur) {
            try {
                if (!audioCtx) {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    if (AudioContext) audioCtx = new AudioContext();
                }
                if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
                if (audioCtx) {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq || 980, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime((freq || 980) * 1.5, audioCtx.currentTime + dur);
                    gain.gain.setValueAtTime(0.025, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start();
                    osc.stop(audioCtx.currentTime + dur);
                }
            } catch (e) {}
        }

        // Exploit Injection Trigger
        function injectExploit(nodeIndex) {
            const node = nodes[nodeIndex];
            selectedNode = node;
            playChirp(880, 0.09);
            setTimeout(() => playChirp(1320, 0.12), 45);

            // Shockwave ring
            shockwaves.push({
                x: node.x * width,
                y: node.y * height,
                radius: 12,
                maxRadius: 75,
                color: node.color,
                alpha: 1
            });

            // Burst particles along connected routes
            routes.forEach((r, rIdx) => {
                if (r.from === nodeIndex || r.to === nodeIndex) {
                    const isForward = (r.from === nodeIndex);
                    for (let p = 0; p < 3; p++) {
                        bursts.push({
                            route: rIdx,
                            progress: isForward ? 0 : 1,
                            speed: (isForward ? 1 : -1) * (0.016 + Math.random() * 0.018),
                            color: node.color,
                            opcode: opcodes[Math.floor(Math.random() * opcodes.length)],
                            life: 1
                        });
                    }
                }
            });

            // Instant telemetry log and footer status
            logFlash = `[INJECT_OK] EXPLOIT STROBE >>> 0xAA 0xD3 0x9B 0x7E DISPATCHED TO [${node.tag}]!`;
            const statusEl = document.getElementById('canvasMatrixStatus');
            if (statusEl) {
                statusEl.textContent = `BUS INJECTION: ${node.tag} ACTIVE // 0xAA 0xD3`;
                statusEl.style.color = node.color;
            }
        }

        // Mouse & Touch Interaction
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            mouseX = -1;
            mouseY = -1;
            hoveredNode = null;
        });

        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;

            let clickedIdx = -1;
            nodes.forEach((n, idx) => {
                const nx = n.x * width;
                const ny = n.y * height;
                if (Math.hypot(nx - cx, ny - cy) < 32) {
                    clickedIdx = idx;
                }
            });

            if (clickedIdx !== -1) {
                injectExploit(clickedIdx);
            } else {
                selectedNode = null;
            }
        });

        let lastTime = 0;

        function draw(timestamp) {
            const time = timestamp * 0.001 || 0;
            const delta = (timestamp - lastTime) * 0.001 || 0.016;
            lastTime = timestamp;

            // Background cybernetic canvas
            ctx.fillStyle = '#05030c';
            ctx.fillRect(0, 0, width, height);

            // Subtle Circuit / Telemetry Grid
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.028)';
            ctx.lineWidth = 1;
            const gridSize = 28;
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Grid intersection crosshairs
            ctx.fillStyle = 'rgba(56, 189, 248, 0.06)';
            for (let x = gridSize; x < width; x += gridSize * 2) {
                for (let y = gridSize; y < height - 30; y += gridSize * 2) {
                    ctx.fillRect(x - 2, y, 5, 1);
                    ctx.fillRect(x, y - 2, 1, 5);
                }
            }

            // Central Nexus Radar Sweep & Range Rings
            const coreNode = nodes[0];
            const ccX = coreNode.x * width;
            const ccY = coreNode.y * height;

            ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
            ctx.lineWidth = 1;
            [26, 50, 76].forEach(r => {
                ctx.beginPath();
                ctx.arc(ccX, ccY, r, 0, Math.PI * 2);
                ctx.stroke();
            });

            // Rotating Radar Sweep Beam
            const sweepAngle = (time * 1.6) % (Math.PI * 2);
            const sweepRadius = 76;
            const radarGrad = ctx.createRadialGradient(ccX, ccY, 4, ccX, ccY, sweepRadius);
            radarGrad.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
            radarGrad.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
            ctx.fillStyle = radarGrad;
            ctx.beginPath();
            ctx.moveTo(ccX, ccY);
            ctx.arc(ccX, ccY, sweepRadius, sweepAngle - 0.42, sweepAngle);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(ccX, ccY);
            ctx.lineTo(ccX + Math.cos(sweepAngle) * sweepRadius, ccY + Math.sin(sweepAngle) * sweepRadius);
            ctx.stroke();

            // Detect hovered node
            hoveredNode = null;
            nodes.forEach((n, idx) => {
                const nx = n.x * width;
                const ny = n.y * height;
                if (Math.hypot(nx - mouseX, ny - mouseY) < 32) {
                    hoveredNode = n;
                }
            });

            // Draw Chamfered PCB Copper Traces & Vias
            routes.forEach(r => {
                const pts = r.waypoints.map(wp => ({ x: wp.x * width, y: wp.y * height }));
                const isAdjacent = (hoveredNode && (nodes[r.from] === hoveredNode || nodes[r.to] === hoveredNode)) ||
                                   (selectedNode && (nodes[r.from] === selectedNode || nodes[r.to] === selectedNode));

                // Copper Base Trace
                ctx.strokeStyle = isAdjacent ? r.color : 'rgba(56, 189, 248, 0.12)';
                ctx.lineWidth = isAdjacent ? 2.2 : 1.2;
                if (isAdjacent) {
                    ctx.shadowColor = r.color;
                    ctx.shadowBlur = 8;
                }
                ctx.beginPath();
                pts.forEach((pt, pIdx) => {
                    if (pIdx === 0) ctx.moveTo(pt.x, pt.y);
                    else ctx.lineTo(pt.x, pt.y);
                });
                ctx.stroke();
                ctx.shadowBlur = 0;

                // Through-Hole Copper Vias at Waypoints
                pts.forEach(pt => {
                    ctx.strokeStyle = isAdjacent ? r.color : 'rgba(245, 158, 11, 0.4)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 2.8, 0, Math.PI * 2);
                    ctx.stroke();

                    ctx.fillStyle = '#05030c';
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 1.4, 0, Math.PI * 2);
                    ctx.fill();
                });
            });

            // Draw Signal Pulses along PCB Routes
            pulses.forEach(p => {
                p.progress += p.speed;
                if (p.progress > 1) p.progress = 0;

                const r = routes[p.route];
                const pts = r.waypoints.map(wp => ({ x: wp.x * width, y: wp.y * height }));
                const pos = getPointAlongPath(pts, p.progress);

                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Small Hex Opcode Badge drifting with pulse
                if (p.progress > 0.35 && p.progress < 0.65) {
                    ctx.fillStyle = 'rgba(5, 3, 14, 0.85)';
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = 0.8;
                    const badgeW = 28;
                    const badgeH = 12;
                    ctx.strokeRect(pos.x - badgeW/2, pos.y - 14, badgeW, badgeH);
                    ctx.fillRect(pos.x - badgeW/2, pos.y - 14, badgeW, badgeH);

                    ctx.fillStyle = p.color;
                    ctx.font = '7.5px "Fira Code", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(p.opcode, pos.x, pos.y - 5);
                }
            });

            // Draw Exploit Bursts
            for (let i = bursts.length - 1; i >= 0; i--) {
                const b = bursts[i];
                b.progress += b.speed;
                b.life -= 0.014;

                const r = routes[b.route];
                const pts = r.waypoints.map(wp => ({ x: wp.x * width, y: wp.y * height }));
                const pos = getPointAlongPath(pts, b.progress);

                ctx.fillStyle = b.color;
                ctx.shadowColor = b.color;
                ctx.shadowBlur = 12;
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Opcode spark label
                ctx.fillStyle = '#ffffff';
                ctx.font = '8px "Fira Code", monospace';
                ctx.textAlign = 'center';
                ctx.fillText(b.opcode, pos.x, pos.y - 8);

                if (b.life <= 0 || b.progress < 0 || b.progress > 1) {
                    bursts.splice(i, 1);
                }
            }

            // Draw Shockwaves
            for (let i = shockwaves.length - 1; i >= 0; i--) {
                const sw = shockwaves[i];
                sw.radius += 2.2;
                sw.alpha -= 0.03;

                ctx.strokeStyle = sw.color;
                ctx.globalAlpha = Math.max(0, sw.alpha);
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.globalAlpha = 1;

                if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
                    shockwaves.splice(i, 1);
                }
            }

            // ─── Mini Real-Time Oscilloscope under CC1101 RF Node ───
            const rfNode = nodes[1];
            const oscX = rfNode.x * width;
            const oscY = rfNode.y * height + 28;
            const oscW = Math.min(106, width * 0.17);
            const oscH = 16;

            ctx.fillStyle = 'rgba(245, 158, 11, 0.05)';
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.28)';
            ctx.lineWidth = 1;
            ctx.strokeRect(oscX - oscW/2, oscY - oscH/2, oscW, oscH);
            ctx.fillRect(oscX - oscW/2, oscY - oscH/2, oscW, oscH);

            // 2-FSK Modulated Sine Wave
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            for (let ox = 0; ox < oscW; ox += 2) {
                const worldX = oscX - oscW/2 + ox;
                const isHighFreq = (Math.sin(time * 2.5 + ox * 0.06) > 0);
                const freq = isHighFreq ? 0.38 : 0.18;
                const oy = oscY + Math.sin(time * 9 + ox * freq) * 5;
                if (ox === 0) ctx.moveTo(worldX, oy);
                else ctx.lineTo(worldX, oy);
            }
            ctx.stroke();

            ctx.fillStyle = '#f59e0b';
            ctx.font = '7.5px "Fira Code", monospace';
            ctx.textAlign = 'center';
            ctx.fillText('433.92 MHz // 2-FSK', oscX, oscY + oscH/2 + 9);

            // ─── Mini Real-Time Logic Analyzer Clock under Silicon Node ───
            const silNode = nodes[4];
            const logX = silNode.x * width;
            const logY = silNode.y * height - 28;
            const logW = Math.min(106, width * 0.17);
            const logH = 14;

            ctx.fillStyle = 'rgba(16, 185, 129, 0.05)';
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.28)';
            ctx.lineWidth = 1;
            ctx.strokeRect(logX - logW/2, logY - logH/2, logW, logH);
            ctx.fillRect(logX - logW/2, logY - logH/2, logW, logH);

            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            const clkPeriod = 14;
            const shift = (time * 42) % clkPeriod;
            for (let lx = 0; lx < logW; lx += 2) {
                const pos = (lx + shift) % clkPeriod;
                const isHigh = pos < clkPeriod / 2;
                const py = isHigh ? logY - 4 : logY + 4;
                const px = logX - logW/2 + lx;
                if (lx === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();

            ctx.fillStyle = '#10b981';
            ctx.font = '7.5px "Fira Code", monospace';
            ctx.textAlign = 'center';
            ctx.fillText('SPI_CLK 10MHz [DMA]', logX, logY - logH/2 - 4);

            // ─── Draw Cybernetic Nodes ───
            nodes.forEach(n => {
                const nx = n.x * width;
                const ny = n.y * height;
                const isHover = (hoveredNode === n);
                const isSelected = (selectedNode === n);

                // Tactical Corner Brackets
                const bSize = isHover ? 18 : 13;
                const bLen = 5;
                ctx.strokeStyle = (isHover || isSelected) ? n.color : 'rgba(255, 255, 255, 0.22)';
                ctx.lineWidth = 1.4;

                // Top-Left
                ctx.beginPath();
                ctx.moveTo(nx - bSize, ny - bSize + bLen);
                ctx.lineTo(nx - bSize, ny - bSize);
                ctx.lineTo(nx - bSize + bLen, ny - bSize);
                ctx.stroke();
                // Top-Right
                ctx.beginPath();
                ctx.moveTo(nx + bSize - bLen, ny - bSize);
                ctx.lineTo(nx + bSize, ny - bSize);
                ctx.lineTo(nx + bSize, ny - bSize + bLen);
                ctx.stroke();
                // Bottom-Left
                ctx.beginPath();
                ctx.moveTo(nx - bSize, ny + bSize - bLen);
                ctx.lineTo(nx - bSize, ny + bSize);
                ctx.lineTo(nx - bSize + bLen, ny + bSize);
                ctx.stroke();
                // Bottom-Right
                ctx.beginPath();
                ctx.moveTo(nx + bSize - bLen, ny + bSize);
                ctx.lineTo(nx + bSize, ny + bSize);
                ctx.lineTo(nx + bSize, ny + bSize - bLen);
                ctx.stroke();

                // Pulsing Halo when active
                if (isHover || isSelected) {
                    ctx.fillStyle = n.color;
                    ctx.globalAlpha = 0.18;
                    ctx.beginPath();
                    ctx.arc(nx, ny, 24, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }

                // Core Dot
                ctx.fillStyle = n.color;
                ctx.shadowColor = n.color;
                ctx.shadowBlur = (isHover || isSelected) ? 16 : 6;
                ctx.beginPath();
                ctx.arc(nx, ny, (isHover || isSelected) ? 6.5 : 4.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Node Badge & Title (with dark pill backing so lines never obscure text)
                const labelText = n.name;
                ctx.font = 'bold 9.5px "Fira Code", monospace';
                const textW = ctx.measureText(labelText).width;
                const pillY = (n.id === 'silicon' || n.id === 'data') ? ny + 18 : ny - 20;

                ctx.fillStyle = 'rgba(5, 3, 14, 0.88)';
                ctx.strokeStyle = (isHover || isSelected) ? n.color : 'rgba(56, 189, 248, 0.2)';
                ctx.lineWidth = 0.8;
                ctx.strokeRect(nx - textW/2 - 6, pillY - 7, textW + 12, 14);
                ctx.fillRect(nx - textW/2 - 6, pillY - 7, textW + 12, 14);

                ctx.fillStyle = (isHover || isSelected) ? '#ffffff' : '#94a3b8';
                ctx.textAlign = 'center';
                ctx.fillText(labelText, nx, pillY + 3.5);
            });

            // ─── Tactical Inspection HUD Card (On Hover or Selection) ───
            const activeNode = hoveredNode || selectedNode;
            if (activeNode) {
                const nx = activeNode.x * width;
                const ny = activeNode.y * height;

                const cardW = 205;
                const cardH = 88;
                let cardX = nx + 25;
                let cardY = ny - cardH / 2;

                if (activeNode.x > 0.6) {
                    cardX = nx - cardW - 25;
                } else if (activeNode.x > 0.4) {
                    cardX = nx - cardW / 2;
                    cardY = (activeNode.y > 0.5) ? ny - cardH - 24 : ny + 24;
                }
                cardX = Math.max(12, Math.min(width - cardW - 12, cardX));
                cardY = Math.max(10, Math.min(height - cardH - 34, cardY));

                // Card Background & Neon Border
                ctx.fillStyle = 'rgba(5, 3, 14, 0.94)';
                ctx.strokeStyle = activeNode.color;
                ctx.lineWidth = 1.2;
                ctx.shadowColor = activeNode.color;
                ctx.shadowBlur = 12;
                ctx.strokeRect(cardX, cardY, cardW, cardH);
                ctx.fillRect(cardX, cardY, cardW, cardH);
                ctx.shadowBlur = 0;

                // Tactical Corner Accent Marks
                ctx.fillStyle = activeNode.color;
                ctx.fillRect(cardX - 1, cardY - 1, 6, 2);
                ctx.fillRect(cardX - 1, cardY - 1, 2, 6);
                ctx.fillRect(cardX + cardW - 5, cardY - 1, 6, 2);
                ctx.fillRect(cardX + cardW - 1, cardY - 1, 2, 6);

                // Card Header
                ctx.fillStyle = activeNode.color;
                ctx.font = 'bold 9px "Fira Code", monospace';
                ctx.textAlign = 'left';
                ctx.fillText(`// TELEMETRY: ${activeNode.tag}`, cardX + 10, cardY + 15);

                // Status Blinking Indicator
                const blink = (Math.floor(time * 3) % 2 === 0);
                ctx.fillStyle = blink ? activeNode.color : '#334155';
                ctx.beginPath();
                ctx.arc(cardX + cardW - 12, cardY + 12, 3, 0, Math.PI * 2);
                ctx.fill();

                // 4 Lines of Real Technical Telemetry
                ctx.font = '8px "Fira Code", monospace';
                activeNode.stats.forEach((stat, sIdx) => {
                    ctx.fillStyle = '#94a3b8';
                    ctx.fillText(`> ${stat}`, cardX + 10, cardY + 30 + (sIdx * 12));
                });

                // Bottom Callout
                ctx.fillStyle = '#f59e0b';
                ctx.font = '7.5px "Fira Code", monospace';
                ctx.fillText('[CLICK TO INJECT EXPLOIT PULSE]', cardX + 10, cardY + cardH - 6);
            }

            // ─── Rolling Cyber-Terminal Ticker at Bottom ───
            const barH = 22;
            const barY = height - barH;

            ctx.fillStyle = 'rgba(4, 2, 10, 0.92)';
            ctx.fillRect(0, barY, width, barH);

            ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, barY);
            ctx.lineTo(width, barY);
            ctx.stroke();

            // Rotate log message every 2.4 seconds
            logTimer += delta;
            if (logTimer > 2.4) {
                logTimer = 0;
                currentLogIndex = (currentLogIndex + 1) % terminalLogs.length;
                logFlash = '';
            }

            const activeLogText = logFlash || terminalLogs[currentLogIndex];

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 8.5px "Fira Code", monospace';
            ctx.textAlign = 'left';
            ctx.fillText('>_ TELEMETRY:', 12, barY + 14);

            ctx.fillStyle = logFlash ? '#f59e0b' : '#94a3b8';
            ctx.font = '8px "Fira Code", monospace';
            ctx.fillText(activeLogText, 95, barY + 14);

            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);
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

        initColorOrchestra();
        initArchitectureCanvas();
        initLanguageVisualizer();
        initSnakeSlideBar();
        initShyamLoveAnimation();
        loadGitHubData();
    });

    // --- 6. PCB CIRCUIT TRACE SCROLLBAR ---
    // Serpentine copper trace with section vias (through-hole pads)
    // and a sliding SMD component. Colors driven by Color Orchestra.
    function initSnakeSlideBar() {
        var wrap    = document.getElementById('snakeSlideBar');
        var canvas  = document.getElementById('snakeCanvas');
        var tooltip = document.getElementById('snakeTooltip');
        if (!wrap || !canvas) return;

        var ctx = canvas.getContext('2d');
        var DPR = window.devicePixelRatio || 1;
        var W = 0, H = 0;
        var tracePath = [], segLens = [], totalLen = 0;
        var MT = 72, MB = 72;

        var sections = [
            { id: 'hero',           label: 'HERO'       },
            { id: 'domains',        label: 'DOMAINS'     },
            { id: 'work',           label: 'WORK'        },
            { id: 'timeline',       label: 'TIMELINE'    },
            { id: 'languages',      label: 'LANGUAGES'   },
            { id: 'github-archive', label: 'GITHUB'      },
            { id: 'agency',         label: 'AGENCY'      },
            { id: 'philosophy',     label: 'PHILOSOPHY'  },
            { id: 'contact',        label: 'CONTACT'     }
        ];

        function buildTrace() {
            var trackH = H - MT - MB;
            var cx = W / 2;
            var amp = Math.min(W * 0.30, 14);
            var N = 6, segH = trackH / N;
            tracePath = [];
            var x = cx, y = MT, dir = 1;
            tracePath.push({ x: x, y: y });
            for (var i = 0; i < N; i++) {
                var midY = y + segH * 0.52;
                tracePath.push({ x: x, y: midY });
                var chamfer = amp * 0.45;
                tracePath.push({ x: x + chamfer * dir, y: midY + chamfer });
                var jogX = x + amp * dir;
                tracePath.push({ x: jogX - chamfer * dir, y: midY + chamfer });
                tracePath.push({ x: jogX, y: midY + chamfer * 2 });
                y  = midY + chamfer * 2 + segH * 0.28;
                x  = jogX; dir *= -1;
                tracePath.push({ x: x, y: y });
            }
            tracePath.push({ x: x, y: H - MB });
            segLens = []; totalLen = 0;
            for (var j = 1; j < tracePath.length; j++) {
                var dx = tracePath[j].x - tracePath[j-1].x;
                var dy = tracePath[j].y - tracePath[j-1].y;
                var len = Math.sqrt(dx*dx + dy*dy);
                segLens.push(len); totalLen += len;
            }
        }

        function ptAt(frac) {
            var target = Math.max(0, Math.min(1, frac)) * totalLen;
            var cum = 0;
            for (var i = 0; i < segLens.length; i++) {
                var seg = segLens[i];
                var p0 = tracePath[i], p1 = tracePath[i+1] || p0;
                if (cum + seg >= target || i === segLens.length - 1) {
                    var t = seg > 0 ? (target - cum) / seg : 0;
                    return {
                        x:     p0.x + (p1.x - p0.x) * t,
                        y:     p0.y + (p1.y - p0.y) * t,
                        angle: Math.atan2(p1.y - p0.y, p1.x - p0.x)
                    };
                }
                cum += seg;
            }
            var last = tracePath[tracePath.length-1];
            return { x: last.x, y: last.y, angle: Math.PI/2 };
        }

        function resize() {
            W = wrap.offsetWidth; H = wrap.offsetHeight;
            canvas.width = W * DPR; canvas.height = H * DPR;
            canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            buildTrace();
        }

        function scrollFrac() {
            var max = document.documentElement.scrollHeight - window.innerHeight;
            return max <= 0 ? 0 : Math.max(0, Math.min(1, window.scrollY / max));
        }
        function secFrac(id) {
            var el = document.getElementById(id);
            if (!el) return 0;
            var max = document.documentElement.scrollHeight - window.innerHeight;
            return max > 0 ? Math.min(1, el.offsetTop / max) : 0;
        }
        function getActiveSec() {
            var pos = window.scrollY + window.innerHeight * 0.35;
            var idx = 0;
            sections.forEach(function(sec, i) {
                var el = document.getElementById(sec.id);
                if (el && el.offsetTop <= pos) idx = i;
            });
            return idx;
        }
        function scrollTo(frac) {
            var max = document.documentElement.scrollHeight - window.innerHeight;
            window.scrollTo({ top: frac * max, behavior: 'auto' });
        }
        function css(prop) {
            return getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
        }

        function strokeUpTo(frac) {
            var target = Math.max(0, Math.min(1, frac)) * totalLen;
            var cum = 0;
            ctx.beginPath();
            ctx.moveTo(tracePath[0].x, tracePath[0].y);
            for (var i = 0; i < segLens.length; i++) {
                var seg = segLens[i];
                var p0  = tracePath[i], p1 = tracePath[i+1];
                if (cum + seg >= target) {
                    var t = (target - cum) / seg;
                    ctx.lineTo(p0.x + (p1.x-p0.x)*t, p0.y + (p1.y-p0.y)*t);
                    break;
                }
                ctx.lineTo(p1.x, p1.y); cum += seg;
            }
            ctx.stroke();
        }

        var isDragging = false, isHovered = false;

        function fracFromEvt(e) {
            var rect = canvas.getBoundingClientRect();
            var cy = e.touches ? e.touches[0].clientY : e.clientY;
            return Math.max(0, Math.min(1, (cy - rect.top - MT) / (H - MT - MB)));
        }

        canvas.addEventListener('mousedown',  function(e) { isDragging = true;  scrollTo(fracFromEvt(e)); });
        window.addEventListener('mousemove',  function(e) { if (isDragging) scrollTo(fracFromEvt(e)); });
        window.addEventListener('mouseup',    function()  { isDragging = false; if (!isHovered && tooltip) tooltip.classList.remove('visible'); });
        canvas.addEventListener('touchstart', function(e) { isDragging = true;  scrollTo(fracFromEvt(e)); e.preventDefault(); }, { passive: false });
        window.addEventListener('touchmove',  function(e) { if (isDragging) { scrollTo(fracFromEvt(e)); e.preventDefault(); } }, { passive: false });
        window.addEventListener('touchend',   function()  { isDragging = false; });
        canvas.addEventListener('mouseenter', function()  { isHovered = true;  if (tooltip) tooltip.classList.add('visible'); });
        canvas.addEventListener('mouseleave', function()  { isHovered = false; if (tooltip && !isDragging) tooltip.classList.remove('visible'); });

        canvas.addEventListener('click', function(e) {
            var rect = canvas.getBoundingClientRect();
            var cx = e.clientX - rect.left, cy = e.clientY - rect.top;
            sections.forEach(function(sec) {
                var pt = ptAt(secFrac(sec.id));
                if (Math.hypot(cx - pt.x, cy - pt.y) < 18) {
                    var el = document.getElementById(sec.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        var time = 0;

        function render() {
            time += 0.02;
            ctx.clearRect(0, 0, W, H);

            var frac   = scrollFrac();
            var active = getActiveSec();
            var packet = ptAt(frac);
            var cV = css('--accent-violet');
            var cP = css('--accent-pink');

            ctx.lineCap = 'round'; ctx.lineJoin = 'round';

            // 1 — Full dim trace (bare board)
            ctx.beginPath();
            ctx.moveTo(tracePath[0].x, tracePath[0].y);
            tracePath.slice(1).forEach(function(p) { ctx.lineTo(p.x, p.y); });
            ctx.strokeStyle = 'rgba(255,255,255,0.055)';
            ctx.lineWidth = 2; ctx.stroke();

            // 2 — Energized trace (0 -> scroll)
            ctx.lineWidth = 2.5; ctx.shadowColor = cV; ctx.shadowBlur = 8;
            ctx.strokeStyle = cV; strokeUpTo(frac); ctx.shadowBlur = 0;

            // 3 — Section vias
            sections.forEach(function(sec, i) {
                var sf = secFrac(sec.id), pt = ptAt(sf);
                var passed = sf <= frac, isAct = i === active;
                var pulse  = isAct ? 1 + 0.16 * Math.sin(time * 4.5) : 1;
                var outerR = (isAct ? 9 : 7) * pulse;
                var ringR  = (isAct ? 5.5 : 4.5) * pulse;
                var holeR  = (isAct ? 2.2 : 1.6) * pulse;

                // Courtyard aura
                ctx.beginPath(); ctx.arc(pt.x, pt.y, outerR, 0, Math.PI*2);
                ctx.strokeStyle = passed ? cV.replace('hsl(','hsla(').replace(')',',0.14)') : 'rgba(255,255,255,0.04)';
                ctx.lineWidth = 0.8; ctx.stroke();

                // Annular ring (copper pad)
                if (isAct) { ctx.shadowColor = cV; ctx.shadowBlur = 12; }
                ctx.beginPath(); ctx.arc(pt.x, pt.y, ringR, 0, Math.PI*2);
                ctx.fillStyle   = 'rgba(6,4,15,0.75)';
                ctx.strokeStyle = passed ? cV : 'rgba(255,255,255,0.16)';
                ctx.lineWidth   = isAct ? 1.8 : 1.2;
                ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0;

                // Drill hole
                if (isAct) { ctx.shadowColor = cP; ctx.shadowBlur = 9; }
                ctx.beginPath(); ctx.arc(pt.x, pt.y, holeR, 0, Math.PI*2);
                ctx.fillStyle = isAct ? cV : (passed ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.12)');
                ctx.fill(); ctx.shadowBlur = 0;

                // Silkscreen label
                if (isHovered || isDragging || isAct) {
                    ctx.font = '7px "Fira Code", monospace'; ctx.textAlign = 'left';
                    var alpha = isAct ? '0.9' : (passed ? '0.5' : '0.22');
                    ctx.fillStyle = passed
                        ? cV.replace('hsl(','hsla(').replace(')', ',' + alpha + ')')
                        : 'rgba(255,255,255,' + alpha + ')';
                    ctx.fillText(sec.label, pt.x + outerR + 2, pt.y + 2.5);
                }
            });

            // 4 — SMD component (ceramic capacitor footprint)
            var pW = isDragging ? 12 : 9.5;
            var pH = isDragging ? 7.5 : 6;
            var bodyColor = isDragging ? cP : cV;

            ctx.save();
            ctx.translate(packet.x, packet.y);
            ctx.rotate(packet.angle);

            ctx.shadowColor = bodyColor; ctx.shadowBlur = isDragging ? 24 : 18;
            ctx.fillStyle   = bodyColor;
            ctx.strokeStyle = 'rgba(255,255,255,0.92)';
            ctx.lineWidth   = 0.6;
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-pW/2, -pH/2, pW, pH, 1.8);
            } else {
                ctx.rect(-pW/2, -pH/2, pW, pH);
            }
            ctx.fill(); ctx.stroke(); ctx.shadowBlur = 0;

            // Leads
            ctx.strokeStyle = bodyColor; ctx.lineWidth = 1.4;
            ctx.shadowColor = bodyColor; ctx.shadowBlur = 5;
            [-1.6, 1.6].forEach(function(ly) {
                ctx.beginPath(); ctx.moveTo(-pW/2 - 3, ly); ctx.lineTo(-pW/2, ly); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(pW/2, ly);      ctx.lineTo(pW/2 + 3, ly); ctx.stroke();
            });
            ctx.shadowBlur = 0;

            // Pin-1 marker
            ctx.fillStyle = 'rgba(255,255,255,0.92)';
            ctx.beginPath(); ctx.arc(-pW/4, 0, 1.0, 0, Math.PI*2); ctx.fill();

            ctx.restore();

            // 5 — Tooltip
            if (tooltip && (isHovered || isDragging)) {
                var sPos = window.scrollY + window.innerHeight * 0.35;
                var label = sections[0].label;
                sections.forEach(function(sec) {
                    var el = document.getElementById(sec.id);
                    if (el && el.offsetTop <= sPos) label = sec.label;
                });
                tooltip.textContent = label;
                tooltip.style.top   = Math.max(20, Math.min(H-30, packet.y-10)) + 'px';
            }

            requestAnimationFrame(render);
        }

        resize();
        window.addEventListener('resize', resize);
        render();
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

    // ─── 8. POLYGLOT EVOLUTION & LANGUAGE TELEMETRY MATRIX ───
    function initLanguageVisualizer() {
        const canvas = document.getElementById('languageCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let dpr = window.devicePixelRatio || 1;
        let width = 0;
        let height = 0;

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.offsetWidth || 800;
            height = canvas.offsetHeight || 380;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener('resize', resize);

        // ─── 9 Polyglot Language Vectors ───
        const languages = [
            {
                id: 'c',
                name: 'C / C++',
                origin: 2014,
                yearsActive: 12,
                category: 'SYSTEMS & HARDWARE // RING 0',
                color: '#38bdf8',
                accent: '#0284c7',
                runtime: 'Linux Kernel Ring 0 • ESP-IDF • Bare-Metal Silicon',
                artifacts: 'Dodo-RF CC1101 Sub-GHz Suite • ACPI EC Kernel Driver • TWRP Trees',
                tooling: 'GCC, Clang, DKMS, FreeRTOS, ESP32 DMA, POSIX UNIX Sockets',
                code: 'ioctl(fd, ACPI_EC_READ, &ec_packet); // SMBus read at 0x68',
                level: 'NATIVE / MASTER',
                runtimeTag: 'Ring 0 & Silicon',
                history: { 2012: 0, 2014: 35, 2016: 62, 2018: 76, 2020: 84, 2022: 88, 2024: 93, 2026: 98 },
                radar: [98, 70, 92, 50, 99, 78],
                epochs: ['all', 'genesis', 'modding', 'enterprise', 'silicon']
            },
            {
                id: 'java',
                name: 'Java / Kotlin',
                origin: 2014,
                yearsActive: 12,
                category: 'ANDROID & JVM RUNTIME',
                color: '#ec4899',
                accent: '#db2777',
                runtime: 'Android Runtime (ART) • HotSpot JVM',
                artifacts: 'SystemUI Modifications • Xposed Hooking Modules • NetHunter Tools',
                tooling: 'XposedBridge, Kotlin Coroutines, APKTool, Gradle, AOSP Build Tree',
                code: 'XposedBridge.hookMethod(targetMethod, new XC_MethodHook() { ... });',
                level: 'DEEP RUNTIME',
                runtimeTag: 'ART & JVM Engine',
                history: { 2012: 0, 2014: 28, 2016: 82, 2018: 88, 2020: 85, 2022: 88, 2024: 91, 2026: 93 },
                radar: [65, 96, 88, 72, 60, 92],
                epochs: ['all', 'genesis', 'modding', 'enterprise']
            },
            {
                id: 'python',
                name: 'Python',
                origin: 2015,
                yearsActive: 11,
                category: 'DISTRIBUTED DATA & LAKEHOUSE',
                color: '#f59e0b',
                accent: '#d97706',
                runtime: 'CPython 3.11 • Spark Distributed Worker Cluster',
                artifacts: 'Databricks Delta Lakehouse • Scapy Wireless Auditing • ETL Pipelines',
                tooling: 'PySpark Structured Streaming, Delta Lake, Pandas, Requests, FastAPI',
                code: 'df.writeStream.format("delta").outputMode("append").start(path);',
                level: 'ARCHITECTURAL',
                runtimeTag: 'PySpark & Distributed',
                history: { 2012: 0, 2014: 0, 2016: 38, 2018: 62, 2020: 72, 2022: 82, 2024: 92, 2026: 96 },
                radar: [45, 82, 80, 98, 48, 95],
                epochs: ['all', 'genesis', 'modding', 'enterprise', 'silicon']
            },
            {
                id: 'js',
                name: 'JS / TypeScript (ES6+)',
                origin: 2016,
                yearsActive: 10,
                category: 'EDGE & BROWSER ENGINES',
                color: '#10b981',
                accent: '#059669',
                runtime: 'Google V8 Engine • Vercel Edge Runtime',
                artifacts: 'Zero-Layout-Shift Portals • SJ Digitals Client Systems • Canvas Physics',
                tooling: 'Vanilla ES6+, Canvas 2D/WebGL, Edge Cache, Web Audio API, Modular CSS',
                code: 'ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // Hi-DPI sub-pixel matrix',
                level: 'PRODUCTION PRO',
                runtimeTag: 'V8 & Edge Workers',
                history: { 2012: 0, 2014: 0, 2016: 25, 2018: 55, 2020: 78, 2022: 85, 2024: 90, 2026: 92 },
                radar: [40, 85, 90, 75, 45, 99],
                epochs: ['all', 'modding', 'enterprise', 'silicon']
            },
            {
                id: 'sql',
                name: 'SQL & Delta Lake',
                origin: 2018,
                yearsActive: 8,
                category: 'TRANSACTIONAL ACID & LAKEHOUSE',
                color: '#a855f7',
                accent: '#7e22ce',
                runtime: 'Delta Engine • PostgreSQL 16 • SQLite3',
                artifacts: 'Government Logistics Data Store • Medallion Lakehouse Parquet Tables',
                tooling: 'Delta Lake ACID Time Travel, Window Functions, Partitioning, Z-Order',
                code: 'SELECT * FROM delta_table TIMESTAMP AS OF "2026-01-01 00:00:00";',
                level: 'ENTERPRISE ACID',
                runtimeTag: 'Delta & PostgreSQL',
                history: { 2012: 0, 2014: 0, 2016: 0, 2018: 45, 2020: 68, 2022: 78, 2024: 84, 2026: 89 },
                radar: [20, 60, 70, 96, 55, 84],
                epochs: ['all', 'modding', 'enterprise', 'silicon']
            },
            {
                id: 'bash',
                name: 'Bash / POSIX Shell',
                origin: 2016,
                yearsActive: 10,
                category: 'KERNEL OPS & AUTOMATION',
                color: '#94a3b8',
                accent: '#64748b',
                runtime: 'GNU Bash • BusyBox • Dash',
                artifacts: 'DKMS Automated Driver Rebuilds • Recovery Scripts • Systemd Daemons',
                tooling: 'Grep, Sed, Awk, DKMS Hooks, Udev Rules, Chroot Jail Scripts',
                code: 'dkms add -m acpi-ec -v 1.0 && dkms build -m acpi-ec -v 1.0',
                level: 'ADVANCED AUTOMATION',
                runtimeTag: 'POSIX & BusyBox',
                history: { 2012: 0, 2014: 0, 2016: 40, 2018: 65, 2020: 75, 2022: 80, 2024: 85, 2026: 88 },
                radar: [70, 65, 60, 50, 40, 78],
                epochs: ['all', 'modding', 'enterprise', 'silicon']
            },
            {
                id: 'smali',
                name: 'Smali & Dalvik Bytecode',
                origin: 2016,
                yearsActive: 10,
                category: 'BYTECODE HOOKS & REVERSE ENG',
                color: '#f43f5e',
                accent: '#e11d48',
                runtime: 'Dalvik Virtual Machine & ART OAT',
                artifacts: 'Decompiled SystemUI Modifications • APK Patching • DEX Analysis',
                tooling: 'Baksmali, Smali, APKTool, DEX Patcher, IDA Pro, Frida',
                code: 'invoke-virtual {v0, v1}, Landroid/view/View;->setVisibility(I)V',
                level: 'EXPLOIT REVERSE ENG',
                runtimeTag: 'DEX / Smali Opcodes',
                history: { 2012: 0, 2014: 0, 2016: 80, 2018: 85, 2020: 80, 2022: 78, 2024: 80, 2026: 82 },
                radar: [60, 99, 70, 30, 85, 65],
                epochs: ['all', 'modding']
            },
            {
                id: 'html',
                name: 'HTML5 & Modular CSS',
                origin: 2012,
                yearsActive: 14,
                category: 'THE FIRST SPARK // UI ENGINES',
                color: '#f97316',
                accent: '#ea580c',
                runtime: 'Blink • WebKit • Gecko Rendering Pipeline',
                artifacts: 'Color Orchestra Theme Engine • Portfolio UI • Bespoke Client Portals',
                tooling: 'CSS Custom Properties, Color-Mix, Flexbox/Grid, Canvas API, Semantics',
                code: 'color-mix(in srgb, var(--accent-violet) 35%, transparent);',
                level: 'MASTER CRAFT',
                runtimeTag: 'Blink & WebKit',
                history: { 2012: 40, 2014: 55, 2016: 70, 2018: 82, 2020: 88, 2022: 92, 2024: 96, 2026: 98 },
                radar: [15, 75, 60, 40, 30, 99],
                epochs: ['all', 'genesis', 'modding', 'enterprise', 'silicon']
            },
            {
                id: 'rust',
                name: 'Rust & Low-Level Go',
                origin: 2023,
                yearsActive: 3,
                category: 'MODERN SYSTEMS & DAEMONS',
                color: '#fb923c',
                accent: '#c2410c',
                runtime: 'LLVM Native Binary • Go Runtime',
                artifacts: 'Linux Continuity Bridge Daemon Prototyping • High-Speed Sockets',
                tooling: 'Cargo, Tokio, Rust Borrow Checker, Goroutines, Low-level IPC',
                code: 'let (tx, mut rx) = mpsc::channel::<Packet>(1024);',
                level: 'SYSTEMS SPECIALIST',
                runtimeTag: 'LLVM Native & Tokio',
                history: { 2012: 0, 2014: 0, 2016: 0, 2018: 0, 2020: 0, 2022: 0, 2024: 55, 2026: 78 },
                radar: [88, 75, 95, 80, 98, 85],
                epochs: ['all', 'silicon']
            }
        ];

        const years = [2012, 2014, 2016, 2018, 2020, 2022, 2024, 2026];
        const radarAxes = [
            'HARDWARE / SILICON',
            'BYTECODE / RUNTIME',
            'CONCURRENCY',
            'LAKEHOUSE SCALE',
            'MEMORY CONTROL',
            'INTERFACE / API'
        ];

        const eraMilestones = {
            2012: 'CLASS 7 // THE FIRST SPARK: HTML & CSS',
            2014: 'NCO RANK 1 // C, C++, JAVA 3-YEAR CS DEEP DIVE',
            2015: 'ALGORITHMS & PYTHON SCRIPTING GENESIS',
            2016: 'ANDROID ROM MODDING // SMALI & REVERSE ENG',
            2017: 'XPOSED BRIDGE & CUSTOM SYSTEMUI THEMES',
            2018: 'SPPU PUNE // LINUX OS KERNELS & DBMS',
            2020: 'BBA-CA GRADUATION & ARCHITECTURAL PIVOT',
            2021: 'HIGH-SECURITY GOVERNMENT LOGISTICS SCHEMAS',
            2023: 'MODERN RUST & IPC BRIDGE PROTOTYPING',
            2024: 'SJ DIGITALS // EDGE CACHING & CLIENT PLATFORMS',
            2025: 'DODO-RF // ESP32, RP2040 & CC1101 SUB-GHz',
            2026: 'UNIFIED ARCHITECTURE, DELTA LAKE & GKI KERNEL'
        };

        // State
        let currentMode = 'stream'; // 'stream' or 'radar'
        let currentEpoch = 'all';
        let selectedLangId = 'c';
        let hoveredLangId = null;
        let mouseX = -1;
        let mouseY = -1;

        // Flowing energy particles along spline curves
        const particles = [];
        for (let p = 0; p < 24; p++) {
            particles.push({
                langIdx: Math.floor(Math.random() * languages.length),
                progress: Math.random(),
                speed: 0.003 + Math.random() * 0.005,
                size: 2.2 + Math.random() * 2
            });
        }

        // DOM Elements
        const hudIndicator = document.getElementById('hudIndicator');
        const hudLangName = document.getElementById('hudLangName');
        const hudLangCategory = document.getElementById('hudLangCategory');
        const hudOriginPill = document.getElementById('hudOriginPill');
        const hudRuntime = document.getElementById('hudRuntime');
        const hudArtifacts = document.getElementById('hudArtifacts');
        const hudTooling = document.getElementById('hudTooling');
        const hudCode = document.getElementById('hudCode');
        const activeScrubReadout = document.getElementById('activeScrubReadout');
        const matrixGrid = document.getElementById('languagesMatrixGrid');

        // Audio synth feedback
        let langAudioCtx = null;
        function playBlip(freq, dur) {
            try {
                if (!langAudioCtx) {
                    const AC = window.AudioContext || window.webkitAudioContext;
                    if (AC) langAudioCtx = new AC();
                }
                if (langAudioCtx && langAudioCtx.state === 'suspended') langAudioCtx.resume();
                if (langAudioCtx) {
                    const osc = langAudioCtx.createOscillator();
                    const gain = langAudioCtx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq || 1040, langAudioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime((freq || 1040) * 1.3, langAudioCtx.currentTime + dur);
                    gain.gain.setValueAtTime(0.02, langAudioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.0001, langAudioCtx.currentTime + dur);
                    osc.connect(gain);
                    gain.connect(langAudioCtx.destination);
                    osc.start();
                    osc.stop(langAudioCtx.currentTime + dur);
                }
            } catch (e) {}
        }

        // Update HUD Inspector Card
        function updateInspectorHud(lang) {
            if (!lang) return;
            if (hudIndicator) {
                hudIndicator.style.background = lang.color;
                hudIndicator.style.boxShadow = `0 0 10px ${lang.color}`;
            }
            if (hudLangName) hudLangName.textContent = `${lang.name} (${lang.yearsActive} YEARS ACTIVE)`;
            if (hudLangCategory) hudLangCategory.textContent = lang.category;
            if (hudOriginPill) hudOriginPill.textContent = `ADOPTED: ${lang.origin} // ${lang.level}`;
            if (hudRuntime) hudRuntime.textContent = lang.runtime;
            if (hudArtifacts) hudArtifacts.textContent = lang.artifacts;
            if (hudTooling) hudTooling.textContent = lang.tooling;
            if (hudCode) hudCode.textContent = lang.code;
        }

        // Populate Languages Chips Grid
        if (matrixGrid) {
            matrixGrid.innerHTML = '';
            languages.forEach(lang => {
                const card = document.createElement('div');
                card.className = `lang-chip-card ${lang.id === selectedLangId ? 'active' : ''}`;
                card.dataset.lang = lang.id;
                card.style.setProperty('--chip-color', lang.color);

                card.innerHTML = `
                    <div class="chip-top">
                        <span class="chip-name"><span class="chip-dot"></span>${lang.name}</span>
                        <span class="chip-years">${lang.yearsActive} YRS</span>
                    </div>
                    <div class="chip-category">${lang.category}</div>
                    <div class="chip-bottom">
                        <span class="chip-runtime">${lang.runtimeTag}</span>
                        <span class="chip-level">${lang.level}</span>
                    </div>
                `;

                card.addEventListener('mouseenter', () => {
                    hoveredLangId = lang.id;
                    updateInspectorHud(lang);
                });

                card.addEventListener('mouseleave', () => {
                    hoveredLangId = null;
                    const cur = languages.find(l => l.id === selectedLangId);
                    if (cur) updateInspectorHud(cur);
                });

                card.addEventListener('click', () => {
                    selectedLangId = lang.id;
                    document.querySelectorAll('.lang-chip-card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    updateInspectorHud(lang);
                    playBlip(920, 0.08);
                });

                matrixGrid.appendChild(card);
            });
        }

        // Initialize HUD with default selected language
        const initialLang = languages.find(l => l.id === selectedLangId);
        if (initialLang) updateInspectorHud(initialLang);

        // Mode Switching
        document.querySelectorAll('#graphModeGroup .graph-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#graphModeGroup .graph-toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentMode = btn.dataset.mode;
                playBlip(1200, 0.06);
            });
        });

        // Epoch Filtering
        document.querySelectorAll('#epochFilterGroup .epoch-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#epochFilterGroup .epoch-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentEpoch = btn.dataset.epoch;
                playBlip(1100, 0.06);
            });
        });

        // Mouse Scrubbing
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            mouseX = -1;
            mouseY = -1;
        });

        // Helper: Calculate spline points for a language
        function getSplinePoints(lang, padL, padR, padT, padB) {
            const gw = width - padL - padR;
            const gh = height - padT - padB;
            const baseBottom = height - padB;

            return years.map(yr => {
                const x = padL + ((yr - 2012) / 14) * gw;
                const val = (yr < lang.origin) ? 0 : (lang.history[yr] || 0);
                const y = baseBottom - (val / 100) * gh;
                return { x, y, val, year: yr };
            });
        }

        // Draw Spline Waveform Curve
        function drawSpline(pts) {
            if (pts.length < 2) return;
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 0; i < pts.length - 1; i++) {
                const xc = (pts[i].x + pts[i + 1].x) / 2;
                const yc = (pts[i].y + pts[i + 1].y) / 2;
                ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
            }
            ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        }

        // Main Animation Render Loop
        function draw(timestamp) {
            const time = timestamp * 0.001 || 0;

            // Background
            ctx.fillStyle = '#05030d';
            ctx.fillRect(0, 0, width, height);

            if (currentMode === 'stream') {
                // ═══════════════════════════════════════════════════
                // MODE 1: CHRONOLOGICAL STREAMGRAPH (2012 → 2026)
                // ═══════════════════════════════════════════════════
                const padL = 46;
                const padR = 46;
                const padT = 36;
                const padB = 40;
                const gw = width - padL - padR;
                const gh = height - padT - padB;
                const baseBottom = height - padB;

                // Subtle horizontal gridlines
                ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
                ctx.lineWidth = 1;
                [0.25, 0.5, 0.75, 1.0].forEach(frac => {
                    const gy = baseBottom - frac * gh;
                    ctx.beginPath();
                    ctx.moveTo(padL, gy);
                    ctx.lineTo(width - padR, gy);
                    ctx.stroke();
                });

                // Year Columns & Vertical Lines
                years.forEach((yr, idx) => {
                    const x = padL + (idx / (years.length - 1)) * gw;

                    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
                    ctx.beginPath();
                    ctx.moveTo(x, padT);
                    ctx.lineTo(x, baseBottom);
                    ctx.stroke();

                    // Year Labels
                    ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
                    ctx.font = 'bold 9.5px "Fira Code", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(yr.toString(), x, baseBottom + 18);
                });

                // Render Language Waveforms
                languages.forEach((lang, lIdx) => {
                    const isSelected = (lang.id === selectedLangId);
                    const isHovered = (lang.id === hoveredLangId);
                    const isInEpoch = (currentEpoch === 'all' || lang.epochs.includes(currentEpoch));

                    let alpha = isInEpoch ? (isSelected || isHovered ? 1.0 : 0.45) : 0.08;
                    const pts = getSplinePoints(lang, padL, padR, padT, padB);

                    // Underfill Gradient
                    ctx.save();
                    drawSpline(pts);
                    ctx.lineTo(pts[pts.length - 1].x, baseBottom);
                    ctx.lineTo(pts[0].x, baseBottom);
                    ctx.closePath();

                    const grad = ctx.createLinearGradient(0, padT, 0, baseBottom);
                    grad.addColorStop(0, hexToRgba(lang.color, (isSelected || isHovered) ? 0.25 : 0.05));
                    grad.addColorStop(1, 'rgba(5, 3, 13, 0)');
                    ctx.fillStyle = grad;
                    ctx.fill();
                    ctx.restore();

                    // Main Spline Stroke
                    ctx.save();
                    drawSpline(pts);
                    ctx.strokeStyle = lang.color;
                    ctx.globalAlpha = alpha;
                    ctx.lineWidth = (isSelected || isHovered) ? 3.0 : (isInEpoch ? 1.6 : 0.8);
                    if (isSelected || isHovered) {
                        ctx.shadowColor = lang.color;
                        ctx.shadowBlur = 12;
                    }
                    ctx.stroke();
                    ctx.restore();

                    // Milestone Origin Birth Node
                    if (isInEpoch) {
                        const birthIdx = years.indexOf(lang.origin);
                        if (birthIdx !== -1) {
                            const originPt = pts[birthIdx];
                            ctx.fillStyle = lang.color;
                            ctx.shadowColor = lang.color;
                            ctx.shadowBlur = 10;
                            ctx.beginPath();
                            ctx.arc(originPt.x, originPt.y, (isSelected || isHovered) ? 5.5 : 3.5, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.shadowBlur = 0;

                            if (isSelected || isHovered) {
                                ctx.strokeStyle = '#ffffff';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.arc(originPt.x, originPt.y, 9 + Math.sin(time * 6) * 2, 0, Math.PI * 2);
                                ctx.stroke();
                            }
                        }
                    }
                });

                // Flowing Energy Particles
                particles.forEach(p => {
                    const lang = languages[p.langIdx];
                    const isInEpoch = (currentEpoch === 'all' || lang.epochs.includes(currentEpoch));
                    if (!isInEpoch) return;

                    p.progress += p.speed;
                    if (p.progress > 1) p.progress = 0;

                    const pts = getSplinePoints(lang, padL, padR, padT, padB);
                    // Filter points where value > 0
                    const activePts = pts.filter(pt => pt.val > 0);
                    if (activePts.length >= 2) {
                        const targetIdx = Math.min(activePts.length - 2, Math.floor(p.progress * (activePts.length - 1)));
                        const segProg = (p.progress * (activePts.length - 1)) - targetIdx;
                        const p1 = activePts[targetIdx];
                        const p2 = activePts[targetIdx + 1];

                        const px = p1.x + (p2.x - p1.x) * segProg;
                        const py = p1.y + (p2.y - p1.y) * segProg;

                        ctx.fillStyle = lang.color;
                        ctx.shadowColor = lang.color;
                        ctx.shadowBlur = 8;
                        ctx.beginPath();
                        ctx.arc(px, py, p.size, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                });

                // Interactive Laser Scanline & Year Inspector
                if (mouseX >= padL && mouseX <= width - padR) {
                    const scrubFrac = (mouseX - padL) / gw;
                    const scrubYearFloat = 2012 + scrubFrac * 14;
                    const nearestYear = Math.round(scrubYearFloat);

                    // Vertical Scanning Laser
                    ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)';
                    ctx.lineWidth = 1.2;
                    ctx.shadowColor = '#38bdf8';
                    ctx.shadowBlur = 8;
                    ctx.beginPath();
                    ctx.moveTo(mouseX, padT - 6);
                    ctx.lineTo(mouseX, baseBottom + 6);
                    ctx.stroke();
                    ctx.shadowBlur = 0;

                    // Scanning Reticle Bead
                    ctx.fillStyle = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(mouseX, mouseY > padT && mouseY < baseBottom ? mouseY : padT, 3.5, 0, Math.PI * 2);
                    ctx.fill();

                    // Floating Tactical Badge over Laser
                    const badgeText = `ERA: ${nearestYear} // ${eraMilestones[nearestYear] || 'ACTIVE EXPANSION'}`;
                    ctx.font = 'bold 9px "Fira Code", monospace';
                    const textW = ctx.measureText(badgeText).width;
                    const bX = Math.max(padL + 10, Math.min(width - padR - textW - 20, mouseX - textW / 2 - 10));
                    const bY = padT + 12;

                    ctx.fillStyle = 'rgba(5, 3, 14, 0.94)';
                    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(bX, bY, textW + 20, 20);
                    ctx.fillRect(bX, bY, textW + 20, 20);

                    ctx.fillStyle = '#38bdf8';
                    ctx.textAlign = 'left';
                    ctx.fillText(badgeText, bX + 10, bY + 13.5);

                    // Update live readout text in DOM
                    if (activeScrubReadout) {
                        activeScrubReadout.textContent = `ERA: ${nearestYear} // ${eraMilestones[nearestYear] || 'MULTI-DISCIPLINARY EXPANSION'}`;
                    }
                }

            } else {
                // ═══════════════════════════════════════════════════
                // MODE 2: CYBERNETIC RADAR SPECTRUM MATRIX
                // ═══════════════════════════════════════════════════
                const cx = width / 2;
                const cy = height / 2 + 6;
                const radius = Math.min(width * 0.38, height * 0.38, 140);
                const numAxes = radarAxes.length;

                // Concentric Cybernetic Rings
                [0.2, 0.4, 0.6, 0.8, 1.0].forEach(level => {
                    ctx.strokeStyle = (level === 1.0) ? 'rgba(56, 189, 248, 0.25)' : 'rgba(56, 189, 248, 0.07)';
                    ctx.lineWidth = (level === 1.0) ? 1.4 : 1;
                    ctx.beginPath();
                    for (let a = 0; a < numAxes; a++) {
                        const angle = (a / numAxes) * Math.PI * 2 - Math.PI / 2;
                        const rx = cx + Math.cos(angle) * radius * level;
                        const ry = cy + Math.sin(angle) * radius * level;
                        if (a === 0) ctx.moveTo(rx, ry);
                        else ctx.lineTo(rx, ry);
                    }
                    ctx.closePath();
                    ctx.stroke();

                    // Level label
                    ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
                    ctx.font = '7.5px "Fira Code", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(`${Math.round(level * 100)}%`, cx, cy - radius * level - 2);
                });

                // Spokes & Axis Labels
                radarAxes.forEach((axisLabel, aIdx) => {
                    const angle = (aIdx / numAxes) * Math.PI * 2 - Math.PI / 2;
                    const sx = cx + Math.cos(angle) * radius;
                    const sy = cy + Math.sin(angle) * radius;

                    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(sx, sy);
                    ctx.stroke();

                    // Vertex Tick
                    ctx.fillStyle = '#38bdf8';
                    ctx.beginPath();
                    ctx.arc(sx, sy, 2, 0, Math.PI * 2);
                    ctx.fill();

                    // Axis Text
                    const labelDist = radius + 20;
                    const lx = cx + Math.cos(angle) * labelDist;
                    const ly = cy + Math.sin(angle) * labelDist;
                    ctx.fillStyle = '#94a3b8';
                    ctx.font = 'bold 8.5px "Fira Code", monospace';
                    ctx.textAlign = 'center';
                    ctx.fillText(axisLabel, lx, ly + 3);
                });

                // Selected Language Radar Polygon
                const targetLang = languages.find(l => l.id === (hoveredLangId || selectedLangId)) || languages[0];
                if (targetLang && targetLang.radar) {
                    const radarPts = targetLang.radar.map((val, aIdx) => {
                        const angle = (aIdx / numAxes) * Math.PI * 2 - Math.PI / 2;
                        const r = (val / 100) * radius;
                        return {
                            x: cx + Math.cos(angle) * r,
                            y: cy + Math.sin(angle) * r,
                            val: val,
                            angle: angle
                        };
                    });

                    // Polygon Fill
                    ctx.save();
                    ctx.beginPath();
                    radarPts.forEach((pt, pIdx) => {
                        if (pIdx === 0) ctx.moveTo(pt.x, pt.y);
                        else ctx.lineTo(pt.x, pt.y);
                    });
                    ctx.closePath();

                    const radGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, radius);
                    radGrad.addColorStop(0, hexToRgba(targetLang.color, 0.45));
                    radGrad.addColorStop(1, hexToRgba(targetLang.color, 0.08));
                    ctx.fillStyle = radGrad;
                    ctx.fill();

                    // Polygon Stroke
                    ctx.strokeStyle = targetLang.color;
                    ctx.lineWidth = 2.2;
                    ctx.shadowColor = targetLang.color;
                    ctx.shadowBlur = 14;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                    ctx.restore();

                    // Vertex Knots & Percentages
                    radarPts.forEach(pt => {
                        ctx.fillStyle = '#ffffff';
                        ctx.shadowColor = targetLang.color;
                        ctx.shadowBlur = 8;
                        ctx.beginPath();
                        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.shadowBlur = 0;

                        ctx.fillStyle = targetLang.color;
                        ctx.font = 'bold 8px "Fira Code", monospace';
                        ctx.textAlign = 'center';
                        ctx.fillText(`${pt.val}%`, pt.x, pt.y - 7);
                    });

                    // Center Name Pill
                    ctx.fillStyle = 'rgba(5, 3, 14, 0.85)';
                    ctx.strokeStyle = targetLang.color;
                    ctx.lineWidth = 1;
                    const cText = `${targetLang.name} // ${targetLang.level}`;
                    ctx.font = 'bold 9px "Fira Code", monospace';
                    const ctw = ctx.measureText(cText).width;
                    ctx.strokeRect(cx - ctw / 2 - 8, cy - 10, ctw + 16, 20);
                    ctx.fillRect(cx - ctw / 2 - 8, cy - 10, ctw + 16, 20);

                    ctx.fillStyle = '#ffffff';
                    ctx.textAlign = 'center';
                    ctx.fillText(cText, cx, cy + 3.5);
                }
            }

            requestAnimationFrame(draw);
        }

        function hexToRgba(hex, alpha) {
            const clean = hex.replace('#', '');
            if (clean.length === 6) {
                const r = parseInt(clean.substring(0, 2), 16);
                const g = parseInt(clean.substring(2, 4), 16);
                const b = parseInt(clean.substring(4, 6), 16);
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
            return `rgba(56, 189, 248, ${alpha})`;
        }

        requestAnimationFrame(draw);
    }

})();
