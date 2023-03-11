import { NotiMessadge } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <NotiMessadge>{message}</NotiMessadge>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
