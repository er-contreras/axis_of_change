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
              <a href="index.html#prices"><li>Pricing</li></a>
              <a href="index.html#about"><li>About</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="header_main">
      <a href="index.html#contact"><span>Contact</span></a>
      <a href="https://calendly.com/er-contreras" target="_blank">
        <span style="display: flex; gap: 1rem;">
          <img style="width: 2rem;" src="./assets/phone.png">
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
      <h1>I create custom websites and applications built to increase trust, boost sales, and move your business forward.</h1>
      <p>Practical, secure, and built for growth.</p>
    </section>

    <div class="svg">
      <svg width="200" height="180" viewBox="0 0 200 180"></svg>
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
      const layers = [
        { color: "#bc0000", delay: 0 },
        { color: "#00690e", delay: 0.5 },
        { color: "#bc0000", delay: 1 },
        { color: "#00690e", delay: 1.5 },
        { color: "#616166", delay: 2 },
        { color: "#ffffff", delay: 2.5, radius: 100 }
      ];
      layers.forEach(({ color, delay, radius = 5 }) => {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", 30);
        rect.setAttribute("y", 30);
        rect.setAttribute("width", 110);
        rect.setAttribute("height", 110);
        rect.setAttribute("rx", radius);
        rect.setAttribute("fill", color);
        const animate = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "animateTransform"
        );
        animate.setAttribute("attributeName", "transform");
        animate.setAttribute("type", "rotate");
        animate.setAttribute("from", "0 85 85");
        animate.setAttribute("to", "360 85 85");
        animate.setAttribute("dur", "10s");
        animate.setAttribute("begin", `${delay}s`);
        animate.setAttribute("repeatCount", "indefinite");
        rect.appendChild(animate);
        svg.appendChild(rect);
      });
    }
  };
  customElements.define("main-wrapper", MainWrapper);

  // src/templates/about_template.js
  var about_template = document.createElement("template");
  about_template.innerHTML = /* InnerHTML */
  `
  <div class="about-wrapper">
    <div id="about" class="about-section">
      <h2>About</h2>
      <div class="about-description">
        <p>
          Axis of Change exists to help businesses grow with clean, fast, and
          purpose-built web applications. I build every project from scratch using
          modern web technologies, no templates, no shortcuts so your business
          gets a website that is reliable, scalable, and truly yours.
        </p>
        <br>
        <p>
          With experience in Ruby on Rails, JavaScript, UI design, and technical
          SEO, I focus on one thing: delivering web solutions that generate real
          business results, not just pretty pages.
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
      title: "Business Website",
      price: "",
      color: "#cd5050",
      features: [
        "Home",
        "About Us",
        "Services",
        "Contact",
        "Blog",
        "Mobile-friendly design",
        "SEO-ready structure"
      ],
      cta: "Contact for pricing",
      link: "index.html#contact"
    },
    {
      title: "Landing Page",
      price: "$3000 MXN",
      color: "#c79e23",
      features: [
        "Responsive Design",
        "Basic SEO optimization",
        "Contact Form",
        "Up to 3 Sections",
        "Fast delivery"
      ],
      cta: "Book a demo",
      link: "index.html#contact"
    },
    {
      title: "Custome Web Application",
      price: "",
      color: "#2d868b",
      features: [
        "Internal tools",
        "Client dashboards",
        "Inventory systems",
        "Automation workflows",
        "Any custom functionality"
      ],
      cta: "Book a consultation",
      link: "index.html#contact"
    }
  ];
  var CHECK_ICON = `
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24">
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
        <h2>Pricing</h2>
        <p>Choose the project that best suits your needs.</p>
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
      <div class="checks">
        ${CHECK_ICON}
        <li>${feature}</li>
      </div>
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
      Tell me about your project, and I\u2019ll get back to you within 24 hours.
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
        this.showStatus("Message sent successfully. I will contact you shortly.", "success");
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
<svg class="linkedin-icon" fill="#8c8c8c" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#8c8c8c">
  <title>linkedin</title>
  <path d="M28.778 1.004h-25.56c-1.2 0-2.186 0.964-2.186 2.159v25.672c0 1.196 0.986 2.161 2.186 2.161h25.555c1.2 0 2.195-0.963 2.195-2.159v-25.67c0-1.197-0.995-2.161-2.195-2.161zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578 0 1.425-1.154 2.58-2.579 2.58zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 4.5 0 5.332 2.962 5.332 6.817v7.855z"/>
