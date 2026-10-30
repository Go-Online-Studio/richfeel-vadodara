# Richfeel Trichology Centre Vadodara — Project Documentation

## 1. Executive Summary & Company Profile

**Richfeel Trichology Centre Vadodara** is the premier hair restoration, scientific trichology, and advanced skin aesthetics clinic located at Marvel Square, Sunpharma Road, Vadodara, Gujarat. 

* **Brand Legacy:** Founded in 1986 by **Dr. Apoorva Shah & Dr. Sonal Shah** — India’s first certified Trichologists recognized in the **Limca Book of Records** and popularly celebrated as the *"Shahs of Trichology"*.
* **Clinical Heritage:** 38+ years of clinical excellence, pioneering research, and international medical collaborations across the United Kingdom, Switzerland, Italy, and Austria.
* **In-Clinic Lead Doctor (Vadodara Branch):** **Dr. Leena Patil (BHMS)** — Counsellor, Clinical Cosmetologist, and WMTA-Certified Trichologist (*World Medical Trichologists Association, U.S.A.*).
* **Niche & Clinical Focus:** Evidence-based cellular and microscopic trichology diagnosis, non-surgical stem cell hair restoration, Austrian lymphatic scalp detoxification, AHI scar-free hair transplants, pain-free ICE CUBE 2.0 laser hair reduction, and clinical dermatological facials.

---

## 2. Key Business Details & Contact Information

