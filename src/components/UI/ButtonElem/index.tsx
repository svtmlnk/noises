import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { useModal } from "../../../context/modalContext";

interface ButtonElemProps {
  title: string;
  startIcon?: string;
  func?: any;
  uploading?: boolean;
  disabled?: boolean;
}

const style = {
  bgcolor: "#d9d9d9",
  borderRadius: "100px",
  color: "#080808",
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ButtonElem({
  title,
  startIcon,
  func,
  uploading,
  disabled
}: ButtonElemProps) {

  const { chooseFile } = useModal();

  return (
    <Button component="label" variant="contained" startIcon={startIcon} sx={style} onClick={func} disabled={disabled}>
      {title}
      {uploading && (
        <VisuallyHiddenInput
          type="file"
          accept=".mp3"
          onChange={(event) => chooseFile(event.target.files)}
          multiple
        />
      )}
    </Button>
  );
}
