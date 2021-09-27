import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Tango Task</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/bar">Bar Chart</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/pie">Pie Chart</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/line">Line Chart</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/scatter">Scatter Chart</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;