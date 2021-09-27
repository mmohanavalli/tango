import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { line_chart } from '../list_json/list_all_json.js'

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          line_val: line_chart,
          line_data: [],
          line_labels: [],
        };
    }

    componentWillMount() {
        this.getLineData();

    }
 /**
     * fetch the pie values from json
     */
    getLineData = () => {
        let data = [];
        let labels = [];
        this.state.line_val.forEach(val => {
            data.push(val.customer);
            labels.push(val.year);
        });

        this.setState({ line_data: data, line_labels: labels })
    }

    render() {

        const data = {
            labels: this.state.line_labels,
            datasets: [
              {
                label: '# of Votes',
                data: this.state.line_data,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
               
              },
            ],
          };
          
          const options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          };
          
          return (
            <>
              <div className='header text-center'>
                <h1 className='title'>Line Chart</h1>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-md-5">
                  <Line data={data} width={100}
                    height={50} options={options} />
                </div>
              </div>

            </>
          );
          
    }
}

export default LineChart;