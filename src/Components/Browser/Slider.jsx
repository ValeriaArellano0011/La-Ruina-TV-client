import Media from "../Media/Media"
import SliderBtns from "../Utils/SliderBtns"

const Slider = (props) => {
    const sliderTitle = (props.title)
    const cardList = (props.cardList)
    const s = (props.style)
    const id = (props.id)

    return(
        <div className={s.sliderCont} >
            <h3>{sliderTitle}</h3>
            <div className={s.slidercategories}>
                <div className={s.sliderContItems}>
                    <SliderBtns
                        name = {sliderTitle}
                        keyID = {id}
                        categories = {cardList}
                        style = {s} />
                    <Media
                        cardList = {cardList}
                        keyID = {id}
                        key = {`${sliderTitle}Sldr`}
                        style = {s} />
                </div>
            </div>
        </div>
    )
}
export default Slider
