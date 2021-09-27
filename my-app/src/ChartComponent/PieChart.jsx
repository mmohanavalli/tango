import React, { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2';
import { pie_chart } from '../list_json/list_all_json.js'
import {handleChart} from './common.js';

class PieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pie_val: pie_chart,
            pie_data: [],
            pie_labels: [],
        };
    }

    componentDidMount() {
        this.getPieData();
        handleChart(this);
    }


    /**
     * fetch the pie values from json
     */
    getPieData = () => {
        let data = [];
        let labels = [];
        this.state.pie_val.forEach(val => {
            data.push(val.customer);
            labels.push(val.store);
        });
        this.setState({ pie_data: data, pie_labels: labels })
    }

    render() {

        const data = {
            labels: this.state.pie_labels,
            datasets: [
                {
                    label: 'Store details',
                    data: this.state.pie_data,

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



        return (
            <>
                <div className='header text-center'>
                    <h1 className='title'>Store data on </h1>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-5">
                        <Pie data={data} width={100}
                            height={50} />
                    </div>
                </div>
            </>
        )
    }
}

export default PieChart;