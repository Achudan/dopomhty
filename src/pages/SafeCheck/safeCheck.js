import React, { Component } from 'react';
import { Name } from './safecheck.page';
import './safecheck.style.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class SafeCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '',lastName: '', phone: '' , e_mail: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({e_mail: event.target.value});
    }

    handleSubmit() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: this.state.firstName, lastName: this.state.lastName,phone: this.state.phone,e_mail: this.state.e_mail })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    render() {
    return (
        <div class="qfc-container">
        <h4>Safe check</h4>
        <form onSubmit={this.handleSubmit}>
            <div>
                <div>
                    <input placeholder="First Name" type="text" value = {this.state.firstName} onChange={this.handleChange}/>
                </div>
                <div>
                    <input placeholder="Last Name" type="text"   value = {this.state.lastName} onChange={this.handleLastNameChange}/>
                </div>
                <div>
                    <input placeholder="Telephone Number" type="tel"/>
                </div>
                <div>
                    <input placeholder="Email Address" type="email"/>
                </div>
				
                
                <div>
                    <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
                </div>
            </div>
        </form>
    </div>
    );
  }
}
 
export default SafeCheck ;