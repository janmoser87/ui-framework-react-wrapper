/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState } from 'react';

export default function MyReactForm() {

    const [inputValue, setInputValue] = useState('');

    const handleSend = (e) => {       
        alert(`Submitted: ${inputValue}`);
        setInputValue(''); 
    };

    return (
        <div className="p-4 border rounded mt-4">
            <label className="block text-sm font-bold mb-2">Write something:</label>
            <input 
                type="text"
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                className="border p-2 rounded w-full"
                placeholder="React is awesome..."
                // Pokud chceš, aby fungoval Enter, přidej onKeyDown:
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(e) }}
            />
            
            <button 
                type="button" 
                onClick={handleSend}
                className="mt-2 bg-green-500 text-white p-2 rounded"
            >
                Submit
            </button>
            
            <div>
                inputValue: {inputValue}
            </div>
        </div>
    );
}