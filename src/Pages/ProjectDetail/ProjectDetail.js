import React, { useState,useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./ProjectDetail.css"

const ProjectDetail = () => {
    const [singleProject, setSingleProject] = useState({})
    const { id } = useParams()
    console.log("id is", id);
    useEffect(() => {
        fetch(`https://evening-tor-38197.herokuapp.com/aProject?id=${id}`)
            .then(res => res.json())
            .then(data => setSingleProject(data))
    }, [id])
    console.log(id);

    const { name, img1, description1, description2, description3, websitetUrl, clientUrl, serverUrl } = singleProject
    return (
        <div className="single-card-container">
        {/* <Header /> */}
        <div className="mt-1 mx-auto ">
            <div className="detail-card ">
                <Row xs={1} sm={1} md={1} className="g-4 ">
                    <Col >
                        <Card className="single-card">
                            <Card.Img className="" variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title className='text-dark'>{name}</Card.Title>
                                <Card.Text class="fs-5 text-dark">

                                    <li>{description1}</li>
                                    <li>{description2}</li>
                                    <li>{description3}</li>

                                </Card.Text>
                            </Card.Body>
                            <div className="d-flex justify-content-around pb-4 pt-4">
                                <a href={websitetUrl} target="blank"><button>Live Site</button></a>
                                <a href={clientUrl} target="blank"><button>Client Site Code</button></a>
                                {serverUrl && <a href={serverUrl} target="blank"><button>Server Site Code</button></a>}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    );
};

export default ProjectDetail;