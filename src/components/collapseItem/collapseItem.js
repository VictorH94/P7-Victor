import React, { useState } from 'react'
import './CollapseItem.css';
import FlecheBas from '../../assets/FlecheBas.png';
import FlecheHaut from '../../assets/FlecheHaut.png';

function CollapseItem({title, description}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='collapseItem'>
      <div className='collapseHeader'>
        <h3>{title}</h3>
        <button className="description-dropdown" onClick={() => {setCollapsed(!collapsed)}}>
            {collapsed ? <img src={FlecheHaut} alt="replier"/> : <img src={FlecheBas} alt="déplier"/>}
        </button>
      </div>
      {collapsed && <div className='collapseText' dangerouslySetInnerHTML={{__html:description}}></div>}
    </div>
  )
}

export default CollapseItem 