import { Button, Typography } from '@mui/material';
import Particles from "react-tsparticles";
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import "./InHome.css"

const InHome = () => {
  


    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      }; 

    return (
        <div className='home-in-compo' >
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 800,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "rgb(195, 195, 195)",
          },
          links: {
            color: "",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "top",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 8,
          },
        },
        detectRetina: true,
      }}
    />
    {/* , color: !dark ? "black" : "white" */}
            <Box  sx={{textAlign:"center", mt:{md:"18vh", xs:"4vh"}, display:"flex", flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
            <Typography sx={{fontSize:{md:"80px",xs:"60px"}, fontWeight:600 }} >
            Hi, I am <span style={{color:"#0d6efd"}}>Omar Ali</span>
            </Typography>
            <Typography sx={{fontSize:'30px', px:{md:15, xs:5}, color:"#868686"}} >
            I am a full stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
            </Typography>
            <Box className="icon" sx={{display:"flex", mt:3}}>
                <a href="https://www.facebook.com/30OmarAli/" target="blank" className='icon-link'>
                    <Box className='all-icon' sx={{border:3, borderColor:"#b2c1d4", borderRadius:"50%",fontSize:"30px", width:'70px', height:"70px", textAlign:"center",display:"flex", justifyContent: 'center',alignItems: 'center'}}>
                    <i className="fab fa-facebook-f"></i>
                    </Box>
                </a>
                <a href="https://www.linkedin.com/in/omarali18/" target="blank" className='icon-link'>
                    <Box className='all-icon' sx={{border:3, borderColor:"#b2c1d4", mx:2, borderRadius:"50%",fontSize:"30px", width:'70px', height:"70px", textAlign:"center",display:"flex", justifyContent: 'center',alignItems: 'center'}}>
                    <i className="fab fa-linkedin-in"></i>
                    </Box>
                </a>
                <a href="https://github.com/omarali18" target="blank" className='icon-link'>
                    <Box className='all-icon' sx={{border:3, borderColor:"#b2c1d4", borderRadius:"50%",fontSize:"30px", width:'70px', height:"70px",textAlign:"center",display:"flex", justifyContent: 'center',alignItems: 'center'}}>
                    <i className="fab fa-github"></i>
                    </Box>
                </a>
            </Box>
            <Box >
            <Button href="https://drive.google.com/file/d/1xNyOiSx3j_DW7fPcwl_lzrOmt8FgqTbY/view" target="blank" className='resume-btn' variant="contained" size="large" sx={{border:3, borderColor:"#0d6efd",mt:4, bgcolor:"#D5D6DA", color:"black", fontWeight:600}}>
          Download Resume
        </Button>
            </Box>
        </Box>
        </div>
    );
};

export default InHome;