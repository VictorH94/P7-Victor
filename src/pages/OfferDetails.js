import './OfferDetails.css';
import Offers from '../data.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function OfferDetails () {
    const [offer, setOffer] = useState({})
    const [current_index_img, setCurrent_index_img] = useState(0)
    const params = useParams()
    
    useEffect(() => {
        setOffer(Offers.find(item => item.id === params.id))
    }, [params.id])

    const slideprev = () => {
        console.log("slideprev")
        if (current_index_img < 1) {
            setCurrent_index_img(offer.pictures.length -1)
        }else {
            setCurrent_index_img(current_index_img -1)
        }
    }

    const slidenext = () => {
        console.log("slidenext")
        if (current_index_img >= offer.pictures.length -1) {
            setCurrent_index_img(0)
        }else {
            setCurrent_index_img(current_index_img +1)
        }
    }

    return (
        <div className="OfferDetails">
           <div>
                {offer.pictures && <img src={offer.pictures[current_index_img]} alt="" />}
                <button onClick={slideprev} className="fleche-gauche">prev</button>
                <button onClick={slidenext} className="fleche-droite">next</button>
           </div>
        </div>
    )
}

export default OfferDetails