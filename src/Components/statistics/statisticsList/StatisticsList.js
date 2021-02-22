import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';


const StatisticsList = ({ list }) => {



    const getColors = () =>
    {
        let firstColor = Math.round(Math.random() * 255);
        firstColor = firstColor < 50 ? firstColor + 50 : firstColor;

        let secondColor = Math.round(Math.random() * 255);
        secondColor = secondColor < 50 ? secondColor + 50 : secondColor;

        let thirdColor = Math.round(Math.random() * 255);
        thirdColor = thirdColor < 50 ? thirdColor + 50 : thirdColor;

        return `${firstColor}, ${secondColor}, ${thirdColor}`;
    };

    return(
        <ul className={styles.list}>
         {list.map(item => (
                <li
                    key={item.id}
                    className={styles.item}
                    style={{ background: `rgb(${getColors()})` }}
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
