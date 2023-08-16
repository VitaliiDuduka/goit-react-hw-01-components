import { StatisticsUnit } from './StatisticUnit';
import { Container, StatsContainer, StatsTitle } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Container className="statistics">
      {title && (
        <StatsTitle className="title">{title.toUpperCase()}</StatsTitle>
      )}
      <StatsContainer className="stat-list">
        <StatisticsUnit statistics={stats} />
      </StatsContainer>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
