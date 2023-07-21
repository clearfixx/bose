import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Container from "./Container";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import SmallLogo from "./SmallLogo";


const Header = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <header className="w-full h-screen bg-[url('/Headphones-image.png')] bg-cover bg-top" id="home">
      <Container>
        <div className="flex flex-col justify-between h-screen">
          <div className="flex flex-row relative justify-between items-center pt-16 xs:pt-8">
            <Logo />
            <MenuButton />
          </div>
          <div className="flex flex-col">
            <div className="mb-[40px]">
              <SmallLogo />
            </div>
            <h1 className="font-extrabold mb-16 text-[48px]" data-aos="zoom-in-right" data-aos-duration="1500">
              The world shades. <br />Your music shines.
            </h1>
          </div>
        </div>

      </Container>
    </header>
  );
};

export default Header;
