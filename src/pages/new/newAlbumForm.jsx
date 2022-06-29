import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef, useEffect } from "react";
import { albumActions } from '../../Store/album-slice'
import { useSelector, useDispatch} from 'react-redux'
import Axios from 'axios'
import { BASE_URL } from "../../env";

const NewAlbumForm = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [artData, setArtData ] = useState([]);
  const albNameRef = useRef();
  const [artistIDRef,setArtIdRef] = useState();
  const albumReleaseDate = useRef();
  const albDescriptionRef = useRef();

 const dispatch = useDispatch();
 //list of artist 
 const getArtist = async () => {
  await Axios.get(BASE_URL+"/artist/").then((res) => {
      if (res.status ===200) {
        setArtData(res.data);
      }

    })
    .catch((err) => {
      // ArtistsX.push("error");
    });
};

useEffect(() => {
  getArtist() 
}, []);

 const onSubmitHandler = async (e) => {
  e.preventDefault();
  const endpt = BASE_URL+ "/album/";
  const formData = new FormData();
  let enteredName = albNameRef.current.value;
  let enteredAlbDesc = albDescriptionRef.current.value;
  let enteredArtId = artistIDRef;
  let enteredDate = albumReleaseDate.current.value;

  formData.append("album_name", enteredName);
  formData.append("album_description", enteredAlbDesc);
  formData.append("album_release", enteredDate)
  formData.append("album_cover", file);
  formData.append("artist", enteredArtId);
  

 
  const createArtist = await Axios.post(endpt, formData).then((res) => {
    if(res.status===201){
      dispatch(
        albumActions.toggler()
      )
      alert('Successfully created!')
    }else{
      alert('please try again')
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
                <div className="row">
                <div className="col">
                  <h3>Select Artists</h3>
                  <select
                    className="form-select form-select mb-3"
                    name="artist"
                    aria-label=".form-select example"
                    onChange={(e) => {
                      setArtIdRef(e.target.value);
                    }}>
                    <option>Open this select menu</option>
                    {artData.map((res) => (
                      <option key={res.id} value={res.id}>
                        {res.artist_name} 
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <h3>Select Genre</h3>
                  <select
                    className="form-select form-select mb-3"
                    name="artist"
                    aria-label=".form-select example"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
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
                  <label>Album Name</label>
                  <input type="text" placeholder="please enter name" ref={albNameRef}/>
                </div>

            <div className="formInput">
              <label>Date</label>
              <input type="date" placeholder="release date" ref={albumReleaseDate} />
            </div>                
                <div className="formInput">
                  <label>About Album</label>
                  <input type="text" placeholder="please enter name" ref={albDescriptionRef} />
                </div>
              <button>Create Album</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAlbumForm;
