import './OfferDetails.css';
import Offers from '../data.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CollapseItem from '../components/collapseItem/CollapseItem';

// Fonction composant OfferDetails permettant de creer le caroussel d'images de la page de logement
function OfferDetails () {
    //Hook d'état
    const [offer, setOffer] = useState({                  //Déclare une nouvelle variable d'état que l'on appelle "offer"
        tags:[], host:{}, pictures:[], equipments: []
    })
    const [current_index_img, setCurrent_index_img] = useState(0)                //Déclare une nouvelle variable d'état que l'on appelle "current_index_img"
    const params = useParams()
    //Hook useEffect
    useEffect(() => {
        // console.log(Offers)
        setOffer(Offers.find(item => item.id === params.id))               //On parcourt l'ensemble des item du tableau dans le data.json et on affiche l'ensemble des cards de logement
    }, [params.id])
    // Fonction permettante d'afficher de l'image précédente quand on clique sur la flèche de gauche
    const slideprev = () => {
        if (current_index_img < 1) {
            setCurrent_index_img(offer.pictures.length -1)
        }else {
            setCurrent_index_img(current_index_img -1)             //Affichage du slide précédent
        }
    }
    // Fonction permettante d'afficher de l'image suivante quand on clique sur la flèche de droite
    const slidenext = () => {
        if (current_index_img >= offer.pictures.length -1) {      //On repart au 1er slide quand on arrive au dernier slide
            setCurrent_index_img(0)
        }else {
            setCurrent_index_img(current_index_img +1)           //Affichage du slide suivant
        }
    }
    // Notes sur 5 étoiles
    const ratingStar = (rating) => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            const className = i <rating ? "fullStar" : "emptyStar"
           stars.push(<span className={className} key={i}>&#9733;</span>)
        }
        return stars
    }
    // Affichage de l'ensemble des cards de logement(changement des images dans le caroussel) et leur détails
    return (
        <div className="OfferDetails">
            <div className="offerPictureFlechehautbas">
                {offer.pictures && <img src={offer.pictures[current_index_img]} alt="" className="offerImg"/>}
                <button onClick={slideprev} className="fleche-gauche"> <FontAwesomeIcon icon={faChevronLeft} /></button>
                <button onClick={slidenext} className="fleche-droite"> <FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <section className="offerTopInfos">
                <div className="housing-infos">
                    <h1>{offer.title}</h1>
                    <p>{offer.location}</p>
                    <div className="tags">
                        {offer.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='namePictureRating'>
                    <div className="owner-infos">
                        <span className="owner-name">{offer.host.name}</span>
                        <img src={offer.host.picture} alt="" className="owner-photo" />
                    </div>
                    <div className="rating">
                    {ratingStar(offer.rating)}
                    </div>
                </div>
            </section>
            <div className="description-equipements">
                <CollapseItem title="Description" description={offer.description} />
                <CollapseItem title="Equipements" description={offer.equipments.join("<br />")} />
            </div>
        </div>
    )
}

export default OfferDetails