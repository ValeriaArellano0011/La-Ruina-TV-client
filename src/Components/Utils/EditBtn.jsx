import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import editIcon from '../../design/edit-icon.png'
import deleteIcon from '../../design/delete-icon.png'
import { getDeleteMedia, getEditMedia } from "../../middlewares/redux/actions"
import s from './css/EditBtn.module.css'

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