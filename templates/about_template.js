const about_template = document.createElement("template");
about_template.innerHTML = /* InnerHTML */`
  <div id="about" class="about-section">
    <h2>About</h2>
    <div class="about-description">
      <p>
        I started Axis of Change to help small businesses grow through meaningful design. Every project is built from
        scratch thoughtful, fast, and personal. My goal is simple: make your website reflect who you are, and help
        your clients find you with ease.
      </p>
    </div>
  </div>`;

// JavaScript logic of the component
class AboutWrapper extends HTMLElement {
  connectedCallback() {
    const html = about_template.content.cloneNode(true);
    this.append(html);
  }
}
customElements.define("about-wrapper", AboutWrapper);
