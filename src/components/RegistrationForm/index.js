// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameFailure: false,
    isLastNameFailure: false,
    isFormSubmitted: false,
  }

  userFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  userLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({isFirstNameFailure: true})
    } else {
      this.setState({
        isFirstNameFailure: false,
      })
    }
  }

  firstName = () => {
    const {firstName} = this.state
    return (
      <>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={this.userFirstName()}
          onBlur={this.onBlurFirstName()}
          id="firstName"
        />
      </>
    )
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({isLastNameFailure: true})
    } else {
      this.setState({isLastNameFailure: false})
    }
  }

  LastName = () => {
    const {lastName} = this.state
    return (
      <>
        <label htmlFor="lastName">LAST NAME</label>

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={this.userFirstName()}
          onBlur={this.onBlurLastName()}
          id="lastName"
        />
      </>
    )
  }

  onSubmitForm = event => {
    const {isFirstNameFailure, isLastNameFailure} = this.state
    event.preventDefault()
    if (isFirstNameFailure && isLastNameFailure) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        isFirstNameFailure: false,
        isLastNameFailure: false,
      })
    }
  }

  //   renderForm = () => {
  //     const {} = this.state
  //     return (

  //     )
  //   }

  render() {
    const {isFormSubmitted, isFirstNameFailure, isLastNameFailure} = this.state
    console.log(isFormSubmitted)
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Registration</h1>
          <form className="form-container" onSubmit={this.onSubmitForm()}>
            <div className="input-container">
              {this.firstName()}
              {isFirstNameFailure && <p className="err-msg">*Required</p>}
            </div>

            <div className="input-container">
              {this.lastName()}
              {isLastNameFailure && <p className="err-msg">*Required</p>}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
        {/* {isFormSubmitted ? this.renderForm() : null} */}
      </div>
    )
  }
}

export default RegistrationForm
