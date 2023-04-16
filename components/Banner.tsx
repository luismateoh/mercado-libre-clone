import Image from 'next/image';
import { auto } from '@popperjs/core';

const n = 6;
const Banner = () => {
  return (
    <div
      className='flex items-baseline justify-center bg-[#ebebeb]'
      id='Banner'
    >
      <div>
        <Image
          className=' min-h-[180px] w-full cursor-pointer overflow-hidden object-cover sm:min-h-[200px] md:min-h-[260px]'
          src='/media/images/banner-1.png'
          alt='Banner'
          width={1520}
          height={343}
        />
        <form
          action=''
          className='relative bottom-6 z-10 flex flex-row justify-center gap-1 overflow-hidden'
        >
          {[...Array(n)].map((e, i) => {
            return (
              <input
                {...(i === 1 && { defaultChecked: true })}
                key={i}
                type='radio'
                name='banner-1'
                id={`banner-${i + 1}`}
                className='h-1.5 w-1.5 cursor-pointer appearance-none rounded-[3px] bg-[#00000040] shadow-[inset_0px_0px_0px_1px_#ffffff] checked:rounded-[3px] checked:bg-white checked:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.25)]'
              />
            );
          })}
        </form>
      </div>
    </div>
  );
};

export { Banner };
