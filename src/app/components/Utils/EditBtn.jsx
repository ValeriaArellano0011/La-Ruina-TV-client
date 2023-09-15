import s from './EditBtn.module.css';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import editIcon from '../../../assets/images/edit-icon.png';
import deleteIcon from '../../../assets/images/delete-icon.png';
import { deleteMedia } from '../../../middlewares/redux/actions/admin';

export const EditBtn = (props) => {
    const { id } = props
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <ul className={s.adminRequest}>
            <li className={s.adminBtn} onClick={()=>{ history.push(`/media/edit/${id}`) }}>
                <img src={editIcon} className={s.editImg} alt='edit' width='30px'/>
            </li>
            <li className={s.adminBtn} onClick={()=>{dispatch(deleteMedia(id)) }}>
                <img src={deleteIcon} className={s.deleteImg} alt='delete' width='30px'/>
            </li>
        </ul>
    )
}