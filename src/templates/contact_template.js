const contact_template = document.createElement("template");
contact_template.innerHTML = `
  <form class="contact-form" novalidate>
    <h2>Get in touch</h2>
    <p class="form-subtitle">
      Tell me about your project, and I’ll get back to you within 24 hours.
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
`;

class ContactWrapper extends HTMLElement {
  connectedCallback() {
    this.append(contact_template.content.cloneNode(true));

    this.form = this.querySelector("form");
    this.status = this.querySelector(".form-status");

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (!this.form.checkValidity()) {
      this.showStatus("Please complete all required fields.", "error");
      return;
    }

    this.setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: this.accessKey,
          subject: "New Submission from Website",
          ...Object.fromEntries(new FormData(this.form))
        })
      });

      if (!response.ok) throw new Error("Submission failed");

      this.form.reset();
      this.showStatus("Message sent successfully. I will contact you shortly.", "success");
    } catch (err) {
      this.showStatus("Something went wrong. Please try again later.", "error");
    } finally {
      this.setLoading(false);
    }
  }

  showStatus(message, type) {
    this.status.textContent = message;
    this.status.hidden = false;
    this.status.dataset.type = type;
  }

  setLoading(isLoading) {
    this.form.querySelector("button").disabled = isLoading;
  }

  get accessKey() {
    return this.getAttribute("access-key");
  }
}

customElements.define("contact-wrapper", ContactWrapper);

