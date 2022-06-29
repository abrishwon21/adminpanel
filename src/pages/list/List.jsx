import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { BASE_URL } from "../../env";
import Axios from 'axios';
import {useState, useEffect} from 'react';
import {useDispatch } from 'react-redux';
import { uiActions } from "../../Store/ui-slice";

const List = () => {
  const [datas, setDatas] = useState([]);
 useEffect(()=>{
  artistList();
  
},
[])
const dispatch=useDispatch();
const dtat = [
]
  const artistList = async () => {
    let endpt = BASE_URL + "/artist/";
    const resp = await Axios.get(endpt);
    if(resp.status===200){
    
      setDatas(resp.data);
      dispatch(uiActions.showLoading());
    }

    
    
    
  };
 
  const artList = []
  datas.map((res)=>(artList.push({id:res.id, name:res.artist_name, img:res.artist_avatar, description:res.artist_description})));
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable dta={artList} dtype='artist'/>
      
      </div>
    </div>
  )
}

export default List