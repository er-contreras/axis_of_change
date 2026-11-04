(()=>{var k=document.createElement("template");k.innerHTML=`
  <header class="header_header">
    <div class="header_left">
      <a href="index.html#">
        <span style="font-weight: bolder;">Axis of<br>Change</span>
      </a>
      <div>
        <nav>
          <div>
            <ul class="navigation-menu">
              <a href="index.html#"><li>Home</li></a>
              <a href="index.html#prices"><li>Services</li></a>
              <a href="index.html#about"><li>About</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="header_main">
      <a href="index.html#contact"><span>Contact</span></a>
      <a href="https://calendly.com/er-contreras" target="_blank">
        <span style="display: flex; gap: 1rem; align-items: center;">
          <img src="./assets/phone.png" alt="Phone icon" width="15" height="15" loading="lazy">
          BOOK A FREE CONSULTATION
        </span>
      </a>
    </div>
  </header>

  <header class="hidden_header">
    <div class="hidden_header_left">
      <a href="index.html#"><span style="font-weight: bolder;">AXIS<br>OF<br>CHANGE</span></a>
    </div>

    <div class="header_button menu-button">
      <div class="lines"></div>
      <div class="lines"></div>
    </div>
  </header>`;var m=class extends HTMLElement{connectedCallback(){let e=k.content.cloneNode(!0);this.append(e)}};customElements.define("header-wrapper",m);var x=document.createElement("template");x.innerHTML=`
  <main class="main_main">
    <div class="content-bg"></div>

    <section class="content">
      <p class="eyebrow">Digital strategy \xB7 Product architecture \xB7 Systems thinking</p>
      <h1 class="hero-title">Clarity for Complex Digital Challenges</h1>
      <p>Axis of Change helps organizations transform ambiguity into purposeful design, resilient architecture, and practical solutions that create momentum.</p>
    </section>

    <div class="svg">
      <svg width="200" height="180" viewBox="0 0 200 180" aria-hidden="true"></svg>
    </div>
  </main>
`;var f=class extends HTMLElement{connectedCallback(){this.append(x.content.cloneNode(!0)),this.renderSVG()}renderSVG(){let e=this.querySelector("svg"),t=100,n=90;e.innerHTML=`
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
  `,[{teeth:27,innerR:82,outerR:90,fill:"url(#steel-dark)",speed:45,dir:1},{teeth:30,innerR:66,outerR:66,fill:"white",speed:45,dir:1},{teeth:24,innerR:54,outerR:62,fill:"gray",speed:30,dir:-1},{teeth:16,innerR:42,outerR:50,fill:"#B02A2A",speed:30,dir:-1},{teeth:15,innerR:34,outerR:34,fill:"white",speed:20,dir:1},{teeth:15,innerR:28,outerR:28,fill:"gray",speed:20,dir:1},{teeth:15,innerR:20,outerR:20,fill:"white",speed:20,dir:1}].forEach(({teeth:o,innerR:c,outerR:s,fill:p,speed:u,dir:r})=>{let l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d",this.calculatePrecisionGearPath(t,n,o,c,s)),l.setAttribute("fill",p),l.setAttribute("filter","url(#metal-gloss)"),l.style.filter="url(#metal-gloss) drop-shadow(1.5px 1.5px 2px rgba(0,0,0,0.6))";let d=document.createElementNS("http://www.w3.org/2000/svg","animateTransform");d.setAttribute("attributeName","transform"),d.setAttribute("type","rotate"),d.setAttribute("from",`${r===1?0:360} ${t} ${n}`),d.setAttribute("to",`${r===1?360:0} ${t} ${n}`),d.setAttribute("dur",`${u}s`),d.setAttribute("repeatCount","indefinite"),l.appendChild(d),e.appendChild(l)});let i=document.createElementNS("http://www.w3.org/2000/svg","circle");i.setAttribute("cx",t),i.setAttribute("cy",n),i.setAttribute("r","12"),i.setAttribute("fill","none"),i.setAttribute("stroke","#393939"),i.setAttribute("stroke-width","5"),e.appendChild(i)}calculatePrecisionGearPath(e,t,n,a,i){let o=[],c=Math.PI*2/n,s=c*.35,p=c*.25;for(let u=0;u<n;u++){let r=u*c;o.push(`${e+Math.cos(r-s)*a},${t+Math.sin(r-s)*a}`),o.push(`${e+Math.cos(r-p)*i},${t+Math.sin(r-p)*i}`),o.push(`${e+Math.cos(r+p)*i},${t+Math.sin(r+p)*i}`),o.push(`${e+Math.cos(r+s)*a},${t+Math.sin(r+s)*a}`);let l=r+c/2;o.push(`${e+Math.cos(l-s)*a},${t+Math.sin(l-s)*a}`)}return"M"+o.join(" L")+" Z"}};customElements.define("main-wrapper",f);var C=document.createElement("template");C.innerHTML=`
  <div class="about-wrapper">
    <div id="about" class="about-section">
      <p class="section-kicker">The Axis of Change approach</p>
      <h2>Designed Around the Problem</h2>
      <div class="about-description">
        <p>
          Axis of Change helps small, medium, and large organizations turn complex
          challenges into dependable digital products and operations. From a focused
          new initiative to a mature platform requiring modernization, architecture
          guidance, or additional delivery capacity, every engagement begins with the
          problem that matters most.
        </p>
        <br>
        <p>
          Strong outcomes come from the right questions: understanding constraints,
          mapping dependencies, reducing unnecessary complexity, and creating systems
          people can operate with confidence. The result is a thoughtful balance of
          usability, maintainability, performance, and long-term adaptability.
        </p>
      </div>
    </div>
  </div>`;var g=class extends HTMLElement{connectedCallback(){let e=C.content.cloneNode(!0);this.append(e)}};customElements.define("about-wrapper",g);var S=[{title:"Discover",price:"Understand the opportunity",color:"amber",features:["Clarify goals, constraints, and priorities","Map the current experience and its friction","Identify risks, dependencies, and opportunities","Create a practical direction for the next step","Deliver a concise, actionable assessment"],cta:"Start a Conversation",link:"index.html#contact"},{title:"Design",price:"Shape the right solution",color:"coral",features:["Translate needs into clear product structure","Design intuitive journeys and interactions","Define a resilient system architecture","Balance speed, quality, and future change","Align stakeholders around a shared blueprint"],cta:"Shape a Solution",link:"index.html#contact"},{title:"Deliver",price:"Turn direction into momentum",color:"teal",features:["Build and refine high-value capabilities","Modernize systems without disrupting operations","Improve reliability, visibility, and performance","Create repeatable ways of working","Leave teams with a stronger foundation"],cta:"Move Forward",link:"index.html#contact"}],T=`
  <svg fill="#000000" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5
      l-3.1-3.1c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8
      c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2
      C19.1,8.2,19.1,7.6,18.7,7.2z"/>
  </svg>
`,v=class extends HTMLElement{connectedCallback(){this.innerHTML=this.renderPrices()}renderPrices(){return`
      <div id="prices" class="prices-h2">
        <h2>Ways to Work Together</h2>
        <p>From first principles to continuous improvement, focused support for organizations creating better digital experiences and stronger operations.</p>
      </div>

        <div class="prices-container">
          <section class="prices-section">
            ${S.map(e=>this.renderPlan(e)).join("")}
          </section>
        </div>
    `}renderPlan(e){return`
        <article class="price-container price-${e.color}">
          <div>
            <div class="price-header">
              <span class="price-index">${String(S.indexOf(e)+1).padStart(2,"0")}</span>
              <h2>${e.title}</h2>
              <p>${e.price}</p>
            </div>

            <div class="price-description">
              <ul>
                ${e.features.map(t=>this.renderFeature(t)).join("")}
              </ul>
            </div>
          </div>

          <a class="anchor-btn" href="${e.link}">
            <div class="contract-btn">
              ${e.cta}
            </article>
          </a>
        </div>
    `}renderFeature(e){return`
      <li class="checks">
        ${T}
        <div>${e}</div>
      </li>
    `}};customElements.define("pricing-wrapper",v);var L=document.createElement("template");L.innerHTML=`
  <form class="contact-form" novalidate>
    <h2>Get in touch</h2>
    <p class="form-subtitle">
      Share the challenge, opportunity, or system that needs attention, and a response will follow within 24 hours.
    </p>

    <div class="form-group">
      <label for="name">Full Name <span class="require" aria-hidden="true">*</span></label>
      <input id="name" name="name" type="text" required />
    </div>

    <div class="form-group">
      <label for="email">Email Address <span class="require" aria-hidden="true">*</span></label>
      <input id="email" name="email" type="email" required />
    </div>

    <div class="form-group">
      <label for="phone">Phone Number <span class="require" aria-hidden="true">*</span></label>
      <input id="phone" name="phone" type="tel" required />
    </div>

    <div class="form-group">
      <label for="message">Your Message <span class="require" aria-hidden="true">*</span></label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <button type="submit" class="submit-button">
      Send Message
    </button>

    <p class="form-status" hidden></p>
  </form>
`;var b=class extends HTMLElement{connectedCallback(){this.append(L.content.cloneNode(!0)),this.form=this.querySelector("form"),this.status=this.querySelector(".form-status"),this.form.addEventListener("submit",this.handleSubmit.bind(this))}async handleSubmit(e){if(e.preventDefault(),!this.form.checkValidity()){this.showStatus("Please complete all required fields.","error");return}this.setLoading(!0);try{if(!(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:this.accessKey,subject:"New Submission from Website",...Object.fromEntries(new FormData(this.form))})})).ok)throw new Error("Submission failed");this.form.reset(),this.showStatus("Message sent successfully. Axis of Change will be in touch shortly.","success")}catch(t){this.showStatus("Something went wrong. Please try again later.","error")}finally{this.setLoading(!1)}}showStatus(e,t){this.status.textContent=e,this.status.hidden=!1,this.status.dataset.type=t}setLoading(e){this.form.querySelector("button").disabled=e}get accessKey(){return this.getAttribute("access-key")}};customElements.define("contact-wrapper",b);var A={linkedin:`
<svg width="64px" height="64px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#999999" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
`,twitter:`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="#8c8c8c" aria-hidden="true">
  <g transform="scale(5.33333,5.33333)">
    <path d="M46.105 11.02c-1.551 0.687-3.219 1.145-4.979 1.362 1.789-1.062 3.166-2.756 3.812-4.758-1.674 0.981-3.529 1.702-5.502 2.082-1.576-1.67-3.824-2.706-6.314-2.706-4.783 0-8.661 3.843-8.661 8.582 0 0.671 0.079 1.324 0.226 1.958-7.196-0.361-13.579-3.782-17.849-8.974-0.75 1.269-1.172 2.754-1.172 4.322 0 2.979 1.525 5.602 3.851 7.147-1.42-0.043-2.756-0.438-3.926-1.072 0 0.026 0 0.064 0 0.101 0 4.163 2.986 7.63 6.944 8.419-0.723 0.198-1.488 0.308-2.276 0.308-0.559 0-1.104-0.063-1.632-0.158 1.102 3.402 4.299 5.889 8.087 5.963-2.964 2.298-6.697 3.674-10.756 3.674-0.701 0-1.387-0.04-2.065-0.122 3.837 2.429 8.39 3.852 13.278 3.852 15.927 0 24.641-13.079 24.641-24.426 0-0.372-0.012-0.742-0.029-1.108 1.7-1.201 3.165-2.715 4.322-4.446z"/>
  </g>
</svg>
`,facebook:`
<svg width="64px" height="64px" viewBox="-9.6 -9.6 67.20 67.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#999999"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
`};var E=document.createElement("template");E.innerHTML=`
  <footer>
    <div class="footer">
      <section class="content-2">

        <div class="content-2-lines">
          <h2>Services</h2>
          <ul class="services-list"></ul>
        </div>

        <div class="content-2-lines last-child">
          <h2>Why organizations choose Axis of Change</h2>
          <ul class="reasons-list"></ul>
        </div>

        <div class="connect-with-us">
          <h2>Share</h2>
          <div class="social-media"></div>
        </div>

      </section>
    </div>

    <div class="rights-reserved">
      <p class="fcopyright">
        <a href="#">Privacy Policy</a> |
        <a href="#">Legal Policy</a> |
        <a href="#">Careers</a> |
        <a href="#">Sitemap</a> |
        <a href="#">Referral</a> |
        <a href="#">Contact Us</a>
      </p>

      <p>
        &copy; <span class="year"></span>
        Axis of Change | Strategic Digital Engineering | All Rights Reserved
      </p>
    </div>
  </footer>
`;var w=class extends HTMLElement{connectedCallback(){this.append(E.content.cloneNode(!0)),this.renderYear(),this.renderLists(),this.renderSocialLinks()}renderYear(){this.querySelector(".year").textContent=new Date().getFullYear()}renderLists(){let e=["Product architecture","Digital experience design","Systems modernization","Workflow optimization","Deployment & operational readiness"],t=["Business-focused problem solving","Clear architectural thinking","Intentional product design","Reliable systems and workflows","Support from vision to modernization"];this.fillList(".services-list",e),this.fillList(".reasons-list",t)}fillList(e,t){let n=this.querySelector(e);t.forEach(a=>{let i=document.createElement("li");i.textContent=a,n.appendChild(i)})}renderSocialLinks(){let e="www.axisofchange.xyz",n=[{name:"LinkedIn",href:`https://www.linkedin.com/share?url=${encodeURIComponent(e)}`,icon:"linkedin"},{name:"Twitter",href:`https://twitter.com/share?url=${e}`,icon:"twitter"},{name:"Facebook",href:`https://facebook.com/share?url=${e}`,icon:"facebook"}],a=this.querySelector(".social-media");n.forEach(({name:i,href:o,icon:c})=>{let s=document.createElement("a");s.href=o,s.target="_blank",s.rel="noopener noreferrer",s.setAttribute("aria-label",i),s.innerHTML=A[c],a.appendChild(s)})}};customElements.define("footer-wrapper",w);var M=document.createElement("template");M.innerHTML=`
  <div class="popup-menu">
    <div class="top-popup-menu">
      <h2>Menu</h2>
      <h3 class="close-btn">X</h3>
    </div>

    <div class="popup-menu-options">
      <ul>
        <a class="link" href="index.html#"><li>Home</li></a>
        <a class="link" href="index.html#prices"><li>Services</li></a>
        <a class="link" href="index.html#about"><li>About</li></a>
        <a class="link" href="index.html#contact"><li style="color: #c5650f";>Contact</li></a>
        <a href="https://calendly.com/er-contreras"><li style="color: #198755";>Free Consultation</li></a>
      </ul>
    </div>
  </div>
`;var y=class extends HTMLElement{connectedCallback(){var n;this.append(M.content.cloneNode(!0));let e=this.querySelector(".close-btn");(n=document.querySelector(".menu-button"))==null||n.addEventListener("click",()=>{this.style.display="block"}),e.addEventListener("click",()=>{this.style.display="none"}),this.querySelectorAll(".link").forEach(a=>{a.addEventListener("click",()=>{this.style.display="none"})})}};customElements.define("menu-wrapper",y);})();
