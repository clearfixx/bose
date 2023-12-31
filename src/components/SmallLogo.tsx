import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SmallLogo = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div data-aos="zoom-in-right" data-aos-duration="1000">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="76" viewBox="0 0 64 76" fill="none">
        <rect x="6.09521" y="28" width="3.04762" height="20" rx="1.52381" fill="#292929" />
        <rect y="33" width="3.04762" height="10" rx="1.52381" fill="#292929" />
        <rect x="60.9521" y="33" width="3.04762" height="10" rx="1.52381" fill="#292929" />
        <rect x="12.1904" y="25" width="3.04762" height="26" rx="1.52381" fill="#292929" />
        <rect x="18.2856" y="16" width="3.04762" height="44" rx="1.52381" fill="#292929" />
        <rect x="24.3809" y="22" width="3.04762" height="32" rx="1.52381" fill="#292929" />
        <rect x="30.4761" y="6" width="3.04762" height="64" rx="1.52381" fill="#292929" />
        <rect x="36.5713" width="3.04762" height="76" rx="1.52381" fill="#292929" />
        <rect x="42.6665" y="16" width="3.04762" height="44" rx="1.52381" fill="#292929" />
        <rect x="48.7617" y="23" width="3.04762" height="30" rx="1.52381" fill="#292929" />
        <rect x="54.8569" y="27" width="3.04762" height="22" rx="1.52381" fill="#292929" />
      </svg>
    </div>
  )
}
export default SmallLogo;