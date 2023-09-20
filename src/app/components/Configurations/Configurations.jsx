import s from './Configurations.module.css';
import RequestProfile from '../../admin/RequestProfile/RequestProfile';

export const Configurations = () => {
  return (
    <div>
      <div className='divProfile'>
        <div className='navFixed'/>
        <div className={s.divHeader}>
          <div className="header-container mt-110">
            <h1>Configuraciones</h1>
            <h3>Edita las preferencias de tu aplicación</h3>
          </div>
        </div>
        <RequestProfile />
      </div>
    </div>
  )
}
