export function authCss(e){
    if (e === 'togLogIn') return (
        document.querySelector('.LogInBody').style.transitionDuration="1s",
        document.querySelector('.LogInBody').style.transform="translateY(0)",
        document.querySelector('.CreateAccountBody').style.transitionDuration="1s",
        document.querySelector('.CreateAccountBody').style.transform="translateY(100vh)",
        document.querySelector('#welcomeCont').style.opacity="1"
    )
    if (e === 'cancelCreate') return (
        document.querySelector('.CreateAccountBody').style.transitionDuration="1s",
        document.querySelector('.CreateAccountBody').style.transform="translateY(100vh)",
        document.querySelector('#welcomeCont').style.opacity="1"
    )
    if (e === 'togCreate') return (
        document.querySelector('.LogInBody').style.transitionDuration="1s",
        document.querySelector('.LogInBody').style.transform="translateY(-100vh)",
        document.querySelector('.CreateAccountBody').style.transitionDuration="1s",
        document.querySelector('.CreateAccountBody').style.transform="translate(0)",
        document.querySelector('#welcomeCont').style.opacity="1"
    )
    if (e === 'cancelLogIn') return (
        document.querySelector('.LogInBody').style.transitionDuration="1s",
        document.querySelector('.LogInBody').style.transform="translateY(-100vh)",
        document.querySelector('#welcomeCont').style.opacity="1"
    )
}
