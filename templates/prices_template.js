const prices_template = document.createElement("template");
prices_template.innerHTML = /* InnerHTML */`
  <div id="prices" class="prices-h2">
    <h2>Pricing</h2>
    <p>Choose the project that best suits your needs.</p>
  </div>

  <div class="prices-container">
    <section class="prices-section">
      <div class="price-container">
        <div>
          <div class="price-header">
            <h2 style="color: #ffcf3f;">Landing Page</h2>
            <p>$3000MXN</p>
          </div>

          <div class="price-description">
            <ul>
              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Responsive Design</li>
              </div>

              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>SEO Optimization</li>
              </div>

              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Contact Form</li>
              </div>

              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>3 Sections</li>
              </div>
            </ul>
          </div>
        </div>

        <a class="anchor-btn" href="index.html#contact">
          <div class="contract-btn" style="background-color: #ffcf3f;">Book a demo</div>
        </a>
      </div>

      <div class="price-container">
        <div>
          <div class="price-header">
            <h2 style="color: #a600ff;">Complete Website</h2>
            <p></p>
          </div>

          <div class="price-description">
            <ul>
              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>About Us</li>
              </div>

              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Services</li>
              </div>

              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Contact</li>
              </div>

              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Blog</li>
              </div>
            </ul>
          </div>
        </div>

        <a class="anchor-btn" href="index.html#contact">
          <div class="contract-btn" style="background-color: #a600ff;">Book a demo</div>
        </a>
      </div>

      <div class="price-container">
        <div>
          <div class="price-header">
            <h2 style="color: #1e9595;">Web App</h2>
            <p></p>
          </div>

          <div class="price-description">
            <ul>
              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Custom Software</li>
              </div>

              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Reliability</li>
              </div>
              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Security</li>
              </div>
              <div class="checks">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24">
                  <path
                    d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z" />
                </svg>
                <li>Scalability</li>
              </div>
            </ul>
          </div>
        </div>

        <a class="anchor-btn" href="index.html#contact">
          <div class="contract-btn" style="background-color: #1e9595;">Book a demo</div>
        </a>
      </div>
    </section>
  </div>`;

// JavaScript logic of the component
class PricesWrapper extends HTMLElement {
  connectedCallback() {
    const html = prices_template.content.cloneNode(true);
    this.append(html);
  }
}
customElements.define("prices-wrapper", PricesWrapper);
