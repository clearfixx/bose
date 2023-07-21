import AOS from 'aos';
import 'aos/dist/aos.css';

import { IProducts } from "./Recommended";
import { useEffect } from 'react';

const ProductCard: React.FC<IProducts> = ({ id, title, category, price, image }) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="flex flex-col" data-aos="flip-right">
      <div className="mb-8">
        <img src={`${image}`} alt={title} />
      </div>
      <h3 className="font-semibold mb-2 text-base">{title}</h3>
      <span className="text-base mb-2">{category}</span>
      <span className="text-base font-semibold">$ {price}</span>
    </div>
  )
}

export default ProductCard;