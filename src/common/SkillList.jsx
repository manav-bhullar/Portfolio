import PropTypes from 'prop-types';


function SkillList({ src, skill }){


    return (
        <span>
            <img src={src} alt="" />
            <p>{skill}</p>
        </span>
    )
} 

SkillList.propTypes = {
    src: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired
};

export default SkillList;