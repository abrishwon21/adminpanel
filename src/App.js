import React, {useEffect, useState} from 'react'
import Home from "./pages/home/Home";
import Login from "./pages/Auth/Login";
import List from "./pages/list/List";
import TrackList from "./pages/list/trackList";
import AlbumList from "./pages/list/albumList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import EditArtist from "./pages/new/editArtist";
import EditAlbum from "./pages/new/editAlbum";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewAlbumForm from "./pages/new/newAlbumForm";
import NewArtistForm from "./pages/new/newArtistForm";
import { useSelector } from 'react-redux'
import {albumActions} from './Store/album-slice'
function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  const isLogin = useSelector((state)=>state.login.isUserLoggedIn)
  const isAlbumVisible = useSelector((state)=>state.album.isNewFormVisible);
  
  return (
   
    
    <div className={darkMode ? "app dark" : "app"}>
    
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route index element={!isLogin ? <Login /> : <Home/>} />
            <Route path="home" element={!isLogin ? <Login /> : <Home />} />
            <Route path='album' element={!isLogin ? <Login /> : <NewAlbumForm/>}/>
            <Route path="artist" element={!isLogin ? <Login /> : <List />} />
            
            <Route path="login" element={!isLogin ? <Login /> : <Login />} />
            <Route path="album">
              <Route index element={!isLogin ? <Login /> : <AlbumList />} />
              <Route path=":albumId" element={!isLogin ? <Login /> : !isAlbumVisible ? <EditAlbum />:<AlbumList />} />
              <Route
                path="new"
                element={!isLogin ? <Login /> : <New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="artist">
              <Route index element={!isLogin ? <Login /> : <List />} />
              <Route path=":artistId" element={!isLogin ? <Login /> : <EditArtist />} />
              <Route
                path="new"
                element={!isLogin ? <Login /> : <New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="track">
            <Route index element={!isLogin ? <Login /> : <TrackList />} />
            <Route path=":trackId" element={!isLogin ? <Login /> : <EditArtist />} />
            <Route
              path="new"
              element={!isLogin ? <Login /> : <New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
