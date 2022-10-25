import React from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';

export const ContactList = ({ value, onDeleteContact }) => (
  <ul>
    {value.map(contact => (
      <li key={(contact.id = nanoid())} className={css.contactList}>
        {contact.name}: {contact.number}
        <button
          type="onClick"
          onClick={() => {
            onDeleteContact(contact.id);
          }}
          className={css.delBtnStyle}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
