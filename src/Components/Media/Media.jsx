import React from "react";
import playIconn from "../../design/ruinatv-icon-play-n.png";
import { Link, useHistory } from "react-router-dom";
import editIcon from '../../design/edit-icon.png';
import deleteIcon from '../../design/delete-icon.png';
import { useDispatch, useSelector } from "react-redux";
import s from './css/Media.module.css';
import { getDeleteMedia, getEditMedia } from "../../middlewares/redux/actions";
import Fav from "../Fav/Fav";

const Media = ({ cardList, style, keyID }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;
  const currentUser = useSelector(state=>state.currentUser)
  const favs = useSelector(state => state.allUserLikes)

  return (
    <div className={style.sliderItems}>
      <ul
        className={style.sliderListaItems}
        id={`${keyID}ListaItems`}
      >
        {
          cardList ? cardList.map((e, i) => {
            return (
              <li value={e.id} key={i} >
                <div className={style.sliderItem}>
                  <Link
                    to={`/view/v=${e.idLinkYT}=_type_=${e.mediaType}=_id_=${e.id}`}
                    className='link' >
                    <button
                      className={style.media}
                      style={{
                        backgroundImage: e.linkimg
                          ? `url(${e.linkimg})`
                          : "error",
                      }}
                      id={e.id}
                      urlid={e.urlID}
                      titulo={e.title}
                      artista={e.artist}
                      img={e.linkimg}
                      onClick={() => {
                        document.querySelector(`.link`).style.transitionDelay = '1s'
                        return window.scrollTo(0, 0);
                      }}
                    >
                      {/* <img src={e.icon} alt="logo" className={style.logoItem} /> */}

                    </button>
                  </Link>
                  {
                  user?
                  (user?.role.userMode === 'admin' ? (
                    <ul className={s.adminRequest}>
                      <li className={s.adminBtn}>
                        <img src={editIcon}
                          onClick={() => {
                            dispatch(getEditMedia(e.connectionId))
                            history.push(`/media/edit/${e.connectionId}`)
                          }} className={s.editImg} alt='edit' width='15px' />
                      </li>
                      <li className={s.adminBtn}>
                        <img src={deleteIcon} onClick={() => { dispatch(getDeleteMedia(e.id)) }} className={s.deleteImg} alt='delete' width='15px' />
                      </li>
                    </ul>
                  )
                    : null):null
                  }
                    <div className={style.mydiv}>
                      <div className={style.ulTitlesItems}>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '5px'}}>
                          <img
                            className={style.sliderItemIconPlayN}
                            src={playIconn}
                            alt="play" />
                          <p style={{color: 'black'}}>{e.title}</p>
                        </div>
                        {(user || currentUser) && favs?.filter(fav => fav.id === e.id).length > 0 ?
                        <Fav urlID={e.id} color={'red'} style={{marginTop: '-10px'}}/>:null}
                      </div>
                    </div>
                </div>
              </li>
            );
          })
            : null}
      </ul>
    </div>
  );
};
export default Media;
