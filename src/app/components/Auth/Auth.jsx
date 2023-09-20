import s from './Auth.module.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { auth } from '../../../middlewares/redux/actions/auth';
import { setUserToken } from '../../../middlewares/helpers';

const Auth = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const authToken = params.get('token');
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  
  useEffect(() => {
    if (authToken) {
      setUserToken(authToken);
      dispatch(auth(history));
    }
  }, [currentUser, authToken, dispatch, history]);

  return (
    <div className={s.loaderContainer}>
      <div className='loader'></div>
    </div>
  )
}

export default Auth;