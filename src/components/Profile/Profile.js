import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { UserPhoto, UserName, UserInfo, StatsItem } from './Profile.steled';

export function Profile({ userName, tag, location, avatar, stats: {followers, views, likes} }) {
  return (
    <Box width="280px" display = "inline-block" borderRadius ="md" overflow="hidden" boxShadow=" 0px 0px 37px 7px rgba(34, 60, 80, 0.2)" >
      <Box py = {5} px ={4} textAlign = "center" bg="bgWhite">
        <UserPhoto src={avatar} alt={userName} width = "100px" height = "100px" />
        <UserName>{userName}</UserName>
        <UserInfo>{`@${tag}`}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Box>
      <Box display = "flex"   bg="bgGray" borderTop = "normal" borderTopColor = "gray" as = "ul">
        <StatsItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatsItem>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
}