import React, { Component } from 'react'
import Nav from '../Nav/Nav'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    componentDidMount(){
        
    }
    render() {
        let mappedPosts = this.state.map(post => {
            return(
                <div>

                </div>
            )
        })
        return (
            <div>
                <Nav />
                <p>
                    DASHBOARD COMPONENT
                </p>
                <div>
                    <input />
                    <button>Search</button>
                    <button>Reset</button>
                    <input onClick={() => this.setState({ userposts: !this.state.userposts})}type='checkbox' defaultChecked/>
                    <label>My Posts</label>
                </div> 
            </div>
        )
    }
}