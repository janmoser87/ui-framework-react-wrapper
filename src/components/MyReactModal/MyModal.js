/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import ReactDOM from 'react-dom';

export default function MyModal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    const modalContent = (
        <div style={{ position: 'fixed', zIndex: 9999, inset: 0 }}>

            {/* 5. FIX STYLŮ: Protože jsme utekli ze Shadow DOMu ven do body, 
               musíme si sem znovu natáhnout styly, jinak by modal byl "nahý".
               (V produkci bys sem mohl injectnout ten string tailwindStyles přes props)
            */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                rel="stylesheet"
            />

            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-filter backdrop-blur-sm">

                {/* MODAL OKNO */}
                <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md m-4 relative" role="dialog" aria-modal="true">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 font-bold text-2xl leading-none focus:outline-none"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Content */}
                    <div className="text-gray-600">
                        {children}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex justify-end space-x-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => alert('Action confirmed.')}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow transition"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // createPortal(co_chci_renderovat, kam_to_chci_renderovat)
    // Renderuje to přímo do document.body
    return ReactDOM.createPortal(
        modalContent,
        document.body
    );
}