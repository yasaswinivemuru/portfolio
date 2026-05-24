import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <div className="cert-section section-container">
      <h2>
        My <span> Global Certifications</span>
      </h2>

      <div className="cert-grid">

        {/* HackerRank */}
        <div className="cert-card">
          <img
            src="/images/hackerrank.jpg"
            alt="Hackerrank"
            className="cert-image"
          />

          <h3>Problem Solver</h3>

          <p>HackerRank</p>
        </div>

        {/* Blockchain */}
        <div className="cert-card">
          <img
            src="/images/blockchain.jpg"
            alt="Blockchain"
            className="cert-image"
          />

          <h3>Blockchain</h3>

          <p>Infosys</p>
        </div>

        {/* ServiceNow */}
        <div className="cert-card">
          <img
            src="/images/servicenow.jpg"
            alt="ServiceNow"
            className="cert-image"
          />

          <h3>ServiceNow</h3>

          <p>Micro Certification</p>
        </div>

       
      </div>
    </div>
  );
};

export default Certifications;