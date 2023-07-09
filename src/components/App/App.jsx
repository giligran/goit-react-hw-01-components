import { Table } from 'antd';
import { data, friends, transactions, user } from 'utils/importsData';
import Profile from 'components/Profile/Profile.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import FriendsList from 'components/Ffriends/Friends.jsx';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.jsx';
import tableApp from 'components/TransactionHistory/Table.js';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      <Table columns={tableApp.columns} dataSource={transactions} rowKey="id" />
    </>
  );
};
