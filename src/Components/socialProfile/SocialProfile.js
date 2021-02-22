import React from "react";
import PropTypes from "prop-types";
import styles from "./SocialProfile.module.css";


const SocialProfile = ({user: {name, tag, location, avatar, stats}}) => {
    return(
        <section className={styles.socialProfileSection}>
            <div className={styles.socialProfile}>
                <div className={styles.description}>
                    <img src={avatar} alt="ava" className={styles.avatar}/>
                    <p className={styles.textName}>{name}</p>
                    <p className={styles.text}>@{tag}</p>
                    <p className={styles.text}>{location}</p>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <span className={styles.textSpan}>Followers</span>
                        <span className={styles.textSpan}>{stats.followers}</span>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.textSpan}>Views</span>
                        <span className={styles.textSpan}>{stats.views}</span>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.textSpan}>Likes</span>
                        <span className={styles.textSpan}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

SocialProfile.propTypes = {
    user:  PropTypes.shape({
        name: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,

        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        }),
    }),
};



export default SocialProfile;
