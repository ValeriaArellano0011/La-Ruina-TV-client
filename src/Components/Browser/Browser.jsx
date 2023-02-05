import React, { useEffect } from "react";
import s from "./css/Slider.module.css";
import Visor from "./Visor";
import Footer from "../Footer/Footer";
import Slider from "./Slider";
import { ActiveFav, BodyCss } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { InfoCanvas } from '../Utils/InfoCanvas';
import {
  getMedia,
  resetIdYT,
  resetMedia,
  resetOption,
  getAllLikes
} from "../../middlewares/redux/actions";
import { URL_API } from "../../middlewares/misc/config";

const Browser = () => {
  const dispatch = useDispatch();
  const auth = localStorage.getItem('auth');
  const user = JSON.parse(auth);
  const cardList = useSelector((state) => state.mediaList);
  const categoryList = useSelector((state) => state.categoryList);
  
  useEffect(() => {
    dispatch(getMedia());
    dispatch(resetMedia());
    dispatch(resetOption());
    dispatch(resetIdYT());
    // dispatch(getAllLikes(user?.userId));
    BodyCss();
  }, [dispatch]);

  return (
    <div className="browserBody"> 
      {/* ---------------------VISOR--------------------- */}

        <Visor/>
        <InfoCanvas/>

      {/* ----------------------SORT--------------------- */}
      {/* <Sort /> */}

      {/* --------------------SLIDERS-------------------- */}
      {cardList && cardList.length>1 && (
        <Slider
          title={"Contenido"}
          cardList={cardList}
          style={s}
          id={`s${-1}`}
          key={`s${-1}`}
        />
      )}

      {
        categoryList.map((category, index) => {
            const filteredList = cardList?.filter(card => card.categories.includes(category));
            return filteredList?.length ? (
                <Slider
                  title={category}
                  cardList={filteredList}
                  style={s}
                  id={`s${index}`}
                  key={category}
                />
            ) : null;
        })
      }

      {/* ---------------------FOOTER--------------------- */}

      {cardList?.length > 1 && <Footer/>}
    </div>
  );
};

export default Browser;
