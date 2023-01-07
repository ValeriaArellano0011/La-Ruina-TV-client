import s from './css/GoogleAuth.module.css'
import googleIcon from '../../design/google-icon.png'

export default function GoogleSignUp(){
    const googleAuth = () => {
        window.open('http://localhost:3001/auth/google/callback',
        '_self'
        )
    }
    return (
        <div >
            <ul className={s.contGoogleLogIn}>
            <button className={s.googleBtn} onClick={googleAuth}>
                <ul className={s.btnGoogleLogIn}>
                    <li><img src={googleIcon} alt="GoogleLogIn" width='30'/></li>
                    <li><span>Sign up with Google</span></li>
                </ul>
            </button>
            </ul>
        </div>
    )
}