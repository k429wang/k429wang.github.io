import React, { useState } from 'react';
import './projects.css';
import {
  watolink,
  spywatch,
  travelens,
  studycam,
  freshcheck,
  dungeonofmoss,
  personalwebsite,
  pong,
  floppyfish,
  minesweeper,
  discordbot,
  java,
  sonushalo,
  simplesync
} from '../../assets/projects_logos';

export default function Projects() {
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const isPopularSkill = (skill) => {
    if (skill === "All") return false;
    return projects.filter(project => 
      project.skills.includes(skill)
    ).length > 3;
  };

  const handleProjectClick = (url) => {
    if (url === 'scrollToTop') {
      scrollToTop();
    } else if (url) {
      window.open(url, '_blank');
    }
  };

  const projects = [
    {
      id: 1,
      name: "WATOLINK",
      url: "https://www.watolink.ca/",
      logo: watolink,
      description: "Mind-Speech Interface for NeuroTechX Student Clubs Competition 2022",
      skills: ["Python", "REST APIs", "AI", "PyQt", "Selenium", "Frontend"]
    },
    {
      id: 2,
      name: "SpyWatch",
      url: "https://devpost.com/software/spywatch",
      logo: spywatch,
      description: "Spy on conversations using a live drone video feed and the Symphonic Labs lip reading AI technology.",
      skills: ["Python", "REST APIs", "WebSockets", "FFmpeg", "UDP", "Backend"]
    },
    {
      id: 3,
      name: "TravelLens",
      url: "https://devpost.com/software/travelens",
      logo: travelens,
      description: "Eye tracking solution that performs live translations using Adhawk eye tracking glasses",
      skills: ["Python", "REST APIs", "AI", "OpenCV", "Google Cloud Vision", "Backend"]
    },
    {
      id: 4,
      name: "SimpleSync",
      url: "https://github.com/k429wang/SimpleSync",
      logo: simplesync,
      description: "An improved Android calendar app for smart group scheduling and event coordination",
      skills: ["Kotlin", "Android", "Jetpack Compose", "Supabase", "Frontend", "Backend"]
    },
    {
      id: 5,
      name: "Sonus Halo",
      logo: sonushalo,
      description: "A wearable wristband that translates audio into haptic feedback, improving accessibility for hearing-impaired users",
      skills: ["C++", "Tensorflow", "Keras", "AI"]
    },
    {
      id: 6,
      name: "Personal Website",
      url: 'scrollToTop',
      logo: personalwebsite,
      description: "My personal website portfolio, hosted on Github pages",
      skills: ["React", "JavaScript", "HTML/CSS", "AI", "Frontend"]
    },
    {
      id: 7,
      name: "GeeseSpotter",
      logo: minesweeper,
      description: "Recreation of Minesweeper in C++ (private repo for school project)",
      skills: ["C++", "Frontend"]
    },
    {
      id: 8,
      name: "Floppy Fish",
      url: "https://github.com/k429wang/Floppy-Fish",
      logo: floppyfish,
      description: "Recreation of the popular mobile game Flappy Bird",
      skills: ["Python", "Pygame", "GameDev", "Frontend"]
    },
    {
      id: 9,
      name: "Pong",
      url: "https://github.com/k429wang/Pong",
      logo: pong,
      description: "The classic game of Pong, recreated in Python using Pygame",
      skills: ["Python", "Pygame", "GameDev", "Frontend"]
    },
    {
      id: 10,
      name: "Dungeon of Moss",
      url: "https://github.com/k429wang/Dungeon-of-Moss",
      logo: dungeonofmoss,
      description: "A 2D bullet-hell video game created in Visual Basic",
      skills: ["Visual Basic", "GameDev", "Frontend"]
    },
    {
      id: 11,
      name: "Trivia Discord Bot",
      url: "https://github.com/k429wang/Trivia-Discord-Bot",
      logo: discordbot,
      description: "An interactive discord bot featuring trivia questions and quizzes",
      skills: ["Python", "REST APIs", "Backend"]
    },
    {
      id: 12,
      name: "Java Mini-Projects",
      url: "https://github.com/k429wang/Java-Projects",
      logo: java,
      description: "A collection of random Java mini-projects (and CCC submissions)",
      skills: ["Java", "Backend"]
    },
    {    
      id: 13,
      name: "StudyCam",
      url: "https://devpost.com/software/studycam",
      logo: studycam,
      description: "Track your study efficiency through your webcam using computer vision",
      skills: ["Python", "AI", "PyQt", "OpenCV", "Frontend", "Backend"]
    },
    {
      id: 14,
      name: "Fresh Check",
      url: "https://github.com/k429wang/Fresh-Check",
      logo: freshcheck,
      description: "A grocery app that scans receipts to keep track of purchased food and corresponding expiry dates to decrease food waste",
      skills: ["Javascript", "React Native", "Python", "AI", "REST APIs", "Frontend"]
    },
  ];

  const getAllSkills = () => {
    const skillCount = {};
    projects.forEach(project => {
      project.skills.forEach(skill => {
        skillCount[skill] = (skillCount[skill] || 0) + 1;
      });
    });
    
    const sortedSkills = Object.entries(skillCount)
      .filter(([, count]) => count >= 2) 
      .sort(([,a], [,b]) => b - a)
      .map(([skill]) => skill);
  
    return ["All", ...sortedSkills];
  };

  const skills = getAllSkills();

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setCurrentPage(0);
  };

  const filteredProjects = selectedSkill === 'All' 
    ? projects 
    : projects.filter(project => project.skills?.includes(selectedSkill));

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  
  const visibleProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage(current => current > 0 ? current - 1 : current);
  };

  const handleNextPage = () => {
    setCurrentPage(current => current < pageCount - 1 ? current + 1 : current);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="projects">
      <div className="title">Projects</div>
      <div className="skills-container">
        <div className="skill-category">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`skill-item ${selectedSkill === skill ? 'selected' : ''} ${isPopularSkill(skill) ? 'popular' : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="projects-container">
        {pageCount > 1 && (
            <button 
            className="nav-arrow nav-arrow-left" 
            onClick={handlePrevPage}
            >
            ←
            </button>
        )}
        
        <div className="projects-grid">
            {visibleProjects.map(project => (
            <div key={project.id} className="project-card" onClick={() => handleProjectClick(project.url)}>
                <div className="project-logo">
                  <img src={project.logo} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <div className="skills-container">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}</div>
                  <p className="project-description">{project.description}</p>
                </div>
            </div>
            ))}
        </div>

        {pageCount > 1 && (
            <button 
            className="nav-arrow nav-arrow-right" 
            onClick={handleNextPage}
            >
            →
            </button>
        )}
        </div>
    </div>
  );
}