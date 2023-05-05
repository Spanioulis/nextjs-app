import { Repository } from '@/data/types';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';

type CardProps = {
   repo: Repository;
};

export default function Card({ repo }: CardProps) {
   return (
      <article
         key={repo.id}
         className="text-black border-[1px] border-white rounded-md px-2 backdrop-blur-sm h-[150px] w-[150px] flex justify-around flex-col"
      >
         <h2 className="uppercase font-semibold">{repo.name}</h2>
         <Link
            className="rounded-full shadow-xl shadow-black-800 p-3 max-w-fit cursor-pointer hover:scale-110 ease-in duration-300"
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
         >
            <VscGithubAlt />
         </Link>
      </article>
   );
}
