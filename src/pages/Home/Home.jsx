import './Home.scss';
import { images, offices, picto } from './data';
import { useOffice } from '../../utils/hooks/hooks';

import HeroSection from '../../components/HeroSection/HeroSection';
import PhotoArticle from '../../components/PhotoArticle/PhotoArticle';
import Card from '../../components/Card/Card';
import Offices from '../../components/Buttons/Offices';
import TextCarrousel from '../../components/TextCarrousel/TextCarrousel';
import Collapse from '../../components/Collapse/Collapse';
import LinkButton from '../../components/Buttons/LinkButton';
import InfoButton from '../../components/Buttons/InfoButton';

function Home() {
     const ProfilImage = images.find((img) => img.type === 'profil');
     const { selectedOffice } = useOffice();
     const selectedOfficeData = offices.find(
          (office) => office.id === selectedOffice
     );

     return (
          <>
               <main id="accueil" className="home__main">
                    <HeroSection
                         url={selectedOfficeData.heroSectionSrc}
                         link={selectedOfficeData.heroSectionPhotoLink}
                         author={selectedOfficeData.heroSectionPhotoAuthor}
                         backgroundColor="rgb(2, 65, 64)"
                    >
                         <div className="title index">
                              <h1>Simon LESECQ</h1>
                              <h2>Ostéopathe D.O.</h2>
                         </div>

                         <Offices offices={offices} type="light" />

                         <div className="phone">
                              <a
                                   className="phone__number"
                                   href="tel:0685479237"
                              >
                                   06 85 47 92 37
                              </a>
                         </div>

                         <div className="link-container">
                              <LinkButton
                                   type="light"
                                   link={selectedOfficeData.doctolibLink}
                              >
                                   <span>Prendre RDV</span>
                                   <i className="fa-solid fa-calendar-days"></i>
                              </LinkButton>
                              <LinkButton
                                   type="light"
                                   link={selectedOfficeData.googleMapLink}
                              >
                                   <span>Itinéraire</span>
                                   <i className="fa-sharp fa-solid fa-map-location-dot"></i>
                              </LinkButton>
                         </div>
                    </HeroSection>
                    <section>
                         <article>
                              <div className="article__container">
                                   <PhotoArticle side="right" url={ProfilImage}>
                                        <>
                                             <p>
                                                  Ostéopathe D. O. depuis 2011
                                                  issu de l'Institut Supérieur
                                                  d'Ostéopathie de Lille,
                                                  j’exerce au sein d’un cabinet
                                                  pluridisciplinaire sur la
                                                  métropole Lilloise et sur
                                                  Dunkerque.
                                             </p>
                                             <p>
                                                  Une approche globale centrée
                                                  sur le patient, une solide
                                                  expérience dans le travail
                                                  pluridisciplinaire
                                                  (kinésithérapeute, podologue,
                                                  orthoptiste, préparateur
                                                  physique..) et la construction
                                                  d’une synergie thérapeutique
                                                  sont des éléments
                                                  fondamentales dans ma prise en
                                                  charge.
                                             </p>
                                             <p>
                                                  De ce fait, je me trouve
                                                  sensible à la prise en charge
                                                  des sportifs. J'ai à coeur de
                                                  continuer à developper ma
                                                  qualité de soin dans ce
                                                  domaine tout en poursuivant
                                                  les autres prises en charges
                                                  que me permet ma profession.
                                             </p>
                                             <p>
                                                  Si vous souhaitez en savoir
                                                  davantage, n’hésitez pas à me
                                                  contacter, je me ferai un
                                                  plaisir de vous répondre.
                                             </p>
                                             <p>
                                                  Je suis également Enseignant
                                                  et Maitre de stage au sein de
                                                  cet même Institut
                                                  d’Ostéopathie. En effet je
                                                  souhaite transmettre mon
                                                  savoir aux autres et sans
                                                  cesse faire évoluer ma prise
                                                  en charge.
                                             </p>
                                        </>
                                   </PhotoArticle>
                                   <div className="cards">
                                        <h3>
                                             À coté du cabinet, j'ai d'autres
                                             activités :
                                        </h3>
                                        <div className="cards__container container--80vw">
                                             <Card
                                                  // title="Ma pratique"
                                                  picto={picto[0]}
                                             >
                                                  <p>
                                                       Enseignant et maître de
                                                       stage à{' '}
                                                       <span className="nowrap">
                                                            l'Inso Lille
                                                       </span>
                                                  </p>
                                             </Card>
                                             <Card
                                                  // title="Prise en charge"
                                                  picto={picto[1]}
                                             >
                                                  <p>
                                                       Je suis l'ostéopathe de
                                                       l'équipes pro de{' '}
                                                       <span className="nowrap">
                                                            l'USDK handball
                                                       </span>
                                                  </p>
                                             </Card>
                                             <Card
                                                  // title="Collaboration"
                                                  picto={picto[2]}
                                                  // message={picto[2].message}
                                             >
                                                  <p>
                                                       Lucie, mon assistante,
                                                       rejoint le cabinet
                                                  </p>
                                                  <LinkButton
                                                       type="secondary"
                                                       size="large"
                                                       link="https://www.doctolib.fr/osteopathe/marcq-en-baroeul/lucie-breuilles-marcq-en-baroeul"
                                                  >
                                                       <span>
                                                            RDV avec Lucie
                                                       </span>
                                                       <i className="fa-solid fa-calendar-days"></i>
                                                  </LinkButton>
                                             </Card>
                                        </div>
                                        <div className="info__button-position">
                                             <InfoButton side="left">
                                                  icons created by{' '}
                                                  <a href={picto[0].author}>
                                                       {picto[0].message}
                                                  </a>
                                                  {', '}
                                                  <a href={picto[1].author}>
                                                       {picto[1].message}
                                                  </a>
                                                  {' and '}
                                                  <a href={picto[2].author}>
                                                       {picto[2].message}
                                                  </a>
                                                  - Flaticon
                                             </InfoButton>
                                        </div>
                                   </div>
                              </div>
                         </article>
                         <article id="questions" className="index">
                              <div className="article__container container--80vw">
                                   <h2>Questions Fréquentes</h2>
                                   <p>
                                        Je réponds aux interrogations qui
                                        pourraient survenir avant votre
                                        consultation. Si, malgré cela, vous ne
                                        parvenez pas à trouver les informations
                                        que vous cherchez, n'hésitez pas à me
                                        les communiquer à travers le formulaire
                                        de contact.
                                   </p>
                                   <Collapse title="Comment se déroule une consultation ?">
                                        <p>
                                             La séance dure en moyenne 45
                                             minutes, et s'organise en 3 temps :
                                             l'entretien, l'examen clinique et
                                             le traitement ostéopathique.
                                        </p>
                                   </Collapse>
                                   <Collapse title="Quelle tenue est conseillée pour la séance?">
                                        <p>
                                             La prise en charge repose sur le
                                             mouvement du corps, vous serez donc
                                             amené(e) à vous mettre en
                                             sous-vêtements ou en vêtements fins
                                             près du coprs (leggings et/ou
                                             brassière ). L'essentiel est de se
                                             sentir à l'aise dans sa tenue lors
                                             de la consultation.
                                        </p>
                                   </Collapse>
                                   <Collapse title="Existe-t-il une prise en charge Sécurité Sociale ?">
                                        <p>
                                             L’ostéopathie n’est pas remboursée
                                             par la Sécurité Sociale. Cependant,
                                             de nombreuses mutuelles remboursent
                                             une à plusieurs séances par an.
                                        </p>
                                   </Collapse>
                                   <Collapse title="Quelles sont mes expériences ?">
                                        <ul>
                                             <li>
                                                  Praticien libéral -
                                                  Marcq-en-Barœul - Wasquehal -
                                                  Dunkerque (depuis 2011){' '}
                                             </li>
                                             <li>
                                                  Ostéopathe de l'équipe
                                                  professionnelle de Handball
                                                  USDK
                                             </li>
                                             <li>
                                                  Enseignant et maître de stage
                                                  à l'Institut Supérieur
                                                  d'Ostéopathie (InSO) - Lille
                                             </li>
                                             <li>
                                                  Enseignant vacataire D.U.
                                                  Podologie du sport (FSSEP) -
                                                  Lille
                                             </li>
                                        </ul>
                                   </Collapse>
                              </div>
                         </article>
                         <article id="tarif" className="index">
                              <div className="container--80vw">
                                   <div className="two-column__container container equal-column">
                                        <div>
                                             <h2>Tarifs</h2>
                                             <p className="subtitle">
                                                  60€ la consultation
                                             </p>
                                        </div>
                                        <div className="thin-separator-line">
                                             <p>
                                                  Ces honoraires vous sont
                                                  communiqués à titre indicatif
                                                  par le praticien. Ils peuvent
                                                  varier selon le lieu de prise
                                                  en charge.
                                             </p>
                                             <p>
                                                  Remboursement : 85% des
                                                  mutuelles remboursent une à
                                                  plusieurs séances
                                                  d’ostéopathie par années.
                                                  Votre praticien pourra vous
                                                  délivrer une facture par mail,
                                                  à renseigner à votre mutuelle.
                                             </p>
                                             <LinkButton
                                                  type="secondary"
                                                  size="large"
                                                  link={
                                                       selectedOfficeData.doctolibLink
                                                  }
                                             >
                                                  <span>
                                                       Prendre Rendez-vous
                                                  </span>
                                                  <i className="fa-solid fa-calendar-days"></i>
                                             </LinkButton>
                                        </div>
                                   </div>
                                   <div className="picture-office__container">
                                        {offices
                                             .find(
                                                  (office) =>
                                                       office.id ===
                                                       selectedOffice
                                             )
                                             .images?.map((image, index) => (
                                                  <img
                                                       key={`image_${index}`}
                                                       alt=""
                                                       src={image.src}
                                                       srcSet={image.srcset}
                                                  />
                                             ))}
                                   </div>
                              </div>
                         </article>
                         <article id="contact" className="index">
                              <div className="two-column__container equal-column">
                                   <div className="map__container">
                                        <iframe
                                             src={
                                                  selectedOfficeData.googleMapIFrameLink
                                             }
                                             width="600"
                                             title="office"
                                             allowFullScreen=""
                                             loading="lazy"
                                             referrerPolicy="no-referrer-when-downgrade"
                                             style={{
                                                  border: '2px solid rgb(2,65,64)',
                                             }}
                                        ></iframe>
                                   </div>
                                   <div className="contact__container">
                                        <h2>Contact</h2>
                                        <h3>Simon Lesecq</h3>
                                        <Offices
                                             offices={offices}
                                             type="dark"
                                        />
                                   </div>
                              </div>
                         </article>
                         <article id="pour_qui" className="index">
                              <div className="article__container container--80vw">
                                   <h2>Pour Qui ?</h2>
                                   <div className="two-column__container one-third-two-third-column">
                                        <div className="textCarrousel__text__container">
                                             <h3>
                                                  En quoi est ce que
                                                  l'ostéopathie peut vous aider
                                                  ?
                                             </h3>
                                             <p>
                                                  L’ostéopathie, une approche
                                                  globale de bien-être, allie
                                                  une expertise clinique et des
                                                  techniques manuelles du
                                                  système musculo-squelettique
                                                  et de relâchement myofascial
                                                  pour vous libérer de vos maux.
                                             </p>
                                        </div>
                                        <TextCarrousel>
                                             <div className="textCarrousel__text__container">
                                                  <h3>Douleur lombaire</h3>
                                                  <p>
                                                       La douleur lombaire,
                                                       souvent ressentie dans la
                                                       partie inférieure du dos,
                                                       peut avoir des origines
                                                       diverses, allant du
                                                       stress musculaires à des
                                                       dysfonctions articulaires
                                                       ou nerveuses.{' '}
                                                  </p>
                                                  <p>
                                                       Les interventions visent
                                                       à restaurer l'équilibre
                                                       musculo-squelettique, à
                                                       améliorer la mobilité
                                                       articulaire et soulager
                                                       les tensions musculaires.
                                                  </p>
                                             </div>
                                             <div className="textCarrousel__text__container">
                                                  <h3>Douleurs neurogènes</h3>
                                                  <p>
                                                       Lorem ipsum dolor sit
                                                       amet, consectetur
                                                       adipisicing elit.
                                                       Exercitationem ut dicta
                                                       nemo error eaque!
                                                       Aspernatur eos amet esse,
                                                       facere cupiditate totam
                                                       sit commodi dolores cum
                                                       molestiae veritatis a
                                                       magnam impedit dolorem?
                                                       Ea quibusdam asperiores
                                                       aliquam pariatur mollitia
                                                       natus dolorum
                                                       dignissimos! Nemo beatae
                                                       animi temporibus quaerat
                                                       quae exercitationem vitae
                                                       earum suscipit!
                                                  </p>
                                             </div>
                                             <div className="textCarrousel__text__container">
                                                  <h3>Troubles digestifs</h3>
                                                  <p>
                                                       Lorem ipsum, dolor sit
                                                       amet consectetur
                                                       adipisicing elit. Enim
                                                       ipsam facere temporibus
                                                       porro, incidunt delectus
                                                       minima ea deleniti nulla
                                                       doloribus velit deserunt
                                                       architecto at assumenda
                                                       quod tempore praesentium
                                                       magnam cum quis aliquid
                                                       a? Enim vitae iste natus
                                                       facilis aut accusantium
                                                       exercitationem
                                                       voluptatibus sit
                                                       doloremque ratione fugiat
                                                       quaerat iusto, maxime
                                                       dolorem?
                                                  </p>
                                             </div>
                                             <div className="textCarrousel__text__container">
                                                  <h3>Sport et traumatismes</h3>
                                                  <p>
                                                       L'ostéopathie joue un
                                                       rôle significatif dans la
                                                       prise en charge des
                                                       traumatismes liés à la
                                                       pratique sportive, visant
                                                       à optimiser la
                                                       performance, prévenir les
                                                       blessures et favoriser
                                                       une récupération rapide.
                                                       En cas de traumatismes,
                                                       tels que entorses,
                                                       tensions musculaires ou
                                                       traumatismes répétitifs,
                                                       l'ostéopathie favorise la
                                                       cicatrisation, réduit
                                                       l'inflammation et
                                                       améliore la mobilité.
                                                  </p>
                                             </div>
                                             <div className="textCarrousel__text__container">
                                                  <h3>Grossesse</h3>
                                                  <p>
                                                       Lorem ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit.
                                                       Accusamus beatae eveniet
                                                       tempora odit perferendis
                                                       facilis expedita magni
                                                       veritatis dolorum
                                                       delectus minima, enim,
                                                       esse iusto eos. Iste
                                                       sunt, repellendus ea
                                                       ullam cumque
                                                       necessitatibus officia
                                                       quo architecto. Provident
                                                       mollitia temporibus
                                                       delectus recusandae harum
                                                       voluptas? Quia placeat
                                                       consectetur explicabo
                                                       totam iusto mollitia
                                                       odio.
                                                  </p>
                                             </div>

                                             <div className="textCarrousel__text__container">
                                                  <h3>Enfants</h3>
                                                  <p>
                                                       Lorem, ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit.
                                                       Consequatur accusantium,
                                                       hic blanditiis,
                                                       exercitationem sed, fuga
                                                       suscipit nisi recusandae
                                                       asperiores voluptas
                                                       dolores. Eum quo ducimus
                                                       atque eos a. Quos earum
                                                       omnis minima architecto,
                                                       sequi exercitationem
                                                       cupiditate natus quaerat
                                                       aliquam ipsa delectus,
                                                       repellat incidunt enim
                                                       ullam voluptatem
                                                       molestiae beatae
                                                       laudantium distinctio?
                                                       Fugit.
                                                  </p>
                                             </div>
                                        </TextCarrousel>
                                   </div>
                              </div>
                         </article>
                    </section>
               </main>
          </>
     );
}

export default Home;
