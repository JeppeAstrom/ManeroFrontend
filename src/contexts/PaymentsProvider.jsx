import React, { createContext, useEffect, useState } from 'react';

const PaymentsContext = createContext();

const PaymentsProvider = (props) => {
  const [paymentMethods, setPaymentMethods] = useState(null);

  const fetchPaymentMethods = async () => {
    try {
      const response = await fetch('https://localhost:7164/v1/api/PaymentDetails', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await response.json();
      setPaymentMethods(data);
    } catch (error) {
      console.error('Error fetching payment methods:', error);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  return (
    <PaymentsContext.Provider value={{ fetchPaymentMethods, paymentMethods }}>
      {props.children}
    </PaymentsContext.Provider>
  );
};

export { PaymentsContext, PaymentsProvider };
