import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

const TransactionItem = ({ item }) => {
    const { type, amount, currency } = item;
    let firstColumn = type.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    return (
        <tr className={styles.line}>
            <td>{firstColumn}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

TransactionItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }).isRequired,
};

export default TransactionItem;
