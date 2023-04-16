import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const offers = {
  title: 'Ofertas',
  cards: [
    {
      image: '/media/images/offer-1.png',
      price: '$ 210.900',
      discount: '32% OFF',
      free_delivery: true,
    },
    {
      image: '/media/images/offer-2.png',
      price: '$ 74.990',
      discount: '25% OFF',
      free_delivery: true,
      full_delivery: true,
    },
    {
      image: '/media/images/offer-3.png',
      price: '$ 134.950',
      discount: '50% OFF',
      free_delivery: true,
    },
    {
      image: '/media/images/offer-4.png',
      price: '$ 149.900',
      discount: '30% OFF',
      free_delivery: true,
    },
    {
      image: '/media/images/offer-5.png',
      price: '$ 69.990',
      discount: '17% OFF',
      full_delivery: true,
    },
  ],
};

const Offers = () => {
  return (
    <section className='bg-[#ebebeb]' id='Offers'>
      <div className='section-container gap-5'>
        <div className='section-title'>
          <h2>Ofertas</h2>
          <Link href=''>Ver todas</Link>
        </div>
        <div className='grid grid-cols-2 gap-4 px-2 py-0 lg:grid-cols-5'>
          {offers.cards.map((card, index) => (
            <div
              className='h-[350px] w-auto cursor-pointer rounded bg-white shadow-md'
              key={`card-${index}`}
            >
              <div className=' object-cover'>
                <Image width={224} height={224} src={card.image} alt='' />
              </div>
              <div className='flex h-auto flex-col gap-1.5 px-4 py-5'>
                <div className='flex items-center gap-2.5'>
                  <span className='flex items-center text-2xl font-normal leading-6 text-[#333333]'>
                    {card.price}
                  </span>
                  <p className='flex items-center text-sm font-normal leading-4 text-[#00a650]'>
                    {card.discount}
                  </p>
                </div>
                <div className='flex h-[22px] items-center justify-items-start gap-0.5 text-center'>
                  {card.free_delivery && (
                    <span className='text-[13px] font-semibold leading-4 text-[#00a650]'>
                      Envío gratis
                    </span>
                  )}
                  {card.full_delivery && (
                    <Image
                      width={40}
                      height={12}
                      src='/media/icons/full-icon.svg'
                      alt=''
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Offers };
