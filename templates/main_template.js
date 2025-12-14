const main_template = document.createElement("template");
main_template.innerHTML = `
  <main class="main_main">
    <div class="content-bg"></div>

    <section class="content">
      <h1>I create custom websites and applications built to increase trust, boost sales, and move your business forward.</h1>
      <p>Practical, secure, and built for growth.</p>
    </section>

    <div class="svg">
      <svg width="200" height="180" viewBox="0 0 200 180"></svg>
    </div>
  </main>
`;

class MainWrapper extends HTMLElement {
  connectedCallback() {
    this.append(main_template.content.cloneNode(true));
    this.renderSVG();
  }

  renderSVG() {
    const svg = this.querySelector("svg");

    const layers = [
      { color: "#bc0000", delay: 0 },
      { color: "#00690e", delay: 0.5 },
      { color: "#bc0000", delay: 1 },
      { color: "#00690e", delay: 1.5 },
      { color: "#00690e", delay: 2 },
      { color: "#ffffff", delay: 2.5, radius: 100 },
    ];

    layers.forEach(({ color, delay, radius = 5 }) => {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

      rect.setAttribute("x", 30);
      rect.setAttribute("y", 30);
      rect.setAttribute("width", 110);
      rect.setAttribute("height", 110);
      rect.setAttribute("rx", radius);
      rect.setAttribute("fill", color);

      const animate = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "animateTransform"
      );

      animate.setAttribute("attributeName", "transform");
      animate.setAttribute("type", "rotate");
      animate.setAttribute("from", "0 85 85");
      animate.setAttribute("to", "360 85 85");
      animate.setAttribute("dur", "10s");
      animate.setAttribute("begin", `${delay}s`);
      animate.setAttribute("repeatCount", "indefinite");

      rect.appendChild(animate);
      svg.appendChild(rect);
    });
  }
}

customElements.define("main-wrapper", MainWrapper);

