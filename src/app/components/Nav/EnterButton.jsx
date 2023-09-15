import s from './EnterButton.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import userIcon from '../../../assets/images/user-icon.png';
import OptionCanvas, { $d } from '../../../functions';
import { getOption } from '../../../middlewares/redux/actions';

export const EnterBtn = () => {
  const dispatch = useDispatch()
  function onClickValue(e){
    return (
      dispatch(getOption(e.target.id)),
      OptionCanvas(e.target.id)
      )}
  return (
    <div
      className={s.enterBtn}
      id='login'
      onClick={(e) => { return(onClickValue(e), $d('#slideCanvasCont').style.overflowY="hidden") }}>
      <img className={s.userIconEnter} src={userIcon} alt='userIcon' width='15px'/>
      Ingresar
    </div>
  )
}
