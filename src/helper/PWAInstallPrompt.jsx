import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default mini-infobar
      setDeferredPrompt(event); // Save the event
      setShowInstallPrompt(true); // Show the custom prompt
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the native install prompt
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('PWA installed successfully');
      } else {
        console.log('PWA installation dismissed');
      }
      setDeferredPrompt(null); // Clear the saved prompt
      setShowInstallPrompt(false);
    }
  };

  return (
    <div className="relative w-full">
      {showInstallPrompt && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed bottom-0 left-0 w-full rounded-t-2xl shadow-lg z-50 border border-green-300 bg-green-100"
        >
          {/* Header */}
          <div className="flex justify-center py-2">
            <div className="w-12 h-1.5 bg-gray-900 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="text-center p-4 ">
            {/* App Images */}
            <div className="flex justify-center gap-4 mb-4">
              <img
                src="../app/1.png" // Replace with your image URL
                alt="App Screenshot 1"
                className="w-28 h-60 rounded-lg object-cover border border-gray-200"
              />
              <img
                src="../app/2.png" // Replace with your image URL
                alt="App Screenshot 2"
                className="w-28 h-60 rounded-lg object-cover border border-gray-200"
              />
              <img
                src="../app/3.png" // Replace with your image URL
                alt="App Screenshot 3"
                className="w-28 h-60 rounded-lg object-cover border border-gray-200"
              />
            </div>

            {/* Description */}
            <h3 className="text-lg font-bold text-gray-800 app-font">Get the Rideroz App</h3>
            <p className="text-sm mb-4 app-font text-green-700">
              Install the app a better experience!
            </p>

            {/* Buttons */}
            <div className=" lg:flex justify-center gap-4 hidden lg:block sm:block md:block">
              <Button
                onClick={handleInstallClick}
                className=" w-full bg-green-500 mb-2 lg:mb-0 text-white py-2.5 rounded-md hover:bg-green-600 font-bold hover:shadow-none shadow-none"
              >
                Download the App Now
              </Button>

              <Button
                onClick={() => setShowInstallPrompt(false)}
                className=" w-full bg-gray-200 text-gray-700 py-2.5 rounded-md font-bold hover:bg-gray-300 hover:shadow-none shadow-none border border-gray-400"
              >
                Continue on Web
              </Button>
            </div>

            <div className=" lg:hidden md:hidden sm:hidden flex-wrap justify-center gap-4">
              <Button
                onClick={handleInstallClick}
                className=" w-full bg-green-500 mb-2 lg:mb-0 text-white py-2.5 rounded-md hover:bg-green-600 font-bold hover:shadow-none shadow-none"
              >
                Download the App Now
              </Button>

              <div
                onClick={() => setShowInstallPrompt(false)}
                className=" w-full bg-gray-200 border border-gray-400 text-gray-700 py-2.5 rounded-md  hover:bg-gray-300 hover:shadow-none shadow-none font-bold"
              >
                Continue on Web
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PWAInstallPrompt;
