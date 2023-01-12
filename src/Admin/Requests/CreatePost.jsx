import { Card } from "@mui/material";
import { Title } from "react-admin";
import CardContent from "@mui/material/CardContent";
import styles from "../css/CreatePost.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../middlewares/redux/actions/index";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleInputChange = (e) => {
    if (
      e.target.name !== "title" &&
      e.target.name !== "artist" &&
      e.target.name !== "info" &&
      e.target.name !== "category"
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

  const [data, setData] = useState({
    title: "",
    artist: "",
    info: "",
    category: [],
    genre: [],
    category: [],
    idLinkYT: "",
  });

  const optionsGenre = [
    {
      slot: 1,
      name: "Jazz",
    },
    {
      slot: 2,
      name: "Pop",
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
      name: "electrónica",
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

  const optionsCategory = [
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
    if (data.category.includes(e.target.value)) {
      data.category = data.category.filter((name) => name !== e.target.value);
      setData({
        ...data,
        category: data.category,
      });
    } else {
      setData({
        ...data,
        category: [...data.category, e.target.value],
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

  const [imgSlider, setImgSlider] = useState(null);
  const [imgVisor, setImgVisor] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("imageSlider", imgSlider);
    formData.append("imageVisor", imgVisor);
    formData.append("title", data.title);
    formData.append("artist", data.artist);
    formData.append("info", data.info);
    formData.append("category", data.category);
    formData.append("genre", data.genre);
    formData.append("category", data.category);
    formData.append("idYT", data.idLinkYT);
    dispatch(postPost(formData));
    setData({
      title: "",
      artist: "",
      info: "",
      types: [],
      imageVisor: null,
      imageSlider: null,
      genre: [],
      category: [],
      idLinkYT: "",
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
                <input
                  type="file"
                  name="file"
                  onChange={(e) => setImgSlider(e.target.files[0])}
                />
              </p>
              <p>
                <label>Imagen del Visor</label>
                <br></br>
                <input
                  type="file"
                  name="file"
                  onChange={(e) => setImgVisor(e.target.files[0])}
                />
              </p>
              <p>
                <label>Id del link de YouTube</label>
                <br></br>
                <input
                  type="text"
                  name="idLinkYT"
                  value={data.idLinkYT}
                  onChange={(e) =>
                    setData({ ...data, idLinkYT: e.target.value })
                  }
                />
              </p>
              <div>
              <h1>Categoria</h1>
              <div className={styles.types}>
                {optionsCategory?.map((t) => (
                  <div key={`${t.name}-${t.slot}`}>
                    <input
                      type="checkbox"
                      name={t.name}
                      value={t.name}
                      id={t.name}
                      onChange={(e) => checkboxCat(e)}
                    />
                    <label htmlFor={t.name}>{t.name}</label>
                    { t.slot % 4 === 0 ? <br /> : null }
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
                    { t.slot % 4 === 0 ? <br /> : null }
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

export default CreatePost;
