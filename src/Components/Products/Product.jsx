import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductDetails } from "../../middlewares/redux/actions"
import s from '../Tienda/css/Tienda.module.css'

export default function Product(){
    const dispatch = useDispatch()
    const params = useParams()
    const {id} = params
    const productDetails = useSelector(state=>state.productDetails)
    const {nameMerch, idImg} = productDetails.at(0)
    useEffect(()=>{
        dispatch(getProductDetails(id))
    },[dispatch, id])
    return (
        <div className={s.productCont}>
            <h1>Detalles del producto</h1>
            {productDetails?<img className={s.productImg} src={idImg} alt={nameMerch} />:null}
        </div>
    )
}