import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Logo = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <a href="#home" className="" title="Bose" data-aos="zoom-in">
      <img src="/logo.png" alt="Bose" className="w-[190px]" />
    </a>
  );
};

export default Logo;
