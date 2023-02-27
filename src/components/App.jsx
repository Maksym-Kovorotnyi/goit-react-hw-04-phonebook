import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import {Filter} from './Filter/Filter'



export const App = ()=> {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));
  const [filter, setFilter] = useState('');
  

  // useEffect(() => {
  // JSON.parse(localStorage.getItem('contacts')) 
  //     console.log(contacts);
      
    
  
  // }, [])
  
  useEffect(() => {
     localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
  const handleSetContact = ({ name, number }) => {
    const checkName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (checkName) {
            return alert(`${name} is already in contacts.`);
    }
    setContacts(prev => [...prev, { name: name, number: number, id: nanoid() },] )
    
  }
  
   const filteredContacts = () => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    }
  const handleChangedFilter = (e) => {
      
      setFilter(e.currentTarget.value)
  };
  
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
      
      };
  

    
      return (<>
        <h1>Phonebook</h1>
        <Form
        onSubmit={handleSetContact}
        />
        <Filter
          onFilter={handleChangedFilter}
        />
        <h2>Contacts</h2>
        <ContactsList
            contacts={filteredContacts()}
            onDeleteContact={deleteContact}
        />
      </>)
    
  }

