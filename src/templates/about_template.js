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

class AboutWrapper extends HTMLElement {
  connectedCallback() {
    const html = about_template.content.cloneNode(true);
    this.append(html);
  }
}
customElements.define("about-wrapper", AboutWrapper);
