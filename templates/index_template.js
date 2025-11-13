const index_template = document.createElement("template");
index_template.innerHTML = /* html */`
  <div>
    <div class="content-wrapper">
     <main class="main_main">

     <div class="content-bg"></div>

       <div style="position: relative; z-index: 1;">
         <section>
           <div class="content">
             <h1>
               Need a clean, professional page for your business? I’ll make one that fits your style and budget.
             </h1>
             <p>
               Expert in web development.
               <br>
               Help your business grow.
             </p>
           </div>
         </section>
       </div>

       <div class="svg">
         <svg width="200" height="180" xmlns="http://www.w3.org/2000/svg">
           <rect x="30" y="30" height="110" width="110" style="fill: black;" rx="5">
             <animateTransform attributeName="transform" begin="0s" dur="10s" type="rotate" from="0 85 85"
               to="360 85 85" repeatCount="indefinite" />
           </rect>

           <rect x="30" y="30" height="110" width="110" style="fill: brown;" rx="5">
             <animateTransform attributeName="transform" begin="0.5s" dur="10s" type="rotate" from="0 85 85"
               to="360 85 85" repeatCount="indefinite" />
           </rect>

           <rect x="30" y="30" height="110" width="110" style="fill: black;" rx="5">
             <animateTransform attributeName="transform" begin="1s" dur="10s" type="rotate" from="0 85 85"
               to="360 85 85" repeatCount="indefinite" />
           </rect>

           <rect x="30" y="30" height="110" width="110" style="fill: #00728c" rx="5">
             <animatetransform attributename="transform" begin="1.5s" dur="10s" type="rotate" from="0 85 85"
               to="360 85 85" repeatcount="indefinite" />
           </rect>

           <rect x="30" y="30" height="110" width="110" style="fill: black" rx="5">
             <animatetransform attributename="transform" begin="2s" dur="10s" type="rotate" from="0 85 85"
               to="360 85 85" repeatcount="indefinite" />
           </rect>

           <rect x="30" y="30" height="110" width="110" rx="100" style="fill: white" rx="5">
             <animatetransform attributename="transform" begin="2.5s" dur="10s" type="rotate" from="0 85 85"
               to="360 85 85" repeatcount="indefinite" />
           </rect>
       </div>
     </main>
  </div>
  </div>`;

// JavaScript logic of the component
class IndexWrapper extends HTMLElement {
  connectedCallback() {
    const html = index_template.content.cloneNode(true);
    this.append(html);
  }
}
customElements.define("index-wrapper", IndexWrapper);
