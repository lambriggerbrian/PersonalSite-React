import { ItemData } from './ItemData';

export const ImageServerItemData: ItemData = {
  title: 'Image Server',
  img_small: { src: 'images/imageserver.png', alt: '' },
  img_large: { src: 'images/imageserver.png', alt: '' },
  role: 'Fullstack Developer, Computer Vision Programmer, Web Designer',
  links: [
    { href: 'https://github.com/lambriggerbrian/ImageServer', text: 'Repo' },
    { href: 'http://www.web2py.com/', text: 'Web2Py' },
    { href: 'https://pypi.org/project/vuepy/', text: 'VuePy' },
    { href: 'https://vuejs.org/', text: 'Vue.JS' },
    { href: 'https://opencv.org/', text: 'OpenCV' },
  ],
  synopsis: 'OpenCV Image Server',
  summary:
    'A Web2Py-based website using Python bindings for OpenCV to run Haar-Cascade facial detection.',
};
