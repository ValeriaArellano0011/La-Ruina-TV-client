import Media from "../Media/Media"
import SliderBtns from "../Utils/SliderBtns"

const Slider = (props) => {
    const sliderTitle = (props.title)
    const cardList = (props.cardList)
    const s = (props.style)
    const id = (props.id)

    return(
        <div className={s.sliderCont}


        >
            <h3>{sliderTitle}</h3>
            <div 
                className={s.slidercategories}
                onMouseEnter={()=>
                    {
                        return(
                            document.querySelector(`#${id}PostBtn`).style.transitionDuration='1s',
                            document.querySelector(`#${id}PostBtn`).style.cursor='pointer',
                            document.querySelector(`#${id}PostBtn`).style.opacity='1',
                            document.querySelector(`#${id}PrevBtn`).style.opacity='1',
                            document.querySelector(`#${id}PostBtn`).style.background='linear-gradient(to left, rgb(255, 255, 255), transparent)'
                            )
                    }
                }
                onMouseLeave={()=>
                    {
                        return(
                            document.querySelector(`#${id}PostBtn`).style.transitionDuration='1s',
                            document.querySelector(`#${id}PrevBtn`).style.opacity='.7',
                            document.querySelector(`#${id}PostBtn`).style.opacity='.7',
                            document.querySelector(`#${id}PostBtn`).style.background='linear-gradient(to left, rgb(255, 255, 255), transparent)'
                            )   
                    }
                }
            >
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
