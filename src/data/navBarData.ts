type MenuItemProps = {
   text: string;
   route: string;
};

const navItems: MenuItemProps[] = [
   {
      text: 'HOME',
      route: '/'
   },
   {
      text: 'ABOUT',
      route: '/about'
   },
   {
      text: 'NEWS',
      route: '/news'
   }
];

export default navItems;
