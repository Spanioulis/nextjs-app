import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
   return (
      <div>
         <Header>
            <div className="bg-neuronal-grid h-[554px] bg-no-repeat bg-center bg-cover mb-[-60px] pt-[100px]">
               Estamos en la home
            </div>
         </Header>
         <Footer />
      </div>
   );
}
