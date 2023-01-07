export default function navBack(setPosNav, posNav) {
    if (window.pageYOffset>= 100) {
        setPosNav((window.scrollY-100)/100)
        document.querySelector('.navCont').style.backgroundColor=`rgba(0, 0, 0, ${posNav})`
        document.querySelector('.navCont').style.transitionDuration='0.2'
    }
    else{
        document.querySelector('.navCont').style.background="linear-gradient(to bottom, #010101cf, rgba(255, 255, 255, 0))"
        document.querySelector('.navCont').style.transitionDuration='0.2'
    }
}