import PropTypes from 'prop-types';

export function ProfileStats({ stat, amount }) {
  return (
    <>
      <span>{stat}</span>
      <span>{amount}</span>
    </>
  );
}

ProfileStats.propTypes = {
  stat: PropTypes.string.isRequired
}