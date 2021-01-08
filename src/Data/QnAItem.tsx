import { ItemData } from './ItemData';

export const QnAItemData: ItemData = {
  title: 'QnA',
  img_small: { src: 'images/qna.png', alt: '' },
  img_large: {
    src: 'images/qna.png',
    alt: '',
    maxWidth: '600px',
    maxHeight: '600px',
  },
  role: 'Fullstack Developer',
  links: [
    {
      href: 'https://github.com/lambriggerbrian/QnA-Frontend',
      text: 'Frontend Repo',
    },
    {
      href: 'https://github.com/lambriggerbrian/QnA-Backend',
      text: 'Backend Repo',
    },
    { href: 'https://reactjs.org/', text: 'React' },
    { href: 'https://dotnet.microsoft.com/apps/aspnet', text: 'ASP.Net' },
  ],
  synopsis: '',
  summary:
    'A Quora/StackOverflow type Question-Answer site build with React and ASP.Net',
};
