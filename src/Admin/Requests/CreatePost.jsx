import { Card } from "@mui/material"
import { Title } from 'react-admin'
import CardContent from '@mui/material/CardContent'

const CreatePost = () => {
    return (
      <div className='CreateBody'>
      <Card>
        <Title title="Nuevo Post"/>
        <h1>Crear un Nuevo Post</h1>
        <CardContent>Rellena el siguiente formulario</CardContent>
      </Card>
      </div>
    )
}
  
export default CreatePost