import React, { useState } from 'react';
import playIconb from '../../design/ruinatv-icon-play-b.png'

const SliderBtns = (props) => {

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
                        document.querySelector(`#${key}PrevBtn`).style.transitionDuration='1s',
                        document.querySelector(`#${key}PrevBtn`).style.cursor='pointer',
                        document.querySelector(`#${key}PrevBtn`).style.opacity='1',
                        document.querySelector(`#${key}PrevBtn`).style.background='linear-gradient(to right, rgb(0, 0, 0), transparent)'
                        )
                }
            }
            onMouseLeave={()=>
                {
                    return(
                        document.querySelector(`#${key}PrevBtn`).style.transitionDuration='1s',
                        document.querySelector(`#${key}PrevBtn`).style.opacity='0.5',
                        document.querySelector(`#${key}PrevBtn`).style.background='linear-gradient(to right, rgb(255, 255, 255), transparent)'
                        )   
                }
            }
            onClick={()=>
                {
                    setPosi(i-k)
                    setPosn(n-k)

                    if (n>=0){
                        return (
                            document.querySelector(`#${key}ListaItems`).style.transform=`translate(${(n)}px`,
                            document.querySelector(`#${key}ListaItems`).style.transitionDuration='1s',
                            document.querySelector(`#${key}PrevBtn`).style.transform='translate(-65px)',
                            document.querySelector(`#${key}PrevBtn`).style.transitionDuration='0.1s'
                            )}
                            
                    else{
                        return (
                            document.querySelector(`#${key}ListaItems`).style.transform=`translate(${(n)}px`,
                            document.querySelector(`#${key}ListaItems`).style.transitionDuration='1s',
                            document.querySelector(`#${key}PostBtn`).style.display='block'
                        )}
                    }
                }                       
            >
            <img className={s.sliderBtnPrevImg} alt='prevBtn' src={playIconb} />
            </button>
            <button 
            className={`${s.sliderPostBtn}`}
            id={`${key}PostBtn`}
            onClick={()=>{
                setPosi(i+k)
                setPosn(n+k)
                if (i<0 && i>(props.categoria.length-1)*k){
                return (
                    document.querySelector(`#${key}ListaItems`).style.transform=`translate(${i}px)`,
                    document.querySelector(`#${key}ListaItems`).style.transitionDuration='1s',
                    document.querySelector(`#${key}PrevBtn`).style.transform='translate(0)',
                    document.querySelector(`#${key}PrevBtn`).style.transitionDuration='1s'
                    
                )}
                    
                if (i===(props.categoria.length-1)*k){
                return (
                    document.querySelector(`#${key}ListaItems`).style.transform=`translate(${i}px)`,
                    document.querySelector(`#${key}ListaItems`).style.transitionDuration='1s',
                    document.querySelector(`#${key}PostBtn`).style.display="none",
                    document.querySelector(`#${key}PrevBtn`).style.transform='translate(0)',
                    document.querySelector(`#${key}PrevBtn`).style.transitionDuration='1s'

                    )}
                }
            } onMouseEnter={()=>{
                if(props.categoria.length > 1){
                    return(
                        document.querySelector(`#${key}PostBtn`).style.transitionDuration='1s',
                        document.querySelector(`#${key}PostBtn`).style.cursor='pointer',
                        document.querySelector(`#${key}PostBtn`).style.opacity='1',
                        document.querySelector(`#${key}PostBtn`).style.background='linear-gradient(to left, rgb(0, 0, 0), transparent)'

                )}
                if(props.categoria.length === 1){
                    return(
                        document.querySelector(`#${key}PostBtn`).style.display="none",
                        document.querySelector(`#${key}PostBtn`).style.transitionDuration='1s'
                    )
                }
                else return document.querySelector(`#${key}PostBtn`).style.opacity='0'
            }}
            onMouseLeave={()=>
                {   
                    return(
                        document.querySelector(`#${key}PostBtn`).style.opacity='0',
                        document.querySelector(`#${key}PostBtn`).style.transitionDuration='1s',
                        document.querySelector(`#${key}PostBtn`).style.background='linear-gradient(to left, rgb(225, 225, 225), transparent)'
                        )   

                }
            }
            >
                <img className={s.sliderBtnPostImg} alt='postBtn' src={playIconb} />
            </button>
        </>
    )
}

export default SliderBtns