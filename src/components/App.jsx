import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FriendsList } from './FriendsList/FriendsList';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionsHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
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
    </div>
  );
};
