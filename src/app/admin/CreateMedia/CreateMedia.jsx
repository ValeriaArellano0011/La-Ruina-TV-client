import s from './CreateMedia.module.css';
import styles from "../EditMedia/EditMedia.module.css";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import defaultPreview from '../../../assets/images/ruina-records-logo.png';
import { createMedia } from '../../../middlewares/redux/actions/admin';

const CreateMedia = () => {
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    if (
      e.target.name !== "info" &&
      e.target.name !== "title" &&
      e.target.name !== "artist" &&
      e.target.name !== "categories"
    ) {
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const [data, setData] = useState({
    title: "",
    artist: "",
    info: "",
    category: [],
    genre: [],
    categories: [],
    mediaType: "",
    idLinkYT: "",
    idLinkSPOTY: "",
    urlLinkWEB: "",
    urlLinkDOWNLOAD: "",
  });

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
    if (data.genre.includes(e.target.value)) {
      data.genre = data.genre.filter((name) => name !== e.target.value);
      setData({
        ...data,
        genre: data.genre,
      });
    } else {
      setData({
        ...data,
        genre: [...data.genre, e.target.value],
      });
    }
  };

  const checkboxMT = (e) => {
    if (data.mediaType.includes(e.target.value)) {
      data.mediaType = data.mediaType.filter((name) => name !== e.target.value);
      setData({
        ...data,
        mediaType: data.mediaType,
      });
    } else {
      setData({
        ...data,
        mediaType: [...data.mediaType, e.target.value],
      });
    }
  };

  const [imgSlider, setImgSlider] = useState(null);
  const [imgVisor, setImgVisor] = useState(null);

  const [previewSlider, setPreviewSlider] = useState(null);
  const [previewVisor, setPreviewVisor] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    const formData = {
      artist: data.artist,
      title: data.title,
      info: data.info,
      idLinkYT: data.idLinkYT,
      idLinkSPOTY: data.idLinkSPOTY,
      idLinkDRIVE: data.idLinkDRIVE,
      urlLinkWEB: data.urlLinkWEB,
      urlLinkDOWNLOAD: data.urlLinkDOWNLOAD,
      mediaType: data.mediaType,
      imageSlider: imgSlider,
      imageVisor: imgVisor,
    };

    dispatch(createMedia(formData));

    setData({
      title: "",
      artist: "",
      info: "",
      types: [],
      imageVisor: null,
      imageSlider: null,
      genre: [],
      categories: [],
      idLinkYT: "",
      mediaType: "",
      idLinkSPOTY: "",
      idLinkDRIVE: "",
      urlLinkWEB: "",
      urlLinkDOWNLOAD: "",
    });
  };

  return (
    <div className={s.mainContainer}>
      <div className={styles.createBody}>
        <form onSubmit={submit}>
          <div className='navFixed' />
          <div className={s.cont0} id='cont0'>
            <h1 className={s.createTitle}>Crear un Nuevo Contenido</h1>
            <div className={s.contTitleArtistDesc}>
              <div className={s.divTitleArtistDesc}>
                <p>
                  <label>Titulo</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Título de la publicación"
                    value={data.title}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Artista</label>
                  <input
                    type="text"
                    name="artist"
                    placeholder="Nombre del intérprete"
                    value={data.artist}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Descripción</label>
                  <textarea
                    placeholder="Escribe una breve reseña..."
                    rows="3"
                    minLength='1'
                    type="text"
                    name="info"
                    value={data.info}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </div>
            <div className={s.imgSlrVsr}>
              <p>
                <label>Imagen del Slider</label>
                <br></br>
                <img src={previewSlider ? previewSlider : defaultPreview} alt="visor" height="120px" />
                <br></br>
                <input
                  className={s.inputBtn}
                  style={{ cursor: 'pointer' }}
                  type="file"
                  name="imageSlider"
                  accept="image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = (e) => {
                      const pic = e.target.result;
                      const imageSrc = pic;
                      setImgSlider(imageSrc);
                      setPreviewSlider(reader.result);
                    }
                    reader.readAsDataURL(file);
                  }}
                />
              </p>
              <p>
                <label>Imagen del Visor</label>
                <br></br>
                <img src={previewVisor ? previewVisor : defaultPreview} alt="visor" height="120px" />
                <br></br>
                <input
                  className={s.inputBtn}
                  type="file"
                  name="imageVisor"
                  accept="image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = (e) => {
                      const pic = e.target.result;
                      const imageSrc = pic;
                      setImgVisor(imageSrc);
                      setPreviewVisor(reader.result);
                    }
                    reader.readAsDataURL(file);
                  }}
                />
              </p>
            </div>

          <h1>Detalles del contenido</h1>

          <div className={s.contTitleArtistDesc}>
            <div className={s.divTitleArtistDesc}>
              <p>
                <label>Id del link de YouTube</label>
                <input
                  type="text"
                  name="idLinkYT"
                  value={data.idLinkYT}
                  onChange={(e) =>
                    setData({ ...data, idLinkYT: e.target.value })
                  } />
              </p>
              <p>
                <label>Id del link de Spotify</label>
                <input
                  type="text"
                  name="idLinkSPOTY"
                  value={data.idLinkSPOTY}
                  onChange={(e) =>
                    setData({ ...data, idLinkSPOTY: e.target.value })
                  }
                />
              </p>
              <p>
                <label>url de la Web</label>
                <input
                  type="text"
                  name="urlLinkWEB"
                  value={data.urlLinkWEB}
                  onChange={(e) =>
                    setData({ ...data, urlLinkWEB: e.target.value })
                  }
                />
              </p>
              <p>
                <label>Link de descarga</label>
                <input
                  type="text"
                  name="urlLinkDOWNLOAD"
                  value={data.urlLinkDOWNLOAD}
                  onChange={(e) =>
                    setData({ ...data, urlLinkDOWNLOAD: e.target.value })
                  } />
              </p>
            </div>
          </div>
          <label>Tipo de contenido (selecciona uno)</label><br></br>
          <div className={styles.types}>
            {optionsMediaType?.map((t) => (
              <div className={s.tipeMedia} key={`${t.name}-${t.slot}`}>
                <input
                  type="checkbox"
                  name={t.name}
                  value={t.name}
                  id={t.name}
                  onChange={(e) => checkboxMT(e)} />
                <label htmlFor={t.name}>{t.name}</label>
                {t.slot % 4 === 0 ? <br /> : null}
              </div>))}
          </div>
          <br /><label>Género</label><br />
          <div className={styles.types}>
            {optionsGenre?.map((t) => (
              <div className={s.tipeMedia} key={`${t.name}-${t.slot}`}>
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
          <br /><label>Categoria</label><br />
          <div className={styles.types}>
            {optionsCategories?.map((t) => (
              <div className={s.tipeMedia} key={`${t.name}-${t.slot}`}>
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
          <div>
            <input
              type="submit"
              value="Publicar"
              className={styles.submit}
            />
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMedia;
