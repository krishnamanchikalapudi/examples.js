import React from 'react';
import './NavigationFooter.css';

class NavigationFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }
    render() {
        var todaysDate  = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var formatDate = (monthNames[todaysDate.getMonth()] + ' ' + todaysDate.getDate() + ', ' + todaysDate.getFullYear());
        return (
            <footer class="footer">
                <div class="container">
                    <p class="text-center text-uppercase">&nbsp; &nbsp; &copy; from 2001 to {formatDate} &nbsp; &nbsp;</p>
                </div>
            </footer>
        )
    }
}

export default NavigationFooter;