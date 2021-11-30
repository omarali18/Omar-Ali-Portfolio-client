import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import "./Project.css"

const Project = ({ project }) => {
    console.log(project);
    const { name, img1, description1, description2, description3 } = project
    return (
        <div>
            <Col>
                <Card className="single-card">
                    <Card.Img className="border" variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>{description1}</li>
                                <li>{description2}</li>
                                <li>{description3}</li>
                            </ul>
                        </Card.Text>
                        <div className="text-center"><Button>Details</Button></div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;