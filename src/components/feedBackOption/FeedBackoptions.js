import { FeedbackWrap, FeedbackBtn } from './FeedBackOption.styled';
import PropTypes from 'prop-types';

export const FeedBackOptions = ({ options, onClick }) => {
  return (
    <FeedbackWrap>
      {options.map(option => {
        return (
          <FeedbackBtn
            type="button"
            onClick={onClick}
            key={option}
            name={option}
          >
            {option}
          </FeedbackBtn>
        );
      })}
    </FeedbackWrap>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.shape.isRequired,
  onClick: PropTypes.func.isRequired,
};
