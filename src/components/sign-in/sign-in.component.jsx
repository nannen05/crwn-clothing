import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render () {
        const { email, password } = this.state

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name="email" 
                        type="email" 
                        label="Email"
                        value={email} 
                        handleChange={this.handleChange}
                        required/>
                    
                    <FormInput
                        name="password" 
                        type="password" 
                        label="Password"
                        value={password} 
                        handleChange={this.handleChange}
                        required/>

                    <CustomButton type="submit"> Sign In </CustomButton>

                    <CustomButton onClick={signInWithGoogle}> Sign In With Google </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn