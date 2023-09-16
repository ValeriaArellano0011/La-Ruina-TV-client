import { $d } from "../../../../functions";

export function logCss(){
    return (
        $d('#slideCanvasCont').style.overflowY="auto",
        $d('.bodyApp').style.transitionDuration="1s",
        $d(`.bodyApp`).style.transform='translateX(0)',
        $d(`.browserBody`).style.height='auto'
    )
}