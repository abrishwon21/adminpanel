import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef, useEffect } from "react";
import { artistActions } from '../../Store/artist-slice'
import { useSelector, useDispatch} from 'react-redux'
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [artdata, setArtData ] = useState();
  const artNameRef = useRef();
  const artDescriptionRef = useRef();

 const dispatch = useDispatch();
 const testd = useSelector(state=>state.artist.artistList);
 useEffect(()=>{
  
  setArtData(testd);
 },[])
 const handleAddState = ()=>{
  let enteredName = artNameRef.current.value;
  let enteredArtDesc = artDescriptionRef.current.value;

  dispatch(
    artistActions.addArtist({aName: enteredName,aDesc: enteredArtDesc})
  )

  
  console.log(testd);
 }
 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              
                <div className="formInput">
                  <label>Artist Name</label>
                  <input type="text" placeholder="please enter name" ref={artNameRef}/>
                </div>
                              
                <div className="formInput">
                  <label>About Artist</label>
                  <input type="text" placeholder="please enter name" ref={artDescriptionRef} />
                </div>

             
              <button onClick={handleAddState}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
