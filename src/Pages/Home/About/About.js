import React from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import "./About.css"

const About = () => {
    return (
        <div>
            <div>
                <Typography variant="body1" sx={{fontSize:{md:"4rem", xs:"2rem"}}}>
                ABOUT ME
                </Typography>
                <Typography sx={{fontSize:{md:"7rem", xs:"2rem"}, mt:{md:"-50px", xs:"-20px"}, ml:{xs:"20px"}}} className='constact-text'>ABOUT ME</Typography>
            </div>
            <Box sx={{textAlign:"center", mt:4}}>
            <Typography sx={{fontSize:{md:"80px",xs:"60px"}, fontWeight:600}}>
            Hi, I am <span style={{color:"#0d6efd"}}>Omar Ali</span>
            </Typography>
            <Typography sx={{fontSize:{md:'30px', xs:'25px'}, px:{md:15, xs:5}, bgcolor:{sx:" #10121b"}, color:"#868686"}} >
            I have experience working with HTML, CSS as well as javascript and react js, next js, redux, and node js. I have done a few projects with all these languages. Some of these projects have backend work with node js and MongoDB. As a junior developer, I have created good quality projects.
            </Typography>
            <Box>
            <Button href="https://drive.google.com/file/d/1xNyOiSx3j_DW7fPcwl_lzrOmt8FgqTbY/view" target="blank" className='resume-btn' variant="contained" size="large" sx={{border:3, borderColor:"#0d6efd",mt:4, bgcolor:"#D5D6DA", color:"black", fontWeight:600}}>
          Download Resume
        </Button>
            </Box>
            </Box>
        </div>
    );
};

export default About;