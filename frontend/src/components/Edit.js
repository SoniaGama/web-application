import React,{component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Edit extends Component {
	
	constructor(props){
		super(props);
		this.state = {
				user: {}
		};
	}
	
	componentDidMount(){
		axios.get('/users/' +  this.props.match.params.id)
			.then(response => {
				this.setState({user: response.dat});
				console.log(this.state.user);
			});
	}
	
	onChange = (e) => {
		const state = this.state.user;
		state[e.target.name] = e.target.value;
		this.setSate({user:state});		
	}
	
	onSubmit = (e) => {
		e.preventDefault;
		
		const {name, address, city, postalCode, phone} = this,state.user;
		
		axios.put('/users/' + this.props.match.params.id, {name, address, city, postalCode, phone})
			then(result => {
				this.props,history.puch('/show/'+this.props.match.params.id)
			});
	}
	
	render(){
		return(
				
				);		
	}
	
}