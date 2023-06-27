import user from '../user.json';
import Profile from './Profile';
const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
};
