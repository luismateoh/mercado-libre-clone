import React from 'react';
import Link from 'next/link';

const collections = [
  {
    imageSrc: './media/images/collections-1.png',
  },
  {
    imageSrc: './media/images/collections-2.png',
  },
  {
    imageSrc: './media/images/collections-3.png',
  },
  {
    imageSrc: './media/images/collections-4.png',
  },
  {
    imageSrc: './media/images/collections-5.png',
  },
  {
    imageSrc: './media/images/collections-6.png',
  },
  {
    imageSrc: './media/images/collections-7.png',
  },
  {
    imageSrc: './media/images/collections-8.png',
  },
];

const Collections = () => {
  return (
    <section className='bg-[#ebebeb]' id='Collections'>
      <div className='section-container'>
        <div className='section-title'>
          <h2>Colecciones:</h2>
          <span className='leading-26 flex items-center justify-center text-base text-base font-semibold text-gray-600 sm:text-2xl'>
            Supermercado
          </span>
          <Link href='/'>
            <img src='./media/icons/chevron-down-blue.svg' alt='' />
          </Link>
        </div>
        <div className='mx-0 mb-4 mt-4 grid grid-cols-3 gap-2 px-2 py-0 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6'>
          <div className='col-span-2 row-span-2 flex cursor-pointer flex-col overflow-hidden rounded bg-white shadow-sm'>
            <img
              className='h-full w-full object-cover'
              src='./media/images/collections-main-card.png'
              alt=''
            />
            <div className='mt-1 flex flex-col justify-start gap-1 px-4 py-5'>
              <p className='leading-14 flex items-center text-xs font-medium uppercase tracking-wider text-gray-700'>
                Descubre
              </p>
              <span className='flex items-center text-base font-bold uppercase leading-10 text-gray-700 sm:text-2xl'>
                Supermercado
              </span>
            </div>
          </div>
          {collections.map((collection, index) => {
            return (
              <div
                key={index}
                className='col-span-1 row-span-1 cursor-pointer  rounded bg-white shadow-sm'
              >
                <img
                  className='w-full object-cover'
                  src={collection.imageSrc}
                  alt='Image prodcut'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Collections };
