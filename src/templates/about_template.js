var about_template = document.createElement("template");
about_template.innerHTML = `
  <div class="about-wrapper">
    <div id="about" class="about-section">
      <h2>Technical Philosophy</h2>
      <div class="about-description">
        <p>
          Axis of Change is a Systems Engineering outpost dedicated to 
          <strong>Environmental Intelligence</strong>. I don't just build websites; 
          I build high-performance tools that bridge the gap between 
          radio frequencies and digital decision-making.
        </p>
        <br>
        <p>
          By leveraging low-level technologies like <strong>Rust</strong>, 
          <strong>SDR (Software Defined Radio)</strong>, and native 
          rendering, I help businesses visualize the invisible identifying 
          security threats in the airwaves and optimizing the physical 
          infrastructure of the digital age.
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
