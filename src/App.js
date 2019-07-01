import React from 'react';
//------- Component 
import SingleBot from './components/SingleBotCard';
import MultipleBots from './components/MultipleBotCards';
import Expression from './components/ExpressionCard';
//------  CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.min.css';
import './style/App.css';
import './style/BotCard.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      input: '',
      robotName: 'Rich!',
      showExpression: false,
      showMultipleBots: false,
    };
  }
  componentDidMount() {
    const randomRobots = [];
    for (let i = 0; i < 50; i++) {
      randomRobots.push(Math.floor(Math.random() * 100));
    }
    this.setState({ robots: randomRobots });
  }

  handleText = (e) => {
    let input = e.target.value;
    this.setState({ input: input });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && this.state.input) {
      this.setState({ robotName: this.state.input, showMultipleBots: false });
    }
  }

  handleClick = () => {
    if (!this.state.input) {
      return;
    }
    this.setState({ robotName: this.state.input, showMultipleBots: false });
  }

  toggleExpression = () => {
    if (this.state.showExpression) {
      this.setState({ showExpression: false });
    } else {
      this.setState({ showExpression: true, showMultipleBots: false });
    }
  }

  toggleMultipleBots = () => {
    if (this.state.showMultipleBots) {

      this.setState({ showMultipleBots: false });
    } else {
      this.setState({ showMultipleBots: true, showExpression: false });
    }
  }

  handleBotClicked = (bot) => {
    if (bot) {
      this.setState({ robotName: bot, showMultipleBots: false });
    }
    return;
  }

  render() {
    const { robotName, showExpression, robots, showMultipleBots } = this.state;
    const singleBot = <div className={`${showExpression ? 'btnLeft ' : 'btnRight '}`}>
      <SingleBot robotName={robotName} showExpression={showExpression} toggleExpression={this.toggleExpression} />
    </div>;

    const multipleBots = <div className='container multiple'>
      {
        robots.map((e, i) => {
          return (
            <MultipleBots robotName={e} showExpression={showExpression} handleBotClicked={this.handleBotClicked} key={i} />
          )
        })
      }
    </div>;

    return (
      <div className='App'>
        <div className='heading'>
          <h1>MACHINE TAKEOVER</h1>
        </div>

        <div className='container'>
          <div className='handleTextInput row'>
            <div className='row float-md-right'>
              <button type='submit' className='btn btn-info blue-gradient button2' onClick={() => { this.toggleMultipleBots() }}>Multiple Bots</button>
            </div>

            <div className='row float-md-left'>
              <input type='text' className='form-control' placeholder='Generate Bot Enter text' onChange={(e) => { this.handleText(e) }} onKeyDown={(e) => { this.handleKeyDown(e) }} />
            </div>

            <div className='row float-md-left'>
              <button type='submit' className='btn btn-info blue-gradient button1' onClick={() => { this.handleClick() }}>Generate bot</button>
            </div>
          </div>
        </div>

        <div className='centerCardExp'>
          {showMultipleBots ? multipleBots : singleBot}
            {showExpression ? <Expression /> : ''}
        </div>

      </div>
    );
  };
}
export default App;