| Detail | Information |
| :--- | :--- |
| **Brand Name** | Richfeel Vadodara (Richfeel Trichology Centre) |
| **Tagline** | *"Invest in your hair, it's the crown you never take off."* |
| **Sub-Tagline** | *"Expert Care for Skin & Hair: Revive. Rejuvenate. Reveal."* |
| **Official Domain / Website** | [https://richfeelvadodara.com/](https://richfeelvadodara.com/) |
| **Physical Address** | FF/09/10/11, Marvel Square, Sunpharma Road, Opp. Gokulesh Complex, Vadodara - 390012, Gujarat, India |
| **Geographic Coordinates** | Latitude: `22.2858`, Longitude: `73.1492` |
| **Primary Contact Phone** | `+91 74900 40063` |
| **Secondary Contact Phone** | `+91 74900 35002` |
| **Official Clinic Email** | `richfeelbaroda24@gmail.com` |
| **Operating Hours** | Monday – Sunday: 10:00 AM – 7:30 PM (All 7 Days) |
| **Consultation Fee** | Complimentary Initial Clinical Assessment |
| **Google Maps Location** | [Google Maps Link](https://maps.app.goo.gl/zTiEoMz2phsFqeH67) |
| **WhatsApp Direct Connect** | `https://api.whatsapp.com/send?phone=917490040063` |

---

## 3. Technology Stack & Infrastructure

The website is architected with modern web technologies focused on high performance, SEO dominance, smooth mobile responsiveness, and zero-downtime static delivery:

* **Framework:** **Next.js 16 (App Router with Turbopack)** — Configured for Static Site Generation (SSG / Pre-rendering) across all 43+ routes.
* **Core Library:** **React 19**
* **Language:** **TypeScript 5+**
* **Styling & Design System:** **Tailwind CSS v4** with PostCSS and Autoprefixer. Custom aesthetic palette featuring Medical Navy (`#101e3d`), Rich Brand Blue (`#27448a`), Vibrant Cyan (`#0a6ebd`), and Clinical Mint Teal (`#4ecdc4`).
* **Icons:** **Lucide React** (`lucide-react`)
* **Interactive Carousels:** **Swiper 14** (Touch drag, autoplay, keyboard accessibility, dynamic slides per view, and programmatic navigation control).
* **Media & Lightbox Viewer:** **@fancyapps/ui** (Fancybox 6) for clinical before-and-after photo galleries and high-resolution clinical proof.
* **Content Engine:** **Gray-matter**, **Remark**, and **Remark-HTML** for markdown-driven trichology knowledge base and clinical blogs.
* **Hosting Environment:** Hosted on **Hostinger** (under the production domain `https://richfeelvadodara.com/`).

---

## 4. Frontend Architecture & Key Functionality

### A. Dual Form Synchronization & Google Sheets Automation
* **Unified Data Schema:** Both the global **Popup Consultation Modal** (`ConsultationModal.tsx`) and the in-page **Contact Form** (`ContactSection.tsx`) collect identical fields:
  1. Full Name *(Required)*
  2. Contact Phone Number *(Required)*
  3. Email Address *(Optional)*
  4. Primary Treatment or Concern *(Mandatory dropdown grouping all 19 treatments)*
  5. Preferred Date *(Date picker with past dates disabled)*
  6. Preferred Time Slot *(Morning 10 AM-1 PM / Afternoon 1 PM-5 PM / Evening 5 PM-7:30 PM)*
  7. Condition Notes / Queries *(Optional)*
* **Mandatory Treatment Validation:** Both HTML5 validation and strict JavaScript guards prevent form submission until a treatment is selected.
* **Sequential Dual-Dispatch:** 
  1. The form first dispatches lead data via `POST` with `mode: 'no-cors'` to a custom **Google Apps Script Web App** (`google-apps-script.js`).
  2. The Google Sheet automatically creates styled headers on first run, records the IST timestamp, formats phone numbers, and appends the lead.
  3. Form displays a success confirmation view.
  4. Form triggers an automatic redirect to WhatsApp with a prefilled, structured appointment summary for clinic coordinators.
  5. Form resets all input fields to ensure zero duplicate submissions.

### B. Dynamic WhatsApp Routing System
* **Device Detection:** Detects whether the visitor is on a mobile device or desktop browser via user agent parsing and screen width checks.
* **Adaptive Target:**
  * **Mobile:** Directly launches the native WhatsApp application using `https://api.whatsapp.com/send`.
  * **Desktop:** Opens WhatsApp Web in a separate browser tab via `https://web.whatsapp.com/send`.
* **Debounced Window Resize:** Incorporates a 150ms debounce on window resize and orientation events to smoothly synchronize all `.set-url-target` and WhatsApp links without performance lag.

### C. Hero & Banner Navigation
* **Image Banner Carousel:** Full-screen responsive banner slider featuring dual-source pictures (optimized for mobile portrait vs. desktop landscape).
* **Distinct Call-to-Actions:** Primary buttons navigate directly to detailed clinical service pages (such as Anagrow, TST+, Laser, and Founders Heritage `/about`), while secondary buttons trigger the instant booking modal.

### D. Mobile Responsiveness & Modal Viewport UX
* **Constrained Modal Height:** Configured with `max-h-[92vh] sm:max-h-[88vh]` and `flex flex-col`.
* **Sticky Modal Header:** Brand title and close (`X`) button stay pinned at top.
* **Inner Scroll Container:** Form body uses `overflow-y-auto` and `overscroll-contain` so small screens and mobile landscape viewports can scroll through all inputs effortlessly without clipping.

### E. Clinical Procedures & Knowledge Architecture
* **Treatments Catalog (19 Dedicated Services):**
  * *Hair Restoration:* Richfeel Anagrow, TST+, AHI Hair Transplant, Advanced PRP, Advanced Exosome GFC, Non-Surgical Hair System, Photo Bio Therapy.
  * *Scalp Therapy:* Richfeel Ana-d-tox, Clinical Anti-Dandruff Therapy, Hair Hydratherapy, Diagnostic Triad.
  * *Skin Aesthetics:* Laser Hair Reduction 2.0 (ICE CUBE Cool Brush), Advance Hydra Facial, Medi-Facial, Clinical Chemical Peels, Carbon Laser Facial, Clinical Acne & Scar Treatment, Skin Brightening Treatment, Derma-Korean Treatment, Korean Glass Skin Treatment.
* **Clinical Condition Guides:** Hair Fall, Baldness & Receding Hairline, Dandruff & Scalp Infections, Acne & Blemishes, Unwanted Body Hair, Hair Colour Damage.
* **Trichology Knowledge Hub:** Markdown-powered educational blog posts with categorized filters, sharing hooks, and direct appointment conversion widgets.