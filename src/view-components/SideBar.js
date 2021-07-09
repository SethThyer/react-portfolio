import React, { useEffect, useState } from 'react';
import { debounce } from '../util/helpers';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export const SideBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);  
  const route = useLocation().pathname;
  let displayNav = false;
  
  const pageLoad = () => {
    if (route === '/') return '/contacts';
    else return '/'
  }

  if (route !== '/') displayNav = true;

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10))
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const scrollReact = () => {
    if(displayNav) return "navDisplay";
    if(!visible) return "outView";
    return "inView";
  }

  const handleClick = () => {
    displayNav = !displayNav;
    setVisible(true);
  }
  
  return (
      <header className={ scrollReact() + ` bg-color-black SideBar opacity-harden z-3 `} onClick={handleClick}>
          <Link className="color-secondary text-s-large code center-h pointer" to={pageLoad()}>
              ﹀
          </Link>
      </header>
  );
};