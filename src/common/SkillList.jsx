import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

function SkillList({ skill }) {
  return (
    <span>
      <FaCheckCircle />
      <p>{skill}</p>
    </span>
  );
}

SkillList.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillList;