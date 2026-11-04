(() => {
  // src/templates/header_template.js
  var header_template = document.createElement("template");
  header_template.innerHTML = /* html */
  `
  <header class="header_header">
    <div class="header_left">
      <a href="index.html#">
        <span style="font-weight: bolder;">Axis of<br>Change</span>
      </a>
      <div>
        <nav>
          <div>
            <ul class="navigation-menu">
              <a href="index.html#"><li>Home</li></a>
              <a href="index.html#prices"><li>Services</li></a>
              <a href="index.html#about"><li>About</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="header_main">
      <a href="index.html#contact"><span>Contact</span></a>
      <a href="https://calendly.com/er-contreras" target="_blank">
        <span style="display: flex; gap: 1rem; align-items: center;">
          <img src="./assets/phone.png" alt="Phone icon" width="15" height="15" loading="lazy">
          BOOK A FREE CONSULTATION
        </span>
      </a>
    </div>
  </header>

  <header class="hidden_header">
    <div class="hidden_header_left">
      <a href="index.html#"><span style="font-weight: bolder;">AXIS<br>OF<br>CHANGE</span></a>
    </div>

    <div class="header_button menu-button">
      <div class="lines"></div>
      <div class="lines"></div>
    </div>
  </header>`;
  var HeaderWrapper = class extends HTMLElement {
    connectedCallback() {
      const html = header_template.content.cloneNode(true);
      this.append(html);
    }
  };
  customElements.define("header-wrapper", HeaderWrapper);

  // src/templates/main_template.js
  var main_template = document.createElement("template");
  main_template.innerHTML = `
  <main class="main_main">
    <div class="content-bg"></div>

    <section class="content">
      <h1 class="hero-title">Engineering Solutions That Move Businesses Forward</h1>
      <p>Language-agnostic software engineering for companies that need reliable products, stronger systems, and a clear path from technical challenge to business outcome.</p>
    </section>

    <div class="svg">
      <svg width="200" height="180" viewBox="0 0 200 180" aria-hidden="true"></svg>
    </div>
  </main>
`;
  var MainWrapper = class extends HTMLElement {
    connectedCallback() {
      this.append(main_template.content.cloneNode(true));
      this.renderSVG();
    }
    renderSVG() {
      const svg = this.querySelector("svg");
      const centerX = 100;
      const centerY = 90;
      svg.innerHTML = `
    <defs>
      <filter id="metal-gloss" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
        <feSpecularLighting in="blur"
          surfaceScale="3"
          specularConstant="0.7"
          specularExponent="35"
          lighting-color="#ffffff"
          result="specOut"
        >
        <fePointLight x="-40" y="-40" z="80" />
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="0.8" k4="0" />
      </filter>

      <linearGradient id="steel-dark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#777" />
        <stop offset="45%" style="stop-color:#333" />
        <stop offset="55%" style="stop-color:#444" />
        <stop offset="100%" style="stop-color:#111" />
      </linearGradient>
    </defs>
  `;
      const layers = [
        { teeth: 27, innerR: 82, outerR: 90, fill: "url(#steel-dark)", speed: 45, dir: 1 },
        { teeth: 30, innerR: 66, outerR: 66, fill: "white", speed: 45, dir: 1 },
        { teeth: 24, innerR: 54, outerR: 62, fill: "gray", speed: 30, dir: -1 },
        { teeth: 16, innerR: 42, outerR: 50, fill: "#B02A2A", speed: 30, dir: -1 },
        { teeth: 15, innerR: 34, outerR: 34, fill: "white", speed: 20, dir: 1 },
        { teeth: 15, innerR: 28, outerR: 28, fill: "gray", speed: 20, dir: 1 },
        { teeth: 15, innerR: 20, outerR: 20, fill: "white", speed: 20, dir: 1 }
      ];
      layers.forEach(({ teeth, innerR, outerR, fill, speed, dir }) => {
        const gear = document.createElementNS("http://www.w3.org/2000/svg", "path");
        gear.setAttribute("d", this.calculatePrecisionGearPath(centerX, centerY, teeth, innerR, outerR));
        gear.setAttribute("fill", fill);
        gear.setAttribute("filter", "url(#metal-gloss)");
        gear.style.filter = "url(#metal-gloss) drop-shadow(1.5px 1.5px 2px rgba(0,0,0,0.6))";
        const anim = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        anim.setAttribute("attributeName", "transform");
        anim.setAttribute("type", "rotate");
        anim.setAttribute("from", `${dir === 1 ? 0 : 360} ${centerX} ${centerY}`);
        anim.setAttribute("to", `${dir === 1 ? 360 : 0} ${centerX} ${centerY}`);
        anim.setAttribute("dur", `${speed}s`);
        anim.setAttribute("repeatCount", "indefinite");
        gear.appendChild(anim);
        svg.appendChild(gear);
      });
      const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      core.setAttribute("cx", centerX);
      core.setAttribute("cy", centerY);
      core.setAttribute("r", "12");
      core.setAttribute("fill", "none");
      core.setAttribute("stroke", "#393939");
      core.setAttribute("stroke-width", "5");
      svg.appendChild(core);
    }
    calculatePrecisionGearPath(cx, cy, teeth, innerR, outerR) {
      let p = [];
      const step = Math.PI * 2 / teeth;
      const baseWidth = step * 0.35;
      const topWidth = step * 0.25;
      for (let i = 0; i < teeth; i++) {
        const a = i * step;
        p.push(`${cx + Math.cos(a - baseWidth) * innerR},${cy + Math.sin(a - baseWidth) * innerR}`);
        p.push(`${cx + Math.cos(a - topWidth) * outerR},${cy + Math.sin(a - topWidth) * outerR}`);
        p.push(`${cx + Math.cos(a + topWidth) * outerR},${cy + Math.sin(a + topWidth) * outerR}`);
        p.push(`${cx + Math.cos(a + baseWidth) * innerR},${cy + Math.sin(a + baseWidth) * innerR}`);
        const valleyAngle = a + step / 2;
        p.push(`${cx + Math.cos(valleyAngle - baseWidth) * innerR},${cy + Math.sin(valleyAngle - baseWidth) * innerR}`);
      }
      return "M" + p.join(" L") + " Z";
    }
  };
  customElements.define("main-wrapper", MainWrapper);

  // src/templates/about_template.js
  var about_template = document.createElement("template");
  about_template.innerHTML = `
  <div class="about-wrapper">
    <div id="about" class="about-section">
      <h2>Engineering for Every Stage of Growth</h2>
      <div class="about-description">
        <p>
          Axis of Change helps small, medium, and large companies turn technical
          challenges into dependable digital products. From a focused MVP or internal
          workflow to a mature platform requiring modernization, architecture guidance,
          or additional delivery capacity, each engagement is shaped around the problem
          and the outcome.
        </p>
        <br>
        <p>
          A language-agnostic approach keeps technology aligned with the business need.
          Experience across Ruby on Rails, JavaScript, React, PostgreSQL, authentication,
          payments, testing, Docker, and Linux supports practical recommendations without
          forcing every organization into the same stack.
        </p>
      </div>
    </div>
  </div>`;
  var AboutWrapper = class extends HTMLElement {
    connectedCallback() {
      const html = about_template.content.cloneNode(true);
      this.append(html);
    }
  };
  customElements.define("about-wrapper", AboutWrapper);

  // src/templates/pricing_template.js
  var PRICING_DATA = [
    {
      title: "Rails API Development",
      price: "Fixed Rate",
      color: "#665400",
      features: [
        "CRUD endpoints and JSON serialization",
        "JWT and OIDC authentication",
        "PostgreSQL schema and query design",
        "Swagger API documentation",
        "RSpec coverage for new features"
      ],
      cta: "Discuss a Project",
      link: "index.html#contact"
    },
    {
      title: "Product Features",
      price: "Project-Based",
      color: "#cd5050",
      features: [
        "JavaScript and React interfaces",
        "Hotwire, Turbo, and Stimulus",
        "Stripe payment flows",
        "Checkout and workflow improvements",
        "Minitest or RSpec-backed delivery"
      ],
      cta: "Plan a Feature",
      link: "index.html#contact"
    },
    {
      title: "Modernization & Deployment",
      price: "Retainer",
      color: "#2d868b",
      features: [
        "Legacy Rails upgrades",
        "Docker and Docker Compose setup",
        "Deployments to Linux and managed services",
        "Dokku, Nginx, and HTTPS configuration",
        "GitHub Actions and repeatable releases"
      ],
      cta: "Improve an Existing App",
      link: "index.html#contact"
    }
  ];
  var CHECK_ICON = `
  <svg fill="#000000" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5
      l-3.1-3.1c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8
      c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2
      C19.1,8.2,19.1,7.6,18.7,7.2z"/>
  </svg>
`;
  var PricingWrapper = class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = this.renderPrices();
    }
    renderPrices() {
      return `
      <div id="prices" class="prices-h2">
        <h2>Ways to Work Together</h2>
        <p>Focused engineering support for new features, product improvements, and Rails applications that need a careful next step.</p>
      </div>

        <div class="prices-container">
          <section class="prices-section">
            ${PRICING_DATA.map((plan) => this.renderPlan(plan)).join("")}
          </section>
        </div>
    `;
    }
    renderPlan(plan) {
      return `
        <div class="price-container">
          <div>
            <div class="price-header">
              <h2 style="color: ${plan.color};">${plan.title}</h2>
              <p>${plan.price}</p>
            </div>

            <div class="price-description">
              <ul>
                ${plan.features.map((f) => this.renderFeature(f)).join("")}
              </ul>
            </div>
          </div>

          <a class="anchor-btn" href="${plan.link}">
            <div class="contract-btn" style="background-color: ${plan.color};">
              ${plan.cta}
            </div>
          </a>
        </div>
    `;
    }
    renderFeature(feature) {
      return `
      <li class="checks">
        ${CHECK_ICON}
        <div>${feature}</div>
      </li>
    `;
    }
  };
  customElements.define("pricing-wrapper", PricingWrapper);

  // src/templates/contact_template.js
  var contact_template = document.createElement("template");
  contact_template.innerHTML = `
  <form class="contact-form" novalidate>
    <h2>Get in touch</h2>
    <p class="form-subtitle">
      Share the challenge, opportunity, or system that needs attention, and a response will follow within 24 hours.
    </p>

    <div class="form-group">
      <label for="name">Full Name <span class="require" aria-hidden="true">*</span></label>
      <input id="name" name="name" type="text" required />
    </div>

    <div class="form-group">
      <label for="email">Email Address <span class="require" aria-hidden="true">*</span></label>
      <input id="email" name="email" type="email" required />
    </div>

    <div class="form-group">
      <label for="phone">Phone Number <span class="require" aria-hidden="true">*</span></label>
      <input id="phone" name="phone" type="tel" required />
    </div>

    <div class="form-group">
      <label for="message">Your Message <span class="require" aria-hidden="true">*</span></label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <button type="submit" class="submit-button">
      Send Message
    </button>

    <p class="form-status" hidden></p>
  </form>
`;
  var ContactWrapper = class extends HTMLElement {
    connectedCallback() {
      this.append(contact_template.content.cloneNode(true));
      this.form = this.querySelector("form");
      this.status = this.querySelector(".form-status");
      this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }
    async handleSubmit(event) {
      event.preventDefault();
      if (!this.form.checkValidity()) {
        this.showStatus("Please complete all required fields.", "error");
        return;
      }
      this.setLoading(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: this.accessKey,
            subject: "New Submission from Website",
            ...Object.fromEntries(new FormData(this.form))
          })
        });
        if (!response.ok) throw new Error("Submission failed");
        this.form.reset();
        this.showStatus("Message sent successfully. Axis of Change will be in touch shortly.", "success");
      } catch (err) {
        this.showStatus("Something went wrong. Please try again later.", "error");
      } finally {
        this.setLoading(false);
      }
    }
    showStatus(message, type) {
      this.status.textContent = message;
      this.status.hidden = false;
      this.status.dataset.type = type;
    }
    setLoading(isLoading) {
      this.form.querySelector("button").disabled = isLoading;
    }
    get accessKey() {
      return this.getAttribute("access-key");
    }
  };
  customElements.define("contact-wrapper", ContactWrapper);

  // src/icons.js
  var iconTemplates = {
    linkedin: `
<svg width="64px" height="64px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#999999" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
`,
    twitter: `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="#8c8c8c" aria-hidden="true">
  <g transform="scale(5.33333,5.33333)">
    <path d="M46.105 11.02c-1.551 0.687-3.219 1.145-4.979 1.362 1.789-1.062 3.166-2.756 3.812-4.758-1.674 0.981-3.529 1.702-5.502 2.082-1.576-1.67-3.824-2.706-6.314-2.706-4.783 0-8.661 3.843-8.661 8.582 0 0.671 0.079 1.324 0.226 1.958-7.196-0.361-13.579-3.782-17.849-8.974-0.75 1.269-1.172 2.754-1.172 4.322 0 2.979 1.525 5.602 3.851 7.147-1.42-0.043-2.756-0.438-3.926-1.072 0 0.026 0 0.064 0 0.101 0 4.163 2.986 7.63 6.944 8.419-0.723 0.198-1.488 0.308-2.276 0.308-0.559 0-1.104-0.063-1.632-0.158 1.102 3.402 4.299 5.889 8.087 5.963-2.964 2.298-6.697 3.674-10.756 3.674-0.701 0-1.387-0.04-2.065-0.122 3.837 2.429 8.39 3.852 13.278 3.852 15.927 0 24.641-13.079 24.641-24.426 0-0.372-0.012-0.742-0.029-1.108 1.7-1.201 3.165-2.715 4.322-4.446z"/>
  </g>
</svg>
`,
    facebook: `
<svg width="64px" height="64px" viewBox="-9.6 -9.6 67.20 67.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#999999"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
`
  };

  // src/templates/footer_template.js
  var footer_template = document.createElement("template");
  footer_template.innerHTML = /* html */
  `
  <footer>
    <div class="footer">
      <section class="content-2">

        <div class="content-2-lines">
          <h2>Services</h2>
          <ul class="services-list"></ul>
        </div>

        <div class="content-2-lines last-child">
          <h2>Why organizations choose AC</h2>
          <ul class="reasons-list"></ul>
        </div>

        <div class="connect-with-us">
          <h2>Share</h2>
          <div class="social-media"></div>
        </div>

      </section>
    </div>

    <div class="rights-reserved">
      <p class="fcopyright">
        <a href="#">Privacy Policy</a> |
        <a href="#">Legal Policy</a> |
        <a href="#">Careers</a> |
        <a href="#">Sitemap</a> |
        <a href="#">Referral</a> |
        <a href="#">Contact Us</a>
      </p>

      <p>
        &copy; <span class="year"></span>
        Axis of Change | Full-Stack Ruby & JavaScript Development | All Rights Reserved
      </p>
    </div>
  </footer>
`;
  var FooterWrapper = class extends HTMLElement {
    connectedCallback() {
      this.append(footer_template.content.cloneNode(true));
      this.renderYear();
      this.renderLists();
      this.renderSocialLinks();
    }
    renderYear() {
      this.querySelector(".year").textContent = (/* @__PURE__ */ new Date()).getFullYear();
    }
    renderLists() {
      const services = [
        "Ruby on Rails APIs",
        "JavaScript & React Features",
        "PostgreSQL Design",
        "Stripe Integrations",
        "Deployment & Modernization"
      ];
      const reasons = [
        "Business-focused problem solving",
        "Language-agnostic recommendations",
        "Test-backed engineering",
        "Reliable integrations and workflows",
        "Support from MVP to modernization"
      ];
      this.fillList(".services-list", services);
      this.fillList(".reasons-list", reasons);
    }
    fillList(selector, items) {
      const ul = this.querySelector(selector);
      items.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
    }
    renderSocialLinks() {
      const url = "www.axisofchange.xyz";
      let encoded_url = encodeURIComponent(url);
      const socials = [
        { name: "LinkedIn", href: `https://www.linkedin.com/share?url=${encoded_url}`, icon: "linkedin" },
        { name: "Twitter", href: `https://twitter.com/share?url=${url}`, icon: "twitter" },
        { name: "Facebook", href: `https://facebook.com/share?url=${url}`, icon: "facebook" }
      ];
      const container = this.querySelector(".social-media");
      socials.forEach(({ name, href, icon }) => {
        const a = document.createElement("a");
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", name);
        a.innerHTML = iconTemplates[icon];
        container.appendChild(a);
      });
    }
  };
  customElements.define("footer-wrapper", FooterWrapper);

  // src/templates/menu_template.js
  var menu_template = document.createElement("template");
  menu_template.innerHTML = /* InnerHTML */
  `
  <div class="popup-menu">
    <div class="top-popup-menu">
      <h2>Menu</h2>
      <h3 class="close-btn">X</h3>
    </div>

    <div class="popup-menu-options">
      <ul>
        <a class="link" href="index.html#"><li>Home</li></a>
        <a class="link" href="index.html#prices"><li>Services</li></a>
        <a class="link" href="index.html#about"><li>About</li></a>
        <a class="link" href="index.html#contact"><li style="color: #c5650f";>Contact</li></a>
        <a href="https://calendly.com/er-contreras"><li style="color: #198755";>Free Consultation</li></a>
      </ul>
    </div>
  </div>
`;
  var MenuWrapper = class extends HTMLElement {
    connectedCallback() {
      var _a;
      this.append(menu_template.content.cloneNode(true));
      const closeBtn = this.querySelector(".close-btn");
      (_a = document.querySelector(".menu-button")) == null ? void 0 : _a.addEventListener("click", () => {
        this.style.display = "block";
      });
      closeBtn.addEventListener("click", () => {
        this.style.display = "none";
      });
      const links = this.querySelectorAll(".link");
      links.forEach((link) => {
        link.addEventListener("click", () => {
          this.style.display = "none";
        });
      });
    }
  };
  customElements.define("menu-wrapper", MenuWrapper);
})();
