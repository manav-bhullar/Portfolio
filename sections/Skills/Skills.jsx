import SkillList from '../../src/common/SkillList';
import styles from './SkillsStyles.module.css';

const skillsData = [
  ['HTML', 'CSS', 'JavaScript', 'Node', 'C', 'C++'],
  ['React', 'Express'],
  ['Git', 'Bootstrap'],
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillListContainer}>
        {skillsData.map((skillGroup, index) => (
          <div key={index}>
            <div className={styles.skillList}>
              {skillGroup.map((skill, skillIndex) => (
                <SkillList key={skillIndex} skill={skill} />
              ))}
            </div>
            {index < skillsData.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;