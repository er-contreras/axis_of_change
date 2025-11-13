const header_template = document.createElement("template");
header_template.innerHTML = /* html */`
  <header class="header_header">
    <div class="header_left">
      <a href="index.html"><span style="font-weight: bolder; color: #white;">Axis of<br>Change</span></a>

      <div>
        <nav>
          <div>
            <ul class="navigation-menu">
              <a href="index.html">
                <li>Home</li>
              </a>
              <a href="index.html#prices"><li>Pricing</li></a>
              <a href="index.html#about"><li>About</li></a>
              <a href="index.html#contact"><li>Contact</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="header_main">
      <a href="contact.html"><span>Contact</span></a>
      <a href="https://calendly.com/er-contreras" target="_blank">
        <span style="display: flex; gap: 1rem;">
          <img style="width: 2rem;" src="./assets/phone.png">
          BOOK A FREE CONSULTATION
        </span>
      </a>
    </div>
  </header>

  <header class="hidden_header">
    <div class="hidden_header_left">
      <a href="index.html"><span style="font-weight: bolder; color: #white;">AXIS<br>OF<br>CHANGE</span></a>
    </div>

    <div onClick="openPopup()" class="header_button">
      <div class="lines"></div>
      <div class="lines"></div>
    </div>
  </header>`;

// JavaScript logic of the component
class HeaderWrapper extends HTMLElement {
  connectedCallback() {
    const html = header_template.content.cloneNode(true);
    this.append(html);
  }
}

customElements.define("header-wrapper", HeaderWrapper);
