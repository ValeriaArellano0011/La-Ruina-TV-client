import { $d } from "../../../../functions"

export default function navBack(setPosNav, posNav) {
    if (window.pageYOffset>= 100) {
        setPosNav((window.scrollY-100)/100)
        $d('.navCont').style.backgroundColor=`rgba(0, 0, 0, ${posNav})`
        $d('.navCont').style.transitionDuration='0.2'
    }
    else{
        $d('.navCont').style.background="linear-gradient(to bottom, #010101cf, rgba(255, 255, 255, 0))"
        $d('.navCont').style.transitionDuration='0.2'
    }
}