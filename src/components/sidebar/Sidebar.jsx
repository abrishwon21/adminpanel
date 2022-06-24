import "./sidebar.scss";
//import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Kin dmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main Navigation</p>
        
           
            <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <span>Dashboard</span>
            </li>
          </Link>
          
          <div stlye={{}}> 
          <h2> Musics</h2>    
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls=""
        >
          <Typography
            style={{
              fontWeight: 10,
              
            }}
          >
            Musics Managment
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Musics</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Playlists</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Playlist Catagories</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Favorites</span>
            </li>
          </Link>
          </AccordionDetails>
       
      </Accordion>
    </div>
    <div stlye={{}}> 
          
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Geners
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Geners</span>
            </li>
          </Link>
          </AccordionDetails>
            
      </Accordion>
    </div>
    <div stlye={{}}> 
       
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Lyrics
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Lyrics</span>
            </li>
          </Link>
          </AccordionDetails>
                
      </Accordion>
    </div>
    <div stlye={{}}> 
            
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
          Artists
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All atrists</span>
            </li>
          </Link>
          </AccordionDetails>
         
      </Accordion>
    </div>
    <div stlye={{}}> 
         
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
           Albums
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Albums</span>
            </li>
          </Link>
          </AccordionDetails>
         
       
      </Accordion>
    </div>
    <div stlye={{}}> 
        
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Radio Stations
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Stations</span>
            </li>
          </Link>
          </AccordionDetails>
         
      </Accordion>
    </div>
    <div stlye={{}}> 
          <h2> kin Managment</h2>    
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Podcasts
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Podcasts</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Podcast Episods</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Podcast Catagories</span>
            </li>
          </Link>
          </AccordionDetails>
         
       
      </Accordion>
    </div>
    <div stlye={{}}> 
          
      <Accordion style={{ width: 300 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Reports
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Daily Reports</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Weekly Reports</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Monthly Reports</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Yearly Reports</span>
            </li>
          </Link>
          </AccordionDetails>
       
      </Accordion>
    </div>
          <p className="title">other</p>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>clients</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Setting</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
        
       
          
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        
      </div>
    </div>
  );
};

export default Sidebar;
