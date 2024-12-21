import React from 'react';

const RazorpayCheckout = () => {
  const handlePayment = () => {
    const options = {
      key: 'your-razorpay-key',
      amount: 50000, // Amount in smallest currency unit (e.g., paise for INR)
      currency: 'INR',
      name: 'Your App Name',
      description: 'Test Transaction',
      handler: (response) => {
        console.log(response);
        // Send response.razorpay_payment_id to your backend for verification
      },
      prefill: {
        name: 'Your Name',
        email: 'email@example.com',
        contact: '9999999999',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay with Razorpay</button>;
};

export default RazorpayCheckout;
