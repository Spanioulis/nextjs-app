import navItems from '@/data/navBarData';
import Link from 'next/link';

export default function NavBar() {
   return (
      <menu className="bg-black/60 text-white relative z-10">
         <ul className="flex justify-center gap-12 border-b-[1px] border-t-[1px] border-yellow-600 uppercase">
            {navItems.map((item) => (
               <Link
                  className="hover:text-white text-white/70 transition-all duration-300 py-4"
                  key={item.text}
                  href={item.route}
               >
                  {item.text}
               </Link>
            ))}
         </ul>
      </menu>
   );
}
