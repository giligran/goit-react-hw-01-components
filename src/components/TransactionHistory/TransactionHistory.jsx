import TransactionItem from './TransactionItem';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css['transaction-history']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css['table-body']}>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
