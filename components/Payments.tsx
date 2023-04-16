import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const paymentCards = [
  {
    icon: '/media/icons/credit-card.svg',
    title: 'Hasta 48 cuotas',
    link: '#',
  },
  {
    icon: '/media/icons/bank.svg',
    title: 'Transferencia desde tu banco',
    link: '#',
  },
  {
    icon: '/media/icons/cash.svg',
    title: 'Paga en efectivo',
    link: '#',
  },

  {
    icon: '/media/icons/plus-rounded.svg',
    title: 'Más medios de pago',
    link: '#',
  },
];

const Payments = () => {
  return (
    <section className='bg-[#ebebeb] sm:pb-5 sm:pt-10' id='Payments'>
      <div className='section-container px-2'>
        <div className='grid h-24 h-[300px] w-full grid-cols-1 rounded bg-white shadow-sm md:h-[180px] md:grid-cols-2 lg:h-[90px] lg:grid-cols-4'>
          {paymentCards.map((card, index) => {
            return (
              <div
                key={index}
                className={`flex items-center pl-5 text-start
              ${
                index == 3 &&
                ' lg:border-l lg:border-solid lg:border-l-[#eeeeee]'
              }`}
              >
                <div className='mr-4 flex h-12 w-12 items-center justify-center overflow-visible rounded-full border border-solid border-[#eeeeee] text-center '>
                  <Image width={24} height={24} src={card.icon} alt='' />
                </div>
                <div className='flex flex-col items-start'>
                  <span>{card.title}</span>
                  <Link
                    className={`flex items-center text-[13px] font-normal not-italic leading-[15px] text-[#3483fa] no-underline`}
                    href={card.link}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Payments };
