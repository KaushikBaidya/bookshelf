import React from 'react'
import SignIn from '../../components/Sign-In/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './signIn-SignUp.styles.scss'

const SignInSignUpPage = () => {
  return (
    <div className="signIn-signUp">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUpPage
