import PropTypes from 'prop-types'; // ES6
import { ListElement, StatusIcon, Wrap } from './Friends.styled';

function FriendListItem({ avatar, status, name }) {
  return (
    <ListElement>
      <Wrap status={status}></Wrap>
      <StatusIcon data-status={status} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ListElement>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
