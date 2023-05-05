import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { filterJavaScript } from '@/data/filterLanguage';
import { Repository } from '@/data/types';

const fetchRepos = () => {
   return fetch('https://api.github.com/users/Spanioulis/repos').then((res) => res.json());
};

export default async function ReposTypeScript() {
   const repos = await fetchRepos();

   return (
      <div>
         <Header>
            <div className="bg-selva-amazonas h-[554px] bg-no-repeat bg-center bg-cover mb-[-60px]"></div>
         </Header>
         <Footer />
      </div>
   );
}
