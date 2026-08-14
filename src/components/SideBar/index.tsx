import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import logo from "/favicon.svg?url";
import { usePlayer } from "../../context/playerContext";
import { animate } from "animejs";

export default function SideBar() {
  // playerContext.tsx
  const { showPlayer, setShowPlayer, playerRef } = usePlayer();

  // функция по отображению и скрытию плеера
  const showHidePlayer = () => {
    if (!playerRef.current) return;

    // Скрытие
    if (showPlayer) {
      animate(playerRef.current, {
        y: "10px",
        opacity: [1, 0],
        duration: 200,
      });

      setTimeout(() => {
        setShowPlayer(false);
      }, 200);

      console.log("hide");
    }

    // Отображение
    else {
      setShowPlayer(true);

      // Даём React время отрисовать элемент
      setTimeout(() => {
        if (!playerRef.current) return;

        animate(playerRef.current, {
          y: "-10px",
          opacity: [0, 1],
          duration: 200,
        });
      }, 0);

      console.log("show");
    }
  };

  return (
    <div className={styles["sidenav"]}>
      <img src={logo} alt="logo" />
      <Link to={"/"}>
        <Tooltip title="Home page">
          <IconButton aria-label="download" size="large">
            <HomeIcon fontSize="inherit" sx={{ color: "#727272" }} />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={"/favorite"}>
        <Tooltip title="Favorite page">
          <IconButton aria-label="download" size="large">
            <FavoriteIcon fontSize="inherit" sx={{ color: "#727272" }} />
          </IconButton>
        </Tooltip>
      </Link>
      <Tooltip title="Player">
        <IconButton aria-label="download" size="large" onClick={showHidePlayer}>
          <AlbumIcon fontSize="inherit" sx={{ color: "#727272" }} />
        </IconButton>
      </Tooltip>
      <Link to={"/musics"}>
        <Tooltip title="Musics page">
          <IconButton aria-label="download" size="large">
            <MusicNoteIcon fontSize="inherit" sx={{ color: "#727272" }} />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={"/users"}>
        <Tooltip title="Users page">
          <IconButton aria-label="download" size="large">
            <PersonIcon fontSize="inherit" sx={{ color: "#727272" }} />
          </IconButton>
        </Tooltip>
      </Link>
    </div>
  );
}
