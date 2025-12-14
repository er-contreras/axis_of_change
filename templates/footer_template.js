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
    items.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });
  }

  renderSocialLinks() {
    const socials = [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/er-contreras/", icon: "linkedin" },
      { name: "Twitter",  href: "https://twitter.com/er_contreras_", icon: "twitter" },
      { name: "GitHub",   href: "https://github.com/er-contreras", icon: "github" },
      { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100074601182991", icon: "facebook" }
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

