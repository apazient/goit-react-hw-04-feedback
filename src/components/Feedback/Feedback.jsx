import style from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={style['thumb-btn']}>
      <button
        className={style.btn}
        type="button"
        onClick={onLeaveFeedback}
        name={options[0]}
      >
        {capitalizeFirstLetter(options[0])}
      </button>
      <button
        className={style.btn}
        type="button"
        onClick={onLeaveFeedback}
        name={options[1]}
      >
        {capitalizeFirstLetter(options[1])}
      </button>
      <button
        className={style.btn}
        type="button"
        onClick={onLeaveFeedback}
        name={options[2]}
      >
        {capitalizeFirstLetter(options[2])}
      </button>
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default Feedback;
