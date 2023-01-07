export function authCss(e){
    if (e === 'togLogIn') return(
        document.querySelector('.LogInBody').style.transitionDuration="1s",
        document.querySelector('.LogInBody').style.transform="translateY(0)",
        document.querySelector('.CreateAccountBody').style.transitionDuration="1s",
        document.querySelector('.CreateAccountBody').style.transform="translateY(100vw)"
    )
    if (e === 'cancelCreate') return(
            document.querySelector('.CreateAccountBody').style.transitionDuration="1s",
            document.querySelector('.CreateAccountBody').style.transform="translateY(100vw)"
    )
    if (e === 'togCreate') return (
        document.querySelector('.LogInBody').style.transitionDuration="1s",
        document.querySelector('.LogInBody').style.transform="translateY(-100vw)",
        document.querySelector('.CreateAccountBody').style.transitionDuration="1s",
        document.querySelector('.CreateAccountBody').style.transform="translate(0)"
    )
    if (e === 'cancelLogIn') return (
        document.querySelector('.LogInBody').style.transitionDuration="1s",
        document.querySelector('.LogInBody').style.transform="translateY(-100vw)"
    )
} 