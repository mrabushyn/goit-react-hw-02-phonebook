import React, { Component } from 'react';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const normalizedSameName = name.toLowerCase();
    const findSameEl = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedSameName
    );
    findSameEl
      ? alert(`${name} is already in contacts`)
      : this.setState({ contacts: [...this.state.contacts, { name, number }] });
    console.log(this.state.contacts);
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContactPhonebook = data => {

    const arr = [...this.state.contacts];
    console.log(arr);
    console.log(data);
    let idx = arr.findIndex(contact => contact.id  === data);
console.log(idx);
    arr.splice(idx, 0);
    // 

    this.setState({ contacts: [...arr] });

    // console.log(data);
    // console.log(idx);
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          value={filteredContacts}
          stateValue={this.state.contacts}
          onClick={this.deleteContactPhonebook}
        />
      </div>
    );
  }
}
