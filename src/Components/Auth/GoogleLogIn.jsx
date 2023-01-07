import s from './css/GoogleLogIn.module.css'

export default function GoogleLogIn(){
    const googleAuth = () => {
        window.open('http://localhost:3001/auth/google/callback',
        '_self'
        )
    }
    return (
        <div className={s.contGoogleLogIn}>
            <button className={s.googleBtn} onClick={googleAuth}>
                <img src="" alt="GoogleLogIn" />
                <span>Log in with Google</span>
            </button>
        </div>
    )
}