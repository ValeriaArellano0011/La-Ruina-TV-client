import { Card } from "@mui/material";
import { Title } from "react-admin";
import CardContent from "@mui/material/CardContent";
import styles from "../css/CreatePost.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPostContinue } from "../../middlewares/redux/actions/index";

const ContinuePostCreate = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    
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

  

  

  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    
    
    dispatch(postPostContinue(formData));
    setData({
      
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
              
              
            </div>
            
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContinuePostCreate;
