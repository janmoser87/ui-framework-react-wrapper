/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState } from 'react';

export default function MyReactBeauty() {
    const [activeTab, setActiveTab] = useState('chart');
    return (
        
        <div >

            {/* Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-white text-xl font-bold m-0">
                            Tailwind Dashboard
                        </h2>
                    </div>
                </div>

                {/* (Tabs) */}
                <div className="flex border-b border-gray-200">
                    <button 
                        className={`flex-1 py-3 px-4 text-sm font-medium focus:outline-none transition-colors duration-200 ${activeTab === 'chart' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                        onClick={() => setActiveTab('chart')}
                    >
                        Graph
                    </button>
                    <button 
                        className={`flex-1 py-3 px-4 text-sm font-medium focus:outline-none transition-colors duration-200 ${activeTab === 'data' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                        onClick={() => setActiveTab('data')}
                    >
                        Data
                    </button>
                </div>

                {/* Coontent */}
                <div className="p-6">
                    
                    {/* Tab 1: Graph */}
                    {activeTab === 'chart' && (
                        <div className="animate-fade-in-down">
                            
                            <div className="border-2 border-dashed border-gray-200 rounded-lg p-2 bg-gray-50">
                                /** There would be some graph */
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Raw Data JSON */}
                    {activeTab === 'data' && (
                        <div className="animate-fade-in-up">
                            <h3 className="text-lg font-medium text-gray-900 mb-2"> Data (JSON)</h3>
                            <div className="bg-gray-800 rounded-lg p-4 overflow-auto max-h-60 shadow-inner">
                                <pre className="text-green-400 text-xs font-mono">
                                    /** There would be some code */
                                </pre>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-6 flex space-x-3 border-t pt-4 border-gray-100">
                        <button 
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow transition duration-150 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Submit
                        </button>
                        <button 
                            onClick={() => alert("Tailwind works!")}
                            className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-50 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            Alert
                        </button>
                    </div>

                </div>
            </div>
            
        </div>
    )

}