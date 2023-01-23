import { Card } from "@mui/material"
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import styles from "../css/CreateProduct.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postProduct } from "../../middlewares/redux/actions/index"
import { useHistory } from "react-router-dom"

const CreateProduct = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [input,setInput] = useState ({name: "",price:"",description:""})
  // const [errors,setErrors] = useState({})
   
  const handleChange = (e) => {
    e.preventDefault()
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    // setErrors(validate({
    //     ...input,
    //     [e.target.name]: e.target.value
    //   }));
      console.log(e.target.value)
};

const handleSubmit = (e) => {
  if (input.name === undefined 
  ) {
      document.getElementById("DoNotSubmit"); 
      return alert("Please complete the fields with valid data");
  }
  const addProduct = {
    name: input.name,
    price: input.price,
    description: input.description
  }
  e.preventDefault()
  dispatch(postProduct(addProduct))
  setInput({
      name: "",
      price:"",
      description:""
  });

  history.push("/tienda")
}

  return (
    <div className={styles.createBody}>
      <div className='bgNav'></div>
      <div className={styles.CreateProduct}>
      <div className='CreateBody'>
      <Card>
        <Title title="Nuevo Post"/>
        <h1>Crear un Nuevo Producto</h1>
        <CardContent>Rellena el siguiente formulario</CardContent>
        <form className={styles.formCont} onSubmit={(e) => handleSubmit(e)}>
          <ul className={styles.ulCont}>
            <div>
              <label><h2>Nombre del producto</h2></label>
              <input className="field" type="text" value={input.name}  name="name" onChange={handleChange} />
            </div>
            <div>
              <label><h2>Precio</h2></label>
              <input className="field" type="text" value={input.price} name="price" onChange={handleChange}/>
            </div>
            <div>
              <label><h2>Descripción</h2></label>
              <p>
                <textarea type="text"  name="description" value={input.description} rows="5" cols="32" onChange={handleChange} />
              </p>
            </div>
            <div>
              <button>Publicar</button>
            </div>
          </ul>
        </form>
      </Card>
      </div>
    </div>
    </div>
    )
}
  
export default CreateProduct