import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const stores = {
  stores: [
    {
      header: {
        logo: '/media/images/store-logo-1.png',
        bg: '/media/images/store-bg-1.png',
      },
      info: {
        name: 'Lego',
        products: [
          '/media/images/store-1-product-1.png',
          '/media/images/store-1-product-2.png',
          '/media/images/store-1-product-3.png',
        ],
      },
    },
    {
      header: {
        logo: '/media/images/store-logo-2.png',
        bg: '/media/images/store-bg-2.png',
      },
      info: {
        name: 'Xiaomi',
        products: [
          '/media/images/store-2-product-1.png',
          '/media/images/store-2-product-2.png',
          '/media/images/store-2-product-3.png',
        ],
      },
    },
    {
      header: {
        logo: '/media/images/store-logo-3.png',
        bg: '/media/images/store-bg-3.png',
      },
      info: {
        name: 'Oster',
        products: [
          '/media/images/store-3-product-1.png',
          '/media/images/store-3-product-2.png',
          '/media/images/store-3-product-3.png',
        ],
      },
    },
    {
      header: {
        logo: '/media/images/store-logo-4.png',
        bg: '/media/images/store-bg-4.png',
      },
      info: {
        name: 'Nikon',
        products: [
          '/media/images/store-4-product-1.png',
          '/media/images/store-4-product-2.png',
          '/media/images/store-4-product-3.png',
        ],
      },
    },
  ],
};

const Stores = () => {
  return (
    <section
      className='to-gray- bg-gradient-to-t from-[#e6e6e6] from-0% to-[#ebebeb] to-100% py-10 pb-6'
      id='Stores'
    >
      <div className='section-container'>
        <div className='section-title'>
          <h2>Las mejores tiendas te esperan</h2>
          <Link href=''>Ver tiendas</Link>
        </div>
        <div className='mb-4 mt-6 grid grid-cols-1 gap-4 px-2 py-0 md:grid-cols-2 lg:grid-cols-4'>
          {stores.stores.map((store, index) => {
            return (
              <div
                key={index}
                className='flex h-auto w-full flex-col overflow-hidden rounded bg-white shadow-md'
              >
                <div className='relative mb-10 flex h-24 flex-row content-center items-end justify-center'>
                  <div className='z-20 -mb-10 h-20 w-20 overflow-hidden rounded-lg shadow-md'>
                    <Image
                      width={80}
                      height={80}
                      src={store.header.logo}
                      alt=''
                    />
                  </div>
                  <Image
                    width={284}
                    height={95}
                    className='absolute -top-0.5 z-10 h-24 w-full object-cover'
                    src={store.header.bg}
                    alt=''
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <span className='px-0 py-4 text-center text-2xl font-semibold leading-7 text-gray-700'>
                    {store.info.name}
                  </span>
                  <div className='my-2 flex gap-2'>
                    {store.info.products.map((product, index) => {
                      return (
                        <Link key={index} href=''>
                          <Image
                            width={70}
                            height={70}
                            className='h-16 w-16 overflow-hidden rounded-lg border border-solid border-gray-300'
                            src={product}
                            alt=''
                          />
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    className='text-md my-6 font-medium leading-6 text-gray-500 hover:text-blue-500'
                    href=''
                  >
                    Ver tienda
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

export { Stores };
