import imgPhoto1 from '../../assets/images/photo lille/pexels-matteo-angeloni-18596692bis.jpg';
import imgPhoto2 from '../../assets/images/photo lille/pexels-lisa-fotios-19782864.jpg';
import imgPhoto3 from '../../assets/images/photo lille/zhu-yunxiao-ac-Kw8EbQVs-unsplash.jpg';

import img1Marcq500 from '../../assets/images/picturesOffices/img1Marcq500.webp';
import img1Marcq1000 from '../../assets/images/picturesOffices/img1Marcq1000.webp';
import img1Marcq1500 from '../../assets/images/picturesOffices/img1Marcq1500.webp';

import img2Marcq500 from '../../assets/images/picturesOffices/img2Marcq1000.webp';
import img2Marcq1000 from '../../assets/images/picturesOffices/img2Marcq1000.webp';
import img2Marcq1500 from '../../assets/images/picturesOffices/img2Marcq1500.webp';

import img3Marcq500 from '../../assets/images/picturesOffices/img3Marcq1000.webp';
import img3Marcq1000 from '../../assets/images/picturesOffices/img3Marcq1000.webp';
import img3Marcq1500 from '../../assets/images/picturesOffices/img3Marcq1500.webp';

import imgProfilDefault from '../../assets/images/photo_vache_500px.jpg';
import imgProfil1000 from '../../assets/images/photo_vache_1000px.jpg';
import imgProfil1500 from '../../assets/images/photo_vache_1500px.jpg';

export const images = [
     {
          id: 'photo2',
          type: 'profil',
          message: 'votre praticien',
          src: imgProfilDefault,
          srcset: `${imgProfilDefault} 500w, ${imgProfil1000} 1000w, ${imgProfil1500} 1500w`,
     },
];

export const offices = [
     {
          id: 'c3',
          town: 'Marcq-en-Barœul',
          heroSectionSrc: imgPhoto1,
          zipCode: '59700',
          adress: '3 Place Clovis Tiers',
          googleMapLink: 'https://goo.gl/maps/qMUoPkviy7ZhFjCQ8',
          doctolibLink:
               'https://www.doctolib.fr/osteopathe/villeneuve-d-ascq/simon-lesecq?pid=practice-433375',
          images: [
               {
                    src: img1Marcq500,
                    srcset: `${img1Marcq500} 500w, ${img1Marcq1000} 1000w, ${img1Marcq1500} 1500w`,
               },
               {
                    src: img2Marcq500,
                    srcset: `${img2Marcq500} 500w, ${img2Marcq1000} 1000w, ${img2Marcq1500} 1500w`,
               },
               {
                    src: img3Marcq500,
                    srcset: `${img3Marcq500} 500w, ${img3Marcq1000} 1000w, ${img3Marcq1500} 1500w`,
               },
          ],
     },
     {
          id: 'c2',
          town: 'Dunkerque',
          heroSectionSrc: imgPhoto2,
          zipCode: '59240',
          adress: '574 Avenue du Stade',
          googleMapLink: 'https://goo.gl/maps/xfS49Jq9JgAh7P3BA',
          doctolibLink:
               'https://www.doctolib.fr/osteopathe/villeneuve-d-ascq/simon-lesecq?pid=practice-136052',
          images: [
               {
                    src: img1Marcq500,
                    srcset: `${img1Marcq500} 500w, ${img1Marcq1000} 1000w, ${img1Marcq1500} 1500w`,
               },
               {
                    src: img2Marcq500,
                    srcset: `${img2Marcq500} 500w, ${img2Marcq1000} 1000w, ${img2Marcq1500} 1500w`,
               },
               {
                    src: img3Marcq500,
                    srcset: `${img3Marcq500} 500w, ${img3Marcq1000} 1000w, ${img3Marcq1500} 1500w`,
               },
          ],
     },
     {
          id: 'c1',
          town: 'Wasquehal',
          heroSectionSrc: imgPhoto3,
          zipCode: '59290',
          adress: '12 Rue de la Ladrié',
          googleMapLink: 'https://goo.gl/maps/xxwBeVjKWDJpxf356',
          doctolibLink:
               'https://www.doctolib.fr/osteopathe/villeneuve-d-ascq/simon-lesecq?pid=practice-65233',
          images: [
               {
                    src: img1Marcq500,
                    srcset: `${img1Marcq500} 500w, ${img1Marcq1000} 1000w, ${img1Marcq1500} 1500w`,
               },
               {
                    src: img2Marcq500,
                    srcset: `${img2Marcq500} 500w, ${img2Marcq1000} 1000w, ${img2Marcq1500} 1500w`,
               },
               {
                    src: img3Marcq500,
                    srcset: `${img3Marcq500} 500w, ${img3Marcq1000} 1000w, ${img3Marcq1500} 1500w`,
               },
          ],
     },
];
