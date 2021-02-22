import React from "react";
import PropTypes from 'prop-types';
import styles from "./FriendListItem.module.css"


const FriendListItem = ({friend}) => {
    const {avatar, name, isOnline} = friend;
    return (
        <li className={styles.item}>
            {isOnline ? (
                <span className={styles.trueStatus}/>) : (
                <span className={styles.falseStatus}/>
            )}
            <img className={styles.photo} src={avatar} alt="ava" width="48"/>
            <p className='name'> {name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })

};

export default FriendListItem;
