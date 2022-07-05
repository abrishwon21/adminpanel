import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AlbumDatatable from "../../components/datatable/albDatatable"
import { BASE_URL } from "../../env";
import Axios from 'axios';
import {useState, useEffect} from 'react';
import {useDispatch } from 'react-redux';
import { uiActions } from "../../Store/ui-slice";
import AlbumTable from '../../components/table/albumTable'
const AlbumList = () => {
  const [datas, setDatas] = useState([]);
const dispatch=useDispatch();
 const albList=[]
  datas.map((res)=>(albList.push({id:res.id, name:res.album_name, img:res.album_cover, date: res.album_release, description:res.album_description})));
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AlbumTable/>
      
      </div>
    </div>
  )
}

export default AlbumList