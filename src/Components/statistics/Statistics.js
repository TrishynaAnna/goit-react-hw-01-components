import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import StatisticsList from "./statisticsList/StatisticsList";



const Statistics = ({ title, stats }) => {

    return (
        <section className={styles.statisticsSection}>
            <div className={styles.stats}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <StatisticsList list={stats}/>
            </div>
        </section>
    );
};

Statistics.propTypes = {
        title: PropTypes.string.isRequired,
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            }).isRequired,
        ).isRequired,
    };

export default Statistics;
