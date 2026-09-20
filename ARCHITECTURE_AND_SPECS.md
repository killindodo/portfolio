# Surya Pratap Portfolio — Architecture, Data & Theme Specification

> **Local Offline Development Document**  
> *Hard Rule: No online pushing or publishing. All assets, data models, and theme systems are cataloged here to prevent token waste and redundant reads.*

---

## 1. Identity, Contact & Social Matrix

* **Name**: Surya Pratap
* **Role**: Systems & Web Architect, Embedded & Data Engineer, Founder
* **Company**: Founder of **SJ Digitals Co.** (`https://sjdigitals.vercel.app/` / `https://killindodo.github.io/sjdigitals.co/`)
* **Email**: `suryapratapsingh420786@gmail.com`
* **Direct Phone**: `+917004185301`
* **WhatsApp**: `https://wa.me/917004185301`
* **GitHub**: `https://www.github.com/killindodo`
* **LinkedIn**: `https://www.linkedin.com/in/surya-pratap-270b35153/`
* **Telegram**: `https://t.me/killindod0`
* **Current Status**: Available for Architecture Consulting, Production Web Platforms & Systems Engineering (2026)

---

## 2. Technical Capabilities Matrix (5 Engineering Domains)

### Domain 1: Web & Client Systems (`web`)
* **Core Philosophy**: Zero layout shifts, instant edge caching, ultra-responsive UI, offline resilience.
* **Key Skills**:
  * Semantic HTML5 / Modular CSS3 / Modern Vanilla ES6+ (No unnecessary framework bloat)
  * Edge Deployments: Vercel Global Edge, GitHub Pages, Cloudflare Workers
  * Design Systems: Glassmorphism, Responsive Fluid Typography (`clamp()`), Custom Animations
  * Client Solutions: NFC Smart Business Cards, WhatsApp Business Catalogues, SEO Optimization

### Domain 2: Linux & Android Systems (`systems`)
* **Core Philosophy**: Low-level hardware abstraction, kernel development, OS bridging.
* **Key Skills**:
  * Linux Kernel Trees: GKI v4/6.1, EROFS read-only rootfs, Custom Module Compilations
  * Android Internals: Custom Recovery (TWRP, OrangeFox), Magisk / KernelSU module engineering
  * Hardware Control: ACPI Embedded Controller (EC) read/write registers (`ec_sys`)
  * Device Continuity: Direct socket and USB OTG daemon communication between Android & Linux

### Domain 3: Embedded & Sub-GHz RF (`embedded`)
* **Core Philosophy**: Real-time signal processing, microcontroller firmware, RF protocols.
* **Key Skills**:
  * RF Hardware: CC1101 transceivers, Sub-GHz frequencies (315MHz, 433MHz, 868MHz, 915MHz)
  * Microcontrollers: ESP32, RP2040, STM32, Arduino C/C++
  * Bus Protocols: SPI, I2C, UART, GPIO direct register control, bitbanging
  * Signal Analysis: FSK, ASK/OOK modulation, packet filtering, signal replay & decoding

### Domain 4: Enterprise Data Lakehouses (`data`)
* **Core Philosophy**: Scalable distributed ETL, Medallion storage, ACID lakehouse reliability.
* **Key Skills**:
  * Frameworks: Apache Spark, PySpark, Databricks Delta Lake
  * Architecture: Bronze (Raw ingestion) ➔ Silver (Cleaned/Enriched) ➔ Gold (Aggregated Business Data)
  * Tooling: SQL analytics, Parquet / Delta formats, automated schema validation

### Domain 5: Core Languages (`languages`)
* **Python**: Systems scripting, PySpark, PyAutoGUI, hardware daemons
* **C / C++**: Linux kernel patches, embedded firmware, ACPI EC tools
* **JavaScript / TypeScript**: Modern web applications, Edge Workers, DOM performance
* **Bash / Shell**: Linux automation, Android ROM build scripts, CI pipelines
* **SQL**: Analytical data transformations, relational indexing

---

## 3. Project Archive & Showcase Directory

### Project 1: SJ Digitals Co. Agency Platform (`web`)
* **Title**: SJ Digitals Co. — Modern Digital Agency & Systems Platform
* **Role**: Founder & Lead Systems Architect
* **Status**: `LIVE PRODUCTION`
* **URLs**: `https://sjdigitals.vercel.app/` / `https://killindodo.github.io/sjdigitals.co/`
* **Description**: Flagship corporate web presence for SJ Digitals Co. Showcases creative development, bespoke web systems, corporate branding, NFC smart card solutions, and edge cloud IT infrastructure.
* **Tech Stack**: Vanilla ES6+, CSS3 Design System, Vercel Edge, Zero Build Lock-in.

### Project 2: Chandrawati Enterprises (`web`)
* **Title**: Chandrawati Enterprises — Workforce Outsourcing Web Portal
* **Role**: Lead Web Architect
* **Status**: `LIVE VERCEL`
* **Description**: Production web portal for a premier manpower and workforce outsourcing firm in Gaya, Bihar. 1:1 pixel-perfect responsive layout, service quote workflow, and offline-resilient local asset bundling.
* **Tech Stack**: HTML5, Modular CSS3, Vanilla JS, Vercel Production Edge.

