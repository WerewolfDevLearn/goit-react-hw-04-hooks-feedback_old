import useStates from './Hooks/useStates';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section';

import AppStyle from './App.module.css';

export default function App() {
  const [good, updateGood] = useStates(0);
  const [neutral, updateNeutral] = useStates(0);
  const [bad, updateBad] = useStates(0);

  // const upDateGood = () => {
  //   setGood(s => s + 1);
  // };
  // const upDateNeutral = () => {
  //   setNeutral(s => s + 1);
  // };
  // const upDateBad = () => {
  //   setBad(s => s + 1);
  // };
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const ratio = Math.round((good / total) * 100);
    return ratio;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <ul className={AppStyle.feedbackOptions}>
          <li className={AppStyle.feedbackOptionItem}>
            <button type="button" key="ButtonGood" onClick={updateGood}>
              Good
            </button>
          </li>
          <li className={AppStyle.feedbackOptionItem}>
            <button type="button" key="ButtonNeutral" onClick={updateNeutral}>
              Neutral
            </button>
          </li>
          <li className={AppStyle.feedbackOptionItem}>
            <button type="button" key="ButtonNeutral" onClick={updateBad}>
              Bad
            </button>
          </li>
        </ul>
      </Section>

      {total === 0 ? (
        <Notification massage={'No feedback given'} />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}
