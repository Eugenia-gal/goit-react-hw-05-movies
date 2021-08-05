import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onClick }) {
  return (
    <button type="button" className={s.btn} onClick={onClick}>
      Go Back
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
