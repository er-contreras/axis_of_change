const menu_template = document.createElement("template");
menu_template.innerHTML = /* InnerHTML */`
  <div class="popup-menu">
    <div class="top-popup-menu">
      <h2>Menu</h2>
      <h3 class="close-btn">X</h3>
    </div>

    <div class="popup-menu-options">
      <ul>
        <a class="link" href="index.html#"><li>Home</li></a>
        <a class="link" href="index.html#prices"><li>Pricing</li></a>
        <a class="link" href="index.html#about"><li>About</li></a>
        <a class="link" href="index.html#contact"><li style="color: #c5650f";>Contact</li></a>
        <a href="https://calendly.com/er-contreras"><li style="color: #198755";>Free Consultation</li></a>
      </ul>
    </div>
  </div>
`;

class MenuWrapper extends HTMLElement {
  connectedCallback() {
    this.append(menu_template.content.cloneNode(true));

    const closeBtn = this.querySelector(".close-btn");

    document.querySelector(".menu-button")?.addEventListener("click", () => {
      this.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      this.style.display = "none";
    });

    const links = this.querySelectorAll(".link");
    links.forEach(link => {
      link.addEventListener("click", () => {
        this.style.display = "none";
      });
    });
  }
}

customElements.define("menu-wrapper", MenuWrapper);
