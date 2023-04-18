import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartContext } from '@/context/cartContext';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const products = [
  {
    id: 1,
    image: '/media/images/offer-1.png',
    name: 'Silla de oficina',
    price: 210900,
    discount: '32% OFF',
    free_delivery: true,
  },
  {
    id: 2,
    image: '/media/images/offer-2.png',
    name: 'Microfono profesional',
    price: 74990,
    discount: '25% OFF',
    free_delivery: true,
    full_delivery: true,
  },
  {
    id: 3,
    image: '/media/images/offer-3.png',
    name: 'Afeitadora + Recortadora recargable',
    price: 134950,
    discount: '50% OFF',
    free_delivery: true,
  },
  {
    id: 4,
    image: '/media/images/offer-4.png',
    name: 'Organizador de ropas',
    price: 149900,
    discount: '30% OFF',
    free_delivery: true,
  },
  {
    id: 5,
    image: '/media/images/offer-5.png',
    name: 'Cortina',
    price: 69990,
    discount: '17% OFF',
    full_delivery: true,
  },
  {
    id: 6,
    image: '/media/images/offer-6.png',
    name: 'The legend of zelda',
    price: 305400,
    discount: '3% OFF',
    free_delivery: true,
  },
  {
    id: 7,
    image: '/media/images/offer-7.png',
    name: 'Kit de Pesas ejercicio',
    price: 117900,
    discount: '15% OFF',
    free_delivery: true,
    full_delivery: true,
  },
  {
    id: 8,
    image: '/media/images/offer-8.png',
    name: 'Deshumidificador eléctrico',
    price: 377300,
    discount: '20% OFF',
    free_delivery: true,
    full_delivery: true,
  },
  {
    id: 9,
    image: '/media/images/offer-9.png',
    name: 'Control Joystick Inalámbrico',
    price: 279900,
    discount: '14% OFF',
  },
  {
    id: 10,
    image: '/media/images/offer-10.png',
    name: 'Hidrolavadora Inalámbrica',
    price: 184900,
    discount: '19% OFF',
    full_delivery: true,
  },
  {
    id: 11,
    image: '/media/images/offer-11.png',
    name: 'Audífonos inalámbricos Shokz',
    price: 636999,
    discount: '9% OFF',
    free_delivery: true,
  },
  {
    id: 12,
    image: '/media/images/offer-12.png',
    name: 'Super Mario Smash Bros',
    price: 229900,
    discount: '12% OFF',
    free_delivery: true,
    full_delivery: true,
  },
  {
    id: 13,
    image: '/media/images/offer-13.png',
    name: 'Casco Ich 501 Sp Integral',
    price: 98900,
    discount: '10% OFF',
    free_delivery: true,
  },
  {
    id: 14,
    image: '/media/images/offer-14.png',
    name: 'Carpa Toldo 3x4.5 Plegable',
    price: 444900,
    discount: '40% OFF',
    free_delivery: true,
  },
  {
    id: 15,
    image: '/media/images/offer-15.png',
    name: 'Cafetera Oster BVSTDCS12',
    price: 15509,
    discount: '9% OFF',
    free_delivery: true,
    full_delivery: true,
  },
];

