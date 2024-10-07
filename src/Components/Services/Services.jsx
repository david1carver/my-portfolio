import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = useCallback(async () => {
    try {
      // For demonstration, using a static array. In a real scenario, you'd fetch from an API.
      const demoServices = [
        { id: 1, name: 'Web Development', description: 'Custom website development using modern technologies.', value: 40 },
        { id: 2, name: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces.', value: 30 },
        { id: 3, name: 'Mobile App Development', description: 'Building responsive and fast mobile applications.', value: 30 },
      ];
      setServices(demoServices);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setError('Failed to load services. Please try again later.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const renderServiceChart = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={services}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {services.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  if (loading) return <div aria-live="polite">Loading services...</div>;
  if (error) return <div aria-live="assertive" role="alert">{error}</div>;

  return (
    <section className='services'>
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" aria-hidden="true" />
      </div>
      {renderServiceChart()}
      <div className="services-container">
        {services.map((service) => (
          <article key={service.id} className='service-item'>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;