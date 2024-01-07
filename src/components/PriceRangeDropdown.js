import React, { useState, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const priceRanges = [
    {
      value: 'Price Range (any)',
    },
    {
      value: '10000 - 130000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '10000 - 20000',
    },
    {
      value: '30000 - 40000',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex items-center justify-between'>
          <RiWallet3Line className='dropdown-icon-primary' />
          <div className='text-15px font-medium leading-tight'>{price}</div>
          <div className='text-13px'>Choose Price Range</div>
          {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )}
        </div>
      </Menu.Button>

      {isOpen && (
        <Menu.Items className='dropdown-menu'>
          {priceRanges.map((range, index) => (
            <Menu.Item key={index} as='li' onClick={() => setPrice(range.value)}>
              {range.value}
            </Menu.Item>
          ))}
        </Menu.Items>
      )}
    </Menu>
  );
};

export default PriceRangeDropdown;
