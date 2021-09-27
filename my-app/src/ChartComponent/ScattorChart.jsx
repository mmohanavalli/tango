import React, { useEffect, useState } from "react";
import { Scatter } from 'react-chartjs-2';
import { scatter_plot } from '../list_json/list_all_json.js';

class ScattorChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scatter_val: scatter_plot,
      scatter_data: [],
      scatter_labels: [],
    };
  }

  componentWillMount() {
    this.getScatterData();

  }
 /**
     * fetch the scatter values from json
     */
  getScatterData = () => {
    let data = [];
    let labels = [];
    this.state.scatter_val.forEach(val => {
      data.push({ x: val.month, y: val.store_count });
      labels.push(val.store_count);
    });
    this.setState({ scatter_data: data, scatter_labels: labels })
  }

  render() {

    const rand = () => Math.round(Math.random() * 20 - 10);

    const data = {
      datasets: [
        {
          label: 'A dataset',
          data: this.state.scatter_data,
          backgroundColor: 'rgba(255, 99, 132, 1)',
          // type:'time'
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
          <h1 className='title'>Scatter Chart</h1>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            {this.state.scatter_data.length > 0 && <Scatter data={data} width={100}
              height={50} options={options} />}
          </div>
        </div>
      </>
    );
  }
}

export default ScattorChart;