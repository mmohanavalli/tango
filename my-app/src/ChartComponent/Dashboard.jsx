import React ,{useEffect, useState} from "react";
import { Doughnut } from 'react-chartjs-2';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
            this.state = { MemberCount: 0, view_type: 'month', AllMemberCount: 0 };
    }

    componentDidMount(){
    }   

    render(){
        return(
            <>
                <div className='header text-center'>
                        <h1>Welcome To Tango Eye</h1>
                        <div>We have created the sample chart data using React JS</div>
                    </div>
            </>
        
        )
    }
}

export default Dashboard;