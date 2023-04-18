import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const links = [
  { label: 'Trabaja con nosotros', href: '' },
  { label: 'Términos y condiciones', href: '' },
  { label: 'Cómo cuidamos tu privacidad', href: '' },
  { label: 'Accesibilidad', href: '' },
  { label: 'Ayuda / PQR', href: '' },
];

const Footer = () => {
  return (
    <footer className='mb-6 flex max-w-full flex-col items-center justify-center bg-white'>
      <div className='section-container'>
        <div className='flex flex-wrap content-center items-start justify-center px-0 py-10 '>
          <div className='flex flex-col content-center items-center justify-center py-0 sm:px-10'>
            <div className='flex h-full min-h-[105px] content-center items-center justify-center'>
              <Image
                width={65}
                height={65}
                src='./media/icons/footer-payment.svg'
                alt=''
              />
            </div>
            <span className='flex items-center justify-center text-center text-[19px] font-medium leading-7 text-[#4b4b4b]'>
              Paga con tarjeta o en efectivo
            </span>
            <p className='mx-0 mb-[9px] mt-0.5 flex  items-center justify-center text-center text-[15px] font-normal leading-[18px] text-[#999999]'>
              Con Mercado Pago, paga en cuotas y <br />
              aprovecha la comodidad de financiación que <br />
              te da tu banco, o hazlo con efectivo en <br />
              puntos de pago. ¡Y siempre es seguro!
            </p>
            <a
              className='flex items-center text-center text-[13px] font-normal leading-[15px] text-[#3483fa] no-underline'
              href=''
            >
              Cómo pagar con Mercado Pago
            </a>
          </div>

          <div className='flex hidden h-full flex-row justify-center pt-[90px] md:block'>
            <div className='h-[65px] w-px bg-[#e2e2e2]'></div>
          </div>
          <div className='flex flex-col content-center items-center justify-center py-0 sm:px-10'>
            <div className='flex h-full min-h-[105px] content-center items-center justify-center'>
              <Image
                width={65}
                height={65}
                src='./media/icons/footer-shipping.svg'
                alt=''
              />
            </div>
            <span className='flex items-center justify-center text-center text-[19px] font-medium leading-7 text-[#4b4b4b]'>
              Envío gratis desde $ 90.000
            </span>
            <p className='mx-0 mb-[9px] mt-0.5 flex  items-center justify-center text-center text-[15px] font-normal leading-[18px] text-[#999999]'>
              Con solo estar registrado en Mercado <br />
              Libre, tienes envíos gratis en miles de <br />
              productos seleccionados.
            </p>
            <a
              className='flex items-center text-center text-[13px] font-normal leading-[15px] text-[#3483fa] no-underline'
              href=''
            >
              Conoce más sobre este beneficio
            </a>
          </div>
          <div className='flex hidden h-full flex-row justify-center pt-[90px] lg:block'>
            <div className='h-[65px] w-px bg-[#e2e2e2]'></div>
          </div>
          <div className='flex flex-col content-center items-center justify-center py-0 sm:px-10'>
            <div className='content-center; flex h-full min-h-[105px] items-center justify-center'>
              <Image
                width={65}
                height={65}
                src='./media/icons/footer-protected.svg'
                alt=''
              />
            </div>
            <span className='flex items-center justify-center text-center text-[19px] font-medium leading-7 text-[#4b4b4b]'>
              Seguridad, de principio a fin
            </span>
            <p className='mx-0 mb-[9px] mt-0.5 flex  items-center justify-center text-center text-[15px] font-normal leading-[18px] text-[#999999]'>
              ¿No te gusta? ¡Devuélvelo! En Mercado <br />
              Libre, no hay nada que no puedas hacer, <br />
              porque estás siempre protegido.
            </p>
            <a
              className='flex items-center text-center text-[13px] font-normal leading-[15px] text-[#3483fa] no-underline'
              href=''
            >
              Cómo te protegemos
            </a>
          </div>
        </div>
      </div>
      <div className='w-full border-t border-solid border-t-[#e6e6e6]'>
        <div className='section-container items-center sm:items-start'>
          <div className='mb-2 mt-3 flex flex-col content-start items-center gap-3 sm:flex-row sm:items-start sm:gap-5'>
            {links.map((link, index) => (
              <Link
                className='flex items-center text-xs font-normal leading-[13px] text-[#333333] no-underline'
                key={index}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className='mb-0.5 flex items-center text-[11px] font-normal leading-[13px] text-[#999999]'>
            Copyright © 1999-2023 MercadoLibre Colombia LTDA.
          </p>
          <p className='mb-0.5 flex items-center text-[11px] font-normal leading-[13px] text-[#999999]'>
            Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
          </p>
        </div>
        <div className='section-container '>
          <div className='flex flex-row flex-wrap items-center justify-center gap-5  border-t border-solid border-t-[#ededed] px-3 py-3 sm:items-start sm:justify-start'>
            <Image
              width={141}
              height={31}
              src='/media/images/footer-sic.png'
              alt=''
            />
            <Image
              width={200}
              height={35}
              src='/media/images/footer-pum.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
