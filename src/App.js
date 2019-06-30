import React from 'react';
//------- Component 
import {SingleBot, MultipleBots} from './components/BotCard';
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
    }
  }
componentDidMount(){
  const randomRobots = [];
  for(let i = 0; i < 50; i ++){
    randomRobots.push(Math.floor(Math.random()*100))
  }
  this.setState({robots: randomRobots})
}

handleText=(e)=>{
    let input = e.target.value
    this.setState({input: input})
}

handleKeyDown=(e)=>{
    if (e.key === 'Enter' && this.state.input) {
      this.setState({robotName: this.state.input, showMultipleBots: false})
    }
}

handleClick=()=>{
  if(!this.state.input){
    return;
  }
  this.setState({robotName: this.state.input, showMultipleBots: false})
}

toggleWeather=()=>{
  if(this.state.showExpression === true){
    this.setState({showExpression:false})
  } else{
    this.setState({showExpression:true, showMultipleBots: false})
  }
}

toggleMultipleBots=()=>{
  if(this.state.showMultipleBots === true){
    
    this.setState({showMultipleBots:false})
  } else{
    this.setState({showMultipleBots:true, showExpression: false})
  }
}

handleBotClicked=(bot)=>{
  if(bot){
    this.setState({robotName: bot,showMultipleBots:false})
  }
  return;
}
 
render() {  
  const {robotName, showExpression, robots, showMultipleBots} =this.state
  const singleBot = <div className={`${showExpression === true ? 'btnLeft': 'btnRight'}`}>
                      <SingleBot robotName={robotName} showExpression={showExpression} toggleWeather={this.toggleWeather}/>
                    </div>;

  const multipleBots = <div className="carousel">
                        {
                        robots.map((e,i)=>{
                          return (
                              <MultipleBots robotName={e} showExpression={showExpression} handleBotClicked={this.handleBotClicked} key={i}/> 
                                )})
                        }
                        </div>
                        
console.log(robotName)
  return (
    <div className="App">
      <div className='heading'>
        <h1>Richard Green</h1>
      </div>
      <div>
        
        <div className='container'>
          <div className='handleTextInput row'>
            <div className='row float-md-right'>
              <button type="submit" className="btn btn-info blue-gradient button2" onClick={()=>{this.toggleMultipleBots()}}>Multiple Bots</button>
            </div>
            <div className='row float-md-left'>
              <input type="text" className="form-control" onChange={(e)=>{this.handleText(e)}} onKeyDown={(e)=>{this.handleKeyDown(e)}}/>
            </div>
            <div className='row float-md-left'>
              <button type="submit" className="btn btn-info blue-gradient button1" onClick={()=>{this.handleClick()}}>Generate bot</button>
            </div>
          </div>
        </div> 
      </div>
      
      <div className="container imageHolder">
        
        {
         showMultipleBots === true ? multipleBots : singleBot
        }
        
      </div>
      <div className="container center">
        {
          showExpression === true ? <Expression className='center'/> : ''
        } 
        </div>
    </div>
    );
  }
}
export default App;
