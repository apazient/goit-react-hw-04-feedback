import style from './Statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, posPercentage }) => {
  return (
    <ul className={style['statistic-list']}>
      <li className={style.item} key={1}>
        Good: {good}
      </li>
      <li className={style.item} key={2}>
        Neutral: {neutral}
      </li>
      <li className={style.item} key={3}>
        Bad: {bad}
      </li>
      <li className={style.item} key={4}>
        Total: {total}
      </li>
      <li className={style.item} key={5}>
        Positive Feedback: {posPercentage}
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.node,
  posPercentage: PropTypes.node,
};
export default Statistics;
