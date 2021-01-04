import { ItemData } from './ItemData';

export const HypedItemData: ItemData = {
  title: 'HyPED',
  img_small: { src: 'images/hyped.png', alt: '' },
  img_large: { src: 'images/hyped.png', alt: '' },
  links: [
    { href: 'https://github.com/JoeOsborn/hyped', text: 'Repo' },
    {
      href: 'https://aaai.org/ocs/index.php/AIIDE/AIIDE17/paper/view/15900',
      text: 'Publication',
    },
  ],
  synopsis: 'HyPED: Modeling and Analyzing Action Games as Hybrid Systems',
  summary:
    'A research project to create a formal, hybrid-automata-based language to aid in game design verification. The interpreter and game engine were written in Python, and the engine was used to test various RRT-algorithms on complex game spaces.',
};
