import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box sx={{textAlign:"center"}}>
            <Typography sx={{mt:{md:40, xs:30}, color:"#0d6efd", fontSize:{xs:36, md:50}, mb:5}}>
                This Page not found !
            </Typography>
            <Link to="/" style={{textDecoration:"none"}}><Button sx={{bgcolor:"#70a3f0", color:"black",px:4, fontWeight: 'bold'}}>Go to Home</Button></Link>
        </Box>
    );
};

export default NotFound;