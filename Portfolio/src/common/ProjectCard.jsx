import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ ticTactoe,link, h3}) {
    return (
        <div>
            <a href={link} target="__blank">
                    <img  src={ticTactoe} alt={`${h3} logo`}  />
                    <h3>{h3}</h3>
                    <p>Game</p>
                </a>
        </div>
    )

}

ProjectCard.propTypes = {
    ticTactoe: PropTypes.string.isRequired, // Assuming ticTactoe is a string URL and is required
    link: PropTypes.string.isRequired, // Assuming link is a string URL and is required
    h3: PropTypes.string.isRequired, // Assuming h3 is a string and is required
};
export default ProjectCard;