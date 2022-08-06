import Head from 'next/head';
import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>today</span>
                <span>{state.cart.length} articles</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
