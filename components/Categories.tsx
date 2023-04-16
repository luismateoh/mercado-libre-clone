import React from 'react';
import Image from 'next/image';
const categories = [
  {
    imageSrc: '/media/icons/categories-1.svg',
    title: 'Carros, Motos y Otros',
  },
  {
    imageSrc: '/media/icons/categories-2.svg',
    title: 'Computación',
  },
  {
    imageSrc: '/media/icons/categories-3.svg',
    title: 'Ropa y Accesorios',
  },
  {
    imageSrc: '/media/icons/categories-4.svg',
    title: 'Hogar y Muebles',
  },
  {
    imageSrc: '/media/icons/categories-5.svg',
    title: 'Accesorios\n para Vehículos',
  },
  {
    imageSrc: '/media/icons/categories-6.svg',
    title: 'Electrodomésticos',
  },
  {
    imageSrc: '/media/icons/categories-7.svg',
    title: 'Cámaras y\nAccesorios',
  },
  {
    imageSrc: '/media/icons/categories-8.svg',
    title: 'Celulares y Teléfonos',
  },
  {
    imageSrc: '/media/icons/categories-9.svg',
    title: 'Belleza y Cuidado Personal',
  },
  {
    imageSrc: '/media/icons/categories-10.svg',
    title: 'Deportes y Fitness',
  },
  {
    imageSrc: '/media/icons/categories-11.svg',
    title: 'Electrónica, Audio y Video',
  },
  {
    imageSrc: '/media/icons/categories-12.svg',
    title: 'Consolas y \nVideojuegos',
  },
  {
    imageSrc: '/media/icons/categories-13.svg',
    title: 'Juegos y Juguetes',
  },
  {
    imageSrc: '/media/icons/categories-14.svg',
    title: 'Herramientas',
  },
];

const Categories = () => {
  return (
    <section className='bg-[#ebebeb] pb-3' id='categories'>
      <div className='section-container'>
        <div className='section-title'>
          <h2>Categorías populares</h2>
        </div>
        <div
          className='ml-2.5 mt-5 grid grid grid-cols-2 overflow-hidden rounded shadow-md sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-7'
          style={{ background: 'rgba(255, 255, 255, 0.002)' }}
        >
          {categories.map((category, index) => {
            return (
              <div
                key={`category-${index}`}
                className={`${index > 1 ? '' : 'hidden lg:block'}`}
              >
                <div className='flex cursor-pointer flex-col content-baseline items-center justify-end gap-3 border-b border-s border-[#eae6e6] bg-white px-4 py-5 md:py-8'>
                  <Image
                    width={50}
                    height={50}
                    src={category.imageSrc}
                    alt=''
                  />
                  <span className='flex h-[42px] items-start text-center text-sm font-normal leading-4 text-[#333333]'>
                    {category.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Categories };
