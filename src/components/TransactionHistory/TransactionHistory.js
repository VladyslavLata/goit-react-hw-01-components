import PropTypes from 'prop-types';
import { TableHeader,TableCell ,TableLine,Table} from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHeader>
        <tr>
          <TableCell>Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
        </tr>
      </TableHeader>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableLine key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableLine>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string).isRequired
  ).isRequired,
};

