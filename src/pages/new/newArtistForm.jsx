import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef, useEffect } from "react";
import { artistActions } from '../../Store/artist-slice'
import { useSelector, useDispatch} from 'react-redux'
import Axios from 'axios'
import { BASE_URL } from "../../env";

const NewArtistForm = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [artdata, setArtData ] = useState();
  const artNameRef = useRef();
  const artDescriptionRef = useRef();

 const dispatch = useDispatch();
 const testd = useSelector(state=>state.artist.artistList);
 useEffect(()=>{
  
  setArtData(testd);
 },[])


 const onSubmitHandler = async (e) => {
  const endpt = BASE_URL + "/artist/";
  const formData = new FormData();
  let enteredName = artNameRef.current.value;
  let enteredArtDesc = artDescriptionRef.current.value;

  formData.append("artist_name", enteredName);
  formData.append("artist_avatar", file);
  formData.append("artist_description", enteredArtDesc);

  e.preventDefault();
  const createArtist = await Axios.post(endpt, formData).then((res) => {
    if(res.status===201){
      dispatch(
        artistActions.toggler()
      )
      alert('Successfully created!')
    }
  });
};
 
  return (
    <div className="new">
    
      <div className="newContainer">
      
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={onSubmitHandler}>
              <div className="formInput" style={{display:'flex', alignItems: 'center', flexDirection:'column',}}>
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
                <label htmlFor="file">
                   <DriveFolderUploadOutlinedIcon className="fileIcon icon" style={{transform: 'translateY(-50px)'}} />
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

             
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArtistForm;
