import { TableHead, TransTable } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <TransTable className="transaction-history">
    <TableHead>
      <tr>
        <th>TYPE</th>
        <th>AMOUNT</th>
        <th>CURRENCY</th>
      </tr>
    </TableHead>

    <tbody>
      {items.map(item => (
        <TransactionItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  </TransTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
