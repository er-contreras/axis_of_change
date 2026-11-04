var about_template = document.createElement("template");
about_template.innerHTML = `
  <div class="about-wrapper">
    <div id="about" class="about-section">
      <p class="section-kicker">The Axis of Change approach</p>
      <h2>Designed Around the Problem</h2>
      <div class="about-description">
        <p>
          Axis of Change helps small, medium, and large organizations turn complex
          challenges into dependable digital products and operations. From a focused
          new initiative to a mature platform requiring modernization, architecture
          guidance, or additional delivery capacity, every engagement begins with the
          problem that matters most.
        </p>
        <br>
        <p>
          Strong outcomes come from the right questions: understanding constraints,
          mapping dependencies, reducing unnecessary complexity, and creating systems
          people can operate with confidence. The result is a thoughtful balance of
          usability, maintainability, performance, and long-term adaptability.
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
