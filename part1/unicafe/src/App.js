import React, { useState } from 'react';
import './App.css';

const Button = ({name, handler}) => {
  return (
  <button onClick={ () => handler(name) }>{name}</button>
  )
}

const StatisticLine = ({text, amount }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{amount}</td>
    </tr> 
  )
}

const Statistics = ({feedbackData}) => {
  if (feedbackData.all.amount <= 0) {
    return (<p>No feedback given</p>)
  }
  else {
    return (
      <table>
        <tbody>
          {Object.keys(feedbackData).map((key, index) => {
            return <StatisticLine key={index} text={feedbackData[key].text} amount={feedbackData[key].amount}/>
          })}
        </tbody>
      </table>
      
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (name) => {
    if (name === 'good') {
      setGood(good+1)
    } else if (name === 'neutral') {
      setNeutral(neutral+1)
    } else if (name === 'bad') {
      setBad(bad+1)
    } 
  }

  const totalVotes = () => good + neutral + bad;
  const averageScore = () => Math.round(100 * (good - bad) / totalVotes()) / 100;
  const possitiveFeedback = () => Math.round(100 * good / totalVotes()) / 100;

  const feedbackData = {
    good: {
      text: 'good',
      amount: good
    },
    neutral: {
      text: 'neutral',
      amount: neutral
    },
    bad: {
      text: 'bad',
      amount: bad
    },
    all: {
      text: 'all',
      amount: totalVotes()
    },
    average: {
      text: 'average',
      amount: averageScore(),
    },
    positive: {
      text: 'positive',
      amount: possitiveFeedback()
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name={'good'} handler={handleFeedback} />
      <Button name={'neutral'} handler={handleFeedback} />
      <Button name={'bad'} handler={handleFeedback} />
      <h2>Statistics</h2>
      <Statistics feedbackData={feedbackData} />
    </div>
  )
}

export default App;
