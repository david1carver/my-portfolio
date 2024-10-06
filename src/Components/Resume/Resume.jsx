import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Resume.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Resume = () => {
  const skillsData = useMemo(() => [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Responsive Design', level: 80 },
    { name: 'Git', level: 75 },
    { name: 'RESTful APIs', level: 70 },
  ], []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='resume'>
      <div className="title-box">
        <h1>Resume</h1>
        <img src={theme_pattern} alt="Decorative theme pattern" />
      </div>
      
      <section className="overview">
        <h2>Overview</h2>
        <p>Passionate and creative frontend developer with 2 years of experience in building responsive and user-friendly web applications. Skilled in React, JavaScript, HTML, and CSS, with a strong focus on creating intuitive user interfaces.</p>
      </section>

      <section className="career-history">
        <h2>Career History</h2>
        <div className="job">
          <h3>Frontend Developer - ABC News</h3>
          <p className="date">2021 - Present</p>
          <ul>
            <li>Developed and maintained multiple React-based web applications</li>
            <li>Collaborated with UX designers to implement responsive designs</li>
            <li>Optimized application performance, resulting in 30% faster load times</li>
          </ul>
        </div>
        <div className="job">
          <h3>Junior Web Developer - ABC StartUp</h3>
          <p className="date">2019 - 2021</p>
          <ul>
            <li>Assisted in the development of company website using HTML, CSS, and JavaScript</li>
            <li>Implemented minor features and bug fixes for existing web applications</li>
          </ul>
        </div>
        <div className="job">
          <h3>Hospital Scientist Grade 3 - Garvan Institute of Medical Research</h3>
          <p className="date">2017 - 2019</p>
          <ul>
            <li>Conducted advanced genomic research, focusing on identifying novel genetic variants associated with complex diseases</li>
            <li>Utilized cutting-edge sequencing technologies and bioinformatics tools to analyze large-scale genomic datasets</li>
            <li>Collaborated with multidisciplinary teams to design and implement research protocols for clinical studies</li>
            <li>Contributed to scientific publications and presented research findings at national conferences</li>
          </ul>
        </div>
        <div className="job">
          <h3>Hospital Scientist Grade 1 and 2 - RPA</h3>
          <p className="date">2013 - 2017</p>
           <ul>
            <li>Performed a wide range of diagnostic tests in clinical biochemistry, hematology, and microbiology</li>
            <li>Operated and maintained sophisticated laboratory equipment, ensuring accuracy and reliability of test results</li>
            <li>Participated in quality control procedures and contributed to the laboratory's accreditation process</li>
            <li>Assisted in the implementation of new testing methodologies and laboratory information systems</li>
            <li>Collaborated with medical staff to provide timely and accurate diagnostic information for patient care</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        {skillsData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillsData} aria-label="Skills Chart">
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="level" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p>Skills data is currently unavailable.</p>
        )}
      </section>

      <section className="publications">
        <h2>Publications & Notable Outputs</h2>
        <ul>
          <li>"Optimizing React Applications for Performance" - Tech Blog, 2022</li>
          <li>"Building Accessible Web Applications" - Web Dev Conference, 2021</li>
        </ul>
      </section>

      <section className="qualifications">
        <h2>Qualifications</h2>
        <ul>
          <li>Bachelor of Biomedical Science (Laboratory Medicine) - RMIT, 2013</li>
          <li>Graduate Certificate in Cyber Security - EUC, 2022</li>
          <li>Graduate Diploma in IT (Computer Science) - QUT, 2024</li>
          <li>Frontend Web Development Certification - CodeAcademy, 2020</li>
          <li>Software Engineering Certification - Coursera, 2021</li>
          <li>CCNA, Dec 2023</li>
          <li>CompTIA Security+, May 2024</li>
        </ul>
      </section>

      <div className="resume-actions">
        <Link to="/portfolio" className="back-to-portfolio">Back to Portfolio</Link>
        <button onClick={handlePrint} className="print-resume">Print Resume</button>
      </div>
    </div>
  );
};

export default Resume;