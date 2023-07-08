import PropTypes from 'prop-types'; // ES6
import TransactionItem from './TransactionItem';
import css from 'components/TransactionHistory/TransactionHistory.module.css';
import { type } from '@testing-library/user-event/dist/type';

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
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <TransactionItem
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
