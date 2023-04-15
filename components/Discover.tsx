import React from 'react';
const promotions = [
  {
    title: 'RENUEVA TUS ESPACIOS',
    description: 'HOGAR Y MUEBLES HASTA 50% OFF',
    imageSrc: './media/images/discover-1.png',
    imageAlt: '',
    buttonText: 'Ver más',
  },
  {
    title: 'SUSCRÍBETE AL NIVEL 6',
    description: 'POR SOLO $17.899 CADA MES',
    imageSrc: './media/images/discover-2.png',
    imageAlt: '',
    buttonText: 'Suscribirme',
  },
];

const Discover = () => {
  return (
    <section className='bg-[#ebebeb]' id='Discover'>
      <div className='section-container'>
        <div className='section-title'>
          <h2>Descubre</h2>
        </div>
        <div className='mx-0 mb-4 mt-6 grid w-full grid-cols-1 gap-4 px-2 py-0 lg:grid-cols-2'>
          {promotions.map((promotion, index) => (
            <div
              key={`promotion-${index}`}
              className='flex h-[250px] w-full flex-row justify-between overflow-hidden rounded rounded-md bg-white pl-8 shadow-md'
            >
              <div className='flex flex-col justify-center'>
                <p className='flex items-center text-xs font-semibold uppercase leading-3 tracking-[4px] text-[#4b4b4b]'>
                  {promotion.title}
                </p>
                <span className='mx-0 mb-3.5 mt-3 flex items-center text-lg font-semibold uppercase leading-none text-[#4b4b4b] sm:text-[28px] lg:leading-[31px]'>
                  {promotion.description}
                </span>
                <button className='flex h-9 w-24 items-center justify-center rounded-sm border-[none] bg-[#3483fa] text-center text-sm font-semibold leading-[1px] text-white hover:cursor-pointer hover:bg-[#126ef8]'>
                  {promotion.buttonText}
                </button>
              </div>
              <img src={promotion.imageSrc} alt={promotion.imageAlt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Discover };
