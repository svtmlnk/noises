import styles from "./MusicItem.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function MusicItem() {
  const [fav, setFav] = useState(false);

  return (
    <div className={styles["music-item"]}>
      <img
        src="https://images.unsplash.com/photo-1782241594366-a6cb0b3edc47?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
      />
      <div className={styles["title-and-author"]}>
        <span className={styles["title"]}>title</span>
        <span className={styles["author"]}>author</span>
      </div>
      <div className={styles["music-item-options"]}>
        <IconButton aria-label="close" size="large" onClick={() => setFav(!fav)}>
            {fav ? <FavoriteIcon fontSize="inherit" sx={{ color: "#727272" }} /> : <FavoriteBorderIcon fontSize="inherit" sx={{ color: "#727272" }} />}
        </IconButton>
        <IconButton aria-label="close" size="large" onClick={() => console.log('remove')}>
          <DeleteIcon fontSize="inherit" sx={{ color: "#727272" }} />
        </IconButton>
      </div>
    </div>
  );
}
