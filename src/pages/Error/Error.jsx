import { Link } from 'react-router-dom';
import './Error.scss';
import HeroSection from '../../components/HeroSection/HeroSection';
import backPainUrl from '../../assets/images/backPain.jpg';

function Error() {
     return (
          <HeroSection url={backPainUrl}>
               <div className="Error_Container">
                    <div className="box"></div>
                    <div className="Error_Content">
                         <h1>404</h1>
                         <h2>
                              Aie, le faux mouvement ! La page que vous demandez
                              n'existe pas.
                         </h2>
                         <p>
                              <Link to="/">
                                   Retourner sur la page d’accueil
                              </Link>
                         </p>
                    </div>
                    <div className="box"></div>
               </div>
          </HeroSection>
     );
}

export default Error;
