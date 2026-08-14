import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {

  const navigate = useNavigate();

  return (
    <div className="error-page">
      <span className="emoji">(╥﹏╥)</span>
      <span className="text">I don't know this page.</span>
      <Button variant="contained" sx={{bgcolor: "#d9d9d9", borderRadius: "100px", color: "#080808"}} onClick={() => navigate('/')}>Return to Home Page</Button>
    </div>
  );
}
