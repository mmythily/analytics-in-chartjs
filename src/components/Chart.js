import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartData :{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: 
                [{
                    label:'GIVs this week',
                    data:[3,7,2,8,9,1],
                    backgroundColor: [
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                }
            ]},
                options:{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            }
        }
    
    render () {
        return (
            <div className='chart'>
                < Bar 
                    data={this.state.chartData}
                    width={500}
                    height={500}
                    options={{ maintainAspectRatio:false}}
                />
            </div>
        )
    }
}

export default Chart;