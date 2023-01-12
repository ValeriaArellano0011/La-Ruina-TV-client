import Post from "../Media/Post"
import SliderBtns from "./SliderBtns"

const Slider = (props) =>{
    const tituloSlider = (props.titulo)
    const categories = (props.categories)
    const s = (props.style)
    const id = (props.id)

    return(
    <div className={s.sliderCont} >
        <h3>{tituloSlider}</h3>
        <div className={s.slidercategories}>
            <div className={s.sliderContItems}>
                <SliderBtns
                    name = {tituloSlider}
                    keyID = {id}
                    categories = {categories}
                    style = {s}
                />
                <Post
                    name = {tituloSlider}
                    categories = {categories}
                    keyID = {id}
                    key = {`${tituloSlider}Sldr`}
                    style = {s}
                /> 
            </div>
        </div>
    </div>
    )
}
export default Slider
