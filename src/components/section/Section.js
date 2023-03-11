import PropTypes from 'prop-types';
import { SectionFeedBack } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionFeedBack>
      <h1>{title}</h1>
      {children}
    </SectionFeedBack>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
