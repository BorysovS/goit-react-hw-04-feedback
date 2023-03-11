import { StatisList, ListCount } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisList>
      <li>
        Good:
        <ListCount>{good}</ListCount>
      </li>
      <li>
        Neutral:
        <ListCount>{neutral}</ListCount>
      </li>
      <li>
        Bad:
        <ListCount>{bad}</ListCount>
      </li>
      <li>
        Total:
        <ListCount>{total}</ListCount>
      </li>
      <li>
        Positive feedback:
        <ListCount>{positivePercentage}%</ListCount>
      </li>
    </StatisList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
