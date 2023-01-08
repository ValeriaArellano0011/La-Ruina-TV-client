import React from 'react';
import playIconn from '../design/ruinatv-icon-play-n.png'
import { Link } from 'react-router-dom';
import sliderImg0 from '../design/slider/0-slider.jpg'
import sliderImg1 from '../design/slider/1-slider.jpg'
import sliderImg2 from '../design/slider/2-slider.jpg'
import sliderImg3 from '../design/slider/3-slider.jpg'
import sliderImg4 from '../design/slider/4-slider.jpg'
import sliderImg5 from '../design/slider/5-slider.jpg'
import sliderImg6 from '../design/slider/6-slider.jpg'


const Post = (props) => {
    const sliderImgList = [sliderImg0,sliderImg1,sliderImg2,sliderImg3,sliderImg4,sliderImg5,sliderImg6]
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
                    let i = props.categoria.indexOf(e)
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
                            img={sliderImgList[i]}
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

