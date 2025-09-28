import styles from "./ProjectsStyles.module.css";
import ticTacToe from "../../src/assets/tic-tac-toe.jpeg";
import weather from "../../src/assets/weather.png";
import ProjectCard from "../../src/common/ProjectCard";
import underConstruction from "../../src/assets/underConstruction.png";

const projects = [
  {
    src: ticTacToe,
    link: "https://github.com/manav-bhullar/Tic-Tac-Toe.git",
    h3: "Tic Tac Toe",
    p: "Game",
  },
  {
    src: weather,
    link: "https://github.com/manav-bhullar/weather.git",
    h3: "SunDial",
    p: "A Weather app",
  },
  {
    src: underConstruction,
    h3: "Under Construction",
    p: "More projects coming soon...",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;