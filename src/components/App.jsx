import React from 'react';
import PropTypes from 'prop-types';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import { useReducer } from 'react';

export const App = () => {
  const initialState = {
    good: 0,
    bad: 0,
    neutral: 0,
  };
  const feadbackReducer = (state, action) => {
    switch (action.type) {
      case 'good':
        return {
          ...state,
          good: state.good + 1,
        };
      case 'bad':
        return {
          ...state,
          bad: state.bad + 1,
        };
      case 'neutral':
        return {
          ...state,
          neutral: state.neutral + 1,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(feadbackReducer, initialState);

  const handleClick = ({ target }) => {
    const { name } = target;
    switch (name) {
      case 'good':
        dispatch({ type: 'good' });
        break;
      case 'bad':
        dispatch({ type: 'bad' });
        break;
      case 'neutral':
        dispatch({ type: 'neutral' });
        break;
      default:
        return 'no button click';
    }
  };
  const { good, bad, neutral } = state;
  const countFeadback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedback = () => {
    return Math.round((good / (good + bad + neutral)) * 100) + '%';
  };
  return (
    <div
      style={{
        height: '100vh',
        margin: '0 auto',
        padding: '0 20px',
        display: 'block',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <Feedback
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={handleClick}
        ></Feedback>
      </Section>
      <Section title="Statistic">
        {countFeadback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countFeadback()}
            posPercentage={countPositiveFeedback()}
          />
        )}
      </Section>
    </div>
  );
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  // const handleClick = e => {
  //   console.log(e.target.name);
  //   const { name } = e.target;
  //   switch (name) {
  //     case 'good':
  //       setGood(good + 1);
  //       break;
  //     case 'bad':
  //       setBad(bad + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(neutral + 1);
  //       break;
  //     default:
  //       console.log('Name not found');
  //       return;
  //   }
  // };
  // const countTotalFeedback = () => {
  //   return bad + good + neutral;
  // };
  // const countPositiveFeedbackPercentage = () => {
  //   return Math.round((good / (good + bad + neutral)) * 100) + '%';
  // };
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       margin: '0 auto',
  //       padding: '0 20px',
  //       display: 'block',
  //       fontSize: 40,
  //       color: '#010101',
  //     }}
  //   >
  //     <Section title="Please leave feedback">
  //       <Feedback
  //         options={['good', 'neutral', 'bad']}
  //         onLeaveFeedback={handleClick}
  //       />
  //     </Section>
  //     <Section title="Statistic">
  //       {countTotalFeedback() === 0 ? (
  //         <Notification message="There is no feedback" />
  //       ) : (
  //         <Statistics
  //           good={good}
  //           neutral={neutral}
  //           bad={bad}
  //           total={countTotalFeedback()}
  //           positivePercentage={countPositiveFeedbackPercentage()}
  //         />
  //       )}
  //     </Section>
  //   </div>
  // );
};
App.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
