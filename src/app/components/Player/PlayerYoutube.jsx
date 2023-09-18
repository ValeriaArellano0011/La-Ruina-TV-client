import React from 'react';
import { YtSubscribeButton } from '../Utils/YtSubscribeButton';

const PlayerYoutube = (props) => {
  const { idLinkYT } = props;
  return (
    <div className='playerLi'>
      <YtSubscribeButton/>
      <iframe title="iframe" id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen
        src={`https://www.youtube.com/embed/${idLinkYT}?start=1&color=white`}
        frameBorder="0" />
    </div>
  )
}


export default PlayerYoutube;
