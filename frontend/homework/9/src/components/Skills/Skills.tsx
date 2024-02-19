import React from 'react';
import './Skills.scss';

interface Skill {
  id: number;
  skill: string;
}

interface SkillsProps {
  skills: Skill[];
}

function Skills({skills}: SkillsProps){
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
