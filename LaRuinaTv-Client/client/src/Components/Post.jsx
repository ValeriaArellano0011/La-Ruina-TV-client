import React from 'react';
import playIconn from '../../design/ruinatv-icon-play-n.png'
import { Link } from 'react-router-dom';

const Post = (props) => {
    const key = (props.keyID)
    const s = (props.style)
    return (
        <div className={s.sliderItems}>
            <ul className={s.sliderListaItems}
            id={`${key}ListaItems`}
            >
            {
                props?
                (
                    props.categoria.map(e=>{
                    return(
                        <li value={e.id} key={e.id}>
                            <div className={s.sliderItem}>
                            <Link to={`/view/v=:urlid=_type_=${e.typeMedia}=_id_=${e.id}`}>
                            <button
                            className={s.media} style={{backgroundImage: `url(${e.sliderImg})`}}
                            id={e.id}
                            urlid={e.urlID}
                            titulo={e.titulo}
                            artista={e.artista}
                            img={e.sliderImg}
                            onClick={()=>{return window.scrollTo(0, 0)}}
                            ><img src={e.icon[0]} alt="" className={s.logoItem} />
                            </button>
                            </Link>
                            <Link to={``} className={s.link}>
                                <p><img className={s.sliderItemIconPlayN} src={playIconn} alt=''/>{e.titulo}</p>
                            </Link>
                            </div>
                        </li>
                    )
                })) : null
            }
            </ul>
        </div>
    )
}
export default Post

