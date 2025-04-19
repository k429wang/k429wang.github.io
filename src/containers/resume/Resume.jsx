import React from 'react';
import './resume.css'
import resumepdf from '../../assets/resume.pdf'

export default function Resume() {
  return (
    <div className='resume'>
      <div className="title">Resume</div>
      <object
        className="resume-doc"
        data={resumepdf}
        type="application/pdf"
        width="100%"
        height="800px"
      >
        <p>Your browser does not support PDFs. 
          <a href={resumepdf}>Click here to download the PDF</a>
        </p>
      </object>
      <div className='download'>
        <a href={resumepdf} target='_blank' download='Kai_Wang_Resume'>
          Download
        </a>
      </div>
    </div>
  );
}