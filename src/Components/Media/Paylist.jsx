import AudioPlayer from 'react-h5-audio-player';
import s from './css/Playlist.module.css'
import './css/player.css'

export const Playlist= (props) =>{
    const {url} = props
    return (
        <div className={s.audioplayer}>
        <AudioPlayer 
            src={`${url}`}
            onPlay={() => console.log("onPlay")}
            onPause={() => console.log("onPause")}
            onEnded={() => {return}}
            autoPlay>
        </AudioPlayer>

        </div>
    )
}