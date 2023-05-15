import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { filterJavaScript } from '@/data/filterLanguage';
import { byUpdate } from '@/data/sortUpdated';
import { Repository } from '@/data/types';

const fetchRepos = () => {
   return fetch('https://api.github.com/users/Spanioulis/repos', { cache: 'no-store' }).then((res) => res.json());
};

export default async function ReposJavaScript() {
   const repos = await fetchRepos();
   repos.sort(byUpdate);

   return (
      <div>
         <Header>
            <section className="mb-[-60px] flex flex-col gap-6 bg-yellow-wall bg-cover bg-center bg-no-repeat px-10 pb-10 pt-28 text-center">
               <div>
                  <h1 className="mb-6 text-3xl font-bold text-white/95">Repositorios JavaScript</h1>
               </div>
               <div className="flex flex-wrap justify-around gap-10">
                  {repos.filter(filterJavaScript).map((repo: Repository, index: number) => {
                     return <Card repo={repo} key={repo.id} index={index} />;
                  })}
               </div>
            </section>
         </Header>
         <Footer />
      </div>
   );
}
