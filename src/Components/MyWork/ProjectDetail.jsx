import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${id}`);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project details:', error);
        setError('Failed to load project details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return <div className="loading-spinner">Loading project details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  const languageData = [{ name: project.language, value: 1 }];

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h2>Language: {project.language}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={languageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <h2>Topics:</h2>
      <ul>
        {project.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <Link to="/portfolio">Back to Portfolio</Link>
    </div>
  );
};

export default ProjectDetail;