import { useDispatch } from 'react-redux';
import { getOption } from '../middlewares/redux/actions';
import OptionCanvas from '../functions';

export function HandleOnClickValue(e){
    const dispatch = useDispatch()
    return (
        dispatch(getOption(e.target.id)),
        OptionCanvas(e.target.id)
    )}