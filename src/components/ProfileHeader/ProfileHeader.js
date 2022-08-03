import PropTypes from 'prop-types';

export function ProfileHeader({ user: { username, tag, location, avatar } }) {
  return (
    <div>
      <img src={avatar} alt={username} />
      <h2>{username}</h2>
      <p>{`@${tag}`}</p>
      <p>{location}</p>
    </div>
  );
}

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  })
}