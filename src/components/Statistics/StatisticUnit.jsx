import { getRandomHexColor } from './GetRandomColor';
import { Label, Percentage, StatsUnit } from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatisticsUnit = ({ prop }) => {
  return prop.map(unit => {
    return (
      <StatsUnit key={unit.id} className="item" bc={getRandomHexColor()}>
        <Label className="label">{unit.label}</Label>
        <Percentage className="percentage">{unit.percentage}%</Percentage>
      </StatsUnit>
    );
  });
};

StatisticsUnit.propTypes = {
  prop: PropTypes.array.isRequired,
};
