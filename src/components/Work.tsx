import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">

          {/* Project 1 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>

                <div>
                  <h4>Healthcare Management System</h4>
                  <p>Full Stack Web Application</p>
                </div>
              </div>

              <h4>Tools and Features</h4>

              <p>
  Spring Boot, React, MySQL, JWT Authentication,
  Appointment Booking, and Digital Health Records.

  <br /><br />
<a
  href="https://github.com/yasaswinivemuru/MediConnect"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View GitHub Repository
</a>
<br /><br />
  Successfully presented the Healthcare Management
  System project to Sudha Murthy ma’am during a
  technical innovation showcase.
</p>
            </div>
		<WorkImage image="/images/healthcare.jpg" alt="Healthcare" />
         </div>

          {/* Project 2 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>

                <div>
                  <h4>Quantum Path Finder</h4>
                  <p>Quantum Logistics Optimization</p>
                </div>
              </div>

              <h4>Tools and Features</h4>

              <p>
  React, Flask, Qiskit, Python,
  Route Optimization, Fleet Planning.
  <br /><br />
<a
  href="https://github.com/yasaswinivemuru/quantum-path-finder"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View GitHub Repository
</a>
<br /><br />

  Received 5th place in the college-level
  Quantum Valley Hackathon conducted by the
  Government of Andhra Pradesh.
</p>
            </div>

            <WorkImage image="/images/quantum.jpg" alt="Quantum" />
          </div>

          {/* Project 3 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>

                <div>
                  <h4>Flashcard generator</h4>
                  <p>AI learning Assisstant</p>
                </div>
              </div>

              <h4>Tools and Features</h4>

              <p>
  AI-powered flashcard generation system that
  automatically creates study flashcards from notes,
  PDFs, and learning content for smart learning.

  <br /><br />
<a
  href="https://github.com/yasaswinivemuru/FlashCards"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View GitHub Repository
</a>
<br /><br />


  Built using modern AI integration and responsive
  frontend technologies for interactive learning.
</p>
            </div>

            <WorkImage image="/images/flashcard.jpg" alt="" />
          </div>

          {/* Project 4 */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>

                <div>
                  <h4>Portfolio Website</h4>
                  <p>Modern Developer Portfolio</p>
                </div>
              </div>

              <h4>Tools and Features</h4>

              <p>
                React, TypeScript, GSAP, Three.js,
                Responsive UI, Animations
              </p>
            </div>

            <WorkImage image="/images/portfolio.jpg" alt="Portfolio" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;