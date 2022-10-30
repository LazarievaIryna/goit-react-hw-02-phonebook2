import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Filter } from '../components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    const newContact = { name, number, id: nanoid() };
    this.reset();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    console.log(this.state);

    const { name, number, filter } = this.state;
    // const { contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter value={filter} onChange={this.changeFilter} />
        <ul>
          {visibleContacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}:{number}
              <button type="button">delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
