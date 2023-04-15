import React from 'react';

const benefits = [
  {
    imageUrl: './media/images/benefit-bg-1.png',
    imageAlt: 'Disney+ y Star+',
    gradientColor: '#081330',
    brandImageUrl: './media/images/benefit-brand-1.png',
    brandName: 'Disney+ y Star+',
    promoDiscount: 'Sin cargo con el nivel 6',
  },
  {
    imageUrl: './media/images/benefit-bg-2.png',
    imageAlt: '7 DÍAS GRATIS',
    gradientColor: '#3c034e',
    brandImageUrl: './media/images/benefit-brand-2.png',
    brandName: 'HBO Max',
    promoText: '7 DÍAS GRATIS',
    promoDiscount: 'Hasta 50% OFF',
  },
  {
    imageUrl: './media/images/benefit-bg-3.png',
    imageAlt: '7 DÍAS GRATIS',
    gradientColor: '#0064ff',
    brandImageUrl: './media/images/benefit-brand-3.png',
    brandName: 'Paramount+',
    promoText: '7 DÍAS GRATIS',
    promoDiscount: 'Hasta 50% OFF',
  },
];
const Benefits = () => {
  return (
    <section className='bg-[#ebebeb]' id='Benefits'>
      <div className='section-container'>
        <div className='section-title'>
          <h2>Beneficios de Mercado Puntos</h2>
          <a href=''>Ver todos los beneficios</a>
        </div>
        <div className='mx-0 mb-4 mt-6 flex flex-row flex-wrap items-start justify-center gap-4 overflow-x-clip px-2 py-0'>
          {benefits.map((item) => (
            <div
              key={item.brandName}
              className='relative flex cursor-pointer items-end justify-center overflow-hidden rounded-md'
            >
              <div
                className={`
                  absolute w-full  bg-gradient-to-t from-[${item.gradientColor}] from-0% to-transparent to-100%
                `}
              >
                <div className='flex flex-row items-center gap-4  p-4'>
                  <img
                    className='h-20 w-20 rounded-md object-fill'
                    src={item.brandImageUrl}
                    alt=''
                  />
                  <div className='flex flex-col gap-1'>
                    <span className='text-[11px] font-semibold leading-none text-white'>
                      {item.promoText}
                    </span>
                    <span className='text-[22px] font-semibold leading-6 text-white'>
                      {item.promoDiscount}
                    </span>
                    <p className='text-lg font-normal leading-5 tracking-[0.4px] text-white'>
                      {item.brandName}
                    </p>
                  </div>
                </div>
              </div>
              <img className='card-bg' src={item.imageUrl} alt='' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Benefits };
