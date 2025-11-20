import React from 'react';
import SkillCard from './SkillCard';
import '../style/Skills.css';

export default function Skills() {
  return (
    <div className="skills-section">
      {/* Flex container for header + cards */}
      <div className="skills-header-cards">
        <div className="skills-text">
          <h1>Learn essential career and life skills</h1>
          <p>
            Udemy helps you build in-demand skills fast
            and advance your career in a changing job
            market.
          </p>
        </div>

        <div className="skills-cards">
          <SkillCard
            title="CSS Skill"
            text="Learn to style web pages beautifully."
          />
          <SkillCard
            title="React Skill"
            text="Learn how to build React apps efficiently!"
          />
          <SkillCard
            title="JavaScript Skill"
            text="Master the fundamentals of JavaScript."
          />
        </div>
      </div>
    </div>
  );
}
