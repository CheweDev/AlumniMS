import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';

const UserProject = () => {
  const [paymentMethod, setPaymentMethod] = useState('Bank');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCardDetails, setSaveCardDetails] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", { paymentMethod, cardNumber, expirationDate, cvv, saveCardDetails });
    // Add your payment processing logic here
  };

  return (
    <>
    <Navbar/>
    <Header/>
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column - Payment Form */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-4">Donate With:</h2>
        
        <div className="flex items-center space-x-4 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Bank"
              checked={paymentMethod === 'Bank'}
              onChange={() => setPaymentMethod('Bank')}
              className="h-5 w-5 text-green-600"
            />
            <span className="ml-2">Bank</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Gcash"
              checked={paymentMethod === 'Gcash'}
              onChange={() => setPaymentMethod('Gcash')}
              className="h-5 w-5 text-gray-400"
            />
            <span className="ml-2 text-gray-500">Gcash</span>
          </label>
          
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="ManPower"
              checked={paymentMethod === 'ManPower'}
              onChange={() => setPaymentMethod('ManPower')}
              className="h-5 w-5 text-gray-400"
            />
            <span className="ml-2 text-gray-500">Man Power</span>
          </label>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9101 1121"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Expiration Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={saveCardDetails}
              onChange={() => setSaveCardDetails(!saveCardDetails)}
              className="h-5 w-5"
            />
            <span className="ml-2 text-gray-500">Save card details</span>
          </label>
        </div>
        
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-3 px-4 rounded font-bold hover:bg-green-600 transition duration-200"
        >
          PAY
        </button>
        
        <p className="text-xs text-gray-400 mt-4">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </p>
      </div>
      
      {/* Right Column - Project Information */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-bold text-green-800 mb-4">Project Information</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between border rounded-md p-4">
            <span>500 pcs. of hollowblock</span>
            <span className="text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          
          <div className="flex items-center justify-between border rounded-md p-4">
            <span>College of Computing and Information Sciences</span>
            <span className="text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          
          <div className="flex items-center justify-between border rounded-md p-4">
            <span>Batch 2018-2019</span>
            <span className="text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold text-green-800 mb-4">Description</h2>
          <p className="mb-4">
            This hollowblocks wil be donated to the College of Computing and Information Sciences.
          </p>
          <a href="https://www.carsu.edu.ph/?q=professor/ccis" className="text-green-800 hover:underline">
            https://www.carsu.edu.ph/?q=professor/ccis
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserProject;