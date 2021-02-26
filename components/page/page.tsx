import Nav from '@components/nav/nav';
import Head from 'next/head';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import styles from './page.module.scss';

interface PageProps {
  children: ReactNode;
  title: string;
}

const Page: FunctionComponent<PageProps> = ({ children, title }: PageProps): ReactElement => (

  <div className={styles.page}>

    <Head><title>{'Uma Goyal' + (title.length ? ' - ' + title : '')}</title></Head>

    <Nav></Nav>

    <div className="pb-16 pt-4 px-4 text-center">{children}</div>

  </div>

);

export default Page;
