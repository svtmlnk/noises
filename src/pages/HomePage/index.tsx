import MusicList from "../../components/MusicList";
import ButtonElem from "../../components/UI/ButtonElem";
import { useModal } from "../../context/modalContext";

export default function HomePage() {
  // нужно создать отдельный контекст для этих функций и переменных, а само окно в отдельный компонент
  const { handleOpen } = useModal();

  return (
    <div>
      <h2>Home page</h2>
      <MusicList />
      <ButtonElem title="Upload music" func={handleOpen} />
    </div>
  );
}
