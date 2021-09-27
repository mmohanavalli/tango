import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './ChartComponent/Dashboard';
import PieChart from './ChartComponent/PieChart';
import BarChart from './ChartComponent/BarChart';
import ScattorChart from './ChartComponent/ScattorChart';
import LineChart from './ChartComponent/LineChart';
import Header from './Header';

import ErrorBoundary from './ChartComponent/ErrorBoundary';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

function App() {
    const routes = {
        '/': 'Home',
        '/bar': 'Bar Chart',
        '/pie': 'Pie Chart',
        '/line': 'Line Chart',
        '/scatter': 'Scatter Chart',
    }
  
    return (
        <ErrorBoundary>
            <div id="wrapper" data-color="#00a7ee"  >
                <div className="overlay_bg"></div>

                <Router >
                    <Header />
                    <Breadcrumbs mappedRoutes={routes} />
                    <React.Fragment>
                        <React.Fragment>
                            <input type="hidden" id="checkLoginStikcy" value='' />
                        </React.Fragment>



                        <div id="page-content-wrapper" className=''>
                            <div id="page-content-wrapper-inner">
                                <Switch>
                                    <Route exact path={'/'} render={() => <Dashboard />} />
                                    <Route exact path={'/pie'} render={() => <PieChart />} />
                                    <Route exact path={'/bar'} render={() => <BarChart />} />
                                    <Route exact path={'/scatter'} render={() => <ScattorChart />} />
                                    <Route exact path={'/line'} render={() => <LineChart />} />
                                    <Route exact path={'/something_went_wrong'} render={() => <ErrorBoundary />} />
                                </Switch>
                            </div>
                        </div>


                    </React.Fragment>
                </Router>

            </div>
        </ErrorBoundary>
    );

}

export default App
