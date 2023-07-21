import { useCallback, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { setMenuOpened } from "../redux/feautures/menuSlice";

const MenuButton = () => {
  const [hovered, setHovered] = useState(false);
  const [isOpened, setIsOpened] = useState(false)
  const dispatch = useAppDispatch();

  const button = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_42702_63)">
        <path
          d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4Z"
          fill="#292929"
        />
      </g>
      <defs>
        <clipPath id="clip0_42702_63">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const hoveredButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_42707_37)">
        <path
          d="M3 17C3 17.5523 3.44772 18 4 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H4Z"
          fill="#292929"
        />
      </g>
      <defs>
        <clipPath id="clip0_42707_37">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const opened = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.1943 6.41714C19.6393 5.97216 19.6393 5.2507 19.1943 4.80571C18.7493 4.36073 18.0278 4.36073 17.5829 4.80571L12 10.3886L6.41714 4.80572C5.97216 4.36073 5.2507 4.36073 4.80571 4.80571C4.36073 5.2507 4.36073 5.97216 4.80571 6.41714L10.3886 12L4.80572 17.5829C4.36073 18.0278 4.36073 18.7493 4.80571 19.1943C5.2507 19.6393 5.97216 19.6393 6.41714 19.1943L12 13.6114L17.5829 19.1943C18.0278 19.6393 18.7493 19.6393 19.1943 19.1943C19.6393 18.7493 19.6393 18.0278 19.1943 17.5829L13.6114 12L19.1943 6.41714Z" fill="#292929" />
    </svg>
  )

  const handleClick = useCallback(() => {
    setIsOpened(isOpened => !isOpened);
    dispatch(setMenuOpened(true))
  },
    [setIsOpened, dispatch],
  )


  return (
    <div
      className="cursor-pointer z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {!isOpened
        ?
        <>{hovered ? hoveredButton : button}</>
        :
        opened
      }

    </div>
  );
};

export default MenuButton;
