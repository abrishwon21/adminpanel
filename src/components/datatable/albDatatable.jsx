import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { albumActions } from "../../Store/album-slice";
import { uiActions } from "../../Store/ui-slice";
import Axios from 'axios'
import {BASE_URL} from '../../env'
import NewAlbumForm from "../../pages/new/newAlbumForm";
const AlbumDatatable = (props) => {
  const [data, setData] = useState("");
  
  const dispatch = useDispatch()
  const toggle = useSelector((state)=>state.album.isNewFormVisible)
  const isLoading = useSelector((state)=>state.ui.isLoading)
  
  const handleDelete = async(id) => {
    //setData(data.filter((item) => item.id !== id));
    dispatch(uiActions.showLoading());
    
     let endpt = BASE_URL + "/album/"+id+"/delete/";
      const resp = await Axios.delete(endpt);
      if(resp.status===204){
        alert('you have deleted the artist!')
        
     
      }else{
        console.log(resp.error)
      }
      setData(data.filter((item) => item.id !== id));
      dispatch(uiActions.showLoading());

  };

 
 const albumRow = [
  
 ]

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  
  const toggleHandler = ()=>{
       dispatch(albumActions.toggler())
  }

  return (
    <div className="datatable">
      {!toggle && <div className="datatableTitle">
        <button  className="link" onClick={toggleHandler}>
          Add New
        </button>

      </div>}
    
     
     {toggle && <NewAlbumForm/>}
      {isLoading &&
        <DataGrid
        className="datagrid"
        rows={props.dta}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />}
      {!isLoading && <h1> Loading . . .</h1>}
    </div>
  );
};

export default AlbumDatatable;
