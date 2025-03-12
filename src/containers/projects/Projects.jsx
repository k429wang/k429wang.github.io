import React, { useState } from 'react';
import './projects.css';

const skills = [
  { name: 'All', count: 0 },
  { name: 'JavaScript', count: 0 },
  { name: 'React', count: 0 },
  { name: 'Node.js', count: 0 },
  { name: 'MongoDB', count: 0 },
  // Add more skills here
];

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A web application built with React and Node.js.',
    skills: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A backend API using Node.js and MongoDB.',
    skills: ['Node.js', 'MongoDB'],
  },
  // Add more projects here
];

export default function Projects() {
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Update skill counts based on projects
  const updateSkillCounts = () => {
    skills.forEach((skill) => {
      if (skill.name !== 'All') {
        skill.count = projects.filter((project) => project.skills.includes(skill.name)).length;
      }
    });
    skills.sort((a, b) => b.count - a.count);
  };

  // Filter projects based on selected skill
  const filterProjects = (skill) => {
    setSelectedSkill(skill);
    if (skill === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.skills.includes(skill)));
    }
  };

  updateSkillCounts();

  return <div className="projects">
    <div classname="title">Projects</div>
    <div className="skills-bar">
    {skills.map((skill) => (
        <button
        key={skill.name}
        className={selectedSkill === skill.name ? 'selected' : ''}
        onClick={() => filterProjects(skill.name)}
        >
        {skill.name} ({skill.count})
        </button>
    ))}
    </div>
    <div className="projects-grid">
    {filteredProjects.map((project) => (
        <div key={project.id} className="project-box">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-skills">
            {project.skills.map((skill) => (
            <span key={skill}>{skill}</span>
            ))}
        </div>
        </div>
    ))}
    </div>
    </div>
}
