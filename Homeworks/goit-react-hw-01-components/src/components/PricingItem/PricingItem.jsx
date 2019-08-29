import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

function PricingItem({ item }) {
  const { icon, label, capacity, description, price } = item;
  let color;
  if (label === 'Bronze') {
    color = '#cd7f32';
  } else if (label === 'Silver') {
    color = '#c0c0c0';
  } else {
    color = '#ffd700';
  }
  return (
    <div className={styles.pricingitem}>
      <i className={styles.icon}>
        <img className={styles.image} alt="foto" src={icon} />
      </i>
      <h2 className={styles.label} style={{ color }}>
        {label}
      </h2>
      <p className={styles.capacity}>{capacity} Storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>&#36;{price}/MO</p>
      <button
        type="button"
        className={styles.button}
        style={{
          backgroundColor: color,
        }}
      >
        Get Started
      </button>
    </div>
  );
}

PricingItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default PricingItem;
