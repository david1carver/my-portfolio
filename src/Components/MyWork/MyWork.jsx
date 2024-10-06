import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import ProjectSearch from './ProjectSearch';
import WeatherInfo from './WeatherInfo';
import ChartComponent from '../Chart/ChartComponent';

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/david1carver/repos');
        const projectsData = response.data.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          topics: repo.topics,
          html_url: repo.html_url,
          language: repo.language
        }));
        setProjects(projectsData);
        setFilteredProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleSearch = (searchTerm, searchType) => {
    const filtered = projects.filter(project => {
      if (searchType === 'name') {
        return project.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchType === 'technology') {
        return project.language && project.language.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    });
    setFilteredProjects(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <ProjectSearch onSearch={handleSearch} />
      <WeatherInfo />
      <div className="mywork-container">
        {filteredProjects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <div className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Language: {project.language}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWork;