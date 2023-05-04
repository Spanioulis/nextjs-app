import navItems from '@/data/navbarLinks';
import Link from 'next/link';
import { Nothing_You_Could_Do } from 'next/font/google';

const nothingYouFont = Nothing_You_Could_Do({
   weight: '400',
   subsets: ['latin']
});

export default function NavBar() {
   return (
      <header>
         <nav className="bg-black/60 text-white relative z-10">
            <ul className="flex justify-center gap-12 border-b-[1px] border-t-[1px] border-yellow-600 uppercase">
               <li className="fixed left-0 py-4 ml-5 text-2xl text-black/30">
                  <h1 className={nothingYouFont.className}>Spanioulis</h1>
               </li>
               {navItems.map((item) => (
                  <li key={item.route} className="hover:text-white text-white/70 transition-all duration-300 py-4">
                     <Link href={item.route}>{item.text}</Link>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}
