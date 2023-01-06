export default function handlerOptionsProfileBtns(){
        document.querySelector(`.navCont`).style.width='0px'
        document.querySelector(`.navMenu`).style.display='none'
        document.querySelector(`.bodyApp`).style.transitionDuration='2s'
        document.querySelector(`.bodyApp`).style.transform='translateX(-100vw)'
        document.querySelector(`.browserBody`).style.height='100vh'
        document.querySelector(`.browserBody`).style.overflowY='hidden'
}