// const paymentMethodsUrl = 'https://localhost:7164/v1/api/PaymentDetails';

// const FetchPaymentMethods = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const result = await fetch(paymentMethodsUrl, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await result.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching payment methods:', error);
//       return [];
//     }
//   };
  
//   export { FetchPaymentMethods };