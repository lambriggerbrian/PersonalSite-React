import { ItemData } from './ItemData';

export const ThisSiteItemData: ItemData = {
  title: 'This Site',
  img_small: { src: 'logo512.png', alt: '' },
  img_large: { src: 'logo512.png', alt: '' },
  links: [
    { href: '', text: 'Repo' },
    { href: '', text: 'React' },
    { href: '', text: 'Emotion.CSS' },
  ],
  synopsis: '',
  summary:
    'This site was created using React and Emotion.CSS, served by a Linux VPS running Nginx.',
};
