import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

import { Container, Row, Col } from 'react-grid-system';
import Demo from "../../components/chart/Chart2";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="musics" />
          <Widget type="artist" />
          <Widget type="album" />
          <Widget type="podcast" />
        </div>
        <div className="charts">
                    
            <Container>
           <Row>
           <Col sm={4}>
           <div className="">
                <Featured />
              </div>
           </Col>
           <Col sm={8} md={8}>
           <div className="charts">
             
                 <Demo />
                
              </div>
           </Col>
          
         </Row>
       </Container>
              
        </div>
        <div className="charts">
        <Chart title="User Registration Data" aspect={2 / 1} />

        </div>
        <div className="widgets">
          <Widget type="newMusics" />
          <Widget type="newArtist" />
          <Widget type="newAlbum" />
          <Widget type="newClient" />
        </div>
        <div className="listContainer">
          <div className="listTitle">poppular musics</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
