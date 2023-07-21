import Container from "./Container";
import ProductCard from "./ProductCard";

export interface IProducts {
  id: number
  title: string;
  category: string;
  price: number;
  image: string;
}

const recommendedProducts: IProducts[] = [
  {
    id: 1,
    title: 'Bose portable Smart speaker',
    category: 'Smart home',
    price: 399,
    image: '/portable_speaker.png'
  },
  {
    id: 2,
    title: 'SoundLink Flex Bluetooth speaker',
    category: 'Portable bluetooth',
    price: 149,
    image: '/soundlink_flex.png'
  },
  {
    id: 3,
    title: 'SoundLink Color Bluetooth speaker II',
    category: 'Smart home',
    price: 129,
    image: '/soundlink_color.png'
  },
]

const Recommended = () => {
  return (
    <div className="pt-[120px]" id="recommended">
      <Container>
        <div className="flex flex-col">
          <h2 className="text-[48px] font-bold leading-[48px] tracking-[-1.5px] mb-16 xs:mb-12 text-center">Recommended</h2>
          <div className="grid grid-cols-3 gap-6">
            {recommendedProducts.map(({ id, title, category, price, image }) => {
              return <ProductCard key={id} id={id} category={category} image={image} price={price} title={title} />
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Recommended;