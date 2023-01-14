import React from 'react';
import { Link } from 'react-router-dom';
import playIconb from '../../design/ruinatv-icon-play-b.png'
import playIconn from '../../design/ruinatv-icon-play-n.png'
import visorIntroVideo from '../../design/laruina-intro.mp4'
import { VisorFunction } from './js/VisorFunction';

const Visor = () => {
    const { 
        visorID, 
        visorImg, 
        visorTag, 
        visorBtn1, 
        visorInfo, 
        visorIcon, 
        visorList,
        visorTitle, 
        visorUrlID,
        visorArtist, 
        visorTypeMedia 
        } = VisorFunction()
    return(
        <div className='visor'>
            <video className='visorVideoIntro' src={visorIntroVideo} autoPlay={true} loop muted  type="video/mp4"/>
            <div className='visorBGCanvas'>
                <img className='visorBG' src={visorImg} alt='' />
            </div>
            <div className='visorCanvas'></div>
            {visorList?
            (<div className='visorPostInfo'>
                <div className='visorPostArtista'>
                    <p>{visorArtist}</p>
                </div>
                <div className='visorPostTitulo'>
                    <p>{visorTitle}</p>
                    <div className='visorInfo'><h3>{visorInfo}</h3></div>
                    <ul className='visorBtn'>
                        <li><Link to={`/view/v=${visorUrlID?.idYT}=_type_=${visorTypeMedia}=_id_=${visorID}`}>
                            <button 
                            className='button1'
                            id={visorID}
                            urlid={visorUrlID}
                            titulo={visorTitle}
                            artista={visorArtist}
                            img={visorImg}
                            tag={visorTag? visorTag : null}
                            onClick={()=>{window.scrollTo(0, 0)}}
                            onMouseEnter={()=>{
                                document.querySelector('.visorButtonPlay').src=playIconb
                            }}

                            onMouseLeave={()=>{
                                document.querySelector('.visorButtonPlay').src=playIconn
                            }}
                            >
                            <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />{visorBtn1? visorBtn1 : 'Ver más'}</button></Link></li>
                        <li><button 
                                className='button2'
                                onClick={()=>{ return document.querySelector('#infoCont').style.scale='1' }} >
                            Más información</button></li>
                    </ul>
                    <ul className='visorIcons'>
                        {
                            visorIcon?.map((e)=>{
                                return(
                                <li key={e}><img className='visorTagIcon' src={e} alt="" /></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>) : null}
        </div>
    )
}
export default Visor