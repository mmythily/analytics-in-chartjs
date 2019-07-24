import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import GivsWeek from '../src/components/GivsWeek';
import ItemsWeek from '../src/components/ItemsWeek';

class App extends Component {
    constructor() {
        super();
        this.state = {
            givsWeekData:{},
            itemsWeekData:{}
            

        }
    }

    componentWillMount(){
        this.getgivsWeekData();
    }

    getgivsWeekData(){
    this.setState({
        givsWeekData :{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: 
            [{
                label:'GIVs this week',
                data:[3,7,2,8,9,10,11],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(153, 206, 255, 0.3)',
                    'rgba(255, 159, 64, 0.3)'
                ],
            }
            ]
        },
        itemsWeekData :{
            labels: ['Banana', 'Pants', 'Coffee', 'Gloves', 'Kite'],
            datasets: 
            [{
                label:'GIVs this week',
                data:[3,7,2,8,4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)'
                ],
            }
            ]
        }
    })
    }
    render() {
        return (
            <div>
                <span className='graph'>
                    <GivsWeek givsWeekData={this.state.givsWeekData} /> 
                </span>
                <ItemsWeek itemsWeekData={this.state.itemsWeekData }/>
            </div>
        );
    };

}

export default App;
