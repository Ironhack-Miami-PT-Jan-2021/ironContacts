import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {


    render(){
        return(
            <div className="the-nav">
                Currently Displaying {this.props.numberVisible} out of {this.props.totalContacts} total contacts
            </div>
        )
    }


}




export default Navbar;
