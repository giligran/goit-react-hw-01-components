import PropTypes from 'prop-types'; // ES6
import { GrStatusGoodSmall } from 'react-icons/gr';
import { ListElement } from './Friends.styled';

function FriendListItem({ avatar, status, name }) {
  return (
    <ListElement>
      <span className="status">
        <GrStatusGoodSmall color={status ? 'red' : 'green'} />
      </span>
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
