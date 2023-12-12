import React, { useState } from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    console.log('component rendered.')



    return (
        <div className="card-container">
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                <div className="card-front">
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <button className="card-button" onClick={() => window.open(project.url, "_blank")}>View Site</button>
                    <button className="card-button" onClick={handleFlip}>Description</button>
                </div>
                <div className="card-back">
                    <p>{project.description}</p>
                    <button onClick={handleFlip}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
