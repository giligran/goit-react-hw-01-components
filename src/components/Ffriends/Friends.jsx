import PropTypes from 'prop-types'; // ES6
import FriendListItem from './FriendListItem';
import { Container, List } from './Friends.styled';

function FriendsList({ friends }) {
  return (
    <Container>
      <List>
        {friends.map(({ id, avatar, isOnline, name }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            status={isOnline}
            name={name}
          />
        ))}
      </List>
    </Container>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendsList;
