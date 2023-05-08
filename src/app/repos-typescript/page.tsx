import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { filterTypeScript } from '@/data/filterLanguage';
import { byUpdate } from '@/data/sortUpdated';
import { Repository } from '@/data/types';

const fetchRepos = () => {
   return fetch('https://api.github.com/users/Spanioulis/repos').then((res) => res.json());
};

export default async function ReposTypeScript() {
   const repos = await fetchRepos();
   repos.sort(byUpdate);

   return (
      <div>
         <Header>
            <section className="mb-[-60px] flex h-screen flex-col gap-6 bg-blue-wall bg-cover bg-center bg-no-repeat px-10 pb-10 pt-28 text-center">
               <div>
                  <h1 className="mb-6 text-3xl font-extrabold text-white/95">Repositorios TypeScript</h1>
               </div>
               <div className="flex flex-wrap justify-around gap-10">
                  {repos.filter(filterTypeScript).map((repo: Repository, index: number) => {
                     return <Card repo={repo} key={repo.id} index={index} />;
                  })}
               </div>
            </section>
         </Header>
         <Footer />
      </div>
   );
}
