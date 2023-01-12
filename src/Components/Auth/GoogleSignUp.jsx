import s from './css/GoogleAuth.module.css'
import googleIcon from '../../design/google-icon.png'

export default function GoogleSignUp(){

    return (
        <div >
            <ul className={s.contGoogleAuth}>
                <button className={s.googleBtn}>
                    <img src={googleIcon} height='40px' className={s.googleImg} alt='sign up with google'/>
                </button>
            </ul>
        </div>
    )
}