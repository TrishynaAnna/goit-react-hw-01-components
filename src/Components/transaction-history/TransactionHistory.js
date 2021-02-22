import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionItem from './transactionItem/TransactionItem';


const TransactionHistory = ({items}) => {
    const allTransactionItem = items.map(item => (
        <TransactionItem key={item.id} item={item}/>
    ));


    return (
        <section className={styles.transactionSection}>
        <table className={styles.TransactionHistory}>
            <thead className={styles.tableHeader}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>{allTransactionItem}</tbody>
        </table>
        </section>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }).isRequired,
    ).isRequired,
};

export default TransactionHistory;
