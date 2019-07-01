import React from 'react';

const SingleBot = ({ robotName, toggleExpression }) => {

    return (
        <div className='container'>
            <div className={`border tempting-azure-gradient btn `} onClick={toggleExpression}>
                <img src={`https://robohash.org/${robotName}`} className='img-fluid' alt='Responsive' />
                <div className='container nameHolder'>
                    <h4 className='name'>I'm {robotName} Bot</h4>
                    <p>Click me!</p>
                </div>
            </div>
        </div>
    );
}

export default SingleBot;