import React, { useContext, useEffect } from 'react';
import { PaymentsContext } from '../../../contexts/PaymentsProvider';

const Payment = () => {
  const { paymentMethods, fetchPaymentMethods } = useContext(PaymentsContext);

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  return (
    <div>
      <h1>Payment Page</h1>
      <ul>
        {paymentMethods &&
          paymentMethods.map((method) => (
            <li key={method.id}>
              <h2>Payment Method {method.id}</h2>
              <p>Card Name: {method.cardName}</p>
              <p>Card Number: {method.cardNumber}</p>
              <p>CVV: {method.cvv}</p>
              <p>Expiration Date: {method.expDate}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Payment;
