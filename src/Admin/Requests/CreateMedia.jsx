import { Card } from "@mui/material";
import { Title } from "react-admin";
import CardContent from "@mui/material/CardContent";
import styles from "../css/CreatePost.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postMedia } from "../../middlewares/redux/actions/index";
import defaultVideo from '../../design/laruina-intro.mp4';
import defaultImage from '../../design/defaultImage.jpg'
import React from "react";
import defaultPreview from '../../design/ruina-records-logo.png'
const CreateMedia = () => {
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    if (
      e.target.name !== "title" &&
      e.target.name !== "artist" &&
      e.target.name !== "info" &&
      e.target.name !== "categories"
    ) {
      console.log("la imagen", e.target.files[0]);
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

  const [res, setRes] = useState(null)

  const [data, setData] = useState({
    title: "",
    artist: "",
    info: "",
    category: [],
    genre: [],
    categories: [],
    idLinkYT: "",
    mediaType: [],
    idLinkSPOTY: "",
    audioFile: "",
    urlLinkWEB: "",
    urlLinkDOWNLOAD: "",
    audioFile: null,
    videoFile: null
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
  const [audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const [previewSlider, setPreviewSlider] = useState(null);
  const [previewVisor, setPreviewVisor] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    console.log(videoFile)

    let formData = new FormData();
    if(imgSlider === null && imgVisor === null){
      formData.append('imageSlider', defaultImage)
    }
    if (imgSlider !== null) {
      formData.append("imageSlider", imgSlider);
    }
    if (imgVisor !== null) {
      formData.append("imageVisor", imgVisor);
    }
    if (audioFile !== null) {
      formData.append("audioFile", audioFile);
    }
    if (videoFile !== null) {
      formData.append("videoFile", videoFile);
    }
    formData.append("title", data.title);
    formData.append("artist", data.artist);
    formData.append("info", data.info);
    formData.append("categories", data.categories);
    formData.append("genre", data.genre);
    formData.append("idLinkYT", data.idLinkYT);
    formData.append("mediaType", data.mediaType);
    formData.append("idLinkSPOTY", data.idLinkSPOTY);
    formData.append("idLinkDRIVE", data.idLinkDRIVE);
    formData.append("urlLinkWEB", data.urlLinkWEB);
    formData.append("urlLinkDOWNLOAD", data.urlLinkDOWNLOAD);

    dispatch(postMedia(formData));
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
      mediaType: [],
      idLinkSPOTY: "",
      idLinkDRIVE: "",
      urlLinkWEB: "",
      urlLinkDOWNLOAD: "",
    });
  };

  return (
    <div className={styles.createBody}>
      <div className={styles.CreateProduct}>
        <Card>
          <Title title="Nuevo Post" />
          <h1 className={styles.createTitle}>Crear un Nuevo Post</h1>
          <CardContent>Rellena el siguiente formulario</CardContent>
          <form onSubmit={submit}>
            <div>
              <p>
                <label>Titulo</label>
                <br></br>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Artista</label>
                <br></br>
                <input
                  type="text"
                  name="artist"
                  value={data.artist}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Descripción</label>
                <br></br>
                <input
                  type="text"
                  name="info"
                  value={data.info}
                  onChange={handleInputChange}
                />
              </p>
              <p>
                <label>Imagen del Slider</label>
                <br></br>
                <img src={previewSlider ? previewSlider : defaultPreview} alt="visor" width="200px" height="100px" />
                <br></br>
                <input
                  type="file"
                  name="imageSlider"
                  accept="image/jpeg"
                  onChange={(e) => {
                    setImgSlider(e.target.files[0])
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreviewSlider(reader.result);
                    }
                    reader.readAsDataURL(file);
                  }}
                />
              </p>
              <p>
                <label>Imagen del Visor</label>
                <br></br>
                <img src={previewVisor ? previewVisor : defaultPreview} alt="visor" width="200px" height="100px" />
                <br></br>
                <input
                  type="file"
                  name="imageVisor"
                  accept="image/jpeg"
                  onChange={(e) => {
                    setImgVisor(e.target.files[0])
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreviewVisor(reader.result);
                    }
                    reader.readAsDataURL(file);
                  }}
                />
              </p>
              <h1>Media Type</h1>
              <div className={styles.types}>
                {optionsMediaType?.map((t) => (
                  <div key={`${t.name}-${t.slot}`}>
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
                  value={data.idLinkYT}
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
                  value={data.idLinkSPOTY}
                  onChange={(e) =>
                    setData({ ...data, idLinkSPOTY: e.target.value })
                  }
                />
              </p>
              <p>
                <label>Archivo de audio</label>
                <br></br>
                <input
                  type="file"
                  name="audioFile"
                  onChange={(e) =>
                    setAudioFile(e.target.files[0])
                  }
                />
              </p>
              <p>
                <label>Archivo de video</label>
                <br></br>
                <input
                  type="file"
                  name="videoFile"
                  onChange={(e) =>
                    setVideoFile(e.target.files[0])
                  }
                />
              </p>
              <p>
                <label>url de la Web</label>
                <br></br>
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
                <br></br>
                <input
                  type="text"
                  name="urlLinkDOWNLOAD"
                  value={data.urlLinkDOWNLOAD}
                  onChange={(e) =>
                    setData({ ...data, urlLinkDOWNLOAD: e.target.value })
                  }
                />
              </p>
              <div>
                <h1>Categoria</h1>
                <div className={styles.types}>
                  {optionsCategories?.map((t) => (
                    <div key={`${t.name}-${t.slot}`}>
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
                <div className={styles.types}>
                  {optionsGenre?.map((t) => (
                    <div key={`${t.name}-${t.slot}`}>
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
                  value="Publicar"
                  className={styles.submit}
                />
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateMedia;
