import React from "react";
import { Link } from 'react-router-dom';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png';
import playIconn from '../../../assets/images/ruinatv-icon-play-n.png';
import visorIntroVideo from '../../../assets/videos/laruina-intro.mp4';
import { VisorFunction } from './MediaVisor.functions';
import { $d } from "../../../functions";
import { RenderDriveImage } from "../../../functions/RenderDriveImage";

const MediaVisor = () => {
    const { 
        visorID, 
        visorImg, 
        visorTag,   
        visorInfo, 
        visorIcon, 
        visorList,
        visorTitle,
        visorArtist, 
        currentUser,
        } = VisorFunction();

    return(
        <div className='visor'>
            <video className='visorVideoIntro' src={visorIntroVideo} autoPlay muted loop type="video/mp4"/>
            <div className='visorBGCanvas'>
                <img className='visorBG' src={RenderDriveImage(visorImg)} alt='' />
            </div>
            <div className='visorCanvas'/>
            { visorList?.length
            ?<div className='visorPostInfo'>
                <div className='visorPostArtista'>
                    <p>{visorArtist}</p>
                </div>
                <div className='visorPostTitulo'>
                    <p>{visorTitle}</p>
                    <div className='visorInfo'><h3>{visorInfo}</h3></div>
                    <ul className='visorBtn'>
                        <li>
                            <Link to={`/view/v=${visorID}`}>
                                <button 
                                    className='button1'
                                    id={visorID}
                                    titulo={visorTitle}
                                    artista={visorArtist}
                                    img={visorImg}
                                    tag={visorTag? visorTag : null}
                                    onClick={()=>{window.scrollTo(0, 0)}}
                                    onMouseEnter={()=>{
                                        $d('.visorButtonPlay').src=playIconb
                                    }}
                                    onMouseLeave={()=>{
                                        $d('.visorButtonPlay').src=playIconn
                                    }}
                                    >
                                    <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />{!currentUser?  'Previsualizar' : 'Ir al contenido'}
                                </button>
                            </Link>
                        </li>
                        <li>
                            <button 
                                className='button2'
                                onClick={()=>{ return $d('#infoCont').style.scale='1' }} >
                                Más información
                            </button>
                        </li>
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
            </div>
            : null }
        </div>
    )
}
export default MediaVisor;