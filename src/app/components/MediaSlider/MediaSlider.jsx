import Media from "../Media/Media"
import SliderBtns from "../Utils/SliderBtns"
import { $d } from "../../../functions"

const Slider = (props) => {
    const sliderTitle = (props.title)
    const cardList = (props.cardList)
    const s = (props.style)
    const id = (props.id)

    return(
        <div className={s.sliderCont}>
            <h3>{sliderTitle}</h3>
            <div 
                className={s.slidercategories}
                onMouseEnter={()=>
                    {
                        if(cardList?.length <= 1){
                            return(
                                $d(`#${id}PostBtn`).style.display="none",
                                $d(`#${id}PostBtn`).style.transitionDuration='1s'
                            )
                        }
                        return(
                            $d(`#${id}PostBtn`).style.transitionDuration='1s',
                            $d(`#${id}PostBtn`).style.cursor='pointer',
                            $d(`#${id}PostBtn`).style.opacity='1',
                            $d(`#${id}PrevBtn`).style.opacity='1',
                            $d(`#${id}PostBtn`).style.background='linear-gradient(to left, rgb(255, 255, 255), transparent)'
                            )
                    }
                }
                onMouseLeave={()=>
                    {
                        return(
                            $d(`#${id}PostBtn`).style.transitionDuration='1s',
                            $d(`#${id}PrevBtn`).style.opacity='0',
                            $d(`#${id}PostBtn`).style.opacity='0',
                            $d(`#${id}PostBtn`).style.background='linear-gradient(to left, rgb(255, 255, 255), transparent)'
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
