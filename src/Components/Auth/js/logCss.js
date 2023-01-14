export function logCss(){
    return (
        document.querySelector('#slideCanvasCont').style.overflowY="scroll",
        document.querySelector('.bodyApp').style.transitionDuration="1s",
        document.querySelector(`.bodyApp`).style.transform='translateX(0)',
        document.querySelector(`.browserBody`).style.height='auto'
    )
}