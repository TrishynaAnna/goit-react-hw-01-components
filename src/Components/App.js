import React from "react";
import FriendList from "./FriendList/FriendList";
import SocialProfile from './socialProfile/SocialProfile';
import Statistics from './statistics/Statistics'
import friends from'./FriendList/friends.json';
import user from './socialProfile/user.json';
import statisticalData from './statistics/statistical-data.json';
import transactions from './transaction-history/transactions.json';
import TransactionHistory from './transaction-history/TransactionHistory'

const App = () => (
<>

        <FriendList friends={friends} />
        <SocialProfile user={user} />
        <Statistics title="Upload stats" stats={statisticalData} />
        <TransactionHistory items={transactions}/>
</>

);

export default App;
