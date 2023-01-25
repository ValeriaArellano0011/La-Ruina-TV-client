import React, { useEffect } from "react";
import s from "./css/Slider.module.css";
import Visor from "./Visor";
import Footer from "../Footer/Footer";
import Slider from "./Slider";
import { BodyCss } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { InfoCanvas } from '../Utils/InfoCanvas'
import axios from "axios";
import {
  getMedia,
  resetIdYT,
  resetMedia,
  resetOption,
} from "../../middlewares/redux/actions";
import { URL_API } from "../../middlewares/misc/config";

const Browser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMedia());
    dispatch(resetMedia());
    dispatch(resetOption());
    dispatch(resetIdYT());
    BodyCss();
  }, [dispatch]);
  const cardList = useSelector((state) => state.mediaList);
  const categoryList = useSelector((state) => state.categoryList);

  return (
    <div className="browserBody"> 
      {/* ---------------------VISOR--------------------- */}

        <Visor />
        <InfoCanvas />

      {/* ----------------------SORT--------------------- */}
      {/* <Sort /> */}

      {/* --------------------SLIDERS-------------------- */}
      {cardList && cardList.length>0 && (
        <Slider
          title={"Contenido"}
          cardList={cardList}
          style={s}
          id={`s${0}`}
          key={`s${0}`}
        />
      )}

      {
        categoryList.map((category) => {
            const filteredList = cardList?.filter(card => card.categories.includes(category));
            return filteredList?.length ? (
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

      <button onClick={() => {
        axios.post(`${URL_API}/playlist/create`, {id: 2, title: 'arianagrande'})
        .then((res) => console.log(res.data)).catch(error => console.log)
      }
      }>

      </button>
      {cardList?.length > 0 && <Footer />}
    </div>
  );
};

export default Browser;
