import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Avatar,OnlineIndicator,Name } from './FriendListItem.styled';

export function FriendListItem({friend: { id, avatar, name, isOnline }}) {
  return (
    <Box as="li" display= "flex" alignItems="center" gridGap={4} bg="bgWhite"  p = {4} boxShadow= "0px 5px 16px 1px rgba(0, 0, 0, 0.46)"  key={id}>
      <OnlineIndicator data={`${isOnline}`}></OnlineIndicator>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Box>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired})
  
}
