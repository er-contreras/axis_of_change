let PRICING_DATA = [
  {
    title: "Discover",
    price: "Understand the opportunity",
    color: "amber",
    features: [
      "Clarify goals, constraints, and priorities",
      "Map the current experience and its friction",
      "Identify risks, dependencies, and opportunities",
      "Create a practical direction for the next step",
      "Deliver a concise, actionable assessment"
    ],
    cta: "Start a Conversation",
    link: "index.html#contact"
  },
  {
    title: "Design",
    price: "Shape the right solution",
    color: "coral",
    features: [
      "Translate needs into clear product structure",
      "Design intuitive journeys and interactions",
      "Define a resilient system architecture",
      "Balance speed, quality, and future change",
      "Align stakeholders around a shared blueprint"
    ],
    cta: "Shape a Solution",
    link: "index.html#contact"
  },
  {
    title: "Deliver",
    price: "Turn direction into momentum",
    color: "teal",
    features: [
      "Build and refine high-value capabilities",
      "Modernize systems without disrupting operations",
      "Improve reliability, visibility, and performance",
      "Create repeatable ways of working",
      "Leave teams with a stronger foundation"
    ],
    cta: "Move Forward",
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
        <p>From first principles to continuous improvement, focused support for organizations creating better digital experiences and stronger operations.</p>
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
        <article class="price-container price-${plan.color}">
          <div>
            <div class="price-header">
              <span class="price-index">${String(PRICING_DATA.indexOf(plan) + 1).padStart(2, "0")}</span>
              <h2>${plan.title}</h2>
              <p>${plan.price}</p>
            </div>

            <div class="price-description">
              <ul>
                ${plan.features.map(f => this.renderFeature(f)).join("")}
              </ul>
            </div>
          </div>

          <a class="anchor-btn" href="${plan.link}">
            <div class="contract-btn">
              ${plan.cta}
            </article>
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
