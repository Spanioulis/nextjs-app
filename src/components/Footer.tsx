import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
   return (
      <footer className="flex w-full items-center justify-center gap-10 border-t-[1px] border-yellow-600 bg-black/20 py-4">
         <Link
            className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105"
            href="https://github.com/Spanioulis/"
            rel="noopener noreferrer"
            target="_blank"
         >
            <FaGithub />
         </Link>
         <Link
            className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105"
            href="https://www.linkedin.com/in/sergio-paniagua-sanchez/"
            rel="noopener noreferrer"
            target="_blank"
         >
            <FaLinkedinIn />
         </Link>
         <Link
            className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105"
            href="mailto:pani77sps@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
         >
            <AiOutlineMail />
         </Link>
      </footer>
   );
}
