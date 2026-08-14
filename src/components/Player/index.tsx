import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./playerStyle.css";
import styles from "./Player.module.scss";

import iney from "../../assets/INEY.mp3";
import chiralium from "../../assets/chiralium.mp3";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Tooltip from "@mui/material/Tooltip";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import CloseIcon from "@mui/icons-material/Close";
import { usePlayer } from "../../context/playerContext";

import { animate } from "animejs";

export default function Player() {
  const playlist = [
    {
      id: 1,
      src: chiralium,
      img: "https://i.scdn.co/image/ab67616d0000b273442e51d795b053b4a9642fd9",
      title: "Chiralium",
      author: "Ludvig Forssell",
    },
    {
      id: 2,
      src: iney,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrRbCFXdQVAsVvsVsPhOQiARjLPks_L5v5ByofhsF7m_ru6Qf9sHwA6RK&s=10",
      title: "NНΞЙ",
      author: "Ножевые ранения",
    },
  ];

  // playerContext.tsx
  const { showPlayer, setShowPlayer, playerRef } = usePlayer();

  // функция по скрытию плеера
  const hidePlayer = () => {
    if (!playerRef.current) return;

    animate(playerRef.current, {
      y: "10px",
      opacity: [1, 0],
      duration: 200,
    });

    setTimeout(() => {
      setShowPlayer(false);
      console.log("hidden")
    }, 200);

    console.log(showPlayer)
    console.log("hide")
  };

  // id текущего трека
  const [currentTrack, setTrackIndex] = useState(0);

  // отслеживание ширины окна браузера
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ручное управление музыкой: включить предыдущую музыку
  const handleClickPreview = () => {
    console.log("click preview");
    setTrackIndex((currentTrack) =>
      currentTrack > 0 ? currentTrack - 1 : playlist.length - 1,
    );
  };

  // ручное управление музыкой: включить следующую музыку
  const handleClickNext = () => {
    console.log("click next");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0,
    );
  };

  // включить следующую музыку после завершения текущей
  const handleEnd = () => {
    console.log("end");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0,
    );
  };

  return (
    <div className={styles["player-container"]} ref={playerRef} style={{display: showPlayer ? "block" : "none"}}>
      <div className={styles["player-music"]}>
        <img src={playlist[currentTrack].img} alt="INEY" />
        <div className={styles["music-info"]}>
          <span className={styles["title"]}>
            {playlist[currentTrack].title}
          </span>
          <span className={styles["author"]}>
            {playlist[currentTrack].author}
          </span>
        </div>
        <IconButton
          aria-label="close"
          size="large"
          id={styles["remove"]}
          onClick={hidePlayer}
        >
          <CloseIcon fontSize="inherit" sx={{ color: "#fafafa" }} />
        </IconButton>
      </div>
      <AudioPlayer
        autoPlay={true}
        volume={isMobile ? 1 : 0.5}
        src={playlist[currentTrack].src}
        showSkipControls={true}
        onClickPrevious={handleClickPreview}
        onClickNext={handleClickNext}
        onEnded={handleEnd}
        showJumpControls={false}
        onError={() => {
          console.log("play error");
        }}
        customAdditionalControls={[
          // кнопка скачивания музыки в виде тега (a)
          <a
            href={playlist[currentTrack].src}
            download={`${playlist[currentTrack].title}.mp3`}
            className="download-button-link"
            title={`${playlist[currentTrack].title} - ${playlist[currentTrack].author}`}
            key="download"
          >
            <Tooltip title="Download music file">
              <IconButton aria-label="download" size="large">
                <DownloadIcon fontSize="inherit" sx={{ color: "#fafafa" }} />
              </IconButton>
            </Tooltip>
          </a>,
        ]}
        customIcons={{
          play: <PlayCircleIcon fontSize="inherit" sx={{ color: "#fafafa" }} />,
          pause: (
            <PauseCircleIcon fontSize="inherit" sx={{ color: "#fafafa" }} />
          ),
          previous: (
            <SkipPreviousIcon fontSize="inherit" sx={{ color: "#fafafa" }} />
          ),
          next: <SkipNextIcon fontSize="inherit" sx={{ color: "#fafafa" }} />,
          volume: <VolumeUpIcon fontSize="inherit" sx={{ color: "#fafafa" }} />,
          volumeMute: (
            <VolumeOffIcon fontSize="inherit" sx={{ color: "#fafafa" }} />
          ),
        }}
        // Try other props!
      />
    </div>
  );
}
