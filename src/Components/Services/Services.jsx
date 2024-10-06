import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import Services_Data from '../../assets/services_data';

const Services = () => {
  const [services, setServices] = useState(Services_Data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setServices(Services_Data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  const renderServiceChart = () => {
    const data = services.map(service => ({ name: service.s_name, value: 1 }));
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name }) => name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  if (loading) return <div>Loading services...</div>;

  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Decorative theme pattern" />
      </div>
      {renderServiceChart()}
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
              <p>Read More</p>
              <img src={arrow_icon} alt="Read more icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;