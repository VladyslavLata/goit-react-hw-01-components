import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendsListItem/FriendListItem";

export function FriendList({friends}) {
  return <ul>{friends.map(friend => <FriendListItem friend={friend} key={friend.id} />)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}