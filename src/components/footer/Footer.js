import './Footer.css';
import logo from '../../assets/LogoFooter.png'

function Footer() {
  return (
    <div className="footer">
        <div className='footer__logo'>
            <img src={logo} alt="logo footer" />
        </div>
        <div className="footer__text">
            © 2020 Kaza. All right reserved
        </div> 
    </div>
  )
}

export default Footer