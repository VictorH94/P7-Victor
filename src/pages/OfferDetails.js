import './OfferDetails.css';
import Offers from '../data.json';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollapseItem from '../components/collapseItem/CollapseItem';
import Gallery from '../components/gallery/Gallery';

// Fonction composant OfferDetails permettant de creer le caroussel d'images de la page de logement
function OfferDetails () {
    //Hook d'état
    const [offer, setOffer] = useState({                  //Déclare une nouvelle variable d'état que l'on appelle "offer"
        tags:[], host:{}, pictures:[], equipments: []
    })
    const params = useParams()
    const navigate = useNavigate()
    //Hook useEffect
    useEffect(() => {
        // console.log(Offers)
        const offer_= Offers.find(item => item.id === params.id)         //On parcourt l'ensemble des item du tableau dans le data.json et on affiche l'ensemble des cards de logement
        if (offer_) {
            setOffer(offer_)
        }else {
            navigate("/offre-non-trouvee")
        }
          
    }, [params.id, navigate])
    // Notes sur 5 étoiles
    const ratingStar = (rating) => {
        const stars = []           //On créera 5 étoiles dans tous les cas
        for (let i = 0; i < 5; i++) {        //si la note est plus petit que le compteur (i), une étoile vide sera ajouté sinon une étolle colloré sera rajoutée
            const className = i < rating ? "fullStar" : "emptyStar"
           stars.push(<span className={className} key={i}>&#9733;</span>)
        }
        return stars
    }
    // Affichage de l'ensemble des cards de logement(changement des images dans le caroussel) et leur détails
    return (
        <div className="OfferDetails">
            <Gallery offer={offer} />
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