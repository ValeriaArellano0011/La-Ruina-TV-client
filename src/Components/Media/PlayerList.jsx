import AudioPlayer from 'react-h5-audio-player';
import s from './css/Playlist.module.css'
import './css/player.css'

import { useDispatch } from 'react-redux'
import { resetUrlPlayer } from '../../middlewares/redux/actions'


export const PlayerList = (props) =>{
    const {url} = props
    const dispatch = useDispatch()
    return (
        <div className={s.audioplayer}>
            <div>          
                <button className={s.closeBtn} onClick={()=>{return dispatch(resetUrlPlayer())}}>X</button>
            </div>
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