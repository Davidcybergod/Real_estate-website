import React, { useState, useContext } from 'react';
import { RiArrowUpSLine, RiMapLine, RiArrowDownSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex items-center justify-between'>
          <RiMapLine className='dropdown-icon-primary' />
          <div className='text-15px font-medium leading-tight'>{country}</div>
          <div className='text-13px'>Select your place</div>
          {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((countryName, index) => (
          <Menu.Item key={index} as='li' onClick={() => setCountry(countryName)}>
            {countryName}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
