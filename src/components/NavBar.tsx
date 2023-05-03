import navItems from '@/data/navBarData';
import Link from 'next/link';

export default function NavBar() {
   return (
      <menu>
         <ul>
            <li>
               {navItems.map((item) => (
                  <Link key={item.text} href={item.route}>
                     {item.text}
                  </Link>
               ))}
            </li>
         </ul>
      </menu>
   );
}
