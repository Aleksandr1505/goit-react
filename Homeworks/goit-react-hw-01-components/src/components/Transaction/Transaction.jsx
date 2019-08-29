import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionhist}>
    <thead>
      <tr className={styles.names}>
        <th className={styles.information}>Type</th>
        <th className={styles.information}>Amount</th>
        <th className={styles.information}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={styles.transactions}>
          <td className={styles.value}>{transaction.type}</td>
          <td className={styles.value}>{transaction.amount}</td>
          <td className={styles.value}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
