type MenuItemProps = {
   text: string;
   route: string;
};

const navItems: MenuItemProps[] = [
   {
      text: 'Home',
      route: '/'
   },
   {
      text: 'Repos JS',
      route: '/repos'
   },
   {
      text: 'News',
      route: '/news'
   }
];

const activeClass = 'hover:text-white text-white/70 transition-all duration-300 py-4 scale-105 font-bold';

export default navItems;
export { activeClass };
