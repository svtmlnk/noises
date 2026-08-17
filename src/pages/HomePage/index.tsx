import MusicList from "../../components/MusicList";

export default function HomePage() {
  // const music_array = useAppSelector(selectMusic);
  // dispatch нужен для воспроизведения функций, которые находятся в папке features, в зависимости от аргумента useAppSelector
  // const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Home page</h2>
      <MusicList />

      {/* <h1>{music_array}</h1>

      <button onClick={() => dispatch(add())}>Add</button>

      <button onClick={() => dispatch(destroy())}>Destroy</button> */}
    </div>
  );
}
