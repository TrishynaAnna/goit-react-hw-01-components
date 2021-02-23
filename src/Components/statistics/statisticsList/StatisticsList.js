import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';

function getColors() {
    const firstColor = Math.round(Math.random() * 255);
    const secondColor = Math.round(Math.random() * 255);
    const thirdColor = Math.round(Math.random() * 255);
    const randomColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;

    return randomColor;
}

const StatisticsList = ({list}) => {
    return (
        <ul className={styles.list}>
            {list.map(item => (
                <li
                    key={item.id}
                    className={styles.item}
                    style={{backgroundColor: `rgb(${getColors()})`}}
                >
                    <span className={styles.span}>{item.label}</span>
                    <span className={styles.span}>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    )
};

StatisticsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default StatisticsList;
