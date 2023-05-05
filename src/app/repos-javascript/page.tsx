import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Repository } from '@/data/types';

const fetchRepos = () => {
   return fetch('https://api.github.com/users/Spanioulis/repos').then((res) => res.json());
};

type ReposProps = {};

export default async function ReposJavaScript() {
   const repos = await fetchRepos();

   return (
      <div>
         <Header>
            <section className="bg-np-petra bg-no-repeat bg-center bg-cover mb-[-60px] flex flex-col text-center pt-20 gap-10 px-10 pb-10">
               <div>
                  <h1 className="text-yellow-500/80 font-extrabold text-3xl">Repositorios JavaScript</h1>
               </div>
               <div className="flex flex-wrap gap-10 justify-around">
                  {repos
                     .filter((repo: Repository) => repo.language === 'JavaScript')
                     .map((repo: Repository) => {
                        return <Card repo={repo} key={repo.id} />;
                     })}
               </div>
            </section>
         </Header>
         <Footer />
      </div>
   );
}
