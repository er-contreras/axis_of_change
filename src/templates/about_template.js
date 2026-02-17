var about_template = document.createElement("template");
about_template.innerHTML = `
  <div class="about-wrapper">
    <div id="about" class="about-section">
      <h2>Technical Philosophy</h2>
      <div class="about-description">
        <p>
          Axis of Change is an engineering practice dedicated to 
          <strong>System Resilience and Performance</strong>. We don’t just write code; 
          we engineer high-performance backends and robust infrastructure 
          designed to survive high-traffic, mission-critical environments.
        </p>
        <br>
        <p>
          By maintaining a <strong>language-agnostic</strong> approach, we prioritize 
          the best tool for the objective whether that involves high-level 
          application logic or low-level system optimization. Our focus is on 
          eliminating technical debt, automating deployment pipelines, and 
          ensuring that every system we touch is faster, more secure, and 
          infinitely more reliable.
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
