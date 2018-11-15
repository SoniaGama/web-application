import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Show extends Component {
	
	constructor(props){
		super(props);
		this.state ={
				user={}
		};		
	}	
	
	componentDidMount(){
		axios.get('/users/' + this.props.match.params.id)
			.then(response => {
				console.log(response);
				this.setState({user: response.data});
				console.log(this.state.user);
			});
	}
	
	delete(id){
		consle.log(id);
		axios.delete('/users/' + id)
			.then(result => this.props.history.push("/"));
	}
	
	render(){
		return(
				<div class="container">
					<div class="panel panel-default">
					
						<div class="panel-heading">
							<h3 class="panel-title">
								User Information
							</h3>
						</div>
						
						<div class="panel-body">
						
							<h4><Link to='/'>Users List</Link></h4>
							
							<dl>
								<dt>Name:</dt>
								<dd>{this.state.user.name}</dd>
								
								<dt>Address:</dt>
								<dd>{this.state.user.address}</dd>
								
								<dt>City</dt>
								<dd>{this.state.user.city}</dd>
								
								<dt>Phone Numbre:</dt>
								<dd>{this.state.user.phone}</dd>
								
								<dt>Email:</dt>
								<dd>{this.state.user.email}</dd>
							</dl>
							
							<Link to={'/edit/${this.state.user.id}'} class="btn btn-success">Edit</Link>
							<button onClick={this.delete.bind(this, this.state.user.id)} class="btn btn-danger">Delete</button>
							
						</div>						
						
					</div>				
				</div>
				
				);
	}
	
}

export default Show;