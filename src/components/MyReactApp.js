/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState } from 'react';

import MyReactChart from './MyReactChart';
import MyReactBeauty from './MyReactBeauty';
import MyReactIntegration from './MyReactIntegration'
import MyReactForm from './MyReactForm'
import MyReactContext from './MyReactContext'
import MyReactModal from './MyReactModal'

const Bomb = () => {
    throw new Error("KABOOM! Testing error 💣");
}

export const MyReactApp = (props) => {
    const { onDispatchEventClick } = props;
    const [explode, setExplode] = useState(false)

    const handleClick = () => {
        const payload = {
            message: "Hellow from React!",
            timestamp: new Date().toISOString()
        };
        onDispatchEventClick(payload);
    }

    // Pomocný styl pro "Karty"
    const cardStyle = "bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-hidden";
    const titleStyle = "text-lg font-bold text-gray-700 mb-4 border-b pb-2";

    return (
        <div className="min-h-full bg-gray-50 p-6 font-sans text-gray-800">
            {explode ? <Bomb /> : null}

            {/* --- HEADER --- */}
            <header className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">
                        React Dashboard
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Welcome back, <span className="font-semibold text-blue-600">{props.name}</span>
                    </p>
                </div>
                <button 
                    onClick={handleClick}
                    className="mt-4 md:mt-0 my-custom-btn hover:opacity-80 transition-opacity text-white font-bold px-6 py-3 rounded-lg shadow-md flex items-center gap-2"
                >
                    <span>📡</span> Dispatch Event
                </button>
            </header>

            {/* --- HLAVNÍ GRID --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* LEVÝ SLOUPEC (Širší - 2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Graf */}
                    <div className={cardStyle}>
                        <h3 className={titleStyle}>📊 Analytics</h3>
                        <MyReactChart />
                    </div>
                    
                    {/* Beauty / Tailwind Showcase */}
                    <div className={cardStyle}>
                        <h3 className={titleStyle}>🎨 Tailwind Integration</h3>
                        <MyReactBeauty />
                    </div>
                </div>

                {/* PRAVÝ SLOUPEC (Užší - 1/3) */}
                <div className="space-y-6">
                    {/* API Integration */}
                    <div className={cardStyle}>
                        <h3 className={titleStyle}>🔌 Data Fetching</h3>
                        <MyReactIntegration />
                    </div>

                    {/* Forms */}
                    <div className={cardStyle}>
                        <h3 className={titleStyle}>📝 Forms</h3>
                        <MyReactForm />
                    </div>

                    {/* Context */}
                    <div className={cardStyle}>
                        <h3 className={titleStyle}>🧠 Context</h3>
                        <MyReactContext />
                    </div>

                    {/* Modals */}
                    <div className={cardStyle}>
                        <h3 className={titleStyle}>🖼️ Portals</h3>
                        <MyReactModal />
                    </div>
                </div>
            </div>

            {/* --- DEV / DEBUG ZONE (Footer) --- */}
            <div className="mt-12 border-t-2 border-dashed border-gray-300 pt-8">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl">🛠️</span>
                    <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm">
                        Developer Zone
                    </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Crash Test */}
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex flex-col justify-between">
                        <div>
                            <h4 className="text-red-800 font-bold text-sm mb-1">🔥 Error Boundary</h4>
                            <p className="text-xs text-red-600 mb-3">Test if the app handles crashes gracefully.</p>
                        </div>
                        <button 
                            onClick={() => setExplode(true)} 
                            className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded transition shadow-sm"
                        >
                            Invoke Error
                        </button>
                    </div>

                    {/* Font: Roboto */}
                    <div className="bg-white border border-gray-200 p-4 rounded-lg font-roboto">
                        <h4 className="font-bold text-sm mb-1 text-gray-500 uppercase text-xs">Font: Roboto</h4>
                        <p className="text-sm text-gray-700">Technical and clean look.</p>
                        <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded mt-2">Button Roboto</button>
                    </div>

                    {/* Font: Comic Neue */}
                    <div className="bg-white border border-gray-200 p-4 rounded-lg font-comic">
                         <h4 className="font-bold text-sm mb-1 text-purple-500 uppercase text-xs">Font: Comic Neue</h4>
                         <p className="text-lg leading-tight text-gray-800">
                             Hello, I am Comic Neue! 🤪
                         </p>
                    </div>

                    {/* Font: Bangers */}
                    <div className="bg-white border border-gray-200 p-4 rounded-lg font-bangers tracking-wide">
                         <h4 className="font-bold text-sm mb-1 text-red-500 uppercase text-xs font-sans">Font: Bangers</h4>
                         <p className="text-3xl text-gray-800">
                             POW! BANG! 💥
                         </p>
                    </div>
                </div>
            </div>
        </div>
    )
};