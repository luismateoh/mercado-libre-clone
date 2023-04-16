import {
  MdOutlineSearch,
  MdOutlineLocationOn,
  MdOutlineShoppingCart,
  MdOutlineHelp,
  MdOutlineAttachMoney,
  MdOutlineStyle,
  MdOutlineStore,
  MdOutlineHistory,
  MdOutlineLocalOffer,
  MdOutlineCategory,
  MdOutlineKeyboardArrowDown,
  MdOutlineClose,
} from 'react-icons/md';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface linkProps {
  label: string;
  href: string;
}
interface menuProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: linkProps[];
}

const menu: menuProps[] = [
  {
    label: 'Categorías',
    href: '#',
    icon: <MdOutlineCategory />,
    children: [
      { label: 'Hogar', href: '#' },
      { label: 'Jardín', href: '#' },
      { label: 'Deportes', href: '#' },
    ],
  },
  {
    label: 'Ofertas',
    href: '#',
    icon: <MdOutlineLocalOffer />,
    children: [],
  },
  {
    label: 'Historial',
    href: '#',
    icon: <MdOutlineHistory />,
    children: [],
  },
  {
    label: 'Supermercado',
    href: '#',
    icon: <MdOutlineStore />,
    children: [],
  },
  {
    label: 'Moda',
    href: '#',
    icon: <MdOutlineStyle />,
    children: [],
  },
  {
    label: 'Vender',
    href: '#',
    icon: <MdOutlineAttachMoney />,
    children: [],
  },
  {
    label: 'Ayuda / PQR',
    href: '#',
    icon: <MdOutlineHelp />,
    children: [],
  },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='bg-yellow_ml'>
      <div className='mx-auto px-4 py-2 sm:max-w-full sm:py-2 md:max-w-full md:px-4 lg:max-w-[1248px] lg:px-6'>
        <div className='relative flex flex-col'>
          <div className='relative flex items-center justify-between'>
            <div className='flex w-full items-center gap-2 md:gap-7 lg:gap-14'>
              <Link href='/' aria-label='Mercado Libre' title='Mercado Libre'>
                <Image
                  className='hidden md:block lg:block'
                  src='./media/icons/logo-meli.svg'
                  alt='Mercado Libre Logo'
                  width={134}
                  height={34}
                />
                <Image
                  className='md:hidden lg:hidden'
                  src='./media/icons/logo-meli-mobile.svg'
                  alt='Mercado Libre Logo'
                  width={50}
                  height={40}
                />
              </Link>
              <div className='flex h-14 w-full items-center justify-center sm:w-[520px] md:w-[600px] '>
                <form
                  className='flex h-10 w-full flex-row rounded-sm bg-white shadow-md'
                  action=''
                >
                  <input
                    className='mx-4 h-full w-full border-none text-base font-normal leading-normal outline-none'
                    type='text'
                    placeholder='Buscar productos, marcas y más...'
                  />
                  <div className='flex flex-row items-center '>
                    <div className='h-6 w-0 border-r border-[#e0e0e0]'></div>
                    <button
                      className='flex h-10 w-10 items-center justify-center text-xl text-gray-500'
                      type='submit'
                    >
                      <MdOutlineSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='w-16 lg:hidden'>
              <div className='flex items-center gap-2'>
                <button
                  aria-label='Open Menu'
                  title='Open Menu'
                  className='focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none'
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                    />
                    <path
                      fill='currentColor'
                      d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                    />
                    <path
                      fill='currentColor'
                      d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                    />
                  </svg>
                </button>
                <MdOutlineShoppingCart className='h-5 w-5 text-gray-600' />
              </div>

              {isMenuOpen && (
                <div className='absolute left-0 top-0 z-20 w-full '>
                  <div className=' rounded border bg-white p-5 shadow-sm'>
                    <div className='mb-4 flex items-center justify-between'>
                      <Image
                        src='./media/icons/logo-meli.svg'
                        alt='Mercado Libre Logo'
                        width={134}
                        height={34}
                      />
                      <div>
                        <button
                          aria-label='Close Menu'
                          title='Close Menu'
                          className='focus:shadow-outline -mr-2 -mt-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <MdOutlineClose className='h-7 w-7 text-gray-600' />
                        </button>
                      </div>
                    </div>
                    <nav>
                      <div className='flex flex-col gap-2 '>
                        <div className='flex flex-row  gap-2'>
                          <button className='flex flex-row items-center justify-center gap-2 rounded-md border border-gray-300 p-2 sm:hidden'>
                            <MdOutlineLocationOn className='h-5 w-5 text-gray-600' />
                            <span className='text-sm'>
                              Ingresa tu dirección
                            </span>
                          </button>
                        </div>
                        <div className='flex flex-row gap-2'>
                          <button className='flex flex-row items-center justify-center gap-2 rounded-md border border-gray-300 p-2'>
                            <span className='text-sm'>Ingresa</span>
                          </button>
                          <button className='flex flex-row items-center justify-center gap-2 rounded-md border border-gray-300 p-2'>
                            <span className='text-sm'>Crear cuenta</span>
                          </button>
                        </div>
                      </div>
                      <ul className='space-y-4 py-5 sm:hidden'>
                        {menu.map((item) => (
                          <li key={item.label}>
                            <Link
                              href='#'
                              className='flex flex-row items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800'
                            >
                              <span>{item.icon}</span>
                              <span>{item.label}</span>

                              {item.children && item.children.length > 0 && (
                                <span className='text-gray-400'>
                                  <MdOutlineKeyboardArrowDown
                                    className={'h-5 w-5'}
                                  />
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='flex hidden flex-row items-center justify-between md:flex'>
            <nav className='flex flex-row'>
              <ul className='inline-flex h-9 items-center sm:mr-3 '>
                <li className='text-gray flex items-center gap-1 text-base text-[#333333] sm:mr-2 md:mr-2 lg:mr-8'>
                  <MdOutlineLocationOn className='h-5 w-5 text-gray-600' />
                  <Link className='text-sm font-normal text-[#333333]' href='#'>
                    Ingresa tu domicilio
                  </Link>
                </li>
              </ul>
              <ul className='nav-items inline-flex h-9 items-center gap-3 text-center'>
                {menu.map((item) => (
                  <li key={item.label}>
                    <Link
                      href='#'
                      className='flex flex-row items-center gap-2 text-sm font-normal text-gray-600 hover:text-gray-800'
                    >
                      <span>{item.label}</span>
                      {item.children && item.children.length > 0 && (
                        <span className='text-gray-400'>
                          <MdOutlineKeyboardArrowDown className={'h-5 w-5'} />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className='flex hidden flex-row lg:flex'>
              <ul className='nav-account flex flex-row gap-2 text-right'>
                <li>
                  <Link href='#'>Crea tu cuenta</Link>
                </li>
                <li>
                  <Link href='#'>Ingresa</Link>
                </li>
                <li>
                  <Link href='#'>Mis compras</Link>
                </li>
                <li>
                  <MdOutlineShoppingCart className='h-5 w-5 text-gray-600' />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
