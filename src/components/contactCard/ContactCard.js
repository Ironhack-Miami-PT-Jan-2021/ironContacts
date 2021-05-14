import React from 'react';
import {Link} from 'react-router-dom';
import './ContactCard.css'

class ContactCard extends React.Component {


    render(){
        const {name, pictureUrl: pic, popularity, id} = this.props;
        return(
            <Link to={`/contacts/${id}`}>
                <div className="card"> 
                    <h3>{name}</h3>
                    <img src={pic} />
                    <p>Popularity: {popularity}</p>
                    <button onClick = {()=>{this.props.delete(id)}}>Delete</button>
                </div>
            </Link>
        )
    }


}

export default ContactCard;