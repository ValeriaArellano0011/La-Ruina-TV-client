import React, { useEffect } from "react";
import s from "./Browser.module.css";
import Visor from "../../components/MediaVisor/MediaVisor";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/MediaSlider/MediaSlider";
import { BodyCss } from "../../../functions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { InfoCanvas } from '../../components/Utils/InfoCanvas';
import {
  resetIdYT,
  resetOption,
  } from "../../../middlewares/redux/actions";
import { getMedia, resetMedia } from "../../../middlewares/redux/actions/media";
import { getUserToken } from "../../../middlewares/helpers";

const Browser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = getUserToken();
  const currentUser = useSelector((state) => state.currentUser);
  const mediaList = useSelector((state) => state.mediaList);
  const categoryList = useSelector((state) => state.categoryList);

  useEffect(()=>{
    dispatch(resetOption())
  },[dispatch])

  useEffect(()=>{
    !(userToken?.length && !currentUser)?? history.push(`/auth?token=${userToken}`);
  },[dispatch, currentUser, userToken, history])

  useEffect(() => {
    dispatch(getMedia());
    dispatch(resetMedia());
    dispatch(resetIdYT());
    BodyCss();
  }, [dispatch]);

  return (
    <div className="browserBody"> 
      {/* ---------------------VISOR--------------------- */}

        <Visor/>
        <InfoCanvas/>

      {/* --------------------SLIDERS-------------------- */}
      {mediaList?.length && (
        <Slider
          title={"Contenido"}
          mediaList={mediaList}
          style={s}
          id={`s${-1}`}
          key={`s${-1}`}
        />
      )}

      {
        categoryList.map((category, index) => {
            const filteredList = mediaList?.filter(card => card.categories?.includes(category));
            return filteredList?.length? (
                <Slider
                  title={category}
                  mediaList={filteredList}
                  style={s}
                  id={`s${index}`}
                  key={category}
                />
            ) : null;
        })
      }

      {/* ---------------------FOOTER--------------------- */}

      {mediaList?.length > 1 && <Footer/>}
    </div>
  );
};

export default Browser;
