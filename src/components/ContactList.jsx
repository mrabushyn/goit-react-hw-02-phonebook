import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';

export class ContactList extends Component {
  deleteContact = e => {
    e.preventDefault();
    // this.props.value.filter(contact => console.log(e.target.key));

    this.props.onClick(e.target.id);
    console.log(e.currentTarget.id);
    console.log(this.props.value.contact.id);
  };



  render() {

    return (
      <ul>
        {this.props.value.map(contact => (
          <li key={(contact.id = nanoid())}>
            {contact.name}: {contact.number}
            <button
              id={(contact.id = nanoid())}
              type="onClick"
              onClick={this.deleteContact}
              className={css.delBtnStyle}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
