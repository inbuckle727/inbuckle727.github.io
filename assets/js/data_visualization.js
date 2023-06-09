﻿const years = Object.keys(sampleData); 

const data = Object.values(sampleData); 

const horozontalChartDetails = {

    type: 'horizontalBar', 

    data: {

        labels: years,

        datasets: [
            {

                label: "Students Percentage",

                data: data,

                backgroundColor: ["#FF0000", "#d896ff", "#3cba9f", "#1d4e57", "#aa9898", "#3e95cd", "#8e5ea2", "#3cba9f", "#baffc9", "#c45850"], // adding random colors

                borderWidth: 2

            },
        ]
    },

    options: {

        title: {

            display: true,

            text: 'Horizontal Bar Chart - Edel Dominguez'

        },

        legend: { 

            display: false

        },

        tooltips: { 

            enabled: false

        },

        scales: {

            yAxes: [{

                ticks: {

                    reverse: false 

                }

            }],

        }

    }

}

const doughnutChartDetails = {

    type: 'doughnut',

    data: {

        labels: years,

        datasets: [
            {
                label: "Students Percentage",

                data: data,

                backgroundColor: ["#FF0000", "#d896ff", "#3cba9f", "#1d4e57", "#aa9898", "#3e95cd", "#8e5ea2", "#3cba9f", "#baffc9", "#c45850"], // adding random colors

                borderWidth: 2

            },
        ]
    },

    options: {

        title: {

            display: true,

            text: 'Doughnut Chart - Edel Dominguez'

        },

        legend: { 

            display: false

        },

        tooltips: { 

            enabled: false

        },
    }
}



const barChart = document.getElementById('chartJSContainer').getContext('2d');

const doughnut = document.getElementById('doughnutChartContainer').getContext('2d');

const myHorizontalChart = new Chart(barChart, horozontalChartDetails);

const myDoughnutChart = new Chart(doughnut, doughnutChartDetails)