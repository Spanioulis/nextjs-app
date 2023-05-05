import { Repository } from '@/data/types';
import Link from 'next/link';
import { VscGithubAlt, VscGithubInverted } from 'react-icons/vsc';

type CardProps = {
   repo: Repository;
   index: number;
};

export default function Card({ repo, index }: CardProps) {
   return (
      <article
         key={repo.id}
         className="text-black border-[1px] border-gray-400/40 rounded-sm px-2 backdrop-blur-lg h-[150px] w-[225px] flex justify-around flex-col hover:scale-105"
      >
         <p
            className="self-start w-4 p-[1px] text-gray-200/70 font-semibold"
            style={{ textShadow: '8px 10px 10px rgba(0, 0, 0, 0.6' }}
         >
            {index + 1}
         </p>
         <h2 className="uppercase font-semibold text-xl text-stone-800">{repo.name}</h2>
         <div className="flex justify-center">
            <Link
               className="rounded-full shadow-xl shadow-black-800 p-3 max-w-fit cursor-pointer hover:scale-110 ease-in duration-300"
               href={repo.html_url}
               target="_blank"
               rel="noopener noreferrer"
            >
               {index % 2 === 0 ? <VscGithubAlt /> : <VscGithubInverted />}
            </Link>
         </div>

         <p className="text-sm">
            {new Date(repo.created_at).toLocaleDateString('es-ES', {
               year: 'numeric',
               month: 'long',
               day: 'numeric'
            })}
         </p>
         <p className="text-[10px] self-end">
            <i>Tamaño</i>: {repo.size}
         </p>
      </article>
   );
}
