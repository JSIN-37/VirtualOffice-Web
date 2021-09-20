import React from 'react'
//import { Container } from '@material-ui/core'
import { Line } from 'react-chartjs-2';

const smallMonths = [3, 5, 8, 10];
const bigMonths = [0, 2, 4, 6, 7, 9, 11];
const labelSet1 = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13rd", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th"];
const labelSet2 = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13rd", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
const labelSet3 = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13rd", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th"];
const labelSet4 = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13rd", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th"];

export default function AttendeesGraph({ month, year }) {
    const state = {
        labels: smallMonths.includes(month) ? labelSet1 : (
            bigMonths.includes(month) ? labelSet2 : (
                ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? labelSet3 : labelSet4)
        ),
        datasets: [
            {
                label: "Present",
                data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 10)),
                borderColor: "rgba(40, 180, 99 ,1)"
            },
            {
                label: "Absent",
                data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 5)),
                borderColor: "rgba(236, 112, 99 ,1)"
            }
        ]
    };

    return (
        // <Container height="1000" style={{ paddingTop: '6px', paddingBottom: '6px' }}>
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
        //</Container>
    )
}