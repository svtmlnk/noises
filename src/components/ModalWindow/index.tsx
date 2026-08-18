import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ButtonElem from "../../components/UI/ButtonElem";
import TextField from "@mui/material/TextField";
import { useModal } from "../../context/modalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#161616",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "15px",
};

export default function ModalWindow() {
  const { open, handleClose } = useModal();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField fullWidth label="Music name" id="fullWidth" />
        <ButtonElem title="Upload music" uploading={true} />
      </Box>
    </Modal>
  );
}
