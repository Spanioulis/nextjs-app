import './globals.css';
import NavBar from '@/app/NavBar';
import { Roboto } from 'next/font/google';

export const metadata = {
   title: 'GitHub Repositories',
   description: 'Created with Next.js by Spanioulis'
};

const roboto = Roboto({
   weight: '400',
   subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className="scroll">
            <NavBar />
            <main className={roboto.className}>{children}</main>
         </body>
      </html>
   );
}
