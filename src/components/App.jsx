import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle'
import { Section } from './section/Section';
import { Layout } from './Layout.styled';
import { FeedBackOptions } from './feedBackOption/FeedBackoptions'
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = evt => { 
    console.log(evt);
    const { name } = evt.target;
    this.setState(pervState => { 
      return { [name]: pervState[name] += 1 };
    })
  }

  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositivePercentage = () => { 
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }
  
  render() { 
    const { good, neutral, bad } = this.state
    const countTotal = this.countTotalFeedback();
    const percenatge = this.countPositivePercentage();
    return (
      <Layout>
        <Section title="Please leave your feedback here">
        <FeedBackOptions options={Object.keys(this.state)} onClick={this.onLeaveFeedback} />
        {countTotal > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotal} positivePercentage={percenatge} />) : 
          (<Notification message="There is no feedback" />)
        }
          <GlobalStyle />
        </Section>
        </Layout>
    )
  }
}
