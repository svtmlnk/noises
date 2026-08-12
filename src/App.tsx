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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        {/* <Player /> */}
      </div>
    </>
  );
}

export default App;
