// использование Context
import { createContext, useContext, useState, type ReactNode } from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/music/musicSlice";

type ModalContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  file: any;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleOpen: () => void;
  handleClose: () => void;
  chooseFile: (elem: FileList | null) => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  uploadMusic: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setFile(null);
  };

  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const chooseFile = (elem: any) => {
    setFile(elem[0]);
    console.log(file);
    console.log("file is choosen");
  };

  const uploadMusic = () => {
    // в состояние file будет храниться сам файл, который будет отправлен в БД (supabase)
    console.log(file);
    dispatch(
      add({
        id: Date.now(),
        src: "###",
        img: "###",
        title: title,
        author: "genius",
      }),
    );
    console.log("Music is added in list array");
    setTitle("");
    setFile(null);
    handleClose();
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        file,
        setFile,
        setOpen,
        handleOpen,
        handleClose,
        chooseFile,
        title,
        setTitle,
        uploadMusic,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }

  return context;
};
