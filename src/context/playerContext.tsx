// использование Context

import { animate } from "animejs";
import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { useAppSelector } from "../app/hooks";
import { selectMusic } from "../features/music/musicSlice";

// описываем структуру данных, которые будут доступны в context
type PlayerContextType = {
  showPlayer: boolean;
  setShowPlayer: (show: boolean) => void;
  playerRef: RefObject<HTMLDivElement | null>;
  currentTrack: number;
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  chooseMusic: (id: number) => void;
  hidePlayer: () => void;
  showPlayerFunc: () => void;
  showHidePlayer: () => void;
};

// Создаём context
// По умолчанию значение undefined. Благодаря этому можно проверить, что хук используется внутри Provider.
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

// Главный Provider.
// Здесь хранятся данные, которые должны быть доступны всему приложению. children — это все компоненты, которые будут обёрнуты в Provider.
export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  // индекс текущей музыки
  const [currentTrack, setTrackIndex] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  // showPlayer используется для отображение плеера, a setShowPlayer для изменения значения showPlayer

  const playlist = useAppSelector(selectMusic);

  // функция выбора музыки
  const chooseMusic = (id: number) => {
    setTrackIndex(playlist.findIndex((elem) => elem.id == id));
    showPlayerFunc();
  };

  const animateShow = () => {
    if (!playerRef.current) return;

    animate(playerRef.current, {
      y: "-10px",
      opacity: [0, 1],
      duration: 200,
    });
  };

  const animateHide = () => {
    if (!playerRef.current) return;

    animate(playerRef.current, {
      y: "10px",
      opacity: [1, 0],
      duration: 200,
    });
  };

  // функция скрытия плеера
  const hidePlayer = () => {
    animateHide();

    setTimeout(() => {
      setShowPlayer(false);
    }, 200);
  };

  // функция отображения плеера
  const showPlayerFunc = () => {
    setShowPlayer(true);

    setTimeout(() => {
      animateShow();
    }, 0);
  };

  // функция по отображению и скрытию плеера
  const showHidePlayer = () => {
    if (showPlayer) {
      hidePlayer();
    } else {
      showPlayerFunc();
    }
  };

  // value - объект, который будет доступен через useContext().
  return (
    // <PlayerContext.Provider value={{ showPlayer, setShowPlayer, toShow, setToShow }}>
    <PlayerContext.Provider
      value={{
        showPlayer,
        setShowPlayer,
        currentTrack,
        setTrackIndex,
        chooseMusic,
        hidePlayer,
        showPlayerFunc,
        showHidePlayer,
        playerRef,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

// кастомный хук. Вместо: const context = useContext(PlayerContext); можно писать: const { showPlayer } = usePlayer();
export const usePlayer = () => {
  const context = useContext(PlayerContext);

  // защита от ошибок. Если забыть обернуть приложение в UserProvider, сразу получим понятную ошибку.
  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }

  return context;
};