### Project 3: Linux Continuity Daemon (`systems`)
* **Title**: Linux Continuity — Seamless Android ↔ Linux Bridge
* **Role**: Author & Systems Developer
* **Status**: `OPEN SOURCE // ACTIVE`
* **URL**: `https://github.com/killindodo/linux-continuity`
* **Description**: High-speed local background daemon bridging Linux desktops with Android devices. Real-time clipboard synchronization, notification forwarding, shared media controls, and remote shell commands over secure local sockets.
* **Tech Stack**: Python 3, UNIX Sockets, ADB, Linux Desktop Notifications.

### Project 4: Zezes — Mobile ISO Core (`systems`)
* **Title**: Zezes — USB OTG Multi-Boot ISO Dispatcher
* **Role**: Systems Engineer
* **Status**: `PROTOTYPE // VALIDATED`
* **URL**: `https://github.com/killindodo/Zezes`
* **Description**: Turn your Android phone into an emergency multi-boot USB installer. Emulates hardware CD-ROM / USB mass storage devices over OTG without needing a PC to flash bootable ISOs.
* **Tech Stack**: Shell, C, Android USB Gadget Driver, Linux Kernel Mass Storage API.

### Project 5: Nitrosense Linux Controller (`systems`)
* **Title**: Nitrosense Linux — Acer Gaming Fan & Power Governor
* **Role**: Systems Hacker
* **Status**: `STABLE RELEASE`
* **URL**: `https://github.com/killindodo/nitrosense-linux`
* **Description**: Native Linux fan speed controller and thermal monitor for Acer Nitro series laptops. Directly reads and writes ACPI Embedded Controller (EC) registers to override Windows-only proprietary fan controls.
* **Tech Stack**: C, Python, Linux `ec_sys` driver, ACPI EC registers.

### Project 6: Dodo-RF Transceiver Suite (`embedded`)
* **Title**: Dodo-RF — Sub-GHz Protocol Analyzer & Transceiver
* **Role**: Embedded Hardware Developer
* **Status**: `HARDWARE TESTED`
* **URL**: `https://github.com/killindodo/Dodo-RF`
* **Description**: Custom firmware and GUI suite for CC1101 Sub-GHz transceivers on ESP32/RP2040. Features raw signal capture, rolling-code inspection, spectrum sniffing, and packet synthesis.
* **Tech Stack**: C++, Arduino/ESP-IDF, CC1101 SPI registers, Python GUI.

### Project 7: Databricks Medallion Lakehouse (`data`)
* **Title**: Databricks Medallion Data Pipelines
* **Role**: Data Engineer
* **Status**: `PRODUCTION PATTERN`
* **URL**: `https://github.com/killindodo/databricks_pipelines`
* **Description**: Industrial-grade PySpark ETL pipelines implementing Bronze, Silver, and Gold Medallion architecture on Databricks Delta Lake with ACID transactional integrity.
* **Tech Stack**: PySpark, Databricks Delta Lake, Apache Spark, Python.

---

## 4. Dual-Theme Architecture (`data-theme`)

The application supports real-time switching between two themes via `<html data-theme="cinematic">` and `<html data-theme="cyber">`:

### Theme 1: Cinematic Editorial (`cinematic`) — *Mise-Films Inspired*
* **Aesthetic**: Luxury boutique agency, tungsten amber glow (`#D4A853`), deep rich obsidian (`#080808`, `#121212`), Cormorant Garamond serif headings, Plus Jakarta Sans body, interactive magnetic cursor, smooth ambient dust particles, horizontal project cards with parallax hover depth.
* **Key Visuals**:
  * Background: `#080808` with subtle radial amber glow (`rgba(212, 168, 83, 0.08)`)
  * Cards: `#121212` with 1px border `#1E1E1E`
  * Accent Color: `#D4A853` (Amber Tungsten) & `#E8C778` (Light Gold)
  * Headings: Cormorant Garamond (fluid editorial scale)

### Theme 2: Retro Cyber Console (`cyber`) — *Signature Hacker Console*
* **Aesthetic**: Mainframe terminal, Matrix green digital rain canvas, CRT scanlines, dot-grid HUD, Space Grotesk headings, Fira Code monospace details, live CLI terminal prompt, interactive dynamic bar graph telemetry.
* **Key Visuals**:
  * Background: `#050811` with Matrix green digital rain canvas
  * Cards: Deep glassmorphism `#0B1120` with 1px neon green border (`rgba(0, 255, 157, 0.25)`)
  * Accent Color: `#00FF9D` (Neon Terminal Green) & `#06B6D4` (Cyber Cyan)
  * Headings: Space Grotesk + Fira Code

### Theme Switcher Control:
* Floating Glass Dock positioned at bottom-left/top-right.
* Tapping immediately transitions CSS classes, toggles Matrix canvas on/off, switches custom cursor mode, and saves choice to `localStorage.setItem('sp_portfolio_theme', theme)`.
* Default theme: `cinematic` (with easy 1-click toggle to `cyber`).

---

## 5. File Structure
* `index.html`: Unified single-page application containing all semantic markup for both themes.
* `style.css`: Dual-theme CSS system with centralized CSS Custom Properties.
* `script.js`: Dual-theme controller, Lenis smooth scroll integration, magnetic cursor, interactive matrix canvas, skills HUD tab switching, and project filter.
* `gatekeeper.js`: Remote status gatekeeper connected to GitHub Gist `20ebeae35f6ac354a606ec7bb22161f6`.
* `ARCHITECTURE_AND_SPECS.md`: This comprehensive offline architectural manual.
