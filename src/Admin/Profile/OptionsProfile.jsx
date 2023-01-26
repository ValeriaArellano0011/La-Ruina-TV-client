import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RequestProfile from '../Requests/RequestProfile';
import { useSelector } from 'react-redux';
import s from './css/Profile.module.css';
import userIcon from '../../design/user-icon.png';

const OptionsProfile = () => {
    const [ userAlias, setUserAlias ] = useState('')
    const [ userPicGoogle, setUserPicGoogle ] = useState('')
    const currentUser = useSelector(state=>state.currentUser)
    const rolUser = useSelector(state=>state.rolUser)
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;


    {/* aqui */}

    function DeleteAccount(props) {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(null);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.delete(`/delete-account/${props.userId}`, {
            data: {email, password},
          });
          setSuccess(res.data.msg);
        } catch (err) {
          setError(err.response.data.msg);
        }
      }

      return (
        <form>

            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <button type="submit" onClick={handleSubmit}>Eliminar Cuenta</button>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}

          </form>
      );
    }

    {/* aqui */}






    useEffect(() => {
      if (user) {
        setUserAlias(user.userAlias)
        if(user.googlePic){
          setUserPicGoogle(user.googlePic)
          console.log(user.googlePic)
        }
      }
  }, [user]);
    return (
      <div className='dashControlCont'>
        <div className='divProfile'>
        <div className='navFixed' ></div>
          <div className={s.profileCont}>
            <ul className={s.ulListProfile}>
              <li className={s.liProfile1}>Perfil de</li>
              <li className={s.liProfile2}><h1>{userAlias ? userAlias : currentUser.userAlias}</h1></li>
              <li><img className={s.userIcon} referrerPolicy="no-referrer" src={userPicGoogle ? userPicGoogle : userIcon} height='100px' alt="foto de perfil" /></li>
              <li className={s.liProfile3}>{rolUser}</li>
            </ul>
          </div>

          {/* aqui */}

          

          {/* aqui */}

          <ul>
            <li>
              <RequestProfile/>
            </li>
          </ul>
        </div>
      </div>
      )
}

export default {OptionsProfile}
