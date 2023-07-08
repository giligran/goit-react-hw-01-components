import user from 'user.json';
import Profile from 'components/Profile';
export const App = () => {
  return <Profile props={user} />;
};
