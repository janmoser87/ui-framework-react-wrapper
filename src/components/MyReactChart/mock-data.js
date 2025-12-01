export const chartData = {
    labels: ['January', 'February', 'March'],
    datasets: [
        {
            label: 'Count',
            data: [12, 19, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

export const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sales stats',
        },
    },
}

export const chartWrapperStyle = {
    maxWidth: '600px',
    margin: '0 auto'
}