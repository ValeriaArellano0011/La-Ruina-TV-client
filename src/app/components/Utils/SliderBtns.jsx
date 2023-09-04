import React, { useState } from 'react';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png'
import { useDispatch } from 'react-redux';
import { getMedia } from '../../../middlewares/redux/actions';
import { $d } from '../../../functions';

const SliderBtns = (props) => {
    const dispatch = useDispatch()

    const k = -210
    const [i, setPosi] = useState(k)
    const [n, setPosn] = useState(-k)

    const key = (props.keyID)
    const s = (props.style)
    return (
        <>
            <button 
            className={s.sliderPrevBtn} 
            id={`${key}PrevBtn`}
            onMouseEnter={()=>
                {
                    return(
                        $d(`#${key}PrevBtn`).style.transitionDuration='1s',
                        $d(`#${key}PrevBtn`).style.cursor='pointer',
                        $d(`#${key}PrevBtn`).style.opacity='1',
                        $d(`#${key}PrevBtn`).style.background='linear-gradient(to right, rgb(0, 0, 0), transparent)'
                    )
                }
            }
            onMouseLeave={()=>
                {
                    return(
                        $d(`#${key}PrevBtn`).style.transitionDuration='1s',
                        $d(`#${key}PrevBtn`).style.opacity='0',
                        $d(`#${key}PrevBtn`).style.background='linear-gradient(to right, rgb(255, 255, 255), transparent)'
                        )   
                }
            }
            onClick={()=>
                {
                    setPosi(i-k)
                    setPosn(n-k)

                    if (n>=0){
                        return (
                            $d(`#${key}ListaItems`).style.transform=`translate(${(n)}px`,
                            $d(`#${key}ListaItems`).style.transitionDuration='1s',
                            $d(`#${key}PrevBtn`).style.transform='translate(-65px)',
                            $d(`#${key}PrevBtn`).style.transitionDuration='0.1s'
                            )}
                            
                    else{
                        return (
                            $d(`#${key}ListaItems`).style.transform=`translate(${(n)}px`,
                            $d(`#${key}ListaItems`).style.transitionDuration='1s',
                            $d(`#${key}PostBtn`).style.display='block'
                        )}
                    }
                }                       
            >
            <img className={s.sliderBtnPrevImg} alt='prevBtn' src={playIconb} />
            </button>
            {!props.categories.length>1? null : 
            <button 
            className={`${s.sliderPostBtn}`}
            id={`${key}PostBtn`}
            onClick={()=>{
                dispatch(getMedia())
                setPosi(i+k)
                setPosn(n+k)
                if (i<0 && i>(props.categories.length-1)*k){
                return (
                    $d(`#${key}ListaItems`).style.transform=`translate(${i}px)`,
                    $d(`#${key}ListaItems`).style.transitionDuration='1s',
                    $d(`#${key}PrevBtn`).style.transform='translate(0)',
                    $d(`#${key}PrevBtn`).style.transitionDuration='1s'
                    
                )}
                    
                if (i===(props.categories.length-1)*k){
                return (
                    $d(`#${key}PostBtn`).style.display="none",
                    $d(`#${key}ListaItems`).style.transform=`translate(${i}px)`,
                    $d(`#${key}ListaItems`).style.transitionDuration='1s',
                    $d(`#${key}PrevBtn`).style.transform='translate(0)',
                    $d(`#${key}PrevBtn`).style.transitionDuration='1s'

                    )}
                }
            } onMouseEnter={()=>{
                if(props.categories.length <= 1){
                    return(
                        $d(`#${key}PostBtn`).style.display="none",
                        $d(`#${key}PostBtn`).style.transitionDuration='1s'
                    )
                }
                if(props.categories.length > 1){
                    return(
                        $d(`#${key}PostBtn`).style.display="block",
                        $d(`#${key}PostBtn`).style.transitionDuration='1s',
                        $d(`#${key}PostBtn`).style.cursor='pointer',
                        $d(`#${key}PostBtn`).style.opacity='1',
                        $d(`#${key}PostBtn`).style.background='linear-gradient(to left, rgb(0, 0, 0), transparent)'

                )}
                else return $d(`#${key}PostBtn`).style.opacity='0'
            }}
            onMouseLeave={()=>
                {   
                    return(
                        $d(`#${key}PostBtn`).style.transitionDuration='1s',
                        $d(`#${key}PostBtn`).style.background='linear-gradient(to left, rgb(225, 225, 225), transparent)'
                        )   
                }
            }
            >
                <img className={s.sliderBtnPostImg} alt='postBtn' src={playIconb} />
            </button>}
        </>
    )
}

export default SliderBtns