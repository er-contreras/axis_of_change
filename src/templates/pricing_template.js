let PRICING_DATA = [
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

const CHECK_ICON = `
  <svg fill="#000000" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
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
        <h2>Ways to Work Together</h2>
        <p>Focused engineering support for new features, product improvements, and Rails applications that need a careful next step.</p>
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
      <li class="checks">
        ${CHECK_ICON}
        <div>${feature}</div>
      </li>
    `;
  }
}

customElements.define("pricing-wrapper", PricingWrapper);
