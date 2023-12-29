import './HeroSection.scss';

function HeroSection(props) {
     const { url } = props;

     return (
          <div id="accueil" className="hero-section-container index">
               <div
                    className="hero-section-container__image"
                    style={{ '--url': `url(${url})` }}
               ></div>
               {props.children}
          </div>
     );
}

export default HeroSection;
