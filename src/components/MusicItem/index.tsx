import styles from "./MusicItem.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import type { MusicInfo } from "../../features/music/musicSlice";
import { usePlayer } from "../../context/playerContext";

export default function MusicItem({ id, title, author, img }: MusicInfo) {
  const [fav, setFav] = useState(false);
  const { chooseMusic } = usePlayer();

  return (
    <div className={styles["music-item"]} onClick={() => chooseMusic(id)}>
      <div
        className={styles["img"]}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles["title-and-author"]}>
        <span className={styles["title"]}>{title}</span>
        <span className={styles["author"]}>{author}</span>
      </div>
      <div className={styles["music-item-options"]}>
        <IconButton
          aria-label="close"
          size="large"
          onClick={() => setFav(!fav)}
        >
          {fav ? (
            <FavoriteIcon fontSize="inherit" sx={{ color: "#727272" }} />
          ) : (
            <FavoriteBorderIcon fontSize="inherit" sx={{ color: "#727272" }} />
          )}
        </IconButton>
        <IconButton
          aria-label="close"
          size="large"
          onClick={() => console.log("remove")}
        >
          <DeleteIcon fontSize="inherit" sx={{ color: "#727272" }} />
        </IconButton>
      </div>
    </div>
  );
}
