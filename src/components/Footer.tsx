import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type FooterProps = {
   children?: React.ReactNode;
};

export default function Footer({ children }: FooterProps) {
   return (
      <footer className="flex items-center justify-center gap-10 py-4 w-full border-t-[1px] border-yellow-600 bg-black/20">
         <Link
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            href="https://github.com/Spanioulis/"
            rel="noopener noreferrer"
            target="_blank"
         >
            <FaGithub />
         </Link>
         <Link
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            href="https://www.linkedin.com/in/sergio-paniagua-sanchez/"
            rel="noopener noreferrer"
            target="_blank"
         >
            <FaLinkedinIn />
         </Link>
         <Link
            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            href="mailto:pani77sps@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
         >
            <AiOutlineMail />
         </Link>
      </footer>
   );
}
