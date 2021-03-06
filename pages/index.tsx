import Page from "@components/page/page";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

const Index: FunctionComponent = (): ReactElement => (
  <Page title="">
    <div className="mt-24"></div>

    <div className="qr-code-container">
      <Image alt="Logo" height={128} src="/logo.png" width={128} />
    </div>

    <h1 className="mt-16">
      <span>Hi, I&apos;m Uma.</span>
      <br />
      <span>I&apos;m an Illustrator & Graphic Designer from Mumbai.</span>
    </h1>
  </Page>
);

export default Index;
