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
      <svg width="200" height="180" viewBox="0 0 200 180" aria-hidden="true"></svg>
    </div>
  </main>
`;

class MainWrapper extends HTMLElement {
  connectedCallback() {
    this.append(main_template.content.cloneNode(true));
    // Defer SVG rendering to improve initial page load
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => this.renderSVG(), { timeout: 2000 });
    } else {
      setTimeout(() => this.renderSVG(), 100);
    }
  }

  renderSVG() {
    const svg = this.querySelector("svg");
    const centerX = 100;
    const centerY = 90;

    // Simplified SVG with fewer gears and optimized rendering
    svg.innerHTML = `
    <defs>
      <filter id="metal-gloss" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" result="blur" />
        <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.7" specularExponent="35" lighting-color="#ffffff" result="specOut">
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

    // Add animations only once per component instance
    if (!this.animationsAdded) {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes gear-rotate-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gear-rotate-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `;
      document.head.appendChild(style);
      this.animationsAdded = true;
    }

    // Reduced number of gears from 7 to 4 for better performance
    const layers = [
      { teeth: 24, innerR: 82, outerR: 90, fill: "url(#steel-dark)", speed: 45, dir: 1 },
      { teeth: 18, innerR: 54, outerR: 62, fill: "gray", speed: 30, dir: -1 },
      { teeth: 14, innerR: 34, outerR: 42, fill: "#B02A2A", speed: 25, dir: 1 },
      { teeth: 12, innerR: 20, outerR: 28, fill: "white", speed: 20, dir: -1 }
    ];

    layers.forEach(({ teeth, innerR, outerR, fill, speed, dir }) => {
      const gear = document.createElementNS("http://www.w3.org/2000/svg", "path");
      gear.setAttribute("d", this.calculateGearPath(centerX, centerY, teeth, innerR, outerR));
      gear.setAttribute("fill", fill);
      gear.setAttribute("filter", "url(#metal-gloss)");

      gear.style.transformOrigin = `${centerX}px ${centerY}px`;
      gear.style.animation = `gear-rotate-${dir === 1 ? 'cw' : 'ccw'} ${speed}s linear infinite`;
      gear.style.filter = "url(#metal-gloss) drop-shadow(1.5px 1.5px 2px rgba(0,0,0,0.6))";

      svg.appendChild(gear);
    });

    // Central core
    const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    core.setAttribute("cx", centerX);
    core.setAttribute("cy", centerY);
    core.setAttribute("r", "12");
    core.setAttribute("fill", "none");
    core.setAttribute("stroke", "#393939");
    core.setAttribute("stroke-width", "5");
    svg.appendChild(core);
  }

  calculateGearPath(cx, cy, teeth, innerR, outerR) {
    const points = [];
    const step = (Math.PI * 2) / teeth;
    const baseWidth = step * 0.35;
    const topWidth = step * 0.25;

    for (let i = 0; i < teeth; i++) {
      const a = i * step;
      
      // Simplified tooth geometry
      points.push(`${cx + Math.cos(a - baseWidth) * innerR},${cy + Math.sin(a - baseWidth) * innerR}`);
      points.push(`${cx + Math.cos(a - topWidth) * outerR},${cy + Math.sin(a - topWidth) * outerR}`);
      points.push(`${cx + Math.cos(a + topWidth) * outerR},${cy + Math.sin(a + topWidth) * outerR}`);
      points.push(`${cx + Math.cos(a + baseWidth) * innerR},${cy + Math.sin(a + baseWidth) * innerR}`);

      const valleyAngle = a + step / 2;
      points.push(`${cx + Math.cos(valleyAngle - baseWidth) * innerR},${cy + Math.sin(valleyAngle - baseWidth) * innerR}`);
    }
    
    return "M" + points.join(" L") + " Z";
  }
}

customElements.define("main-wrapper", MainWrapper);

