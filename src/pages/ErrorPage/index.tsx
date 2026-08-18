import { useNavigate } from "react-router-dom";
import ButtonElem from "../../components/UI/ButtonElem";

export default function ErrorPage() {

  const navigate = useNavigate();

  return (
    <div className="error-page">
      <span className="emoji">(╥﹏╥)</span>
      <span className="text">I don't know this page</span>
      <ButtonElem title="Return to Home Page" func={() => navigate('/')} />
    </div>
  );
}
