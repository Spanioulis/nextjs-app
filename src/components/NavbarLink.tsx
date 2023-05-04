import Link from 'next/link';

type NavbarLinkProps = {
   item: {
      text: string;
      route: string;
   };
};

export default function NavbarLink({ item }: NavbarLinkProps) {
   return (
      <li className="hover:text-white text-white/70 transition-all duration-300 py-4">
         <Link href={item.route}>{item.text}</Link>
      </li>
   );
}
