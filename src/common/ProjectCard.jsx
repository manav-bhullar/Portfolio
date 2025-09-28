import PropTypes from "prop-types";

function ProjectCard({ src, link, h3, p }) {
    const projectContent = (
        <>
            <img src={src} alt={`${h3} logo`} />
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
    src: PropTypes.string.isRequired,
    link: PropTypes.string,
    h3: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
};
export default ProjectCard;