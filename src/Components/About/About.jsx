import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/David Carver.png';

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: "50%" },
    { name: "React JS", level: "70%" },
    { name: "JavaScript", level: "60%" },
    { name: "RESTful APIs", level: "50%" }
  ]

  const achievements = [
    { number: "2", description: "YEARS OF EXPERIENCE" },
    { number: "10+", description: "PROJECTS COMPLETED" },
    { number: "3+", description: "HAPPY CLIENTS" }
  ]

  return (
    <div className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Decorative theme pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img src={profile_img} alt="David Carver" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a beginner Frontend Developer with about 2 years of professional expertise in the software development field. Throughout my short career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for software development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            {skills.map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: skill.level}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <div className="about-achievement">
              <h2>{achievement.number}</h2>
              <p>{achievement.description}</p>
            </div>
            {index < achievements.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default About