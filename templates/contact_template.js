const contact_template = document.createElement("template");
contact_template.innerHTML = /* InnerHTML */`
  <form id="contact" action="https://api.web3forms.com/submit" method="POST" class="contact-form">
    <input type="hidden" name="access_key" value="9aab968a-d5e1-42f0-8342-37153b22cffa" />
    <input type="hidden" name="subject" value="New Submission from Website" />
    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
    <input type="checkbox" name="botcheck" style="display: none;" />

    <h2>Get in touch</h2>
    <p class="form-subtitle">Tell me about your project, and I’ll get back to you within 24 hours.</p>

    <div class="form-group">
      <label for="name">Full Name <span style="color: red">*</span></label>
      <input type="text" name="name" id="name" placeholder="John Doe" required />
    </div>

    <div class="form-group">
      <label for="email">Email Address <span style="color: red">*</span></label>
      <input type="email" name="email" id="email" placeholder="you@company.com" required />
    </div>

    <div class="form-group">
      <label for="phone">Phone Number <span style="color: red">*</span></label>
      <input type="tel" name="phone" id="phone" placeholder="+52 (442) 123 4567" required />
    </div>

    <div class="form-group">
      <label for="message">Your Message <span style="color: red">*</span></label>
      <textarea name="message" id="message" rows="5" placeholder="Your message..." required></textarea>
    </div>

    <button type="submit" class="submit-button">Send Message</button>
  </form>
`;

class ContactWrapper extends HTMLElement {
  connectedCallback() {
    const html = contact_template.content.cloneNode(true);
    this.append(html);
  }
}
customElements.define("contact-wrapper", ContactWrapper);

