import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { ReactNode } from 'react';

interface StatefulLinkProps {
  children: ReactNode;
  href: string;
}

const StatefulLink: (props: StatefulLinkProps) => JSX.Element = ({ children, href }: StatefulLinkProps): JSX.Element => {

  const router: NextRouter = useRouter();

  const isLinkActive: boolean = router.pathname === href;

  const classNames: string[] = ['font-bold', 'focus:outline-none', 'focus:ring', 'px-2', 'rounded', 'text-4xl'];

  if (isLinkActive) {

    classNames.push('text-blue-500');

  }

  return (

    <Link href={href}>
      <a className={classNames.join(' ')}>{children}</a>
    </Link>

  );

};

export default StatefulLink;
