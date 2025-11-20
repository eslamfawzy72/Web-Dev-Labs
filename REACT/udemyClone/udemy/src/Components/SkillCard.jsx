import React from 'react';
import '../style/SkillCard.css';

function SkillCard({ title, text, buttonText = "enroll" }) {
  return (
    <div className="skill-card">
      <div className="skill-card-img">
      
        <img src="/salesImg.png" alt={title} />
      </div>
      <div className="skill-card-body">
        <h3 className="skill-card-title">{title}</h3>
        <p className="skill-card-text">{text}</p>
        <button className="skill-card-btn">{buttonText}</button>
      </div>
    </div>
  );
}

export default SkillCard;
