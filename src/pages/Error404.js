import './Error404.css';
import { NavLink } from 'react-router-dom';

function Error404() {
  return (
    <div className="error404">
        <h1 className="title404">404</h1>
        <p className="description404">Oups! La page que vous demandez n'existe pas </p>
        <NavLink to="/" className="lienRetourAccueil">Retourner sur la page d'accueil</NavLink>
    </div>
  )
}

export default Error404