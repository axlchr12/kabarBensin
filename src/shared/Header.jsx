/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { FaGasPump } from 'react-icons/fa';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const ref = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const element = ref.current;
    const elementBtn = btnRef.current;
    const options = {
      triggerEl: elementBtn,
      onCollapse: () => {
        console.log('element has been collapsed');
      },
      onExpand: () => {
        console.log('element has been expanded');
      },
      onToggle: () => {
        console.log('element has been toggled');
      },
    };
    const collapse = new window.Collapse(element, options);
  }, []);
  return (
    <>
      <nav className="p-3 bg-slate-800 border-gray-200 w-full md:w-full lg:w-full 2xl:w-full rounded sm:w-full 5xl:w-full">
        <div className="container flex flex-wrap justify-center">
          <span className="text-xl font-semibold whitespace-nowrap text-white">
            KabarBens
            <FaGasPump size={10} className="inline-block" />n
          </span>
          <button
            ref={btnRef}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            id="triggerEl"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto md:ml-10 md:mt-0 p-3 md:p-0"
            id="navbar-solid-bg"
            ref={ref}
          >
            <ul className="flex flex-col mt-4 bg-slate-800 rounded-lg md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent m-5 space-y-1 md:space-y-0 md:m-0">
              <li>
                <Link
                  to="/"
                  className={
                    location.pathname === '/' ? 'menuActive' : 'menuNotActive'
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/kalkulator"
                  className={
                    location.pathname === '/kalkulator'
                      ? 'menuActive'
                      : 'menuNotActive'
                  }
                >
                  Kalkulator Harga
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={
                    location.pathname === '/faq'
                      ? 'menuActive'
                      : 'menuNotActive'
                  }
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <HelmetProvider>
        <Helmet>
          <script
            src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
            type="text/javascript"
          ></script>
          <script type="text/javascript">
            let targetEl = document.getElementById('navbar-solid-bg'); let
            collapse = new Collapse(targetEl);
          </script>
        </Helmet>
      </HelmetProvider> */}
    </>
  );
};

export default Header;
