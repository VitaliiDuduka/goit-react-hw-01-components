import { getRandomHexColor } from './GetRandomColor';
import { Label, Percentage, StatsUnit } from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatisticsUnit = ({ statistics }) => {
  return statistics.map(unit => {
    return (
      <StatsUnit key={unit.id} className="item" data-bc={getRandomHexColor()}>
        <Label className="label">{unit.label}</Label>
        <Percentage className="percentage">{unit.percentage}%</Percentage>
      </StatsUnit>
    );
  });
};

StatisticsUnit.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
