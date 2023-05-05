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
      text: 'JavaScript',
      route: '/repos-javascript'
   },
   {
      text: 'TypeScript',
      route: '/repos-typescript'
   }
];

const activeClass = 'hover:text-white text-white/70 transition-all duration-300 py-4 scale-105 font-bold';

export default navItems;
export { activeClass };
