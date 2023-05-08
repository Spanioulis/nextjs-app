import navItems from '@/data/navbarItems';
import { Nothing_You_Could_Do } from 'next/font/google';
import NavbarLink from './NavbarLink';

const nothingYouFont = Nothing_You_Could_Do({
   weight: '400',
   subsets: ['latin']
});

export default function NavBar() {
   return (
      <header>
         <nav className="relative z-10 bg-black/60 text-white">
            <ul className="flex justify-center gap-12 border-b-[1px] border-t-[1px] border-yellow-600 uppercase">
               <li className="fixed left-0 ml-5 py-4 text-2xl text-black/30">
                  <h1 className={nothingYouFont.className}>Spanioulis</h1>
               </li>
               {navItems.map((item) => (
                  <NavbarLink item={item} key={item.route} />
               ))}
            </ul>
         </nav>
      </header>
   );
}
