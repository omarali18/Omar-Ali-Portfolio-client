import { Typography } from '@mui/material';
import  Box  from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import "./Projects.css"


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Projects = () => {
    const [allProject, setAllProject] = useState([])
    useEffect(() => {
        // fetch("/Projects.json")
        fetch("https://evening-tor-38197.herokuapp.com/project")
            .then(res => res.json())
            .then(data => setAllProject(data))
    }, [])

    // console.log(allProject);


    return (
        <Box  >
        <div>
                <Typography variant="body1" sx={{fontSize:{md:"4rem", xs:"2rem"}}}>
                PROJECTS
                </Typography>
                <Typography sx={{fontSize:{md:"7rem", xs:"2rem"}, mt:{md:"-50px", xs:"-20px"}, ml:{xs:"20px"}, mb:{xs:"10px"}}} className='constact-text'>PROJECTS</Typography>
            </div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }}>
        {allProject.map((project) => (
          <Grid item xs={4} sm={8} md={6} lg={4} key={project._id} className='grid-item'>
            
            <Box sx={{ borderRadius: 1}} >
                    <Box className="card-box" sx={{ borderRadius: 1}} >
                        <CardMedia
                        sx={{ borderRadius: 1}}
                            component="img"
                            height="250"
                            // width="340px"
                            className='img'
                            image={project.img1}
                            alt="Paella dish"
                        />
                            <Typography variant="h4"  sx={{textAlign: 'center', py:3}}>
                                {project.name}
                            </Typography>
                    </Box>
                    <Box className='detail-button'>
                        <Typography variant="h4" color="#0d6efd" sx={{textAlign: 'center' }} >
                        See details of this project
                            </Typography>
                            <NavLink
                            className="direct-link"
                            to={`/Project/${project._id}`}
                            ><Button className='detail' sx={{mt:2}}>More     Detail</Button></NavLink>
                            {/* <Button className='detail' sx={{mt:2}}>More     Detail</Button> */}
                </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

        {/* <Box sx={{ flexGrow: 1, width:{sm:"95%"}, mt:10, mx:"auto" }}>

{Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}

            <Grid container spacing={{ xs: 2, md: 3, lg:3 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }} >
            {allProject.map(project => <Project key={project.id}
                            project={project} />)}


                
            </Grid>
        </Box> */}
       
    </Box>


    );
};

export default Projects;