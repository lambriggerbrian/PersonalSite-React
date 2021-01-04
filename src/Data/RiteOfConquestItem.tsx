import { ItemData } from './ItemData';

export const RiteOfConquestItemData: ItemData = {
  title: 'Rite of Conquest',
  img_small: { src: 'images/roc.png', alt: '' },
  img_large: { src: 'images/roc.png', alt: '' },
  links: [
    { href: 'https://github.com/lambriggerbrian/Conquest', text: 'Repo' },
    { href: 'https://unity.com/', text: 'Unity' },
    {
      href: 'https://github.com/BeardedManStudios/ForgeNetworkingRemastered',
      text: 'Forge Networking',
    },
  ],
  synopsis: 'Rite of Conquest Senior Project',
  summary:
    'A 1v1-focused multiplayer RTS created as a capstone project. The game was built on the Unity Engine by a 3-man team utilizing the Forge Networking Remastered library for online play.',
};
