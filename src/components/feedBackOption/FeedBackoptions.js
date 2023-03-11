import { FeedbackWrap, FeedbackBtn } from './FeedBackOption.styled';
import PropTypes from 'prop-types';

const options = ['good', 'neutral', 'bad'];

export const FeedBackOptions = ({ onClick }) => {
  return (
    <FeedbackWrap>
      {options.map(option => {
        return (
          <FeedbackBtn
            type="button"
            onClick={() => onClick(option)}
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
  onClick: PropTypes.func.isRequired,
};
