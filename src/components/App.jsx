import user from 'user.json';
import Profile from 'components/profile/Profile';
import Statistics from './statistics/Statistics';
import data from 'data.json';
import FriendsList from 'components/friends/frineds';
import friends from 'friends.json';
import transactions from 'transactions.json';
import { Table } from 'antd';
import tableApp from './TransactionHistory/Table';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Table columns={tableApp.columns} dataSource={transactions} rowKey="id" />
      <TransactionHistory items={transactions} />
    </>
  );
};
