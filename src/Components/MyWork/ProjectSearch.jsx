import React, { useState } from 'react';

const ProjectSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <form onSubmit={handleSubmit} className="project-search">
      <label htmlFor="search-input">Search projects:</label>
      <input
        id="search-input"
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search projects"
      />
      <label htmlFor="search-type">Search by:</label>
      <select
        id="search-type"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        aria-label="Search type"
      >
        <option value="name">Name</option>
        <option value="technology">Technology</option>
      </select>
      <button type="submit" aria-label="Submit search">Search</button>
    </form>
  );
};

export default ProjectSearch;