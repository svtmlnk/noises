import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import iney from "../../assets/INEY.mp3";
import chiralium from "../../assets/chiralium.mp3";
import { useState } from "react";

export default function Player() {
  const playlist = [
    {
      id: 1,
      src: iney,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrRbCFXdQVAsVvsVsPhOQiARjLPks_L5v5ByofhsF7m_ru6Qf9sHwA6RK&s=10",
      title: "ИНЕЙ",
      author: "Ножевые ранения",
    },
    {
      id: 2,
      src: chiralium,
      img: "https://i.scdn.co/image/ab67616d0000b273442e51d795b053b4a9642fd9",
      title: "Chiralium",
      author: "Ludvig Forssell",
    },
  ];

  // const playlist = [{ src: iney }, { src: chiralium }];

  const [currentTrack, setTrackIndex] = useState(0);
  const [loopMusic, setLoopMusic] = useState(false);

  // handleClickPrevious

  const handleClickNext = () => {
    console.log("click next");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0,
    );
  };

  const handleEnd = () => {
    console.log("end");
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0,
    );
  };

  return (
    <div className="playerContainer">
      <img src={playlist[currentTrack].img} width={"100px"} alt="INEY" />
      <span>{playlist[currentTrack].title}</span>
      <span>{playlist[currentTrack].author}</span>
      <AudioPlayer
        autoPlay={true}
        volume={0.5}
        src={playlist[currentTrack].src}
        showSkipControls
        onClickNext={handleClickNext}
        onEnded={handleEnd}
        onError={() => {
          console.log("play error");
        }}
        loop={loopMusic}
        customAdditionalControls={[
          <a
            href={playlist[currentTrack].src}
            download={`${playlist[currentTrack].title}.mp3`}
            className="download-button-link"
            title={`${playlist[currentTrack].title} - ${playlist[currentTrack].author}`}
            key="download"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <span>Hello</span>
          </a>,
          <button onClick={() => setLoopMusic(!loopMusic)}>
            {loopMusic ? "looped" : "not looped"}
          </button>,
        ]}
        // Try other props!
      />
    </div>
  );
}
