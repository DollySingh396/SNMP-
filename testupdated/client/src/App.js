import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import logo from './logo.svg';
import './App.css';
//import Demo from './components/demo';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      message: "Main Data"
    }
  }


  fromSideBarChild(params) {

    console.log('fromSideBarChild', params);
    this.setState({
      message: params
    })
  }


  state = {
    response: '',
    responseToPost: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log('response return ', res);
       // if (response.status !== 200) throw Error(body.message);
        console.log("***********************", res);
        this.setState({ message: res })
      })
      .catch(err => console.log(err));
  }
  callApi = async () => {
    console.log('call api')
    const response = await fetch('/snmp/cm');
    // console.log('response ', response.status)
     const body = await response.text();
    // if (response.status !== 200) throw Error(body.message);
    // console.log("***********************", body.message);
    // console.log();
    // this.setState({ response: body });
    return body;

  };

/* handleCM = async e => {
    e.preventDefault();
    const response = await fetch('/snmp/cmtest', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.text();

    console.log(body);
    this.setState({ responseToPost: body });
    //this.setState({ responseToPost1: bod});
    console.log("****************");
  };
*/
  render() {
    return (

      <div className="App">

        <Header />

        <Sidebar callback={this.fromSideBarChild.bind(this)} />
        <Main message={this.state.message} />
        {/*  <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>{this.state.response}</p>
        <form onCM={this.handleCM}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input


            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            value={this.state.oid}
            onChange={e => this.setState({ oid: e.target.value })}
          />
          <button type="submit">Submit</button> 
        </form>
        <p>{this.state.responseToPost}</p>
        */}
<p>{this.state.response}</p>
      </div>
    );
  }
}




export default App;
