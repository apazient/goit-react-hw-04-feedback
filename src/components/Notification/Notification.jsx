import React from 'react';
import style from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={style.text}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
