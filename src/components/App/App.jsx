import { Table } from 'antd';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { data, friends, transactions, user } from 'utils/importsData';
import Statistics from 'components/Statistics/Statistics';
import FriendsList from '../Ffriends/Friends';
import tableApp from '../TransactionHistory/Table';
import Profile from '../Profile/Profile';

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
      <Table columns={tableApp.columns} dataSource={transactions} rowKey="id" />
      <TransactionHistory items={transactions} />
    </>
  );
};
