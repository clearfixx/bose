import { useAppDispatch, useAppSelector } from "../redux/store";
import { setMenuOpened } from "../redux/feautures/menuSlice";
import Container from "./Container";
import Logo from "./Logo";

interface IMenuLinks {
  id: number;
  title: string;
  href: string;
}

const menuLinks: IMenuLinks[] = [
  {
    id: 1,
    title: "Home",
    href: '#home'
  },
  {
    id: 2,
    title: "Recommended",
    href: '#recommended'
  },
  {
    id: 3,
    title: "Categories",
    href: '#categories'
  },
  {
    id: 4,
    title: "How to buy",
    href: '#how_to_buy'
  },
]

const Aside = () => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector(state => state.menu);
  return (
    <div className={`bg-[#E8EFF9] fixed top-0 w-full h-screen transition-all ease-in-out duration-300 py-16 ${menuState.isOpened ? 'left-0' : 'left-[-100%]'}`}>
      <Container>
        <div className="flex flex-col">
          <Logo />

          <nav className="mt-16">
            <ul className="list-none">
              {menuLinks.map((link) => (
                <li className="mb-6" key={link.id}><a onClick={() => dispatch(setMenuOpened(false))} className="font-semibold leading-[2px] text-[22px] uppercase transition relative pb-2 after:content-[''] after:w-0 hover:after:w-full after:transition-all after:duration-200 after:bottom-0 after:h-[1px] after:absolute after:left-0 after:bg-[#292929]" href={link.href}>{link.title}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Aside;