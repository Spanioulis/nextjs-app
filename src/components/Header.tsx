import React from 'react';

type HeaderProps = {
   children?: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
   return <div className="relative top-[-60px]">{children}</div>;
}
