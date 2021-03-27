import Page from "@components/page/page";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

const Contact: FunctionComponent = (): ReactElement => (
  <Page title="Contact">
    <article>
      <h1>
        <span>If you&apos;d like to hire me for a freelance gig,</span>
        <br />
        <span>contact me on </span>
        <a className="link" href="https://www.instagram.com/_umagoyal_/" rel="noreferrer" target="_blank">
          my Instagram
        </a>
        <span>:</span>
      </h1>
      <a className="qr-code-container" href="https://www.instagram.com/_umagoyal_/" rel="noreferrer" target="_blank">
        <Image alt="Instagram QR Code" height={128} src="/qr-codes/instagram.png" width={128} />
      </a>
    </article>
  </Page>
);

export default Contact;
