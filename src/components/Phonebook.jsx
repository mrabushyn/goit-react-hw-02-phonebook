import React, { Component } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class Phonebook extends Component {
  state = {
    contacts: [
      { idd: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { idd: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { idd: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { idd: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleChange = evt => {
    //
    const { name, number, value } = evt.currentTarget;
    this.setState({ name: evt.currentTarget.value });

    console.log(name);
    console.log(number);
    console.log(value);
    console.log(this.state.name);
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
    this.state.contacts.map(contact => {
      this.setState({ contacts: [{ name }] });

      console.log(contact);
    });
console.log(this.state);
    // this.addContact();
    // form.reset();
  };

  // addContact = () => {
  //   const { contacts, name, number } = this.state;
  //   contacts.push({ name, number });
  // };
  loginInputId = nanoid();

  render() {
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
        <ul>
          {this.state.contacts.map(contact => (
            <li key={(contact.id = nanoid())}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
