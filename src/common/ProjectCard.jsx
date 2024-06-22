
import PropTypes from "prop-types";

function ProjectCard({ src, link, h3 ,p}) {
    return (
        <div>
            <a href={link} target="__blank">
                <img  src={src} alt={`${h3} logo`} />
                <h3>{h3}</h3>
                <p>{p}</p>
            </a>
        </div>
    );
}

ProjectCard.propTypes = {
    src: PropTypes.string.isRequired, // Assuming src is a string URL and is required
    link: PropTypes.string.isRequired, // Assuming link is a string URL and is required
    h3: PropTypes.string.isRequired, // Assuming h3 is a string and is required
    p: PropTypes.string.isRequired, // Assuming p is a string and is required
};
export default ProjectCard;