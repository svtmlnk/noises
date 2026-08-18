import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

interface ButtonElemProps {
  title: string;
  startIcon?: string;
  func?: any;
  uploading?: boolean;
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
}: ButtonElemProps) {
  return (
    <Button component="label" variant="contained" startIcon={startIcon} sx={style} onClick={func}>
      {title}
      {uploading && (
        <VisuallyHiddenInput
          type="file"
          accept=".mp3"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      )}
    </Button>
  );
}
