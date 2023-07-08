import PropTypes from 'prop-types'; // ES6
import { GrStatusGoodSmall } from 'react-icons/gr';
import css from 'components/friends/frineds.module.css';

function statusColor(status) {
  return status ? 'green' : 'red';
}

function FriendListItem({ avatar, status, name }) {
  return (
    <>
      <GrStatusGoodSmall color={statusColor(status)} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
