import React from 'react';
import { Card, Button, Col, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import DetaileModal from '../DetaileModal/DetaileModal';
import "./Project.css"

const Project = ({ project }) => {
    const { name, img1, description1, description2, description3, id } = project
    return (
        <div>
            <Col>
                <Card className="single-card">
                    <Card.Img className="border" variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>

                            <li>{description1}</li>
                            <li>{description2}</li>
                            <li>{description3}</li>

                        </Card.Text>
                        <div className="text-center"><Nav.Link as={HashLink} to={`/Project/detail/${id}`}><Button>Details</Button></Nav.Link></div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;