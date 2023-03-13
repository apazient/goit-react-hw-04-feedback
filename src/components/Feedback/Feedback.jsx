import style from './Feedback.module.css';
const Feedback = ({ options, onLeaveFeedback }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
export default Feedback;
