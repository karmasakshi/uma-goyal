import Image from 'next/image';
import Page from '../components/page/page';

interface ContactProps { }

const Contact: (props: ContactProps) => JSX.Element = (): JSX.Element => (

  <Page title="Contact">

    <article>
      <h1>If you&apos;d like to hire me for a freelance gig,<br />contact me on <a className="link" href="https://www.instagram.com/_umagoyal_/" rel="noreferrer" target="_blank">my Instagram</a>:</h1>
      <a className="qr-code-container" href="https://www.instagram.com/_umagoyal_/" rel="noreferrer" target="_blank">
        <Image alt="Instagram QR Code" height={128} src="/qr-codes/instagram.png" width={128} />
      </a>
    </article>

  </Page>

);

export default Contact;
