import s from './EditBtn.module.css';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getDeleteMedia, getEditMedia } from "../../../middlewares/redux/actions";
import editIcon from '../../../assets/images/edit-icon.png';
import deleteIcon from '../../../assets/images/delete-icon.png';

export const EditBtn = (props) => {
    const {connectionId} = props
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <ul className={s.adminRequest}>
            <li className={s.adminBtn}>
            <img src={editIcon} 
            onClick={()=>{
                dispatch(getEditMedia(connectionId))
                history.push(`/media/edit/${connectionId}`)
            }} className={s.editImg} alt='edit' width='30px' />
            </li>
            <li className={s.adminBtn}>
            <img src={deleteIcon} onClick={()=>{dispatch(getDeleteMedia(connectionId)) }} className={s.deleteImg} alt='delete' width='30px' />
            </li>
        </ul>
    )
}