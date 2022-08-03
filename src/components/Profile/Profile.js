
import { ProfileHeader } from 'components/ProfileHeader/ProfileHeader';
import { ProfileBoxStats } from 'components/ProfileBoxStats/ProfileBoxStats';


export function Profile({dataUser}) {
  return (
    <div>
      <ProfileHeader user={dataUser} />
      <ProfileBoxStats user={dataUser} />
    </div>
  );
}
