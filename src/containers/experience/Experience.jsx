import React from 'react';
import './experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
    {
      date: 'Sep 2025 - Present',
      title: 'Software Developer Co-op',
      company: 'Vidyard',
      skills: ["Ruby on Rails", "Vue.js", "Node.js", "MySQL", "RSpec", "GraphQL", "Stripe"],
    },
    {
      date: 'Jan 2025 - Apr 2025',
      title: 'Software Developer Intern',
      company: 'Workleap',
      skills: ["Ruby on Rails", "Ember.js", "PostgreSQL", "RSpec", "Mixpanel", "Sentry", "Honeycomb", "OpenTelemetry"],
    },
    {
      date: 'Jan 2024 - Apr 2024',
      title: 'Software Developer Associate',
      company: 'Senstar',
      skills: [ "C#", ".NET", "SQL", "DevExpress", "WinForms", "NUnit"],
    },
    {
      date: 'May 2023 - Aug 2023',
      title: 'Software Engineer Intern',
      company: 'Titanium Agency',
      skills: ["Python",  "C#", ".NET", "Razor", "SQL", "GCP", "JavaScript", "jQuery", "HTML/CSS"],
    },
    {
      date: 'Sep 2022 - Dec 2022',
      title: 'Software Developer Intern',
      company: 'Miovision',
      skills: ["SQL", "AWS S3",  "C#", "Ruby on Rails", "REST APIs"],
    },
    {
      date: 'May 2022 - Aug 2022',
      title: 'Software Engineer (Crypto)',
      company: 'Opal',
      skills: ["React", "MongoDB", "Postman", "REST APIs"],
    },
    {
      date: 'Jan 2022 - Apr 2022',
      title: 'Web Developer',
      company: 'U+ Education',
      skills: ["React", "Python", "SQL", "REST APIs", "HTML/CSS"],
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
              <h3 className="job-title">{experience.title} @ <i>{experience.company}</i></h3>
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
