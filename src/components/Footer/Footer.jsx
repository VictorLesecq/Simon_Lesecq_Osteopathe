import { Link } from 'react-router-dom';
import './Footer.scss';
import { useOffice } from '../../utils/hooks/hooks';
import doctolibLogo from '../../assets/images/Logo-doctolib.svg.png';
import { offices } from '../../pages/Home/data';

function Footer() {
     const { selectedOffice } = useOffice();
     const selectedOfficeData = offices.find(
          (office) => office.id === selectedOffice
     );

     return (
          <footer className="">
               <>
                    <div className="legislation__info">
                         <a
                              target="_blank"
                              rel="noreferrer"
                              href={selectedOfficeData.doctolibLink}
                         >
                              <img
                                   className="logo__picto"
                                   src={doctolibLogo}
                                   width="100px"
                                   alt=""
                              />
                         </a>
                         <p>
                              Tous droits réservés Simon Lesecq | Ostéopathe à
                              Marcq-en-Barœul
                         </p>
                         <p>
                              Réalisation{' '}
                              <a
                                   className="web-designer__link"
                                   href="https://www.linkedin.com/in/victorlesecq/"
                              >
                                   Victor Lesecq | Création de site web sur
                                   mesure
                              </a>
                         </p>
                    </div>
                    <nav className="legislation__container">
                         <ul>
                              <li>
                                   <Link to="/mentions-legales">
                                        Mentions légales
                                   </Link>
                              </li>
                         </ul>
                    </nav>
               </>
          </footer>
     );
}

export default Footer;
