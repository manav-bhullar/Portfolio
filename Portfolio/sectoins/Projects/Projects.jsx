import React from "react";
import styles from "/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/sectoins/Projects/ProjectsStyles.module.css"
import ticTactoe from "/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/tic-tac-toe.jpeg"
import weather from 
import ProjectCard from "../../src/common/ProjectCard";

function Projects() {
    return (
        <sections id='projects' className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.container}>
                <ProjectCard ticTactoe={ticTactoe} link="https://github.com/manav-bhullar/Tic-Tac-Toe.git" h3="Tic Tac Toe"/>
            </div>
        </sections>
    )
}

export default Projects;