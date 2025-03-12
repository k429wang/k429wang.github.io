import React from 'react';
import './experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge'

const experiences = [
    {
      date: 'Jan 2025 - Present',
      title: 'Software Developer Intern',
      company: 'Workleap',
      skills: ["Ruby on Rails", "Ember.js", "PostgreSQL"],
    },
    {
      date: 'Jan 2024 - Apr 2024',
      title: 'Software Developer Associate',
      company: 'Senstar',
      skills: [".NET", "C#", "SQL", "DevExpress", "WinForms", "NUnit"],
    },
    {
      date: 'May 2023 - Aug 2023',
      title: 'Software Engineer Intern',
      company: 'Titanium Agency',
      skills: [".NET", "C#", "Python", "SQL", "GCP"],
    },
    {
      date: 'Sep 2022 - Dec 2022',
      title: 'Software Developer Intern',
      company: 'Miovision',
      skills: ["SQL", "AWS",  "C#", "Ruby on Rails", "REST APIs"],
    },
    {
      date: 'May 2022 - Aug 2022',
      title: 'Software Engineer (Crypto)',
      company: 'Opal',
      skills: ["MongoDB", "Postman", "REST APIs"],
    },
    {
      date: 'Jan 2022 - Apr 2022',
      title: 'Web Developer',
      company: 'U+ Education',
      skills: ["React", "Python", "SQL", "REST APIs"],
    },
  ];

export default function Experience() {
  return <div className="experience">
      <div className="title">Experience</div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={experience.date}
            dateClassName="date"
            iconStyle={{ background: "white", border: '2px solid white' }}
          >
            <div className="title-and-company">
              <h3 className="job-title">{experience.title}</h3>
              <h3 className="company-name">@ {experience.company}</h3>
            </div>
            <div className="skills">
              {experience.skills.map((item) => (
                <div key={item} className="item">
                  {item}
                </div>
              ))}
            </div>
            </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>;
}
