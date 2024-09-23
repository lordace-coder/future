import React, { useState, useEffect } from 'react';
import { AlertCircle, ChevronRight, Gift } from 'lucide-react';


const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <svg className="w-32 h-32 mx-auto mb-4" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="#3B82F6" 
            strokeWidth="8" 
            strokeDasharray="70 30"
            className="animate-spin origin-center"
          />
          <path 
            d="M50 15 L65 40 L50 65 L35 40 Z" 
            fill="#8B5CF6"
            className="animate-pulse"
          />
        </svg>
        <h2 className="text-3xl font-bold mb-2 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            CryptoFuture
          </span>
        </h2>
        <p className="text-gray-400 animate-pulse">Loading your digital future...</p>
      </div>
    </div>
  );
};

const CryptoAirdrop = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          CryptoFuture Airdrop
        </h1>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Claim Your <span className="text-blue-400">Future Tokens</span>
            </h2>
            
            {isSubmitted ? (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your airdrop claim has been submitted. Check your wallet soon!
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="wallet" className="block text-sm font-medium mb-1">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    id="wallet"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Claim Airdrop
                </button>
              </form>
            )}
          </div>
          <div className="bg-gray-700 p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Gift className="mr-2 h-5 w-5 text-blue-400" />
              Airdrop Details
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
              <li>10,000 FUTURE tokens per wallet</li>
              <li>Limited to the first 10,000 participants</li>
              <li>Tokens will be distributed within 7 days</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4">
        <p className="text-sm text-gray-400">
          &copy; 2024 CryptoFuture. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CryptoAirdrop;