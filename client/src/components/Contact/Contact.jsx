import React, { Component } from 'react'
import axios from "axios";
import './Contact.scss'

const API_PATH = 'https://localhost:5000/ContactUs/api/contact'

export default class Contact extends Component {
    constructor(props) {
        super(props);
           this.state = {
              fname: "",
              lname: "",
              email: "",
              message: "",
              mailSent: false,
              error: null
            }
    }
    handleFormSubmit = e => {
        e.preventDefault();
        axios({
           method: 'post',
           url: `${API_PATH}`,
           headers: { 'content-type': 'application/json' },
           data: this.state
         })
         .then(result => {
            this.setState({
              mailSent: result.data.sent
          })
         })
         .catch(error => this.setState({ error: error.message }));
      } 
    render() {
        return (
            <div className="contact-main-container">
                <div className="form">
                    <p className="contact-heading">Contact Us</p>
                    <div>
                        <form action="/action_page.php">
                            <label>First Name</label>
                            <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
                            <label>Last Name</label>
                            <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>
                            <label>Email</label> 
                            <input type="email"id="email"name="email"placeholder="Your email"/>
                            <label>Subject</label>
                            <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
                            <input type="submit"value="Submit"/>
                        </form>
                    </div>
                </div>
                <div className="success-message">
                {this.state.mailSent &&
                    <div>Thank you for contcting us.</div>
                }
                </div> 
            </div>
            
        )
    }
}
