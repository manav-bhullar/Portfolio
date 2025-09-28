import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../src/common/ProjectCard';
import underConstruction from '../../src/assets/underConstruction.png';
import { FaGamepad, FaCloudSun } from 'react-icons/fa';

const projects = [
  {
    icon: <FaGamepad size={100} />,
    link: 'https://github.com/manav-bhullar/Tic-Tac-Toe.git',
    h3: 'Tic Tac Toe',
    p: 'Game',
  },
  {
    icon: <FaCloudSun size={100} />,
    link: 'https://github.com/manav-bhullar/weather.git',
    h3: 'SunDial',
    p: 'A Weather app',
  },
  {
    icon: <img src={underConstruction} alt="Under Construction" />,
    h3: 'Under Construction',
    p: 'More projects coming soon...',
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
            icon={project.icon}
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