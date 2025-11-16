const about_template = document.createElement("template");
about_template.innerHTML = /* InnerHTML */`
  <div class="about-wrapper">
  <div id="about" class="about-section">
    <h2>About</h2>
    <div class="about-description">
      <p>
        Axis of Change exists to help businesses grow with clean, fast, and
        purpose-built web applications. I build every project from scratch using
        modern web technologies, no templates, no shortcuts so your business
        gets a website that is reliable, scalable, and truly yours.
      </p>
      <br>
      <p>
        With experience in Ruby on Rails, JavaScript, UI design, and technical
        SEO, I focus on one thing: delivering web solutions that generate real
        business results, not just pretty pages.
      </p>
    </div>
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
