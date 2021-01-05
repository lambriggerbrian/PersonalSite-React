import { ItemData } from './ItemData';

export const ThisSiteItemData: ItemData = {
  title: 'This Website',
  img_small: { src: 'logo512.png', alt: '' },
  img_large: {
    src: 'logo512.png',
    alt: '',
    maxWidth: '300px',
    maxHeight: '300px',
  },
  role: 'Frontend Developer',
  links: [
    {
      href: 'https://github.com/lambriggerbrian/PersonalSite-React',
      text: 'Repo',
    },
    { href: 'https://reactjs.org/', text: 'React' },
    { href: 'https://emotion.sh/docs/introduction', text: 'Emotion.CSS' },
  ],
  synopsis: '',
  summary:
    'This site was created using React and Emotion.CSS, served by a Linux VPS running Nginx.',
};
