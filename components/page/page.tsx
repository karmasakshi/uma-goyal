import Head from 'next/head';
import Nav from '../nav/nav';

interface PageProps {
  children: JSX.Element;
  title: string;
}

const Page: (props: PageProps) => JSX.Element = ({ children, title }: PageProps): JSX.Element => (

  <>

    <Head><title>{'Uma Goyal' + (title.length ? ' - ' + title : '')}</title></Head>

    <Nav></Nav>

    <section className="pb-32 pt-16 px-4 text-center">{children}</section>

  </>

);

export default Page;
