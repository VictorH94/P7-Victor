import React, { useState } from 'react'
import './CollapseItem.css';
import FlecheBas from '../../assets/FlecheBas.png';
import FlecheHaut from '../../assets/FlecheHaut.png';

// Fonction composant CollapseItem (collapses qui s'ouvrent et qui se ferment) permettant à l'utilisateur quand il clique sur la flèche en bas pour faire apparaitre du texte de description ou quand il clique sur la flèche en haut de faire disparaitre le texte de description.
function CollapseItem({title, description}) {
  const [collapsed, setCollapsed] = useState(false)          //Déclare une nouvelle variable d'état que l'on appelle "collapsed". On initialise l'état de collapsed à false

  return (
    <div className='collapseItem'>
      <div className='collapseHeader'>
        <h3>{title}</h3>
        {/* Quand l'utilisateur clique sur la flèche en bas, le texte de description apparaitra et quand il clique sur la flèche en haut, le texte de description disparaitra */}
        <button className="description-dropdown" onClick={() => {setCollapsed(!collapsed)}}>
            {collapsed ? <img src={FlecheHaut} alt="replier"/> : <img src={FlecheBas} alt="déplier"/>}
        </button>
      </div>
      {collapsed && <div className='collapseText' dangerouslySetInnerHTML={{__html:description}}></div>}
    </div>
  )
}

export default CollapseItem 