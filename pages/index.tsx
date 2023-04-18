import { Header } from '@/components/Header';
import { Banner } from '@/components/Banner';
import { Payments } from '@/components/Payments';
import { Offers } from '@/components/Offers';
import { Subscription } from '@/components/Subscription';
import { Benefits } from '@/components/Benefits';
import { Discover } from '@/components/Discover';
import { Stores } from '@/components/Stores';
import { Collections } from '@/components/Collections';
import { Categories } from '@/components/Categories';
import { Footer } from '@/components/Footer';
import { CartContextProvider } from '@/context/cartContext';
import React from 'react';

export default function Home() {
  return (
    <CartContextProvider>
      <>
        <Header />
        <main>
          <Banner />
          <Payments />
          <Offers />
          <Subscription />
          <Benefits />
          <Discover />
          <Stores />
          <Collections />
          <Categories />
        </main>
        <Footer />
      </>
    </CartContextProvider>
  );
}
