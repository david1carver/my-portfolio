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
      <input
        type="text"
        placeholder="Search projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="name">By Name</option>
        <option value="technology">By Technology</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default ProjectSearch;