import PropTypes from 'prop-types';

export function TransactionHistory({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string).isRequired
  ).isRequired,
};

// TransactionHistory.propTypes = {
//   transactions: PropTypes.arrayOf(PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired
//   })).isRequired
//   }
