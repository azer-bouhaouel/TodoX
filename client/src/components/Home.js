import React from "react";

function Home() {
  return (
    <div className="home-page">
      <nav>
        <h1>TodoX</h1>
        <h3>create project</h3>
      </nav>
      <div className="main-section">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

// project card component

const ProjectCard = () => {
  return (
    <div className="project-card">
      <h3>project name</h3>
      <div className="project-status"></div>
    </div>
  );
};

export default Home;
