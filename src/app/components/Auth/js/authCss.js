import { $d } from "../../../functions"

export function authCss(e){
    if (e === 'togLogIn') return (
        $d('.LogInBody').style.transitionDuration="1s",
        $d('.LogInBody').style.transform="translateY(0)",
        $d('.CreateAccountBody').style.transitionDuration="1s",
        $d('.CreateAccountBody').style.transform="translateY(100vh)",
        $d('#welcomeCont').style.opacity="1"
    )
    if (e === 'cancelCreate') return (
        $d('.CreateAccountBody').style.transitionDuration="1s",
        $d('.CreateAccountBody').style.transform="translateY(100vh)",
        $d('#welcomeCont').style.opacity="1"
    )
    if (e === 'togCreate') return (
        $d('.LogInBody').style.transitionDuration="1s",
        $d('.LogInBody').style.transform="translateY(-100vh)",
        $d('.CreateAccountBody').style.transitionDuration="1s",
        $d('.CreateAccountBody').style.transform="translate(0)",
        $d('#welcomeCont').style.opacity="1"
    )
    if (e === 'cancelLogIn') return (
        $d('.LogInBody').style.transitionDuration="1s",
        $d('.LogInBody').style.transform="translateY(-100vh)",
        $d('#welcomeCont').style.opacity="1"
    )
}
