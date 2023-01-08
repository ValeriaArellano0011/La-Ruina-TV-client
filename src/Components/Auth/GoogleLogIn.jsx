import s from './css/GoogleAuth.module.css'
import {GoogleLogin} from 'react-google-login';

export default function GoogleLogIn(){
    const responseGoogle = (res) => {
        console.log(res)
    }
    return (
        <div >
            <ul className={s.contGoogleAuth}>
                    <GoogleLogin
                    className={s.googleBtn}
                    clientId="123061127373-q8lr46gdr4kokvs7bkt5nol0f2p8evvq.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
            </ul>
        </div>
    )
}