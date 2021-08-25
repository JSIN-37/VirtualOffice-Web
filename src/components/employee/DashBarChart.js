import React from 'react'
import { Container } from '@material-ui/core'
import { Bar } from 'react-chartjs-2';

const arbitraryStackKey = "stack1";

const state = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],

    datasets: [
        // These two will be in the same stack.
        {
            stack: arbitraryStackKey,
            label: 'Work Hours',
            data: [8.5, 7.2, 6.8, 8, 7],
            backgroundColor: '#855CF8'
        },
        {
            stack: arbitraryStackKey,
            label: 'Break Hours',
            data: [0.5, 1.8, 1.2, 1, 2],
            backgroundColor: '#CBBAFC'
        }
    ]
}

export default function DashBarChart() {
    return (
        <Container style={{ paddingTop: '6px', paddingBottom: '6px' }}>
            <Bar
                data={state}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            ticks: {
                                stepSize: 1
                            },
                        },

                    }
                }}
            />
        </Container>
    )
}