import { Card } from "@mui/material"
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import styles from "../css/CreatePost.module.scss"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postPost } from "../../middlewares/redux/actions/index"
import { useHistory } from "react-router-dom"

const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory()
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
    category: []
  });

  const [imgSlider, setImgSlider ] = useState(null)

  const submit = (e)=> {
    e.preventDefault()
    let formData = new FormData();
    formData.append("image", imgSlider);
    formData.append("title", data.title);
    formData.append("artist", data.artist);
    formData.append("info", data.info);
    formData.append("category", data.category);
    dispatch(postPost(formData));
    setData({
      title: "",
      artist: '',
      info:'',
      types: [],
      imageVisor: null,
      imageSlider: null,
    });
    history.push('/post/continue/create')
  }

    return (
      <div className={styles.createBody}>
      <div className={styles.CreateProduct}>
      <Card>
        <Title title="Nuevo Post"/>
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
        </div>
        <div>
          <input type="submit" value="Continuar" className={styles.submit} />
        </div>
      </form>
      </Card>
      </div>
      </div>
    )
}
  
export default CreatePost