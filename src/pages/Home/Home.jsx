import './Home.scss';
import { images, offices } from './data';
import { useOffice } from '../../utils/hooks/hooks';

import HeroSection from '../../components/HeroSection/HeroSection';
import PhotoArticle from '../../components/PhotoArticle/PhotoArticle';
import Card from '../../components/Card/Card';
import Offices from '../../components/Buttons/Offices';

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
                         <PhotoArticle side="right" url={ProfilImage}>
                              <>
                                   <p>
                                        Ostéopathe D. O. depuis 2011 issu de
                                        l'Institut Supérieur d'Ostéopathie de
                                        Lille, j’exerce au sein d’un cabinet
                                        pluridisciplinaire sur la métropole
                                        Lilloise et sur Dunkerque.
                                   </p>
                                   <p>
                                        Une approche globale centrée sur le
                                        patient, une solide expérience dans le
                                        travail pluridisciplinaire
                                        (kinésithérapeute, podologue,
                                        orthoptiste, préparateur physique..) et
                                        la construction d’une synergie
                                        thérapeutique sont des éléments
                                        fondamentales dans ma prise en charge.
                                   </p>
                                   <p>
                                        De ce fait, je me trouve sensible à la
                                        prise en charge des sportifs. J'ai à
                                        coeur de continuer à developper ma
                                        qualité de soin dans ce domaine tout en
                                        poursuivant les autres prises en charges
                                        que me permet ma profession.
                                   </p>
                                   <p>
                                        Si vous souhaitez en savoir davantage,
                                        n’hésitez pas à me contacter, je me
                                        ferai un plaisir de vous répondre.
                                   </p>
                                   <p>
                                        Je suis également Enseignant et Maitre
                                        de stage au sein de cet même Institut
                                        d’Ostéopathie. En effet je souhaite
                                        transmettre mon savoir aux autres et
                                        sans cesse faire évoluer ma prise en
                                        charge.
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
                                             articulaire, crânienne, fascia,
                                             musculaire.
                                        </p>
                                        <p>
                                             Travail en équipe
                                             pluridisciplinaire.
                                        </p>
                                   </Card>
                                   <Card title="Enseignement" picto="🎒">
                                        <p>
                                             Enseignant en techniques
                                             ostéopathique du Membre inférieur
                                             (structurel, myotensif, fascia,
                                             tgo)
                                        </p>
                                        <p>
                                             Enseignant en diagnostic
                                             d’opportunité du Membre Inférieur
                                        </p>
                                        <p>
                                             Maitre de stage à la maternité
                                             Jeanne de Flandres en post partum
                                        </p>
                                   </Card>
                                   <Card title="Clinique" picto="🏥">
                                        <p>Cabinet Lbl santé Wasquehal</p>
                                        <br />
                                        <p>Cabinet « les Arcades » Dunkerque</p>
                                   </Card>
                              </div>
                         </div>
                    </article>
                    <article id="pour_qui" className="index">
                         <div>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Culpa assumenda deserunt ducimus velit
                              tenetur minima, vel saepe ab rem aliquam. Ullam,
                              tenetur modi! Natus rem ut aliquam omnis, optio
                              nihil non vel voluptatum! Dolorum natus esse
                              delectus expedita ipsum soluta reprehenderit
                              provident consequuntur eum enim sed veritatis
                              error, sint aliquid perspiciatis veniam
                              voluptatibus. Porro quas repellendus explicabo sed
                              quisquam quibusdam eum eius, et animi, neque,
                              impedit vero enim recusandae autem amet
                              laudantium! Adipisci quaerat pariatur, saepe
                              facilis odio ad quidem aliquam dolorum voluptatem
                              nobis tempore nesciunt ipsam quia minus fugiat
                              explicabo corporis unde libero in sed
                              exercitationem obcaecati labore. Incidunt soluta
                              placeat totam, dolorem necessitatibus dolor ad
                              nisi vero, ut sapiente enim ea ducimus. Maiores
                              facilis repellat quia ratione eligendi enim
                              magnam. Qui, rem totam. Labore rerum
                              exercitationem eveniet itaque, aperiam atque?
                              Voluptate quo ad nam ipsa pariatur voluptas quos
                              nisi quasi magnam! Molestias expedita dignissimos
                              laudantium tempora ullam porro ratione nobis
                              impedit natus reprehenderit accusamus temporibus
                              mollitia doloribus odio tenetur omnis fugit,
                              debitis esse explicabo accusantium adipisci quasi
                              molestiae voluptas? Magnam modi cupiditate
                              exercitationem mollitia enim eum? Veniam inventore
                              mollitia autem veritatis ea minima omnis?
                              Repudiandae voluptate pariatur ipsum modi
                              architecto eos quas, maxime dignissimos
                              accusantium. Magni a, libero necessitatibus
                              itaque, nesciunt adipisci velit qui fugit saepe
                              rerum labore quisquam voluptatibus delectus
                              quaerat harum modi reprehenderit, iste amet
                              corporis! Recusandae consequatur dolorum
                              accusantium quis illo veniam perspiciatis. Unde
                              quos dolorum quae vero numquam nisi quisquam totam
                              optio officiis, cumque iste quo porro voluptas
                              illum, velit pariatur molestias tempore? Labore
                              debitis molestias dolorem eum veniam dicta
                              incidunt assumenda a quia at doloremque
                              repellendus modi obcaecati, eaque accusantium
                              eius, necessitatibus magni commodi nostrum
                              voluptatum blanditiis maiores sit deleniti? Non
                              blanditiis delectus reprehenderit eum a
                              repellendus veritatis sequi fugit beatae dolor at
                              perspiciatis inventore similique quae neque, rem
                              ab laborum sapiente nihil voluptas magni quod
                              ipsum voluptatum. Animi officiis quaerat expedita
                              facilis, voluptatum, corrupti molestias nemo omnis
                              dicta recusandae quas? Iste obcaecati asperiores
                              sint saepe, facere ipsum. Dicta, beatae! Nulla
                              sint eveniet cum, beatae aperiam magnam
                              perspiciatis quisquam inventore iure ullam labore!
                              A dolore eligendi dolor aliquid laudantium
                              quisquam similique saepe, adipisci eaque deleniti
                              ipsa alias, necessitatibus illo aliquam natus quia
                              tenetur iure vel! Explicabo nulla facilis harum
                              beatae, adipisci architecto aut aliquid quisquam
                              quidem, natus fugiat eos magnam voluptatum ut
                              impedit eius alias? Delectus, nihil porro
                              voluptates ad excepturi consequuntur odio eos
                              aspernatur quod magnam! Repudiandae tempora et
                              laudantium impedit labore facilis assumenda id,
                              asperiores autem delectus est quisquam unde
                              molestias! Consectetur, reiciendis neque. At natus
                              nam dolorum aliquid, sequi nemo sunt voluptatibus
                              culpa soluta sed voluptas beatae eaque cumque
                              commodi? Tempora non quo dignissimos doloribus vel
                              nostrum id impedit reiciendis modi facere ex
                              corporis, aperiam molestias consectetur officia
                              voluptas enim magni harum delectus perferendis
                              voluptates. Provident exercitationem beatae, eum
                              sint, corporis deserunt quasi quod fugit iste sunt
                              quisquam dignissimos sapiente, quia earum nemo
                              laudantium nisi reiciendis asperiores blanditiis
                              consectetur a laborum deleniti! Provident sed
                              fugit eos atque illum. Sapiente assumenda
                              inventore ab eveniet magni autem quidem, quam
                              dicta fuga vitae?
                         </div>
                    </article>
               </section>
          </main>
     );
}

export default Home;
