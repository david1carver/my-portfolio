import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${id}`);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project details:', error);
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return <div>Loading project details...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h2>Language: {project.language}</h2>
      <h2>Topics:</h2>
      <ul>
        {project.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default ProjectDetail;