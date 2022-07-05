import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { AiFillSetting ,AiFillProfile,AiOutlineLogout} from "react-icons/ai";
import {  } from "react-icons/fi";
import {useSelector, useDispatch} from 'react-redux'
import {loginActions} from '../../Store/Login-slice'
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const ldispatch = useDispatch();
  const handleLogout = ()=>{
    localStorage.removeItem("islog");
    ldispatch(
        loginActions.loggedOut()
      )
  }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            
       <Accordion style={{backgroundColor:'transparent', height: '50px', zIndex:'1',}}>
        <AccordionSummary
        
          aria-controls=""
        >
          <Typography
          
          >
           <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        >
        <Link to="/track" style={{ textDecoration: "none" }} >
            <p>
              <AiFillProfile/> <span> Profile</span>
            </p>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/music" style={{ textDecoration: "none" }} >
            <p>
              <AiFillSetting/>
              <span> Setting</span>
            </p>
          </Link>
          </AccordionDetails>
          <AccordionDetails>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p onClick={handleLogout}>
              <AiOutlineLogout />
              <span> Logout</span>
            </p>
          </Link>
          </AccordionDetails>
             </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
