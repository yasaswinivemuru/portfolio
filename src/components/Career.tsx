import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Internship 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>INFO BHARATH</h5>
              </div>

              <h4>January 2025-March 2025</h4>
            </div>

            <p>
              Worked on frontend and backend web development concepts,
              responsive UI design, and modern web technologies.
            </p>
          </div>

          {/* Internship 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>UTPALA SOLUTIONS</h5>
              </div>

              <h5>June 2025</h5>
            </div>

            <p>
              Gained hands-on experience in web application development,
              team collaboration, and real-world project workflows.
            </p>
          </div>

          {/* Current Focus */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Full Stack Development</h4>
                <h5>Current Focus</h5>
              </div>

              <h3>NOW</h3>
            </div>

            <p>
              Building modern full stack applications, AI-powered solutions,
              and continuously improving problem-solving and development skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;