</svg>
`,
    twitter: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#8c8c8c">
  <g transform="scale(5.33333,5.33333)">
    <path d="M46.105 11.02c-1.551 0.687-3.219 1.145-4.979 1.362 1.789-1.062 3.166-2.756 3.812-4.758-1.674 0.981-3.529 1.702-5.502 2.082-1.576-1.67-3.824-2.706-6.314-2.706-4.783 0-8.661 3.843-8.661 8.582 0 0.671 0.079 1.324 0.226 1.958-7.196-0.361-13.579-3.782-17.849-8.974-0.75 1.269-1.172 2.754-1.172 4.322 0 2.979 1.525 5.602 3.851 7.147-1.42-0.043-2.756-0.438-3.926-1.072 0 0.026 0 0.064 0 0.101 0 4.163 2.986 7.63 6.944 8.419-0.723 0.198-1.488 0.308-2.276 0.308-0.559 0-1.104-0.063-1.632-0.158 1.102 3.402 4.299 5.889 8.087 5.963-2.964 2.298-6.697 3.674-10.756 3.674-0.701 0-1.387-0.04-2.065-0.122 3.837 2.429 8.39 3.852 13.278 3.852 15.927 0 24.641-13.079 24.641-24.426 0-0.372-0.012-0.742-0.029-1.108 1.7-1.201 3.165-2.715 4.322-4.446z"/>
  </g>
</svg>
`,
    github: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#8c8c8c">
  <g transform="scale(4,4)">
    <path d="M32 6c-14.359 0-26 11.641-26 26 0 12.277 8.512 22.56 19.955 25.286 0.592 0.141 1.179 0.299 1.755 0.479v-8.557c0-2.337-0.972-4.42-2.6-5.85-6.097-1.219-10.4-4.716-10.4-10.4 0-2.876 1.134-5.525 3.032-7.678-0.164-0.507-0.432-1.682-0.432-3.697 0-1.235 0.086-2.751 0.65-4.225 0 0 3.708 0.026 7.205 3.338 1.614-0.47 3.341-0.738 5.145-0.738 1.804 0 3.531 0.268 5.145 0.738 3.497-3.312 7.205-3.338 7.205-3.338 0.567 1.474 0.65 2.99 0.65 4.225 0 1.869-0.333 3.016-0.533 3.583 1.958 2.173 3.133 4.864 3.133 7.792 0 5.684-4.303 9.181-10.4 10.4 1.37 1.204 2.21 2.886 2.478 4.774 0.58 0.28 1.422 0.426 2.397 0.426 0.783 0 2.304-0.37 3.721-2.577 0.572-0.894 1.804-2.623 3.429-2.623 0.317 0 0.985-0.02 0.975 0.471-0.005 0.234-0.364 0.236-1.131 0.92-0.642 0.575-1.24 1.516-1.469 2.509-0.377 1.63-1.888 4.875-5.525 4.875-1.3 0-2.275-0.325-2.275-0.325v5.957c0.576 0.18 1.163 0.338 1.755 0.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6z"/>
  </g>
</svg>
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
          <h2>Why businesses choose AC</h2>
          <ul class="reasons-list"></ul>
        </div>

        <div class="connect-with-us">
          <h2>Connect with Us</h2>
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
        Axis of Change | Building reliable digital experience | All Rights Reserved
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
        "Web development",
        "Mobile development",
        "E-commerce",
        "CMS / CRM",
        "Business automation"
      ];
      const reasons = [
        "Reliable & scalable",
        "Secure by design",
        "Cost-effective",
        "Integrations that grow with you",
        "Long-term maintainability"
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
      const socials = [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/er-contreras/", icon: "linkedin" },
        { name: "Twitter", href: "https://twitter.com/er_contreras_", icon: "twitter" },
        { name: "GitHub", href: "https://github.com/er-contreras", icon: "github" }
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
        <a class="link" href="index.html#prices"><li>Pricing</li></a>
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
