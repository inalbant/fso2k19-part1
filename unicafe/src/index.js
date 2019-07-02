import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.css'


const Statistics = ({ total, good, neutral, bad }) => {
  if (total === 0) {
    return (
      <p>No feedback given.</p>
    )
  }

  const calcPositive = () => (good / total) * 100

  const calcAverage = () => (good - bad) / total

  return (
    <table>
      <tr><Statistic text="Neutral: " value={neutral} /></tr>
      <tr><Statistic text="Bad:     " value={bad} /></tr>
      <tr><Statistic text="Total:   " value={total} /></tr>
      <tr><Statistic text="Good:    " value={good} /></tr>
      <tr><Statistic text="Average: " value={calcAverage()} /></tr>
      <tr><Statistic text="Positive: " value={calcPositive() + '%'} /></tr>
    </table>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={goodClick} text="Good" />
      <Button handleClick={neutralClick} text="Neutral" />
      <Button handleClick={badClick} text="Bad" />
      <h1>Statistics</h1>
      <Statistics total={total} good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)