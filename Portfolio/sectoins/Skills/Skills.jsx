import SkillList from "../../src/common/SkillList";
import styles from "./SkillsStyles.module.css"
import checkMark from "/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/checkmark-light.svg"


function Skills() {
    return (
        <section id="skills" className={styles.container} >
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMark} skill="HTML" />
                <SkillList src={checkMark} skill="CSS" />
                <SkillList src={checkMark} skill="JavaScript" />
                <SkillList src={checkMark} skill="Node" />
                <SkillList src={checkMark} skill="C" />
                <SkillList src={checkMark} skill="C++" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMark} skill="React" />
                <SkillList src={checkMark} skill="Express" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMark} skill="Git" />
                <SkillList src={checkMark} skill="Bootstrap" />
            </div>
        </section>
    )
}
export default Skills; 