// project import
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useLayoutEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import CustomNavbar from '../components/Header/CustomNavbar';
import Footer from '../components/footer/Footer';


const Layout = () => {

  
  const { pathname } = useLocation()
       useLayoutEffect(() => {
          window.scrollTo(0, 0)
       }, [pathname])

  useEffect(() => {
    AOS.init({
      // Initialize AOS
      duration: 1000, // duration of the animation
      easing: 'ease-in-out', // easing function
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      {/* ------ Navbar (Header) ------- */}
      {/* <HeaderNavbar /> */}
      <CustomNavbar/>
      {/* ------ Main  (Body) ------- */}
      <div>
        <main>
            <Outlet />
        </main>
      </div>
      {/* ------ Footer ------- */}
      <Footer/>
      <ScrollRestoration/>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
