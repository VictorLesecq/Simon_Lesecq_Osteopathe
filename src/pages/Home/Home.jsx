import './Home.scss';
import { images, offices } from './data';
import { useOffice } from '../../utils/hooks/hooks';

import HeroSection from '../../components/HeroSection/HeroSection';
import PhotoArticle from '../../components/PhotoArticle/PhotoArticle';
import Card from '../../components/Card/Card';
import Offices from '../../components/Buttons/Offices';
import TextCarrousel from '../../components/TextCarrousel/TextCarrousel';

function Home() {
     const HSimage = images.find((img) => img.type === 'heroSection');
     const ProfilImage = images.find((img) => img.type === 'profil');
     const { selectedOffice } = useOffice();

     return (
          <main>
               <HeroSection url={HSimage.src}>
                    <div className="title">
                         <h1>Simon LESECQ</h1>
                         <h2>Ostéopathe D.O.</h2>
                    </div>

                    <Offices offices={offices} />

                    <div className="phone">
                         <a className="phone__number" href="tel:0685479237">
                              06 85 47 92 37
                         </a>
                    </div>

                    <div className="link-container">
                         <div className="link-container__button">
                              <a
                                   className="link-container__button__link"
                                   rel="noreferrer"
                                   href={
                                        offices.find(
                                             (office) =>
                                                  office.id === selectedOffice
                                        ).doctolibLink
                                   }
                                   target="blank"
                              >
                                   <span>Prendre RDV</span>
                                   <i className="fa-solid fa-calendar-days"></i>
                              </a>
                         </div>
                         <div className="link-container__button">
                              <a
                                   className="link-container__button__link"
                                   rel="noreferrer"
                                   href={
                                        offices.find(
                                             (office) =>
                                                  office.id === selectedOffice
                                        ).googleMapLink
                                   }
                                   target="_blank"
                              >
                                   <span>Itinéraire</span>
                                   <i className="fa-sharp fa-solid fa-map-location-dot"></i>
                              </a>
                         </div>
                    </div>
               </HeroSection>
               <section>
                    <article id="mon_parcours" className="index">
                         <div className="article__container">
                              <PhotoArticle side="right" url={ProfilImage}>
                                   <>
                                        <p>
                                             Ostéopathe D. O. depuis 2011 issu
                                             de l'Institut Supérieur
                                             d'Ostéopathie de Lille, j’exerce au
                                             sein d’un cabinet
                                             pluridisciplinaire sur la métropole
                                             Lilloise et sur Dunkerque.
                                        </p>
                                        <p>
                                             Une approche globale centrée sur le
                                             patient, une solide expérience dans
                                             le travail pluridisciplinaire
                                             (kinésithérapeute, podologue,
                                             orthoptiste, préparateur
                                             physique..) et la construction
                                             d’une synergie thérapeutique sont
                                             des éléments fondamentales dans ma
                                             prise en charge.
                                        </p>
                                        <p>
                                             De ce fait, je me trouve sensible à
                                             la prise en charge des sportifs.
                                             J'ai à coeur de continuer à
                                             developper ma qualité de soin dans
                                             ce domaine tout en poursuivant les
                                             autres prises en charges que me
                                             permet ma profession.
                                        </p>
                                        <p>
                                             Si vous souhaitez en savoir
                                             davantage, n’hésitez pas à me
                                             contacter, je me ferai un plaisir
                                             de vous répondre.
                                        </p>
                                        <p>
                                             Je suis également Enseignant et
                                             Maitre de stage au sein de cet même
                                             Institut d’Ostéopathie. En effet je
                                             souhaite transmettre mon savoir aux
                                             autres et sans cesse faire évoluer
                                             ma prise en charge.
                                        </p>
                                   </>
                              </PhotoArticle>
                              <div className="cards">
                                   <div className="cards__container">
                                        <Card
                                             title="Ma pratique"
                                             subTitle="Formé aux techniques suivantes:"
                                             picto="🔖"
                                        >
                                             <p>
                                                  Fonctionnelle, viscérale,
                                                  articulaire, crânienne,
                                                  fascia, musculaire.
                                             </p>
                                             <p>
                                                  Travail en équipe
                                                  pluridisciplinaire.
                                             </p>
                                        </Card>
                                        <Card title="Enseignement" picto="🎒">
                                             <p>
                                                  Enseignant en techniques
                                                  ostéopathique du Membre
                                                  inférieur (structurel,
                                                  myotensif, fascia, tgo)
                                             </p>
                                             <p>
                                                  Enseignant en diagnostic
                                                  d’opportunité du Membre
                                                  Inférieur
                                             </p>
                                             <p>
                                                  Maitre de stage à la maternité
                                                  Jeanne de Flandres en post
                                                  partum
                                             </p>
                                        </Card>
                                        <Card title="Clinique" picto="🏥">
                                             <p>Cabinet Lbl santé Wasquehal</p>
                                             <br />
                                             <p>
                                                  Cabinet « les Arcades »
                                                  Dunkerque
                                             </p>
                                        </Card>
                                   </div>
                              </div>
                         </div>
                    </article>
                    <article id="pour_qui" className="index">
                         <div className="article__container">
                              <h2>Pour Qui ?</h2>
                              <div className="two-column__container">
                                   <div className="textCarrousel__text__container">
                                        <h3>
                                             En quoi est ce que l'ostéopathie
                                             peut vous aider ?{' '}
                                        </h3>
                                        <p>
                                             L’ostéopathe va pratiquer des
                                             manipulations manuelles du système
                                             musculo-squelettique et utiliser
                                             des techniques de relâchement
                                             myofascial afin de soulager les
                                             tensions, les déséquilibres et les
                                             douleurs. Ainsi que des conseils
                                             précieux à suivre dans votre
                                             quotidien.
                                        </p>
                                   </div>
                                   <TextCarrousel>
                                        <div className="textCarrousel__text__container">
                                             <h3>
                                                  Douleurs musculo-squelettiques
                                             </h3>
                                             <p>
                                                  Prise en charge des douleurs
                                                  du type lombalgie,
                                                  cervicalgie, dorsalgie,
                                                  torticolis, douleur
                                                  articulaire, douleur
                                                  d’arthrose, tendinopathie,
                                                  douleur aigue ou chronique.
                                             </p>
                                        </div>
                                        <div className="textCarrousel__text__container">
                                             <h3>Sport et traumatismes</h3>
                                             <p>
                                                  Prise en charge du sportif et
                                                  accompagnement des blessures
                                                  sportives, entorses,
                                                  algoneurodystrophie, capsulite
                                                  rétractile, suite de
                                                  traumatisme musculaire,
                                                  traumatisme articulaire
                                                  (ménisque), tendinite, douleur
                                                  après chirurgie.
                                             </p>
                                        </div>
                                        <div className="textCarrousel__text__container">
                                             <h3>Douleurs neurogènes</h3>
                                             <p>
                                                  Prise en charge des sciatique
                                                  et sciatalgie, cruralgie,
                                                  névralgie cervico-brachiale et
                                                  cervico-brachialgie, hernie
                                                  discal, névralgie
                                                  intercostale, fibromyalgie,
                                                  syndrome canalaire (canal
                                                  carpien, canal tarsien).
                                             </p>
                                        </div>
                                        <div className="textCarrousel__text__container">
                                             <h3>Grossesse et nourrisson</h3>
                                             <p>
                                                  Accompagnement de la femme
                                                  enceinte et de l'accouchement,
                                                  récupération post partum,
                                                  coliques du nouveau-né,
                                                  plagiocéphalie, reflux.
                                             </p>
                                        </div>
                                        <div className="textCarrousel__text__container">
                                             <h3>Troubles fonctionnelles</h3>
                                             <p>
                                                  Troubles du transit,
                                                  colopathie fonctionnelle,
                                                  constipation, reflux, acidité,
                                                  trouble du sommeil, stress,
                                                  anxiété, acouphènes, douleurs
                                                  viscérales, règles
                                                  douloureuses, syndrome
                                                  douloureux fonctionnel.
                                             </p>
                                        </div>
                                        <div className="textCarrousel__text__container">
                                             <h3>Prevention et Performance</h3>
                                             <p>
                                                  Accompagnement de toutes
                                                  personnes dans une processus
                                                  de travail préventif (enfant,
                                                  adulte, sportif) et/ou avec
                                                  comme objectifs l’amélioration
                                                  de performances.
                                             </p>
                                        </div>
                                   </TextCarrousel>
                              </div>
                         </div>
                    </article>
               </section>
          </main>
     );
}

export default Home;
