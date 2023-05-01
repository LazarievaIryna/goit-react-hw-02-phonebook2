import React, { Component } from 'react';
// import { nanoid } from 'nanoid'
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
 constructor(){
  super();
  this.state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter: '',
  };
 }

  addNewContact = ({ name, number, id }) => {
    const { contacts } = this.state;
    const newContact = { name, number, id };

    const checkName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() );
    const checkNumber = contacts.find(contact => contact.number === number )
    if(checkName){
      alert(`${name} is already in contacts.`)
    }
    else if(checkNumber){
      alert(`${number} is already in contacts.`)
    }
    else{
      this.setState(({ contacts }) => ({
               contacts: [...contacts, newContact],
             }))
    }

    // contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() )
    //   ? alert(`${name} is already in contacts.`) 
    //   : this.setState(({ contacts }) => ({
    //       contacts: [...contacts, newContact],
    //     }));

  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  deleteBtn = nanoid => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nanoid),
    }));
    console.log(nanoid);
  };
  render() {
    // console.log(this.state);

    const { filter } = this.state;
    // const { contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
<Container>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.addNewContact} />
  <h2>Contacts</h2>
  <p>Find contacts by name</p>

  <Filter value={filter} onChange={this.changeFilter} />
  <ContactList
    contactList={visibleContacts}
    onDeleteBtn={this.deleteBtn}
  />
</Container>
    );
  }
}
export default App;
