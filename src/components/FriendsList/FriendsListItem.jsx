import css from './FriendsList.module.css';
import { clsx } from 'clsx';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        // className={
        //   isOnline
        //     ? `${css.status} ${css.isOnline}`
        //     : `${css.status} ${css.isOffline}`
        // }
        // className={clsx(
        //   css.status,
        //   isOnline && css.isOnline,
        //   !isOnline && css.isOffline
        // )}
        // className={clsx(css.status, {
        //   [css.isOnline]: isOnline,
        //   [css.isOffline]: !isOnline,
        // })}
        // isonline={isOnline.toString()}
        className={clsx(
          css.status,
          isOnline ? [css.isOnline] : [css.isOffline]
        )}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
