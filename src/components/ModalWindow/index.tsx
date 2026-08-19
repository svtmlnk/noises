import Modal from "@mui/material/Modal";
import ButtonElem from "../../components/UI/ButtonElem";
import { useModal } from "../../context/modalContext";
import styles from "./ModalWindow.module.scss";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

export default function ModalWindow() {
  const { open, handleClose, file, title, setTitle, uploadMusic } = useModal();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles["modal-window"]}>
        <span>Choose your music file</span>
        <IconButton aria-label="download" size="large" onClick={handleClose}>
          <CloseIcon fontSize="inherit" sx={{ color: "#727272" }} />
        </IconButton>

        {/* используй useRef для отслеживания наличия текста в поле вода */}

        {file ? (
          <>
            <TextField
              sx={{
                // 1. Text color inside the input
                "& .MuiInputBase-input": {
                  color: "#d9d9d9",
                },
                // 2. Initial label color
                "& .MuiInputLabel-root": {
                  color: "#d9d9d9",
                },
                // 3. Label color when focused
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d9d9d9",
                },
                // 4. Border styling
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d9d9d9", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#d9d9d9", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d9d9d9", // Border color when focused
                  },
                },
              }}
              id="outlined-basic"
              label="Music name"
              variant="outlined"
              defaultValue={title}
              onChange={(event) => setTitle(event.target.value)}
              fullWidth
            />
            <ButtonElem
              title="Upload music"
              func={uploadMusic}
            />
          </>
        ) : (
          <ButtonElem title="Choose file" uploading={true} disabled={true}/>
        )}

      </Box>
    </Modal>
  );
}
