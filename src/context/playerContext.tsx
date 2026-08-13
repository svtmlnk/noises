// использование Context

import { createContext, useContext, useState, type ReactNode } from "react";

// описываем структуру данных, которые будут доступны в context
type PlayerContextType = {
  showPlayer: boolean;
  setShowPlayer: (show: boolean) => void;
};

// Создаём context
// По умолчанию значение undefined. Благодаря этому можно проверить, что хук используется внутри Provider.
const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

// Главный Provider.
// Здесь хранятся данные, которые должны быть доступны всему приложению. children — это все компоненты, которые будут обёрнуты в Provider.
export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  // showPlayer используется для отображение плеера, a setShowPlayer для изменения значения showPlayer

  // value - объект, который будет доступен через useContext().
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
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
