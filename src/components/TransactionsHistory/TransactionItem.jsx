import PropTypes from 'prop-types';
import { TableRow, TypeCell } from './TransactionHistory.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TypeCell>{type}</TypeCell>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
