import Page from '@components/page/page';
import Image from 'next/image';

const Home: () => JSX.Element = (): JSX.Element => (

  <Page title="">

    <div className="qr-code-container">
      <Image alt="Logo" height={128} src="/logo.svg" width={128} />
    </div>

    <h1 className="mt-16">Hi, I&apos;m Uma.<br />I&apos;m an Illustrator & Graphic Designer from Mumbai.</h1>

  </Page>

);

export default Home;
