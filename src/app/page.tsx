import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { VscGithubInverted } from 'react-icons/vsc';

export default function Home() {
   return (
      <div>
         <Header>
            <div className="mb-[-60px] flex h-[554px] justify-center bg-neuronal-grid bg-cover bg-center bg-no-repeat pt-[100px] text-white">
               <main className="relative h-fit w-2/3 self-start rounded-sm bg-black/30 p-6 leading-relaxed">
                  Este es mi primer trabajo realizado con Next.js. He creado dos rutas más, aparte de la Home, donde se
                  pueden encontrar mis repositorios de GitHub (proyectos de React realizados con JavaScript y
                  TypeScript), cuya información he obtenido de la propia API de GitHub. Clicando en el icono de cada{' '}
                  <i>card</i>, te redirigirá a cada uno de los repositorios.
               </main>
            </div>
         </Header>
         <Footer />
      </div>
   );
}
