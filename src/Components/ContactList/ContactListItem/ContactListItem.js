import propTypes from 'prop-types';

import s from './ContactListItem.module.css';

const ContactListItem = ({ contact, number, onDeleteContact }) => {
  return (
    <li className={s.contactListItem}>
      <p className={s.contact}>
        {contact}: {number}
      </p>
      <button onClick={onDeleteContact} className={s.contactListButton}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: propTypes.string.isRequired,
  number: propTypes.number.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactListItem;
