import React from 'react';
import './NavigationHeader.css';


class NavigationHeader extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a class="navbar-brand" href="#"> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/in/krishnamanchikalapudi" target="_new">About Me</a>
                        </li>
                    </ul>
                    
                    <form class="form-inline mt-2 mt-md-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">signup</button>
                        &nbsp; &nbsp; 
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">sign</button>
                    </form>
                </div>
                </nav>
        )
    }
}

export default NavigationHeader;