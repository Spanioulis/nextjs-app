import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react';

const fetchRepos = () => {
   return fetch('https://api.github.com/users/Spanioulis/repos').then((res) => res.json());
};

type ReposProps = {};

export default async function ReposPage() {
   const repos = await fetchRepos();

   return (
      <div>
         <Header>
            <section className="bg-np-petra h-screen bg-no-repeat bg-center bg-cover mb-[-60px] flex justify-center pt-48 flex-wrap gap-10">
               {repos.map(
                  (repo: {
                     id: Key | null | undefined;
                     name:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                  }) => {
                     return (
                        <article key={repo.id} className="text-white">
                           <h2>{repo.name}</h2>
                        </article>
                     );
                  }
               )}
            </section>
         </Header>
         <Footer />
      </div>
   );
}
