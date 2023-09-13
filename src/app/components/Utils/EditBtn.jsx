import s from './EditBtn.module.css';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import editIcon from '../../../assets/images/edit-icon.png';
import deleteIcon from '../../../assets/images/delete-icon.png';
import { deleteMedia, updateMedia } from '../../../middlewares/redux/actions/admin';

export const EditBtn = (props) => {
    const {connectionId} = props
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <ul className={s.adminRequest}>
            <li className={s.adminBtn}>
            <img src={editIcon} 
            onClick={()=>{
                dispatch(updateMedia(connectionId))
                history.push(`/media/edit/${connectionId}`)
            }} className={s.editImg} alt='edit' width='30px' />
            </li>
            <li className={s.adminBtn}>
            <img src={deleteIcon} onClick={()=>{dispatch(deleteMedia(connectionId)) }} className={s.deleteImg} alt='delete' width='30px' />
            </li>
        </ul>
    )
}