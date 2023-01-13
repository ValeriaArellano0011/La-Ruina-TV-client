import React, { useEffect } from "react";
import s from "./css/Slider.module.css";
import Visor from "./Visor";
import Footer from "../Utils/Footer";
import Slider from "./Slider";
import Sort from "../Utils/Sort";
import { BodyCss } from "../../functions/BodyCss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getPosts,
  resetIdYT,
  resetMedia,
  resetOption,
} from "../../middlewares/redux/actions";

const Browser = () => {
  BodyCss();
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.postList);
  const categoryList = useSelector((state) => state.categoryList);
  //const sliderCategoria = (categories) => cardList.filter(e=> {return e.categories.find(el=>el===categoryList)})
  useEffect(() => {
    dispatch(resetOption());
    dispatch(resetMedia());
    dispatch(resetIdYT());
    dispatch(getPosts());
  }, [dispatch]);
  useEffect(() => {
    //dispatch(getCategorias(visorList))
  }, [cardList, dispatch]);

  return (
    <div className="browserBody">
      {/* ---------------------VISOR--------------------- */}
      <Visor />

      {/* ----------------------SORT--------------------- */}
      <Sort />

      {/* --------------------SLIDERS-------------------- */}
      {cardList && (
        <Slider
          title={"Contenido"}
          cardList={cardList}
          style={s}
          id={`s`}
          key={`s${0}`}
        />
      )}

      {
        categoryList.map((category) => {
            const filteredList = cardList.filter(card => card.categories.includes(category));
            return filteredList.length ? (
                <Slider
                  title={category}
                  cardList={filteredList}
                  style={s}
                  id={`s${category}`}
                  key={category}
                />
            ) : null;
        })
      }

      {/* ---------------------FOOTER--------------------- */}

      {cardList.length > 1 && <Footer />}
    </div>
  );
};

export default Browser;
