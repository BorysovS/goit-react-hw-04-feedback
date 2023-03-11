import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle'
import { Section } from './section/Section';
import { Layout } from './Layout.styled';
import { FeedBackOptions } from './feedBackOption/FeedBackoptions'
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';




export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const hadleLeaveFeedback = (type) => { 
    switch (type) { 
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      
      default: 
        throw new Error()
    }
  }


  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositivePercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100)
  }
  
  return (
    <Layout>
      <Section title="Please leave your feedback here">
        <FeedBackOptions onClick={hadleLeaveFeedback} />
        {countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositivePercentage()} />) :
          (<Notification message="There is no feedback" />)
        }
        <GlobalStyle />
      </Section>
    </Layout>
  )
}