const Offers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsByPage, setProductsByPage] = useState(6);
  const handleNextClick = () => {
    const nextIndex = currentIndex + productsByPage;
    if (nextIndex <= products.length - 1) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(products.length - 1);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = currentIndex - productsByPage;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const { addToCart } = useCartContext();
  const handleAddToCart = (id: number) => {
    const newItem = products.find((item) => item.id === id);
    if (!newItem) return;
    addToCart({
      id: newItem.id,
      name: newItem.name,
      price: newItem.price,
    });
  };

  return (
    <section className='bg-[#ebebeb]' id='Offers'>
      <div className='section-container gap-5'>
        <div className='section-title'>
          <h2>Ofertas</h2>
          <Link href=''>Ver todas</Link>
        </div>
        <div className='relative grid hidden grid-cols-5 gap-4 px-2 py-0 lg:flex'>
          {products.slice(currentIndex, currentIndex + 5).map((item, index) => (
            <div
              className='h-[350px] w-auto cursor-pointer rounded bg-white shadow-md hover:scale-105'
              key={`card-${index}`}
              onClick={() => handleAddToCart(item.id)}
            >
              <div className=' object-cover'>
                <Image width={224} height={224} src={item.image} alt='' />
              </div>
              <div className='flex h-auto flex-col gap-1.5 px-4 py-5'>
                <div className='flex items-center gap-2.5'>
                  <span className='flex items-center whitespace-nowrap leading-6  text-[#333333] lg:text-xl xl:text-2xl '>
                    {'$ '}
                    {item.price.toLocaleString('es-CO', {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <p className='flex items-center font-normal leading-4 text-[#00a650] lg:text-xs xl:text-sm'>
                    {item.discount}
                  </p>
                </div>
                <div className='flex h-[22px] items-center justify-items-start gap-0.5 text-center'>
                  {item.free_delivery && (
                    <span className='text-[13px] font-semibold leading-4 text-[#00a650]'>
                      Envío gratis
                    </span>
                  )}
                  {item.full_delivery && (
                    <Image
                      width={40}
                      height={12}
                      src='/media/icons/full-icon.svg'
                      alt=''
                    />
                  )}
                </div>
                <p className='text-sm font-normal leading-4 text-gray-400 '>
                  {item.name}
                </p>
              </div>
            </div>
          ))}
          <div
            onClick={handlePrevClick}
            hidden={currentIndex === 0}
            className={`
            ${currentIndex === 0 ? 'hidden' : ''}
            absolute -left-6 top-1/3 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-md hover:scale-110 hover:shadow-xl
            `}
          >
            <MdOutlineKeyboardArrowLeft size={40} color='#3483fa' />
          </div>
          <div
            onClick={handleNextClick}
            className={`
            ${currentIndex + 5 >= products.length ? 'hidden' : ''}
            absolute -right-6 top-1/3 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-md hover:scale-110 hover:shadow-xl
            `}
          >
            <MdOutlineKeyboardArrowRight size={40} color='#3483fa' />
          </div>
        </div>
        <div className='relative grid gap-4 px-2 py-0 sm:grid-cols-2 md:grid-cols-3 lg:hidden'>
          {products
            .slice(currentIndex, currentIndex + productsByPage)
            .map((item, index) => (
              <div
                className='flex h-28 w-auto cursor-pointer flex-row items-center rounded bg-white shadow-md hover:scale-105 sm:h-[120px] sm:items-start md:h-[350px] md:flex-col'
                key={`card-${index}`}
                onClick={() => handleAddToCart(item.id)}
              >
                <div>
                  <Image
                    className='h-28 w-28 cursor-pointer object-cover sm:h-28 sm:w-28 md:h-[224px] md:w-[224px]'
                    width={224}
                    height={224}
                    src={item.image}
                    alt=''
                  />
                </div>
                <div className='flex h-auto flex-col gap-1.5 px-4 py-5'>
                  <div className='flex items-center gap-2.5'>
                    <span className='flex items-center whitespace-nowrap leading-6  text-[#333333] lg:text-xl xl:text-2xl '>
                      {'$ '}
                      {item.price.toLocaleString('es-CO', {
                        maximumFractionDigits: 0,
                      })}
                    </span>
                    <p className='flex items-center font-normal leading-4 text-[#00a650] lg:text-xs xl:text-sm'>
                      {item.discount}
                    </p>
                  </div>
                  <div className='flex h-[22px] items-center justify-items-start gap-0.5 text-center'>
                    {item.free_delivery && (
                      <span className='text-[13px] font-semibold leading-4 text-[#00a650]'>
                        Envío gratis
                      </span>
                    )}
                    {item.full_delivery && (
                      <Image
                        width={40}
                        height={12}
                        src='/media/icons/full-icon.svg'
                        alt=''
                      />
                    )}
                  </div>
                  <p className='text-sm font-normal leading-4 text-gray-400 '>
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className='flex w-full items-end justify-end pr-4'>
          <button
            onClick={() => setProductsByPage(productsByPage + 3)}
            className={`
            ${productsByPage >= products.length ? 'hidden' : ''}
            text-md flex items-center gap-2 font-semibold leading-4 text-[#3483fa] hover:underline lg:hidden `}
          >
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
};

export { Offers };
