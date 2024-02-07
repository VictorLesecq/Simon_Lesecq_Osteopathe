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

import picto__one from '../../assets/images/picto/teachings.png';
import picto__two from '../../assets/images/picto/massage.png';
import picto__three from '../../assets/images/picto/collaborate.png';

export const picto = [
     {
          id: 'picto1',
          src: picto__one,
          author: 'https://www.flaticon.com/free-icons/teaching',
          message: 'rddrt',
     },
     {
          id: 'picto2',
          src: picto__two,
          author: 'https://www.flaticon.com/fr/icones-gratuites/massage',
          message: 'freepik',
     },
     {
          id: 'picto3',
          src: picto__three,
          author: 'https://www.flaticon.com/free-icons/collaboration',
          message: 'small.smiles',
     },
];

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
          heroSectionPhotoLink:
               'https://www.pexels.com/fr-fr/@matteo-angeloni-106557007/',
          heroSectionPhotoAuthor: 'Matteo Angeloni',
          zipCode: '59700',
          adress: '3 Place Clovis Tiers',
          googleMapLink: 'https://goo.gl/maps/qMUoPkviy7ZhFjCQ8',
          googleMapIFrameLink:
               'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.3647244424496!2d3.0969473882770306!3d50.65748839930189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329f561aba69f%3A0xc056728a868dd8f8!2s3%20Pl.%20Clovis%20Tiers%2C%2059700%20Marcq-en-Bar%C5%93ul!5e0!3m2!1sfr!2sfr!4v1705594059846!5m2!1sfr!2sfr',
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
          heroSectionPhotoLink: 'https://www.pexels.com/fr-fr/@fotios-photos/',
          heroSectionPhotoAuthor: 'Lisa Fotios',
          zipCode: '59240',
          adress: '574 Avenue du Stade',
          googleMapLink: 'https://goo.gl/maps/xfS49Jq9JgAh7P3BA',
          googleMapIFrameLink:
               'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.086638441602!2d2.389895376256816!3d51.033020545247716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc8c5ec8bfb729%3A0xeae6685be90c005d!2s574%20Av.%20du%20Stade%2C%2059240%20Dunkerque!5e0!3m2!1sfr!2sfr!4v1705593968324!5m2!1sfr!2sfr',
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
          heroSectionPhotoLink: 'https://unsplash.com/fr/@zhuyx',
          heroSectionPhotoAuthor: 'Zhu Yunxiao',
          zipCode: '59290',
          adress: '12 Rue de la Ladrié',
          googleMapLink: 'https://goo.gl/maps/xxwBeVjKWDJpxf356',
          googleMapIFrameLink: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.6617027164593!2d3.119394876234039!3d50.65197367283362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329e9755ca8f3%3A0x3f4cff73605f84a9!2s12%20Rue%20de%20la%20Ladri%C3%A9%2C%2059650%20Villeneuve-d'Ascq!5e0!3m2!1sfr!2sfr!4v1705594817054!5m2!1sfr!2sfr`,

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
