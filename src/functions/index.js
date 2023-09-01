/* -------------------CSS------------------- */

const defaultValue = { 
    style: {
        transform: '', 
        opacity: '', 
        filter: '', 
        scale: '', 
        overflowY: '',
        transitionDuration: '',
        transformOrigin: '',
        transformStyle: '',
        transitionTimingFunction: '',
        transformBox: '',
        transitionDelay: '',
        transitionProperty: '',   
    }
}

export const $d = (e) => {
    return document.querySelector(e) || defaultValue
};

export const BodyCss= () => {
    return (
        $d('body').style.overflowY="auto"
    )
}

export default function OptionCanvas(){
    $d('body').style.overflowY="auto"
    $d(`.bodyApp`).style.transitionDuration='2s'
    $d(`.bodyApp`).style.transform='translateX(-100vw)'
    $d(`.browserBody`).style.height='100vh'
    $d(`.browserBody`).style.overflowY='hidden'
    $d(`#optionProfileBtn0`).style.transform='translateX(200px)'
    // $d(`#optionProfileBtn1`).style.transform='translateX(200px)'
    $d(`#optionProfileBtn2`).style.transform='translateX(200px)'
//     $d(`#optionProfileBtn4`).style.transform='translateX(200px)'
    $d(`#optionProfileBtn5`).style.transform='translateX(200px)'
    $d(`#optionProfileBtn6`).style.transform='translateX(200px)'
    $d(`#optionProfileBtn0`).style.scale='0'
    // $d(`#optionProfileBtn1`).style.scale='0'
    $d(`#optionProfileBtn2`).style.scale='0'
    $d(`#optionProfileBtn3`).style.scale='0'
    // $d(`#optionProfileBtn4`).style.scale='0'
    $d(`#optionProfileBtn5`).style.scale='0'
    $d(`#optionProfileBtn6`).style.scale='0'
}

export function OptionProfile(option){
    $d(`#${option}Icon`).style.opacity='1'
    $d(`#${option}Icon`).style.filter='grayscale(.2)'
    $d(`#${option}Icon`).style.filter='drop-shadow(0px 0px 8px rgb(255, 255, 255))'
}

