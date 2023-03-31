import './Home.css';
import Offers from '../data.json';
import {Link} from 'react-router-dom';
import Banner from '../components/banner/Banner';
import img_banner from '../assets/Img_banniere_accueil.png';

function Home () {
  console.log(Offers);
  return (
    <div className="Home">
      <Banner img_banner={img_banner} title="Chez vous, et partout ailleurs"/>
      <main>
        <div className='allOfferPictures'>
          {Offers.map((offer) => (
            <div className="offer" key={offer.id}>
              <Link to={"/offerDetails/" + offer.id}>
              <h3 className="offer-title">{offer.title}</h3>
              <img src={offer.cover} alt="offer-logo" />
              <div className="offerImg-sombre"></div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home