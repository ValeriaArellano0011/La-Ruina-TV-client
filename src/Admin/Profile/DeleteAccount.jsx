import React, {useState} from 'react';
import axios from 'axios';
import s from './css/Profile.module.css';


export const DeleteAccount = (props) => {
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
    <div><h3 style={{fontWeight: '100', marginTop: '80px'}}>Para eliminar tu cuenta, confirma tu Email y tu Contraseña</h3>
      <form>
          <label>
            Email: <br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label> <br/><br/>

          <label>
            Contraseña: <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label> <br/><br/>

          <button type="submit" onClick={handleSubmit}>Eliminar Cuenta</button>
          {error && <p>{error}</p>}
          {success && <p>{success}</p>} <br/><br/>

        </form>
        <button type="cancel" className={s.btnCancelDeleteAccount} onClick={()=>{return document.querySelector('#deleteAccount').style.display='none'}} >Cancelar</button>
    </div>
    );
  }