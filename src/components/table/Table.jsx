import "./table.scss";
import {Link} from 'react-router-dom'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NewArtistForm from "../../pages/new/newArtistForm";
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {BASE_URL} from '../../env'
import Axios from 'axios'
import {artistActions} from '../../Store/artist-slice'
import {uiActions} from '../../Store/ui-slice'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ArtistTable = () => {
const [rows, setRows] = useState([]);
const toggle = useSelector((state)=>state.artist.isNewFormVisible)
const dispatch = useDispatch()
  useEffect(()=>{
    artistList();
    
    }, [])

  const toggleHandler = ()=>{
       dispatch(artistActions.toggler())
  }
    
  
  const handleDelete = async(id) => {
    //setData(data.filter((item) => item.id !== id));
    dispatch(uiActions.showLoading());
    
     let endpt = BASE_URL+"artist/"+id+"/delete/";
      const resp = await Axios.delete(endpt);
      if(resp.status===204){
        alert('you have deleted the artist!')
        window.location.reload();
        console.log(id);
     
      }else{
        console.log(resp.error)
        window.location.reload();
      }
      setRows(rows.filter((item) => item.id !== id));
      dispatch(uiActions.showLoading());

  };

      const artistList = async () => {
       const endpt = BASE_URL + "artist/";
        const resp = await Axios.get(endpt);
        if(resp.status===200){
          setRows(resp.data);
          
         // dispatch(artistActions.addArtist(resp.data))
     
        }
       // dispatch(uiActions.showLoading());
        
      };

  return (
    <TableContainer component={Paper} className="table">
    {!toggle && <div className="datatableTitle">
    <button  className="link" onClick={toggleHandler}>
      Add New
    </button>

  </div>}

 {toggle && <NewArtistForm/>}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Artist ID</TableCell>
            <TableCell className="tableCell">Artist Photo</TableCell>
            <TableCell className="tableCell">Artist Name</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell" colSpan={2} style={{align:'center' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.artist_avatar} alt="" className="image" />
                 
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.artist_name}</TableCell>
              <TableCell className="tableCell">{row.artist_description}</TableCell>
              
              <TableCell className="tableCell">
              <Link to={"/artist/" + row.id} style={{ textDecoration: "none" }}>
                     <EditIcon className = "icons"/> 

            </Link>
              
              </TableCell>
                            
              <TableCell className="tableCell" onClick={() => handleDelete(row.id)}>
                <DeleteIcon className="deleteIcon"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {console.log(rows)}
    </TableContainer>
  );
};

export default ArtistTable;
