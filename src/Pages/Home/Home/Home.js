import  React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import myimg2 from "../../../images/myimg2.png"
import "./Home.css"
import {  Link, NavLink, Outlet } from 'react-router-dom';
import { Button, FormControlLabel, Switch } from '@mui/material';
import { borderRadius, color } from '@mui/system';

const drawerWidth = 370;



const Home = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect( ()=>{
      let exists = localStorage.getItem('dark_Mood');
      if(exists === 'false'){
      setDark(false);

      }
      else{
      setDark(true);
      }
      console.log("useEffect", exists);
    } ,[])
    function handleClick() {
      
      localStorage.setItem('dark_Mood', !dark);
    }
    console.log('dark', dark);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
   
  
    const drawer = (
      <div  className={`${!dark ? "bar-body" : "dark-bar-body"}`}>
        <Toolbar />
        {/* <Divider />  className={click ? "item-list active" : 'item-list'}> */}
        <Box className='img-box' sx={{px:{md:"3vh",sm:"3vh", xs:"3vh"}}}>
        <img src={myimg2}  className={`${!dark ? "my-img" : "dark-my-img"}`} alt="" />
        </Box>
       
        <Divider sx={{mt:4, color: !dark ? "black" : "white"}}/>
        <List className='item-list' sx={{mt:1}}>

            <Box >
                  <li className='all-lisst'> <NavLink to="/" activeClassName="active" className={`${!dark ? "link-Item" : "dark-link-Item"}`}  >
              <ListItem button  className=" single-Item">
                  <ListItemIcon>
                  </ListItemIcon>
                  Home
                </ListItem>
              </NavLink>
              </li>
              <li className='all-lisst'> <NavLink to="project" activeClassName="active" className={`${!dark ? "link-Item" : "dark-link-Item"}`}  >
              <ListItem button  className=" single-Item">
                  <ListItemIcon>
                  </ListItemIcon>
                  Project
                </ListItem>
              </NavLink>
              </li>
                  <li className='all-lisst'> <NavLink to="/about" activeClassName="active" className={`${!dark ? "link-Item" : "dark-link-Item"}`}  >
              <ListItem button  className=" single-Item">
                  <ListItemIcon>
                  </ListItemIcon>
                  About
                </ListItem>
              </NavLink>
              </li>
                  <li className='all-lisst'> <NavLink to="/resume" activeClassName="active" className={`${!dark ? "link-Item" : "dark-link-Item"}`}  >
              <ListItem button  className=" single-Item">
                  <ListItemIcon>
                  </ListItemIcon>
                  Resume
                </ListItem>
              </NavLink>
              </li>
                  
              <li className='all-lisst'> <NavLink to="contact" activeClassName="active" className={`${!dark ? "link-Item" : "dark-link-Item"}`}  >
              <ListItem button  className=" single-Item">
                  <ListItemIcon>
                  </ListItemIcon>
                  Contact
                </ListItem>
              </NavLink>
              </li>
             
            </Box>
        
        </List>
        <Box sx={{textAlign:"center"}}>
        <Button className='side-bar-btn' href="https://drive.google.com/file/d/1xNyOiSx3j_DW7fPcwl_lzrOmt8FgqTbY/view" target="blank"  variant="contained" size="large" sx={{mt:4, px:8, bgcolor:"#0D6EFD", border:"none", color:"light", fontWeight:600}}>
          Download Resume
        </Button>
        </Box>
        <Divider sx={{mt:4, color: !dark ? "black" : "white"}}/>
        <Box sx={{mt:4, textAlign:"center"}} className={`${!dark ? "copy-right" : " dark-copy-right"}`}>
          <Typography sx={{fontSize:"4vh"}}>
          &; 2022
          </Typography>
        </Box>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;


    ////////////////////////////////////////////////////////////////////////////////////////// className={`${!dark ? "DDashboard" : "LDashboard" }`}


    return (
        <Box sx={{ display: 'flex', bgcolor: !dark ? "white" : " #10121b", color: !dark ? 'black' : "white" }}  style={{height:'100vh'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        boxShadow:"none",
        bgcolor:{md: !dark ? "white" : " #10121b", sm: !dark ? "white" : " #10121b", xs: !dark ? "white" : " #10121b" },
        // display:"flex",
        // display:{md:"flex"},
        justifyContent:{md:"flex-end"},
        alignItems:{md:"flex-end"}
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon  sx={{color:!dark ? "black" : "white"}}/>
          </IconButton>

          <Box className='toggle-box' sx={{display:"flex", pl:3, py:1, border:2, borderRadius:"10px"}}>
            <Typography sx={{color:"black"}} variant="h6" noWrap component="div" className={dark ? 'sun-icon icon-dark' : 'sun-icon icon-light'}>
            <i className="fas fa-moon"></i>
            </Typography>
            <Box>
                <FormControlLabel
                  onClick={handleClick}
                  className="toggle"
                  sx={{
                    display: 'block',
                  }}
                  control={
                    <Switch
                      checked={dark}
                      onChange={() => setDark(!dark)}
                      name="loading"
                      color="primary"
                    />
                  }
                  label=""
                />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{ 
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`} }}
      >
        <Toolbar />
       
        
        <Outlet/>

      </Box>
    </Box>
    );
};

export default Home;