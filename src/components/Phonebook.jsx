import React, { Component } from 'react';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
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

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.setState({ contacts: [...this.state.contacts, { name, number }] });
    evt.currentTarget.reset();
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  loginInputId = nanoid();

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase()
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <div className={css.formContainer}>
          <form
            action=""
            className={css.formField}
            onSubmit={this.handleSubmit}
          >
            <label htmlFor={this.loginInputId} className={css.labelField}>
              Name
            </label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.loginInputId}
              className={css.inputField}
              onChange={this.handleChange}
            />

            <label htmlFor={this.loginInputId} className={css.labelField}>
              Number
            </label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.loginInputId}
              className={css.inputField}
              onChange={this.handleChange}
            />
            <button type="onChange" className={css.btnStyle}>
              Add contact
            </button>
          </form>
        </div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList value={filteredContacts} />
      </div>
    );
  }
}
