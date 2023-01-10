import { Card } from "@mui/material"
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import styles from "../css/CreatePost.module.scss"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postPost } from "../../middlewares/redux/actions/index"

const CreatePost = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (e.target.name !== "title" && e.target.name !== "artist" && e.target.name !== "info" && e.target.name !== "category") {
      console.log('la imagen', e.target.files[0])
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
    artist: '',
    info: '',
    category: [],
    image: null
  });

  const options = [
    {
      slot: 1,
      name: 'Sello Arruinados'
    },
    {
      slot: 2,
      name: 'Música'
    },
    {
      slot: 3,
      name: 'Estudio "La Ruina Records"'
    },
    {
      slot: 4,
      name: 'En vivo'
    },
    {
      slot: 5,
      name: 'App y descargables'
    },
    {
      slot: 6,
      name: 'Literatura'
    },
    {
      slot: 7,
      name: 'Series'
    }
  ]

  const checkbox = (e) => {
    if (data.category.includes(e.target.value)) {
      data.category = data.category.filter((id) => id !== e.target.value);
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


  const submit = (e)=> {
    e.preventDefault()
    console.log('inputs data: ', data)
    let formData = new FormData();
    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("artist", data.artist);
    formData.append("info", data.info);
    formData.append("category", data.category);
    console.log([...formData])
    dispatch(postPost(formData));
    setData({
      title: "",
      artist: '',
      info:'',
      types: [],
      imageVisor: null,
      imageSlider: null,
    });
  }

    return (
      <div className={styles.createBody}>
      <div className={styles.CreateProduct}>
      <Card>
        <Title title="Nuevo Post"/>
        <h1>Crear un Nuevo Post</h1>
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
              required
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
            <label>Imagen del Visor</label>
            <br></br>
            <input
              type="file"
              name="imageVisor"
              onChange={handleInputChange}
            />
          </p>
          <p>
            <label>Imagen del Slider</label>
            <br></br>
            <input
              type="file"
              name="imageSlider"
              onChange={handleInputChange}
            />
          </p>
        </div>
        <div>
          <h1>Categoria</h1>
          <div className={styles.types}>
            {options?.map((t) => (
              <div key={t.slot}>
                <input
                  type="checkbox"
                  name={t.name}
                  value={t.slot}
                  id={t.slot}
                  onChange={(e) => checkbox(e)}
                />
                <label htmlFor={t.slot}>{t.name}</label>
                {t.slot % 4 === 0 ? <br /> : null}
              </div>
            ))}
            
          </div>
          <input type="submit" value="Create" className={styles.submit} />
        </div>
      </form>
      </Card>
      </div>
      </div>
    )
}
  
export default CreatePost