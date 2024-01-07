import React, { useState, useContext } from 'react';
import { RiHome5Fill, RiMapLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex items-center justify-between'>
          <RiHome5Fill className='dropdown-icon-primary' />
          <div className='text-15px font-medium leading-tight'>{property}</div>
          <div className='text-13px'>Select your place</div>
          {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((propertyItem, index) => (
          <Menu.Item key={index} as='li' onClick={() => setProperty(propertyItem)}>
            {propertyItem}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
