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
         className="relative flex h-[175px] w-[225px] flex-col justify-around rounded-md bg-black/50 px-2 text-white transition-all duration-300 ease-in hover:scale-105"
      >
         <p
            className="w-4 self-start p-[1px] font-semibold text-gray-200/70"
            style={{ textShadow: '8px 10px 10px rgba(0, 0, 0, 0.6' }}
         >
            {index + 1}
         </p>
         <h2 className="text-xl font-medium uppercase">{repo.name}</h2>
         <div className="flex justify-center">
            <Link
               className="shadow-black-800 max-w-fit cursor-pointer rounded-full p-3 shadow-xl duration-300 ease-in hover:scale-110"
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
         <p className="self-end text-[10px]">
            <i>Tamaño</i>: {repo.size}
         </p>
      </article>
   );
}
