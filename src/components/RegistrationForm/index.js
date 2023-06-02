// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameFailure: false,
    isLastNameFailure: false,
    isFormSubmitted: true,
  }

  userFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  userLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValid = this.isValidFirstName()

    this.setState({isFirstNameFailure: !isValid})
  }

  firstName = () => {
    const {firstName, isFirstNameFailure} = this.state
    const errorField = isFirstNameFailure ? 'input error-field' : 'input'
    return (
      <>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={this.userFirstName}
          onBlur={this.onBlurFirstName}
          id="firstName"
          className={errorField}
        />
      </>
    )
  }

  onBlurLastName = () => {
    const isValid = this.isValidLastName()

    this.setState({isLastNameFailure: !isValid})
  }

  lastName = () => {
    const {lastName, isLastNameFailure} = this.state
    const errorField = isLastNameFailure ? 'error-field' : ''
    return (
      <>
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={this.userLastName}
          onBlur={this.onBlurLastName}
          id="lastName"
          className={`input ${errorField}`}
        />
      </>
    )
  }

  isValidFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  isValidLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.isValidFirstName()
    const isValidLastName = this.isValidLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: false})
    } else {
      this.setState({
        isFirstNameFailure: !isValidFirstName,
        isLastNameFailure: !isValidLastName,
        isFormSubmitted: true,
      })
    }
  }

  renderForm = () => {
    const {isFirstNameFailure, isLastNameFailure} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
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
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prev => ({
      isFormSubmitted: !prev.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmitSuccessForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    console.log(isFormSubmitted)
    return (
      <div className="registration-form-container">
        <h1 className="title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted ? this.renderForm() : this.renderSubmitSuccessForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
