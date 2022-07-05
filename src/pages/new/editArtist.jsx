import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef, useEffect } from "react";
import { artistActions } from '../../Store/artist-slice'
import { useSelector, useDispatch} from 'react-redux'
import Axios from 'axios'
import { BASE_URL } from "../../env";
import {useParams} from 'react-router-dom';
const EditArtist = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [artistData, setArtistData ] = useState([]);
  const artNameRef = useRef();
  const artDescriptionRef = useRef();

 const dispatch = useDispatch();


 const { artistId } = useParams();


 useEffect(() => {
  getSingleUser();
}, []);
const getSingleUser = async () => {
  await Axios.get(`${BASE_URL}artist/${artistId}`).then((result) => {
    if (result.status === 200) {
      setArtistData(result.data);
    }
  });
  console.log(artistData);
};

 const onSubmitHandler = async (e) => {
  e.preventDefault();
  const endpt = `${BASE_URL}artist/${artistId}/update/`;
  const formData = new FormData();
  let enteredName = artNameRef.current.value;
  let enteredArtDesc = artDescriptionRef.current.value;

  formData.append("artist_name", enteredName);
  formData.append("artist_avatar", file);
  formData.append("artist_description", enteredArtDesc);

  
  const editArtist = await Axios.patch(endpt, formData).then((res) => {
    if(res.status===201){
      dispatch(
        artistActions.toggler()
      )
      alert('Successfully updated!')
      window.location.replace("localhost:3000/album");
    }
 
    window.location.replace("localhost:3000/album");
  });
};
 
  return (
    <div className="new">
       <Sidebar />
      <div className="newContainer">
          <Navbar />
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
                    : artistData.artist_avatar
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
                  <input type="text" placeholder={artistData.artist_name} ref={artNameRef} />
                </div>
                              
                <div className="formInput">
                  <label>About Artist</label>
                  <input type="text"  placeholder={artistData.artist_description} ref={artDescriptionRef} />
                </div>

             
              <button>update</button>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default EditArtist;
