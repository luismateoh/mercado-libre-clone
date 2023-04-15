import Link from 'next/link';

const Footer = () => {
  const footerFeatures = [
    {
      icon: './media/icons/footer-payment.svg',
      title: 'Paga con tarjeta o en efectivo',
      description:
        'Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!',
      link: 'Cómo pagar con Mercado Pago',
    },
    {
      icon: './media/icons/footer-shipping.svg',
      title: 'Envío gratis desde $ 90.000',
      description:
        'Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.',
      link: 'Conoce más sobre este beneficio',
    },
    {
      icon: './media/icons/footer-protected.svg',
      title: 'Seguridad, de principio a fin',
      description:
        '¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.',
      link: 'Cómo te protegemos',
    },
  ];

  return (
    <footer className='mb-24 flex flex-col items-center justify-center bg-white '>
      <div className='features flex flex-row items-center justify-center max-w-[1200px]'>
        <div className='features-container  flex gap-10 lg:gap-0 flex-col lg:flex-row items-start py-40'>
          {footerFeatures.map((feature) => (
            <div className='feature flex flex-col items-center justify-center mx-auto w-1/3  '>
              <div className='feature-icon min-h-[105px] flex h-full items-center justify-center'>
                <img src={feature.icon} alt='' />
              </div>
              <span className='flex items-center justify-center text-center text-base font-medium leading-7 text-gray-700'>
                {feature.title}
              </span>
              <p className='min-w-300px my-2 flex items-center justify-center text-center text-base font-normal leading-6 text-gray-500'>
                {feature.description}
              </p>
              <Link
                className='flex items-center text-center text-sm font-normal leading-5 text-blue-500'
                href='#'
              >
                {feature.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='separator-container pt-90 flex h-full flex-row justify-center'>
        <div className='separator w-1px h-65px bg-gray-300'></div>
      </div>
      <div className='footer-info flex min-w-full flex-col items-center justify-center border-t border-gray-300 bg-white'>
        <div className='nav w-[1200px] py-15 flex flex-col px-8'>
          <div className='links flex flex-row items-start gap-20'>
            <a
              className='flex items-center text-sm font-normal leading-4 text-gray-700'
              href='#'
            >
              Link 1
            </a>
            <a
              className='flex items-center text-sm font-normal leading-4 text-gray-700'
              href='#'
            >
              Link 2
            </a>
            {/* Repeat the link element above as many times as necessary */}
          </div>
          <p className='mb-2 flex items-center text-sm font-normal leading-4 text-gray-500'>
            Footer info text
          </p>
        </div>
        <div className='regulators w-[1200px] h-[70px] py-15 flex flex-row items-start gap-20 border-t border-gray-200 px-8'>
          {/* Regulator images or logos */}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
