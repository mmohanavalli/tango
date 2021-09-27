import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { bar_chart } from '../list_json/list_all_json.js'

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bar_val: bar_chart,
            bar_data: [],
            bar_labels: [],
        };
    }

    componentWillMount() {
        this.getBarData();

    }
 /**
     * fetch the bar values from json
     */
    getBarData = () => {
        let data = [];
        let labels = [];
        this.state.bar_val.forEach(val => {
            data.push(val.customer);
            labels.push(val.month);
        });

        this.setState({ bar_data: data, bar_labels: labels })
    }

    render() {

        const data = {
            labels: this.state.bar_labels,
            datasets: [
              {
                label: '# of Votes',
                data: this.state.bar_data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          };
          
          const options = {
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
              },
            },
          };
          
         return(
           <>
             <div className='header text-center'>
               <h1 className='title'>Bar Chart</h1>
             </div>
             <div className="row justify-content-md-center">
               <div className="col-md-5">
                 <Bar data={data} width={100}
                   height={50} options={options} />
               </div>
             </div>
           </>           
          );
    }
}

export default BarChart;