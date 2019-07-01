import React from 'react';


const MultipleBots = ({ robotName, handleBotClicked }) => {
    return (
        <div className={`border tempting-azure-gradient btn`} >
            <img src={`https://robohash.org/${robotName}/?size=100x100`} className='img-fluid' alt='Responsive' onClick={() => { handleBotClicked(robotName) }} />
            <div className='container nameHolder'>
                <h5 className='name'>I'm {robotName}Bot</h5>
            </div>
        </div>
    );
}

export default MultipleBots;