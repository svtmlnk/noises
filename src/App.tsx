import { Route, Routes } from "react-router-dom";
import "./App.css";
import Player from "./components/Player";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<ErrorPage />} />
            <Route path="/musics" element={<ErrorPage />} />
            <Route path="/users" element={<ErrorPage />} />
            <Route path="/account" element={<ErrorPage />} />
            <Route path="/settings" element={<ErrorPage />} />
            <Route path="/auth" element={<ErrorPage />} />
            <Route path="/reg" element={<ErrorPage />} />
            <Route path="/admin" element={<ErrorPage />} />
            {/* <Route path="/musics/:id" element={<ErrorPage />} /> */}
            {/* <Route path="/users/:id" element={<ErrorPage />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Player />
        </div>
      </div>
    </>
  );
}

export default App;
