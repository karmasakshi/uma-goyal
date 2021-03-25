import Page from "@components/page/page";
import ProductCarousel from "@components/product-carousel/product-carousel";
import { PRODUCTS } from "@constants/products";
import { Product } from "@interfaces/product";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

interface WorkProps {
  products: Product[];
}

const Work: FunctionComponent<WorkProps> = ({ products }: WorkProps): ReactElement => (
  <Page title="Work">
    <article>
      <h1>Illustration styles I&apos;ve worked on:</h1>
      <ProductCarousel products={products}></ProductCarousel>
    </article>

    <article className="mt-16">
      <h1>
        <span>A cute </span>
        <a className="link" href="https://play.google.com/store/apps/details?id=com.umagoyal.cmiyc" rel="noreferrer" target="_blank">
          WhatsApp Sticker-Pack
        </a>
        <span> I made:</span>
      </h1>
      <a className="qr-code-container" href="https://play.google.com/store/apps/details?id=com.umagoyal.cmiyc" rel="noreferrer" target="_blank">
        <Image alt="Cat Me If You Can QR Code" height={128} src="/qr-codes/cat-me-if-you-can.png" width={128} />
      </a>
    </article>

    <article className="mt-16">
      <h1>Workshops I&apos;ve conducted:</h1>
      <ul>
        <li>
          <span>&middot; </span>
          <a className="link" href="https://insider.in/charcoal-painting-art-workshop-may5-2019/event">
            Charcoal Painting
          </a>
          <span> (5th May 2019)</span>
        </li>
        <li>
          <span>&middot; </span>
          <a className="link" href="https://doolally.in/?page/events/charcoal-painting-art-workshop-shiva-in-moonlight-70923eb">
            Shiva in Moonlight
          </a>
          <span> (26th April 2019)</span>
        </li>
        <li>
          <span>&middot; </span>
          <a className="link" href="https://insider.in/tranquil-buddha-charcoal-painting-art-workshop-apr6-2019/event">
            Tranquil Buddha
          </a>
          <span> (6th April 2019)</span>
        </li>
      </ul>
    </article>

    <div className="flex justify-evenly mt-16">
      <article>
        <h1>
          <span>Check out </span>
          <a className="link" href="https://www.behance.net/_umagoyal_" rel="noreferrer" target="_blank">
            my Behance
          </a>
          <span>:</span>
        </h1>
        <a className="qr-code-container" href="https://www.behance.net/_umagoyal_" rel="noreferrer" target="_blank">
          <Image alt="Behance QR Code" height={128} src="/qr-codes/behance.png" width={128} />
        </a>
      </article>

      <article>
        <h1>
          <span>Check out </span>
          <a className="link" href="https://www.youtube.com/channel/UCQqN7CMjJDim8vMIq1wtILQ" rel="noreferrer" target="_blank">
            my YouTube
          </a>
          <span>:</span>
        </h1>
        <a className="qr-code-container" href="https://www.youtube.com/channel/UCQqN7CMjJDim8vMIq1wtILQ" rel="noreferrer" target="_blank">
          <Image alt="YouTube QR Code" height={128} src="/qr-codes/youtube.png" width={128} />
        </a>
      </article>
    </div>
  </Page>
);

export default Work;

export const getStaticProps: GetStaticProps<WorkProps> = async (): Promise<GetStaticPropsResult<WorkProps>> => {

  const products: Product[] = PRODUCTS;

  return {
    props: {
      products,
    },
  };

};
