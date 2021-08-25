import React from 'react'
import { Container } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

const state = {
    labels: ['Complete', 'Incomplete'],
    datasets: [
        {
            label: 'Work Progress',
            backgroundColor: [
                '#40A0B5',
                '#C3CBCD'
            ],
            hoverBackgroundColor: [
                '#218297',
                '#9CA6A8'
            ],
            data: [45, 55]
        }
    ]
}

export default function DashPieChart() {

    return (
        <Container>
            <Doughnut
                data={state}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true
                        },
                        plugins: {
                            legend: {
                                display: true
                            }
                        },
                        datalabels: {
                            formatter: function (value, context) {
                                return context.chart.data.labels[
                                    context.dataIndex
                                ];
                            },
                        }
                    },
                }}
            />
        </Container>
    )
}