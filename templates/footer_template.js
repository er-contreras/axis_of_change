const footer_template = document.createElement("template");
footer_template.innerHTML = /* html */`
    <footer>
    <div class="footer">
    <div class="content-2">
      <section>
        <div class="content-2-lines">
          <h2>Services</h2>
          <div class="content-2-ul-wrapper">
            <ul>
              <li>Web development</li>
              <li>Mobile development</li>
              <li>E-commerce</li>
              <li>CMS</li>
              <li>CRM</li>
            </ul>
          </div>
        </div>
        <div class="content-2-lines last-child">
          <h2>Why Businesses Choose Axis of Change</h2>
          <div class="content-2-ul-wrapper">
            <ul>
              <li>Reliability</li>
              <li>Scalability</li>
              <li>Integration</li>
              <li>Security</li>
              <li>Cost-effective</li>
              <li>Business automation</li>
              <li>Integrable with other systems</li>
              <li>Maintainable for greater longevity</li>
            </ul>
          </div>
        </div>
      </section>
    </div>


      <div class="connect-with-us">
        <h2>Connect with Us</h2>
        <div class="social-media">
        <a href="https://www.linkedin.com/in/er-contreras/" target="_blank" class="fa fa-linkedin">
          <svg class="linkedin-icon" fill="#8c8c8c" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
            stroke="#8c8c8c">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>linkedin</title>
              <path
                d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z">
              </path>
            </g>
          </svg>
        </a>
        <a href="https://twitter.com/er_contreras_" target="_blank" class="fa fa-twitter">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
            <defs>
              <linearGradient x1="10.341" y1="8.312" x2="40.798" y2="38.769" gradientUnits="userSpaceOnUse"
                id="color-1_5MQ0gPAYYx7a_gr1">
                <stop offset="0" stop-color="#8c8c8c"></stop>
                <stop offset="1" stop-color="#8c8c8c"></stop>
              </linearGradient>
            </defs>
            <g fill="url(#color-1_5MQ0gPAYYx7a_gr1)" fill-rule="nonzero" stroke="none" stroke-width="1"
              stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
              stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
              style="mix-blend-mode: normal">
              <g transform="scale(5.33333,5.33333)">
                <path
                  d="M46.105,11.02c-1.551,0.687 -3.219,1.145 -4.979,1.362c1.789,-1.062 3.166,-2.756 3.812,-4.758c-1.674,0.981 -3.529,1.702 -5.502,2.082c-1.576,-1.67 -3.824,-2.706 -6.314,-2.706c-4.783,0 -8.661,3.843 -8.661,8.582c0,0.671 0.079,1.324 0.226,1.958c-7.196,-0.361 -13.579,-3.782 -17.849,-8.974c-0.75,1.269 -1.172,2.754 -1.172,4.322c0,2.979 1.525,5.602 3.851,7.147c-1.42,-0.043 -2.756,-0.438 -3.926,-1.072c0,0.026 0,0.064 0,0.101c0,4.163 2.986,7.63 6.944,8.419c-0.723,0.198 -1.488,0.308 -2.276,0.308c-0.559,0 -1.104,-0.063 -1.632,-0.158c1.102,3.402 4.299,5.889 8.087,5.963c-2.964,2.298 -6.697,3.674 -10.756,3.674c-0.701,0 -1.387,-0.04 -2.065,-0.122c3.837,2.429 8.39,3.852 13.278,3.852c15.927,0 24.641,-13.079 24.641,-24.426c0,-0.372 -0.012,-0.742 -0.029,-1.108c1.7,-1.201 3.165,-2.715 4.322,-4.446">
                </path>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://github.com/er-contreras" target="_blank" class="fa fa-github">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"
            style="fill:#1A1A1A;">
            <g fill="#8c8c8c" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
              stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
              font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <g transform="scale(4,4)">
                <path
                  d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z">
                </path>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100074601182991" target="_blank" class="fa fa-facebook">
          <svg fill="#8c8c8c" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" stroke="#8c8c8c">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
              stroke-width="3.072"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3 v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2 c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z">
              </path>
            </g>
          </svg>
        </a>
      </div>
      </div>
      </div>

      <div class="rights-reserved">
        <p class="fcopyright">
          <a>Privacy Policy</a>
            |
          <a>Legal Policy</a>
            |
          <a>Careers</a>
            |
          <a>Sitemap</a>
            |
          <a>Referral</a>
            |
          <a>Contact Us</a>
        </p>
        <p>Copyright © 2024 Axis of Change | All Rights Reserved</p>
      </div>
    </footer>`;

class FooterWrapper extends HTMLElement {
  connectedCallback() {
    const html = footer_template.content.cloneNode(true);
    this.append(html);
  }
}

customElements.define("footer-wrapper", FooterWrapper);
