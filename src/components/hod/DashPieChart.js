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
        <Container style={{ paddingTop: '6px', paddingBottom: '6px' }}>
            <Doughnut
                data={state}
                options={{
                    plugins: {
                        legend: {
                            display: false
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