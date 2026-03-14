import React from 'react';
import { Copy, Mail, X } from 'lucide-react'; // Optional: for icons

const ContactPopup = ({ isOpen, onClose, messData }) => {
  if (!isOpen) return null;

  const { messName, ownerName, email, number } = messData;


  const copyToClipboard = () => {
    console.log("Copying number:", number);
    navigator.clipboard.writeText(number);
    alert("Phone number copied to clipboard!");
  };

  const sendEmail = () => {
    window.location.href = `mailto:${email}?subject=Inquiry about ${messName}`;
  };

  return (
    <>
   <style>{`
  @keyframes popup {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .popup_animation {
    animation: popup 0.25s ease-in-out forwards;
  }
`}</style>
      <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 ">
        <div className="bg-white rounded-2xl p-6 w-auto max-w-md shadow-2xl popup_animation  transform transition-all">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-2xl font-bold text-orange-600 pr-4">{messName}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-black">
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-3">
            <p className="text-gray-700"><strong>Owner:</strong> {ownerName}</p>
            <p className="text-gray-700"><strong>Email:</strong> {email}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {number}</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition"
            >
              <Copy size={18} /> Copy Number
            </button>

            <button
              onClick={sendEmail}
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition"
            >
              <Mail size={18} /> Send Email
            </button>
          </div>
        </div>
      </div>

      





    </>
  );
};

export default ContactPopup;