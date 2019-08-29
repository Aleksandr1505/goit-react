import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingplan}>
    {items.map(item => (
      <li key={item.id} className={styles.item}>
        <PricingItem item={item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.string,
      capacity: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default PricingPlan;
