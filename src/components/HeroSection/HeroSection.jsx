import { AuthorInfo } from '../../utils/style/atoms';
import './HeroSection.scss';

function HeroSection(props) {
     const { url, link, author, backgroundColor } = props;
     console.log(backgroundColor);

     return (
          <div className="hero-section-container">
               <div
                    className="hero-section-container__image"
                    style={{
                         '--url': `url(${url})`,
                         '--backgroundColor': `${backgroundColor}`,
                    }}
               ></div>
               {props.children}
               <AuthorInfo>
                    <a href={link} target="_blank" rel="noreferrer">
                         {author ? `photo de ${author}` : ''}
                    </a>
               </AuthorInfo>
          </div>
     );
}

export default HeroSection;
