import s from './Profile.module.css';
import RequestProfile from '../../admin/RequestProfile/RequestProfile';
import userIcon from '../../../assets/images/user-icon.png';
import { DeleteAccount } from '../../components/DeleteAccount/DeleteAccount';
import { $d } from '../../../functions';
import { useSelector } from 'react-redux';

const Profile = () => {
  const currentUser = useSelector(state => state.currentUser)
  const { username, profilePic, role } = currentUser

  return (
    <div >
      <div className={s.dashControlCont}>
        <div className='divProfile'>
        <div className='navFixed'></div>
        <div className={s.profileFather}>
          <div className={s.profileCont}>
            <ul className={s.ulListProfile}>
              <li className={s.liProfile1}>Perfil de</li>
              <li className={s.liProfile2}>
                <h1>{username ? username : "Usuario"}</h1>
              </li>
              <li>
                <img 
                  className={s.userIcon} 
                  referrerPolicy="no-referrer" 
                  src={profilePic ? profilePic : userIcon} 
                  height='100px' 
                  alt="foto de perfil" />
              </li>
              <li className={s.liProfile3}>{role}</li>
            </ul>
          </div>
              <div className={s.buttons}>
                <button className='button1'>Editar cuenta</button><br/>
                <button className='button2' onClick={()=>{return $d('#deleteAccount').style.display='flex'}}>Eliminar cuenta</button>
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
