import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistory from './Transaction/Transaction';
import user from './Profile/userdetails.json';
import stats from './Stats/stats-details.json';
import items from './PricingItem/pricing-plan.json';
import transactions from './Transaction/transactions.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Stats stats={stats} />
      <PricingPlan items={items} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
