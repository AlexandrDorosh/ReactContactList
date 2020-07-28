import React from "react";
import "./ContactList.css";

//Components
import ContactItem from "./ContactListItem/ContactItem";

const ContactList = ({ 
    List, 
    onStarChange, 
    onDeleteContact, 
    onEditContact 
}) => {

    const item = List.map(item => {
        return (
        <ContactItem 
        key={item.id}
        id={item.id}
        name={item.name}
        address={item.address}
        phone={item.phone}
        avatar={item.avatar}
        gender={item.gender}
        email={item.email}
        star={item.star}
        onStarChange={() => onStarChange(item.id)} 
        onDeleteContact={() => onDeleteContact(item.id)}
        onEditContact={() => onEditContact(item.id)}
        />
        )
    })

    return (
        <ul className="list-group pull-down" id="contact-list">
            {item.length !== 0 ? item : <h2>ContactList is empty</h2>}
        </ul>
    );
};

export default ContactList;