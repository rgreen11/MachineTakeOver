import React from 'react';
import axios from 'axios';



class Expression extends React.Component {
  constructor() {
    super()
    this.state = {
      exp: '',
    };
  }


  componentDidMount() {
    const random = Math.floor(Math.random() * 5);
    axios.get(`https://newton.now.sh/simplify/${random}^${random}+${random}(${random})`)
      .then((data) => {
        let result = data.data;
        this.setState({ exp: result });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { exp } = this.state;
    return (
      <div className={`border tempting-azure-gradient btn`} >
        <h4>I have a {exp.operation}</h4>
        <h4>problem {exp.expression}</h4>
        <h4>my solution is </h4>
        <h4>{exp.result}</h4>
      </div>
    );
  };
}

export default Expression;