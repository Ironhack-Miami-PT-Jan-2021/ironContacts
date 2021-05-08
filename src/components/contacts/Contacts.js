import React from 'react';
import data from '../../contacts.json';
import ContactCard from '../contactCard/ContactCard'
import './Contacts.css'

class Contacts extends React.Component {


    render(){
        return(
            <>
                <button onClick={this.props.addRando} >Add</button>
                <button onClick={()=>{this.props.sort('name')}} >Sort By Name</button>
                <button onClick={()=>{this.props.sort('popularity')}} >Sort By Popularity</button>


                <div className="container">
                    {this.props.contacts.map(contact => {  
                        return <ContactCard 
                        {...contact} 
                        key={contact.id} 
                        delete={this.props.removeContact} />
                    })}     
                </div>
            </>
        )
    }
}


export default Contacts;