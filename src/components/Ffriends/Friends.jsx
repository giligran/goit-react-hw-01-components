import PropTypes, { object } from 'prop-types'; // ES6
import css from './Friends.module.css';
import FriendListItem from './FriendListItem';
import { Container, List } from './Friends.styled';

function FriendsList({ friends }) {
  return (
    <Container>
      <List>
        {friends.map(item => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            status={item.isOnline}
            name={item.name}
          />
        ))}
      </List>
    </Container>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default FriendsList;
