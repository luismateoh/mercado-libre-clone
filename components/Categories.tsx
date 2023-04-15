import React from 'react';
const categories = [
  {
    imageSrc: './media/icons/categories-1.svg',
    title: 'Carros, Motos y Otros',
  },
  {
    imageSrc: './media/icons/categories-2.svg',
    title: 'Computación',
  },
  {
    imageSrc: './media/icons/categories-3.svg',
    title: 'Ropa y Accesorios',
  },
  {
    imageSrc: './media/icons/categories-4.svg',
    title: 'Hogar y Muebles',
  },
  {
    imageSrc: './media/icons/categories-5.svg',
    title: 'Accesorios para Vehículos',
  },
  {
    imageSrc: './media/icons/categories-6.svg',
    title: 'Electrodomésticos',
  },
  {
    imageSrc: './media/icons/categories-7.svg',
    title: 'Cámaras y Accesorios',
  },
  {
    imageSrc: './media/icons/categories-8.svg',
    title: 'Celulares y Teléfonos',
  },
  {
    imageSrc: './media/icons/categories-9.svg',
    title: 'Belleza y Cuidado Personal',
  },
  {
    imageSrc: './media/icons/categories-10.svg',
    title: 'Deportes y Fitness',
  },
  {
    imageSrc: './media/icons/categories-11.svg',
    title: 'Electrónica, Audio y Video',
  },
  {
    imageSrc: './media/icons/categories-12.svg',
    title: 'Consolas y Videojuegos',
  },
  {
    imageSrc: './media/icons/categories-13.svg',
    title: 'Juegos y Juguetes',
  },
  {
    imageSrc: './media/icons/categories-14.svg',
    title: 'Herramientas',
  },
];

const Categories = () => {
  return (
    <section className='flex justify-center bg-[#ebebeb]' id='categories'>
      <div className='mx-0 mb-[18px] mt-10 flex w-[1200px] flex-col'>
        <div className='flex gap-[7px] pl-2'>
          <h2 className='text-[25px] font-light leading-[31px] text-[#666666]'>
            Categorías populares
          </h2>
        </div>
        <div
          className='ml-2.5 mt-5 grid h-[340px] grid-cols-[repeat(7,1fr)] grid-rows-[repeat(2,1fr)] overflow-hidden rounded shadow-[0px_1px_1px_rgba(0,0,0,0.1)]'
          style={{ background: 'rgba(255, 255, 255, 0.002)' }}
        >
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className='flex cursor-pointer flex-col content-baseline items-center justify-end gap-[11px] border-solid border-[#eae6e6] border-[0px_1px_1px_0px] px-[15px] py-[23px]'
                style={{ background: '#ffffff' }}
              >
                <img src={category.imageSrc} alt='' />
                <span className='flex h-[42px] items-start text-center text-sm font-normal leading-4 text-[#333333]'>
                  {category.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Categories };
