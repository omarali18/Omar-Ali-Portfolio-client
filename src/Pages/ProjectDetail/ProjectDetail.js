import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import DetaileModal from '../Home/DetaileModal/DetaileModal';
import Header from '../Shared/Header/Header';
import "./ProjectDetail.css"

const ProjectDetail = () => {
    const { id } = useParams()
    const projectId = parseInt(id)
    console.log(projectId);
    const [allProjects, setAllProjects] = useState([])
    useEffect(() => {
        fetch("/Projects.json")
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [id])
    let aProject = {}
    useEffect(() => {
        const singleProject = allProjects?.find(project => project.id === projectId)
        console.log(singleProject);
        aProject = singleProject;
    }, [projectId, allProjects])
    // const singleProject = allProjects?.find(project => project.id === projectId)
    console.log(aProject);
    // const { name, img1, description1, description2, description3 } = aProject

    return (
        <div className="bg-danger">
            <Header />
            <div className="mt-5 mx-auto bg-info">
                <div className="detail-card ">
                    <Row xs={1} sm={1} md={1} className="g-4 ">
                        <Col >
                            <Card className="single-card">
                                {/* <Card.Img className="border" variant="top" src={img1} /> */}
                                <Card.Body>
                                    {/* <Card.Title>{name}</Card.Title> */}
                                    <Card.Text>

                                        {/* <li>{description1}</li>
                                            <li>{description2}</li>
                                            <li>{description3}</li> */}

                                    </Card.Text>
                                    {/* <div className="text-center"><Nav.Link as={HashLink} to={`/Project/detail/${id}`}><Button>Details</Button></Nav.Link></div> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <DetaileModal

            /> */}
        </div>
    );
};

export default ProjectDetail;