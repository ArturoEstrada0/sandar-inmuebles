import React, { useContext, useState } from "react";
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from "react-icons/ri";
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
import "./PriceRangeDropdown.css"; // Importa el archivo CSS

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: 'Price Range (Any)',
    },
    {
      value: '100,000 - 130,000',
    },
    {
      value: '130,000 - 160,000',
    },
    {
      value: '150,000 - 190,000',
    },
    {
      value: '190,000 - 220,000',
    },
    {
      value: '10,000 - 30,000',
    },
    {
      value: '30,000 - 40,000',
    }
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line
          className='dropdown-icon-primary' />
        <div>
          <div className="text-medium leading-tight">
            {price}
          </div>
          <div className="text-small leading-tight">
            Choose a price range
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className='cursor-pointer hover:text-violet-700 transition'
              as='li'
              key={index}
            >
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
