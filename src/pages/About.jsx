import React from 'react'

const About = () => {
  const teamMembers = [
    {
      name: "Braanflakes",
      role: "Co-Founder & Developer",
      description: "Braanflakes is a dedicated developer with a passion for creating immersive gaming experiences. With years of experience in the industry, he brings a wealth of knowledge and creativity to the table.",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
      }
    },
    {
      name: "HintOfLime",
      role: "Co-Founder & Developer",
      description: "HintOfLime is a dedicated developer with a passion for creating immersive gaming experiences. With years of experience in the industry, he brings a wealth of knowledge and creativity to the table.",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      socialLinks: {
        github: "https://github.com/partnerusername",
        linkedin: "https://linkedin.com/in/partnerusername",
        twitter: "https://twitter.com/partnerusername"
      }
    }
  ]

  return (
    <div className="about-page">
      <div className="container">
        <section className="mission-section">
          <h1>About Desync Games</h1>
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Desync Games, we're dedicated to creating immersive gaming experiences that bring people together. 
              Our goal is to build and maintain gaming communities where players can connect, compete, and create lasting friendships.
            </p>
            
            <h2>Our Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <i className="fas fa-users"></i>
                <h3>Community First</h3>
                <p>We believe in building inclusive, welcoming communities where every player has a voice.</p>
              </div>
              <div className="philosophy-item">
                <i className="fas fa-code"></i>
                <h3>Innovation</h3>
                <p>Constantly pushing boundaries to create unique gaming experiences.</p>
              </div>
              <div className="philosophy-item">
                <i className="fas fa-shield-alt"></i>
                <h3>Quality & Security</h3>
                <p>Maintaining high standards for both performance and player safety.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p className="bio">{member.description}</p>
                  
                  <div className="achievements">
                    <h4>Achievements & Experience</h4>
                    <ul>
                      {member.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="social-links">
                    {Object.entries(member.socialLinks).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-link ${platform}`}
                      >
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
