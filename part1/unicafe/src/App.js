import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="UNICAFE" />
      <Header title="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} value="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} value="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} value="Bad" />
      <Header title="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
