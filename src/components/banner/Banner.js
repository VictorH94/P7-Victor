import './Banner.css';

function Banner(props) {
  return (
      <div className='Banner'>
        <img src={props.img_banner} alt="" className="img-banner"/>
        {props.title && <h1 className="title">{props.title}</h1>}
        <div className="dark-banner"></div>
      </div>
  );
}

export default Banner;

