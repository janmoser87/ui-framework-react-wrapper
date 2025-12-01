/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState } from 'react';

import MyModal from './MyModal';

export default function MyReactModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (

        <div >

            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                🚀 Open Modal
            </button>

            <MyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="My modal title :)"
            >
                <p>Hey, I am modal.</p>
                
            </MyModal>

        </div>
    )

}