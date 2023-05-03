import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
   title: 'Next.js - Project',
   description: 'Created with Next.js by Spanioulis'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body>
            <NavBar />

            <main>{children}</main>
         </body>
      </html>
   );
}
