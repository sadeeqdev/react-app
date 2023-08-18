import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheddaLogo from '../assets/logos/app-logo.svg';
import { NetworkMenu } from './NetworkMenu';
import ProfileMenu from './ProfileMenu';

const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    {
      name: 'Lend',
      path: '/lend',
      icon: 'briefcase',
    },
    {
      name: 'Borrow',
      path: '/borrow',
      icon: 'cash',
    },
    {
      name: 'Grotto',
      path: '/grotto',
      icon: 'storefront',
    },
    {
      name: 'Vote',
      path: '/vote',
      icon: 'checkbox',
    },
  ];
  const account = null; // Set the account value if available

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onConnectTapped = () => {
    // Implement your connect wallet logic here
  };

  return (
    <div
      className={`h-20 bg-black border-b border-gray-800 flex items-center ${isScrolled ? ' w-full fixed mb-20' : ''}`}
    >
      <div className="flex flex-row justify-between w-11/12 xl:w-11/12 2xl:w-5/6 3xl:w-9/12 mx-auto items-center">
        <div>
          <img src={CheddaLogo} width="70px" className="w-40 md:hidden lg:flex" alt="App Logo" />
          <img src="/assets/logos/chedda-logo.svg" className="w-16 flex lg:hidden" alt="Chedda Logo" />
        </div>
        <div className="flex flex-row text-white space-x-10 mt-2 text-sm sm:text-lg font-semibold">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="relative hover:opacity-80">
              <div>{item.name}</div>
              <div className="hidden pacman-loader">{/* Include your Pacman Loader component */}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-2 text-white">
          <NetworkMenu />
          {!account ? (
            <ProfileMenu />
          ) : (
            <button
              onClick={onConnectTapped}
              className="h-9 w-32 sm:h-11 sm:w-40 px-2 flex rounded-lg justify-center font-bold text-xs sm:text-lg account_button items-center hover:opacity-90"
            >
              Connect wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
