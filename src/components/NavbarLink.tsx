'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Roboto } from 'next/font/google';

type NavbarLinkProps = {
   item: {
      text: string;
      route: string;
   };
};

const roboto = Roboto({
   weight: '400',
   subsets: ['latin']
});

export default function NavbarLink({ item }: NavbarLinkProps) {
   const pathname = usePathname();

   const isActive = pathname === item.route;

   return (
      <li className={`${roboto.className} py-4`}>
         <Link
            href={item.route}
            className={`text-white/70 transition-all duration-300 hover:text-white ${
               isActive ? 'font-semibold text-white/100' : ''
            }`}
         >
            {item.text}
         </Link>
      </li>
   );
}
