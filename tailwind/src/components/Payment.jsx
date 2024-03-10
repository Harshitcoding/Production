import React, { useState } from 'react';

function Payment() {
  const [username, setUsername] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [billing, setBilling] = useState('');

  function handleSubmit() {
    fetch("http://localhost:3000/payment", {  
      method: "POST",
      body: JSON.stringify({
        username: username,
        cardNumber: cardNumber,
        cvv: cvv,
        billing: billing,
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    alert('purchased')
  }

  return (
    <div className="max-w-md mx-auto p-8 shadow-md rounded-md mt-52 bg-gradient-to-t from-black">
      <h2 className="text-2xl font-semibold mb-6 text-white">Enter Payment Information</h2>
      <div className="mb-4">
        <input
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Billing Address"
          value={billing}
          onChange={(e) => setBilling(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Pay
      </button>
    </div>
  );
}

export default Payment;
