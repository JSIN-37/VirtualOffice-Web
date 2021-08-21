import React from 'react'
import { Container } from '@material-ui/core'
import { Line } from 'react-chartjs-2';

const state = {
    labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13rd", "14th", "15th", "16th", "17th", "18th", "19th", "20th",],
    datasets: [
        {
            label: "Present",
            data: [33, 53, 85, 41, 44, 65],
            fill: false,
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Absent",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
        }
    ]
};

export default function DashPieChart() {

    return (
        <Container style={{ paddingTop: '6px', paddingBottom: '6px' }}>
            <Line
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
                        }
                    }
                }}
            />
        </Container>
    )
}