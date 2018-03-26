import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';


export default function PersonItem({ name, favoriteFruit }) {
  return (
    <li className={styles.container}>
      <p className={styles.title}>{name}</p>
      <p className={styles.fruit}>{favoriteFruit}</p>
    </li>
  );
}

PersonItem.propTypes = {
  name: PropTypes.string.isRequired,
  favoriteFruit: PropTypes.string.isRequired,
};
