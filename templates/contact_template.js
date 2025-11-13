const contact_template = document.createElement("template");
contact_template.innerHTML = /* InnerHTML */`
  <form id="contact" action="https://api.web3forms.com/submit" method="POST" id="form">
    <fieldset>
      <legend>Contact Form</legend>
      <input type="hidden" name="access_key" value="9aab968a-d5e1-42f0-8342-37153b22cffa" />
      <input type="hidden" name="subject" value="New Submission from Web3Forms" />
      <input type="hidden" name="redirect" value="https://web3forms.com/success" />
      <input type="checkbox" name="botcheck" id="" style="display: none;" />
      <div>
        <label for="name">Full Name</label><br>
        <input type="text" name="name" id="name" placeholder="John Doe" required />
        <br><br>
      </div>
      <div>
        <label for="email">Email Address</label><br>
        <input type="email" name="email" id="email" placeholder="you@company.com" required /><br><br>
      </div>
      <div>
        <label for="phone">Phone Number</label>
        <br>
        <input type="text" name="phone" id="phone" placeholder="+52 (442) 1234-567" required /><br><br>
      </div>
      <div>
        <label for="message">Your Message</label>
        <br>
        <textarea rows="5" name="message" id="message" placeholder="Your Message..." required></textarea><br><br>
      </div>

      <button type="submit"> Send Message </button>
    </fieldset>
  </form>`;

// JavaScript logic of the component
class ContactWrapper extends HTMLElement {
  connectedCallback() {
    const html = contact_template.content.cloneNode(true);
    this.append(html);
  }
}
customElements.define("contact-wrapper", ContactWrapper);
