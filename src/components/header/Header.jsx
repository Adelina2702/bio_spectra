import React from 'react';
import logo from '../../assets/icons/arcticons_biota.svg';
import logoBlack from '../../assets/icons/arcticons_biota (1) (1).svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/material-symbols_person-outline.svg';
import { ReactComponent as ProfileIconBlack } from '../../assets/icons/profile-balck.svg';

import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div className='w-full h-[6.875rem]  flex justify-between px-[6.25rem] text-base text-white font-semibold'>
      <div className='flex items-center relative cursor-pointer'>
        <NavLink to='/'>
          {location.pathname === '/' ? (
            <img
              src={logo}
              alt='logo'
              className={`w-[4.375rem] h-[4.375rem] `}
            />
          ) : (
            <img
              src={logoBlack}
              alt='logo'
              className={`w-[4.375rem] h-[4.375rem] `}
            />
          )}
          <p
            className={`text-[1.5625rem] font-normal absolute left-[3.8rem] top-14 ${
              location.pathname === '/' ? '' : 'text-black'
            }`}>
            {' '}
            ioSpectra
          </p>
        </NavLink>
      </div>
      <div
        className={`flex pt-[3.5rem] pb-[5.75rem] gap-[3.5rem] ${
          location.pathname === '/' ? '' : 'text-black'
        }`}>
        <a href='about-us' className='hover:text-blue-950'>
          About us
        </a>
        <a href='events' className='hover:text-blue-950'>
          Events
        </a>
        <Link to='https://www.google.com/maps/place/%D0%AE%D0%B6%D0%BD%D0%B0%D1%8F+%D0%90%D1%84%D1%80%D0%B8%D0%BA%D0%B0/@-34.6283864,27.2516951,5z/data=!3m1!4b1!4m6!3m5!1s0x1c34a689d9ee1251:0xe85d630c1fa4e8a0!8m2!3d-30.559482!4d22.937506!16zL20vMGh6bHo?entry=ttu'>
          <a href='map' className='hover:text-blue-950'>
            Map
          </a>
        </Link>
      </div>
      <div className='pt-[3.5rem] pb-[5.75rem] cursor-pointer flex gap-8'>
        <a
          href='#contacts'
          className={`hover:text-blue-950 ${
            location.pathname === '/' ? '' : 'text-black'
          }`}>
          Contact us
        </a>
        <button>
          {location.pathname === '/' ? (
            <ProfileIcon className='w-6 h-6' />
          ) : (
            <ProfileIconBlack className='w-6 h-6' />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
