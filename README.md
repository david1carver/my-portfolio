<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# my-portfolio
>>>>>>> c91653c0e9426b7b7129eb9838f2c68a7364d8ee
# React + Vite
My Portfolio - David Carver

Welcome to my personal portfolio website! This website showcases my skills as a full-stack developer with a focus on frontend development using React. It dynamically displays my projects, resume, and other relevant details using data fetched from external APIs.
Table of Contents

    Overview
    Technologies Used
    Features
    Setup
    API Integration
    Folder Structure
    Routing Structure
    Contributions
    License

Overview

This portfolio website serves as a dynamic showcase of my work. It features several sections, including my resume, projects, and contact information. The project is built using React and Vite, with data fetched from external APIs such as GitHub. The website is fully responsive, ensuring it works well on both desktop and mobile devices.

You can view the live version of this portfolio here: David Carver's Portfolio (Link to be added)
Technologies Used

    React: A JavaScript library for building interactive user interfaces.
    Vite: A fast and modern build tool for front-end development.
    Axios: A promise-based HTTP client for making API requests.
    React Router: Client-side routing for navigating between pages.
    CSS Modules: For scoped and modular component-based styling.
    HTML5 Geolocation API: Used in certain features like the search functionality.

Features

    Dynamic Content: Projects and resume details are fetched from external APIs (e.g., GitHub).
    Search Functionality: A search bar allows users to filter projects dynamically.
    Responsive Design: Works across desktop and mobile devices with a consistent look and feel.
    Single Page Application (SPA): React Router is used to navigate between different sections without reloading the page.
    Geolocation API: The HTML5 Geolocation API is used for certain search features.
    Navigation Menu: A responsive navigation menu for easy navigation across the site.

Setup
Requirements

    Node.js (v14 or higher)
    npm or yarn

Installation and Local Development

To set up the project locally, follow these steps:

    Clone the Repository:

    bash

git clone https://github.com/david1carver/my-portfolio.git

Navigate to the Project Directory:

bash

cd my-portfolio

Install Dependencies:

bash

npm install

Start the Development Server:

bash

npm run dev

Access the Application: Open your browser and go to:

arduino

    http://localhost:5173/

Build for Production

To create an optimized production build, run:

bash

npm run build

This will create the build in the dist folder, ready for deployment.
API Integration

This portfolio uses Axios to fetch data from external APIs, making the site dynamic and interactive.
1. GitHub API

    The portfolio page fetches repositories from the GitHub API, which are displayed dynamically under the "Projects" section.

Example of Data Fetching with Axios:

In src/services/api.js, we define the function for fetching GitHub repositories:

javascript

import axios from 'axios';

const API_BASE_URL = "https://api.github.com";

export const fetchRepositories = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories", error);
    return [];
  }
};

2. Search Feature

    The search functionality allows users to filter and search through projects using criteria such as project name or type.

Folder Structure

Here is a basic folder structure for the project:

arduino

my-portfolio/
│
├── public/
│   ├── vite.svg
│   ├── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── David Carver.png
│   │   ├── project icons, SVGs, etc.
│   ├── Components/
│   │   ├── About/
│   │   ├── Chart/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── MyWork/
│   │   ├── Navbar/
│   │   ├── Resume/
│   │   ├── Services/
│   │   └── Portfolio/
│   ├── Services/
│   │   └── api.js (API calls using Axios)
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

Routing Structure

The app uses React Router for routing between different sections of the website. Here's the routing structure:
Page	Route	Description
Home	/	The homepage with a hero image and welcome text.
About	/about	Information about who you are.
Resume	/resume	Displays resume, skills, and career history.
Portfolio	/portfolio	Shows your projects fetched from an external API.
Project Detail	/portfolio/:id	Displays details for individual projects.
Example of Routing Setup:

javascript

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import PortfolioDetail from './Components/Portfolio/PortfolioDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:id" component={PortfolioDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the issues page for current issues or feature requests.

To contribute:

    Fork the repository.
    Create your feature branch:

    bash

git checkout -b feature/your-feature

Commit your changes:

bash

git commit -m "Add your feature"

Push to the branch:

bash

    git push origin feature/your-feature

    Open a Pull Request.

License

This project is open-source and available under the MIT License.