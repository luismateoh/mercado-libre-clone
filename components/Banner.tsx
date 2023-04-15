const n = 6;
const Banner = () => {
  return (
    <div
      className='flex items-baseline justify-center bg-[#EBEBEB]'
      id='Banner'
    >
      <div>
        <img src='./media/images/banner-1.png' alt='Banner' />
        <form action='' className='  flex flex-row justify-center gap-0.5'>
          {[...Array(n)].map((e, i) => {
            return (
              <input
                key={i}
                type='radio'
                name='banner-1'
                id={`banner-${i + 1}`}
                className='h-2 w-2 cursor-pointer appearance-none rounded-sm border-2 bg-zinc-950 shadow-sm'
              />
            );
          })}
        </form>
      </div>
    </div>
  );
};

export { Banner };
