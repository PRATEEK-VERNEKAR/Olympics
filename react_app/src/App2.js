import * as React from 'react';
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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MiniHeader from "./Covers/MiniHeader";
import Header from "./Covers/Header";
import Footer from "./Covers/Footer";
import Noticebar from "./Covers/Noticebar";
import SignerType from "./Register/SignerType";
import History from "./Statistics/History"
import Post from "./SocialMedia/Post";
import Favourites from "./SocialMedia/Favourites";
import Quiz from './QuizLayout/Quiz';
import Stats from './Statistics/Stats'
import HomeApp from "./Home/HomeApp";
import FanSignin from "./Register/FanSignin";
import OrgSignin from "./Register/OrgSignin";
import Login from "./Register/Login";
import SportsLayout from "./Sports/SportsLayout";
import SportsArticle from "./Sports/SportsArticle";
import CountriesLayout from "./Countries/CountriesLayout";
import {motion,AnimatePresence} from 'framer-motion';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Post', 'Stats', 'Login', 'Signin'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Quiz', 'Country', 'Sports'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
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
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className="mainBody">
            <BrowserRouter>
            <AnimatePresence mode="exit">
                <Noticebar/>
                <MiniHeader />
                <Header handleDrawerToggle={handleDrawerToggle}></Header>
                
                <div
                className="md:mx-24 bg-rose-100">
                    <Routes>
                        <Route exact path="/" element={<HomeApp />}></Route>
                        <Route exact path="/orgsignin" element={<OrgSignin />}></Route>
                        <Route exact path="/fansignin" element={<FanSignin />}></Route>
                        <Route exact path="/signertype" element={<SignerType />}></Route>
                        <Route exact path="/login" element={<Login />}></Route>
                        <Route exact path="/history" element={<History />}></Route>
                        <Route exact path="/post" element={<Post />}></Route>
                        <Route exact path='/favourites' element={<Favourites/>}></Route>
                        <Route exact path='/quiz' element={<Quiz/>}></Route>
                        <Route exact path="/stats" element={<Stats />}></Route>
                        <Route exact path="/sports" element={<SportsLayout />}></Route>
                        <Route exact path="/sportarticle" element={<SportsArticle />}></Route>
                        <Route exact path="/countries" element={<CountriesLayout />}></Route>
                    </Routes>
                </div>
                <Footer />
            </AnimatePresence>
            </BrowserRouter>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;