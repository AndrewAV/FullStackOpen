import { useState } from 'react'

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return <h3>No feedback given</h3>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good}></StatisticLine >
        <StatisticLine text="Neutral" value={neutral}></StatisticLine >
        <StatisticLine text="Bad" value={bad}></StatisticLine >
        <StatisticLine text="All" value={all}></StatisticLine >
        <StatisticLine text="Average" value={(good - bad) / all}></StatisticLine >
        <StatisticLine text="Positive" value={good / all * 100 + " %"}></StatisticLine >
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"></Button>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"></Button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} ></Statistics>
    </div>
  )
}

export default App