import React from 'react';
import './TeamPage.css';

const teamMembers = [
  {
    name: 'Azizbek Nurmatov',
    role: 'Documentation & QA Lead',
    bio: 'Keeps our story crystal clear with concise docs and thorough QA plans.',
    photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80',
    github: 'https://github.com/johnnyrivera',
    linkedin: 'https://www.linkedin.com/in/johnnyrivera',
    email: 'mailto:johnny@example.com'
  },
  {
    name: 'Johnny',
    role: 'Frontend Engineer',
    bio: 'Design-focused engineer crafting joyful user experiences for Charleston visitors.',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80',
    github: 'https://github.com/azizbaker',
    linkedin: 'https://www.linkedin.com/in/azizbaker',
    email: 'mailto:aziz@example.com'
  },
  {
    name: 'Michael Mann',
    role: 'Backend & DevOps',
    bio: 'Builds resilient APIs and keeps our deployments smooth and secure.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    github: 'https://github.com/MichaelMann0',
    linkedin: 'https://www.linkedin.com/in/michaelmann',
    email: 'mailto:michael@example.com'
  },
  {
    name: 'Matt May',
    role: 'Data & Research',
    bio: 'Connects city datasets and community insights to power our recommendations.',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
    github: 'https://github.com/rileychen',
    linkedin: 'https://www.linkedin.com/in/rileychen',
    email: 'mailto:riley@example.com'
  }
];

const TeamPage = () => {
  return (
    <section className="team-page">
      <div className="team-hero">
        <p className="eyebrow">Contact & Team</p>
        <h2>Meet the crew behind Charleston Compass</h2>
        <p>
          We blend design, engineering, storytelling, and research to craft a travel companion
          that feels personal, welcoming, and trustworthy. Reach out — we love collaborating.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <article className="team-card" key={member.name}>
            <div className="team-photo-wrapper">
              <img src={member.photo} alt={`${member.name} headshot`} loading="lazy" />
              <span className="team-role-pill">{member.role}</span>
            </div>
            <div className="team-card-body">
              <h3>{member.name}</h3>
              <p className="team-bio">{member.bio}</p>
              <div className="team-links">
                <a href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} GitHub`}>
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`}>
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href={member.email}>
                  <i className="fas fa-envelope"></i> Email
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;

