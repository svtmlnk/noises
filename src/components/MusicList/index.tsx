import { useAppSelector } from "../../app/hooks";
import { selectMusic, type MusicInfo } from "../../features/music/musicSlice";
import MusicItem from "../MusicItem";
import styles from './MusicList.module.scss';

export default function MusicList() {
    const playlist = useAppSelector(selectMusic);

    return(
        <div className={styles["music-list"]}>
            {playlist.map((elem: MusicInfo) => (
                <MusicItem key={elem.id} {...elem}/>
            ))}
        </div>
    )
}