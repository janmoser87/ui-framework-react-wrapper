/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React, { useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { chartData, chartOptions, chartWrapperStyle } from './mock-data'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function MyReactChart() {
    return(
        <div style={{ ...chartWrapperStyle }}>
            <Bar options={chartOptions} data={chartData} />
        </div>
    )
}