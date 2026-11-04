import { iconTemplates } from "../icons.js";

const footer_template = document.createElement("template");
footer_template.innerHTML = /* html */`
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

class FooterWrapper extends HTMLElement {
  connectedCallback() {
    this.append(footer_template.content.cloneNode(true));

    this.renderYear();
    this.renderLists();
    this.renderSocialLinks();
  }

  renderYear() {
    this.querySelector(".year").textContent = new Date().getFullYear();
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
    items.forEach(text => {
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
      { name: "Facebook", href: `https://facebook.com/share?url=${url}`, icon: "facebook" },
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
}

customElements.define("footer-wrapper", FooterWrapper);
