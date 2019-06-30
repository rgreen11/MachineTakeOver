import React from 'react';
import '../style/BotCard.css';


const SingleBot = ({robotName, toggleWeather})=>{

    return (
        <div className={`border tempting-azure-gradient btn `} onClick={toggleWeather}>
            <img src={`https://robohash.org/${robotName}`} className="img-fluid" alt="Responsive" />
            <div className='container nameHolder'>
                <h4 className="name">I'm {robotName} Bot</h4>
                <p>Click me!</p>
            </div>
        </div>
    )
}

const MultipleBots = ({robotName, handleBotClicked})=>{
    console.log(robotName)
        return (
            <div className={`border tempting-azure-gradient btn `} >
                <img src={`https://robohash.org/${robotName}/?size=100x100`} className="img-fluid" alt="Responsive" onClick={()=>{handleBotClicked(robotName)}}/>
                <div className='container nameHolder'>
                    <h5 className="name">I'm {robotName}Bot</h5>
                </div>
            </div>
        )
    }

export {SingleBot, MultipleBots}