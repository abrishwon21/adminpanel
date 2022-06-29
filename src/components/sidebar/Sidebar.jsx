import "./sidebar.scss";
//import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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
import { AiFillDashboard } from "react-icons/ai";
import { FaMusic} from "react-icons/fa";
import { RiPlayListLine,RiPlayListFill } from "react-icons/ri";
import { GrFavorite} from "react-icons/gr";
import { FiMusic,FiRadio } from "react-icons/fi";
import { BsReverseLayoutTextWindowReverse} from "react-icons/bs";
import { MdAlbum } from "react-icons/md";
import { BiPodcast } from "react-icons/bi";
//import { } from "react-icons/";
import { TbReport,TbReportMedical} from "react-icons/tb";

import {CgMediaPodcast } from "react-icons/cg";
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
            < AiFillDashboard/>  <span>Dashboard</span>
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
              <FaMusic/> <span>All Musics</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <RiPlayListLine/>
              <span>All Playlists</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <RiPlayListFill />
              <span>Playlist Catagories</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <GrFavorite />
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
              <FiMusic />
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
          aria-controls="panel1a-content" >
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
              <BsReverseLayoutTextWindowReverse />
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
        <Link to="/artist" style={{ textDecoration: "none" }}>
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
        <Link to="/album" style={{ textDecoration: "none" }}>
            <li>
              <MdAlbum />
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
              <FiRadio />
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
              <BiPodcast />
              <span>All Podcasts</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <CgMediaPodcast />
              <span>Podcast Episods</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <BiPodcast  />
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
              <TbReport/>
              <span>Daily Reports</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <TbReportMedical />
              <span>Weekly Reports</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <TbReportMedical />
              <span>Monthly Reports</span>
            </li>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }}>
            <li>
              <TbReportMedical />
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
