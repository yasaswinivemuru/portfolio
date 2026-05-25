import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p className="contact-desc">
          Open to internships, collaborations,
          and exciting development opportunities.
        </p>

        <div className="contact-info">

          <div className="contact-card">
            <h3>Email</h3>

            <a href="mailto:yasaswinivemuru3@gmail.com">
              yasaswinivemuru3@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>

            <a
              href="https://github.com/yasaswinivemuru"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yasaswinivemuru
            </a>
          </div>

          <div className="contact-card">
            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/yasaswini-vemuru-728591293"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yasaswini-vemuru
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
