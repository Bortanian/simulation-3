import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
        this.registerUser = this.registerUser.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }
    handleUsernameInput(val) {
        this.setState({
            usernameInput: val
        })
    }
    handlePasswordInput(val) {
        this.setState({
            passwordInput: val
        })
    }
    registerUser() {
        axios.post('/api/auth/register', {
            username: this.state.usernameInput,
            password: this.state.passwordInput,
            profile_pic: `https://robohash.org/${this.state.usernameInput}.png`
        }).then(res => {
            let { id, username, profile_pic } = res.data[0]
            this.props.updateUser(id, username, profile_pic)
        })
    }
    loginUser() {
        axios.post('/api/auth/login', {
            username: this.state.usernameInput,
            password: this.state.passwordInput
        }).then(res => {
            let { id, username, profile_pic } = res.data[0]
            this.props.updateUser(id, username, profile_pic)
        })
    }
    render() {
        return (
            <div>
                <p>
                    AUTH COMPONENT
                </p>
                <div>
                    <p>USERNAME</p>
                    <input onChange={(e) => this.handleUsernameInput(e.target.value)} />
                    <p>PASSWORD</p>
                    <input onChange={(e) => this.handlePasswordInput(e.target.value)} />
                    <br />
                    <Link to='/dashboard'>
                        <button onClick={() => this.loginUser()}>LOGIN</button>
                    </Link>
                    <Link to='/dashboard'>
                        <button onClick={() => this.registerUser()}>REGISTER</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateUser })(Auth)