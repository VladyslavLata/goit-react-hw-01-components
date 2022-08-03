import PropTypes from 'prop-types';

export function FriendListItem({friend: {  avatar, name, isOnline }}) {
  return (
    <li>
      <span className={`status ${isOnline}`}></span>
      <img src={avatar} alt="" width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired})
  
}
