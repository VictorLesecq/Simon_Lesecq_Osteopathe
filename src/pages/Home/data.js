import imgphoto1 from '../../assets/images/pexels-eberhard-grossgasteiger-691668.jpg';

import imgProfilDefault from '../../assets/images/photo_vache_500px.jpg';
import imgProfil1000 from '../../assets/images/photo_vache_1000px.jpg';
import imgProfil1500 from '../../assets/images/photo_vache_1500px.jpg';

export const images = [
     {
          id: 'photo1',
          type: 'heroSection',
          message: '',
          src: imgphoto1,
     },
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
          zipCode: '59700',
          adress: '3 Place Clovis Tiers',
          googleMapLink: 'https://goo.gl/maps/qMUoPkviy7ZhFjCQ8',
          doctolibLink:
               'https://www.doctolib.fr/osteopathe/villeneuve-d-ascq/simon-lesecq?pid=practice-433375',
     },
     {
          id: 'c2',
          town: 'Dunkerque',
          zipCode: '59240',
          adress: '574 Avenue du Stade',
          googleMapLink: 'https://goo.gl/maps/xfS49Jq9JgAh7P3BA',
          doctolibLink:
               'https://www.doctolib.fr/osteopathe/villeneuve-d-ascq/simon-lesecq?pid=practice-136052',
     },
     {
          id: 'c1',
          town: 'Wasquehal',
          zipCode: '59290',
          adress: '12 Rue de la Ladrié',
          googleMapLink: 'https://goo.gl/maps/xxwBeVjKWDJpxf356',
          doctolibLink:
               'https://www.doctolib.fr/osteopathe/villeneuve-d-ascq/simon-lesecq?pid=practice-65233',
     },
];
