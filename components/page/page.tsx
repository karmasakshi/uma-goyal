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

    <section className="px-4 py-16 text-center">{children}</section>

  </div>

);

export default Page;
