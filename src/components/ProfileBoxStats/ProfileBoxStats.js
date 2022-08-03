import PropTypes from 'prop-types';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';

export function ProfileBoxStats({ user: { stats } }) {
  return (
    <ul>
      <li >
        <ProfileStats stat="Followers" amount={stats.followers} />
      </li>
      <li >
        <ProfileStats stat="Views" amount={stats.views} />
      </li>
      <li >
        <ProfileStats stat="Likes" amount={stats.likes} />
      </li>
    </ul>
  );
}

ProfileBoxStats.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
