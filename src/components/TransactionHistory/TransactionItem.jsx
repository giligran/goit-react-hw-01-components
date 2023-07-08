import css from 'components/TransactionHistory/TransactionHistory.module.css';

function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

export default TransactionItem;
