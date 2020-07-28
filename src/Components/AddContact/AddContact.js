import React from 'react';
import {Redirect} from 'react-router-dom';
import './AddContact.css';

class AddContact extends React.Component{
    state = {
        name: null,
        address: null,
        telNumber: null,
        email: null,
        avatar: null,
        gender: null,
        isRedirect: false
    };
    getName = event => {
        this.setState({
            name: event.target.value
        })
    }
    getAddress = event => {
        this.setState({
            address: event.target.value
        })
    }
    getTelNumber = event => {
        this.setState({
            telNumber: event.target.value
        })
    }

    getEmail = event => {
        this.setState({
            email: event.target.value
        })
    }
    
    getAvatar = event => {
        this.setState({
            avatar: event.target.value
        })
    }
    getGender = event => {
        this.setState({
            gender: event.target.value
        })
    }

    onSendData = (event) => {
        event.preventDefault();
        const {name,address,telNumber, email, avatar, gender} = this.state;
        this.props.onAddContact(name, address, telNumber, email, avatar, gender);
        this.setState({
            isRedirect: true
        })
    }
    render(){
        if(this.state.isRedirect){
            return <Redirect to='/' />
        }
        return(
            <div>
                <form onSubmit={this.onSendData}>
                    <input
                     type='text'
                     placeholder='Name'
                     className='form-control'
                     onChange={this.getName} />

                    <input 
                    type='text' 
                    placeholder='Address' 
                    className='form-control' 
                    onChange={this.getAddress}/>
                  
                    <input 
                    type='number' 
                    min = '1'
                    max = '99'
                    placeholder='Avatar' 
                    className='form-control' 
                    onChange={this.getAvatar}/>
                    
                    <input 
                    type='text' 
                    placeholder='Tel number' 
                    className='form-control' 
                    onChange={this.getTelNumber}/>

                    <input 
                    type='text' 
                    placeholder='email' 
                    className='form-control' 
                    onChange={this.getEmail}/>

                    <input 
                    type='radio' 
                    name='gender'
                    value='men'
                    id='gender_man' 
                    onChange={this.getGender}/>

                   <label htmlFor="gender_man" className="for-check-label">
                       Men
                   </label>

                    <input 
                    type='radio' 
                    name='gender'
                    value='women'
                    id='gender_man'
                    onChange={this.getGender}/>

                   <label htmlFor="gender_man" className="for-check-label">
                       Women
                   </label>
                   <button className="btn btn-success" type='submit'>Add new contact</button>
                </form>
            </div>
        )
    }

}
export default AddContact;