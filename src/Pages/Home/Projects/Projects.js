import React, { useEffect, useState } from 'react';
import "./Projects.css"
import Project from '../Project/Project';
import { Row } from 'react-bootstrap';


const Projects = () => {
    const [allProject, setAllProject] = useState([])
    useEffect(() => {
        fetch("./Projects.json")
            .then(res => res.json())
            .then(data => setAllProject(data))
    }, [])
    return (
        <div className="project-container" id="project">
            <div className="text-center pb-5 component-title">
                <h1>My all Projects</h1>
            </div>
            <div className="card-container">
                <Row xs={1} sm={2} md={3} className="g-4">
                    {allProject.map(project => <Project key={project.id}
                        project={project} />)}
                </Row>
            </div>
        </div>
    );
};

export default Projects;