import './About.css';
import Banner from '../components/banner/Banner';
import img_banner from '../assets/Img_banniere_apropos.png';

function About () {
    return (
        <div className="About">
         <Banner img_banner={img_banner} />
        </div>
    )
}

export default About