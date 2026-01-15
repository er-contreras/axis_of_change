const main_template = document.createElement("template");
main_template.innerHTML = `
  <main class="main_main">
    <div class="content-bg"></div>

    <section class="content">
      <h1 class="hero-title">
        Built to increase trust, boost sales, and move your business forward.
      </h1>
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
    const centerX = 100;
    const centerY = 90;

    svg.innerHTML = `
    <defs>
      <filter id="metal-gloss" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
        <feSpecularLighting in="blur"
          surfaceScale="3"
          specularConstant="0.7"
          specularExponent="35"
          lighting-color="#ffffff"
          result="specOut"
        >
        <fePointLight x="-40" y="-40" z="80" />
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="0.8" k4="0" />
      </filter>

      <linearGradient id="steel-dark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#777" />
        <stop offset="45%" style="stop-color:#333" />
        <stop offset="55%" style="stop-color:#444" />
        <stop offset="100%" style="stop-color:#111" />
      </linearGradient>
    </defs>
  `;

    // Geometría ajustada: Dientes más cortos (outerR apenas mayor a innerR)
    const layers = [
      { teeth: 27, innerR: 82, outerR: 90, fill: "url(#steel-dark)", speed: 45, dir: 1 },
      { teeth: 30, innerR: 66, outerR: 66, fill: "white", speed: 45, dir: 1 },
      { teeth: 24, innerR: 54, outerR: 62, fill: "gray", speed: 30, dir: -1 },
      { teeth: 16, innerR: 42, outerR: 50, fill: "#B02A2A", speed: 30, dir: -1 },
      { teeth: 15, innerR: 34, outerR: 34, fill: "white", speed: 20, dir: 1 },
      { teeth: 15, innerR: 28, outerR: 28, fill: "gray", speed: 20, dir: 1 },
      { teeth: 15, innerR: 20, outerR: 20, fill: "white", speed: 20, dir: 1 }
    ];

    layers.forEach(({ teeth, innerR, outerR, fill, speed, dir }) => {
      const gear = document.createElementNS("http://www.w3.org/2000/svg", "path");
      // Usamos la nueva lógica de dientes compactos
      gear.setAttribute("d", this.calculatePrecisionGearPath(centerX, centerY, teeth, innerR, outerR));
      gear.setAttribute("fill", fill);
      gear.setAttribute("filter", "url(#metal-gloss)");
      gear.style.filter = "url(#metal-gloss) drop-shadow(1.5px 1.5px 2px rgba(0,0,0,0.6))";

      const anim = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
      anim.setAttribute("attributeName", "transform");
      anim.setAttribute("type", "rotate");
      anim.setAttribute("from", `${dir === 1 ? 0 : 360} ${centerX} ${centerY}`);
      anim.setAttribute("to", `${dir === 1 ? 360 : 0} ${centerX} ${centerY}`);
      anim.setAttribute("dur", `${speed}s`);
      anim.setAttribute("repeatCount", "indefinite");

      gear.appendChild(anim);
      svg.appendChild(gear);
    });

    // Eje central tipo rodamiento pulido
    const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    core.setAttribute("cx", centerX); core.setAttribute("cy", centerY); core.setAttribute("r", "12");
    core.setAttribute("fill", "none"); core.setAttribute("stroke", "#393939"); core.setAttribute("stroke-width", "5");
    svg.appendChild(core);
  }

  calculatePrecisionGearPath(cx, cy, teeth, innerR, outerR) {
    let p = [];
    const step = (Math.PI * 2) / teeth;

    // Diente mucho más ancho y chato para realismo
    const baseWidth = step * 0.35;
    const topWidth = step * 0.25;

    for (let i = 0; i < teeth; i++) {
      const a = i * step;

      // Base inferior izquierda
      p.push(`${cx + Math.cos(a - baseWidth) * innerR},${cy + Math.sin(a - baseWidth) * innerR}`);
      // Punta superior izquierda
      p.push(`${cx + Math.cos(a - topWidth) * outerR},${cy + Math.sin(a - topWidth) * outerR}`);
      // Punta superior derecha
      p.push(`${cx + Math.cos(a + topWidth) * outerR},${cy + Math.sin(a + topWidth) * outerR}`);
      // Base inferior derecha
      p.push(`${cx + Math.cos(a + baseWidth) * innerR},${cy + Math.sin(a + baseWidth) * innerR}`);

      // Valle plano para que parezca cortado por CNC
      const valleyAngle = a + step / 2;
      p.push(`${cx + Math.cos(valleyAngle - baseWidth) * innerR},${cy + Math.sin(valleyAngle - baseWidth) * innerR}`);
    }
    return "M" + p.join(" L") + " Z";
  }
}

customElements.define("main-wrapper", MainWrapper);

