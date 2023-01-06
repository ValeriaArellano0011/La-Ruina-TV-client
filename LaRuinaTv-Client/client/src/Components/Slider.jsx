import Post from "./Post"
import SliderBtns from "./SliderBtns"

const Slider = (props) =>{
    const tituloSlider = (props.titulo)
    const categoria = (props.categoria)
    const s = (props.style)
    const id = (props.id)

    return(
    <div className={s.sliderCont} >
        <h3>{tituloSlider}</h3>
        <div className={s.sliderCategoria}>
            <div className={s.sliderContItems}>
                <SliderBtns
                    name = {tituloSlider}
                    keyID = {id}
                    categoria = {categoria}
                    style = {s}
                />
                <Post
                    name = {tituloSlider}
                    categoria = {categoria}
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
