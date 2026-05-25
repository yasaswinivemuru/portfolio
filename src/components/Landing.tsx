import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* Left Content */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>

            <h1 className="main-title">
              YASASWINI
              <br />

              <span className="title-line">
                FULL STACK
              </span>

              <br />

              <span className="title-line">
                DEVELOPER
              </span>
            </h1>
          </div>

          {/* Right Content */}
          <div className="landing-info">
            <h3>A Creative</h3>

            <p>
              AI & ServiceNow Enthusiast | DSA Learner
            </p>

            {/* Resume Button */}
            <a href="/resume.pdf" download className="resume-btn">
              Download Resume
            </a>

            {/* Social Links */}
            <div className="hero-socials">

              <a
                href="https://github.com/yasaswinivemuru3"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/yasaswini-vemuru-728591293/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;