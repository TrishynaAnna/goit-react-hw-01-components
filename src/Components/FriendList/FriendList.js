import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => {
    const allFriendItem = friends.map(friend =>(
       <FriendListItem key={friend.id} friend={friend}/>
    ));
    return <ul className={styles.friendList}>{allFriendItem}</ul>;

};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        }).isRequired,
    ).isRequired,
};
export default FriendList;
