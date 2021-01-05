import { ItemData } from './ItemData';

export const ECSItemData: ItemData = {
  title: 'ECS',
  img_small: { src: 'images/gudetama.jpg', alt: '' },
  img_large: { src: 'images/gudetama.jpg', alt: '' },
  role: 'C++ & .NET C# Programmer',
  links: [
    { href: 'https://github.com/lambriggerbrian/ECSEngine', text: 'Repo' },
    {
      href:
        'https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet-framework',
      text: 'Microsoft .NET',
    },
    { href: 'http://bitsquid.blogspot.com/', text: 'Bitsquid Engine' },
    {
      href:
        'https://smile.amazon.com/Real-Time-Collision-Detection-Interactive-Technology/dp/1558607323/ref=smi_www_rco2_go_smi_g4368549507?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0&ie=UTF8',
      text: 'Realtime Collision by Kaufmann',
    },
  ],
  synopsis: 'Entity Component System',
  summary:
    'A personal project of mine built in C++ and C# on .NET Core. The aim is to build a game logic system using the cache-locality of an Entity Component System. Heavily inspired by the Bitsquid Engine and the book Realtime 3D Collision Detection by Morgan Kaufmann',
};
