import s from './Media.module.css';
import React from "react";
import { useHistory } from "react-router-dom";
import Fav from "../Fav/Fav";
import editIcon from '../../../assets/images/edit-icon.png';
import playIconn from "../../../assets/images/ruinatv-icon-play-n.png";
import deleteIcon from '../../../assets/images/delete-icon.png';
import { useDispatch, useSelector } from "react-redux";
import { $d } from "../../../functions";
import { deleteMedia } from '../../../middlewares/redux/actions/admin';
import { RenderDriveImage } from '../../../functions/RenderDriveImage';
import { getMedia } from '../../../middlewares/redux/actions/media';

const Media = ({ mediaList, style, keyID }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const favs = useSelector(state => state.allUserLikes);

  function handleDeleteMedia(id) {
    dispatch(deleteMedia(id));
    dispatch(getMedia());
  }

  return (
    <div className={style.sliderItems}>
      <ul className={style.sliderListaItems} id={`${keyID}ListaItems`}>
        {
          mediaList?.map((e, i) => {
            return (
              <li value={e.id} key={i} >
                <div className={style.sliderItem}>
                  <div
                    className={style.media}
                    style={{ backgroundImage: `url(${RenderDriveImage(e.imageSlider)})` }}
                    id={e.id}
                    urlid={e.urlID}
                    titulo={e.title}
                    artista={e.artist}
                    img={RenderDriveImage(e.imageSlider)}
                    onClick={() => {
                      history.push(`/view/v=${e.id}`)
                      $d(`.link`).style.transitionDelay = '1s'
                      window.scrollTo(0, 0);
                    }}
                  >
                  </div>
                  {
                    currentUser?.role === 'admin' 
                    ? <ul className={s.adminRequest}>
                        <li className={s.adminBtn} onClick={() => { history.push(`/media/edit/${e.id}`) }}>
                          <img src={editIcon} className={s.editImg} alt='edit' width='15px' />
                        </li>
                        <li className={s.adminBtn} onClick={() => { handleDeleteMedia(e.id) }} >
                          <img src={deleteIcon} className={s.deleteImg} alt='delete' width='15px' />
                        </li>
                      </ul>
                    : null
                  }
                  <div className={style.mydiv}>
                    <div className={style.ulTitlesItems}>
                      <div style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                        <img
                          className={style.sliderItemIconPlayN}
                          src={playIconn}
                          alt="play" />
                        <p style={{ color: 'black' }}>{e.title}</p>
                      </div>
                      {
                        currentUser && favs?.filter(fav => fav.id === e.id).length > 0
                          ? <Fav urlID={e.id} color={'red'} style={{ marginTop: '-10px' }} />
                          : null
                      }
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        };
      </ul>
    </div>
  );
};
export default Media;
