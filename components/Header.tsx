import { MdOutlineSearch, MdOutlineLocationOn, MdOutlineShoppingCart } from 'react-icons/md';

const Header = () => {
  return (
    <header className='flex flex-col items-center justify-center bg-yellow_ml'>
      <div className=' flex flex-col  max-w-[1200px] w-full'>
        <div className='flex flex-row items-center gap-14'>
          <a href='/'>
            <img src='./media/icons/logo-meli.svg' alt='Mercado Libre Logo' />
          </a>
          <div className='flex h-14 w-[600px] items-center justify-center '>
            <form
              className='flex h-10 w-full flex-row rounded-sm bg-white shadow-md'
              action=''
            >
              <input
                className='mx-4 h-full w-full border-none text-base font-normal leading-normal outline-none'
                type='text'
                placeholder='Buscar productos, marcas y más...'
              />
              <div className='flex flex-row items-center'>
                <div className='h-6 w-0 border-r border-[#e0e0e0]'></div>
                <button
                  className='flex h-10 w-10 items-center justify-center text-xl text-gray-500'
                  type='submit'
                >
                  <MdOutlineSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='mb-2 flex flex-row items-center justify-between'>
          <nav className='flex flex-row'>
            <ul className='inline-flex h-9 items-center mr-3 '>
              <li className='items-center text-gray mr-10 gap-1 flex text-base  text-[#333333]'>
                <MdOutlineLocationOn />
                <a className='text-sm font-normal text-[#333333]' href='#'>
                  Ingresa tu domicilio
                </a>
              </li>
            </ul>
            <ul className='nav-items inline-flex h-9 items-center gap-3 text-center'>
              <li >
                <a className='categories-nav' href='#'>
                  <div>Categorías</div>
                </a>
              </li>
              <li>
                <a href='#'>Ofertas</a>
              </li>
              <li>
                <a href='#'>Historial</a>
              </li>
              <li>
                <a href='#'>Supermercado</a>
              </li>
              <li>
                <a href='#'>Moda</a>
              </li>
              <li>
                <a href='#'>Vender</a>
              </li>
              <li>
                <a href='#'>Ayuda / PQR</a>
              </li>
            </ul>
          </nav>
          <nav className='flex flex-row'>
            <ul className='nav-account flex flex-row gap-2' >
              <li>
                <a href='#'>Crea tu cuenta</a>
              </li>
              <li>
                <a href='#'>Ingresa</a>
              </li>
              <li>
                <a href='#'>Mis compras</a>
              </li>
            </ul>
            <a href='#'>
              <MdOutlineShoppingCart />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
