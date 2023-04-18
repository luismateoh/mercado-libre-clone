import React, { useState } from 'react';
import { useCartContext } from '../context/cartContext';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineDelete, MdOutlineShoppingCart } from 'react-icons/md';

interface CardItemProps {
  id: number;
  name: string;
  price: number;
}

const CartButton = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartItems, removeFromCart } = useCartContext();

  const handleRemoveFromCart = (item: number) => {
    removeFromCart(item);
  };

  return (
    <>
      <button className='relative flex' onClick={() => setShowModal(true)}>
        <MdOutlineShoppingCart className='h-5 w-5 text-gray-600 ' />
        {cartItems.length > 0 && (
          <div className='top right max-w-5 min-w-3 absolute -right-2.5 -top-1.5 m-0 h-3.5 w-full rounded-full bg-[#2D3277] p-0 text-center text-xs leading-tight text-white'>
            {cartItems.length}
          </div>
        )}
      </button>

      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <DialogTitle>Carrito de compras</DialogTitle>
        <DialogContent>
          {cartItems.length === 0 ? (
            <p className='text-center'>No hay productos en el carrito</p>
          ) : (
            <>
              {cartItems.map((item: CardItemProps, index: number) => (
                <>
                  <div
                    className='flex items-center justify-between'
                    key={`listItem-${index}`}
                  >
                    <p>{item.name}</p>
                    <div className='flex items-center gap-2'>
                      <p>{`$ ${item.price.toLocaleString('es-CO', {
                        maximumFractionDigits: 0,
                      })}`}</p>
                      <MdOutlineDelete
                        className='h-5 w-5 cursor-pointer text-red-800'
                        onClick={() => handleRemoveFromCart(item.id)}
                      />
                    </div>
                  </div>
                </>
              ))}
              <hr className='my-2' />
              <p className='w-full text-right'>
                Total: $
                {cartItems
                  .reduce(
                    (total: number, item: CardItemProps) => total + item.price,
                    0
                  )
                  .toLocaleString('es-CO', {
                    maximumFractionDigits: 0,
                  })}
              </p>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <button
            className='mb-2 mr-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </button>
          <button
            className={`${
              cartItems.length === 0 && 'hidden'
            }  mb-2 mr-2 rounded-md bg-yellow_ml px-4 py-2 text-sm font-medium  hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-400`}
          >
            Comprar
          </button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </>
  );
};

export default CartButton;
