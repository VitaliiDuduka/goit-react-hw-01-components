import { FriendListItem } from './FriendsListItem';
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(item => (
      <FriendListItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
