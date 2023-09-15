import s from "./EditMedia.module.css";
import React from "react";
import { useParams } from "react-router-dom";

import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMedia } from "../../../middlewares/redux/actions/admin";
import { getMediaById } from "../../../middlewares/redux/actions/media";
import { RenderDriveImage } from "../../../functions/RenderDriveImage";

const EditMedia = () => {
  const dispatch = useDispatch();
  const infoDetailViewer = useSelector(state => state.infoDetailViewer);
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    artist: "",
    info: "",
    types: [],
    imageVisor: "",
    imageSlider: "",
    genre: [],
    categories: [],
    idLinkYT: "",
    mediaType: [],
    idLinkSPOTY: "",
    idLinkDRIVE: "",
    urlLinkWEB: "",
    urlLinkDOWNLOAD: ""
  });
  const { imageSlider, imageVisor, title, artist, info, idLinkSPOTY, idLinkDRIVE, urlLinkWEB, urlLinkDOWNLOAD } = infoDetailViewer;
  
  useEffect(() => {
    dispatch(getMediaById(id));
    setData({
      title,
      artist,
      info,
      types: [],
      imageVisor: imageVisor,
      imageSlider: imageSlider,
      genre: [],
      categories: [],
      idLinkYT: "",
      mediaType: [],
      idLinkSPOTY,
      idLinkDRIVE,
      urlLinkWEB,
      urlLinkDOWNLOAD
    });
  }, [dispatch, id, imageSlider, imageVisor, title, artist, info, idLinkSPOTY, idLinkDRIVE, urlLinkWEB, urlLinkDOWNLOAD ]);

  
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "imageSlider":
        setData({
          ...data,
          [e.target.name]: e.target.files[0],
        });
        break;
      case "imageVisor":
        setData({
          ...data,
          [e.target.name]: e.target.files[0],
        });
        break;
      default:
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
    }
  };

  const optionsMediaType = [
    {
      slot: 1,
      name: "musica",
    },
    {
      slot: 2,
      name: "serie",
    },
    {
      slot: 3,
      name: "app",
    },
    {
      slot: 4,
      name: "libro",
    },
  ];

  const optionsGenre = [
    {
      slot: 1,
      name: "jazz",
    },
    {
      slot: 2,
      name: "pop",
    },
    {
      slot: 3,
      name: "punk",
    },
    {
      slot: 4,
      name: "metal",
    },
    {
      slot: 5,
      name: "electronica",
    },
    {
      slot: 6,
      name: "post-punk",
    },
    {
      slot: 7,
      name: "blues",
    },
    {
      slot: 8,
      name: "rock",
    },
    {
      slot: 9,
      name: "otro",
    },
  ];

  const optionsCategories = [
    {
      slot: 1,
      name: "Sello Arruinados",
    },
    {
      slot: 2,
      name: "Música",
    },
    {
      slot: 3,
      name: 'Estudio "La Ruina Records"',
    },
    {
      slot: 4,
      name: "En vivo",
    },
    {
      slot: 5,
      name: "App y descargables",
    },
    {
      slot: 6,
      name: "Literatura",
    },
    {
      slot: 7,
      name: "Series",
    },
  ];

  const checkboxCat = (e) => {
    if (data.categories.includes(e.target.value)) {
      data.categories = data.categories.filter(
        (name) => name !== e.target.value
      );
      setData({
        ...data,
        categories: data.categories,
      });
    } else {
      setData({
        ...data,
        categories: [...data.categories, e.target.value],
      });
    }
  };

  const checkboxGen = (e) => {

  };

  const checkboxMT = (e) => {

  };

  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    dispatch(updateMedia(formData));
  };

  return (
    <div className={s.mainContainer}>
      <div className={s.editMediaContainer}>
          <h1 className={s.createTitle}>Modificar Media</h1>
          <CardContent>Rellena el siguiente formulario</CardContent>
          {infoDetailViewer ?
            (<form onSubmit={submit}>
              <div>
                <p>
                  <label>Titulo</label>
                  <br></br>
                  <input
                    type="text"
                    name="title"
                    value={data?.title}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Artista</label>
                  <br></br>
                  <input
                    type="text"
                    name="artist"
                    value={data?.artist}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Descripción</label>
                  <br></br>
                  <input
                    type="text"
                    name="info"
                    value={data?.info}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Imagen del Slider</label>
                  <br></br>
                  <img src={RenderDriveImage(imageSlider)} alt="slider" width="200px" height="100px" />
                  <br></br>
                  <input
                    type="file"
                    name="imageSlider"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                      }
                      reader.readAsDataURL(file);
                    }}
                  />
                </p>
                <p>
                  <label>Imagen del Visor</label>
                  <br></br>
                  <img src={RenderDriveImage(imageVisor)} alt="visor" width="200px" height="100px" />
                  <br></br>
                  <input
                    type="file"
                    name="imageVisor"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                      }
                      reader.readAsDataURL(file);
                    }}
                  />
                </p>
                <h1>Media Type</h1>
                <div className={s.types}>
                  {optionsMediaType?.map((t) => (
                    <div className={s.tipeMedia} key={`${t.name}-${t.slot}`} >
                      <input
                        type="checkbox"
                        name={t.name}
                        value={t.name}
                        id={t.name}
                        onChange={(e) => checkboxMT(e)} />
                      <label htmlFor={t.name}>{t.name}</label>
                      {t.slot % 4 === 0 ? <br /> : null}
                    </div>
                  ))}
                </div>
                <p>
                  <label>Id del link de YouTube</label>
                  <br></br>
                  <input
                    type="text"
                    name="idLinkYT"
                    value={data?.idLinkYT}
                    onChange={(e) =>
                      setData({ ...data, idLinkYT: e.target.value })
                    } />
                </p>
                <p>
                  <label>Id del link de Spotify</label>
                  <br></br>
                  <input
                    type="text"
                    name="idLinkSPOTY"
                    value={data?.idLinkSPOTY}
                    onChange={(e) =>
                      setData({ ...data, idLinkSPOTY: e.target.value })
                    }
                  />
                </p>
                <p>
                  <label>Id del link de Drive</label>
                  <br></br>
                  <input
                    type="text"
                    name="idLinkDRIVE"
                    value={data?.idLinkDRIVE}
                    onChange={(e) =>
                      setData({ ...data, idLinkDRIVE: e.target.value })
                    }
                  />
                </p>
                <p>
                  <label>url de la Web</label>
                  <br></br>
                  <input
                    type="text"
                    name="urlLinkWEB"
                    value={data?.urlLinkWEB}
                    onChange={(e) =>
                      setData({ ...data, urlLinkWEB: e.target.value })
                    }
                  />
                </p>
                <p>
                  <label>Link de descarga</label>
                  <br></br>
                  <input
                    type="text"
                    name="urlLinkDOWNLOAD"
                    value={data?.urlLinkDOWNLOAD}
                    onChange={(e) =>
                      setData({ ...data, urlLinkDOWNLOAD: e.target.value })
                    }
                  />
                </p>
                <div>
                  <h1>Categoria</h1>
                  <div className={s.types}>
                    {optionsCategories?.map((t) => (
                      <div key={`${t.name}-${t.slot}`} className={s.tipeMedia}>
                        <input
                          type="checkbox"
                          name={t.name}
                          value={t.name}
                          id={t.name}
                          onChange={(e) => checkboxCat(e)}
                        />
                        <label htmlFor={t.name}>{t.name}</label>
                        {t.slot % 4 === 0 ? <br /> : null}
                      </div>
                    ))}
                  </div>

                  <h1>Género</h1>
                  <div className={s.types}>
                    {optionsGenre?.map((t) => (
                      <div key={`${t.name}-${t.slot}`} className={s.tipeMedia}>
                        <input
                          type="checkbox"
                          name={t.name}
                          value={t.name}
                          id={t.name}
                          onChange={(e) => checkboxGen(e)}
                        />
                        <label htmlFor={t.name}>{t.name}</label>
                        {t.slot % 4 === 0 ? <br /> : null}
                      </div>
                    ))}
                  </div>
                  <input
                    type="submit"
                    value="Actualizar"
                    className={s.submit}
                  />
                </div>
              </div>
            </form>) : null}
      </div>
    </div>
  );
};

export default EditMedia;
