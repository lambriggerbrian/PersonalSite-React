import { ItemData } from './ItemData';

export const NTDDiagramsItemData: ItemData = {
  title: 'NTD Diagrams',
  img_small: { src: 'images/ntdhome.png', alt: '' },
  img_large: { src: 'images/ntdmodal.png', alt: '' },
  links: [
    { href: '', text: 'Check it Out' },
    { href: 'https://github.com/lambriggerbrian/ntddiagrams', text: 'Repo' },
    { href: 'https://nodejs.org/en/about/', text: 'Node.JS' },
    { href: 'https://expressjs.com/', text: 'Express' },
    { href: 'https://www.heroku.com/', text: 'Heroku' },
  ],
  synopsis: 'NTD Diagrams Site',
  summary:
    'A site built on Node.JS with the Express.JS framework to display diagrams for a student sharing diagrams with a Biology class. MongoDB was used for posting and authentication (authentication no longer required for access), AWS for CDN, and Heroku as the hosting service.',
};
