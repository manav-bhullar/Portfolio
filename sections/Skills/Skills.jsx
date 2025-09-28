import SkillList from "../../src/common/SkillList";
import styles from "./SkillsStyles.module.css"
import checkMarkDark from "../../src/assets/checkmark-dark.svg"
import checkMarkLight from "../../src/assets/checkmark-light.svg"
import { useTheme } from "../../src/common/ThemeContext"

const skillsData = [
    ["HTML", "CSS", "JavaScript", "Node", "C", "C++"],
    ["React", "Express"],
    ["Git", "Bootstrap"]
];

function Skills() {
    const { theme } = useTheme();
    const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillListContainer}>
                {skillsData.map((skillGroup, index) => (
                    <div key={index}>
                        <div className={styles.skillList}>
                            {skillGroup.map((skill, skillIndex) => (
                                <SkillList key={skillIndex} src={checkMark} skill={skill} />
                            ))}
                        </div>
                        {index < skillsData.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Skills;