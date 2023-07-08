import PropTypes from 'prop-types'; // ES6
import FriendListItem from './friendListItem';
import css from 'components/friends/frineds.module.css';

function FriendsList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css[`friend-list`]}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={css['friend-list-item']}>
            {<FriendListItem avatar={avatar} name={name} status={isOnline} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
