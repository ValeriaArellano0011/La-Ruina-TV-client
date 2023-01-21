import s from './css/SearchedMedia.module.css'

export const SearchedMedia = (props) => {
    const {id, title} = props
    return(
        <div  className={s.searchedCont1}>
            <div className={s.searchedCont2}>
                <h3>{id}</h3> <br />
                <h1>{title}</h1>
            </div>
        </div>
    )
}