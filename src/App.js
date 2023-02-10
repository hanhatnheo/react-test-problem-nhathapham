import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "click me"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  //handler goes here
  handleClick = (msg) => {
    if(this.state.msg === "click me") {
      this.setState({msg: "thanks"});
    } else {
      this.setState({msg: "click me"});
    }
    
  }

  render() {
    const { msg } = this.state;
    let body = document.body;
    body.style.background = '#23395d';
    return (
      <div style={{textAlign: "center"}}>
        <p style={{fontSize: '2rem'}}>
        <font color="white">
        <span style={{fontWeight: 'bold'}}>
          Greetings!
        </span>
        </font>  
        </p>
        <button style={{fontFamily:'Roboto', width: "100px", height: "30px", fontSize: 16}} 
                onClick={this.handleClick}>
          {msg}
        </button>
      </div>
    );
  }
}
