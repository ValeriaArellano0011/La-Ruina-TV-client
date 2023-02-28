import React, {useState, useEffect} from 'react';
import RequestProfile from '../../Admin/Requests/RequestProfile';
import { useSelector } from 'react-redux';
import s from './css/Profile.module.css';
import userIcon from '../../design/user-icon.png';
import { DeleteAccount } from './DeleteAccount';

const Profile = () => {
  const [ userAlias, setUserAlias ] = useState('')
  const [ userPicGoogle, setUserPicGoogle ] = useState('')
  const currentUser = useSelector(state=>state.currentUser)
  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;

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
    <div >
      <div className='dashControlCont'>
        <div className='divProfile'>
        <div className='navFixed' ></div>
        <div className={s.profileFather}>
          <div className={s.profileCont}>
            <ul className={s.ulListProfile}>
              <li className={s.liProfile1}>Perfil de</li>
              <li className={s.liProfile2}>
                <h1>{userAlias ? userAlias : currentUser?.userAlias? currentUser.userAlias : "Usuario"}</h1>
              </li>
              <li>
                <img 
                  className={s.userIcon} 
                  referrerPolicy="no-referrer" 
                  src={userPicGoogle ? userPicGoogle : userIcon} 
                  height='100px' 
                  alt="foto de perfil" />
              </li>
              <li className={s.liProfile3}>{currentUser? currentUser.subs : 'Free Plan'}</li>
            </ul>
          </div>
              <div className={s.buttons}>
                <button className='button1'>Editar cuenta</button><br/>
                <button className='button2' onClick={()=>{return document.querySelector('#deleteAccount').style.display='flex'}} >Eliminar cuenta</button>
              </div>
          <ul>
            <li>
              <RequestProfile/>
            </li>
          </ul>
          <div className={s.deleteAccount} id={'deleteAccount'}>
            <DeleteAccount/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile
