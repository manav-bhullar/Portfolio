import React from "react";
import styles from "./ProjectsStyles.module.css"
import ticTactoe from "../../src/assets/tic-tac-toe.jpeg"
import weather from "../../src/assets/weather.png"
import ProjectCard from "../../src/common/ProjectCard";

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.container}>
                <ProjectCard src={ticTactoe} link="https://github.com/manav-bhullar/Tic-Tac-Toe.git" h3="Tic Tac Toe" p="Game"/>
                <ProjectCard src={weather} link="https://github.com/manav-bhullar/weather.git" h3="SunDial" p="A Weather app"/>
            </div>
        </section>
    )
}

export default Projects;