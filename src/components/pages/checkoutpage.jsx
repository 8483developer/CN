import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMessage, setPaymentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    // Fetch payment intent client_secret from your backend
    const response = await fetch('http://localhost:3001/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000, currency: 'usd' }), // Example: $10.00
    });

    const { clientSecret } = await response.json();

    // Confirm payment
    const card = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
      },
    });

    setIsLoading(false);

    if (error) {
      setPaymentMessage(`Payment failed: ${error.message}`);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setPaymentMessage('Payment successful!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Secure Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">
            Card Details
          </label>
          <div className="p-3 border border-gray-300 rounded-md shadow-sm bg-gray-50">
            <CardElement id="card-element" className="text-gray-800" />
          </div>
          <button
            type="submit"
            disabled={!stripe || isLoading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
        {paymentMessage && <p className="text-center text-gray-700 mt-4">{paymentMessage}</p>}
      </div>
    </div>
  );
};

export default CheckoutPage;
