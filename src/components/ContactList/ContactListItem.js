import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { contactsOperations } from "../../redux/contacts";

import styles from "./ContactList.module.css";

const ContactListItem = ({ id, name, number, theme }) => {
  const itemClass = theme === "light" ? styles.item_light : styles.item_dark;
  const initBtnClasses = [styles.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, styles.button_light]
      : [...initBtnClasses, styles.button_dark];

  const dispatch = useDispatch();

  return (
    <li className={itemClass}>
      {name}: {number}
      <button
        className={btnClasses.join(" ")}
        type="button"
        onClick={() => contactsOperations.removeContact(id, dispatch)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

export default ContactListItem;
