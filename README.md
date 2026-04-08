# Meera Industries - Product Detail Page Architecture

This document provides a comprehensive overview of the structural architecture, component implementations, and data management workflows for the Meera Industries product application interface.

## 1. Project Architecture Overview

The interface is built utilizing a decoupled, data-driven methodology. Rather than hardcoding significant arrays of repeating layout items directly into the HTML structure, the layout relies on vanilla JavaScript to map predefined data arrays into the DOM upon initialization. This ensures a clean, maintainable structure where content editors can update technical specifications, frequently asked questions, and testimonial details without parsing through raw HTML markup.

### Core Technology Stack
*   **Markup:** HTML5
*   **Styling Engine:** Tailwind CSS framework (Utility-first styling applied inline)
*   **Interactivity & DOM Manipulation:** Vanilla JavaScript (ES6)
*   **Scroll & Animation Sub-engines:** Lenis (Smooth scrolling), GSAP / ScrollTrigger (Transition logic)

---

## 2. Page Section Implementations

The application layout is vertically segmented into defined contextual blocks. Below is the technical breakdown of each distinct component layout.

### Product Presentation & Hero
*   **Implementation:** Incorporates an interactive media gallery constructed statically in the HTML.
*   **Zoom Functionality:** Driven by `script.js`. A mathematical projection utilizing a 2.5x magnification ratio maps mouse coordinates against the container bounded-box to translate an absolute cloned image layer within a secondary right-aligned viewing window.

### "Trusted By" Corporate Network
*   **Implementation:** Dynamic grid carousel containing partner brand graphics.
*   **Data Source:** Injected dynamically originating from `trustedBy.js`.

### Technical Specifications Matrix & Features Grid
*   **Implementation:** Statically structured grid definitions taking advantage of Tailwind's CSS Grid classes (`grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-3`) to guarantee strict layout boundaries across mobile and desktop viewports.

### Versatile Applications & Manufacturing Stepper
*   **Implementation:** The applications block utilizes horizontal overflow containment (`overflow-x-auto snap-x`) allowing mobile users to touch-swipe smoothly across cards. The stepper is vertically integrated.

### Frequently Asked Questions (FAQ)
*   **Implementation:** A dynamic mapped accordion. Clicking an active header block calculates the absolute height requirements and utilizes CSS height clipping and opacity transformation to slide the responsive answers into view fluidly. 
*   **Data Source:** `faq.js`

### Testimonials & Portfolio Presentation
*   **Implementation:** Dynamic card generation for both client reviews and project case studies.
*   **Data Source:** `portfolio.js`

### Resources, Footer, and Navigation Data
*   **Implementation:** Generates structural lists for downloadable PDFs, categorizations, and navigational matrices found at the absolute depth of the webpage.
*   **Data Source:** `footerData.js`

### Modals & Action Interactions
*   **Quote Request Modal:** Instantiated by clicking the `.trigger-quote-modal` linked buttons (e.g., Get Custom Quote).
*   **Catalogue Email Modal:** Instantiated by clicking the `Talk to an Expert` button, featuring real-time input validation to clear disabled form interaction states.
*   **Controller:** Managed asynchronously by `script.js`.

---

## 3. Data Modification and Maintenance

To alter the display content on the live interface, engineers and editors should interact strictly with the modular `.js` files containing the hardcoded JSON-style structures. No HTML structure modification is required to extend these lists.

### How to Modify an Existing Data Set

1.  Navigate to the relevant data routing scope (e.g., to add a new Frequently Asked Question, open `faq.js`).
2.  Locate the primary array constant (e.g., `const faqData = [...]`).
3.  Add or modify the object parameters corresponding to that layout module. 

**Example Modification (FAQ):**
```javascript
// Adding a new entry to the bottom of the list
const faqData = [
    // ... existing objects,
    {
        question: "What is the warranty period for new machinery?",
        answer: "Meera Industries provides a standard 12-month comprehensive warranty covering manufacturing defects..."
    }
];
```

### Data File Index Operations
*   `trustedBy.js` - Manage array strings matching relative or absolute URL paths to corporate `.svg` or `.png` logo assets.
*   `faq.js` - Manage object nodes containing exact `{ question, answer }` string data pairs.
*   `portfolio.js` - Contains two distinct arrays (`testimonialsData` and `portfolioData`) processing client titles, quote strings, and project imaging paths.
*   `footerData.js` - Contains three separate arrays (`resourcesData`, `categoriesData`, `productsData`) managing external URL endpoints and standard text bindings for the bottom of the page structure.

Upon saving any changes to the aforementioned data structures, the JavaScript initialization pipeline executes automatically upon browser refresh, mapping the adjusted components directly onto the screen.
