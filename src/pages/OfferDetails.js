import './OfferDetails.css';
import Offers from '../data.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CollapseItem from '../components/collapseItem/collapseItem';

function OfferDetails () {
    const [offer, setOffer] = useState({
        tags:[], host:{}, pictures:[], equipments: []
    })
    const [current_index_img, setCurrent_index_img] = useState(0)
    const params = useParams()
    
    useEffect(() => {
        console.log(Offers)
        setOffer(Offers.find(item => item.id === params.id))
    }, [params.id])
    // Fonction quand on clique sur la flèche de gauche
    const slideprev = () => {
        console.log("slideprev")
        if (current_index_img < 1) {
            setCurrent_index_img(offer.pictures.length -1)
        }else {
            setCurrent_index_img(current_index_img -1)
        }
    }
    // Fonction quand on clique sur la flèche de droite
    const slidenext = () => {
        console.log("slidenext")
        if (current_index_img >= offer.pictures.length -1) {
            setCurrent_index_img(0)
        }else {
            setCurrent_index_img(current_index_img +1)
        }
    }
    // Notes
    const ratingStar = (rating) => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            const className = i <rating ? "fullStar" : "emptyStar"
           stars.push(<span className={className} key={i}>&#9733;</span>)
        }
        return stars
    }
    // Affichage de l'ensemble des offres
    return (
        <div className="OfferDetails">
            <div>
                {offer.pictures && <img src={offer.pictures[current_index_img]} alt="" className="offerImg"/>}
                <button onClick={slideprev} className="fleche-gauche"> <FontAwesomeIcon icon={faChevronLeft} /></button>
                <button onClick={slidenext} className="fleche-droite"> <FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <section className="offerTopInfos">
                <div>
                    <h1>{offer.title}</h1>
                    <p>{offer.location}</p>
                    <div className="tags">
                        {offer.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='namePictureRating'>
                    <div>
                        <span className="owner-name">{offer.host.name}</span>
                        <img src={offer.host.picture} alt="" className="owner-photo" />
                    </div>
                    <div className="rating">
                    {ratingStar(offer.rating)}
                    </div>
                </div>
            </section>
            <CollapseItem title="description" description={offer.description}/>
            <CollapseItem title="equipements" description={offer.equipments.join("<br />")}/>
            
        </div>
    )
}

export default OfferDetails