# SURYA PRATAP / KILLINDODO — DIGITAL HEADQUARTERS & PORTFOLIO ARCHITECTURE

> **Master Architecture & Engineering Specification Document**  
> *Offline Development Standard • Zero Token Waste • Single Source of Truth*

---

## 1. Identity, Philosophy & Brand Positioning

* **Name**: SURYA PRATAP
* **Engineering Identity / Codename**: `KILLINDODO` / `KILLINDODO / SYSTEMS`
* **Company**: Founder & Principal Systems Architect, **SJ Digitals Co.** (`https://sjdigitals.vercel.app/` / `https://killindodo.github.io/sjdigitals.co/`)
* **Core Tagline**: Systems & Software Engineer • Hardware • Linux Kernel • RF • Infrastructure
* **Core Philosophy**: *"Engineered, Not Decorated."* — Understanding what happens beneath the abstraction.
* **The Vertical Stack**:
  $$\text{Interface} \longrightarrow \text{Application} \longrightarrow \text{Operating System} \longrightarrow \text{Kernel} \longrightarrow \text{Hardware} \longrightarrow \text{Wireless RF} \longrightarrow \text{Data Lakehouse}$$
* **Direct Contacts**:
  * WhatsApp: `+917004185301` (`https://wa.me/917004185301`)
  * Email: `suryapratapsingh420786@gmail.com`
  * Phone: `+917004185301`
  * GitHub: `https://github.com/killindodo`
  * LinkedIn: `https://www.linkedin.com/in/surya-pratap-270b35153/`
  * Telegram: `https://t.me/killindod0`
  * Location: Gaya, Bihar, India (Remote & Global Systems Consulting)

---

## 2. Creative & Visual Direction

* **Vibe**: Apple-level presentation × Linear-level interface polish × Vercel typography × Stripe architectural rigor.
* **Color Palette**:
  * Deep Near-Black Graphite: `#08090D`, `#0E1118`, `#141824`
  * Hairline Technical Borders: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.16)`
  * Off-White Architectural Typography: `#F5F6F8`, `#E2E4E9`, `#94A3B8`
  * Technical Accent: Precision Electric Cobalt (`#3B82F6` / `#60A5FA`)
  * Founder Accent: Warm Editorial Amber (`#D97706` / `#F59E0B` for SJ Digitals Co.)
  * System Success Indicators: Emerald `#10B981`
* **Typography**:
  * Primary Sans: `Plus Jakarta Sans` / `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  * Monospace Technical Data & Schematics: `Fira Code`, `monospace`
  * Display Headlines: `Space Grotesk`, `sans-serif` (Precision engineered geometry)

---

## 3. Engineering Domains (The 6 Pillars)

1. **Software & Web Platforms (`web`)**: Zero layout shifts, high-throughput interfaces, vanilla performance, edge deployment.
2. **Linux & Low Level (`linux`)**: ACPI Embedded Controller drivers, custom kernel modules, DKMS, system daemons, UNIX sockets.
3. **Android System Architecture (`android`)**: Custom recovery (TWRP/OrangeFox), USB Gadget ConfigFS, GKI kernels, EROFS, Magisk/KernelSU.
4. **Embedded & Wireless RF (`embedded`)**: ESP32, RP2040, CC1101 Sub-GHz transceivers (315/433/868/915MHz), SPI/I2C bitbanging, packet replay.
5. **Data Engineering & Lakehouse (`data`)**: Databricks Delta Lake, Apache Spark / PySpark, Medallion Architecture (Bronze ➔ Silver ➔ Gold).
6. **Digital Enterprise Products (`agency`)**: Client web platforms, NFC smart business ecosystems, Google Business local optimization via SJ Digitals Co.

---

## 4. Live GitHub Data Layer & Architecture

* **Source of Truth**: `https://api.github.com/users/killindodo/repos`
* **Fallback Layer**: `data/repositories.json` (offline-safe, pre-rendered snapshot of all 11+ public repositories with detailed case studies).
* **Sync Strategy**:
  1. At load time, client-side script queries GitHub API.
  2. If rate-limited or offline, seamlessly loads `data/repositories.json`.
  3. Continuous background auto-sync via `.github/workflows/update-github-data.yml`.
* **Search & Filter**:
  * Real-time client-side keyword search (Android, Linux, ESP32, Python, driver, RF, etc.).
  * Multi-domain category pills (`ALL`, `WEB`, `LINUX`, `ANDROID`, `EMBEDDED`, `DATA`).
  * Sorting by Relevance, Recently Updated, Stars, and Name.

---

## 5. Interactive Components & Case Study Experience

* **Hero Living System Architecture**: An interactive HTML5 Canvas displaying an evolving graph of nodes, bus traces, and signal pulses representing the unified hardware-to-cloud ecosystem.
* **Case Study Drawer Modal**:
  * Clicking any project card expands a full-screen or slide-in technical breakdown:
    `01 — CONTEXT` • `02 — PROBLEM` • `03 — ENGINEERING` • `04 — ARCHITECTURE` • `05 — IMPLEMENTATION` • `06 — RESULT` • `07 — REPOSITORY & DEMO`.
* **Engineering Evolution Timeline**: Milestones spanning 2021 to 2026.
* **Easter Egg**: Pressing the backtick key (`` ` ``) or typing `killindodo` opens a floating real-time technical diagnostic console with system telemetry.
* **Remote Gatekeeper**: Fully integrated with `gatekeeper.js` (with automatic local development safeguard).
