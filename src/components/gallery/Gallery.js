import { useState } from "react";
import "./Gallery.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Gallery({offer}) {
    const [current_index_img, setCurrent_index_img] = useState(0)         //Déclare une nouvelle variable d'état que l'on appelle "current_index_img"
    // Fonction permettante d'afficher de l'image précédente quand on clique sur la flèche de gauche
    const slideprev = () => {
        // console.log("slideprev")
        if (current_index_img < 1) {
            setCurrent_index_img(offer.pictures.length -1)          //On repart au dernier slide, quand on clique sur le 1er slide sur la flèche précédent
        }else {
            setCurrent_index_img(current_index_img -1)             //Affichage du slide précédent
        }
    }
    // Fonction permettante d'afficher de l'image suivante quand on clique sur la flèche de droite
    const slidenext = () => {
        // console.log("slidenext")
        if (current_index_img >= offer.pictures.length -1) {      //On repart au 1er slide quand on arrive au dernier slide en cliquant sur la flèche suivante
            setCurrent_index_img(0)
        }else {
            setCurrent_index_img(current_index_img +1)           //Affichage du slide suivant
        }
    }
    return (
        <div className="Gallery">
            <div className="offerPictureFlecheGaucheDroite">
                {offer.pictures && <img src={offer.pictures[current_index_img]} alt="" className="offerImg"/>}
                {offer.pictures && offer.pictures.length > 1 && 
                    <>
                        <button onClick={slideprev} className="fleche-gauche"> <FontAwesomeIcon icon={faChevronLeft} /></button>
                        <span className="slide-counter">
                            {current_index_img + 1} / {offer.pictures.length}
                        </span>
                        <button onClick={slidenext} className="fleche-droite"> <FontAwesomeIcon icon={faChevronRight} /></button>
                    </>
                }
            </div>
        </div>
    );
}

export default Gallery;