import PropTypes from 'prop-types';

function ProjectCard({ icon, link, h3, p }) {
  const projectContent = (
    <>
      {icon}
      <h3>{h3}</h3>
      <p>{p}</p>
    </>
  );

  return (
    <div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {projectContent}
        </a>
      ) : (
        <>{projectContent}</>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  icon: PropTypes.element.isRequired,
  link: PropTypes.string,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;