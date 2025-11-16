const PRICING_DATA = [
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

const CHECK_ICON = `
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24">
    <path d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5
      l-3.1-3.1c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8
      c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2
      C19.1,8.2,19.1,7.6,18.7,7.2z"/>
  </svg>
`;

class PricingWrapper extends HTMLElement {
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
            ${PRICING_DATA.map(plan => this.renderPlan(plan)).join("")}
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
                ${plan.features.map(f => this.renderFeature(f)).join("")}
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
}

customElements.define("pricing-wrapper", PricingWrapper);

