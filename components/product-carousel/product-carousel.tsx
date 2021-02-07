import { Product } from '@interfaces/product';
import Image from 'next/image';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: (props: ProductCarouselProps) => JSX.Element = ({ products }: ProductCarouselProps): JSX.Element => (

  <div className="overflow-x-auto pb-8 whitespace-nowrap">

    {

      products.map((product: Product): JSX.Element => (

        <div className="border border-gray-100 focus:outline-none focus:ring bg-white inline-block m-4 relative rounded" key={product.name} tabIndex={0}>

          <div className="overflow-hidden rounded shadow-md">
            <Image alt={product.name} height={256} src={product.imageUrl} width={256}></Image>
          </div>

          <div className="absolute bg-white border border-gray-100 left-0 -mt-5 mx-4 right-0 rounded shadow-md">
            <span className="align-middle text-2xl">{product.name}</span>
          </div>

        </div>

      ))

    }

  </div>

);

export default ProductCarousel;
