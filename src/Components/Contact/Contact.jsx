import {
    ArrowRight,
} from "lucide-react";

import { useState } from "react";
import "./Contact.css";
import SectionHeading from '../SectionHeading/SectionHeading'


function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

   
function handleSubmit(event) {
  event.preventDefault();

  const subject = encodeURIComponent(
    `Portfolio inquiry from ${form.name}`
  );

  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  );

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=fahad.ansari.webdev@gmail.com` +
    `&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank", "noopener,noreferrer");
}


    return (
        <section className="section-wrap section-space contact-section" id="contact">
            <div className="contact-copy">
                <SectionHeading
                    eyebrow="LET'S CONNECT"
                    title="Have a project in mind?"
                    description="I'm open to discussing frontend opportunities, collaborations, and interesting projects."
                />

                <a
                    className="contact-detail"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=fahad.ansari.webdev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    fahad.ansari.webdev@gmail.com
                </a>

                <a className="contact-detail" href="tel:8765440445">
                    +91 87654 40445
                </a>
                <p className="contact-note">Have an idea? Let's make it happen.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Your name
                    <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Enter your name"
                    />
                </label>
                <label>
                    Your email
                    <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                    />
                </label>
                <label>
                    Your message
                    <textarea
                        required
                        rows="4"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell me about your project..."
                    />
                </label>
                <button className="button button-primary" type="submit">
                    Send a Message <ArrowRight size={17} />
                </button>
                <p className="form-note">
                    This opens your email application; it doesn't send directly from the website.
                </p>
            </form>
        </section>
    );
}

export default Contact