import React from 'react'

export const BackButton = () => {
    return (
        <div>      
            <button onClick={()=>{ return(
                document.querySelector(`.bodyApp`).style.transform='translateX(0)',
                document.querySelector(`.visor`).style.transform='translateX(0)',
                document.querySelector(`.navCont`).style.transitionDuration='.2s',
                document.querySelector(`.bodyApp`).style.transitionDuration='2s',
                document.querySelector(`.navCont`).style.width='100vw',
                document.querySelector(`.navMenu`).style.display='flex',
                document.querySelector(`.browserBody`).style.height='auto',
                document.querySelector(`.browserBody`).style.overflowY='scroll'
        )}}>
            Volver
        </button>
    </div>
  )
}
