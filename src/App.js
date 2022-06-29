import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import TrackList from "./pages/list/trackList";
import AlbumList from "./pages/list/albumList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import EditArtist from "./pages/new/editArtist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewAlbumForm from "./pages/new/newAlbumForm";
import NewArtistForm from "./pages/new/newArtistForm";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path='album' element={<NewAlbumForm/>}/>
            <Route path="artist" element={<List />} />
            <Route path="login" element={<Login />} />
            <Route path="album">
              <Route index element={<AlbumList />} />
              <Route path=":albumId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="artist">
              <Route index element={<List />} />
              <Route path=":artistId" element={<EditArtist />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="track">
            <Route index element={<TrackList />} />
            <Route path=":trackId" element={<EditArtist />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
