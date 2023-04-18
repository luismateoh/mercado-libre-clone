import React from 'react';
import Image from 'next/image';

interface Service {
  imageSrc: string;
  imageAlt: string;
  title: string;
}
const services: Service[] = [
  {
    imageSrc: '/media/icons/diney-plus.svg',
    imageAlt: 'Disney+',
    title: 'Disney+ sin cargo',
  },
  {
    imageSrc: '/media/icons/star-plus.svg',
    imageAlt: 'Star+',
    title: 'Star+ sin cargo',
  },
  {
    imageSrc: '/media/images/truck-meli-icon.png',
    imageAlt: 'Envíos gratis y rápidos',
    title:
      'Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000',
  },
];

const Subscription = () => {
  return (
    <section
      className='flex h-full w-full items-baseline justify-center bg-[#ebebeb] py-10'
      id='Subscription'
    >
      <div className='section-container w-full'>
        <div className=' my-10 flex w-full flex-col overflow-hidden rounded-md bg-white shadow-md'>
          <div className='flex flex-row items-center justify-between bg-gradient-to-r from-[#a90f90] to-[#0c1a51] p-5 sm:from-55% sm:to-100% sm:p-6'>
            <div className='text-lg font-medium leading-none text-white sm:text-2xl sm:leading-9'>
              Suscríbete al nivel 6
            </div>
            <div className='flex min-w-[126px] flex-col border-l-2 border-solid border-l-white pl-1.5'>
              <div className='text-left text-xs font-medium leading-5 text-white line-through sm:text-sm'>
                $ 50.690
              </div>
              <div className='flex flex-row flex-nowrap items-baseline gap-2'>
                <span className='text-right text-base font-semibold leading-6 text-white sm:text-xl'>
                  $ 17.899
                </span>
                <p className='text-right text-sm font-semibold leading-4 text-white sm:text-base'>
                  /mes
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 p-6'>
            <div className='text-lg font-normal leading-6 text-black'>
              Consigue los mejores beneficios en Mercado Libre
            </div>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {services.map((service, index) => (
                <div
                  key={`service-${index}`}
                  className='flex flex-row items-center'
                >
                  <div className='mr-2 flex h-16 w-16 min-w-[64px] items-center justify-center rounded-full border border-solid border-gray-300'>
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      width={48}
                      height={48}
                      className='h-12 w-12 rounded-full object-fill'
                    />
                  </div>
                  <p className='text-base font-normal leading-4 text-black'>
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex h-20 items-center justify-end border-t border-solid border-gray-300 px-6'>
            <button className='leading-12 flex h-12 w-full items-center justify-center rounded-md bg-blue-500 text-center text-base text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:w-32'>
              Suscríbete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Subscription };
