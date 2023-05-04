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
      text: 'About',
      route: '/about'
   },
   {
      text: 'News',
      route: '/news'
   }
];

export default navItems;
