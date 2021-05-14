import React from 'react';
import {Link} from 'react-router-dom';
import './ContactCard.css'

class ContactCard extends React.Component {


    render(){
        const {name, pictureUrl: pic, popularity, id} = this.props;
        return(
            <div className="card"> 
            <Link to={`/contacts/${id}`}>
                    <h3>{name}</h3>
            </Link>
                    <img src={pic} />
                    <p>Popularity: {popularity}</p>
                    <button onClick = {()=>{this.props.delete(id)}}>Delete</button>
                </div>
        )
    }


}

export default ContactCard;