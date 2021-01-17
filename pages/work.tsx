import Page from '@components/page/page';
import ProductCarousel from '@components/product-carousel/product-carousel';
import { PRODUCTS } from '@constants/products';
import { Product } from '@interfaces/product';
import Image from 'next/image';

interface WorkProps {
  products: Product[];
}

const Work: (props: WorkProps) => JSX.Element = ({ products }: WorkProps): JSX.Element => (

  <Page title="Work">

    <article>
      <h1>Some illustration styles I&apos;ve done:</h1>
      <ProductCarousel products={products}></ProductCarousel>
    </article>

    <article className="mt-16">
      <h1>A cute <a className="link" href="https://play.google.com/store/apps/details?id=com.umagoyal.cmiyc" rel="noreferrer" target="_blank">WhatsApp Sticker-Pack</a> I made:</h1>
      <a className="qr-code-container" href="https://play.google.com/store/apps/details?id=com.umagoyal.cmiyc" rel="noreferrer" target="_blank">
        <Image alt="Cat Me If You Can QR Code" height={128} src="/qr-codes/cat-me-if-you-can.png" width={128} />
      </a>
    </article>

    <article className="mt-16">
      <h1>Some workshops I&apos;ve conducted:</h1>
      <ul>
        <li className="text-2xl">&middot; <a className="link" href="https://insider.in/charcoal-painting-art-workshop-may5-2019/event">Charcoal Painting</a> (5th May 2019)</li>
        <li className="text-2xl">&middot; <a className="link" href="https://doolally.in/?page/events/charcoal-painting-art-workshop-shiva-in-moonlight-70923eb">Shiva in Moonlight</a> (26th April 2019)</li>
        <li className="text-2xl">&middot; <a className="link" href="https://insider.in/tranquil-buddha-charcoal-painting-art-workshop-apr6-2019/event">Link 1</a> or <a className="link" href="https://doolally.in/?page/events/tranquil-buddha-charcoal-sketching-workshop-0578a07">Link 2</a> of Tranquil Buddha (6th April 2019)</li>
      </ul>
    </article>

    <div className="flex justify-evenly mt-16">

      <article>
        <h1 className="text-2xl">Check out <a className="link" href="https://www.behance.net/_umagoyal_" rel="noreferrer" target="_blank">my Behance</a>:</h1>
        <a className="qr-code-container" href="https://www.behance.net/_umagoyal_" rel="noreferrer" target="_blank">
          <Image alt="Behance QR Code" height={128} src="/qr-codes/behance.png" width={128} />
        </a>
      </article>

      <article>
        <h1 className="text-2xl">Check out <a className="link" href="https://www.youtube.com/channel/UCQqN7CMjJDim8vMIq1wtILQ" rel="noreferrer" target="_blank">my YouTube</a>:</h1>
        <a className="qr-code-container" href="https://www.youtube.com/channel/UCQqN7CMjJDim8vMIq1wtILQ" rel="noreferrer" target="_blank">
          <Image alt="YouTube QR Code" height={128} src="/qr-codes/youtube.png" width={128} />
        </a>
      </article>

    </div>

  </Page>

);

export default Work;

export const getStaticProps: () => Promise<{ props: WorkProps }> = async (): Promise<{ props: WorkProps }> => {

  return { props: { products: PRODUCTS } };

};
