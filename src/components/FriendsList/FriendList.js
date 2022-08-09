import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendsListItem/FriendListItem";
import { Box } from "components/Box/Box";

export function FriendList({friends}) {
  return <Box as="ul" display="flex" flexDirection="column" gridGap ={4} bg="bgGray" width= "300px" p={4} >{friends.map(friend => <FriendListItem friend={friend} key={friend.id} />)}</Box>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}