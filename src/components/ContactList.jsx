import React from "react";
import { nanoid } from 'nanoid';


export const ContactList = ({ value }) => (
  <ul>
    {value.map(contact => (
      <li key={(contact.id = nanoid())}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);