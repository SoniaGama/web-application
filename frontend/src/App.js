import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
// import axios from 'axios';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
	
	constructor(props){
		super(props);
		this.state = {
				users:[]
		};
	}
	
	/*
	 componentDidMount() { axios.get('/contacts') .then(res => {
	 this.setState({ contacts: res.data }); console.log(this.state.contacts);
	 }); }
	 */
	
	componentDidMount(){
		fetch('/users')
		.then(reponse => {
			this.setState({users: response});
			Console.log(this.setstate.users);
		})
		.catch(error => console.log(error));
	}
	
  render() {
    return (
    		
    		// remplazar...
    	<div class="container">
          <div class="panel panel-default">
             <div class="panel-heading">
                <h3 class="panel-title">
                  CONTACTS LIST
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Contact</Link></h4>
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.contacts.map(c =>
                      <tr>
                        <td><Link to={`/show/${c.id}`}>{c.name}</Link></td>
                        <td>{c.address}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    		  	
    		
    		
    		/*
			 * <div className="App"> <header className="App-header"> <img
			 * src={logo} className="App-logo" alt="logo" /> <p> Edit <code>src/App.js</code>
			 * and save to reload. </p> <a className="App-link"
			 * href="https://reactjs.org" target="_blank" rel="noopener
			 * noreferrer" > Learn React </a> </header> </div>
			 */
    );
  }
}

export default App;
