import s from './SearchedMedia.module.css'
import { Link } from "react-router-dom";


export const SearchedMedia = (props) => {
    const {id, title, img, artist } = props
    return(
        <div className={s.searchedCont1}>
            <div className={s.searchedCont2} style={{backgroundImage: `url(${img})`}}>
                <Link to={`/view/v=${id}`}>
                    <div className={s.divContSearch}>
                        <h2 className={s.titles}>{artist}</h2><br/>
                        <h1 className={s.titles}>{title}</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}